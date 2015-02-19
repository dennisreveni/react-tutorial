var React = require('react');
var WebUtils = require('./utils/WebApi');
var CommentBox = require('./components/CommentBox');
var CommentStore = require('./stores/CommentStore');

var POLL_INTERVAL = 2000;

WebUtils.fetchComments();

// Poll new comments
setInterval(WebUtils.fetchComments, POLL_INTERVAL);

// Lets watch DOM mutation events
// the less the better
document.addEventListener('DOMNodeInserted', function (event) {
  console.log(event);
});

CommentStore.init(window.App);

React.render(
  <CommentBox/>,
  document.getElementById('content')
);
