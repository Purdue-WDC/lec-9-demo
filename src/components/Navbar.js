import React from "react"
import {Link} from 'react-router-dom'
const Navbar = (props) => {

    return (
        <div>
            <p> Nav</p>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        </div>
    )
}
export default Navbar