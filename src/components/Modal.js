import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { logos } from '../data/logos';

const Container = styled.div`
    margin-top: -75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    color: ${colors.darkPurple};
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }

    .photo {
        width: 100%;
        height: 500px;
        background: url(${({ photo }) => photo}) center top no-repeat;
        background-size: cover;
        margin: 0;
        margin-top: -80px;
        border-radius: 10px 10px 0px 0px;
        align-self: center;        
        
        @media (max-width: 768px) {
            height: 300px;
        }
    }
    
    .cardText {
        padding: 20px;     
        border-radius: 0px 0px 10px 10px;        
        width: 90%;
        height: auto;
        font-size: 1.2em;
        font-weight: 400;
        @media (max-width: 768px) {
            margin: 10px 10px;
            width: 250px;
        }
    }

    .technologies {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(8, 1fr);
        color: ${colors.defaultColor}
    }
    
    h3 {
        margin-top: 10px;
        margin-bottom: 10px;                
        padding-top: 20px;
        padding-bottom: 20px; 
        font-weight: bold;          
        @media (max-width: 768px) {
            text-align: center;
            padding: 20px;
        }
    }

    .code {
        border-color: transparent;
        border-bottom: 1px solid ${colors.defaultColor};
        border-radius: 0px;
        margin-right: 30px;
    }

    .closeModal {
        cursor: pointer;
        z-index: 1000;
        background-color: transparent;
        border: none;
        padding: 20px;        
        font-size: 1.5rem;
        outline: none;
        margin-left: 88%;        
        margin-top: 70px;
        color: #000;
        opacity: .5;
    }
`

const Modal = ({ name, photo, technologies, closeModal, children }) => {        
    return(
        <Container photo={photo}>
            <button className='closeModal' onClick={closeModal}>
                <FontAwesomeIcon icon={logos.close} size="2x"/>
            </button>
            <div className='photo'></div>           
            <div className='cardText'>
                <h3>{name}</h3>
                <div className='technologies'>
                    {technologies.map((technology, index) => !(technology.name ==='redux' || technology.name === 'postgresql' || technology.name === 'gatsby' || technology.name === 'graphql'  ) ? 
                                    <FontAwesomeIcon key = {index} icon={technology.icon} size="2x"/>
                                    : <img key = {index} src={technology.icon} height='35px' alt='' className="icon"/>
                    )}
                </div>
                <div>
                    {children}
                </div>                
            </div>            
        </Container>
    )
}

export default Modal;