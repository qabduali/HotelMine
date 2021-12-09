import React, {Component, useEffect, useState} from "react";

import UserService from "../services/user.service";
import Manager from "../pages/Manager";


const BoardAdmin = () =>{
  const [data,setData] = useState([])

  useEffect(() => {
    UserService.getAdminBoard().then(
        response => {
          setData(response.data);
          console.log(response.data);
        },
        error => {
          console.log(error);
        })
  },[]);

    return <Manager data = {data}/>
}

export default BoardAdmin;