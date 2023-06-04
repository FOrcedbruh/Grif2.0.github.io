import Header from "./Header";
import Main from "./Main";
import LogAndBetter from "./LogAndBetter.jsx";
import News from './News.jsx';
import { useState, useEffect } from "react";
import Registration from "./Registration.jsx";
import Slider from "./Carousel.jsx";
import { CarouselTxt } from "./Carousel.jsx";
import Footer from "./Footer.jsx";



const App = () => {
    // Появление окна регистрации
    const [reg, setReg] = useState(false);

    const activeReg = () => {
        setReg(!reg);
    }



    return (
        <div className="wrapper">
            <Header activeReg={activeReg} reg={reg} setReg={setReg}/>
            {reg && <Registration />}
            <Main />
            <LogAndBetter />
            <News />
            <Slider />
            <CarouselTxt />
            <Footer />
        </div>
    )
}


export default App;