---
# EVENT TEMPLATE

# HOW TO USE
# 1. Copy this file and rename to: YYYY-MM-DD-event-name.md
#    Example: 2025-12-05-data-visualization-workshop.md
# 2. Put the file in the _events folder
# 3. Update the title, date, location, instructor, and excerpt below
# 4. For MULTI-SESSION events, use the "sessions:" field (see example below)
# 5. Fill in the content below the --- line
# 6. Delete these instruction comments

title: "Your Event Title"
date: 2025-12-01T17:00:00Z  # For 6pm CET/CEST, use T17:00:00Z (UTC time that converts to local)
end_time: "7:45pm"  # Optional: End time in format like "7:45pm" or "19:45"
location: "IHE Delft, Room B6"  # Or "TBD" if not yet confirmed
instructor: "Instructor Name"  # Or "Peer-led" for drop-in sessions
excerpt: "A brief one-sentence description that appears on the events page."

# Optional fields (remove the # to use them):
# tags: ["Python", "Data Analysis", "Beginner"]  # Helps categorize events

# REGISTRATION (Uncomment and fill in BOTH lines if registration is recommended):
# registration_required: true  # Set to true to show registration notice
# registration_url: "https://forms.gle/example"  # Link to Google Form or registration page
# NOTE: A "Registration Recommended" notice and badge will appear. Walk-ins are still welcome!
# materials_url: "https://github.com/username/repo"  # Link to materials
# video_url: "https://www.youtube.com/watch?v=example"  # Recording link (add after event)

# FOR MULTI-SESSION EVENTS: Use this instead of single date/location
# Delete the single "date:" and "location:" above and use this format:
# sessions:
#   - date: 2025-12-01 18:00:00 +0100
#     end_time: "20:00"  # Optional end time (HH:MM format)
#     location: "IHE Delft, Room 2.15"
#     topic: "Session 1: Introduction"  # Optional session title
#   - date: 2025-12-08 18:00:00 +0100
#     end_time: "20:00"
#     location: "IHE Delft, Room 2.15"
#     topic: "Session 2: Advanced Topics"
#   - date: 2025-12-15 18:00:00 +0100
#     end_time: "20:00"
#     location: "IHE Delft, Room 2.15"
#     topic: "Session 3: Final Project"

# BELOW THE LINE (---): Write your event description using markdown formatting
# 
# Markdown Formatting Help: https://www.markdownguide.org/basic-syntax/
# Common formatting:
# - `**bold text**` makes **bold text**
# - `*italic text*` makes *italic text*
# - `[link text](url)` makes clickable links
# - `- item` makes bullet points
# - `## Heading` makes section headings
---

## Overview

Provide a brief overview of the event. What will participants learn or do? Who is it for?

Example: Join us for a hands-on workshop on data visualization using Python. We'll explore different chart types and learn when to use each one for water-related datasets.

## What You'll Learn

- Key learning objective 1
- Key learning objective 2
- Key learning objective 3
- How to apply these skills to water and sustainability work

## Prerequisites

- What participants need to know beforehand (or "No prior experience required")
- What to bring (laptop, software, datasets)
- Any pre-session setup required

## Schedule

**For single-session events:**
- **18:00 - 18:45**: Topic or activity
- **18:45 - 19:00**: Break
- **19:00 - 19:45**: Topic or activity
- **19:45 - 20:00**: Q&A and wrap-up

**For multi-session events:**
Sessions are listed at the top of the page. Use this section to describe what will be covered across all sessions.

## Materials

All materials will be shared via our [GitHub repository](https://github.com/IHEDelftCodingClub/) after the session.

## Questions?

Contact us at {{ site.contact_email }} or check the [Google Calendar]({{ site.organization.google_calendar_url }}) for updates.

---

## Optional Sections to Add:

### Resources
- [Link to relevant documentation](https://example.com)
- [Tutorial or guide](https://example.com)
- Additional reading materials

### Attendance
(Add after the event)
We had X participants join us for this session!

### Feedback
(Add after the event)
> "Quote from a participant" - Anonymous participant

### Follow-Up
- Links to recorded session (if available)
- Additional exercises or challenges
- Related upcoming events

