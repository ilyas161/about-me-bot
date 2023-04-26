const express = require("express");
const app = express();
const telegramGet = require("./REST/get_telegram").get;
const commands = require("./commands/setCommands");
const aboutCommand = require("./commands/about").about;
const unknownCommand = require("./commands/unknownCommand").unknownCommand;
const helpCommand = require("./commands/help").help;
const linksCommand = require("./commands/links").links;
const startCommand = require("./commands/start").start;
const pino = require('pino-http')()
const dotenv = require("dotenv");

dotenv.config();

app.use(pino);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", async function (req, res) {
  const { message } = req.body;
  const chat_id = message?.chat?.id;
  const command = req.body.message?.text;
  if (command) {
    switch (command) {
      case "/about":
        aboutCommand(chat_id);
        break;
      case "/links":
        linksCommand(chat_id);
        break;
      case "/start":
        startCommand(chat_id);
        break;
      case "/help":
        helpCommand(chat_id);
        break;
      case "/about@about_me_foxess_bot":
        aboutCommand(chat_id);
        break;
      case "/links@about_me_foxess_bot":
        linksCommand(chat_id);
        break;
      case "/start@about_me_foxess_bot":
        startCommand(chat_id);
        break;
      case "/help@about_me_foxess_bot":
        helpCommand(chat_id);
        break;
      default:
        unknownCommand(chat_id);
        break;
    }
    //req.log.info("sas")
    res.send("Done");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  telegramGet("setMyCommands?commands=", commands);
});
