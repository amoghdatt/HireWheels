import NavBar from './navbar';
import Footer from './footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './welcome';
import AdminDashboard from './admin/admin';
import AddVehicle from './admin/addVehicle';
import { useState } from 'react';
import BookingStepper from './booking/booking-stepper';


function Home(){

       let [userInfo, setUserInfo] = useState({});

       let handleUserInfo = (userInfo)=>{
            setUserInfo({...userInfo});
       }
  
        return(
            <>
            <BrowserRouter>
            <NavBar handleUserInfo={handleUserInfo}/>
                <Switch>
                    <Route render={() => <AddVehicle owner={userInfo.email} />} path= '/addVehicle'></Route>
                    <Route render={() => <AdminDashboard owner={userInfo.email} />} path="/admin"></Route>
                    <Route component= {BookingStepper} path="/book"></Route>
                    <Route component= {WelcomeScreen} path="/"></Route>
                </Switch>
            </BrowserRouter> 
            <Footer/>
            </> 
        );
}

export default Home;