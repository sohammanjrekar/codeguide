import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CollapsibleExample from './Layouts/header';
import OffcanvasExample from './Components/offcanvas';
import Footer from './Layouts/Footer';
import Carousel1 from './Components/Carousel';

function App() {
  return (
    <div className="App">
  <CollapsibleExample/>
    <Container>
     <OffcanvasExample/>
      {/* <Spinner/> */}
      <Carousel1/>
      <Row>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
