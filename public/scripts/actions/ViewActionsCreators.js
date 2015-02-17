var AppDispatcher = require('../dispatcher/CommentDispatcher');
var ActionTypes = require('../constants/CommentConstants');
var webUtils = require('../utils/WebApi');

module.exports = {
  create: function(data) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.COMMENT_CREATE,
      data: data
    });

    webUtils.createComment(data);
  }
}
