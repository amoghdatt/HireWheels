import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function AddVehicle({owner}){
    
    let [vehicleInfo, setVehicleInfo] = useState({owner:owner, price:60});
    let [isVehicleSaved, setVehicleSaved] = useState(false);

    const handleChange = (event)=>{

        let {id, value} = event.target;

        vehicleInfo[id] = value;
        setVehicleInfo(vehicleInfo);
        console.log(vehicleInfo);
    }

    const handleSubmit = () =>{
        fetch('http://localhost:8086/hirewheels/v1/vehicles', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body :JSON.stringify({...vehicleInfo})
            }).then(res=>{
                console.log(res);
                setVehicleSaved(true);
            }).catch(err=>{console.log(err)})
    }

    return(
        
        <div className="container">
            {isVehicleSaved?<Alert variant="success">Vehicle Added Successfully</Alert>:null}
            <Link to='/admin'><Button className="signInBtn" variant="primary" size="sm">
                Back To Dashboard
            </Button></Link>
            <Card>
                <Card.Header as="h5">Add Vehicle</Card.Header>
                <Card.Body>
                <Form>
                <Form.Group>
                    <Form.Label>Vehicle Name</Form.Label>
                    <Form.Control type="text"  size="sm" id="model" onChange={handleChange} required/>
                    <Form.Label>Vehicle Category</Form.Label>
                    <Form.Control as="select" size="sm" id="type" onChange={handleChange} required>
                        <option>Select Category</option>
                        <option>CAR</option>
                        <option>BIKE</option>
                    </Form.Control>
                    <Form.Label>Vehicle Sub Category</Form.Label>
                    <Form.Control as="select"  size="sm" id="category" onChange={handleChange} required>
                        <option>Select Sub Category</option>
                        <option>SUV</option>
                        <option>SEDAN</option>
                        <option>HATCHBACK</option>
                        <option>CRUISER</option>
                        <option>DIRT BIKE</option>
                        <option>SPORTS BIKE</option>
                    </Form.Control>
                    <Form.Label>Vehicle Location</Form.Label>
                    <Form.Control as="select"  size="sm" id="location" onChange={handleChange} required>
                        <option>Select City</option>
                        <option>Worli</option>
                        <option>Chembur</option>
                        <option>Powai</option>
                    </Form.Control>
                    <Form.Label>Vehicle Number</Form.Label>
                    <Form.Control type="text"  size="sm" id="number" onChange={handleChange} required/>
                    <Form.Label>Fuel Type</Form.Label>
                    <Form.Control as="select"  size="sm" id="fuelType" onChange={handleChange} required>
                        <option>Select fuel type</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                    </Form.Control>
                    <Form.Label>Color</Form.Label>
                    <Form.Control type="text"  size="sm" id="color" onChange={handleChange} required/>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text"  size="sm" id="image" onChange={handleChange} required/>
                </Form.Group>
                </Form>
                    <Button className="signInBtn" variant="primary" type="submit" onClick={handleSubmit} size="sm" block>
                        Upload Details
                    </Button>
                </Card.Body>
            </Card>

        </div>
        
    )
}

export default AddVehicle;