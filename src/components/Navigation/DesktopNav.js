import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const LinksContainer = styled.div`

    ul {
        list-style: none; 
        float: right;
        margin-top: 10px;
    }

    li {
    display: inline-block;
    padding: 0px 25px;
    }

    li a {
        text-decoration: none;
        position: relative;
        padding: 5px 5px;
        opacity: .8;
        transition: all 0.3s ease-in-out;
        color: ${colors.blue};
        ${'' /* color: #4AF626; */}
        font-weight: bold;

        }

    li a:hover {
        opacity: 1;
        }

    .active {
        opacity: 1;
        animation: 2s changeBorder both;
        border: 2px solid transparent;
        border-radius: 5px;
        ${'' /* border-radius: 60% 60% 30% 50%; */}
    }

    @keyframes changeBorder {
        100% {
            ${'' /* border-color: #F1C232; */}
            border-color: ${colors.green}
        }
    }
`

const MenuWrapper = styled.ul`
`

const LinkList = (props) => (
    <li>
        <div className="menuLinkBg grow">
        <Link to={props.to} activeClassName='active'>{props.children}</Link>
        </div>
    </li>
)

const DesktopNav = () => {
    return(
        <LinksContainer>
            <MenuWrapper>
                <LinkList to='/about'>About</LinkList>   
                <LinkList to='/projects'>Projects</LinkList>
                <LinkList to='/codingLog'>Coding Log</LinkList>
                <LinkList to='/contact'>Contact</LinkList>
            </MenuWrapper>
            </LinksContainer> 
    )
}

export default DesktopNav;