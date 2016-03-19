var getRepos = require('./../js/gitHub.js').getRepos;
var getUser = require('./../js/gitHub.js').getUser;
var getGist = require('./../js/gitHub.js').getGist;
var resetFields = require('./../js/gitHub.js').resetFields;
var apiKey = require('./../.env').apiKey;


$( document ).ready(function() {
  $('form#search').submit(function(event){
    resetFields();
    event.preventDefault();
    var searchUser = $('#username').val();
    var resultRepos = getRepos(searchUser);
    var resultUser = getUser(searchUser);
    var resultGist = getGist(searchUser);
  });
});
