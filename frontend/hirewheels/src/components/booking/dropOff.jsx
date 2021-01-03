import Button from 'react-bootstrap/Button';

function DropOff({getAllVehicles, handleChange}){


    return(
        <>
        <div className="row">
                <div className="col">
                    <select className="form-control form-select">
                        <option>Select Location</option>
                        <option value="1">Worli</option>
                        <option value="2">Chembur</option>
                        <option value="3">Powai</option>
                    </select>
                </div>
                <div className="col">
                    <input type="date" className="form-control" onChange = {handleChange} id="dropOffDate"/>
                </div>
            </div>
            <hr></hr>
            <Button variant="outline-Secondary">Previous</Button>
            <Button variant="outline-primary" onClick={getAllVehicles}>Next</Button>
            </>
    )
}

export default DropOff;