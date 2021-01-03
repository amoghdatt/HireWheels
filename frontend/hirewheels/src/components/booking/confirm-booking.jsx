import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function ConfirmBooking({allVehicles:vehicleInformation, bookingDetails}){

    let [isBookingConfirmed, setBookingConfirmed] = useState(false);

    const handleSubmit = ()=>{
        let {pickupDate:pickup, dropOffDate:dropOff} = bookingDetails;
        let {price:amount, vehicleNumber} = vehicleInformation;

        fetch('http://localhost:8086/hirewheels/v1/bookings', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body :JSON.stringify({pickup, dropOff, amount, vehicleNumber})
            }).then(res=>{
                if(res.ok) setBookingConfirmed(true);
            }).catch(err=>{console.log(err)})
    }

    return (
        <>
        <h1 className="center">Order Summary</h1>
        {isBookingConfirmed?<Alert variant="success">Booking Confirmed. Thank you for using HireWheels</Alert>:null}
        <Table responsive>
        <tbody>
            <tr>
                <td><img width="400" height="300" src={vehicleInformation[0].image}></img></td>
                <td>
                    <h5>{vehicleInformation[0].model}</h5>
                    <p>Color: {vehicleInformation[0].color}</p>
                    <p>Fuel type: {vehicleInformation[0].fuelType}</p>
                    <p>Pick Up: {bookingDetails.pickupDate}</p>
                    <p>Drop Off: {bookingDetails.dropOffDate}</p>
                    <p>Price Per Day: {vehicleInformation[0].price}</p>
                </td>
            </tr>
        </tbody>
    </Table>
        <button className="btn btn-success" onClick={handleSubmit}>CONFIRM BOOKING</button>
        </>
    )
}

export default ConfirmBooking;