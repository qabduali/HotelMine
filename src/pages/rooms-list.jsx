import React, {useEffect, useState} from "react";
import {Box, Input, Text} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import UserService from "../services/user.service";
import {Button} from "react-bootstrap";

const testData = []

export const RoomsList = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [filteredRooms, setFilteredRooms] = useState(testData);
    const [roomIdFilter, setRoomIdFilter] = useState("");
    const [floorFilter, setFloorFilter] = useState("");
    const [roomFilter, setRoomFilter] = useState("");
    const [occupancyFilter, setOccupancyFilter] = useState('');
    const [roomTypeIdFilter, setRoomTypeIdFilter]= useState('');
    const [statusFilter, setStatusFilter]= useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [data, setData]= useState(null);


    useEffect(()=>{
        UserService.getHotelById(props.match.params.id).then(
            response => {
                setData(response.data);
                let test1Data = response.data.roomTypes.map(({rooms, type}) =>{
                    return {rooms:rooms,roomType:type}
                });
                for (let i = 0; i < test1Data.length; i++){

                    for(let j =0;j<test1Data[i].rooms.length;j++){
                        let b= test1Data[i].roomType==='Double'?true:false;
                        testData.push({
                            room_id: test1Data[i].rooms[j].room_id,
                            room_type_id:b,
                            room_number: test1Data[i].rooms[j].room_number,
                            floor: test1Data[i].rooms[j].floor,
                            cleaned:test1Data[i].rooms[j].cleaned,
                            occupancy: test1Data[i].rooms[j].occupancy
                        });
                    }
                }
                setFilteredRooms(testData)
            },
            error => {
                console.log(error);
            });
    },[])

    useEffect(() => {
        let newFilteredRooms = testData.filter((room) => {
            if (roomIdFilter !== "" ){
                if (room.room_id.toString()===roomIdFilter){
                    return true;
                }
            }else{
                return true;
            }
            
        })
        newFilteredRooms = newFilteredRooms.filter((room) => {
            if (roomTypeIdFilter !== ''){
                if (roomTypeIdFilter==='SINGLE'){
                    return !room.room_type_id;
                }
                if (roomTypeIdFilter==='DOUBLE'){
                    return room.room_type_id;
                }
                return true
            }else{
                return true;
            }

        })
        newFilteredRooms = newFilteredRooms.filter((room) => {
            if (floorFilter !== ""){
                if (room.floor.toString()===floorFilter){
                    return true;
                }
            }else{
                return true;
            }
            
        })

        newFilteredRooms = newFilteredRooms.filter((room) => {
            if (roomFilter !== ""){
                if (room.room_number.toString()===roomFilter){
                    return true;
                }
            }else{
                return true;
            }
            
        })

        newFilteredRooms = newFilteredRooms.filter((room) => {
            if (occupancyFilter !== ''){
                if (occupancyFilter==='FREE'){
                    return !room.occupancy;
                }
                if (occupancyFilter==='OCCUPIED'){
                    return room.occupancy;
                }
                return true
            }else{
                return true;
            }
            
        })

        newFilteredRooms = newFilteredRooms.filter((room) => {
            if (statusFilter !== ''){
                if (statusFilter === 'CLEANED'){
                    return room.cleaned;
                }
                if (statusFilter === 'NOT_CLEANED'){
                    return !room.cleaned;
                }
                return true
            }else{
                return true;
            }
            
        })
        
        setFilteredRooms(newFilteredRooms)
    }, [roomIdFilter, floorFilter, roomFilter,occupancyFilter,roomTypeIdFilter,statusFilter])

  return (
        <Box
            backgroundColor={"#dfe6e9"}
            // height={"calc(100vh - 60px)"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Booking</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box
                            marginBottom={"10px"}
                        >
                            <Text>From</Text>
                            <Box
                                width={"100%"}
                                height={"40px"}
                            >
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {setStartDate(date)}}
                                    placeholderText="Select date"
                                    customInput={<CustomDateInput />}
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Text>To</Text>
                            <Box>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    placeholderText="Select date"
                                    customInput={<CustomDateInput />}
                                />
                            </Box>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Book</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Box
                marginTop={"34px"}
                height={"70px"}
                width={"calc(100% - 25px)"}
                backgroundColor={"#b2bec3"}
                borderRadius={"10px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
            >
                <Box
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    paddingLeft={"10px"}
                    paddingRight={"10px"}
                    paddingTop={"5px"}
                    paddingBottom={"5px"}
                    marginBottom={"10px"}
                    borderRadius={"7px"}
                    alignItems={"center"}
                >
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Input
                            placeholder={"Room Id"}
                            width={"90%"}
                            color={"black"}
                            borderColor={"black"}
                            value = {roomIdFilter}
                            onChange = {(e) => setRoomIdFilter(e.target.value)}
                        />
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Input
                            placeholder={"Floor"}
                            width={"90%"}
                            color={"black"}
                            borderColor={"black"}
                            value = {floorFilter}
                            onChange = {(e) => setFloorFilter(e.target.value)}
                        />
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Input
                            placeholder={"Room #"}
                            width={"90%"}
                            color={"black"}
                            borderColor={"black"}
                            value = {roomFilter}
                            onChange = {(e) => setRoomFilter(e.target.value)}
                        />
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Select
                            width={"90%"}
                            onChange = {(e) => setRoomTypeIdFilter(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Room Type</option>
                            <option value='ALL'>All</option>
                            <option value='SINGLE'>Single</option>
                            <option value='DOUBLE'>Double</option>

                        </Select>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Select
                            width={"90%"}
                            onChange = {(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Status</option>
                            <option value='ALL'>All</option>
                            <option value='CLEANED'>Cleaned</option>
                            <option value='NOT_CLEANED'>Not Cleaned</option>

                        </Select>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Select
                            width={"90%"}
                            onChange = {(e) => setOccupancyFilter(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Occupancy</option>
                            <option value='ALL'>All</option>
                            <option value='OCCUPIED'>Occupied</option>
                            <option value='FREE'>Free</option>
                        </Select>
                    </Box>
                </Box>
            </Box>
            <Box
                marginTop={"14px"}
                width={"calc(100% - 25px)"}
            >
                <Box
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    paddingLeft={"10px"}
                    paddingRight={"10px"}
                    paddingTop={"5px"}
                    paddingBottom={"5px"}
                    marginBottom={"10px"}
                    backgroundColor={"#636E72"}
                    borderRadius={"7px"}
                >
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >
                            Room id
                        </Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Floor</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Number</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Room Type</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Status</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Occupancy</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Book</Text>
                    </Box>
                </Box>
                {
                    filteredRooms.map((room) => {
                        return (
                            <Box
                                key={room.room_id}
                                display={"flex"}
                                flexDirection={"row"}
                                borderRadius={"7px"}
                                paddingLeft={"10px"}
                                paddingRight={"10px"}
                                marginBottom={"5px"}
                            >
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.room_id}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.floor}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.room_number}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.room_type_id ? "Double":"Single"}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.cleaned ? "Cleaned" : "Not cleaned"}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.occupancy ? "Occupied" : "Free"}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Button
                                        backgroundColor={"green"}
                                        height={"32px"}
                                        width={"100%"}
                                        onClick={() => {
                                            onOpen();
                                        }}
                                    >
                                        Book
                                    </Button>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}



const CustomDateInput = ({value, onClick}) => {
    return (
        <Box
            onClick={onClick}
            width={"100%"}
            height={"100%"}
            border={"1px solid gray"}
            borderRadius={"8px"}
            padding={"7px"}
        >
            {value}
        </Box>
    )
}