import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './index.css';

import Globe from './../../src/assets/globe.svg';
import Git from './../../src/assets/github.svg';
import Linkedin from './../../src/assets/linkedin.svg'

const URL = 'https://avatars.githubusercontent.com/u/63513686?v=4';

export default function Menu() {
    return (
        <div>
        <div className='boxp'>
            <img src={`${URL}`} alt='perfil photo'/>

            <h2>Davi Henrique</h2>
            <p>WEB MOBILE</p>
        </div>

        <div className='boxinfo'>
            <div className='globe'>
            <img src={Globe} alt='globe'/>
            <p>Matão-SP, Brasil</p>
            </div>

            <div className='globe'>
            <img src={Git} alt='github'/>
            <p>Github</p>
            </div>

            <div className='globe'>
            <img src={Linkedin} alt='Linkedin'/>
            <p>Linkedin</p>
            </div>
        </div>

        <div className='tech'>
            <p>JavaScript</p>
            <p>Html</p>
            <p>Css</p>
            <p>React Native</p>
            <p>React JS</p>
            <p>Node JS</p>
        </div>

       <ReactAudioPlayer className='Player'
        src="https://firebasestorage.googleapis.com/v0/b/aula-105.appspot.com/o/Never%20Stop%20Learning%20-%20Do%20While%202020%20Theme.mp3?alt=media&token=21f300bb-bef5-4e06-8cb0-e445d72ed20a"
        autoPlay
        controls
        loop
    />
        </div>
    );
}