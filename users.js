import readLine from 'readline';
import fs from 'fs';

const userData = 'data/user.txt';

const rl = readLine.createInterface({
  input: fs.createReadStream(userData)
});
let users = [];

module.exports = function () {
  return new Promise(function (resolve, reject) {
    rl.on('line', function (line) {

      const strLength = line.length;
      const pattern = "follows";
      let users1 = line.substr(0,line.indexOf(pattern)).trim();
      let users2 = line.substr(line.indexOf(pattern)+pattern.length, strLength).trim();

      let temp = users2.split(',');
      users = users.concat(temp).concat(users1);

    }).on('close', function() {

      users = users.map(e => e.trim());
      let uniqUsers = [ ...new Set(users) ];
      uniqUsers.sort();
      resolve(uniqUsers);
    })
  })
};



