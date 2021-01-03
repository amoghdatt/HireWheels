import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Dashboard({user}){

    return(
        <DropdownButton variant="success" title={user.firstName}>
            <Dropdown.Item>Account</Dropdown.Item>
            {user.admin?<Dropdown.Item><Link to="/admin">Admin</Link></Dropdown.Item>:null}
            <Dropdown.Divider />

            <Dropdown.Item>Log Out</Dropdown.Item>
            
        </DropdownButton>
    )
}

export default Dashboard;