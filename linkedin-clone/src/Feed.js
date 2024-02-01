import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/Event";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { firebase } from "./firebase"; // Assuming firebase.js contains Firebase initialization
import { db } from "./firebase"; // Assuming db is the initialized Firestore instance

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("posts") //Retrieve posts from firebase collection
      .orderBy("timestamp", "desc") //Order the posts in descending order so that the latest posts are at the top

      //This sets up a real-time listener for changes in the "posts" collection.
      .onSnapshot((snapshot) =>
        setPosts(
          //mapping through the docs of firebase collection
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(), //All data for example name, description, message, photoUrl
          }))
        )
      );

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  //e.prevent default Stops page rendering when user posts
  const sendPost = (e) => {
    e.preventDefault();
    //Sending data to collection with server timestamp to match the time worldwide
    db.collection("posts").add({
      name: "Pratik Karanjit",
      description: "this is test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Clear the input field after posting
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              //If any input is done in the input field then take the value from it
              //We needed to do this as the setInput useState is initialized to '' in the beginning so without onChange we wouldn't be able to type anything
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/*Destructuring the id and data that we received from the useEffect above */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id} //Key uniquely identifies and only renders the newest post and not the entire posts again
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
