import { Component } from "react";

class ClassBasedComponent extends Component {
  // state
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  };

  handleClick = () => {
    // console.log("Clicked")
    const { showText, changeColor, count } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  componentDidMount() {
    console.log("ComponentDidMount");
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  componentDidUpdate(prevProp, prevState) {
    console.log(prevProp, prevState);

    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  componentWillUnmount(){
    console.log("ComponentWillUnmount");
  }

  render() {
    const { showText, changeColor, count, changeCountStyle } = this.state;
    console.log(changeCountStyle);
    return (
      <>
        {showText ? (
          <h4 style={{ color: changeColor ? "red" : "black" }}>
            class based component
          </h4>
        ) : null}
        <button onClick={this.handleClick}>toggle</button>
        <button
          onClick={this.handleCount}
          style={{ color: changeCountStyle ? "blue" : "yellow" }}
        >
          count {count}
        </button>
      </>
    );
  }
}
export default ClassBasedComponent;
