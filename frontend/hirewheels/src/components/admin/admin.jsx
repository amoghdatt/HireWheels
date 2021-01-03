import MyVehicles from './vehicles';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchSpinner from '../utils/spinner';

function AdminDashboard({owner}){

    let [isVehiclesInfoAvailable, setIsAvailable] = useState(false);
    let [vehiclesInfo, setVehiclesInfo] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8086/hirewheels/v1/vehicles?owner=${owner}`, {
                method: 'GET',
                headers: {'Content-Type':'application/json'}
            }).then(res=>{
                if(res.ok){
                    setIsAvailable(true);
                    res.json()
                    .then((resBody)=>{
                        console.log(resBody);
                        setVehiclesInfo(resBody);
                    })
                    .catch((err)=>console.log(err))
                }else{
                    console.log('error');
                }
            }).catch(err=>{console.log(err)})
    }, []);

    return(
        <div className="container center">
            <h1>Available Vehicles</h1>
            <hr></hr>
            <Link to='/addVehicle'><Button className="signInBtn" variant="primary" size="sm" block>
                Add Vehicle
            </Button></Link>
            {isVehiclesInfoAvailable?<MyVehicles vehicles={vehiclesInfo}/>:<SearchSpinner/>}
        </div>
    )
}

export default AdminDashboard;