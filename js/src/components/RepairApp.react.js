//
// The application root, container of the whole application
// 1.0.0
// RepairApp
//
var React = require('react');

var RepairApp = React.createClass({
  render:function(){
    return(
      <div className="reactApplication">
        <h2>Repair Application Container</h2>
        <h3>Contact : {this.props.firstName} {this.props.lastName}</h3>
      </div>
    );
  }
});

module.exports = RepairApp;
