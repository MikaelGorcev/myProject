import React from "react";
import "./error-view.css";
import dart from "./dart.png";
export default class ErrorCompon extends React.Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const ErrorView = (
      <div className="error-view">
        <img src={dart} alt="dart" style={{ width: 200 }} />
        <h3>парам пам пам, всё!</h3>
      </div>
    );
    if (this.state.hasError) {
      return ErrorView;
    }
    return this.props.children;
  }
}
