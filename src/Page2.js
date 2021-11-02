import React, {useState} from 'react'
import "antd/dist/antd.css";
import {Button, Carousel} from 'antd'
import axios from 'axios'

import './App.css'
import Navbar from './components/Navbar';
const Page2 = (props) => {

const [cats, setCats] = useState([])
var images;
const getCats = ()=> {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=4', {
        headers: {
            'x-api-key': '64fb1c89-0280-46c1-82e9-e4429ab04377'
        }
    })
    .then((res)=> {
       res.data.forEach((element) =>
           setCats(cats=> [...cats, element.url])
       )
    })
  

}

console.log(cats)
images =   cats.map(function (cat) {
    return <div className="cropped-img"><img key={cat}src={cat}/></div>
})
return (

    <div class="container">
        <Navbar></Navbar>
        <Button type="primary" onClick={getCats}> get the cats </Button>
        <h1> This is Page2 at your service</h1>
<Carousel autoplay >
{images}
  
</Carousel>

    </div>
)

}
export default Page2;