class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // return <div>Seconds: {this.state.seconds}</div>;
    return React.createElement(
      "div",
      null,
      React.createElement("div", null, "Segundos: "),
      this.state.seconds
    );
  }
}

ReactDOM.render(
  React.createElement(Timer, null),
  document.querySelector(".app")
);
