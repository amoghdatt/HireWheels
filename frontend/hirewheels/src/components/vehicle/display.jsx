import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SearchSpinner from '../utils/spinner';

function DisplayAllVehicles({isLoading,allVehicles}){

    const handleBooking = ()=>{
        document.getElementById('confirm-booking').click();
    }
    
    if(isLoading) {
        return (<SearchSpinner/>);
    }else return(<Table responsive>
        <tbody>
            <tr>
                <td><img width="300" height="200" src={allVehicles[0].image}></img></td>
                <td>
                    <h5>{allVehicles[0].model}</h5>
                    <h6>Color:{allVehicles[0].color}</h6>
                    <h6>fuel Type:{allVehicles[0].fuelType}</h6>
                </td>
                <td>
                    <p>Price: Rs.{allVehicles[0].price}/-</p>
                    <Button variant="primary" onClick = {handleBooking} >Book Now</Button>
                </td>
            </tr>
        </tbody>
    </Table>)
    
}

export default DisplayAllVehicles;