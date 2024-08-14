"user client";
import { useState } from "react";
import { UserType } from "./usertype";

const users = [
  {
    email: "haider@gmail.com",
    password: "123456",
    userName: "Haider Ali",
    hobbies: ["swimming", "gardening"],
    post: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 10,
      },
      {
        content:
          "ipsum Lorem  dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 15,
      },
    ],
  },
  {
    email: "jamaliumair957@gmail.com",
    password: "123456",
    userName: "Umair Jamali",
    hobbies: ["gym", "video games"],
    post: [
      {
        content:
          "special Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 100,
      },
      {
        content:
          "the quick ipsum Lorem  dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 1500,
      },
    ],
  },
];


type UserData = {
  setAuth: (status: boolean) => void
  setUser: (user: UserType | null) => void
}

export default function Login({setAuth, setUser}: UserData) {
  
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const changeHandler = () => {
    let [userFound] = users.filter( (user) => (
       user.email === userEmail && user.password === userPass
    ));
    
  if (userFound) {
    setAuth(true)
    setUser(userFound)
  }
  }




  return (
      <>
      <h1>Login Page:</h1>
          <label htmlFor="username">User Name:
          <input type="email" value={userEmail} id="username" onChange={(ev) => setUserEmail(ev.target.value)}/>
          </label>
          <br />
          <label htmlFor="pass">Password:
          <input type="password" value={userPass} id="pass" onChange={(ev) => setUserPass(ev.target.value)}/>
          </label>
          <br />
          <button onClick={changeHandler}>Login</button>
      </>
  )
}