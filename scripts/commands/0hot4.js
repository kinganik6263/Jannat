module.exports.config = {
  'name': "hot4",
  'prefix': true,
  'version': "1.0.0",
  'permssion': 0x0,
  'credits': "S1M4NT0",
  'description': "SEX VIDEO",
  'category': "Hình ảnh",
  'usages': "sex vedio",
  'cooldowns': 0x5,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async ({
  api: _0x135591,
  event: _0x186f28,
  args: _0x150914,
  client: _0xfc64e,
  Users: _0x8a9dfe,
  Threads: _0x5acdae,
  __GLOBAL: _0x124c05,
  Currencies: _0x1efbea
}) => {
  const _0x478b02 = global.nodemodule.request;
  const _0x53f6e6 = global.nodemodule["fs-extra"];
  var _0x2df510 = ["--SEX VIDEO💦--"];
  var _0x5dc03d = _0x2df510[Math.floor(Math.random() * _0x2df510.length)];
  var _0x3a64ec = ["https://drive.google.com/uc?id=1HfOfgfu2jZautFPLok-ZcoJHn54f95M0", "https://drive.google.com/uc?id=1HiqV-hRwEC9AO27ZTlPHMrUyZWzx8lAC", "https://drive.google.com/uc?id=1HtcFAZKz5YYg_ZOZbN9PrbJNvFiKQorA", "https://drive.google.com/uc?id=1HNtio0iYYrz58G3F707zhLsJntmNStdy", "https://drive.google.com/uc?id=1Hkt2PGRSY1qca_l8917T2iqbZVjtwZ_e", "https://drive.google.com/uc?id=1I7ILNuGW0gerLa3h-sOq4ik8toxtQEIh", "https://drive.google.com/uc?id=1HoBsLC28BGCNjJg6fdcOpHbUoN5d7WK2", "https://drive.google.com/uc?id=1HRwuU7sd7E4pV55lHW3ZlHr8IGqlFUpb"];
  var _0x3cb620 = () => _0x135591.sendMessage({
    'body': "「 " + _0x5dc03d + " 」",
    'attachment': _0x53f6e6.createReadStream(__dirname + "/cache/15.mp4")
  }, _0x186f28.threadID, () => _0x53f6e6.unlinkSync(__dirname + "/cache/15.mp4"));
  return _0x478b02(encodeURI(_0x3a64ec[Math.floor(Math.random() * _0x3a64ec.length)])).pipe(_0x53f6e6.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => _0x3cb620());
};
