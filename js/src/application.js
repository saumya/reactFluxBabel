// Application Entry
//
(function(){
  console.log('Application : Entry');
  // load CSS and make style from it and add the style to the page
  require("style!css!../../css/general.css");
  //
  var React = require("react");
  var ReactDOM = require("react-dom");
  ReactDOM.render(
    <h2>Repair React</h2>,
    document.getElementById('ReactApp')
  );
})();