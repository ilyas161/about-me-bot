const { default: axios } = require("axios");
module.exports.get = async function (command, objectForRequest) {
  let dataObjectForRequest;
  if (objectForRequest) dataObjectForRequest = JSON.stringify(objectForRequest);
  else dataObjectForRequest = "";
  return await axios.get(
    "https://api.telegram.org/bot" +
      process.env.token_bot +
      "/" +
      command +
      dataObjectForRequest
  );
};
