import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare} from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
function Footer() {
  return (
    <>
    <NavBar className="flex flex-row" expand="lg" bg="dark" variant="dark" sticky="bootom">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    <FaFacebookSquare className="rounded m-2" style={{ backgroundColor: '#3b5998', fontSize:"5vh"}}/><FaInstagramSquare className="rounded m-2" style={{ backgroundColor: '#3b5998', fontSize:"5vh"}}/><FaGithubSquare className="rounded m-2" style={{ backgroundColor: '#3b5998', fontSize:"5vh"}}/> <FaTwitterSquare className="rounded m-2" style={{ backgroundColor: '#55acee', fontSize:"5vh"}}/><FaGooglePlusSquare className="rounded m-2" style={{ backgroundColor: '#55acee', fontSize:"5vh"}}/>
    
    
    <Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link href="/home">Active</Nav.Link>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav>
  <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>


 




</NavBar>






</>
  );
}

export default Footer;
