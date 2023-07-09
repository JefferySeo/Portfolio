import React, { useEffect, useState } from 'react';
import Navigation from '../../component/Navigation';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <header className= {scrollPosition > 100 ? "move" : ""}>
            <Navigation/>
        </header>
    );
};

export default Header;