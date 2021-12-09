import React, {Fragment, useState} from "react";
import data from "../mock-data.json";
import {Box, Button, Input, Text} from "@chakra-ui/react";
import EditRow from "../components/EditRow";
import ReadOnlyRow from "../components/ReadOnlyRow";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Table} from 'react-bootstrap';
import '../css/Table.css';


export const ManagerPage = () => {
    const [contacts, setContacts] = useState(data);
    const [editContactId, setEditContactId] = useState(null);
    const [addEmployee,setAddemployee] = useState(false);
    const [addFormData, setAddFormData] = useState({
        /* "employee_id": "",*/
        "employee_name": "",
        "employee_surname": "",
        "hotel_id": "",
        "hours": "",
        "position": "",
        "salary": ""
    });

    const [editFormData, setEditFormData] = useState({
        "employee_name": "",
        "employee_surname": "",
        "hotel_id": "",
        "hours": "",
        "position": "",
        "salary": ""
    })



    const handleAddFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        console.log(fieldValue);
        console.log(newFormData);
        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            employee_name: addFormData.employee_name,
            employee_surname: addFormData.employee_surname,
            hotel_id: addFormData.hotel_id,
            hours: addFormData.hours,
            position: addFormData.position,
            salary: addFormData.salary
        }

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            employee_name: editFormData.employee_name,
            employee_surname: editFormData.employee_surname,
            hotel_id: editFormData.hotel_id,
            hours: editFormData.hours,
            position: editFormData.position,
            salary: editFormData.salary
        }

        const newContacts = [...contacts];

        const id = contacts.findIndex((contact) => contact.employee_id === editContactId);

        newContacts[id] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    }

    const handleEditClick = (event, contact) =>{
        event.preventDefault();
        setEditContactId(contact.employee_id);

        const formValues = {
            employee_name: contact.employee_name,
            employee_surname: contact.employee_surname,
            hotel_id: contact.hotel_id,
            hours: contact.hours,
            position: contact.position,
            salary: contact.salary
        };

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditContactId(null);
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const id = contacts.findIndex((contact) => contact.employee_id === contactId );

        newContacts.splice( id, 1 );

        setContacts(newContacts);

    }

    return (
        <div>
        {addEmployee===false &&
        <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            height={"calc(100vh - 70px)"}
        >
            <Box
                width={"100%"}
            >
                <div className="table">
                <form onSubmit={handleEditFormSubmit}>
                    
                    <Table striped hover responsive="sm">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Hotel ID</th>
                            <th>Hours</th>
                            <th>Position</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.employee_id ?
                                    ( <EditRow
                                        editFormData={editFormData}
                                        handleEditFormChange = {handleEditFormChange}
                                        handleCancelClick = {handleCancelClick}
                                    /> ) :
                                    ( <ReadOnlyRow
                                        contact = {contact}
                                        handleEditClick = {handleEditClick}
                                        handleDeleteClick = {handleDeleteClick}
                                    /> )}
                            </Fragment>
                        ))}
                        </tbody>
                    </Table>
                    
                </form>
                </div>

                
            </Box>
            <Button
                        marginTop={"15px"}
                        type="submit"
                        onClick={()=>setAddemployee(!addEmployee)}
                    >
                        Add
                    </Button>
        </Box>}
        {addEmployee===true && <div><h1 style={{fontSize:'48px', marginBottom: "20px", textAlign: "center"}}>Add an employee</h1>
                <form onSubmit={handleAddFormSubmit} style={{
                    display: "flex",
                    flexDirection:"column",
                    padding: "20px",
                    width: "500px",
                    marginLeft: 'auto',
                    marginRight: "auto",
                    border: "1px solid black",
                    borderRadius: "8px"
                }}>

                    <Box>
                        <Text>
                            Employee name
                        </Text>
                        <Input
                            width={"100%"}
                            height={"32px"}
                            marginBottom={"10px"}
                            name="employee_name"
                            placeholder="Employee Name"
                            required
                            value={addFormData.employee_name}
                            onChange={handleAddFormChange}
                        />
                    </Box>
                    <Box>
                        <Text>
                            Surname
                        </Text>
                        <Input
                            width={"100%"}
                            height={"32px"}
                            marginBottom={"10px"}
                            name="employee_surname"
                            placeholder="surname"
                            required
                            value={addFormData.employee_surname}
                            onChange={handleAddFormChange}
                        />
                    </Box>
                    <Box>
                        <Text>
                            Hotel id
                        </Text>
                        <Input
                            width={"100%"}
                            height={"32px"}
                            marginBottom={"10px"}
                            name="hotel_id"
                            placeholder="Hotel ID"
                            required
                            value={addFormData.hotel_id}
                            onChange={handleAddFormChange}
                        />
                    </Box>
                    <Box>
                        <Text>
                            Hours
                        </Text>
                        <Input
                            width={"100%"}
                            height={"32px"}
                            marginBottom={"10px"}
                            name="hours"
                            placeholder="Hours"
                            required
                            value={addFormData.hours}
                            onChange={handleAddFormChange}
                        />
                    </Box>
                    <Box>
                        <Text>
                            Position
                        </Text>
                        <Input
                            width={"100%"}
                            height={"32px"}
                            marginBottom={"10px"}
                            name="position"
                            placeholder="Position"
                            required
                            value={addFormData.position}
                            onChange={handleAddFormChange}
                        />
                    </Box>
                    <Box>
                        <Text>
                            Salary
                        </Text>
                        <Input
                            width={"100%"}
                            height={"32px"}
                            name="salary"
                            placeholder="Salary"
                            required
                            value={addFormData.salary}
                            onChange={handleAddFormChange}
                        />
                    </Box>
                    <Button
                        marginTop={"15px"}
                        type="submit"
                        onClick={()=>setAddemployee(!addEmployee)}
                    >
                        Add
                    </Button>
                </form></div>}
        </div>
    )
}