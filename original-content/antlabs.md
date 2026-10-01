# ANTlabs dashboard — original case study content

Scraped from the Webflow staging site (https://emiline.webflow.io/antlabs) on 2026-10-01.
Full original text, with images noted where they appeared (filename + Webflow CDN URL),
for use when writing the real case study page at `case-studies/antlabs.html`.

---


### Introducing monitoring and management functions for ANTlabs’ centralised dashboard.

Role: Lead UX/UI Designer  
Responsibilities: Sitemapping, lofi wireframing, hifi mockups  
Date: Mar - Jul 2023  
Tools: Adobe XD, Miro

[Image: antlabs.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6682dc4f6b40b5449d44f66d_antlabs.png)

## A new screen casting service

ANTlabs is a company that provides technology solutions for businesses to manage their network infrastructure and provide internet access to their customers and guests. They focus on providing solutions for the **hospitality industry**, which includes hotels, resorts, and other hospitality businesses. Their product, ANTlabs Service Platform (ASP), a **WiFi-as-a-Service platform**, allows these businesses to take control of their WiFi service offerings across multiple organisations and sites with a **centralised dashboard**.

The client was introducing a new screen casting offering to the existing interface of ASP. I was given the opportunity to propose and design the new pages of this screen casting service management. The design should:

- Allow guests to securely/seamlessly **connect their personal devices** to stream their own content on the inroom TV.

- Allow businesses to **deploy chromecast devices and manage them** across different rooms easily.

- Provide **monitoring and management functions** to help businesses ensure service quality and proactive troubleshooting/service recovery of any casting issues.

## Reorganising the sitemap

With the addition of a new casting service, it was expected that there would be at least 8 new pages to create. These relate to the casting functionality itself, and its corresponding reports. I studied the existing product and spent some time understanding the information under each menu, before deciding to reorganise it.

The first change I made was to **separate the Sites and Services pagesby introducing a new category called *Service Management* to the primary navigation.** Previously, content such as *Bandwidth* and *VLAN*, which pertained to the other High Speed Internet and Web Filtering services, was grouped together with the remaining site management pages, all labeled under *Site Management*. This arrangement not only caused confusion for users but also threatened to overcrowd and burden the menu if we were to include the *Casting* pages within the same category.

[Image: image 123.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/68a450fd8a92f5c6ec1f87f4_image%20123.png)

Next, I discussed with ANTlabs on the type of reporting content they needed me to design. The content ranged from tables, charts, and logs. In their existing product, all such content fell under one label “Reports & Analytics”. It was already a very long menu, so I decided to **break it up into subcategories according to the type of service** to make it easier for the user to find what they need. I also **separated these reports by content type** - detailed records (logs) and overview pages (charts), so that different types of users can quickly access the different types of information they need. For example, an IT manager would likely need to see the raw data in the logs, while a General Manager may prefer to get a quick overview by reviewing data in charts.

[Image: image 124.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/68a450fdfde6d49228854433_image%20124.png)

## Addressing existing usability issues

As I moved into the design stage, I made changes to fix usability issues I found while studying their existing product. I focused on making user interactions smoother, navigation easier, and the overall interface more intuitive.

### Inaccessible content on smaller screens

- There were hidden columns that could not be accessed by users on smaller screens sizes.

[Image: Usability1.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/642f7f001df41e11486c1cab_Usability1.jpg)

##### Solution

#### Introducing column selectors

I designed a column sector to allow users to **customise the data** they view, focusing on the specific metrics or information that are most relevant to their tasks or objectives. This **flexibility** enhances user experience by **tailoring the dashboard to individual needs.**

[Image: Mask group.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/64f1ab6e72f97d02aea39a42_Mask%20group.png)

### No indication of user's present location

- The page title is not updated when user switches to a different group/organisation.

- Furthermore, when the site selector menu is collapsed, the user is not able to see the applied filters ie. they will not know which group or organisation the info comes from.

[Image: Frame 206.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/64f1b03f617569224a4e83ed_Frame%20206.png)

##### Solution

#### More emphasis on current page

**I enhanced the breadcrumb design** by giving the current page greater prominence through the use of a heavier font weight. I also made sure that each page had their individual titles.

[Image: Mask group-1.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/64f1ab6da1681bab1f0da669_Mask%20group-1.png)

### Poorly positioned buttons

- In the table listing pages, the CTAs are located at the bottom of the page. These include important buttons like “Add Site”, “Download”, “Add Site Group”, etc.

- It can be frustrating if the user is unable to find the CTA and is unable to take the specific action that they need.

[Image: Usability4.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6430167ec6b73503bfbe23b4_Usability4.jpg)

##### Solution

#### Repositioning of primary CTAs

Considering the users' goals and context of the content they are engaging with, I relocated the primary CTAs to the page's upper section. This adjustment ensures that users can promptly understand the required action.

[Image: Mask group-2.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/64f1b13ed6c15df498acadd4_Mask%20group-2.png)

## Wireframing the casting pages

Following the sitemap I created earlier, I worked on designing the new pages that would be needed for the new screen casting feature. Here are some of the lofi wireframes.

### Casting configuration page

I developed a customisable welcome screen page for administrators to **tailor the user experience** of the screen casting feature.

I incorporated components like headings, images, and videos. Additionally, I added a feature enabling administrators to save different page designs for different sites.

[Image: 5 1.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/661b6727e40a7d51ecacbcc0_5%201.jpg)

### Casting report

I designed **a log** to provide visibility into system behavior, help diagnose issues, monitor performance, ensure compliance, and support security efforts. This includes **detailed information** such as timestamp, user and room details, session duration, device information, etc.

[Image: 6.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/661b70864ca6fc688173035b_6.jpg)

### Casting overview

I created some charts to provide a **visual representation of data.** This would help management to understand and analyse complex information.

I identified two main areas of focus for stakeholders regarding the casting function: **usage and device health.** Usage data included casting sessions over time and number of user sessions, while device health data included number of devices and which were most active. I organised these into separate tabs for easy access.

[Image: 7.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/661b7086df6b936aa688aff5_7.jpg)

[Image: 8.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/661b70854d48ed30010849e2_8.jpg)

## An intuitive and aesthetic UI

I also introduced new functionalities to enhance the usability of the new casting pages. These included **dropdown menus** to categorise menu items and allow users to access specific information quickly, **sidebars to offer an accessible navigation hub** for configuration of casting devices, **prominent alert notifications** to ensure administrators are promptly informed of any issues that require attention and **charts to visually represent complex data trends and patterns** and help administrators quickly grasp network performance metrics, user activity, and other analytics.

[Image: ui2.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/64ef6eb8557a357457f642c5_ui2.jpg)

[Image: mocks.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/64f198cf73fc956b92d0a862_mocks.jpg)

## Project complete and sign off!

I reviewed the hifi mockups with the client and participated in a session to observe the product in a demo stage. After a couple of final adjustments, we obtained the client's approval and signed off on the project! Here's what they had to say.

[Image: review.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/64e41bd3e6dfc41c47f4367d_review.png)

