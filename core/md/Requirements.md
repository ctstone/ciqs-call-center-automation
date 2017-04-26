# Getting started

Before we deploy your new bot, we need to gather some information about your Azure Subscription

## Register a bot application ID

Sign in to the [bot developer portal](https://dev.botframework.com/bots/new) to register a new Application Id and Password for your bot and ill in the parameters on the registration page:
* **Name**: a friendly name for your bot (e.g. Adventure Works Bot)
* **Bot handle**: permanant bot name, alphanumeric only (e.g. my-aw-bot)
* **Description**: required (e.g. My sample bot)
* **Messaging endpoint**: leave this blank for now
* **Create Microsoft App ID and Password**: click the button and follow instructions to create a new Application Id
> **IMPORTANT** Copy your `App ID` and `Password`. Your password cannot be retrieved after first display.

> This deployment will reuse your App password for your Azure SQL password.
* **Owners**: your email
* **AppInsights**: leave blank for now

Finally, aggree to the terms, register the bot, and return to this page.

<!-- PowerShell: New-AzureRmADApplication-->

## Register your LUIS account

Navigate to the [LUIS Portal](https://www.luis.ai/home/keys) and sign in.

> **IMPORTANT** Copy your LUIS `Programmatic API Key`. Your programmatic key is different from endpoint keys and external keys. Make sure to only only copy the programmatic key for this step.

After you sign in and find your programmatic key, return to this page.
