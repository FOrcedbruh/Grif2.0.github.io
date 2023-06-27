import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSlide from './../images/FirstSlide.jpg';
import SecondSlide from './../images/SecondSlide.jpg';
import ThirdSlide from './../images/ThirdSlide.jpg';





const Slider = () => {
    return (
            <div className="Carousel-window">
                <Carousel  style={{'width': '100%', 'height': '60%'}} className='carousel' keyboard={true} touch={true}>
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