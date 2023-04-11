import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Feed from "./components/Feed";
import Login from "./components/Login";
import "./App.css";
import {  useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
function App() {
 const user = useSelector(selectUser);
 const dispatch=useDispatch();
  
 onAuthStateChanged(auth, (user) => {
  if (user) {
   dispatch(login({
    name:user.name,
    email:user.email,
   }))
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
