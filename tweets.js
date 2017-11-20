import readLine from 'readline';
import fs from 'fs';

const tweetData = 'data/tweet.txt';


const rl = readLine.createInterface({
  input: fs.createReadStream(tweetData)
});
let tweetMap = [];

function createTweetMap(user, tweet) {
  let newUserTweet = {"user": user, "tweet":tweet};
  tweetMap.push(newUserTweet);
  return tweetMap;
}

module.exports = function () {
  return new Promise(function (resolve, reject) {
    rl.on('line', function (line) {

      const strLength = line.length;
      const pattern = ">";
      let user = line.substr(0,line.indexOf(pattern));
      let tweet = line.substr(line.indexOf(pattern)+pattern.length, strLength);
      tweet = tweet.trim();

      // this is a quick error handling fix for the assignment, will reject the promise, maybe not the best way to do it
      // This error check should come on the original input of data
      if (tweet.length >140){
        reject('Too many characters');
      }

      tweetMap = createTweetMap(user, tweet);

    }).on('close', function() {

      resolve(tweetMap);
    })

  })
}