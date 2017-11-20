import tweets from './tweets';
import users from './users';
import followers from './followers';

Promise.all([users(function (users) {}), followers(function (followers) {}),tweets(function (tweets) {}) ])
  .then(function ([users, followers, tweets]) {
    showTweets(users,followers,tweets);
  });

function showTweets(users,followers,tweets) {
  users.map(function (user) {
    showUser(user);
  getFollowers(user,followers,tweets)
  })
}

function showUser(user) {
  console.log('\n'+user);
}

function getFollowers(user,follows,tweets) {
  follows.map(function (y) {
    if (user === y.user){
      displayTweets(user,y.followers, tweets);
    }
  })
}

function displayTweets(user,followers,tweets) {
  let temp = followers.split(',');
  temp = temp.map(e => e.trim());
  tweets.map(function (y) {
    if (temp.includes(y.user) || y.user === user ) {
      let tweet = '\t@'+y.user+': '+ y.tweet;
      console.log(tweet);
    }
  })

}