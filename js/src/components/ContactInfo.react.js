//
'use strict';
var React = require('react');
/*
var ContactInfo = React.createClass({
  render:function(){
    return(
      <div>
        <div>Name : Arjun</div>
        <div>Contact Number : +91 987654321</div>
      </div>
    );
  }
});
*/
class ContactInfo extends React.Component {
  render(){
    return(
      <div>
        <div>Name : Arjun</div>
        <div>Contact Number : +91 987654321</div>
      </div>
    );
  }
}
//
module.exports = ContactInfo;
