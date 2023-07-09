import React from 'react';
import Home from './main/Home';
import Who from './main/Who';
import '../style/main.css';
import Skills from './main/Skills';
import MainPortfolio from './main/MainPortfolio';
const Main = () => {
    return (
        <>
            <Home/>
            <Who/>
            <Skills/>
            <MainPortfolio/>
            
        </>
    );
};

export default Main;