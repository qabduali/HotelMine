import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

const EditBookRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td><input type="number" name="booking_id" placeholder="Booking ID" required value={editFormData.booking_id} onChange={handleEditFormChange}></input></td>
            <td><input type="number" name="guests_num" placeholder="Guests Num" required value={editFormData.guests_num} onChange={handleEditFormChange}></input></td>
            <td><input type="date" name="from_date" placeholder="From Date" required value={editFormData.from_date} onChange={handleEditFormChange}></input></td>
            <td><input type="date" name="to_date" placeholder="To Date" required value={editFormData.to_date} onChange={handleEditFormChange}></input></td>
            <td><input type="number" name="room_id" placeholder="Room ID" required value={editFormData.room_id} onChange={handleEditFormChange}></input></td>
            <td><input type="number" name="bill" placeholder="Bill" required value={editFormData.bill} onChange={handleEditFormChange}></input></td>
            <td><input type="number" name="guest_id" placeholder="Guest ID" required value={editFormData.guest_id} onChange={handleEditFormChange}></input></td>
            <td><Button variant = "success" size = "lg" type="submit" size="sm"> Submit </Button>{'  '}
                <Button variant="danger" size="lg" type="button" onClick={handleCancelClick} size ="sm"> Cancel </Button></td>
        </tr>
    )
}

export default EditBookRow