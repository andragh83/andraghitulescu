import React from 'react';
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import FadeIn from 'react-fade-in';

const Container = styled.div`
    width: 80vw;
    margin: 0px auto;
    padding: 30px;
    border-radius: 5px;    
    ${'' /* background: linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .6)); */}
    background-color: #eef0f1;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
    
        @media (max-width: 768px) {
            width: auto;
            margin: 0px 20px;
            margin-top: 20px;
            }

        @media (max-width: 420px) {
            box-shadow: none;
            padding: 10px;
            margin-top: 20px;
        }
    
    h1, h4 {
        font-weight: 300;
    }

    h1 {
        margin-bottom: 10px;
        line-height: 1.2em;
        @media (max-width: 420px) {
            font-size: 1.4rem;
            }
    }

    h3 {
        border-bottom: 1px solid ${colors.blue};
        padding-bottom: 5px;
        @media (max-width: 420px) {
            font-size: 1.1rem;            
            }
    }

    h4 {
        margin-top: 10px;
        @media (max-width: 420px) {
            margin-top: -5px;
            margin-bottom: 5px;
            font-size: 1rem;            
        }
    }

    h5 {
        margin-bottom: 10px;
        @media (max-width: 420px) {
            font-size: 1rem;            
        }
    }


    .logHeader {
        padding: 5px 20px;  
        border-radius: 5px;       
        border: 1px solid ${colors.green};
        background-color: #f9fafa;
        color: ${colors.darkPurple};

        @media (max-width: 420px) {
            ${'' /* margin: 0px;        
            padding: 0px;      
            border-color: transparent;
            border-bottom: 1px solid ${colors.green}; */}
            margin: 0px;            
            }

    }

    .content {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 3fr 1fr;    

        @media (max-width: 420px) {
            display: block;
            }    
    }

    .logContent {
        padding: 30px;   
        padding-top: 10px;  
        
        @media (max-width: 420px) {
            margin: 0px; 
            padding: 20px;  
            padding-top: 5px;         
            ${'' /* box-shadow: none;
            background-color: transparent;  
            backdrop-filter: none; */}
            font-size: .8rem;
            }
    }

    ${'' /* .logTitle {
        color: ${colors.green};
    } */}

    .rightLinks {
        padding: 30px;
        padding-top: 10px;
        

        @media (max-width: 420px) {
            display: none;
            }
    }

    .rightLinks li {
        list-style: none;
        margin-bottom: 10px;

    }

    .rightLinks ul {
        padding-left: 0px;
    }

    .logContent, .rightLinks {
        ${'' /* box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2), -0px -0px 20px rgba(0, 0, 0, 0.3); */}
        background-color: #f9fafa;
        border: 1px solid ${colors.defaultColor};
        border-radius: 5px;
        margin-top: 20px;
        color: ${colors.darkPurple};

        @media (max-width: 420px) {
            margin-top: 10px;
            }

    }

    img {
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -5px -5px 30px rgba(0, 0, 0, 0.5);
        border-radius: 10px;    
    }

    section {
        background-color: #000;
        color: ${colors.green};
        border-radius: 15px;
        padding: 10px;
    }

    a {
        color: inherit;
    }

`

const LogTemplate = ({ data }) => {
    const log = data.markdownRemark;

    return(
        <Layout >
            <FadeIn>
                <Container>
                    <div className="logHeader">
                        <h1 className="logTitle">{log.frontmatter.title}</h1>
                        <h4>- {log.frontmatter.date} -</h4>
                    </div>
                    <div className="content">
                        <div
                            className="logContent"
                            dangerouslySetInnerHTML={{ __html: log.html }}
                            />
                        <div className="rightLinks">
                            <h5>Under Construction</h5>
                                <ul>
                                    <li>Cool section comming soon</li>                                    
                                </ul>
                        </div>   
                    </div>
                </Container>
            </FadeIn>
        </Layout>   
    )
}

export default LogTemplate;

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug} }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`