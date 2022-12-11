import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CollapsibleExample from './Layouts/header';
import OffcanvasExample from './Components/offcanvas';
import Footer from './Layouts/Footer';
import Carousel1 from './Components/Carousel';
import Prism from 'prismjs';
import Home from './Pages/Home';
import Code from "./Components/Code";
import './Assets/Css/prism.css'
import './Assets/JS/prism1'

Prism.highlightAll()
// import  './Assets/JS/prism1'
function App() {
  const JSCode = `const App = props => {
    return (
      <div>
        <h1> Prism JS </h1>
        <div>Awesome Syntax Highlighter</div>
      </div>
    );
  };
  `;
  return (
    <div className="App">
  <CollapsibleExample/>
    <Container>
     <OffcanvasExample/>
      {/* <Spinner/> */}
      <Carousel1/>
      <Home/>
      <Code code={JSCode} language="javascript" />
      
      <Row>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
      <pre>
  <code className="language-css">
  <button class="copy-to-clipboard-button" type="button" data-copy-state="copy">
	<span>Copy</span>
</button>
  {`
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook' 
        };
      }
  `}
  </code>
</pre>
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
