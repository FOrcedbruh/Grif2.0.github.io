import footerGerb from './../images/footerGerb.svg';



const Footer = () => {
    return (
        <footer>
            <img src={footerGerb} alt="Gerb" />
            <p>Данный проект создавался при поддержке министерства внутренних дел Российской Федереции, все права защищенны, пользуясь сервисом, вы даете согласие на обработку персональных данных.</p>
        </footer>
    )
}

export default Footer;