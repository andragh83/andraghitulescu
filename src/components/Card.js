import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { logos } from '../data/logos';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 1100px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }

    .photoDesktop {
        cursor: pointer;
        width: 500px;
        margin: 0px auto;
        margin-top: 10px;
        border-radius: 10px;
        align-self: center;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), 0px 0px 20px rgba(0, 0, 0, 0.5);

        @media (max-width: 1100px) {
            width: 300px;
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
        @media (max-width: 1100px) {
            width: 50px;
            margin-left: 280px;
            margin-top: -140px;
        }
    }

    .cardText {
        border-radius: 10px;
        margin: 0px;
        width: 80%;
        height: auto;
        margin-bottom: 20px;
        @media (max-width: 1100px) {
            margin: 10px 10px;
            ${'' /* width: 280px; */}
        }
    }

    .technologies {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(8, 1fr);
    }
    
    h3 {
        margin-top: 55px;
        margin-bottom: 30px;        
        padding-top: 40px;
        color: ${colors.defaultColor};
        line-height: 1.7rem;
        @media (max-width: 1100px) {
            margin-top: 25px;
            margin-bottom: 20px; 
            ${'' /* text-align: center; */}
            ${'' /* padding: 20px; */}
        }
    }

    .buttonsSection {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;

        ${'' /* @media (max-width: 420px) {
            justify-content: space-between;
        } */}
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
        @media (max-width: 1100px) {
            font-size: .8rem;
        }

        @media (max-width: 420px) {
            padding: 7.5px 15px;
        }
    }

    .code {
        border-color: transparent;
        border-bottom: 1px solid ${colors.defaultColor};
        border-radius: 0px;
    }

    .details {
        border: 1px solid ${colors.blue};
    }

`

const Card = ({ name, photoDesktop, photoMobile, technologies, github, live, seconds, onClick }) => {    
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
                <div className='buttonsSection'>                   
                    <button onClick={onClick} className="button details grow" href={github}>
                        Details
                        {" "}<FontAwesomeIcon icon={logos.message} size="1x"/>
                    </button>
                     
                    <a href={github} target='_blank' rel="noreferrer">
                        <button className="button code grow">
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