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
                                <p>Hi my name is ikram i'm 23 years old. 
                                I am a coding bootcamp student and aspire to become a web developer. I was exposed to web development from a friend and have been intrigued ever since. technology is ever evolving, and pushes us to learn everyday.
                               </p><p>
                               I love nature and knitting in my spare time.
                                 I volunteer for mental health and domestic violence support group. 
                                 I born and raised in the same neighbourhood.</p>

                                </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        )
    }
}