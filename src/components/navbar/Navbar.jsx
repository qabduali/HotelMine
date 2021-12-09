import React, { Component } from 'react';
import {Box, Flex, Image, Text, Button} from "@chakra-ui/react";
import {useHistory, Link, useLocation} from "react-router-dom";
import { render } from '@testing-library/react';
import AuthService from "./../../services/auth.service";
import EventBus from './../../common/EventBus';

class Navbar extends Component {

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
    

    
      render(){
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        //const history = useHistory();
        //const location = useLocation();
        //const token = "";
    return (
        <div style={{width: "100%", height: "65px"}}>
            <Flex
                width={"100%"}
                height={"70px"}
                alignItems={"center"}
                backgroundColor={"#1f2333"}
            >
                <Image src = {"https://s2.qwant.com/thumbr/0x380/4/f/747c10a6bdeb1ca13540152e81aabb4aad4cc68bf85be8fcb033fe8ee1c23f/q_letter_logo.png?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2068059%2Fscreenshots%2F4235024%2Fq_letter_logo.png&q=0&b=1&p=0&a=0"} radius="full" height='60px' width='80px'/>
                <Box marginX={"auto"} display={"flex"}>
                    <Link to={"/home"} className="nav-link">
                    <Text
                        color={"#59c2b8"}
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        _hover={{color: "#ffffff"}}
                        fontSize={"16px"}
                        fontWeight={500}
                        lineHeight={"65px"}
                        height={"65px"}
                        
                    >Home
                    </Text>
                    </Link>
                    {showModeratorBoard &&(
                    <Link to={"/mod"} className="nav-link">
                    <Text
                        color={"#59c2b8"}
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        _hover={{color: "#ffffff"}}
                        fontSize={"16px"}
                        fontWeight={500}
                        lineHeight={"65px"}
                        height={"63px"}
                        
                    >
                        Moderator Board
                    </Text>
                    </Link>)}
                    {showAdminBoard &&(
                    <Link to={"/admin"} className="nav-link">
                    <Text
                        color={"#59c2b8"}
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        _hover={{color: "#ffffff"}}
                        fontSize={"16px"}
                        fontWeight={500}
                        lineHeight={"65px"}
                        height={"63px"}
                        
                    >
                        Admin Board
                    </Text>
                    </Link>)}
                    {currentUser &&(
                    <Link to={"/user"} className="nav-link">
                    <Text
                        color={"#59c2b8"}
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        marginLeft={"12px"}
                        _hover={{color: "#ffffff"}}
                        fontSize={"16px"}
                        lineHeight={"65px"}
                        height={"65px"}
                        fontWeight={500}
                        
                    >
                        User
                    </Text>
                    </Link>)}
                    
                </Box>
                <Box marginLeft={"auto"} marginRight={"20px"}>
                    {currentUser ? (<Box
                                display={"flex"}
                                flexDirection={"row"}
                                alignItems={"center"}
                            >
                        <Link to={"/profile"} className="nav-link">
                    <Text
                        color={"#59c2b8"}
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        marginLeft={"12px"}
                        _hover={{color: "#ffffff"}}
                        fontSize={"16px"}
                        lineHeight={"65px"}
                        // height={"65px"}
                        fontWeight={500}
                        
                    >
                        Profile
                    </Text>
                    </Link>
                    <Text>
                                    or
                                </Text>
                    <Link to={"/login"} className="nav-link">

                        <Text
                            color={"#59c2b8"}
                            paddingLeft={"7px"}
                            paddingRight={"7px"}
                            marginLeft={"12px"}
                            _hover={{color: "#ffffff"}}
                            fontSize={"16px"}
                            lineHeight={"65px"}
                            // height={"65px"}
                            fontWeight={500}
                            onClick={this.logOut}
                        >
                            Log Out
                        </Text>
                                {/*<Button*/}
                                {/*    width={"auto"}*/}
                                {/*    marginRight={"9px"}*/}
                                {/*    h="35px"*/}
                                {/*    marginLeft="auto"*/}
                                {/*    background="#4267B2"*/}
                                {/*    borderRadius="8px"*/}
                                {/*    color="#FFFFFF"*/}
                                {/*    border={"1px solid #4267B2"}*/}
                                {/*    _hover={{ background: "#080e2c", color:"#59c2b8" }}*/}
                                {/*    _active={{ background: "#080e2c "}}*/}
                                {/*    onClick={this.logOut}*/}
                                {/*>*/}
                                {/*    Log Out*/}
                                {/*</Button>*/}
                                </Link>
                                </Box>):(<Box
                                display={"flex"}
                                flexDirection={"row"}
                                alignItems={"center"}
                            >
                                <Link to={"/login"} className="nav-link">
                                <Button
                                    width={"auto"}
                                    marginRight={"9px"}
                                    h="35px"
                                    marginLeft="auto"
                                    background="#4267B2"
                                    borderRadius="8px"
                                    color="#FFFFFF"
                                    border={"1px solid #4267B2"}
                                    _hover={{ background: "#080e2c", color:"#59c2b8" }}
                                    _active={{ background: "#080e2c "}}
                                    
                                >
                                    Log in
                                </Button>
                                </Link>
                                <Text>
                                    or
                                </Text>
                                <Link to={"/register"} className="nav-link">
                                <Button
                                    width={"auto"}
                                    h="35px"
                                    marginX="auto"
                                    marginLeft={"9px"}
                                    background="#4267B2"
                                    borderRadius="8px"
                                    color="#FFFFFF"
                                    border={"1px solid #4267B2"}
                                    _hover={{ background: "#080e2c", color:"#59c2b8" }}
                                    _active={{ background: "#080e2c"}}
                                    
                                >
                                    Register
                                </Button>
                                </Link>
                            </Box>)
                    }
                </Box>
            </Flex>
            {/*<Divider height={"1px"} backgroundColor={"#B2BEC3"}/>*/}
        </div>
    )};
}

export default Navbar