import React from 'react';
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import FadeIn from 'react-fade-in';

const Container = styled.div`
    width: 70vw;
    margin: 0px auto;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
    ${'' /* border: 1px solid ${colors.green}; */}
    
    ${'' /* box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
    background: linear-gradient(-45deg, rgba(255,255,255,0.2), rgba(255, 255, 255, 0.3)); */}

    
        @media (max-width: 768px) {
            width: auto;
            margin: 0px 20px;
            border-color: transparent;
            }
    
    h1, h4 {
        font-weight: 300;
    }

    h1 {
        @media (max-width: 400px) {
            font-size: 1.5rem;
            }
    }

    h4, h3 {
        @media (max-width: 400px) {
            font-size: 1rem;
            }
    }
    
    .header {
        padding: 5px 20px;  
        margin-right: 20px;  
        margin-left: 20px;
        border-radius: 15px;
        ${'' /* box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
        background-color: rgba(255, 255, 255, .25);  
        backdrop-filter: blur(5px); */}
        border: 1px solid ${colors.green};

        @media (max-width: 400px) {
            margin: 0px;        
            padding: 0px;      
            box-shadow: none;
            background-color: transparent;  
            backdrop-filter: none;
            }

    }

    .logContent {
        padding: 30px; 
        padding-top: 70px;
        ${'' /* margin-top: -50px; */}
        border-radius: 15px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
        
        @media (max-width: 400px) {
            margin: 0px; 
            padding: 0px;           
            box-shadow: none;
            background-color: transparent;  
            backdrop-filter: none;
            }
    }

`

const LogTemplate = ({ data }) => {
    const log = data.markdownRemark;

    return(
        <Layout >
            <FadeIn>
                <Container>
                    <div className="header">
                        <h1>{log.frontmatter.title}</h1>
                        <h4>- {log.frontmatter.date} -</h4>
                    </div>
                    <div
                        // className="logContent"
                        dangerouslySetInnerHTML={{ __html: log.html }}
                        />
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