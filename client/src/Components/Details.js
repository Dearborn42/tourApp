import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Details({ name, title, desc, cost, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>
        {name}
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props} className='menu'>
        <Offcanvas.Header closeButton>
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
