module.exports.config = {
  name: "hot4",
  prefix: true,
  version: "1.0.0",
  permssion: 2,
  credits: "AYAN",
  description: "Random sexy photos for a fee",
  category: "Image",
  usages: "sexy",
  cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
    axios.get('http://api.vangbanlanhat.tk/image?type=sexy').then(res => {
    var callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + '/cache/trai.jpg')
          }, event.threadID, () => fs.unlinkSync(__dirname + '/cache/trai.jpg'), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/trai.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 1000}));
      })
  } else return api.sendMessage("Are you addicted to sex, you cunt",event.threadID,event.messageID);
}
