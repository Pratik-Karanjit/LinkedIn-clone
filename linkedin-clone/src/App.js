import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { selectUser, login, logout } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
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
        </div>
      )}
    </div>
  );
}

export default App;
