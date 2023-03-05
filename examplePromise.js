// EXAMPE Promise:
// Get and Set comments

// constructor user:
var Users = [
    {
        id : 1,
        name : "jerry",
        comments_id : [1,4,6]
    },

    {
        id : 2,
        name : "Tom",
        comments_id : [2,3,5]
    }
];

// constructor comments:
var Comments = [
    {
        id : 1,
        content : "Hello TOM",
        user_id : 1
    },

    {
        id : 2,
        content : "Hello Jerry",
        user_id : 2
    }
];

// get comment.content in array comments
function getComments() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(Comments)
    }, 1000)
  })
}
  
// get user by id of array users
function getUsersByIds(userIds) {
  return new Promise(function(resolve) {
    var result = Users.filter(function(user) {
      return userIds.includes(user.id)
    });
    setTimeout(function() {
      resolve(result)
    }, 1000)
  })
}

getComments()
  // return (users and comments) if resolve()
  .then(function(Comments) {
    var userIds = Comments.map(function(comment) {
      return comment.user_id;   // [1,2]
    });
 
    return getUsersByIds(userIds)
      .then(function(users) {
        return {
          users,
          Comments
        }
      })
   })
  // run after on .then resolve(data)
  // return html use display
  .then(function(data) {
      var contentBox = document.querySelector('.comments-block');
      let html = '';
      data.Comments.forEach(comment => {
          var user = data.users.find(function(user) {
              return user.id === comment.user_id;
          });

          html += `${user.name} : ${comment.content} </br>`;
      });
          contentBox.innerHTML = html;
  })