import React, {useState} from "react";
import {Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, Text} from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons'

export const LoginPage = () => {

    const [email, setEmail] = useState("");
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
                padding={"15px"}
                borderRadius={"10px"}
                backgroundColor={"gray"}
                width={"400px"}
            >
                <Text fontSize={20} fontWeight={700} marginBottom={"10px"}>Login</Text>
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
                >Login</Button>
            </Box>
        </Box>
    )
}