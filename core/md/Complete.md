# One last step

Before you can talk to your bot, you must enable **Skype Calling** for your bot's Skype Channel.

Navigate to the [Bot Portal][1] and click your your bot's name.

1. Find the Skype Channel and click `edit`  
![screenshot][2]

1. Find the option for `1:1 audio calls` and enable it, using your bot's `calling webhook`.  
![screenshot][3]
> Your bot's calling webhook is `https://{Outputs.siteHostName}/api/calls`

1. Save the configuration.  
![screenshot][4]

# Talking to your bot

[Add the bot][5] to your Skype contacts list to start a conversation.

You can order any products from the standard Adventure Works sample database inventory. For example:
1. "Mountain bikes"
1. "Bike wash"
1. "Jersey"

[1]: https://dev.botframework.com/bots
[2]: ../../assets/skype-channel-01.png
[3]: ../../assets/skype-channel-02.png
[4]: ../../assets/skype-channel-03.png
[5]: https://join.skype.com/bot/{Outputs.appId}