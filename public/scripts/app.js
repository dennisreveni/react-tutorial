var React = require('react');
var WebUtils = require('./utils/WebApi');
var CommentBox = require('./components/CommentBox');
var CommentStore = require('./stores/CommentStore');

var POLL_INTERVAL = 2000;

function getStateFromStore() {
  return {
    data: CommentStore.getAll()
  };
}

WebUtils.fetchComments();

// Poll new comments
setInterval(WebUtils.fetchComments, POLL_INTERVAL);

document.addEventListener('DOMNodeInserted', function (event) {
  console.log(event);
});

React.render(
  <CommentBox getState={getStateFromStore} />,
  document.getElementById('content')
);
