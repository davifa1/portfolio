import './index.css'
import File from './../assets/folder.svg';
import Star from './../assets/star.svg';

export default function Body() {
    return (
        <div className='container'>
            <div className="projects">
                <header>
                    <h1>Meus Projetos</h1>

                    <p>Ver Todos</p>
                </header>
            </div>

            <div className='cards'>
                <div className='card'>
                    <div className='itens'>
                    <img src={File} alt='folder'/>
                    <p>Maxjs</p>
                    </div>
                    <div className='footer'>
                        <img src={Star}  alt='star'/>
                        <h1>100</h1>
                    </div>
                </div>

                <div className='card'>
                    <div className='itens'>
                    <img src={File} alt='folder'/>
                    <p>Next Level Week</p>
                    <div className='footer_two'>
                        <img src={Star}  alt='star'/>
                        <h1>150</h1>
                    </div>
                    </div>
                </div>

            </div>

            <div className='explorer'>
                <h1>EXPLORER</h1>

                <div className='card'>
                    <div className='itens'>
                    <img src={File} alt='folder'/>
                    <p><a href='https://github.com/davifa1/login_mercado_livre'>Mercado Livre Clone</a></p>
                    </div>

                    <p>Clone Mercado Livre Login</p>


                    <div className='footer'>
                        <img src={Star}  alt='star'/>
                        <h1>100</h1>
                    </div>
                </div>

                <div className='card'>
                    <div className='itens'>
                    <img src={File} alt='folder'/>
                    <p><a href='https://github.com/davifa1/disneyplus_clone'>Disney Plus Colne</a></p>
                    </div>

                    <p>Clone Disney Plus Home Page</p>

                    <div className='footer'>
                        <img src={Star}  alt='star'/>
                        <h1>100</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}