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
    
        @media (max-width: 768px) {
            width: auto;
            margin: 0px 20px;
            }

        @media (max-width: 420px) {
            box-shadow: none
        }
    
    h1, h4 {
        font-weight: 300;
    }

    h1 {
        line-height: 1.2em;
        @media (max-width: 420px) {
            font-size: 1.3rem;
            }
    }

    h3 {
        @media (max-width: 420px) {
            font-size: 1rem;            
            }
    }

    h4 {
        @media (max-width: 420px) {
            margin-top: -5px;
            margin-bottom: 0px;
            font-size: .8rem;
        }
    }
    
    .header {
        padding: 5px 20px;  
        margin-right: 20px;  
        margin-left: 20px;
        border-radius: 15px;       
        border: 1px solid ${colors.green};

        @media (max-width: 420px) {
            margin: 0px;        
            padding: 0px;      
            border-color: transparent;
            }

    }

    .logContent {
        padding: 30px;     
        
        @media (max-width: 420px) {
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
                        className="logContent"
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