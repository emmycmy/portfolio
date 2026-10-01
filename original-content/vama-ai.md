# Vama AI — original case study content

Scraped from the Webflow staging site (https://emiline.webflow.io/vama-ai) on 2026-10-01.
Full original text, with images noted where they appeared (filename + Webflow CDN URL),
for use when writing the real case study page at `case-studies/vama-ai.html`.

---


### Conceptualising the AI features of Vama, to enhance efficiency in messaging.

Role: UI Designer  
Responsibilities: Lofi wireframes, hifi mocks, prototyping  
Date: May 2024

[Image: vama ai photo.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/66626eb5e109fa8a7828985c_vama%20ai%20photo.png)

## Introduction

This case study focuses on the design of Vama AI, an intelligent assistant integrated into our chat platform to enhance productivity and streamline communication. The goal was to explore how AI could help users manage information overload and stay organised within the chat interface. As this was an **early-stage concept,** we focused on wireframes and high-fidelity designs to quickly visualise and communicate the core ideas.

## Exploring ideas through wireframing

Two key challenges - **managing unread messages** and **improving message organisation**, were identified by the product manager and our technical stakeholders as areas where AI could add the most value. Based on these priorities, I designed two AI-powered features: Quick message summaries and Suggested actions. Below is a breakdown of each problem, the proposed solution, and my initial low-fidelity design concepts.

### Quick message summaries

**The problem**

Users often face message overload, making it hard to keep up with important updates and conversations.

**The opportunity**

By using AI to summarise unread messages, we can help users quickly catch up on key information, saving time and reducing cognitive load.

[Image: summarise lofi.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/666267a05bd91e84b1ba0242_summarise%20lofi.png)

### Suggest actionable tasks

**The problem**

Cluttered and lengthy chat threads make it difficult for users to keep track of key information and actionable items.

**The opportunity**

By offering AI-powered "Suggested Actions", we can provide users with relevant tasks like categorising messages, setting reminders, or creating calendar events. This helps users stay organised and maintain a tidy conversation flow.

[Image: suggest lofi.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/666267801d31e8463c4a2b42_suggest%20lofi.png)

## From concepts to hi-fidelity mockups

After several rounds of ideation, our stakeholders aligned on the initial wireframes, which gave us the green light to move into high-fidelity mockups. The designs below reflect early explorations of the two AI features discussed earlier. These are still in progress and subject to refinement as we continue to explore and validate ideas.

### Accessing Vama AI

After some discussion, we decided on two ways to access Vama AI:

**1. Vama AI Icon:** Users can click on the icon at the top of the screen to directly access the main Vama AI interface. This provides a quick and easy way to explore all AI features and options.

**2. Chat with Vama AI:** Users can also initiate a chat with Vama AI. This allows them to quickly ask any question directly within the chat, providing instant assistance.

[Image: 429956a51adb3e251f5dc1bd9ebcfe3e_Group 1.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/68353d95ef61cee0dffcf219_429956a51adb3e251f5dc1bd9ebcfe3e_Group%201.png)

### The Summariser feature

When the user clicks on the Summariser feature, a pop-up slides up from the bottom displaying a **preview of all unread chats**. This preview includes the group/profile avatar and name, the number of unread messages, and a snippet of the last message sent in each chat.

When the user clicks on any of these cards, the AI begins generating a summary of that chat. Once the summary is ready, the user can choose to mark the chat as read or go directly into the chat.

[Image: image 140.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/66627a1cdded3f5e9cf3cb9c_image%20140.png)

[Image: image 133.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/66627a1c17e3832b88c9d004_image%20133.png)

[Image: image 141.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/66627a1c6f4b5a96b5eeacfd_image%20141.png)

### Additional interactions following message summary

I added new prompts to appear after the Conversation Summary is generated. These include features like *Chat Highlights* and *Key Contributors*.

Users can also **continue chatting with Vama AI** and ask questions if they wish.

[Image: image 142.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/66627a1c0c2cc3cbdc614d51_image%20142.png)

Chat highlights

[Image: image 145.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/66627a1c7ea077b07411c36e_image%20145.png)

Key contributors

[Image: image 146.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/66627a1c6933a8e305bf8e9e_image%20146.png)

Ask Vama AI

#### Prototyping the Vama AI Summarizer

[Image: Screen Recording 2024-06-05 at 5.36.27 PM-min.gif](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6662956008478374be773aef_Screen%20Recording%202024-06-05%20at%205.36.27%20PM-min.gif)

### The "Action Planner" feature

At the top of the Vama AI chat screen, users can slide along the carousel to select the "Vama AI Action Planner."

Once selected, a pop-up displays **recommended actions**, including **calendar suggestions, group organisation, setting reminders**, and more.

When users choose an action, tasks are automated with **pre-filled text, dates, times, and contacts**. For calendar suggestions, I designed it to open Google Calendar as we don't have a Vama Calendar yet.

[Image: image 147.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6662a00642e0283f92dc078f_image%20147.png)

[Image: image 148.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6662a0062aec53b0da396f00_image%20148.png)

[Image: image 149.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6662a0064133d7f508c17b32_image%20149.png)

## What's next?

This project was an opportunity to explore how AI can enhance productivity within a chat interface. Through rapid wireframing and high-fidelity design, we translated early feature ideas into tangible concepts that address real user pain points. While the designs are still evolving, they lay the groundwork for future iterations as we continue to refine the experience based on feedback and testing.

