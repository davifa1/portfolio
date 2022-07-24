import { Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import './index.css'

const URL = 'https://avatars.githubusercontent.com/u/63513686?v=4';
const URL_BASE = 'https://firebasestorage.googleapis.com/v0/b/aula-105.appspot.com/o/ignite%20Lab%20-%20reactnative%203%2Fwallpapers%2FWallpaper%20-%202560x1080.png?alt=media&token=625fbc4e-79eb-42a2-b4bd-d59011a89eda';

export function Main() {
    return (
        <div className='container'>
            <div className="projects">
                <header>
                    <Text color={'var(--text-color)'} fontSize={33} fontWeight={700}>Hello, welcome</Text>
                    <Text color={'var(--text-color)'} opacity='0.7'>#NeverStopLearning</Text>
                </header>
            </div>

            <div className='Profile'>
                <div className='about'>
                    <img src={URL} alt='photo_git'/>
                    <Text color={'var(--text-color)'} fontSize={20}>Davi Henrique</Text>
                    <NavLink  to='/About' _blank>VISUALIZAR PERFIL</NavLink>
                </div>
                
                <div className='destaque'>
                    <img  src={URL_BASE} alt='reactjs' />
                </div>
            </div>

            <footer>
                <p>&copy;StarMax</p>
                <a href='https://github.com/davifa1'>Github</a>
            </footer>
        </div>
    );
}