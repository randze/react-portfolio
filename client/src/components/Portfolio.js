import React from 'react';
import Card from './Card'

function Portfolio( props ) {
    return (
        <div className="container-fluid justify-content-center">
            <section className="container">
                <div id="projects" className="row">
                    {props.projects.map( project => <Card key={project.name} {...project} /> )}
                </div>
            </section>
            <br />
            <br />
        </div>
    )
}

export default Portfolio;
