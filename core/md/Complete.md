# One last step

Before you can talk to your bot, you must enable **Skype Calling** for your bot's Skype Channel.

Navigate to the [Bot Portal](https://dev.botframework.com/bots) and click your your bot's name.

Find the Skype Channel and click `edit`  
![screenshot]({PatternAssetBaseUrl}/edit-skype.png)

Find the option for **1:1 audio calls** and enable it.  
![screenshot]({PatternAssetBaseUrl}/skype-calling.png)
> Your bot's calling webhook is `https://{Outputs.siteHostName}/api/calls`

Save the configuration.

# Talking to your bot

[Add the bot](https://join.skype.com/bot/{Outputs.appId}) to your Skype contacts list to start a conversation.

You can order any products from the standard Adventure Works sample database inventory. For example:
1. Mountain bikes
1. Bike wash
1. Jersey

A static graphical [search interface](https://searchsamples.azurewebsites.net/#/adventure-works) is also available.