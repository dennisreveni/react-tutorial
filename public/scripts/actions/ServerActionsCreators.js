var AppDispatcher = require('../dispatcher/CommentDispatcher');
var ActionTypes = require('../constants/CommentConstants');

module.exports = {
  recieveComments: function(comments) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_RAW_COMMENTS,
      rawComments: comments
    });
  }
}
