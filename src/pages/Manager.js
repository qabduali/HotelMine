import React, {useState, Fragment, useEffect} from 'react';
import EditRow from '../components/EditRow';
import ReadOnlyRow from '../components/ReadOnlyRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Button, Table, Form} from 'react-bootstrap';
import {Box} from "@chakra-ui/react";
import UserService from "../services/user.service";



function Manager({data}) {
    const [contacts, setContacts] = useState([]);
    const [editContactId, setEditContactId] = useState(null);

    useEffect(()=>{
        setContacts(data);
    },[data])

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
        "hotel_id": 0,
        "hours": 0,
        "position": "",
        "salary": 0
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

        //event.target.value always string even though some fields are number
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        console.log(typeof event.target.valueAsNumber)

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
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

        UserService.postAdminBoard(newContact)
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }

    //needs more attention
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            // emploid: editContactId,
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
        console.log(editedContact)

        UserService.putAdminBoard(contacts[id].employee_id, editedContact);

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
        UserService.deleteAdminBoard(contacts[id].employee_id);
        newContacts.splice( id, 1 );

        setContacts(newContacts);

    }

    return (
        <div>
            <br/>
            <div className="container">
                <h3>Add an employee</h3>
                <Form onSubmit={handleAddFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control name = "employee_name" type="text" placeholder="Employee Name" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Employee Surname</Form.Label>
                        <Form.Control name = "employee_surname" type="text" placeholder="Employee Surname" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Hotel ID</Form.Label>
                        <Form.Control name = "hotel_id" type="number" placeholder="Hotel ID" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Hours</Form.Label>
                        <Form.Control name = "hours" type="number" placeholder="hours" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Position</Form.Label>
                        <Form.Control name = "position" type="text" placeholder="Position" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control name = "salary" type="number" placeholder="Salary" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Button type="submit" size="lg"> Add </Button>
                </Form>
                <div className="table">
            <form onSubmit={handleEditFormSubmit}>
                <br/>
            <Table striped bordered hover responsive>
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

        </div>
        </div>
    )
}

export default Manager
