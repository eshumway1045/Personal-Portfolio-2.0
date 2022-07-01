import React, { useState } from 'react';


const ProjectList = ({ category }) => {

    const [portfolioPane] = useState([
        {
            name: 'Budgetek',
            affinities: 'Project: Node MVC Handlebars',
            link: 'https://quiet-tundra-30236.herokuapp.com/',
            image: "budgetek.jpg",
            alt: 'an array of different bills from different companies',
            github: 'https://github.com/eshumway1045/Budgetek'
        },
        {
            name: 'Movies Now',
            affinities: 'Project: HTML, CSS, Bulma, jQuery, JavaScript, MovieDB API, and Rapid API',
            link: 'https://eshumway1045.github.io/Group-Project-1/',
            image: "film roll.jpg",
            alt: 'Roll of movie film',
            github: 'https://github.com/eshumway1045/Group-Project-1'
        },
        {
            name: 'Simple Planner',
            affinities: 'Project: HTML, CSS, jQuery, JavaScript',
            link: 'https://eshumway1045.github.io/simple-planner/',
            image: "personalPlanner.png",
            alt: 'screen shot of personal planner page',
            github: 'https://github.com/eshumway1045/simple-planner'
        },
        {
            name: 'Weather Command',
            affinities: 'Project: HTML, CSS, Bulma, jQuery, JavaScript, MovieDB API, and Rapid API',
            link: 'https://eshumway1045.github.io/weather-command/',
            image: "weather command.png",
            alt: 'Screen shot of weather command application',
            github: 'https://github.com/eshumway1045/weather-command.git'
        },
        {
            name: 'Timed Quiz',
            affinities: 'Project: HTML, CSS, jQuery, JavaScript',
            link: 'https://eshumway1045.github.io/Timed-Quiz/',
            image: "timedQuiz.png",
            alt: 'image of started quiz',
            github: 'https://github.com/eshumway1045/Timed-Quiz'
        },
        {
            name: 'Run Buddy',
            affinities: 'Project: HTML, CSS',
            link: 'https://eshumway1045.github.io/run-buddy/',
            image: "runBuddy.jpg",
            alt: 'run buddy header',
            github: 'https://github.com/eshumway1045/run-buddy'
        },
        {
            name: 'Everywhere',
            affinities: 'Project: MongoDB, React, GraphQL, MERN, Tailwind',
            link: 'https://stark-harbor-20365.herokuapp.com/',
            image: "everywhere.png",
            alt: "Homepage of Everywhere",
            github: "https://github.com/emilypape/everywhere"

        }
    ]);



return (
    <div className='grid'>
        {portfolioPane.map((pane) => (
            <article className="portfolio-link modalContainer" key={pane.name}>
                <div className="work-title">
                    <h3>{pane.name}</h3>
                    <p>{pane.affinities}</p>
                </div>
                <a href={pane.link} target="_blank">
                    <img 
                    src={require(`../../assets/images/${pane.image}`)} 
                    alt={pane.alt}
                    />
                </a>
                <div className="git-hub-link ">
                    <a href={pane.github} target="_blank">
                        <h4>See it on Github</h4>
                        <span>
                            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </article>
        ))}
        
    </div>)
}
export default ProjectList;