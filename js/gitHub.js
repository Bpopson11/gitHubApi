exports.getRepos = function(){
  $.get('https://api.github.com/users/bpopson11?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
