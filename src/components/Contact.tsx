import { useState } from 'react';
import { Figure } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Make Contact
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='bottom'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Figure>
            <a href="">
              <Figure.Image
                width={125}
                height={125}
                src="assets/wppicon.png"
              />
            </a>
            <Figure.Caption>
              Nulla vitae elit sum 22.
            </Figure.Caption>
          </Figure>
          <Figure>
            <a href="">
              <Figure.Image
                width={125}
                height={125}
                src="assets/instaicon.png"
              />
            </a>
            <Figure.Caption>
              pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Contact