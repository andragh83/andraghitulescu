import React from 'react';
import profileDesktop from '../images/profileDesktop.png';
import profileMobile from '../images/profileMobile.png';
import countriesDesktop from '../images/countriesDesktop.png';
import countriesMobile from '../images/countriesMobile.png';
import smartBrainDesktop from '../images/smartBrainDesktop.png';
import smartBrainMobile from '../images/smartBrainMobile.png';
import tetrisDesktop from '../images/tetrisDesktop.png';
import tetrisMobile from '../images/tetrisMobile.png';
import dianaDesktop from '../images/dianaDesktop.png';
import dianaMobile from '../images/dianaMobile.png';
import oldProfileDesktop from '../images/oldProfileDesktop.png';
import oldProfileMobile from '../images/oldProfileMobile.png';


import { logos } from './logos';

const projectsArray = [
    {
        name: 'Portfolio Website',
        photoDesktop: profileDesktop,
        photoMobile: profileMobile,
        technologies : [
            {
                name: 'html',
                icon: logos.html
            },
            {
                name: 'css',
                icon: logos.css
            },
            {
                name: 'javascript',
                icon: logos.js
            },
            {
                name: 'react',
                icon: logos.react
            },
            {
                name: 'gatsby',
                icon: logos.gatsby
            },
            {
                name: 'graphql',
                icon: logos.graphql
            }
            ],
            github: '#',
            live: '#',            
            text: <div>
            <p>It was time to build a serious portfolio site and I wanted to do this by also learning something new.</p>
            <p>I did the tutorial in the Gatsby official documentation and then I began this project.</p>
            <p>Gatsby it's awesome!</p>
        </div>,
        },
    {
        name: 'Countries Quizzes',
        photoDesktop: countriesDesktop,
        photoMobile: countriesMobile,
        technologies : [
            {
                name: 'html',
                icon: logos.html
            },
            {
                name: 'css',
                icon: logos.css
            },
            {
                name: 'javascript',
                icon: logos.js
            },
            {
                name: 'react',
                icon: logos.react
            },
            {
                name: 'redux',
                icon: logos.redux
            }
            ],
            github: 'https://github.com/andragh83/CountriesQuizzes',
            live: 'https://andragh83.github.io/CountriesQuizzes/',
            text: <div>
                <p>Quizzes about world countries built with ReactJs and styled with Tachyons. I initially used state-full Class components, then switch to hooks, and lastly switched to Redux for storing most of the state, as I enhanced the app. I fetch the countries data from an external source and I reuse components for different quizzes.</p>
            </div>
        },
        {
            name: 'Smart Brain',
            photoDesktop: smartBrainDesktop,
            photoMobile: smartBrainMobile,
            technologies : [
                {
                    name: 'html',
                    icon: logos.html
                },
                {
                    name: 'css',
                    icon: logos.css
                },
                {
                    name: 'javascript',
                    icon: logos.js
                },
                {
                    name: 'react',
                    icon: logos.react
                },
                {
                    name: 'node',
                    icon: logos.node
                },
                {
                    name: 'postgresql',
                    icon: logos.postgresql
                }   
                ],
                github: 'https://github.com/andragh83/smart-brain',
                live: 'https://smart-brain-ag.herokuapp.com/',
                text: <div>
                        <p>Full-stack app coded with ReactJs, NodeJs, ExpressJs and PostgreSql. It uses the Clarifai API to identify faces in photos and keeps track of the number of faces the user has identified.</p>
                    </div>
            },
                {
                    name: 'My Illustrator Portfolio',
                    photoDesktop: oldProfileDesktop,
                    photoMobile: oldProfileMobile,
                    technologies : [
                        {
                            name: 'html',
                            icon: logos.html
                        },
                        {
                            name: 'css',
                            icon: logos.css
                        },
                        {
                            name: 'javascript',
                            icon: logos.js
                        },
                        {
                            name: 'react',
                            icon: logos.react
                        },
                    ],
                        github: 'https://github.com/andragh83/AndraGh',
                        live: 'https://andragh83.github.io/AndraGh/',
                        text: <div>
                                <p>The website is built with React on top of a Material UI Kit by Creative Tim.</p>
                            </div>
                    },
                    {
                        name: 'Diana Parvu',
                        photoDesktop: dianaDesktop,
                        photoMobile: dianaMobile,
                        technologies : [
                            {
                                name: 'html',
                                icon: logos.html
                            },
                            {
                                name: 'css',
                                icon: logos.css
                            },
                            {
                                name: 'javascript',
                                icon: logos.js
                            },
                            {
                                name: 'react',
                                icon: logos.react
                            },
                            {
                                name: 'wordpress',
                                icon: logos.wp
                            },
                            {
                                name: 'aws',
                                icon: logos.aws
                            }
                        ],
                            github: 'https://github.com/andragh83/dianaparvuoriginal',
                            live: 'https://andragh83.github.io/DianaParvu/',
                            text: <div>
                                    <p>The website is built with React on top of a WordPress headless CMS, originally hosted on AWS EC2. I used Axios for fetching data from the WordPress CMS. The website is fully responsive and for the layout, I used the material-UI framework.</p>
                                </div>
                        },
                    {
                        name: 'Tetris',
                        photoDesktop: tetrisDesktop,
                        photoMobile: tetrisMobile,
                        technologies : [
                            {
                                name: 'html',
                                icon: logos.html
                            },
                            {
                                name: 'css',
                                icon: logos.css
                            },
                            {
                                name: 'javascript',
                                icon: logos.js
                            },
                        ],
                            github: 'https://github.com/andragh83/tetris',
                            live: 'https://andragh83.github.io/Tetris/',
                            text: <div>
                                    <p>Basic Tetris game built in plain Javascript, no framework, no library, with a responsive layout and touch screen controls.</p>
                                </div>
                            },
    ]

    export default projectsArray;