import React, {useEffect, useState} from 'react';
import {Box, Image, Text} from "@chakra-ui/react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

// const userInfo = {
//     guest_id: 3234,
//     guest_name: "sdfsdf",
//     guest_surname: "dsfsdfsdf",
//     id_type: "324234",
//     guest_mobile_number: "848345345",
//     booking_id: 234,
// }
//
// const bookings = [
//     {
//         booking_id: 12,
//         guests_num: 22,
//         from_date: "18.20.21",
//         to_date: "30.40.30",
//         room_id: "123",
//         bill: 123,
//     },
//     {
//         booking_id: 12,
//         guests_num: 22,
//         from_date: "18.20.21",
//         to_date: "30.40.30",
//         room_id: "123",
//         bill: 123,
//     },
//     {
//         booking_id: 12,
//         guests_num: 22,
//         from_date: "18.20.21",
//         to_date: "30.40.30",
//         room_id: "123",
//         bill: 123,
//     }
// ]

export const UserProfile = () => {

    const [user, setUser] = useState(null);

    let bookings;
    let profile;
    if(user && user.guests[0]){
        profile = {
            name: user.guests[0].name,
            surname: user.guests[0].surname,
            id_type: user.guests[0].id_type,
            id_number:user.guests[0].id_number,
            mobile_number: user.guests[0].mobile_number,
            home_number: user.guests[0].home_number,
            address: user.guests[0].address,
        }
        bookings = user.guests[0].bookings;
    }


    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();

        UserService.getProfileBoard(currentUser.id).then(
            response => {
                setUser(response.data);
                console.log(response.data)
            },
            error => {
                console.log(error);
            });
    }, [])

    return (
        <Box
            display={"flex"}
            flexDirection={"row"}
            height={"calc(100vh - 70px)"}
        >
            {profile && (
                <>
                    <Box
                        marginLeft={"20px"}
                        marginTop={"20px"}
                        backgroundColor={"#DCDDDD"}
                        padding={"10px"}
                        borderRadius={"9px"}
                        // height={"100%"}
                        marginBottom={"20px"}
                        width={"320px"}
                    >
                        <Text fontSize={25} fontWeight={800} marginBottom={"15px"}>User information</Text>
                        <Image
                            src={"https://html5css.ru/howto/img_avatar.png"}
                            borderRadius={"8px"}
                            marginBottom={"15px"}
                            width={"100px"}
                        />
                        <Box
                            display={"flex"}
                            flexDirection={"row"}
                            marginBottom={"7px"}
                            fontSize={18}
                        >
                            <Text>{`${profile.id_type}: `}</Text>
                            <Text fontWeight={700}>{profile.id_number}</Text>
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"row"}
                            marginBottom={"7px"}
                            fontSize={18}
                        >
                            <Text>Name: </Text>
                            <Text fontWeight={700}>{profile.name}</Text>
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"row"}
                            marginBottom={"7px"}
                            fontSize={18}
                        >
                            <Text>Surname: </Text>
                            <Text fontWeight={700}>{profile.surname}</Text>
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"row"}
                            fontSize={18}
                        >
                            <Text>Mobile phone number: </Text>
                            <Text fontWeight={700}>{profile.mobile_number}</Text>
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"row"}
                            fontSize={18}
                        >
                            <Text>Home number: </Text>
                            <Text fontWeight={700}>{profile.home_number}</Text>
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"row"}
                            fontSize={18}
                        >
                            <Text>Address: </Text>
                            <Text fontWeight={700}>{profile.address}</Text>
                        </Box>
                    </Box>
                    <Box
                        margin={"20px"}
                        backgroundColor={"#DCDDDD"}
                        borderRadius={"9px"}
                        padding={"10px"}
                        flexGrow={1}
                    >
                        <Text fontSize={25} marginBottom={"15px"} fontWeight={800}>History</Text>
                        <Box
                            w={"100%"}
                            display={"flex"}
                            flexDirection={"row"}
                            paddingLeft={"10px"}
                            paddingRight={"10px"}
                            paddingTop={"5px"}
                            paddingBottom={"5px"}
                            marginBottom={"10px"}
                            backgroundColor={"#D3D4D5"}
                            borderRadius={"7px"}
                        >
                            <Box
                                flex={"1 1 0px"}
                            >
                                <Text
                                    color={"black"}
                                >
                                    Booking id
                                </Text>
                            </Box>
                            <Box
                                flex={"1 1 0px"}
                            >
                                <Text
                                    color={"black"}
                                >From date</Text>
                            </Box>
                            <Box
                                flex={"1 1 0px"}
                            >
                                <Text
                                    color={"black"}
                                >To date</Text>
                            </Box>
                            <Box
                                flex={"1 1 0px"}
                            >
                                <Text
                                    color={"black"}
                                >Guest num</Text>
                            </Box>
                            <Box
                                flex={"1 1 0px"}
                            >
                                <Text
                                    color={"black"}
                                >Room id</Text>
                            </Box>
                            <Box
                                flex={"1 1 0px"}
                            >
                                <Text
                                    color={"black"}
                                >Bill</Text>
                            </Box>
                        </Box>

                        {
                            bookings.map((booking) => {
                                return (
                                    <Box
                                        w={"100%"}
                                        display={"flex"}
                                        flexDirection={"row"}
                                        alignItems={"center"}
                                        paddingLeft={"10px"}
                                        paddingRight={"10px"}
                                        borderRadius={"7px"}
                                        marginBottom={"10px"}
                                    >
                                        <Box
                                            flex={"1 1 0px"}
                                        >
                                            <Text
                                                color={"#336e7b"}
                                            >{booking.booking_id}</Text>
                                        </Box>
                                        <Box
                                            flex={"1 1 0px"}
                                        >
                                            <Text
                                                color={"#336e7b"}
                                            >{booking.from_date}</Text>
                                        </Box>
                                        <Box
                                            flex={"1 1 0px"}
                                        >
                                            <Text
                                                color={"#336e7b"}
                                            >{booking.to_date}</Text>
                                        </Box>
                                        <Box
                                            flex={"1 1 0px"}
                                        >
                                            <Text
                                                color={"#336e7b"}
                                            >{booking.guests_num}</Text>
                                        </Box>
                                        <Box
                                            flex={"1 1 0px"}
                                        >
                                            <Text
                                                color={"#336e7b"}
                                            >{booking.room_id}</Text>
                                        </Box>
                                        <Box
                                            flex={"1 1 0px"}
                                        >
                                            <Text
                                                color={"#336e7b"}
                                            >{booking.bill}</Text>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </>
            )}
        </Box>
    )
}