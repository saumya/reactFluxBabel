//
// The application root, container of the whole application
// 1.0.0
// RepairApp
//
'use strict';
var React = require('react');
var ContactInfo = require('./ContactInfo.react');

var RepairApp = React.createClass({
  render:function(){
    React.Children.map(this.props.children,function(child){
      console.log('Child :',child);
    });
    return(
      <div className="reactApplicationContainer">
        <h2>Repair Application Container</h2>
        <h3>Contact : {this.props.firstName} {this.props.lastName}</h3>
        <ContactInfo />
      </div>
    );
  }
});

module.exports = RepairApp;
