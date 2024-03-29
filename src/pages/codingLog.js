import React, { useState } from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import image from '../images/programmer.jpeg'
import MainPhoto from '../components/MainPhoto';
import FadeIn from 'react-fade-in';

const Container = styled.div`
    display: flex;
    justify-content: center;`

const SubContainer = styled.div`
    max-width: 80vw;
    margin-top: 0;
    padding: 0 5rem;

    @media (max-width: 1100px) {
        margin: 0 3rem;
    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        margin: 0px 3rem;
        }

    @media (max-width: 420px) {
        margin: 0px auto;
        padding: 0px;
        }

    h1 {
        margin-top: 4rem;
        line-height: 1.2em;
        @media (max-width: 768px) {
            margin-top: 0;
            }
    }

    h4 {
        font-weight: 300;
        padding-bottom: 5px;
    }

    .photo {
        width: 400px;
        height: 450px;
        z-index: 500;
        background-color:  ${colors.darkPurple};
        padding-bottom: 0px;

        @media (max-width: 768px) {
            top: 8rem;
            left: 2rem;
            width: 200px;
            height: 220px;
        }

        @media (max-width: 420px) {
                width: 80vw;
                height: 95vw;
                position: relative;
                border: none;
                top: 0px;
                left: 0px;
                overflow: initial;
                margin: 10px auto;
                margin-top: 20px;
            }
        
        }
        

    .facts {
        margin-top: -350px;
        padding: 30px;
        padding-top: 5px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        margin-left: 18rem;

            @media (max-width: 768px) {
                margin-top: 100px;
                padding: 20px;
                margin-left: -12rem;
                margin-right: 30px;
            }

            @media (max-width: 420px) {
                margin: 10px;
                padding: 10px;
                padding-left: 10px;                
                box-shadow: none;                
                background-color: transparent;  
                backdrop-filter: none;
            }
    }

    
    .description {
        padding-left: 7rem;
        @media (max-width: 768px) {
            padding-left: 3rem;
            }
        @media (max-width: 420px) {
            padding-left: inherit;
            }
    }

    .posts a {
        color: inherit;
        text-decoration: none;
    }

    .posts h3 {
        border-bottom: 1px solid ${colors.green};
        line-height: 1.7rem;
        padding: 5px;
        padding-left: 0px;
        @media (max-width: 420px) {
            font-size: 1.3rem;        
            }
    }
    
    .log {
        color: ${colors.green};
    }

    .date {
        font-size: 1.2rem;
    }

    .excerpt {
        margin-top: -15px;
    }

    .loadMorePosts {
        margin-top: 20px;
        padding-left: 0px;        
        color: ${colors.defaultColor};
        font-size: 1.5rem;
        border: none;
        border-bottom: 1px solid ${colors.defaultColor};
        background-color: transparent;        
        cursor: pointer;
        outline: none;

        @media (max-width: 500px) {
            font-size: 1.2rem;
        }
    }
    
`
const LearnLog = ({ data }) => {
    const [nbOfPosts, setNbOfPosts] = useState(5);
    const [showMorePosts, setShowMorePosts] = useState(true);

    const loadMorePosts = () => {
        setNbOfPosts(nbOfPosts+5);
        if (nbOfPosts===data.allMarkdownRemark.edges.length) {
            setShowMorePosts(false);
        }
    }

    return(
        <Layout>
            <FadeIn>
                <Container>
                <SubContainer>
                    <div className="photo">
                        <MainPhoto 
                            image={image} 
                            width={'100%'} 
                            >
                        </MainPhoto>
                        
                    </div>                
                    <div className="facts">
                        <div className="description">
                        <h1>Welcome to my <span className="log">Coding Log</span></h1>
                        <p>I included this section to keep track of my progress in learning web development. But I might write about other topics too.</p>
                        {data.allMarkdownRemark.edges.map(({ node }, i) => ( 
                           i < nbOfPosts && <div key={node.id} className="posts">
                                                <Link to={node.fields.slug}>
                                                    <h3>
                                                        <span className="log">{node.frontmatter.title}{" "}</span>
                                                        <span className="date">{node.frontmatter.date}</span>
                                                                                
                                                    </h3>                        
                                                    <p className="excerpt">{node.excerpt}</p>
                                                </Link>
                                                </div>
                        ))}
                        {showMorePosts && <button className="loadMorePosts" onClick={loadMorePosts}>
                                           Load more logs...
                                         </button>
                            }
                        </div>
                    </div>   
                    </SubContainer>                       
                </Container>
            </FadeIn>  
        </Layout> 
    )
}

export default LearnLog;

export const query = graphql`
    query  {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                }
                fields {
                    slug
                  }
                excerpt                
              }
            }
          }
    }
`