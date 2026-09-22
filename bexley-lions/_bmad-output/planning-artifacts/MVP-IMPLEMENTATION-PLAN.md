# Bexley Lions MVP Implementation Plan

## Goal
Build a polished, static, mobile-first school communications website that feels credible and trustworthy, while validating the editorial workflow before introducing any production backend, authentication, or role-based CMS complexity.

## Core Direction

### Primary principle
Build the public website first and keep the admin flow intentionally simple.

### Non-goals for this phase
- Full user authentication
- Staff roles and permissions
- Production CMS backend
- Complex database architecture
- Advanced content management features

## Phase 1: Build the polished static MVP

### Priority 1 — Homepage and core navigation
Deliver a strong school landing page with:
- clear header and branding
- prominent hero message
- navigation to Home, News, Events, Athletics, About
- quick access to important updates and upcoming events
- clean, modern, school-appropriate design

### Priority 2 — Sports and events content structure
Build a consistent template for:
- school sports overview cards with program name, season, and description
- news cards with title, date, summary, category
- event cards with title, date, time, location, opponent, type
- homepage highlights for featured items
- news detail page and event detail page

Examples of school sports to include in the MVP: Football, Volleyball, Cross Country, Basketball, Wrestling, and Track & Field.

### Priority 3 — School brand and trust-building layout
Focus on making the site feel official and credible:
- strong color palette and typography
- professional spacing and layout
- consistent visual hierarchy
- clear separation between school communication and casual sports/club content

### Priority 4 — Mobile-first responsiveness
Ensure content remains usable and readable on phones:
- stacked layout on small screens
- large touch targets
- clean navigation for mobile users
- no cramped content blocks or difficult scanning

## Phase 2: Lightweight admin/editor flow

The admin experience should be simple, not production-grade.

### Required admin capabilities
- create a news post
- create an event
- edit an existing post
- delete an existing post
- publish or save as draft
- preview content before publishing

### Suggested implementation approach
Use a lightweight local editor workflow for the MVP:
- content stored in a simple JSON or local data file
- admin panel with form fields for the content model
- form submission writes to local content store
- public pages read from the same content source

This allows the team to test the actual editorial journey without building a full CMS.

## Phase 3: Validation before backend investment

Do not build a production CMS yet. Instead, validate the site with real users.

### Validation checklist
- Is the homepage immediately credible and clear?
- Can users find upcoming events quickly?
- Is the news structure easy to scan and understand?
- Does the admin flow feel simple enough for staff?
- Does the branding feel professional and school-appropriate?
- Is the mobile experience strong enough for parents and students on the go?

### Recommended test group
- 3–5 staff or community stakeholders
- at least 1 parent user
- at least 1 student or supporter user

### Validation outcomes to look for
- confusion around navigation or page purpose
- content hierarchy issues
- missing event or news fields
- publish/edit friction in the admin flow
- content structure that needs refinement

## Features to build first

### Must-have for MVP
- homepage
- news page
- events page
- athletics page
- about page
- shared header/footer styling
- responsive layout
- content model for news and events
- admin form to create/edit/delete content
- publish/draft states

### Nice-to-have later
- image galleries
- featured homepage banners
- richer event filters
- advanced forms and file uploads
- search
- archives
- analytics
- authentication and role-based permissions

## Features to defer for later

Defer these until after the MVP is validated and the editorial needs are clear:
- user login and authentication
- admin role management
- staff-specific permissions
- production CMS platform selection
- database-backed multi-user publishing system
- complex workflows and approvals
- heavy file/media management
- AI-assisted content workflows

## MVP checklist

### Public website
- [ ] Homepage is polished and branded
- [ ] News layout is readable and consistent
- [ ] Events layout is clear and easy to scan
- [ ] Athletics content feels aligned with the school brand
- [ ] About page communicates school identity and values
- [ ] Site is mobile responsive

### Editorial workflow
- [ ] Admin can add a news post
- [ ] Admin can add an event
- [ ] Admin can edit an item
- [ ] Admin can delete an item
- [ ] A post can be saved as draft or published
- [ ] Public-facing content updates correctly

### Validation and readiness
- [ ] Stakeholders review the prototype
- [ ] Feedback is captured and documented
- [ ] Content structure is refined based on testing
- [ ] Team agrees that the site is ready for production-level planning

## Recommended release strategy

### Phase A: Prototype and validation
- build the polished public site
- test the information flow and editorial workflow
- tune the design and user experience

### Phase B: MVP release
- finalize the content model
- refine admin workflow
- ship the static site with simple local/admin publishing

### Phase C: Future enhancement
- add real backend/CMS only if the need is clearly proven
- add permissions, authentication, and scalable admin workflows only when required

## Final recommendation
The best path is to keep this project intentionally focused, low-risk, and validation-driven: build a high-quality static MVP first, test the editorial workflow, and defer authentication, roles, and a production CMS until the site has proven its value and the staff publishing requirements are clearer.
