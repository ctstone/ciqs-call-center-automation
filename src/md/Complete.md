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
[Add the bot][6] to your Skype contacts list to start a conversation. You are a customer who is looking to place an order for bicycles and bicycle equipment. You are calling an interactive voice response (IVR) to find specific products, given a general description.

You can order any products from the standard Adventure Works sample database inventory. For example:
1. "Mountain bikes"
1. "Bike wash"
1. "Jersey"

This bot has one intent, to place an order. The bot will use your speech input, and any detected entities, to construct a search query for matching products. The bot will ask you clarifying questions if a product has multiple options or if your search returned multiple hits.

# Next steps
This is a simple bot that illustrates the ease of connecting Cognitive Services together to achieve an end-to-end solution.

For technical details, and to learn how to customize or scale the solution, fork this project on [GitHub][7].

Learn how to:
1. Build this project from source
1. Deploy required Azure Resources
1. Perform data wrangling on custom data sources
1. Manage search synonyms
1. Integrate LUIS entities with Azure Search

[1]: ../../assets/skype-channel-01.png
[2]: ../../assets/skype-channel-02.png
[3]: ../../assets/skype-channel-03.png
[5]: https://dev.botframework.com/bots
[6]: https://join.skype.com/bot/{Outputs.appId}
[7]: https://github.com/Azure/cortana-intelligence-call-center-solution