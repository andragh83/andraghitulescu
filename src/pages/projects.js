import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Modal from '../components/Modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projectsArray from '../data/projectsData';
import FadeIn from 'react-fade-in';
import { colors } from '../styles/colors';
import { logos } from '../data/logos';


const Container = styled.div`
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-gap: 45px;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 10px; 
        }

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        
        }

    @media only screen and (max-width: 420px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));         
        }

    .detailsBox {
        position: -webkit-sticky;
        position: sticky;
        bottom: 5rem;
        left: 35%;
        align-self: flex-end;
        width: 600px;
        height: auto;
        z-index: 2000;        
        border-radius: 15px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
        background-color: rgba(255, 255, 255, .35);  
        backdrop-filter: blur(15px);
    }
`

const Projects = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [projectClicked, setProjectClicked] = useState(undefined);

    const onClick = (index) => {
        setProjectClicked(index)
        if (showDetails) {
            setShowDetails(false); 
            setProjectClicked(undefined);            
        }
            else { 
                setShowDetails(true);
            }
    }

    console.log('showDetails', showDetails);
    console.log('projectClicked', projectClicked);
    let seconds = -50;
    return(
        <Layout >
            <Container>
            {projectsArray.map((project, index) => 
                {   seconds+=100;
                    return <FadeIn key={index} delay={seconds}>
                                <Card                                     
                                    photoDesktop={project.photoDesktop}
                                    photoMobile={project.photoMobile}
                                    name={project.name}
                                    technologies={project.technologies}
                                    github={project.github}
                                    live={project.live}
                                    onClick={() => onClick(index)}
                                    >
                                        {project.text}
                                </Card>                        
                            </FadeIn>
                }
            )}

            { showDetails? 
                <div className='detailsBox'>
                    <Modal
                        photo={projectsArray[projectClicked].photoDesktop}                        
                        name={projectsArray[projectClicked].name}
                        technologies={projectsArray[projectClicked].technologies}
                        github={projectsArray[projectClicked].github}
                        live={projectsArray[projectClicked].live}
                        closeModal={onClick}
                    >
                        {projectsArray[projectClicked].details}
                    </Modal>                     
                </div> : <div></div>
                                 }
            </Container>
        </Layout> 
    )
}

export default Projects;