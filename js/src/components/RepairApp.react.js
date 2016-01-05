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
      </div>
    );
  }
});

module.exports = RepairApp;
