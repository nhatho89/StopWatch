var React = require('react'),
    ReactDOM = require('react-dom'),
    Display = require('./display'),
    Buttons = require('./buttons'),
    Splits = require('./splits');


var Watch = React.createClass({
  getInitialState: function() {
    return {elapsed: 0, running: false, splits: []};
  },

  tick: function() {
    if (this.state.running) {
      this.setState({elapsed: this.state.elapsed + 1});
    }
  },

  buttonOneClick: function() {
      if (!this.state.running) {
        this.setState({running: true});
      } else {
        var splitArray = this.state.splits;
        splitArray.push(this.state.elapsed);
        this.setState({splits: splitArray});
      }
  },

  buttonTwoClick: function() {
      if (this.state.running) {
        this.setState({running: false});
      } else {
        this.setState({elapsed: 0});
        this.setState({splits: []})
      }
  },

  componentDidMount: function() {
    setInterval(this.tick, 500);
  },

  render: function() {

    return (
      <div>
        <Display elapsed={this.state.elapsed}/>
        <Buttons
          running = {this.state.running}
          buttonOneClick = {this.buttonOneClick}
          buttonTwoClick = {this.buttonTwoClick}
        />

        <Splits splits={this.state.splits}/>
      </div>
    )
  }
});

module.exports = Watch;
