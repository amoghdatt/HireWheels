import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function WelcomeScreen(){
    return (
    <div className="home">
    <div className="welcome-screen">
        <div><p className="description">Self-drive vehicle rental in Mumbai</p></div>
        <Link to='/book'><Button variant="success" style={{borderRadius:'0'}}>BOOK NOW</Button></Link>
    </div>
    </div>
    )
}

export default WelcomeScreen;