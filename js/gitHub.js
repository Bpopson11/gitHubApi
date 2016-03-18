var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos' +'?access_token=' + apiKey).then(function(response){
    var repos = response;
    $(repos).each(function() {
      $('#userRepos').append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
      $('#userRepos').append('<dd>' + this.description + '</dd>');
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
