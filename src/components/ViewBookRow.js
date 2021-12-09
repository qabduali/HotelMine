import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

const ViewBookRow = ({book, handleEditClick, handleDeleteClick}) => {
    return (
        <tr>
            <td>{book.booking_id}</td>
            <td>{book.guests_num}</td>
            <td>{book.from_date}</td>
            <td>{book.to_date}</td>
            <td>{book.room_id}</td>
            <td>{book.bill}</td>
            <td>{book.guest_id}</td>
            <td>
                <Button type="button" variant="outline-primary" onClick = {(event)=>handleEditClick(event, book)} size="sm">
                    Edit
                </Button>{'   '}
                <Button type="button" variant="outline-danger" onClick = {()=>handleDeleteClick(book.booking_id)} size="sm">Delete</Button>
            </td>
        </tr>
    )
}

export default ViewBookRow