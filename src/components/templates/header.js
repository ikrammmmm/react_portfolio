
import React,{Component}  from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";
export class Header extends Component {
    render()
    {
        return (
            <div>
                <link rel="stylesheet" href="."></link>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Ikaram Husain</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link" href="#">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PortFolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}