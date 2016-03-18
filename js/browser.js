var getRepos = require('./../js/gitHub.js').getRepos;
var apiKey = require('./../.env').apiKey;

$( document ).ready(function() {
  $('form#search').submit(function(event){
    event.preventDefault();
    var searchUser = $('#username').val();
    var resultName = getRepos(searchUser);
  });
    });
