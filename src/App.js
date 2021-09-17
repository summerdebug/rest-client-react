import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="urlGroup">
                  <Form.Label>URL</Form.Label>
                  <Form.Control type="text" placeholder="http://localhost:8080/api/validate/trades" />
                </Form.Group></Col>
            </Row>
            <Row>
              <Col>Row 2, Col 1</Col>
            </Row>
            <Row>
              <Col>Row 3, Col 1</Col>
            </Row>
          </Form>
      </Container>
    </div>
  );
}

export default App;
