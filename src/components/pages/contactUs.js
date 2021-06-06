import React,{Component}  from 'react';


export class ContactUs extends Component 
{
    render()
    {
        return (
            <div>
                <div className="container container-row ">
                    <div className="row header-row">
                        <section clclassNameass="mb-4">
                            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                                a matter of hours to help you.</p>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <p>Ikram Husain</p>
                                        </li>
                                        <li>
                                            <p>+ 01 234 567 89</p>
                                        </li>
                                        <li>
                                            <p></p>
                                        </li>
                                        <li>
                                            <p>Github : <a href="https://github.com/ikrammmmm/">https://github.com/ikrammmmm/</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}