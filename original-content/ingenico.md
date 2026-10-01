# Ingenico merchant app — original case study content

Scraped from the Webflow staging site (https://emiline.webflow.io/ingenico) on 2026-10-01.
Full original text, with images noted where they appeared (filename + Webflow CDN URL),
for use when writing the real case study page at `case-studies/ingenico.html`.

---


### Designing a merchant payment Android application with diverse payment functionalities.

Role: Lead UX/UI Designer  
Responsibilities: Heuristic analysis, user flow mapping, sitemapping, lofi wireframing, rapid prototyping  
Date: Mar - Oct 2023  
Tools: Adobe XD, Miro

[Image: ingenico photo.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6676a098c142b79bf6a274f2_ingenico%20photo.png)

##### Project overview

## Transitioning from payment terminals to an Android application

Ingenico provides payment solutions and services to merchants and banks globally. Their primary product is payment terminals, which enable businesses to accept **various payment methods, such as credit/debit cards, mobile wallets, and contactless payments.
**
As the world continues to embrace the digital age, Ingenico wanted to develop an **Android application** to remain competitive. This initiative will not only help them stay on par with their competitors but also offers their clients a quicker and more cost-effective way to get started.

## Project goals

Our objectives were to establish a **user-friendly and adaptable interface** for Ingenico, aimed at delivering a seamless experience and maintaining consistency throughout the APAC regions. This design needed to be versatile enough to **cater to the unique requirements of various local markets**. For example, in some countries, QR wallets are the favored payment method, whereas in others, users still prefer card payments with either PIN entry. We also wanted to ensure a smooth experience for the users, mainly cashiers and managers.

## Studying the demo product

The client had a few demo products available. We studied these to familiarise ourselves with the diverse functionalities, and see where improvements could be made. Here are some of our findings.

### No confirmation on actions that cannot be undone

- Throughout the Sales transaction (and Refund) flow, there is a Cancel button at the bottom of each screen. The Cancel button sends the user back to the first screen of the Sales transaction flow, without prior warning.

- The user may have already gone through a number of clicks and screens - Sales > Tips > Manual entry selection > Card detail - only to have to start from the beginning if they make a mistake.

[Image: image 7.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/650e45d34ddf6e307bb6c59c_image%207.png)

[Image: solar_lightbulb-bolt-outline.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/64f20977040490c96dae5e74_solar_lightbulb-bolt-outline.png)

#### Recommendations

- We can make use of a pop up to confirm that the user would like to cancel the transaction and start from scratch.

- This helps in error prevention and gives users a second chance to confirm their request.

##### User Flow

## Mapping out the journey of a user's interaction with the app

To really understand how users might use the product, I started by creating a user flow map of the main user journeys. This basically helped me see the steps users would go through to get things done. Since the product is quite complex, the stakeholders and I decided to break it down into smaller parts. In the first batch, we focused on the most common tasks like **sales, installment payments, voiding transactions, processing refunds, and settling transactions.** Here are some of the flows I created:

### The sales flow: Processing a payment

There are two primary options available to users: **cards or QR wallets**.

- Cards include credit/debit cards, which can be **inserted, tapped, or swiped** on the Android device. Alternatively, users can **manually input their credit card details**. Certain cards may require a **Personal Identification Number (PIN)**, while others may require a **signature** for validation.

- For payment via QR wallets, users have a choice between **scanning a QR code** from their own device or **displaying a QR code for scanning** by the cashier's device.

To ensure a comprehensive understanding of the user experience, I meticulously mapped out all potential transaction flows. These flows encompass scenarios where transactions are either **approved, denied**, or encounter a **timeout** issue. In the event of a transaction failure, users would be provided with the **option to retry**. If the transaction successfully passes through these stages, it proceeds to the **processing and printing screens.**

[Image: image 8.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/650e4b4a0d853f8ef5333ed8_image%208.jpg)

### The Installment flow: Equal payments over a period of time

When it comes to **credit card installment payments**, certain merchants may offer special **promotions tied to specific brands.** The payment process begins with the cashier's selection of a particular promotion or opting for no promotion at all.

Next, the user is presented with the option to **select a payment term**. This can be done by selecting from a list of **predefined choices** (eg. 3 months, 6 months, 12 months). We also provided users with the flexibility to **manually input their preferred payment term**.

Following the selection of the payment term, users are prompted to **enter the payment amount**. The system then automatically divides this amount by the chosen payment term to calculate the installment amounts.

The remaining steps of the process follow the standard credit card sales flow.

[Image: image 9.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/650e52810d853f8ef5381f1f_image%209.jpg)

### Settlement: Completing the financial transaction

Typically, settlements are processed in separate batches by each host at the end of the day. Following discussions with stakeholders, I devised two distinct flows to streamline the settlement process.

- The first flow, termed "Settle All," enables users to **settle all transactions simultaneously.**

- The second option, known as "Settle by Host", provides users with the flexibility to **settle transactions based on the acquiring bank** associated with each transaction.

Once users have confirmed their chosen batches for settlement, the system initiates the processing, allowing users to monitor the progress until the settlement is complete and results are available. In the event of any transaction failing to settle, users are given the option to initiate a retry.

[Image: image 10.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65102a24109f7d930de9a46e_image%2010.jpg)

## Building a sitemap

By referencing the user flow map, we were able to **identify all the key screens** that users would encounter during their interactions with the app. Each branch of the user flow map represented a specific pathway or set of actions, and these translated directly into the various sections and screens within the sitemap.

[Image: sitemap.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65102b80256c06db0bd614f2_sitemap.jpg)

## Crafting the designs

After getting the green light from the stakeholders on the user flow and sitemap, I started working on the design. Here are some of the lofi and hifi designs.

### The login screens

As the only users with login access to the app would be pre-determined by the merchant (cashiers and managers), I implemented a **dropdown selection** that presents users with pre-defined user IDs to simplify the login process, **eliminating the need for users to manually input their user ID each time**.

[Image: image 34.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6676f358d4c2e617f91d88ed_image%2034.jpg)

[Image: image 35.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6676f358d7209a1da9009106_image%2035.jpg)

[Image: 2. Cashier login_revs08012023.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6676f358d7fe2c343a731802_2.%20Cashier%20login_revs08012023.jpg)

[Image: 3. Cashier login dropdown_revs08012023.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6676f35876e179e4759f2fbd_3.%20Cashier%20login%20dropdown_revs08012023.jpg)

### Designing for different market specifications

In markets like **the Philippines and Vietnam**, where larger amounts are common, I created two input field versions and keypads. One allowed up to 8-10 digits with a **'000' button** for cashier convenience.

*Following stakeholder feedback for more digits and a '00' button, we adjusted the input field's font size in the hifi stage, and added an extra keypad screen. We also included a currency dropdown for user flexibility.*

[Image: 7. Sale-Amount 290523.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6510efdac370dd7b59c1cdf7_7.%20Sale-Amount%20290523.jpg)

[Image: 7a. Sale-Amount 290523.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6510efda2be0d033d9f81890_7a.%20Sale-Amount%20290523.jpg)

[Image: 7. Sale-Amount_revs08012023 – 2.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/651101e49b756a4b5bd67605_7.%20Sale-Amount_revs08012023%20%E2%80%93%202.jpg)

[Image: 7. Sale-Amount_revs08012023 – 1.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/651101e49b756a4b5bd675fd_7.%20Sale-Amount_revs08012023%20%E2%80%93%201.jpg)

### QR wallet payments

For QR payments, I designed a **toggle** switch to allow users to easily switch between **"View QR"** which displays a QR code on the Android device, or **"Scan QR"**, where customers can scan a QR code from their own device.

[Image: 16.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6676f578737cc38e6b4941c4_16.jpg)

[Image: 15.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6676f578983da61b62e0e158_15.jpg)

[Image: Scan QR_revs08012023.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65113c33248d9d9697295c62_Scan%20QR_revs08012023.jpg)

[Image: View QR_revs08012023.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65113c334df8db4740cd5152_View%20QR_revs08012023.jpg)

### Settlement - Settle All vs Settle by Host

As users can settle transactions individually or in batches by host, I initially designed two screens. In the "Settle by Host" wireframe, I designed for the **selection of multiple hosts.**

*Later on during the hifi phase, we recognised that even if users choose to "Select by Host", they may sometimes choose to Select All, then manually de-select specific items. We enhanced the design by adding a 'Settle All' checkbox to the "Settle by Host" screen to streamline this process. *

[Image: 26. Settle All 290523 – 1.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65113e84046d708ff3241830_26.%20Settle%20All%20290523%20%E2%80%93%201.jpg)

[Image: 27. Settle by Host 290523 – 1.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65113e841208b2bc9c5207ec_27.%20Settle%20by%20Host%20290523%20%E2%80%93%201.jpg)

[Image: SETTLE ALL.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65113eb80a1a2d29d77c4d40_SETTLE%20ALL.jpg)

[Image: SETTLE BY HOST.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65113eb89743715ec260783a_SETTLE%20BY%20HOST.jpg)

### Viewing previous transactions

Another important function of the app was to allow users to view previous transactions. I designed a **transaction history page** with a **search bar** to locate transactions by Invoice number or amount. I also included **filters for Transaction Type, Host, and Payment Method** to make it easier for users to find the transaction they need. Additionally, I added **category tags** for each transaction, improving visual clarity and making it **easier for the user to scan** the list.

[Image: 30.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6676f69d22cb2a860ed0bd53_30.jpg)

[Image: 30a.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6676f6c456953a6f9cf1bed5_30a.jpg)

[Image: 30. Transaction Listing.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/651140fb540f9570a2774b01_30.%20Transaction%20Listing.jpg)

[Image: 30a. Transaction Listing - Filter.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/651140fb8d8f2eacbd863e2c_30a.%20Transaction%20Listing%20-%20Filter.jpg)

## The rest of the designs

This project is a WIP, we are currently polishing the hifi designs and a rapid prototype. In the meantime, you can view some of the other wireframes I created below!

[Image: mocks.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/651192dc021ca70225771b14_mocks.jpg)

