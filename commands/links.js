const telegramPost = require("../REST/post_telegram").post;
module.exports.links = async function (chat_id) {
  const linksAboutMe = process.env.token_links_about_me;
  try {
    const resultPostRequets = await telegramPost(chat_id, linksAboutMe);
    if (resultPostRequets.data.ok == false)
      throw new Error("false post request");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
