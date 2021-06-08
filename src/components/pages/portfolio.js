import React,{Component}  from 'react';

import Portfolio from '../templates/portfolio';
import projects from '../../data/projects'

export class PortFolio extends Component 
{
    render()
    {
        return (
            <div>
                <div className="container container-row mt-4">
                    <div className="row header-row d-flex p-2 justify-content-center">
                    {projects.map( (project,index) =>{
                        return <Portfolio key={index} project={project}/>
                    })}
                        

                   </div>
                </div>
                
            </div>
        )
    }
}