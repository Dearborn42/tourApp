import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Styles/main.css';

export default function Details({ name, title, desc, cost, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>
        {name}
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props} className='container w-50 h-75 mx-auto my-5 bg-dark text-light'>
        <Offcanvas.Header>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Offcanvas.Title>${cost}</Offcanvas.Title>
          <br />
          {desc}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
