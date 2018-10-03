import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import icon from './icon.svg';
export default class SuggestionBox extends Component {
    state = {
        result: []
    }
    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    generateNumber = (type) => {
        const result = [];
        while((true)) {
            if(result.length > 5) break;
            const randomNumber =  this.getRandomInt(1,parseFloat(type.split("/")[1]));
            const number = randomNumber > 9 ? randomNumber.toString() :  "0" + randomNumber.toString();
            if(!result.includes(number)) result.push(number);
        }
        console.log(result);
        this.setState({ result });
    }
    componentDidMount = () => {
        this.generateNumber(this.props.type);
    }
    refresh = () => {
        this.generateNumber(this.props.type);
    }
    render() {
        const { type, name } = this.props;
        return <Row>
        <Col xs={12} md={12} className="mb-3 mt-2">
            <span id="title"> {name} {type} </span>
            <h1 id="numbers">{ this.state.result.map(item => item + " ") }</h1>
            <a id="refresh" onClick={this.refresh} style={{ fontSize: "1em", display: "inline-block" }} href="#"><img id="icon" src={icon} style={{ width: "1em" }} />  REFRESH</a>
        </Col>
    </Row>
    }
}