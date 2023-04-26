const telegramPost = require("../REST/post_telegram").post;
module.exports.unknownCommand = function (chat_id) {
  telegramPost(chat_id, "this command is not undefined");
};
