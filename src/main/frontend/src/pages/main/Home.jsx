import React from 'react';

const Home = () => {
    

    return (
        <div id="home">
            <div className="home_content">
                <p className="name">Jeffery Seo</p>
                <p className="purpose">Back-end Developer.</p>
                <hr className="contour" />
                <div className="intro">
                    안녕하세요!<br/>
                    백엔드 개발자 서택상 입니다.<br/>
                    항상 지치지 않고 노력하는 개발자가 목표입니다.
                </div>
                <a href="#who" className="find_out_more">
                    더 알아보기 ↓
                </a>
            </div>
        </div>
    );
};

export default Home;