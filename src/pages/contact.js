import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { logos } from '../data/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeIn from 'react-fade-in';

const Container = styled.div`
    @media (max-width: 768px) {
        margin-top: 40px;
        ${'' /* height: 85vh; */}
      }

  @media (max-width: 400px) {
        ${'' /* height: 83vh; */}
      }

.contactData {
        ${'' /* text-align: center;    */}
        margin: 40px;    
        margin-bottom: 20px;    
        padding: 20px;
        border: 1px solid ${colors.blue};
        border-radius: 10px;

        @media (max-width: 420px) {
            margin: 20px;
            }

    }
`

const Header = styled.div`
    text-align: center;
    margin: 20px auto;
    margin-bottom: -30px;
    width: 400px;
    border-radius: 10px;
    padding: 10px;
    background-color: ${colors.darkPurple};
    z-index: 1000;
    ${'' /* border: 1px solid ${colors.fuchsia}; */}
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);

    @media (max-width: 768px) {
        width: 300px;
      }

      @media (max-width: 420px) {
        width: 250px;
            }
`

const FormContainer = styled.div`
    ${'' /* height: 75vh; */}
    margin: 10px auto;
    width: 500px;
    padding: 20px;
    padding-top: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3), -10px -10px 50px rgba(0, 0, 0, 0.5);
    

  @media (max-width: 768px) {
        width: 350px;
      }
  @media (max-width: 420px) {
        width: 270px;
            }

    form{
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input, textarea {
        width: 400px;
        ${'' /* border-radius: 10px; */}
        border: transparent;
        border-bottom: 1px solid ${colors.green};
        outline: none;
        color: ${colors.defaultColor};
        padding: 10px;
        background-color: ${colors.darkPurple};
        font-size: 1.2rem;

        @media (max-width: 768px) {            
            font-size: .8rem;
        }

        @media (max-width: 420px) {
        width: 250px;
            }
    }

    .label {
        margin-top: 30px;
    }

    button {
        padding: 10px 50px;
        border-image: none;
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

    .clear {
        width: 100px;
        heignt: auto;
        padding: 0px;
        margin: 0px;
        background-color: transparent;
        border-color: transparent;
        color: ${colors.defaultColor};
        outline: none;
        cursor: pointer;
    }

    .formButtons {
        display: flex;
        justify-content: space-around;
        width: 300px;
        margin: 40px auto;
        @media (max-width: 420px) {
            width: 200px;
            margin: 20px auto;
            }
    }
`

const Contact = () => {

    return(
        <Layout>
        <FadeIn>
            <Container>    
                    <Header><h3>Let's keep in touch</h3></Header>
                    {/* <FadeIn delay={100}> */}
                    <FormContainer>    
                        {/* <div className='contactData'>
                            <p><FontAwesomeIcon icon={logos.mail} size="lg"/>{"  "}</p>
                            <p><FontAwesomeIcon icon={logos.phone} size="lg"/>{"  "}<FontAwesomeIcon icon={logos.whatsapp} size="lg"/>{"  "}{"  "}(UK)</p>
                            <p><FontAwesomeIcon icon={logos.phone} size="lg"/>{"  "}<FontAwesomeIcon icon={logos.whatsapp} size="lg"/>{"  "}{"  "}(RO)</p>
                        </div>                 */}
                        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                            <label>
                                <p><FontAwesomeIcon icon={logos.user} size="1x"/><span style={{paddingRight: '15px'}}/>Name</p>
                                <input type="text" name="name" id="name" required />
                            </label>
                            <label className="label">
                                <p><FontAwesomeIcon icon={logos.mail} size="1x"/><span style={{paddingRight: '15px'}}/>Email</p>
                                <input type="email" name="email" id="email" required/>
                            </label>                            
                            <label className="label">
                                <p><FontAwesomeIcon icon={logos.message} size="1x"/><span style={{paddingRight: '15px'}}/>Message</p>
                                <textarea name="message" id="message" rows="5" required/>
                            </label>
                            <div className='formButtons'>
                                <button className='grow' type="submit">Send</button>
                                <input className='clear grow' type="reset" value="Clear" />
                            </div>                            
                        </form>
                    </FormContainer>
                {/* </FadeIn> */}
            </Container>
            </FadeIn>
        </Layout> 
    )
}

export default Contact;