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
  const testData =
    "[{\"customer\":\"PLUTO1\", \"ccyPair\":\"EURUSD\", \"type\":\"Spot\", \"direction\":\"BUY\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"valueDate\":\"2016-08-15\", \"legalEntity\":\"CS Zurich\", \"trader\":\"JohannBaumfiddler\"}," +
    "{\"customer\":\"PLUTO1\", \"ccyPair\":\"EURUSD\", \"type\":\"Spot\", \"direction\":\"SELL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"valueDate\":\"2016-08-22\", \"legalEntity\":\"CS Zurich\", \"trader\":\"JohannBaumfiddler\"}," +  
    "{\"customer\":\"PLUTO2\", \"ccyPair\":\"EURUSD\", \"type\":\"Forward\", \"direction\":\"SELL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"valueDate\":\"2016-08-22\", \"legalEntity\":\"CS Zurich\", \"trader\":\"JohannBaumfiddler\"}," +
    "{\"customer\":\"PLUTO2\", \"ccyPair\":\"EURUSD\", \"type\":\"Forward\", \"direction\":\"BUY\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"valueDate\":\"2016-08-21\", \"legalEntity\":\"CS Zurich\", \"trader\":\"JohannBaumfiddler\"}," +
    "{\"customer\":\"PLUTO2\", \"ccyPair\":\"EURUSD\", \"type\":\"Forward\", \"direction\":\"BUY\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"valueDate\":\"2016-08-08\", \"legalEntity\":\"CS Zurich\", \"trader\":\"JohannBaumfiddler\"}," +
    "{\"customer\":\"PLUT02\", \"ccyPair\":\"EURUSD\", \"type\":\"Forward\", \"direction\":\"BUY\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"valueDate\":\"2016-08-08\", \"legalEntity\":\"CS Zurich\", \"trader\":\"JohannBaumfiddler\"}," +
    "{\"customer\":\"PLUTO3\", \"ccyPair\":\"EURUSD\", \"type\":\"Forward\", \"direction\":\"BUY\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"valueDate\":\"2016-08-22\", \"legalEntity\":\"CS Zurich\", \"trader\":\"JohannBaumfiddler\"}," +
    "{\"customer\":\"PLUTO1\", \"ccyPair\":\"EURUSD\", \"type\":\"VanillaOption\", \"style\":\"EUROPEAN\", \"direction\":\"BUY\", \"strategy\":\"CALL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"deliveryDate\":\"2016-08-22\", \"expiryDate\":\"2016-08-19\", \"payCcy\":\"USD\", \"premium\":0.20, \"premiumCcy\":\"USD\", \"premiumType\":\"%USD\", \"premiumDate\":\"2016-08-12\", \"legalEntity\":\"CSZurich\", \"trader\":\"Johann Baumfiddler\"}," +
    "{\"customer\":\"PLUTO2\", \"ccyPair\":\"EURUSD\", \"type\":\"VanillaOption\", \"style\":\"EUROPEAN\", \"direction\":\"SELL\", \"strategy\":\"CALL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"deliveryDate\":\"2016-08-22\", \"expiryDate\":\"2016-08-21\", \"payCcy\":\"USD\", \"premium\":0.20, \"premiumCcy\":\"USD\", \"premiumType\":\"%USD\", \"premiumDate\":\"2016-08-12\", \"legalEntity\":\"CSZurich\", \"trader\":\"Johann Baumfiddler\"}," +
    "{\"customer\":\"PLUTO1\", \"ccyPair\":\"EURUSD\", \"type\":\"VanillaOption\", \"style\":\"EUROPEAN\", \"direction\":\"BUY\", \"strategy\":\"CALL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"deliveryDate\":\"2016-08-22\", \"expiryDate\":\"2016-08-25\", \"payCcy\":\"USD\", \"premium\":0.20, \"premiumCcy\":\"USD\", \"premiumType\":\"%USD\", \"premiumDate\":\"2016-08-12\", \"legalEntity\":\"CSZurich\", \"trader\":\"Johann Baumfiddler\"}," +
    "{\"customer\":\"PLUTO1\", \"ccyPair\":\"EURUSD\", \"type\":\"VanillaOption\", \"style\":\"AMERICAN\", \"direction\":\"BUY\", \"strategy\":\"CALL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"deliveryDate\":\"2016-08-22\", \"expiryDate\":\"2016-08-19\", \"excerciseStartDate\":\"2016-08-12\", \"payCcy\":\"USD\", \"premium\":0.20, \"premiumCcy\":\"USD\", \"premiumType\":\"%USD\", \"premiumDate\":\"2016-08-12\", \"legalEntity\":\"CS Zurich\", \"trader\":\"Johann Baumfiddler\"}," +
    "{\"customer\":\"PLUTO2\", \"ccyPair\":\"EURUSD\", \"type\":\"VanillaOption\", \"style\":\"AMERICAN\", \"direction\":\"SELL\", \"strategy\":\"CALL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"deliveryDate\":\"2016-08-22\", \"expiryDate\":\"2016-08-21\", \"excerciseStartDate\":\"2016-08-12\", \"payCcy\":\"USD\", \"premium\":0.20, \"premiumCcy\":\"USD\", \"premiumType\":\"%USD\", \"premiumDate\":\"2016-08-12\", \"legalEntity\":\"CS Zurich\", \"trader\":\"Johann Baumfiddler\"}," +
    "{\"customer\":\"PLUTO1\", \"ccyPair\":\"EURUSD\", \"type\":\"VanillaOption\", \"style\":\"AMERICAN\", \"direction\":\"BUY\", \"strategy\":\"CALL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"deliveryDate\":\"2016-08-22\", \"expiryDate\":\"2016-08-25\", \"excerciseStartDate\":\"2016-08-12\", \"payCcy\":\"USD\", \"premium\":0.20, \"premiumCcy\":\"USD\", \"premiumType\":\"%USD\", \"premiumDate\":\"2016-08-12\", \"legalEntity\":\"CS Zurich\", \"trader\":\"Johann Baumfiddler\"}," +
    "{\"customer\":\"PLUTO1\", \"ccyPair\":\"EURUSD\", \"type\":\"VanillaOption\", \"style\":\"AMERICAN\", \"direction\":\"BUY\", \"strategy\":\"CALL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"deliveryDate\":\"2016-08-22\", \"expiryDate\":\"2016-08-19\", \"excerciseStartDate\":\"2016-08-10\", \"payCcy\":\"USD\", \"premium\":0.20, \"premiumCcy\":\"USD\", \"premiumType\":\"%USD\", \"premiumDate\":\"2016-08-12\", \"legalEntity\":\"CS Zurich\", \"trader\":\"Johann Baumfiddler\"}," +
    "{\"customer\":\"PLUTO3\", \"ccyPair\":\"EURUSD\", \"type\":\"VanillaOption\", \"style\":\"AMERICAN\", \"direction\":\"SELL\", \"strategy\":\"CALL\", \"tradeDate\":\"2016-08-11\", \"amount1\":1000000.00, \"amount2\":1120000.00, \"rate\":1.12, \"deliveryDate\":\"2016-08-22\", \"expiryDate\":\"2016-08-19\", \"excerciseStartDate\":\"2016-08-10\", \"payCcy\":\"USD\", \"premium\":0.20, \"premiumCcy\":\"USD\", \"premiumType\":\"%USD\", \"premiumDate\":\"2016-08-12\", \"legalEntity\":\"CS Zurich\", \"trader\":\"Johann Baumfiddler\"}" +
    "]";
  const testDataFormatted = JSON.stringify(JSON.parse(testData), null, 2);
  const [requestBody, setRequestBody] = useState(testDataFormatted);
  const [response, setResponse] = useState();

  const sendClick = () => {
    fetch(url, {
      method: 'POST',
      headers: new Headers({'Content-Type':'application/json'}),
      body: requestBody
    })
    .then(response => response.json())
    .then(data => setResponse(JSON.stringify(data, null, 2)));
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
                  <Form.Control as="textarea" rows={10}
                    value = {requestBody}
                    onChange={e => setRequestBody(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="my-3" controlId="response">
                  <Form.Label>Response</Form.Label>
                  <Form.Control as="textarea" rows={10} value = {response}
                   onChange={e => setResponse(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col><Button variant="primary" onClick={sendClick}>Send</Button></Col>
              <Col>
                <Button variant="secondary" onClick = {_ => setResponse('')}>
                  Clear
                </Button>
              </Col>
            </Row>
          </Form>
      </Container>
    </div>
  );
}

export default App;
