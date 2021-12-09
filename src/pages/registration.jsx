import React, {useState} from "react";
import {Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, Text} from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons'

export const Registration = () => {

    // <label>First Name* : </label><input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name" required/><br/>
    // <label>Last Name* : </label><input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name" required/><br/>
    // <label>Email* : </label><input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email" required/><br/>
    // <label>Phone Number* : </label><input type="tel" value={this.state.phoneNumber} onChange={this.phonehandler} placeholder="Phone Number" required/><br/>
    // <label>Password* : </label><input type="password" value={this.state.password} onChange={this.passwordhandler} pattern = "[A-Za-z\d]{8,}" placeholder="Password" required/><br/>

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const submitForm = () => {

    }

    return (
        <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            height={"calc(100vh - 70px)"}
        >
            <Box
                padding={"10px"}
                borderRadius={"10px"}
                backgroundColor={"gray"}
                width={"400px"}
            >
                <Text fontSize={20} fontWeight={700} marginBottom={"10px"}>Registration</Text>
                <Box
                    marginBottom={"12px"}
                >
                    <Text>
                        First name
                    </Text>
                    <Input placeholder={"first name"} height={"32px"} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Box>
                <Box
                    marginBottom={"12px"}
                >
                    <Text>
                        Last name
                    </Text>
                    <Input placeholder={"last name"} height={"32px"} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Box>
                <Box
                    marginBottom={"12px"}
                >
                    <Text>
                        Phone number
                    </Text>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Phone number' value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                    </InputGroup>
                </Box>
                <Box
                    marginBottom={"12px"}
                >
                    <Text>
                        email
                    </Text>
                    <Input placeholder={"email"} height={"32px"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Box>
                <Box
                    marginBottom={"12px"}
                >
                    <Text>
                        Password
                    </Text>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Button
                    width={"100%"}
                    onClick={() => {
                        submitForm()
                    }}
                >Register</Button>
            </Box>
        </Box>
    )
}