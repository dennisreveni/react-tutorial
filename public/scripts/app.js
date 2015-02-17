var React = require('react');
var WebUtils = require('./utils/WebApi');
var CommentBox = require('./components/CommentBox');

var POLL_INTERVAL = 2000;

WebUtils.fetchComments();

// Poll new comments
setInterval(WebUtils.fetchComments, POLL_INTERVAL);

React.render(
  <CommentBox/>,
  document.getElementById('content')
);
