import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/FYG_Logos.png';



function NavigationBar() {
  const linkStyle = {
    margin:"0 40px "
  };
  

  return (
    <>
    <Navbar fixed="top" style={{backgroundColor:"#e4f2e7"}}>
        <Container style={{display:"flex", justifyContent:"space-around"}} >
            <div>
                <img
              src={logo}
              width="22%"
              height="auto"
              //className="d-inline-block align-top"
              alt="logo"/>
              </div>
            
          <div>
            <Nav className="me-auto" style={{ fontSize:'20px'}}>
            <Nav.Link href="#login" style={linkStyle} >LOGIN</Nav.Link>
            <Nav.Link href="#signup" style={linkStyle} >SIGN UP</Nav.Link>
            <Nav.Link href="#aboutus" className="question-button">
                ABOUT US
            </Nav.Link>

          </Nav>
          </div>
          
        </Container>
      </Navbar>
      </>
    
  );
}

export default NavigationBar;
