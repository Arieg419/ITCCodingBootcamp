var React = require('react');
var ReactDOM = require('react-dom');

var greeter = require('./components/Component1.js');
// Presentational Component
var GreeterMessage = React.createClass({
    render: function() {
      var name = this.props.name;
      var message = this.props.message;
      return (
        <div>
          <h1>Hey {name}!</h1>
          <p>{message}</p>
          {greeter()}
        </div>
      );
    }
});

ReactDOM.render(
  <GreeterMessage name="Nathalie" message="Good morning!"/>,
  document.getElementById('app')
);