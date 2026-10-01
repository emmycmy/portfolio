# Research Assistant — original case study content

Scraped from the Webflow staging site (https://emiline.webflow.io/research-assistant) on 2026-10-01.
Full original text, with images noted where they appeared (filename + Webflow CDN URL),
for use when writing the real case study page at `case-studies/research-assistant.html`.

---


### Bringing conversational AI to an internal data hub

Role: Solo product designer  
Client: Enterprise Singapore  
Status: Third round of beta testing in progress  
Date: Oct 2025 - Jun 2026

*** Product name and assets replaced to protect internal product identity.**

[Image: 028b368122a72c08a0c4d619d6d76ab8_hero.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a38ddff5224b51b6ff565ff_028b368122a72c08a0c4d619d6d76ab8_hero.png)

## Overview

Enterprise Singapore was building an AI-powered research assistant designed to help its officers quickly access company and market intelligence stored across fragmented internal systems. The goal was to **reduce the time spent on manual research** and enable users to retrieve trustworthy, sourced information through natural language conversations. The agent draws from two source layers:

- An **internal database** containing company profiles, engagement reports, scheme participation records, and grant history;

- and real-time external **web search** with source citations

As the sole designer on this project, I owned end-to-end product design, working closely with the PM, AI engineer and dev team to ship more than 10 features, translating product requirements into buildable specifications across multiple beta rounds.

##### how it evolved

## From chatbot to research platform

The product went through three distinct phases, **each shaped by what we learned from the one before**.

##### Phase 01: Concept

#### Touchpoints AI

A chatbot embedded within the "Past Touchpoints" section of a company-specific page within ESG's data hub. It's **scoped entirely to that company's engagement history**. Officers could ask questions about call reports, meetings, past interactions with that specific company without leaving their current view.

*Assumption: officers want help in context, where they're already looking at. Interviews with ~10 officers showed they needed more than just engagement history.*

[Image: 92525ca4082d7c58752b430d79114bdc_touchpoints ai.gif](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a42087afd2d92f205a39251_92525ca4082d7c58752b430d79114bdc_touchpoints%20ai.gif)

##### Phase 02: BETA

#### Sidebar + Full page chat

Two surfaces were built in parallel: a **sidebar** chatbot for **company-specific queries**, embedded within the existing platform, and a standalone **full-page chat** for **broader research** across internal and external sources. The idea was that officers could use whichever fit their task.

Beta testing showed officers consistently struggled to discover the sidebar and preferred the full-page experience for everything. **The sidebar was decommissioned.**

*Insight: officers weren't just reviewing one company. They were synthesising across companies, sectors, and sources — and they wanted one surface to do it all. *

[Image: 59efaa91ae71dd32955e66b5a1a04934_sidebar prototype.gif](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a3e1c6fcdcaeaee314b51f7_59efaa91ae71dd32955e66b5a1a04934_sidebar%20prototype.gif)

[Image: 982a3be1330f75ae65185e1c1aff36eb_image 281.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a3a2976c708e1ff5590e10c_982a3be1330f75ae65185e1c1aff36eb_image%20281.jpg)

##### Phase 03: Current

#### Agentic research platform

Rather than asking a question and receiving an answer, officers now brief the agent — **setting scope, activating skills**, and **letting the agent autonomously plan, query, synthesise, and evaluate** before responding. The officer delegates; the agent handles the research workflow.

*Insight: access to information wasn't the bottleneck. Officers needed to be able to shape how the agent worked, not just what it searched.*

[Image: eada4a8334eb3d7afef6ed2a4dff057e_agentic.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a3e144d454e17c786931204_eada4a8334eb3d7afef6ed2a4dff057e_agentic.png)

##### Discovery

## User interviews

Alongside early concept testing, we interviewed around 10 officers to understand what would make them trust an AI assistant enough to act on its output. One concern came up consistently: officers wanted to know how a response was reached and where it came from, before relying on it.

This shaped a decision that ran through the rest of the project — **source attribution needed to be visible** at every stage of the research process, not just appended to a finished answer.

##### Research and validation

## Beta testing

### ~70

Officers across divisions

### 2

Rounds of beta testing

### 3

Structured test cases per session

### 13

Features designed and iterated

The product has run two rounds of beta testing with approximately 70 officers across different divisions, each guided through three structured test cases designed to surface usability issues and unmet needs. Feedback from earlier rounds directly shaped the features built in subsequent sprints.

### Top issues identified

As a user -

#### Context

I would like the agent to **understand our context better.** eg. sector resolution, brief format, writing/synthesis style.

#### Scope

I would like my queries to be **grounded in a specific company** without having to restate that context in every prompt

#### Sources

I would like to see the **web sources** consulted during research. I also want to be able to open and review the underlying call reports **directly within the interface**, rather than being pointed to an external system

These findings shaped the next phase of design work. Below are some of the key features — what problem each solved and the decisions behind them.

##### Design work

## Key features

##### Features 01 & 02

### Context – Skills and prompt enhancement

Beta feedback made clear that officers weren't struggling with access to information — they were struggling to ask for it in a way that produced useful results. **Different users haddifferent expectations for format, tone, and depth**, and the agent had no way to account for that by default. Two features were designed in response, working at different points in the same problem.

#### 1. Skills

Skills are the **small, reusable instruction bundles** that **teach the agent how to execute a specific task consistently**. For example, an officer activating the "Sector Landscape Summary" skill gets a structured overview covering market size, key players, trends, etc. — without having to specify any of that in every prompt.

The design challenge was making skills feel lightweight and in-reach, not like a settings menu buried in a corner. **The skills bar sits directly beneath the input box**, always visible. A manage link opens a library and a drawer pattern lets officers browse the library while keeping chat context in view.

[Image: Group 133614.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a43d45cafd52f81ab1d4a6c_Group%20133614.png)

Skills bar within input box

[Image: skill library.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a4b1730a6b21e66fab1d58b_skill%20library.jpg)

Skills library with detail drawer; browse, preview, and toggle without leaving the page

#### 2. Prompt enhancement

Even with skills active, officers sometimes sent prompts **too brief or ambiguous** to produce a good result. The Enhance button addresses this at the moment of input — **expanding and clarifying a prompt before it's sent**, without requiring the officer to know what a "good" prompt looks like.

The interaction had to feel helpful, not corrective. I designed **six distinct states**: empty (disabled), below character threshold, ready, streaming (text rewrites inline rather than showing a loading spinner), complete with two-level undo, and error — with distinct amber vs. red treatments for timeout vs. failure.

[Image: enhance prog.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a559e432c850f73e622f3b5_enhance%20prog.png)

Enhance button state progression: empty → below-threshold → ready → streaming → complete → error

##### Feature 03

### Company scoping

One of the more complex interaction problems was giving officers a way to direct queries at specific companies — without breaking the flow of starting a conversation. Early versions treated scope as a single-company toggle, but officer feedback made clear that the scope needed to **support multiple companies and bulk selection**, not just one entity at a time.

**Key constraint:** Company scope had to be set before the first message was sent. Changing it mid-session would invalidate the conversation context — so the **entry point had to be clear** and the locked state had to communicate itself, not surface as an error after the fact.

Getting to the right pattern took several iterations, each exposing a different problem.

#### Iteration 1 - Slash command

Typing "/" in the input opened a **contextual menu** surfacing both companies and skills as options — a pattern familiar from tools like Notion or Claude. The problem was **discoverability**. Officers who didn't know about the shortcut would never find scope or skills at all.

[Image: iteration1.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a4b3d8e88f8dc3c9bc22117_iteration1.png)

Typing "/" surfaces a contextual menu with Companies and Skills options inline in the input

#### Iteration 2 - Settings gear popover

Consolidating scope and skills into a single **gear icon popover** was a tidier surface — one entry point for both. But the gear icon gave **no signal about what was currently configured**. An officer glancing at the input had no way to know whether scope was set or skills were active without clicking to check. The icon couldn't communicate state.

[Image: 3dcf143dc1dfd792c63c3e553f2bb9f2_iteration2.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a4b3f01d56fec789191da29_3dcf143dc1dfd792c63c3e553f2bb9f2_iteration2.png)

Gear icon in toolbar opens a popover showing Companies and Skills chips in one panel

#### Iteration 3 - Scope banner above input

Moving scope above the input as **a persistent "*Scoped to*" banner** made the configured state visible at a glance. But with scope as one row and skills as a separate row below the input, the **composer area felt heavy.** Two rows of configuration before you'd even typed anything.

[Image: a919c9d361a47fb71da0b745adf3786e_iteration3.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a4b4089d276e034c3f3f9a1_a919c9d361a47fb71da0b745adf3786e_iteration3.png)

"Scoped to:" banner row above input with company chips, skills toggle row below

#### Final - Config line

The solution was collapsing both scope and skills into **a single compact strip below the input** ie. the config line. It always declares the current state eg. "4 companies · 3 Skills active" — and stays visible throughout the session. Scope and skills are no longer two separate UI concerns; they're one line of context that officers can read at a glance before typing.

[Image: iteration4.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a50b2b0750ffdf90d5cbde6_iteration4.png)

Config line below input as a single compaxt strip

Clicking "Edit" on the config line opens a **right-side drawer** in edit mode — already-scoped companies appear as chips, and officers can search to add more or remove existing ones. Changes are staged before committing, so **officers can adjust scope** without accidentally applying half-finished changes. Once confirmed, the config line and input placeholder update to reflect the new state.

[Image: editing companies.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a558a5c423c1ab08f1a4586_editing%20companies.jpg)

##### Features 04 & 05

### Source attribution

From the earliest user interviews, **trust was the central concern**: how would officers know whether a response was accurate, and where it came from? Source attribution should be visible at every stage of the research process, not just at the end. Two components carry this across the product.

#### 1. Citation bubbles in reasoning steps

As the agent works through a query, it **shows the web sources** it consulted at each reasoning step — inline, in real time. Officers can see the research process as it happens rather than receiving a finished answer with no visibility into how it was reached. **Citation bubbles appear as compact chips attached to each reasoning step**, expanding to show source detail on demand.

[Image: sub reasoningsv01.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a55c5d3180cc3dd3260fea3_sub%20reasoningsv01.png)

Reasoning steps with citation bubbles

#### 2. Call report drawer

For internal sources — call reports referenced in a response — officers needed a way to **verify the underlying document without leaving the chat.** Clicking a report reference opens a dedicated **drawer on the right side** of the screen, **rendering the full report inline**. The left sidebar collapses to an icon rail to make space, keeping chat context visible behind the drawer rather than replacing it entirely.

The key decision was treating the collapsed sidebar as a contextual state triggered by the drawer, not a persistent user preference. When the drawer closes, the sidebar returns to full width automatically — so officers never have to manually restore their workspace after reading a source.

[Image: dfd3a37fac7c786d47962b3805eac3b5_call report drawer.gif](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a55e2516cb785e5bb9be089_dfd3a37fac7c786d47962b3805eac3b5_call%20report%20drawer.gif)

Prototype of opening a call report inline

## Still evolving

This case study reflects the product as it stands today, but the work isn't done. The platform is in active beta, with new rounds of testing continuing to surface feedback that shapes the next sprint. Features in this case study have already been iterated since their first release, and **new problems are being defined as more officers use the product in real research contexts.**

For a product built around an agent that learns and adapts, it feels right that the design does too.

