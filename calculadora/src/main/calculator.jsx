import React, { Component } from "react";

import "./calculator.css";

import Display from "./../components/display";
import Button from "./../components/button";

const initalState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initalState };

  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initalState });
  }

  setOperation(op) {
    if (this.state.current === 0) {
      this.setState({ operation: op, current: 1, clearDisplay: true });
    } else {
      const equals = op === "=";
      const currentOperation = this.state.operation;

      const values = [...this.state.values];

      if (isNaN(values[0]) || !isFinite(values[0])) {
        this.clearMemory();
        return;
      } else {
        try {
          switch (currentOperation) {
            case "/":
              values[0] = (values[0] / values[1]).toString();
              break;
            case "*":
              values[0] = (values[0] * values[1]).toString();
              break;
            case "-":
              values[0] = (values[0] - values[1]).toString();
              break;
            case "+":
              values[0] = (values[0] + values[1]).toString();
              break;
            case "=":
              values[0] = (values[0] = values[1]).toString();
              break;
            default:
              break;
          }
        } catch (e) {
          values[0] = this.state.values[0];
        }
        values[1] = 0;

        this.setState({
          displayValue: values[0],
          operation: equals ? null : op,
          current: equals ? 0 : 1,
          clearDisplay: !equals,
          values,
        });
      }
    }
  }

  addDigit(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}
