//
'use strict';
var React = require('react');
/*
var ContactInfo = React.createClass({
  render:function(){
    return(
      <div>
        <div>Name : Jack</div>
        <div>Contact Number : +11 987654321</div>
      </div>
    );
  }
});
*/
class ContactInfo extends React.Component {
  render(){
    return(
      <div>
        <div>Name : John</div>
        <div>Contact Number : +11 987654321</div>
      </div>
    );
  }
}
//
module.exports = ContactInfo;
