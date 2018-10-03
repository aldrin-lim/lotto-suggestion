import React, { Component } from 'react';
import { Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SuggestionBox from './SuggestionBox';
class App extends Component {
  numbers = [41,23,12,2,12,54]
  types = [{name: "Ultra Lotto", type: "6/58"}, {name: "Super Lotto", type: "6/49"}, {name: "Lotto", type: "6/42"}]
  render() {
    return (
      <Row>
        <Col xs={{size: "10", offset: "1"}} className="mb-3">
          <h2  className="mt-4 mb-4 app-title"> 🎟️ Lotto Suggestions 🎟️  </h2>
          <p id="desc">Having hard time picking numbers? Try this numbers 🔮</p>
          <span id="note">  EHEM. BALATO PAG NANALO (*cough*) 😀💰  </span>
        </Col>
        <Col  xs={{size: "10", offset: "1"}}>
        {/* <Col xs={12}>
          <span> Ultra Lotto 6/58 </span>
          <h1 id="numbers">51 23 12 02 03 01</h1>
          <Button color="primary">Refresh Numbers</Button>
        </Col> */}
        { this.types.map((item ,i) => <SuggestionBox key={i} {...item} />) }
        </Col>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p id="me"> Made by<a href="https://www.facebook.com/crassus81" target="_blank">  Aldrin Lim 👨‍🔧 </a></p>
      </Row>
    );
  }
}

export default App;
