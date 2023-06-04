import Header from "./Header";
import Main from "./Main";
import LogAndBetter from "./LogAndBetter.jsx";
import News from './News.jsx';
import { useState, useEffect } from "react";
import Registration from "./Registration.jsx";
import Slider from "./Carousel.jsx";
import { CarouselTxt } from "./Carousel.jsx";
import Footer from "./Footer.jsx";
import Lock from "./Lock.jsx";
import Phones from "./Phones.jsx";
import ProtoTest from "./TestPrototype.jsx";




const App = () => {
    // Появление окна регистрации
    const [reg, setReg] = useState(false);

    const activeReg = () => {
        setReg(!reg);
    }
    // появление замка

    const [lock, setLock] = useState(false);

    // рендер теста

    const [test, setTest] = useState(false);



    return (
        <div className="wrapper">
            <Header activeReg={activeReg} reg={reg} setReg={setReg} lock={lock} setLock={setLock} test={test} setTest={setTest}/>
            {reg && <Registration />}
            <Main />
            <LogAndBetter />
            <Phones />
            <News />
            <Slider />
            <CarouselTxt />
            <Footer />
            {lock && <Lock />}
            {test && <ProtoTest />}
        </div>
    )
}


export default App;