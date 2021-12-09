import React, { Component } from "react";
import { Switch, Route, Link,BrowserRouter as Router,
  Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/navbar/Navbar";
import {RoomsList} from "./pages/rooms-list";
import {UserProfile} from "./pages/user-profile";
import {Registration} from "./pages/registration";
import {LoginPage} from "./pages/login.jsx";
import {ManagerPage} from "./pages/manager-page";
import Footer from './pages/MainPage/components/Footer';


// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <Navbar></Navbar>
        

        <div>
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user/:id" component={RoomsList}/>
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
          <Footer></Footer>
        </div>

      </div>
    );
  }
}

export default App;



/*
import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {RoomsList} from "./pages/rooms-list";
import {UserProfile} from "./pages/user-profile";
import {Registration} from "./pages/registration";
import {LoginPage} from "./pages/login.jsx";
import {ManagerPage} from "./pages/manager-page";
import Footer from './pages/MainPage/components/Footer';
function App() {
  return (
      <Router>
          <ChakraProvider>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route path={"/dashboard"}>
                        <Dashboard/>
                    </Route>
                    <Route path={'/booking/:id'}>
                        <RoomsList />
                    </Route>
                    <Route path={"/booking"}>
                        <Search/>
                    </Route>
                    <Route path={"/profile"}>
                        <UserProfile/>
                    </Route>
                    <Route path={"/registration"}>
                        <Registration/>
                    </Route>
                    <Route path={"/login"}>
                        <LoginPage/>
                    </Route>
                    <Route path={"/employees"}>
                        <ManagerPage/>
                    </Route>
                    <Route path={"/"}>
                        <Redirect
                            to={{
                                pathname: "/dashboard",
                            }}
                        />
                    </Route>
                    
                </Switch>
                <Footer></Footer>
            </div>
          </ChakraProvider>
      </Router>
  );
}

export default App;
*/