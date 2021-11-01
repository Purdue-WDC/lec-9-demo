import React from 'react'
import 'jquery';
import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from '@mui/material/Button';
import Navbar from './components/Home';


const Page1 = (props) => {
return (
    <>
  
    <div>
        <Navbar></Navbar>
        <h1> This is Page1 at your service</h1>
        <button className="btn btn-primary">Bootstrap Button</button>
       
        <Button variant="text">Text</Button>


        
    </div></>
)

}
export default Page1;