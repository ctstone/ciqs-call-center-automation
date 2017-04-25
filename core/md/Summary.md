# Call Center Automation

This solution stands up an end-to-end service that manages interactive voice response (IVR) calls via Skype and the Microsoft Bot Framework.

## Use case
Contoso LLC sells bicycles and bicycle equipement directly to customers.
Contoso currently staffs a small call center to process new product orders and queries for order status.
This solution frees up Contoso's call center staff to perform other duties by automating calls for new and existing product orders.

## AI and NLP Technology
* **Bing Speech** transcribes raw speech data into text form
* **LUIS** (Language Understanding Intelligent Service) identifies caller intent (place an order, find an order, etc.) and spoken entities (product categories, dates, times, etc.) from the transcribed text.
* **Azure Search** matches and ranks products from the inventory against the caller's description.
* **Microsoft Bot Framework** processes conversation results from the caller and manages the call workflow.

## Supporting Technology
* **App Services** hosts the core logic of the bot as a web app
* **DocumentDB** stores shared session state for every conversation, allowing the web application to scale out statelessly.
* **Azure SQL** stores product inventory and order status

## Architecture
[image here]