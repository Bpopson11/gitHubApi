var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos' +'?access_token=' + apiKey).then(function(response){
    var repos = response;
    $(repos).each(function() {
      $('#userRepos').append('<li><a href="' + this.html_url + '">' + this.name + '</a></li>');
      $('#userRepos').append('Language Used: ' + this.language);
      $('#userRepos').append('<br> Date Created: ' + moment.utc(this.created_at).format('LLL') + '</li>');
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getUser = function(username){
  $.get('https://api.github.com/users/'+ username + '?access_token=' + apiKey).then(function(response){
    var userName = response.name;
    var userAvatar = response.avatar_url;
    var userCreate = moment.utc(response.created_at).format('LLL');
    var lastUpdate = moment.utc(response.updated_at).format('LLL');
    $('#userDetails').append('<img class="avatar" width=100px src=' + userAvatar + '>');
    $('#userDetails').append('<li><a href="'+ response.html_url +'">' + userName + '</a>');
    $('#userDetails').append('<p> Date of Signup: ' + userCreate + '</p>');
    $('#userDetails').append('<p> Last Update: ' + lastUpdate + '</p></li>');
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
