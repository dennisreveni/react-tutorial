var $ = require('jquery');
var Actions = require('../actions/ServerActionsCreators');

var COMMENTS_URL = 'comments.json';

module.exports = {

  fetchComments: function() {
    $.ajax({
      url: COMMENTS_URL,
      dataType: 'json',
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      },
      success: function(data) {
        Actions.recieveComments(data);
      }.bind(this)
    });
  },

  createComment: function(comment) {
    $.ajax({
      url: COMMENTS_URL,
      type: 'POST',
      data: comment,
      dataType: 'json',
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      },
      success: function(data) {
        Actions.recieveComments(data);
      }.bind(this)
    });
  }

};
