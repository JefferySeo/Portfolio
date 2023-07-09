import React, {useState, useEffect} from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';

const ToTheTop = () => {
    const MoveToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    }
    const [toggleBtn, setToggleBtn] = useState(true);

    const handleScroll = () => {
        const {scrollY} = window;
        scrollY > 300 ? setToggleBtn(true) : setToggleBtn(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return toggleBtn ? (
        <div className="toTop" onClick={MoveToTop}>
            <AiOutlineArrowUp/>
        </div>
    ) : null;
};

export default ToTheTop;