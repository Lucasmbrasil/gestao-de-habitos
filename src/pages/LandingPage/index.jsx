import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CopyrightIcon from '@material-ui/icons/Copyright';
import img1 from '../../assets/LandingPage1.svg';
import img2 from '../../assets/LandingPage2.svg';
import img3 from '../../assets/LandingPage3.svg';
import img4 from '../../assets/LandingPage4.svg';
import buttonLandingPage from '../../assets/ButtonLandingPage.svg';
import {Main, Header, Container, Footer} from './styles.jsx'

const LandingPage = () => {
    return (
        <Main>
            <Header>
                <h1>Procrastinare</h1>
                <AccountCircleOutlinedIcon onClick={() => console.log('clicou')}/>
            </Header>
            <Container uncolored>
                <div>
                    <h1>procrastinare</h1>
                    <h4>uma nova forma de criar hábitos</h4>
                    <img src={buttonLandingPage} alt='Começar' onClick={() => console.log("Começou")} style={{cursor: 'pointer'}}/> 
                </div>
                <div>
                    <img src={img1} alt='Início'/>
                </div>
            </Container>
            <Container>
                <div>
                    <h2>Construa novos hábitos</h2>
                    <img src={img2} alt='Novos hábitos'/>
                </div>
                <div></div>
            </Container>
            <Container uncolored>
                <div></div>
                <div>
                    <h2>Participe de Grupos. Conheça pessoas com o mesmo objetivo</h2>
                    <img src={img3} alt='Grupos'/>
                </div>
            </Container>
            <Container>
                <div>
                    <img src={img4} alt='Começar'/>
                </div>
                <div></div>
            </Container>
            <Footer>
                <CopyrightIcon/>
                <p>copyright</p>
            </Footer>
        </Main>
    )
}

export default LandingPage;