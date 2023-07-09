import Header from "./Header";
import Main from "./Main";
import LogAndBetter from "./LogAndBetter.jsx";
import News from './News.jsx';
import { useState, useEffect, useRef } from "react";
import Registration from "./Registration.jsx";
import Slider from "./Carousel.jsx";
import Footer from "./Footer.jsx";
import Lock from "./Lock.jsx";
import Phones from "./Phones.jsx";
import Profile from "./Profile.jsx";
import MoreNews from "./MoreNews.jsx";
import Tests from "./Tests.jsx";
import TopBtn from './TopBtn.jsx';
import Courses from "./Courses.jsx";
import WelcomeMessage from './WelcomeMessage.jsx';
import MainTest from "./MainTest.jsx";
import ProgressBar from "./ProgressBar.jsx";





const App = () => {
    // Появление окна регистрации
    const [reg, setReg] = useState(false);

    const activeReg = () => {
        setReg(!reg);
    }
    // появление замка

    const [lock, setLock] = useState(false);


    // блокировка wrapper
    const [blockWrap, setBlockWrap] = useState(false);

    // рендер профиля

    const [profile, setProfile] = useState(false);

    // рендер новостей

    const [news, setNews] = useState(false);

    // рендер окна с тестами

    const [testWin, setTestWin] = useState(false);


    // рендер окна с курсами

     const [courses, setCourses] = useState(false);


     // рендер сообщения с приветствием


     const [message, setMessage] = useState(false);


     // рендер главного теста

     const [mainTest, setMainTest] = useState(false)

    const pressEsc = e => {
        if (e.key === 'Escape') {
            setCourses(false);
            setNews(false);
            setTestWin(false);
            setProfile(false);
            setMainTest(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', pressEsc);
    }, [])

    let wrapperRef = useRef();

    

    return (
        <div className="wrapper" id={blockWrap ? "block" : ""} ref={wrapperRef}>
            <ProgressBar wrapperRef={wrapperRef}/>
            <Header testWin={testWin} setTestWin={setTestWin} activeReg={activeReg} reg={reg} setReg={setReg} lock={lock} setLock={setLock}  blockWrap={blockWrap} setBlockWrap={setBlockWrap} profile={profile} setProfile={setProfile} news={news} setNews={setNews} courses={courses} setCourses={setCourses}/>
            {reg && <Registration reg={reg} setReg={setReg}/>}
            {message && <WelcomeMessage message={message} setMeassge={setMessage}/>}
            <Main testWin={testWin} setTestWin={setTestWin} mainTest={mainTest} setMainTest={setMainTest}/>
            <Phones />
            <LogAndBetter />
            <News news={news} setNews={setNews}/>
            {news && <MoreNews news={news} setNews={setNews}/>}
            <Slider />
            <Footer />
            <TopBtn />
            {mainTest && <MainTest mainTest={mainTest} setMainTest={setMainTest}/>}
            {lock && <Lock lock={lock} setLock={setLock}/>}
            {profile && <Profile profile={profile} setProfile={setProfile}/>}
            {testWin && <Tests testWin={testWin} setTestWin={setTestWin}/>}
            {courses && <Courses courses={courses} setCourses={setCourses}/>}
        </div>
    )
}

export default App;