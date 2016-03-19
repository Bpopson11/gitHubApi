var getRepos = require('./../js/gitHub.js').getRepos;
var getUser = require('./../js/gitHub.js').getUser;
var getGist = require('./../js/gitHub.js').getGist;
var apiKey = require('./../.env').apiKey;

console.log(apiKey);

$( document ).ready(function() {
  $('form#search').submit(function(event){

    event.preventDefault();
    var searchUser = $('#username').val();
    var resultRepos = getRepos(searchUser);
    var resultUser = getUser(searchUser);
    var resultGist = getGist(searchUser);
  });
    });
