var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos' +'?access_token=' + apiKey).then(function(response){
    var repos = response;
    $(repos).each(function() {
      $('#userRepos').append('<li><a href="'+ this.html_url +'">' + this.name + '</a>');
      // $('#userRepos').append(this.description + '</li>');
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getUser = function(username){
  $.get('https://api.github.com/users/'+ username + '?access_token=' + apiKey).then(function(response){
    var userName = response.name;
    var userAvatar = response.avatar_url;
    var userCreate = response.created_at;
    var lastUpdate = response.updated_at;
    $('#userDetails').append('<li><a href="'+ response.html_url +'">' + userName + '</a>');
    $('#userDetails').append('<img class="avatar" width=100px src=' + userAvatar + '>');
    $('#userDetails').append(lastUpdate + '</li>');
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
