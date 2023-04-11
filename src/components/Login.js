import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import "./css/login.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";


export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [picURL, SetPicURL] = useState("");
  const dispatch = useDispatch();

  const register = async () => {
    if (!name) {
      return alert("Please enter a full name");
    }

   
    const userAuth = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userAuth.user, {
      displayName: name,
      picURL: picURL,
    })

   
    dispatch(login(
      {
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: name,
        photoUrl: picURL,
      }
    ))

    .catch((error) => {
      const errorMessage = error.message;
      console.log( errorMessage);
      // ..
    });

   
  };
  const loginToApp = async(e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userAuth) => {
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        photoUrl:userAuth.user.photoUrl,
      }));
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  };

  return (
    <div className="login">
      <img
        className="login__img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Full Name (Required if registering)"
        />
        <input
          onChange={(e) => {
            SetPicURL(e.target.value);
          }}
          value={picURL}
          type="text"
          placeholder="Profile Pic URL (Optional)"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a membar?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}
