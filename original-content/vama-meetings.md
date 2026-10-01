# Vama Meetings — original case study content

Scraped from the Webflow staging site (https://emiline.webflow.io/vama-meetings) on 2026-10-01.
Full original text, with images noted where they appeared (filename + Webflow CDN URL),
for use when writing the real case study page at `case-studies/vama-meetings.html`.

---


### Crafting the Meetings functionality for Vama: An iOS mobile chat application

Role: UI Designer  
Responsibilities: Responsive design, hifi mocks, prototyping  
Date: Feb - Jul 2024

[Image: Group 67.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/661b9bdc4ca6fc688197848e_Group%2067.png)

## Developing the Meetings experience in Vama

In this case study, we'll dive into how we built the video call feature (or Meetings) for Vama, a chat app designed for professionals. With this feature, users can **easily set up and join meetings**, streamlining collaboration and communication. Our aim is to make it seamless for professionals to create and take part in discussions, whether they're connecting with fellow Vama users or those outside the platform.

Our stakeholders opted to focus on iOS development, as it offers a cohesive ecosystem that allows for smooth integration of features. This approach ensures a consistent user experience across Apple devices, right from the start.

## Optimising the navigation of the Meetings feature

### Prominent placement in main nav

Anticipating that Meetings would be a widely used feature among our users, we positioned it within the main bottom navigation alongside other key features such as wallets and chats. This placement ensures easy access and prominence within the app interface.

[Image: image 105.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6675495d7814df5f794ffe9b_image%20105.jpg)

### User flow mapping for Meeting interactions

Given the complexity of the Meetings feature, which encompasses different user actions like toggling mic/video and different interfaces for the Vama app or browser, I began by crafting a user flow diagram. This visual representation outlines the diverse scenarios and pathways users may navigate while interacting with the Meetings feature. Primarily, there were two main flows - **starting a new meeting**, and **joining an existing one** (either via the app, or a browser).

[Image: userflow.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6674ea0381a2848714f50c77_userflow.png)

## Designing and refining Vama Meetings

### Iterations on the Meetings page

In the beginning, we planned for users to create separate "Rooms" within their Group Chats. However, after discussing with stakeholders, we decided to remove the concept of "rooms" entirely. Instead, each meeting was assigned its unique title. This allowed hosts to invite any participant to each meeting, enhancing flexibility.

I introduced a "live" indicator for ongoing meetings and displayed avatars to indicate participants currently in the call.

I also added a list of past calls below the ongoing ones. This allowed users to quickly restart a meeting with the same participants without having to manually recreate a meeting again.

[Image: Meetings-2.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65eda440cafa8822efee1c27_Meetings-2.jpg)

Initial concept

[Image: image 73.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/661ba05d087211994466a60e_image%2073.jpg)

Revised design

### Incorporating Meeting set-up options

To create a new meeting, the user would start by entering a meeting title, and a meeting URL would be automatically generated. Clicking on "Share Invite" prompts a share sheet, enabling users to easily share the link with non-Vama users.

Additionally, I included options for adjusting video and microphone settings, granting users control over their video before initiating a call. Finally, I added a toggle for setting a meeting passcode to enhance security.

[Image: passcode on.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65edae804fd479f1cb4ae470_passcode%20on.jpg)

[Image: Share invite.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/661ba2e74d48ed300133b923_Share%20invite.png)

### Adding participants

When users click on "Participants", they will land on a "Add Participants" page which includes a search function at the top to help users quickly find and add other Vama users.

I also designed a feature where adding a participant automatically sends them to the top of the page, allowing users to see who they've added.

[Image: tab participants.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65edb11ed2f4a08599a495cc_tab%20participants.jpg)

[Image: selected participants.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65edb11e82232948f5124450_selected%20participants.jpg)

### Initial prototype to demonstrate the Meeting setup functionality

Before proceeding with the rest of the designs, I developed a basic prototype to present to stakeholders, demonstrating the meeting set up functionality.

[Image: bf3a3281-7b02-47ed-a55e-45b1fc74a9ca-ezgif.com-crop.gif](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/65f394b913d7532eca6127eb_bf3a3281-7b02-47ed-a55e-45b1fc74a9ca-ezgif.com-crop.gif)

## In-meeting UI

Having completed the design for setting up and joining meetings, I moved on to the next set of screens for the Meetings pages: crafting the in-meeting user interface. Upon thorough examination of other apps in the market, I decided to implement an **automatic transition to dark mode once the user enters a meeting.**

Dark mode offers several benefits, particularly in the context of meeting applications. It reduces eye strain, and creates a more comfortable viewing experience, enhancing user comfort and reducing fatigue.

Below are the various screens I created to demonstrate the meeting UI's adaptability to varying number of participants. Each screen offers a visual representation of how the UI dynamically adjusts based on the number of participants present in the meeting.

[Image: Frame 3101.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/666708ef7c16ef607b916929_Frame%203101.png)

## Crafting a responsive design for the desktop experience

Recognising that many professionals will be using desktops, I also crafted a responsive desktop interface to cater to corporate users.

### The Meetings page

I began by implementing a sidebar menu on the left-hand side to offer users easy navigation to start, join, or schedule a meeting.

The main screen on the right displays a carousel of ongoing calls, allowing users to scroll horizontally for quick browsing. Each call includes a thumbnail preview and information like meeting name and participant avatars.

Beneath these elements, two sections were included: "Upcoming Meetings" (a feature slated for future development) and a history of past calls.

[Image: Meetings.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/663d6fa963fe01bab97f17c2_Meetings.png)

### Setting up a Meeting

In this flow, I wanted to make it super quick to start a meeting and share it with others. When the user selects "New Meeting," a popup appears with a video preview, allowing them to toggle their camera. They can also set a meeting title. Clicking "Create" instantly generates both the meeting and a shareable link. This two-click approach makes it effortless for busy professionals to create and share meetings.

[Image: new meeting.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/663d7ed0127872d0a01d136b_new%20meeting.png)

Camera turned off

[Image: preview (camera on).png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/663d7f5736c37049209abf4f_preview%20(camera%20on).png)

Camera turned on (includes option to flip camera)

[Image: In meeting.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/663d7eeaadd4bcb6e1c83697_In%20meeting.png)

Host enters the meeting and a share link is created

### Meeting participants

Clicking the Participants icon in the video controls opens a panel on the right, displaying a list of participants. I added a search function to provide quick user navigation in case of numerous participants. Users can also hover over each participant to mute them. Clicking the "Add participant" CTA prompts a pop-up offering two sharing options: through a shareable meeting link or by selecting from a list of Vama contacts.

[Image: participants (hover to mute).png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/663d82352b96c054480c77a0_participants%20(hover%20to%20mute).png)

Participant list displayed on right sidebar

[Image: add participant.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/663d82358c533be4794dc363_add%20participant.png)

Adding participants

[Image: DM (lightmode).png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/663d823ea3ee3ca897d75d31_DM%20(lightmode).png)

Recipient POV: receiving meeting invite

### Chat functionality

Just like the Participants page, I set up a sidebar view for the in-meeting chat. It keeps things consistent and easy to navigate. The host has the option to disable participants from leaving messages, ensuring focused communication when necessary. I also added a pop-up mode option, so that users can customise their meeting experience to suit their preferences and workflow.

[Image: chat (typing).png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/663f6ec648062add2cf74987_chat%20(typing).png)

sidebar option

[Image: pop up mode.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/663f6ec66fd5f536fb624025_pop%20up%20mode.png)

pop up option

## What's next?

Our developers are currently working on integrating the Meetings feature into the Vama app. I'm excited about the progress and look forward to unveiling the updated version on the app store soon. In the meantime, you can checkout some of the other screens I designed for this Meetings feature below!

[Image: Slide 16_9 - 15.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/664dcdb5f2d9bdef7d71b7d2_Slide%2016_9%20-%2015.jpg)

