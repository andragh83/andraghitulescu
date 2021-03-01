import React from 'react';
import styled from 'styled-components';

const Photo = styled.div`
    float: left;
	padding: 1rem 1rem 0 1rem;
	${'' /* background: transparent; */}
	position: relative;
    transform: ${({ rotation }) => rotation};
    text-align: center;
    ${'' /* height: 100%; */}

    img {
        border-radius: 25px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
        width: ${({ width }) => width};;
        @media only screen and (max-width: 400px) {
            width: ${({ width }) => width*2/3};;
        }
    }

    .children {
        ${'' /* margin-top: 0px; */}
        margin-bottom: 10px;
        font-size: 1.1em;
        text-align: left;
        padding-left: 20px;
    }
`

const MainPhoto = ({ image, rotation, children, width }) => {
    return(
        <Photo rotation={rotation} width={width}>
            <img src={image} alt="Profile pic" />
            <div className="children">{children}</div>
        </Photo>
    )
}

export default MainPhoto;