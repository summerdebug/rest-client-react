import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import './App.css'
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'

function App() {
  const [url, setUrl] = useState("http://localhost:8080/api/validate/trades");
  const [requestBody, setRequestBody] = useState("Request body");

  const sendClick = () => {
    alert(requestBody)
  }

  return (
    <div className="App">
      <Container fluid>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="urlGroup">
                  <InputGroup className="my-3">
                    <InputGroup.Text>URL</InputGroup.Text>
                    <Form.Control type="text" value={url}
                      onChange = {e => setUrl(e.target.value)} />
                  </InputGroup>
                </Form.Group></Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="my-3" controlId="request">
                  <Form.Label>Request</Form.Label>
                  <Form.Control as="textarea" rows={5} value = {requestBody}
                    onChange={e => setRequestBody(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="my-3" controlId="response">
                  <Form.Label>Response</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col><Button variant="primary" onClick={sendClick}>Send</Button></Col>
              <Col><Button variant="secondary">Clear</Button></Col>
            </Row>
          </Form>
      </Container>
    </div>
  );
}

export default App;
