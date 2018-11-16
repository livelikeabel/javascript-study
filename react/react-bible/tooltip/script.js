class Tooltip extends React.Component {
  constructor(props) {}

  toggle() {}

  render() {}
}

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(
    Tooltip,
    { text: "The book you're reading now" },
    "React Quickly"
  ),
  "was published in 2017. It's awesome!"
), document.getElementById('tooltip'));
