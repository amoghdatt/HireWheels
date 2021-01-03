import Stepper from 'bs-stepper';
import Button from 'react-bootstrap/Button';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import { useEffect , useState} from 'react';
import DropOff from './dropOff';
import DisplayAllVehicles from '../vehicle/display';
import ConfirmBooking from './confirm-booking';

function BookingStepper(){

    let [bookingDetails, setBookingDetails] = useState({});
    let [allVehicles, setAllVehicles] = useState([{}]);
    let [isLoading, setIsLoading] = useState(false);

    const handleChange = (event)=>{
        let {id, value} = event.target;
        bookingDetails[id] = value;
        setBookingDetails(bookingDetails);
    }

    const fetchAllVehicles = () =>{
        document.getElementById('available-vehicles').click();
        setIsLoading(true);
        fetch('http://localhost:8086/hirewheels/v1/vehicles/all', {
                method: 'GET',
                headers: {'Content-Type':'application/json'}
            }).then(res=>{
                res.json()
                .then((jsonBody)=>{
                    allVehicles = jsonBody;
                    setAllVehicles(allVehicles);
                    setIsLoading(false);
                })
                .catch(()=>{});

            }).catch(err=>{console.log(err)})
    }

    useEffect(()=>{
        const stepper = new Stepper(document.querySelector('#stepper1'), {
            linear:false,
            animation:true
        });
    },[])

    

    return(
        <div className="container">
        <div id="stepper1" className="bs-stepper">
        <div className="bs-stepper-header" role="tablist">
            {/* <!-- your steps here --> */}
            <div className="step" data-target="#pickup-part">
            <button type="button" className="step-trigger" role="tab">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Pickup</span>
            </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#drop-off-part">
            <button type="button" className="step-trigger" role="tab" id="drop-off">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Drop Off</span>
            </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#available-vehicles-part">
            <button type="button" className="step-trigger" role="tab" id="available-vehicles">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Available Vehicles</span>
            </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#confirm-booking-part">
            <button type="button" className="step-trigger" role="tab" id="confirm-booking">
                <span className="bs-stepper-circle">4</span>
                <span className="bs-stepper-label">Confirm Booking</span>
            </button>
            </div>
            </div>
        <div className="bs-stepper-content">
            <div id="pickup-part" className="content" role="tabpanel">
                <p>Select Pickup Date</p>
                <input type="date" id="pickupDate" onChange={handleChange}></input>
                <hr></hr>
                <Button variant="outline-primary" onClick={()=>{document.getElementById('drop-off').click()}}>Next</Button>
            </div>
            <div id="drop-off-part" className="content" role="tabpanel">
                <p>Pick Up Date: {String(bookingDetails.pickupDate)}</p>
                <DropOff getAllVehicles={fetchAllVehicles} handleChange= {handleChange}/>
            </div>
            <div id="available-vehicles-part" className="content" role="tabpanel">
                <DisplayAllVehicles isLoading= {isLoading} allVehicles={allVehicles}/>
            </div>
            <div id="confirm-booking-part" className="content" role="tabpanel">
                <ConfirmBooking allVehicles={allVehicles} bookingDetails={bookingDetails}/>
            </div>
        </div>
        </div>
        </div>
    )
}

export default BookingStepper;