import React, {useState, Fragment, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditBook from '../components/EditBookRow';
import ViewBook from '../components/ViewBookRow';
import * as ReactBootStrap from "react-bootstrap";
import {Button, Form, Table} from 'react-bootstrap';
import EditBookRow from './EditBookRow';
import ViewBookRow from './ViewBookRow';
import UserService from "../services/user.service";
import data from './mock-bookings.json'

const Bookings = () => {
    const [books, setBooks] = useState(data);
    const [editBookId, setEditBookId] = useState(null);

    useEffect(()=>{
        UserService.getModeratorBoard().then(
            response => {
                // setBooks(response.data);
            },
            error => {
                console.log(error);
            });
    },[])

    const [addFormData, setAddFormData] = useState({
        "booking_id": "",
        "guests_num": "",
        "from_date": "",
        "to_date": "",
        "room_id": "",
        "bill": "",
        "guest_id": ""
    })

    const[editFormData, setEditFormData] = useState({
        "booking_id": "",
        "guests_num": "",
        "from_date": "",
        "to_date": "",
        "room_id": "",
        "bill": "",
        "guest_id": ""
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
        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newBook = {
            booking_id: addFormData.booking_id,
            guests_num: addFormData.guests_num,
            from_date: addFormData.from_date,
            to_date: addFormData.to_date,
            room_id: addFormData.room_id,
            bill: addFormData.bill,
            guest_id: addFormData.guest_id
        }

        UserService.postModeratorBoard(newBook)
        const newBooks = [...books, newBook];
        setBooks(newBooks);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedBook = {
            booking_id: editBookId,
            guests_num: editFormData.guests_num,
            from_date: editFormData.from_date,
            to_date: editFormData.to_date,
            room_id: editFormData.room_id,
            bill: editFormData.bill,
            guest_id: editFormData.guest_id
        }

        const newBooks = [...books];

        const id = books.findIndex((book) => book.booking_id === editBookId);
        newBooks[id] = editedBook;
        setBooks(newBooks);
        setEditBookId(null);
    }

    const handleEditClick = (event, book) =>{
        event.preventDefault();
        setEditBookId(book.booking_id);

        const formValues = {
            booking_id: book.booking_id,
            guests_num: book.guests_num,
            from_date: book.from_date,
            to_date: book.to_date,
            room_id: book.room_id,
            bill: book.bill,
            guest_id: book.guest_id
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditBookId(null);
    }

    const handleDeleteClick = (bookId) => {
        const newBooks = [...books];

        const id = books.findIndex((book) => book.booking_id === bookId);
        UserService.deleteModeratorBoard(books[id].booking_id);

        newBooks.splice( id, 1);
        setBooks(newBooks);
    }
    return (
        <div>
            <div className="container">
                <br/>
                <h3>Add a Booking</h3>

                <Form onSubmit={handleAddFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Booking ID</Form.Label>
                        <Form.Control name = "booking_id" type="number" placeholder="Booking ID" onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Guests Number</Form.Label>
                        <Form.Control type="number" name="guests_num" placeholder="Guests Num" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>From Date</Form.Label>
                        <Form.Control type="date" name="from_date" placeholder="From Date" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>To Date</Form.Label>
                        <Form.Control type="date" name="to_date" placeholder="To Date" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Room ID</Form.Label>
                        <Form.Control type="number" name="room_id" placeholder="Room ID" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Bill</Form.Label>
                        <Form.Control type="number" name="bill" placeholder="Bill" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Guest ID</Form.Label>
                        <Form.Control type="number" name="guest_id" placeholder="Guest ID" required onChange={handleAddFormChange}></Form.Control>
                    </Form.Group>
                    <Button type="submit" size="lg"> Add </Button>

                </Form>
                <br/>
                <div className="table">
                    <form onSubmit={handleEditFormSubmit}>

                        <Table striped bordered hover responsive>
                            <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Guests Number</th>
                                <th>From </th>
                                <th>To </th>
                                <th>Room ID</th>
                                <th>Bill</th>
                                <th>Guest ID</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books.map((book) => (
                                <Fragment>
                                    {editBookId === book.booking_id ?
                                        ( <EditBook
                                            editFormData={editFormData}
                                            handleEditFormChange = {handleEditFormChange}
                                            handleCancelClick = {handleCancelClick}
                                        /> ) :
                                        ( <ViewBook
                                            book = {book}
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

export default Bookings