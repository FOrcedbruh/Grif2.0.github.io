import { useState, useEffect } from "react";





const ProgressBar = ({wrapperRef}) => {

    
    let [percent, setPercent] = useState(0);

    const progress = () => {
        const windowScroll = window.scrollY;
        const height = 6503;
        setPercent(percent = (windowScroll / height * 100));
    }

    useEffect(() => {
        window.addEventListener('scroll', progress);


        return () => {
            window.removeEventListener('scroll', progress);
        }
    }, []);

    return (
        <section className='progressBar' style={{width: `${percent}%`}}>

        </section>
    )
}



export default ProgressBar;