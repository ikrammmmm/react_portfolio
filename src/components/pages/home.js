import React,{Component}  from 'react';
import {Header} from '../templates/header';
import {Footer} from '../templates/footer';

export class Home extends Component 
{
    render()
    {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}