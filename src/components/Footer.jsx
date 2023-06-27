import footerGerb from './../images/footerGerb.svg';
import mosuGerb from './../images/mosuGerb.png';


const Footer = () => {
    return (
        <footer>
            <img src={footerGerb} alt="Gerb" />
            <p>ФГКОУ ВО <br /><br /> "Московский университет МВД России им. В.Я. Кикотя"</p>
            <img src={mosuGerb} className='mosuGerb'/>
        </footer>
    )
}

export default Footer;