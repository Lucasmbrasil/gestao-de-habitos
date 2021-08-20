import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CopyrightIcon from '@material-ui/icons/Copyright';
import {Container, Main, Header, Footer} from './styles';
import imgArthur from '../../assets/arthur.jpeg';
import imgFelipe from '../../assets/felipe.jpeg';
import imgIasmim from '../../assets/iasmim.jpeg';
import imgKeila from '../../assets/keila.jpeg';
import imgLucas from '../../assets/lucas.jpeg';
import gitlab from '../../assets/gitlab.svg';
import linkedin from '../../assets/linkedin.svg';
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion"; 

const Contact = () => {
    const history = useHistory();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3 }}
        >
        <Container>
            <Header>
                <h1 onClick={() => history.push('/')}>procrastinare</h1>
                <AccountCircleOutlinedIcon onClick={() => history.push('/dashboard')}/>
            </Header>
            <Main>
                <h1>conheça mais sobre os devs do <strong>procrastinare</strong></h1>
                <div className='devs-container'>
                <div className="person-card">
                    <div className="dev">
                        <h1>scrum master</h1>
                        <img src={imgFelipe} alt="Felipe Nunes"/>
                    </div>
                    <div className="contact">
                        <h2>Felipe Nunes</h2>
                        <div className="contact-div">
                            <a href='https://gitlab.com/felipeenunes'><img src={gitlab} alt="GitLab"/></a>
                            <a href='https://www.linkedin.com/in/felipeenunes/'><img src={linkedin} alt="LinkedIn"/></a>
                        </div>
                    </div>
                </div>
                <div className="person-card" >
                    <div className="dev">
                        <h1>tech leader</h1>
                        <img src={imgLucas} alt="Lucas Brasil"/>
                    </div>
                    <div className="contact">
                        <h2>Lucas Brasil</h2>
                        <div className="contact-div">
                            <a href='https://gitlab.com/lucasbrasil'><img src={gitlab} alt="GitLab"/></a>
                            <a href='https://www.linkedin.com/in/lucas-brasil-b666b3207/'><img src={linkedin} alt="LinkedIn"/></a>
                        </div>
                    </div>
                </div>
                <div className="person-card">
                    <div className="dev">
                        <h1>product owner</h1>
                        <img src={imgIasmim} alt="Iasmim Oliveira"/>
                    </div>
                    <div className="contact">
                        <h2>Iasmim Oliveira</h2>
                        <div className="contact-div">
                            <a href='https://gitlab.com/oliviasmim'><img src={gitlab} alt="GitLab"/></a>
                            <a href='https://www.linkedin.com/in/oliveiasmim/'><img src={linkedin} alt="LinkedIn"/></a>
                        </div>
                    </div>
                </div>
                <div className="person-card">
                    <div className="dev">
                        <h1>quality assurance</h1>
                        <img src={imgArthur} alt="Arthur Goulart"/>
                    </div>
                    <div className="contact">
                        <h2>Arthur Goulart</h2>
                        <div className="contact-div">
                            <a href='https://gitlab.com/Javascript_worm'><img src={gitlab} alt="GitLab"/></a>
                            <a href='https://www.linkedin.com/in/arthur-goulart-99a7b118b/'><img src={linkedin} alt="LinkedIn"/></a>
                        </div>
                    </div>
                </div>
                <div className="person-card">
                    <div className="dev">
                        <h1>quality assurance</h1>
                        <img src={imgKeila} alt="Keila Passos"/>
                    </div>
                    <div className="contact">
                        <h2>Keila Passos</h2>
                        <div className="contact-div">
                            <a href='https://gitlab.com/keila_passos'><img src={gitlab} alt="GitLab"/></a>
                            <a href='https://www.linkedin.com/in/keila-aparecida-rodrigues-passos-67aa571a3/'><img src={linkedin} alt="LinkedIn"/></a>
                        </div>
                    </div>
                </div>
                </div>
            </Main>
            <Footer>
                <CopyrightIcon/>
                <p>copyright</p>
            </Footer>
        </Container>
    </motion.div>
    )
}

export default Contact;