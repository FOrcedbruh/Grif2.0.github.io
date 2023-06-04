import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSlide from './../images/FirstSlide.jpg';
import SecondSlide from './../images/SecondSlide.jpg';
import ThirdSlide from './../images/ThirdSlide.jpg';



export const CarouselTxt = () => {
    return (
        <article className='CarouselTxt'>
            <p><span>Московский университет МВД России имени В.Я. Кикотя</span> — крупнейшее государственное образовательное учереждение высшего профессионального образования МВД России, в котором реализуются фундаментальная академическая и профильная подготовка кадров для органов внутренних дел. Объединив в своих стенах выдающихся ученых, педагогов и практиков, Университет на качественно новом уровне готовит специалистов для подразделений уголовного розыска, обеспечения охраны общественного порядка, экономической безопасности и противодействия коррупции, по делам несовершеннолетних, следователей и дознавателей, экспертов-криминалистов, специалистов в области международного сотрудничества правоохранительных органов, для юридических служб органов внутренних дел, в области информационной безопасности, по психологическому обеспечению оперативно-служебной деятельности органов внутренних дел.</p>
        </article>
    )
}


const Slider = () => {
    return (
            <div className="Carousel-window">
                <Carousel  style={{'width': '90%', 'height': '100%'}} className='carousel' keyboard={true} touch={true}>
                    <Carousel.Item style={{'height': '100%', 'width': '100%'}}>
                        <img src={FirstSlide} alt="First slide" className='d-block w-100'/>
                        <Carousel.Caption>
                            <h1></h1>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': '100%', 'width': '100%'}}>
                        <img src={SecondSlide} alt="First slide" className='d-block w-100'/>
                        <Carousel.Caption>
                            <h1></h1>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': '100%', 'width': '100%'}}>
                        <img src={ThirdSlide} alt="First slide" className='d-block w-100'/>
                        <Carousel.Caption>
                            <h1></h1>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}

export default Slider;