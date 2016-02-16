var React = require('react')

var Buttons = React.createClass({
  render: function() {
    var buttonOneState, buttonTwoState;

    if (this.props.running) {
      buttonOneState = "Split";
      buttonTwoState = "Stop";
    } else {
      buttonOneState = "Start";
      buttonTwoState = "Reset";
    }
    return (
      <div>
        <button onClick={this.props.buttonOneClick}>{buttonOneState}</button>
        <button onClick={this.props.buttonTwoClick}>{buttonTwoState}</button>
      </div>
    )
  }
})

module.exports = Buttons;
