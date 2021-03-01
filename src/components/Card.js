import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { logos } from '../data/logos';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }

    .photoDesktop {
        cursor: pointer;
        width: 450px;
        margin: 0px auto;
        margin-top: 10px;
        border-radius: 10px;
        align-self: center;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
        
        @media (max-width: 768px) {
            width: 250px;
        }

    }
    .photoMobile {
        margin-top: -230px;
        margin-bottom: 20px;
        margin-left: 400px;
        width: 80px;
        border: none;
        background-color: rgb(59,23,61);
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3), -10px -10px 30px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        @media (max-width: 768px) {
            width: 50px;
            margin-left: 250px;
            margin-top: -140px;
        }
    }

    .cardText {
        ${'' /* padding: 20px; */}
        border-radius: 10px;
        ${'' /* box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
        background-color: rgba(255, 255, 255, .25);  
        backdrop-filter: blur(20px); */}
        margin: 0px;
        ${'' /* margin-left: 10px; */}
        width: 450px;
        height: auto;
        @media (max-width: 768px) {
            margin: 10px 10px;
            width: 250px;
        }
    }

    .technologies {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(8, 1fr);
    }
    
    h3 {
        margin-top: 10px;
        margin-bottom: 10px;        
        padding: 20px;
        padding-top: 40px;
        color: ${colors.defaultColor};
        background: linear-gradient(rgba(0,0,0,0), ${colors.darkPurple}, ${colors.darkPurple});
        @media (max-width: 768px) {
            text-align: center;
            padding: 20px;
        }
    }

    .buttonsSection {
        margin-top: 2rem;
        display: flex;
        justify-content: space-around;
    }

    button {
        padding: 10px 20px;
        border: 1px solid ${colors.fuchsia};
        border-radius: 10px;
        background-color: transparent;
        color: ${colors.defaultColor};
        font-size: 1.2rem;
        cursor: pointer;
        outline: none;
        @media (max-width: 768px) {
            font-size: .8rem;
        }
    }

    .code {
        border-color: transparent;
        border-bottom: 1px solid ${colors.defaultColor};
        border-radius: 0px;
        ${'' /* margin-right: 30px; */}
    }

    .details {
        border: 1px solid ${colors.blue};
    }

`

const Card = ({ name, photoDesktop, photoMobile, technologies, children, github, live, seconds, onClick }) => {    
    return(
        <Container seconds={seconds}>
            <img alt='prtScrDesk' className='photoDesktop' src={photoDesktop} onClick={onClick}/>
            <img alt='prtScrMob' className='photoMobile' src={photoMobile} />
            <div className='cardText'>
                <h3>{name}</h3>
                <div className='technologies'>
                    {technologies.map((technology, index) => !(technology.name ==='redux' || technology.name === 'postgresql' || technology.name === 'gatsby' || technology.name === 'graphql'  ) ? 
                                    <FontAwesomeIcon key = {index} icon={technology.icon} size="2x"/>
                                    : <img key = {index} src={technology.icon} height='35px' alt=''/>
                    )}
                </div>
                <div>
                    {children}
                </div>
                <div className='buttonsSection'>                   
                    <button onClick={onClick} className="button details grow" href={github}>
                        Details
                        {" "}<FontAwesomeIcon icon={logos.message} size="1x"/>
                    </button>
                     
                    <a href={github} target='_blank' rel="noreferrer">
                        <button className="button code grow" href={github}>
                            Code
                            {" "}<FontAwesomeIcon icon={logos.github} size="1x"/>
                        </button>
                    </a>                
                    <a href={live} target='_blank' rel="noreferrer">
                        <button className="button live grow">
                            Demo
                            {" "}<FontAwesomeIcon icon={logos.live} size="1x"/>
                        </button>
                    </a>
                </div>
            </div>            
        </Container>
    )
}

export default Card;