import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { Link } from "gatsby";

const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 75vh;
  opacity: 0;
  animation: 1s fullOpacity both;

  @media (max-width: 768px) {
        height: 85vh;
      }

  @media (max-width: 420px) {
        height: 75vh;
      }

  .logoApear {
        font-family: 'Julius Sans One', sans-serif;
        font-size: 17em;
        color: ${colors.darkPurple};;
        animation: 7s logoShadow both;

        @media (max-width: 1100px) {
          font-size: 10em;
        }

        @media (max-width: 420px) {
          font-size: 5em;
        }
    }

    @keyframes logoShadow {
    100% {
      text-shadow: 0px 0px 10px rgba(136, 196, 219, 0.2), 0px 0px 10px rgba(193, 230, 243, 0.2);
      }
    } 
`

const Container = styled.div`
  margin-top: 2rem;
  position: absolute;
  top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 0;
      }
  
  .andraGh {
    margin-bottom: 1rem;
    color: inherit;
    font-family: 'Julius Sans One', sans-serif;
    font-size: 7em;
    text-shadow: 5px 5px 10px rgba(136, 196, 219, 0.1), -5px -5px 10px rgba(193, 230, 243, 0.1);
    animation: 7s infinite changeColor;
    animation-delay: 1s;
    
      @media (max-width: 1100px) {
        font-size: 5em;
      }

      @media (max-width: 420px) {
        font-size: 3em;
      }

    }

  @keyframes changeColor {
        20% {
            color: ${colors.fuchsia};
            
        }    
        40% {
            color: ${colors.green};
            
        }
        60% {
          color: ${colors.yellow};
            
        }
        80% {
          color: ${colors.blue};
        }
        
        100% {
          color: inherit
        }
    } 

  .ndra {
    font-size: .8em;
    
  }

  .itulescu {
    ${'' /* color: #F1C232; */}
    font-family: 'Julius Sans One', sans-serif;
    font-size: 7em;
    color: inherit;
    animation: hideaway 2s both;
    animation-delay: 1s;
    @media (max-width: 420px) {
        font-size: 2em;
      }
  }

  @keyframes hideaway {
    100% {
      color: transparent;
      font-size: 0rem;
      }
    } 

  .jobtitle {
    font-size: 2rem;
    margin: 10px auto;
    @media (max-width: 420px) {
      font-size: 1.5rem;
      }
  }
  
  .one {
    border: 1px solid ${colors.fuchsia};
    padding: 5px 10px;
    padding-right: 0px;
  }

  .two {
    border: 1px solid ${colors.fuchsia};
    padding: 15px 10px;
  }

  .three {
    border: 1px solid ${colors.fuchsia};
    padding: 10px 10px;
    padding-right: 0px;
  }

  ${'' /* .designer {
    border-bottom: 1px solid ${colors.fuchsia};
    opacity: 0;
    animation: 1s fullOpacity both;
    animation-delay: 2s;
    margin-top: 1.2rem;
    margin-bottom: 1.5rem;
    @media (max-width: 400px) {
      margin-top: 1rem;
      margin-bottom: 1.2rem;
      }
    
  } */}

  .developer {
    color: ${colors.yellow};
    opacity: 0;
    animation: 1s fullOpacity both;
    animation-delay: 1.5s;
  }

  .darkGreen {
    color: ${colors.green};
  }

  @keyframes fullOpacity {
    100% {
      opacity: 1;
      }
    }

    .buttonsSection {
        margin-top: 2rem;
        display: flex;
        justify-content: space-around;
    }

    button {
        padding: 10px 20px;
        border: 1px solid ${colors.fuchsia};
        border-radius: 10px;
        background-color: transparent;
        color: ${colors.defaultColor};
        font-size: 1.2rem;
        cursor: pointer;
        outline: none;
        @media (max-width: 768px) {
            font-size: .8rem;
        }
    }

    .code {
        border-color: transparent;
        border-bottom: 1px solid ${colors.blue};
        border-radius: 0px;
        margin-right: 30px;
        opacity: 0;
        animation: 1s fullOpacity both;
        animation-delay: 2s;
    }

    .live {
        opacity: 0;
        animation: 1s fullOpacity both;
        animation-delay: 2.5s;
    }

`

const IndexPage = () => {
  
  return (
    <Layout>
      <main>
        <title>AndraGH</title>
        <BaseContainer>
          <div className="logoApear">A<span className="ndra">ndra</span>GH</div>
          <Container>
            <p>
              <span className='andraGh'>A
                <span className="ndra">ndra</span>
                GH</span>
              <span className="itulescu">ITULESCU</span>
            </p>
            {/* <p className="jobtitle designer">
            <span>web </span>
                <span className="one">d</span>
                <span >e</span>
                <span>s</span>
                <span className="two">i</span>
                <span>gn</span>
                <span className="three">er</span>
            </p> */}
            <p className="jobtitle developer">
            <span className="darkGreen">&lt;</span>
              WebDeveloper 
            <span className="darkGreen"> /&gt;</span>
            </p>
            <div className='buttonsSection'>
                <Link to='/about'>
                    <button className="button code grow">
                        Get to know me                       
                    </button>
                </Link>                
                <Link to='/projects'>
                    <button className="button live grow">
                        View my work
                    </button>
                </Link>
                </div>
          </Container>
        </BaseContainer>
      </main>
    </Layout>
  )
}

export default IndexPage
