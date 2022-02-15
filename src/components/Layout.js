import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from "../styles/colors";
import DesktopNav from './Navigation/DesktopNav';
import MobileNav from './Navigation/MobileNav';
import Footer from './Footer';
import Seo from './Seo';

const NavContainer = styled.div`
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 1000;
    ${'' /* background: linear-gradient(rgb(59, 23, 61), rgb(59, 23, 61), rgba(59, 23, 61, 0)); */}
    background: linear-gradient(${colors.darkPurple}, ${colors.darkPurple}, rgba(59, 23, 61, 0));
    opacity: 1;
    margin: 0px auto;
    padding: 20px 10%;
    padding-bottom: 3rem;
    max-width: 1600px;
    margin-bottom: -20px;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    font-family: 'Julius Sans One', sans-serif;
    width: 80%;
    @media (max-width: 768px) {
        padding: 20px 10%;
    }

    @media (max-width: 400px) {
        padding: 20px 10%;
    }

    .ndra {
        font-size: .8em;
    }
`

const LogoLink = styled.div`

    margin-top: 10px;
    
    @media (max-width: 1100px) {
        
        margin-top: 2rem;
    }
    @media (max-width: 420px) {
        margin-left: 10px;
        margin-top: 10px;
    }

    @media (max-width: 320px) {
        margin-left: 10px;
        margin-top: 20px;
    }

    a {
        text-decoration: none;
        color: #ccc;
        @media (max-width: 400px) {
            font-size: 1.2rem;
        }
    }
`

const NavBar = ({ children }) => {

    const [viewportWidth, setViewportWidth] = useState(undefined);

    
    const handleResize = () => {
        setViewportWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    
    return(
        <div>
            {/* <MainContainer> */}
                <Seo />
                <NavContainer >
                    <LogoLink>
                        <div className='grow'>
                        <Link to="/">
                            A<span className="ndra">ndra</span>GH
                        </Link>
                        </div>
                    </LogoLink>
                {
                    viewportWidth > 1100 ? <DesktopNav /> : <MobileNav />
                }
                </NavContainer>
                <div className="content">
                    {children}
                </div>
                <Footer />
            {/* </MainContainer> */}
            
        </div>
    )
}

export default NavBar;