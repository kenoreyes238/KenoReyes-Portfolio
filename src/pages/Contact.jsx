import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import emailjs from "@emailjs/browser"
import { useRef } from "react"

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('SERVICE_KEY', 'TEMPLATE_KEY', form.current, {
            publicKey: 'PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <Container className="contact" fluid>
            <h1>Contact Me</h1>
            <Row>
                <Col>
                    <div className="links">
                    <a href='https://github.com/kenoreyes238'>
                        <img src='gitHub.png' alt='github logo' className="icons"/>
                    </a>
                    <a href='www.linkedin.com/in/keno-reyes-3b5a47265'>
                        <img src='linkedin.png' alt='linkedin logo' className="icons"/>  
                    </a>
                    <a href='https://www.instagram.com/kxnor.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                        <img src='instagram.png' alt='insta logo' className="icons"/>  
                    </a>   
                    </div>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="name" 
                                placeholder="Enter first and last name"
                                name="user_email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                name="user_email"
                                required  
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={5}
                                name="message"
                            />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
