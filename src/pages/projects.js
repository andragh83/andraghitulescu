import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Modal from '../components/Modal';
import styled from 'styled-components';
import projectsArray from '../data/projectsData';
import FadeIn from 'react-fade-in';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    padding: 20px;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 85vw;
    width: 100%;

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
        backdrop-filter: blur(25px);

        @media only screen and (max-width: 420px) {
            bottom: 1rem;
            left: 5%;
            width: 350px;
        }

        @media only screen and (max-width: 375px) {
            bottom: 1rem;
            left: 5%;
            width: 320px;
        }

    }
`

const CardWrap = styled.div`
    padding-right: 30px;
    padding-bottom: 30px;
    @media only screen and (max-width: 500px) {
            margin: 0 autol

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

    let seconds = -50;
    return(
        <Layout>
            <Wrap>
                <Container>
                {projectsArray.map((project, index) => 
                    {   seconds+=100;
                        return <FadeIn key={index} delay={seconds}>
                                    <CardWrap>
                                        <Card                                     
                                            photoDesktop={project.photoDesktop}
                                            photoMobile={project.photoMobile}
                                            name={project.name}
                                            technologies={project.technologies}
                                            github={project.github}
                                            live={project.live}
                                            onClick={() => onClick(index)}
                                            >                                        
                                        </Card>  
                                    </CardWrap>                      
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
                            {projectsArray[projectClicked].text}
                        </Modal>                     
                    </div> : <div></div>
                                    }
                </Container>
            </Wrap>
        </Layout> 
    )
}

export default Projects;