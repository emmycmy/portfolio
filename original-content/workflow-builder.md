# Workflow Builder — original case study content

Scraped from the Webflow staging site (https://emiline.webflow.io/workflow-builder) on 2026-10-01.
Full original text, with images noted where they appeared (filename + Webflow CDN URL),
for use when writing the real case study page at `case-studies/workflow-builder.html`.

---


### Designing a no/low-code digital workflow builder

Role: Solo product designer  
Client: Enterprise Singapore  
Status: Early stage design  
Date: Mar 2026 - present

**\* Product name and assets replaced to protect internal product identity.**

*A note on this case study: in this project, I take an inconsistent, vibe-coded product and systemised it, grounded in testing workshops rather than formal UX research methods.*

[Image: eb7a9c514e3e0cbe5b111f3474cea7af_hero.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a784c5687400e8bbe2b63b7_eb7a9c514e3e0cbe5b111f3474cea7af_hero.png)

## Overview

This case study covers the design of Enterprise Singapore's no/low-code workflow builder, from concept through to production.

#### The problem

Processing officers at Enterprise Singapore were repeating the same manual data checks across cases (eg. re-keying figures, cross referencing documents by hand). The work was rule-based enough to automate, but out of reach without engineering support.

#### Solution

A no/low-code workflow builder that allow officers to **automate repetitive data tasks** like extracting figures from documents or checking data against reference files.

#### Approach

We started from process mapping sessions with officers, then vibe-coded a first working version directly off those requirements rather than starting from wireframes to get something real in front of users fast. Further sessions and testing workshops with small teams shaped the design from there.

[Image: existing .jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a76d4001f6681ee556dc4d1_existing%20.jpg)

Early vibe-coded version of the canvas

As the sole designer, I owned the designs of the **canvas editor, node system, and configuration panels,** working closely with the PM and front-end developer, and building on the same MUI design system as Research Assistant to keep the two products consistent for officers moving between them.

## The canvas

The canvas is the blank space officers build on — a dot-grid workspace with a floating action panel and a minimap preview panel for orienting on larger workflows

[Image: main canvas.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a7a868ba6c79aef3e8c6390_main%20canvas.jpg)

The blank canvas — dot grid, floating action panel, and minimap preview

Watching officers build unguided surfaced a specific gap: **mid-run, there was no way to tell what state a workflow was in without clicking into individual nodes**. An officer would kick off a run and then have no reliable way to answer "is this still going, did it fail, or is it done?" from the canvas alone.

Most of the design work here went into solving that through **connector states** rather than through a separate status panel — keeping the answer on the canvas itself, next to the nodes it referred to. Connectors move through five states: idle, dragging, node selected, workflow running, and run complete.

[Image: connector states.png](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a7a87f86ab40917cfc926b9_connector%20states.png)

Connector states, annotated in Figma for handoff to the front-end dev

## Nodes

The clearest sign that the vibe-coded product hadn't been designed as a system was the nodes. For example, Input File was blue, Reference File was pink, and the two had **different colours, card structures, and field layouts despite doing conceptually similar jobs.**

The inconsistency went beyond colour too. Across categories, **different nodes surfaced different kinds of information and actions directly on the card**, with no shared logic for what belonged on the canvas versus inside the config panel.

[Image: inconsistent nodes.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a7bffed04d2d5a5badd0300_inconsistent%20nodes.jpg)

Vibe-coded input nodes; each with their own colour and card structure.

[Image: inconsistent nodes 2.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a8275e6f5f618916b5c4b01_inconsistent%20nodes%202.jpg)

Vibe-coded nodes across categories with no shared pattern.

If every node looked and behaved differently, **officers had to learn each one individually** rather than transferring what they already knew, which worked against the point of a no-code tool built for **people without technical backgrounds.**

I worked through the node library by category — **input nodes first** (upload files, reference files, web search), since those were what every workflow started with, then **output nodes** (display, email), then the more complex **processing nodes** (AI, Python, loop, if/else), where the underlying logic was hardest to hide. Data nodes are the next stage.

[Image: upload nodes.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a7d132c6f5004b2a00a6cb6_upload%20nodes.jpg)

Refreshed input nodes - same teal system and card layout

**Consistency was the focus from here on.** I brought nodes within each category onto a shared visual system — one colour family per category, a common card layout, matching icon treatment, and the same state set (default, ready, running, success, failed). An officer who understood the Upload Files node could now read the Reference File one without re-learning it.

I applied the **same approach across every category**, so the node library reads as one system regardless of what a node does or how complex its underlying logic is in both light and dark mode.

[Image: 6c8aa399221a9135522a0bc4dbeb0bf2_node library.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a7d150af58cc2b5b1e4fc7a_6c8aa399221a9135522a0bc4dbeb0bf2_node%20library.jpg)

Full node library across all states, light and dark mode.

## Configuration panels

Configuration panels had the same problem as the nodes in the vibe-coded version — each one designed independently, with no shared pattern for field order, labelling, or how "view only" steps were communicated. **Input File and Reference File, despite configuring near-identical things, looked and behaved like two unrelated tools.**

[Image: input config.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a82776d554e93b61120ac9f_input%20config.jpg)

Vibe-coded config panels — inconsistent field order and structure.

Beyond inconsistency, some config panels were **simply too technical for a layman** officer to use confidently — raw Python code blocks, JSON structure trees, model IDs, and interpolation syntax like {node_id} sat directly in the panel with no translation layer for someone without an engineering background.

[Image: technical config.jpg](https://cdn.prod.website-files.com/624ef71741a20242edfb18ca/6a827820aee546b0efd25b71_technical%20config.jpg)

Vibe-coded AI and Python node config panels

