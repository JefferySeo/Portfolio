import React from 'react';
import { Container } from 'react-bootstrap';
import ToTheTop from '../../component/ToTheTop';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FiMail} from 'react-icons/fi';

const Footer = () => {
    
    return (
        <footer className='mt-5'>
            <Container>
                <a className='icon-wrapper bg_white' target='_blank' rel='noreferrer' href="https://github.com/JefferySeo"><img src="../images/ico/git-hub.png" alt="github" /></a>
                <a className='icon-wrapper' target='_blank' rel='noreferrer' href="https://instagram.com/taeksang.45?igshid=ZDdkNTZiNTM"><img src="../images/ico/instagram.png" alt="instagram" /></a>
                <p className='m-0 mt-3'><HiOutlineLocationMarker/> 경기도 김포시 사우동</p>
                <p className='m-0'><FiMail/> emerial94@gmail.com</p>
                <p className='mt-2'>&copy; 2023, Seo Taek Sang - Jeffery Seo, All rights reserved.</p>
            </Container>
            <ToTheTop/>
        </footer>
    );
};

export default Footer;