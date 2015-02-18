var React = require('react');
var Actions = require('../actions/ViewActionsCreators');
var CommentStore = require('../stores/CommentStore');

var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

function getStateFromStore() {
  return {
    data: CommentStore.getAll()
  };
}

var CommentBox = React.createClass({
  handleCommentSubmit: function(comment) {
    Actions.create(comment);
  },

  getInitialState: function() {
    return getStateFromStore();
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CommentStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStore());
  }
});

module.exports = CommentBox;
