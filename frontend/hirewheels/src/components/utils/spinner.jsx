import Spinner from 'react-bootstrap/Spinner';

function SearchSpinner(){
    return(
    <Spinner className="center" animation="border" role="status">
    <span className="sr-only">Loading available vehicles...</span>
    </Spinner>
    )
}

export default SearchSpinner;