var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/CommentDispatcher');
var ActionTypes = require('../constants/CommentConstants');

var CHANGE_EVENT = 'change';

var _comments = [];

function _create(comment) {
  _comments.push(comment);
}

function _addComments(comments) {
  _comments = comments.slice();
}

var CommentStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _comments;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  var author, text;

  switch(action.actionType) {
    case ActionTypes.COMMENT_CREATE:
      author = action.data.author;
      text = action.data.text;

      if (!text || !author) { return; }

      _create(action.data);

      CommentStore.emitChange();
      break;

    case ActionTypes.RECEIVE_RAW_COMMENTS:
      _addComments(action.rawComments);

      CommentStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = CommentStore;
