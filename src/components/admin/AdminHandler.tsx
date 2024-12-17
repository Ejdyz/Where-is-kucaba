"use client"
import { useState } from "react";
import PositionChanger from "./PositionChanger";
import Login from "./Login";

const AdminHandler = ({isHere} :{isHere:boolean}) => {
  const [isLogged, setIsLogged] = useState(false);

  if(isLogged) {
    return (
      <PositionChanger isHere={isHere} />
    );
  }else{
    return (
      <Login setIsLogged={setIsLogged} />
    );
  }

}
 
export default AdminHandler;