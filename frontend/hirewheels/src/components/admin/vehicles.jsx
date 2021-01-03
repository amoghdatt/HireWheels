import Table from 'react-bootstrap/Table';

function MyVehicles(){
    let tableHeaders = ['Image', 'Model', 'Number', 'Sub Category', 'Fuel Type'];
    return(
    <Table responsive className="table-margin">
        <thead className="thead-dark">
            <tr>
                {tableHeaders.map(header=>(<th key={header}>{header}</th>))}
            </tr>
        </thead>
    </Table>
    )
}

export default MyVehicles;