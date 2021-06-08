import React,{Component}  from 'react';
import image from '../../images/portrait.jpg';

export class About extends Component 
{
    render()
    {
        return (
            <div>
                <div className="container  container-row">
                    <div className="row pt-4 mt-4">
                       
                        <div className="col-5 pt-8" >
                            <img src={image} className="about-image"></img>
                        </div>
                        <div className="col-7  about-bg ">
                               <center> <h2>Ikram husain</h2></center>
                                <div className="row about-content p-4">
                                Hi my name is ikram i'm 23 years old. I love nature and knitting in my spare time. I volunteer for mental health and domestic violence support group. I born and raised in the same neighbourhood.

                                </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        )
    }
}