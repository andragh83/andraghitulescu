import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

import { logos } from '../data/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterElement = styled.footer`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 10px;
    .logo {
        margin: 10px;
    }
    .logo a {
        color: ${colors.defaultColor};
    }
`

const Footer = () => {

    return(
        <FooterElement>
            <p className='logo'>Find me on </p>
            <div className='logo grow'>
                <a href="https://www.github.com/andragh83/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={logos.github} size="1x"/>
                </a>
            </div>
            <div className='logo grow'>
                <a href="https://www.linkedin.com/in/andra-ghitulescu/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={logos.linkedin} size="1x"/>
                </a>
            </div>
            <div className='logo grow'>
                <a href="https://www.instagram.com/andragh83/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={logos.instagram} size="1x"/>
                </a>
            </div>

        </FooterElement> 
    )
}

export default Footer;