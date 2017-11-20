import readLine from 'readline';
import fs from 'fs';

const userData = 'data/user.txt';


const rl = readLine.createInterface({
  input: fs.createReadStream(userData)
});
let userMap = [];

function createUserMap(user, followers) {

  let newUser ={"user": user, "followers":followers};

  if(userMap.some(function(item){return item["user"] === user;})){
    userMap = updateJSON(userMap,newUser);
  }else{
    userMap.push(newUser);
  }
  return userMap;
}

function updateJSON(userMap, newUpdateUser) {
  return userMap.map(function(item) {
    return (item.user === newUpdateUser.user ) ? newUpdateUser : item;
  });
}

module.exports = function () {
  return new Promise(function (resolve, reject) {
    rl.on('line', function (line) {

      const strLength = line.length;
      const pattern = "follows";
      let users1 = line.substr(0,line.indexOf(pattern)).trim();
      let users2 = line.substr(line.indexOf(pattern)+pattern.length, strLength).trim();

      userMap = createUserMap(users1, users2);

    }).on('close', function() {
      resolve(userMap);
    })

  })
}



