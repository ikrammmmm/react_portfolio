
import React,{Component}  from 'react';

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";

export class Header extends Component {
    render()
    {
        return (
            <div>
               <ul class="nav  justify-content-center navbar-dark bg-dark">
            
                    <li class="nav-item ">
                        <a class="nav-link nav-title" href="/">HOME</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link nav-title" href="/about">ABOUT ME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-title" href="/portfolio">PORTFOLIO</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link nav-title" href="/contact">CONTACT ME</a>
                    </li>
                   
                </ul>
            </div>
        )
    }
}