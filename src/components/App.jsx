import Header from "./Header";
import Main from "./Main";
import LogAndBetter from "./LogAndBetter.jsx";
import News from './News.jsx';
import { useState, useEffect } from "react";
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





    return (
        <div className="wrapper" id={blockWrap ? "block" : ""}>
            <Header testWin={testWin} setTestWin={setTestWin} activeReg={activeReg} reg={reg} setReg={setReg} lock={lock} setLock={setLock}  blockWrap={blockWrap} setBlockWrap={setBlockWrap} profile={profile} setProfile={setProfile} news={news} setNews={setNews} courses={courses} setCourses={setCourses}/>
            {reg && <Registration reg={reg} setReg={setReg}/>}
            <Main testWin={testWin} setTestWin={setTestWin}/>
            <Phones />
            <LogAndBetter />
            <News news={news} setNews={setNews}/>
            {news && <MoreNews news={news} setNews={setNews}/>}
            <Slider />
            <Footer />
            <TopBtn />
            {lock && <Lock lock={lock} setLock={setLock}/>}
            {profile && <Profile profile={profile} setProfile={setProfile}/>}
            {testWin && <Tests testWin={testWin} setTestWin={setTestWin}/>}
            {courses && <Courses courses={courses} setCourses={setCourses}/>}
        </div>
    )
}

export default App;