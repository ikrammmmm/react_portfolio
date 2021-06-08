
import React,{Component}  from 'react';

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";

export class Header extends Component {
    render()
    {
        return (
            <div>
               <ul className="nav  justify-content-center navbar-dark bg-dark">
            
                    <li className="nav-item ">
                        <Link className="nav-link nav-title" to="/">HOME</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="nav-link nav-title" to="/about">ABOUT ME</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link nav-title" to="/portfolio">PORTFOLIO</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="nav-link nav-title" to="/contact">CONTACT ME</Link>
                    </li>
                   
                </ul>
            </div>
        )
    }
}