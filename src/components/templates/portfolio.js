
import React,{Component}  from 'react';

export default class Portfolio extends Component {
    render()
    {
        const project = this.props.project;
        var github = project.github ? <a href={project.github}>Github</a> : "";
        var demo = project.demo ? <a href={project.demo}>Github</a> : "";
        return (
            <div className="col col-6 card portfolio-card d-flex justify-content-center" >
            <div className="card-header text-center portfoilio-card-header ">
                    {project.name}
                <span className="portfolio-links">
                   {github}&nbsp;{demo}
                </span>
                </div>
                <img className="card-img-top" src={project.image}  alt={project.name}/>
                <div className="card-body">
                <p className="card-text">{project.description}</p>
            </div>   
        </div>
        )
    }
}