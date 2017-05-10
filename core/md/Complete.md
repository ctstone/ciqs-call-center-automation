# One last step

Before you can talk to your bot, you must enable **Skype Calling** for your bot's Skype Channel.

1. Navigate to the [Bot Portal][5]
1. Click your your bot's name.
![screenshot][1]
1. Edit the bot's `Skype Configuration`
![screenshot][2]
1. Find the option for `1:1 audio calls` and enable it, using your bot's `calling webhook`.  
![screenshot][3]
1. Save the configuration
> Your bot's calling webhook is `https://{Outputs.siteHostName}/api/calls`

# Talking to your bot

[Add the bot][6] to your Skype contacts list to start a conversation.

You can order any products from the standard Adventure Works sample database inventory. For example:
1. "Mountain bikes"
1. "Bike wash"
1. "Jersey"

[1]: ../../assets/skype-channel-01.png
[2]: ../../assets/skype-channel-02.png
[3]: ../../assets/skype-channel-03.png
[5]: https://dev.botframework.com/bots
[6]: https://join.skype.com/bot/{Outputs.appId}