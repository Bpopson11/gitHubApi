var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos' +'?access_token=' + apiKey).then(function(response){
    var repos = response;
    $(repos).each(function() {
      $('#userRepos').append('<li><a href="' + this.html_url + '">' + this.name + '</a></li>');
      if (this.description !== '' || null) {
        $('#userRepos').append('Description: ' + this.description + '<br>');
      } else {
        $('#userRepos').append('Description: N/A <br>');
      }
      $('#userRepos').append('Primary Language Used: ' + this.language);
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

////user gist
exports.getGist = function(username){
  $.get('https://api.github.com/users/' + username + '/gists' +'?access_token=' + apiKey).then(function(response){
    var gists = response;
    console.log(typeof response);
      if ($.isEmptyObject(gists) === false) {
        $('#userGists').append('<a href="https://gist.github.com/search?utf8=%E2%9C%93&q=user%3A' + username + '&ref=searchresults" target="_blank">' + username + '</a> has some gists too!<br>');
      }
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
