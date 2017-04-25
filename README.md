# About this repo
* Maintained by Chris Stone <chstone@microsoft.com>
* Project: CIQS deployment for Call Center Automation
* Use case: Provide an Interactive Voice Response (IVR) bot to process product orders for a fictious company that sells bicycles and bicycle accessories.

## Platforms
* [Bot Framework](https://docs.botframework.com/en-us/skype/calling/) with [Skype Calling](https://docs.botframework.com/en-us/skype/calling/) channel  
Routes calls to the bot
* [Bing Speech Service](https://docs.microsoft.com/en-us/azure/cognitive-services/speech/home)  
Processes speech-to-text
* [LUIS](https://www.luis.ai/) (Language Understanding Intelligent Service)  
Extracts intent and entities from text
* [Azure Search](https://docs.microsoft.com/en-us/azure/search/)  
Indexes the product catalog for product-query matching
* [Azure SQL](https://docs.microsoft.com/en-us/azure/sql-database/)  
Stores product and order data
* [DocumentDB](https://docs.microsoft.com/en-us/azure/documentdb/)  
Stores bot state and event logs
* [Azure Storage](https://docs.microsoft.com/en-us/azure/storage/)  
Stores bot audio data for debugging
* [Azure App Services](https://docs.microsoft.com/en-us/azure/app-service/)  
Hosts the bot application

# ARM Deploy

## CIQS
URL coming soon

## PowerShell
1. `New-AzureRmResourceGroup chstone-ciqs eastus`
2. `New-AzureRmResourceGroupDeployment -Name test1 -ResourceGroupName chstone-ciqs -TemplateFile .\core\azuredeploy.json`