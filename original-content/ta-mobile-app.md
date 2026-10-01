# TradeAlgo Mobile App — original case study content

Scraped from the Webflow staging site (https://emiline.webflow.io/tamobileapp) on 2026-10-01.
Full original text, with images noted where they appeared (filename + Webflow CDN URL),
for use when writing the real case study page at `case-studies/ta-mobile-app.html`.

---


### Translating the TradeAlgo web experience into a mobile app design.

Role: UXUI Designer  
Responsibilities: Sitemapping, hifi designs, handoff to dev, QC  
Date: Jan-Feb 2025

[Image: c35cea5de0da023b8509b5944e52306e_cover.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67c5352cc3e0601c13591e9c_c35cea5de0da023b8509b5944e52306e_cover.png)

## Project background

TradeAlgo, a trading analytics platform offering AI-driven market insights and trading tools, was designed for the web, and lacked a mobile optimised experience. My role was to adapt its features into a seamless mobile design while ensuring consistency and usability across devices.

## Structuring the experience

I started by analysing the web version’s information architecture to restructure it for a mobile-friendly experience. This included:

- Streamlining the navigation menu with bottom navigation. This was designed to provide quick access to the most frequently used features.

[Image: sitemap btm nav.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67c7d71c103dc07859f88923_sitemap%20btm%20nav.png)

- Less frequently accessed functions, such as profile settings, promotions, support, tutorials, and notifications, were grouped under a dedicated Menu/Profile page for better organisation. This approach ensured that core actions remained easily accessible while maintaining a clean and intuitive interface.

[Image: sitemap top nav.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67c7d7f84f08d82305ad748c_sitemap%20top%20nav.png)

## Transforming the Dashboard for mobile usability

### Adapting the Top Picks layout for mobile

On web, the *Top Picks* section featured a split-view layout: a left column listing tickers with key price details and a right column displaying more in-depth insights like AI sentiment and popular contracts upon selection. Since this layout wouldn't translate well to a smaller screen, we **redesigned it into a card-based format** where each card provided key stock details at a glance. Tapping a card led users to the ticker page, maintaining the depth of information while improving usability on mobile.

[Image: image 47.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67d266fe5a059fcdc07dffab_image%2047.jpg)

Top picks - Web

[Image: ezgif-71261003df6116.gif](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67d26605921ae7e4d289abbd_ezgif-71261003df6116.gif)

Top picks - mobile

### Making Stock Performance data more accessible

The web version displayed stock performance data in a more expansive layout, allowing users to view multiple stocks at once. For mobile, we streamlined this by showing only five tickers upfront for quick scanning, with a “View More” option leading to a dedicated Stock Performance Summary page. This page features a **side-scrolling table** for easy navigation and a **column selector**, giving users control over the data they want to see.

[Image: image 48.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67d268e832e7f70e65ea4d03_image%2048.jpg)

Stock performance - web

[Image: Group 133610.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67d3f6b7f6f676bd7cef0082_Group%20133610.png)

Stock performance - mobile

### Streamlining access to Trading Tools

Trading tools are central to the user experience, so we ensured they were accessible with minimal taps. By integrating them directly into the bottom navigation and key touchpoints within the app, users could quickly access essential features without unnecessary friction.

[Image: Group 133613.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67d61e3ea79f0c901c6e1306_Group%20133613.png)

Trading tools menu - web

[Image: dashboard.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67d634b2ad47577d40dd3e2c_dashboard.png)

Trading tools menu - mobile

## Optimising the Ticker Page

### Anchored navigation for quick access

Navigating dense financial data on a mobile screen can be overwhelming, so we implemented anchored links to help users jump directly to key sections like Overview, Performance Summary, Financials, Sentiments, and News. This reduced the need for excessive scrolling and ensured users could quickly access the information they needed.

[Image: Frame 133867.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67e2a52ac0caa0fd2888c060_Frame%20133867.png)

### Expandable & Interactive Charts

To balance detail and readability, we designed charts with an expandable option - users could tap a CTA to view a full-screen version for deeper analysis. Additionally, we introduced **pinch-to-zoom functionality**, allowing users to interact with the data more intuitively and analyse trends with precision.

[Image: Group 133614.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67e399c669c65d42ae6f8984_Group%20133614.png)

Expandable charts

[Image: image 56.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67e399c58abe68194612d0f0_image%2056.png)

Zoom using a two-finger pinch gesture

## Handoff to development

With the designs finalised, I prepared Figma files with clear documentation, interaction specs, and organised Figma files to ensure efficient implementation.

### Structuring the Figma files for clarity

To keep the handoff organised, I structured the Figma files by splitting features into different pages, ensuring that each section remained focused and easy to navigate for developers.

[Image: image 60.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67e612ec7b4e965b0f3ccbec_image%2060.png)

Each major feature had its dedicated page

[Image: live options.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67e87d18e10fc56e505ef4d1_live%20options.jpg)

Subsections for complex features

### Defining key interactions and gestures

Since mobile trading tools rely heavily on interactivity, I detailed:

- Tap, swipe and pinch gestures

- Transitions and microinteractions

[Image: 39ea37235843cffc51970bdf8b3dfd94_chart.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67e87ebb3b6229e06adcd5fb_39ea37235843cffc51970bdf8b3dfd94_chart.jpg)

[Image: Group 133615.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67e9bfc6f801b7bf3d2cdc11_Group%20133615.png)

### Light & dark mode variations

To enhance usability in different environments, we designed both light and dark mode versions of the app.

- We applied a systematic approach where each UI element adapted smoothly between modes without affecting usability.

[Image: Screen Recording 2025-04-04 at 1.41.21 PM.gif](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67ef71c52ed11fef00d9d52f_Screen%20Recording%202025-04-04%20at%201.41.21%E2%80%AFPM.gif)

- We also created separate Light Mode and Dark Mode Figma files for developer handoff

[Image: Light Mode.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67e9c1566f86c2474a3f9d8d_Light%20Mode.jpg)

[Image: Dark Mode.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/67e9c156d16a1ddbaa3b749d_Dark%20Mode.jpg)

## Final thoughts

The TradeAlgo mobile app is currently in development, and we’re now in the quality check phase, closely reviewing how the designs translate in the build and making final adjustments with the development team. I'm excited to see the app come to life so that our users can use it on the go!

