import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { selectUser, login, logout } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { auth } from "./firebase";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set up a listener for changes in the authentication state using Firebase's onAuthStateChanged
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // If a user is authenticated, dispatch the login action with user information to the Redux store
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // If no user is authenticated, dispatch the logout action to the Redux store
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header></Header>

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
