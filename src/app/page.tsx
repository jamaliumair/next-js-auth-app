"use client";

import { useState } from "react";
import Login from "./login";
import Usertimeline from "./usertimeline";
import { UserType }  from "./usertype";

export default function Home() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <>
    {
      userAuthenticated ?
      (
        <Usertimeline userData={user}/> 
      ): (
        <Login setAuth={setUserAuthenticated} setUser={setUser} />
      )
    }
    </>
  )

}