# Summary
<Guide type="Summary">
Call centers are essential to businesses of any size. In fact, [61%][1] of consumers prefer to communicate via phone, and most of them prefer self-service. Because customer satisfaction is a priority for all businesses, self-service is a critical facet of any customer-facing communications strategy.

This solution creates an intelligent call center application that processes customer order requests. Businesses with no existing call center solution can easily get started automating calls, while companies with existing human-operated call centers or Interactive Voice Response (IVR) systems can utilize this solution to extend functionality and intelligence to established workflows.

In an era when mobile phones are dominant and keypads are not always readily accessible, Call Center Automation provides an intuitive, simple, and convenient way for callers to convey their requests. This solution provides an intelligent and natural self-service experience that can be repurposed across other customer channels.
</Guide>

# Description
## Estimated Provisioning Time **<Guide type="EstimatedTime">10 Minutes</Guide>**
*Save time by contacting a trained [SI partner][3] to help you build a proof of concept or extend & integrate this solution*
> **Note** If you have already deployed this solution, you can [view your existing deployment][2] on the Cortana Intelligence portal.

<Guide type="Description">
The Cortana Intelligence Suite provides advanced analytics tools through Microsoft Azure—data ingestion, data storage, data processing and advanced analytics components—all of the essential elements for building an automated call-center solution.

This solution deploys a fully integrated service stack that manages interactive voice response (IVR) calls via Skype and the [Microsoft Bot Framework][5].

The target use case of this solution is for a fictitious company, Contoso LLC, which sells bicycles and bicycle equipment directly to customers. Contoso currently staffs a small call center to process new product orders and queries for order status. This automated solution allow's Contoso to seemlessly scale up to handle a large call volumes while maintaining zero wait times.

The `Deploy` button on this page will launch a workflow that deploys an instance of this solution within an Azure subscription of your choosing. The solution includes multiple Azure services (described below) and provides a few short instructions after the deployment that will help you setup communications with your new bot.

> For more details on this solution, including source code and data customization, explore this project on [Github][4].
</Guide>

## AI and NLP Azure Services
* **Bing Speech** transcribes raw speech data into text form
* **LUIS** (Language Understanding Intelligent Service) identifies caller intent (place an order, find an order, etc.) and spoken entities (product categories, dates, times, etc.) from the transcribed text.
* **Azure Search** matches and ranks products from the inventory against the caller's description, and applies advanced text analysis for common synonyms.
* **Microsoft Bot Framework** processes conversation results from the caller and manages the call workflow.

## Supporting Azure Services
* **Azure Web App** hosts the core logic of the bot as a Node.js web app
* **Cosmos DB** stores shared session state for every conversation, allowing the web application to scale out statelessly.
* **Azure SQL** stores product inventory and order status

## Solution Architecture
![Architecture diagram][IMG1]

The core of the solution is the bot web app, which dispatches requests to managed cloud services in order to communicate with the caller.

# Disclaimer
©2017 Microsoft Corporation. All rights reserved. This information is provided "as-is" and may change without notice. Microsoft makes no warranties, express or implied, with respect to the information provided here. Third party data was used to generate the solution. You are responsible for respecting the rights of others, including procuring and complying with relevant licenses in order to create similar datasets. 

[IMG1]: ../../assets/arch.png
[1]: https://www.talkdesk.com/blog/10-customer-services-statistics-for-call-center-supervisors/
[2]: https://start.cortanaintelligence.com/Deployments?type=ciqs-call-center-automation
[3]: https://aka.ms/callcenter-sipartners
[4]: https://github.com/Azure/cortana-intelligence-call-center-solution
[5]: https://dev.botframework.com/