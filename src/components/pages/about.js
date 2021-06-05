import React,{Component}  from 'react';
import image from '../../images/portrait.jpg';

export class About extends Component 
{
    render()
    {
        return (
            <div>
                <div className="container ">
                    <div className="row pt-4 mt-4">
                       
                        <div className="col-4 pt-8" >
                            <img src={image} className="about-image"></img>
                        </div>
                        <div className="col-8  about-bg ">
                               <center> <h2>Ikram husain</h2></center>
                                <div className="row about-content p-4">
                                
                                </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        )
    }
}