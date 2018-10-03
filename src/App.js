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
          <p id="desc">Having a hard time picking numbers? Try this 🔮</p>
          <span id="note">  EHEM. BALATO PAG NANALO. EHEM EHEM 😀💰  </span>
        </Col>
        <Col  xs={{size: "10", offset: "1"}}>
        { this.types.map((item ,i) => <SuggestionBox key={i} {...item} />) }
        </Col>
        <p id="me"> Made by<a href="https://www.facebook.com/crassus81" target="_blank">  Aldrin Lim 👨‍🔧 </a> <br/> <a id="github" href="https://github.com/superaldrin/lotto-suggestion" target="_blank">  Github </a></p>
        
      </Row>
    );
  }
}

export default App;
