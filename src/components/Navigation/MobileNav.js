import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const LinksContainer = styled.div`
    ${'' /* margin-right: 30px; */}
    position: absolute;
    height: 100vh;
    width: 100%;
    right: 0;
    top: 0;
    margin: 0 auto;
    padding-right: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(57, 21, 59, .35); 
    backdrop-filter: blur(25px);
    z-index: 10;  
    animation: 1s showMenu both;
    opacity: 0;

    }

    ul {
        list-style: none;
        @media (max-width: 420px) {
            margin-top: 0px;
        }       
    }

    li {
    display: block;
    margin-bottom: -0.5rem;
    padding: 20px;
    text-align: center;
    }

    li a {
        text-decoration: none;
        color: ${colors.blue};
        @media only screen and (max-width: 420) {
            font-size: 1.5rem;
        }
    }

    @keyframes showMenu {
        100% {
            opacity: 1;
        }
    }

    .active {
        ${'' /* opacity: 1; */}
        border: 2px solid ${colors.green};
        padding: 2px 5px;
        ${'' /* border-radius: 60% 60% 30% 50%; */}
    }

`

const Button = styled.div`
    margin-top: 20px;
    margin-right: 15px;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 40px;
    right: 50px;
    z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    @media only screen and (max-width: 1024px) {
            margin-top: 1rem;
            right: 150px;
        }

    @media only screen and (max-width: 768px) {
            right: 70px;
        }

    @media only screen and (max-width: 420px) {
            margin-top: 0px;
            right: 50px;
            
        }

    div {
        width: 2rem;
        height: 0.15rem;
        background-color: ${({ open }) => open ? colors.defaultColor : colors.blue};
        border-radius: 5px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`


const LinkList = (props) => (
    <li>
        <Link activeClassName='active' to={props.to}>{props.children}</Link>
    </li>
)

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return(
        <div>
            <Button open = {open} onClick={handleOpenMenu}>
                <div />
                <div />
                <div />
            </Button>
            { open ? 
                <LinksContainer >
                    <ul>
                        <LinkList to='/about'>About</LinkList>   
                        <LinkList to='/projects'>Projects</LinkList>
                        <LinkList to='/codingLog'>Coding Log</LinkList>
                        <LinkList to='/contact/'>Contact</LinkList>
                    </ul>
                </LinksContainer> : <div></div>
            } 
        </div>
    )
}

export default MobileNav;