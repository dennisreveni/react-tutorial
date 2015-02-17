var $ = require('jquery');
var Actions = require('../actions/ServerActionsCreators');

var COMMENTS_URL = 'comments.json';

$.ajaxSetup({
  dataType: 'json',
  error: function(xhr, status, err) {
    console.error(url, status, err.toString());
  }
});

module.exports = {

  fetchComments: function() {
    $.ajax({
      url: COMMENTS_URL,
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
      success: function(data) {
        Actions.recieveComments(data);
      }.bind(this)
    });
  }

};
