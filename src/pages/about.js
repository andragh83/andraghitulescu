import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logos } from "../data/logos";

import image from "../images/me3.jpg";

import { Link } from "gatsby";

import MainPhoto from "../components/MainPhoto";
import FadeIn from "react-fade-in";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

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
    margin: 0px auto;
  }

  @media (max-width: 420px) {
    margin: 0px auto;
    padding: 0;
  }

  h1 {
    margin-top: 3rem;

    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }

  h3 {
    margin-top: 3rem;

    @media (max-width: 768px) {
      margin-top: 1.5rem;
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
    background-color: ${colors.darkPurple};
    padding-bottom: 0px;

    @media (max-width: 768px) {
      top: 8rem;
      left: 2rem;
      width: 200px;
      height: 220px;
    }

    @media (max-width: 420px) {
      width: 80vw;
      height: 50vh;
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
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3),
      -10px -10px 50px rgba(0, 0, 0, 0.5);
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

      padding-left: 10px;
      box-shadow: none;
      background-color: transparent;
      backdrop-filter: none;
    }
  }

  .description,
  .subSection {
    padding-left: 7rem;
    @media (max-width: 768px) {
      padding-left: 3rem;
    }
    @media (max-width: 420px) {
      padding-left: inherit;
    }
  }

  .description a {
    color: inherit;
  }

  .teckStackSection {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .techStack {
    border-radius: 0.7rem;
    display: flex;
    justify-content: flex-start;
    padding: 0px;
    padding-right: 20px;
    padding-top: 20px;
  }

  .logo img {
    height: 45px;
    margin-top: 4px;
    padding-right: 5px;
  }

  .name {
    margin: auto 5px;
    font-size: 1.2rem;
  }
  .smIcons {
    margin-right: 10px;
    color: #ccc;
  }
  .location {
    margin-left: 20px;
  }
  .techStackSectionTitle {
    border-bottom: 1px solid ${colors.green};
  }
  .designSectionTitle {
    border-bottom: 1px solid ${colors.fuchsia};
  }
`;

const About = () => {
  return (
    <Layout>
      <FadeIn>
        <Container>
          <SubContainer>
            <div className="photo">
              <MainPhoto image={image} width={"100%"}>
                <p>
                  <a
                    href="https://www.github.com/andragh83/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="smIcons"
                      icon={logos.github}
                      size="1x"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andra-ghitulescu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="smIcons"
                      icon={logos.linkedin}
                      size="1x"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/andragh83/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="smIcons"
                      icon={logos.instagram}
                      size="1x"
                    />
                  </a>
                  <FontAwesomeIcon
                    className="location"
                    icon={logos.location}
                    size="1x"
                  />{" "}
                  London, UK
                </p>
              </MainPhoto>
            </div>

            <div className="facts">
              <div className="description">
                <h1>About me</h1>
                <p>My name is Andra Ghitulescu.</p>
                <p>
                  I’m a self-taught web developer specialized in front-end
                  development with Javascript, ReactJs with Typescript, and
                  Gatsby. I have basic knowledge of a few back-end technologies
                  like NodeJs, ExpressJs, and PostgreSQL.
                </p>
                <p>I also enjoy designing UI in Figma.</p>
                <h3>My story in a few words</h3>
                <p>
                  I learned programming in high school, with Pascal and C++, but
                  I decided to further pursue economic studies and eventually
                  made a career in that field and I've worked as a procurement
                  specialist for the past years.
                </p>
                <p>
                  I restarted to code 4 years ago by taking various online web
                  development courses which I enjoyed very much and I developed
                  a real passion for creating websites.
                </p>
                <p>
                  I've been coding as a side-hustle to my full-time job for the
                  past 2 years, building small websites for friends and family.
                  I’ve also built various personal projects to enhance my web
                  design and programming skills. You can see my most recent ones
                  in the <Link to="/projects">Projects</Link> section. The rest
                  are on my{" "}
                  <a
                    href="https://www.github.com/andragh83/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  .
                </p>
                <p>
                  At the end of 2020, I moved to London and pursued my goal of
                  working as full-time web developer job.
                </p>
                <p>
                  After hundreds of applications sent, several talks with
                  recruiters and a few interviews, I landed a job as a junior
                  developer at the most awesome startup. Now I'm puting all my
                  time and effort into meeting my own professional expectations,
                  and the ones of the people who gave me this chance by trying
                  to create value everyday.
                </p>
                <h3>My skills</h3>
              </div>
              <div className="subSection">
                <h4 className="techStackSectionTitle">Tech Stack</h4>
                <div className="teckStackSection">
                  <div className="techStack">
                    <div className="logo">
                      <FontAwesomeIcon icon={logos.html} size="3x" />
                    </div>
                    <p className="name">HTML</p>
                  </div>
                  <div className="techStack">
                    <div className="logo">
                      <FontAwesomeIcon icon={logos.css} size="3x" />
                    </div>
                    <p className="name">CSS</p>
                  </div>
                  <div className="techStack">
                    <div className="logo">
                      <FontAwesomeIcon icon={logos.js} size="3x" />
                    </div>
                    <p className="name">JavaScript</p>
                  </div>
                  <div className="techStack">
                    <div className="logo">
                      <img
                        alt=""
                        width="35px"
                        style={{ transform: "translateY(-7px)" }}
                        src={logos.ts}
                      />
                    </div>
                    <p className="name">Typescript</p>
                  </div>

                  <div className="techStack">
                    <div className="logo">
                      <FontAwesomeIcon icon={logos.react} size="3x" />
                    </div>
                    <p className="name">React</p>
                  </div>
                  <div className="techStack">
                    <div className="logo">
                      <img alt="" src={logos.redux} />
                    </div>
                    <p className="name">Redux</p>
                  </div>
                  <div className="techStack">
                    <div className="logo">
                      <img alt="" src={logos.gatsby} />
                    </div>
                    <p className="name">Gatsby</p>
                  </div>
                  <div className="techStack">
                    <div className="logo">
                      <FontAwesomeIcon icon={logos.node} size="3x" />
                    </div>
                    <p className="name">NodeJs</p>
                  </div>
                  <div className="techStack">
                    <div className="logo">
                      <img alt="" src={logos.postgresql} />
                    </div>
                    <p className="name">PostgreSql</p>
                  </div>
                </div>
                <h4 className="designSectionTitle">Design</h4>
                <div className="teckStackSection">
                  <div className="techStack">
                    <div className="logo">
                      <img alt="" src={logos.figma} />
                    </div>
                    <p className="name">Figma</p>
                  </div>
                  <div className="techStack">
                    <div className="logo">
                      <img alt="" src={logos.ps} />
                    </div>
                    <p className="name">Adobe Photoshop</p>
                  </div>
                  <div className="techStack">
                    <div className="logo">
                      <img alt="" src={logos.ai} />
                    </div>
                    <p className="name">Adobe Illustrator</p>
                  </div>
                </div>
                <h3>Outside work</h3>
                <p>
                  I'm a wife and a mother of two awesome boys who help me
                  enhance my negotiation skills everyday. I enjoy spending time
                  with my family, the sea, the mountains and illustrating in
                  watercolor.
                </p>
                <p>
                  Feel free to drop me a line anytime. You can find my contact
                  details{" "}
                  <Link style={{ color: "inherit" }} to="/contact">
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </SubContainer>
        </Container>
      </FadeIn>
    </Layout>
  );
};

export default About;
