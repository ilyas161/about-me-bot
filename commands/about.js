const telegramPost = require("../REST/post_telegram").post;
module.exports.about = async function (chat_id) {
  const textAboutMe = process.env.token_about_me;
  try {
    const resultPostRequets = await telegramPost(chat_id, textAboutMe);
    if (resultPostRequets.data.ok == false)
      throw new Error("false post request");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
