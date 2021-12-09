import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            
            <td>{contact.employee_name}</td>
            <td>{contact.employee_surname}</td>
            <td>{contact.hotel_id}</td>
            <td>{contact.hours}</td>
            <td>{contact.position}</td>
            <td>{contact.salary}</td>
            <td> 
                <Button type="button" variant="outline-primary" onClick = {(event)=>handleEditClick(event, contact)} size="sm">
                      Edit  
                </Button>{'    '}
                <Button type="button" variant="outline-danger" onClick = {()=>handleDeleteClick(contact.employee_id)} size="sm">Delete</Button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow;
