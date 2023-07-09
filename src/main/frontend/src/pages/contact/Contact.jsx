import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('jefferyGmail', 'template_5mlhcb8', form.current, 'IEVeaIR2CZOX8vl6J')
        .then((result) => {
            alert('An email has been sent.');
            window.location.reload();
        }, (error) => {
            alert('Email transmission failed');
        });
    }
    return (
        <div id="contact">
            <div className="text-center">
                <p className="title">Contact Me</p>
            </div>
            <Container>
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group controlId="user_name" className='mt-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" id="user_name" name="user_name" placeholder='Enter your name' required />
                    </Form.Group>
                    <Form.Group controlId="user_email" className='mt-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" id="user_email" name="user_email" placeholder='Enter your email' required />
                    </Form.Group>
                    <Form.Group controlId="message" className='mt-3'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" type='textarea' id="message" name="message" placeholder='Enter your comments' required />
                    </Form.Group>
                    <Button type="submit" className='mt-3'>Send</Button>
                </Form>
            </Container>
            
        </div>
    );
};

export default Contact;