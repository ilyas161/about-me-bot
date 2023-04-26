const { default: axios } = require("axios");
module.exports.post = async function (chat_id, textForPost) {
  return await axios.post(
    "https://api.telegram.org/bot" +
      process.env.token_bot +
      "/sendMessage?chat_id=" +
      chat_id +
      "&text=" +
      textForPost
  );
};
