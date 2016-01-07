// Application Entry
//
'use strict';
(function(){
  console.log('Application : Entry');
  // load CSS and make style from it and add the style to the page
  require("style!css!../../css/general.css");
  //
  var React = require("react");
  var ReactDOM = require("react-dom");
  var ApplicationContainer = require("./components/RepairApp.react");
  //
  ReactDOM.render(
    <ApplicationContainer firstName="John" lastName='Ray'>
      <div>More coming</div>
    </ApplicationContainer>,
    document.getElementById('ReactApp')
  );
})();
