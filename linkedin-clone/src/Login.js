import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import linkedinPhoto from "../src/photos/linkedinn.png";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    // Use Firebase authentication to create a new user with email and password
    auth
      .createUserWithEmailAndPassword(email, password)

      // Once the user is created, update their profile information (displayName and photoUrl)
      //DisplayName and photoUrl are the variables from firebase
      // userAuth contains information about the newly created user
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })

          // Dispatch the login action with user information to update the Redux store
          //email, uid, displayName and photoUrl are variables from firebase and we are getting the email and uid from userAuth
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    // Use Firebase authentication to sign in a user with email and password
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={linkedinPhoto} alt="linkedin Photo" />

      <form>
        <input
          //By using the value attribute in this way, you're ensuring that the input field always reflects the current state.
          value={name}
          //OnChange event handler is triggered whenever the user types or changes the content of the input field and
          // captures the value entered by the user (e.target.value) and updates the name state using the setName function.
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name(required if registering)"
          type="text"
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
