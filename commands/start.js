const telegramGet = require("../REST/get_telegram").get;
const telegramPost = require("../REST/post_telegram").post;
module.exports.start = async function (chat_id) {
  let textMessage = "";
  let requestResult = "";
  try {
    requestResult = await telegramGet("getMyCommands", "");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

  if (requestResult) {
    requestResult.data.result.forEach((element) => {
      textMessage +=
        "/" + element.command + " - " + element.description + "%0A";
    });
    try {
      const resultPostRequets = await telegramPost(chat_id, textMessage);
      if (resultPostRequets.data.ok == false)
        throw new Error("false post request");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
};
