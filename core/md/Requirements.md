# `REQUIRED`: Register your bot

You must manually register a new bot. A bot registration is the authenticated link between you and your callers.

1. Sign in to the [bot registration portal][7]
1. Set your bot's `profile`  
![screenshot][1]
1. Set your bot's `app configuration`. Clicking the blue button will open a new page (you may have to re-authenticate with the App Registration Portal).  
![screenshot][2]
1. Register an `app` for your bot. Be sure to copy the password after it is generated. You will not be able to retrieve it again.  
![screenshot][3]
1. `Complete` your bot's registration  
![screenshot][4]

> Any fields left blank in the screenshots above may be left blank.

*Before continuing, make sure you have copied your `App Id` and `App Password`. We will need these later.*

# `REQUIRED`: Copy your LUIS programmatic key
LUIS is your bot's intelligent language service for understanding callers' intents and entities. For the bot to load the language model for this solution, you must supply your `programmatic key`.

1. Navigate to the [LUIS Portal][8] and sign in.
![screenshot][5]
1. Click the `my keys` tab and copy your `programmatic api key`
![screenshot][6]


[1]: ../../assets/create-bot-01.png
[2]: ../../assets/create-bot-02.png
[3]: ../../assets/create-bot-03.png
[4]: ../../assets/create-bot-04.png
[5]: ../../assets/luis-key-01.png
[6]: ../../assets/luis-key-02.png
[7]: https://dev.botframework.com/bots/new
[8]: https://www.luis.ai/home/keys