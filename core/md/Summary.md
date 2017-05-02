# Summary
Call centers are essential to businesses of any size. In fact, [61%][survey] of consumers prefer to communicate via phone, and most of them prefer self-service. Because customer satisfaction is a priority for all businesses, self-service is a critical facet of any customer-facing communications strategy.

This solution is an intelligent call center automation pattern for fulfilling customer order requests. Businesses with no existing call center solution can easily get started automating calls, while companies with existing human-operatred call centers or Interactive Voice Response (IVR) systems can utilize this solution to extend functionality and intelligence to established workflows.

In an era when mobile phones are dominant and keypads are not always readily accessible, Call Center Automation provides an intuitive, simple, and convenient way for callers to convey their requests. This solution provides an intelligent and natural self-service experience that can be repurposed across other customer channels.

# Description
## Estimated Provisioning Time **<10 Minutes**
*Save time by contacting a trained [SI partner][partners] to help you build a proof of concept or deploy & integrate this solution*
> **Note** If you have already deployed this solution, you can [view your existing deployment][deployments] on the Cortana Intelligence portal.

The Cortana Intelligence Suite provides advanced analytics tools through Microsoft Azure—data ingestion, data storage, data processing and advanced analytics components—all of the essential elements for building a personalized offer solution.

This solution deploys a fully integrated service stack that manages interactive voice response (IVR) calls via Skype and the Microsoft Bot Framework.

The target use case is for a fictious company, Contoso LLC, that sells bicycles and bicycle equipement directly to customers. Contoso currently staffs a small call center to process new product orders and queries for order status. This automated solution frees up Contoso's call center staff to perform other duties by automating call requests.

The `Deploy` button on this page will launch a workflow that deploys an instance of this solution within an Azure subscription of your choosing. The solution includes multiple Azure services (described below) and provides a few short instructions after the deployment that will help you setup communications with your new bot.

> For more details on this solution, including source code and data customization, explore this project on [GitHub][github].

## AI and NLP Stack
* **Bing Speech** transcribes raw speech data into text form
* **LUIS** (Language Understanding Intelligent Service) identifies caller intent (place an order, find an order, etc.) and spoken entities (product categories, dates, times, etc.) from the transcribed text.
* **Azure Search** matches and ranks products from the inventory against the caller's description, and applies advanced text analysis for common synonyms.
* **Microsoft Bot Framework** processes conversation results from the caller and manages the call workflow.

## Supporting Services
* **App Services** hosts the core logic of the bot as a Node.js web app
* **DocumentDB** stores shared session state for every conversation, allowing the web application to scale out statelessly.
* **Azure SQL** stores product inventory and order status

## Solution Architecture
![Architecture diagram][arch-local]

The core of the solution is the bot web app, which dispatches requests to the cognitive and storage managed services, depending on call flow logic.

[survey]: https://www.talkdesk.com/blog/10-customer-services-statistics-for-call-center-supervisors/ "Survey Source"
[deployments]: https://start.cortanaintelligence.com/Deployments?type=ciqs-call-center-automation "Your Deployments"
[partners]: https://aka.ms/personalizedoffers-sipartners "System Integraters"
[howto]: https://github.com/Azure/cortana-intelligence-call-center-solution/tree/version2
[arch-ciqs]: {PatternAssetBaseUrl}/arch.png
[arch-local]: ../../assets/arch.png
[github]: https://github.com/Azure/cortana-intelligence-call-center-solution

# Disclaimer
©2017 Microsoft Corporation. All rights reserved. This information is provided "as-is" and may change without notice. Microsoft makes no warranties, express or implied, with respect to the information provided here. Third party data was used to generate the solution. You are responsible for respecting the rights of others, including procuring and complying with relevant licenses in order to create similar datasets.
