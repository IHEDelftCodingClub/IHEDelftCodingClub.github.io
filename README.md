# IHE Delft Coding Club Website

A Jekyll-based website for the IHE Delft Water and Sustainable Development MSc Coding Club, created with the support of [Open Tech International](https://opentechinternational.org/).

## 🎯 Features

- **Mobile-optimized** with hamburger navigation
- **Offline support** via service worker
- **Lazy loading images** for fast load times
- **Optimized for slow connections** (2G/3G)
- **Responsive design** for all screen sizes
- **Accessible** with proper ARIA labels

## 🚀 Development Quick Start
For running and testing this website locally, use the following Quick Start instructions. More technical documentation is found in TECHNICAL.md.

### Prerequisites
- Ruby 3.2+
- Bundler gem

### Installation

```bash
# Clone repository
git clone <repository-url>
cd IHEDelftCodingClub/ihe-coding-club-website

# Install dependencies
bundle install

# Run development server
bundle exec jekyll serve

# Visit http://localhost:4000
```

**First time with Ruby?** See [TECHNICAL.md](TECHNICAL.md#detailed-setup-guide) for detailed installation instructions.


## 📝 Adding Content
Jekyll makes it easy to add content, without diving into the details of the code. Follow the instructions to add members and events. If the files are in the right place, and the names all match, the new member or event will automatically show up!

### Add a Member

1. Make a copy of the template file ('_TEMPLATE_MEMBER.md') into the _members directory, and rename with your first and last name with a dash in between:

```bash
# Simple template (recommended)
cp _members/_TEMPLATE_MEMBER.md _members/YOURfirstname-lastname.md

```
2. Edit the file and add your information. The information at the top (before the ---) has a certain structure with key value pairs. Keep the structure as is, and just change the member details. These details will automatically be inserted into the user-interface (UI).

For example: 
`name: "First Last"`
✅ VALID CHANGE:  `name: "Sarah Williams"`
🚫 DOESN'T WORK:  `full-name: "Sarah Williams"   # changed the key name`
                  `name: Sarah Williams           # deleted the quotes`

The section at the bottom (after the ---) is in markdown format. This is where you write your bio and add optional sections like projects or videos.


3. Rename profile photo to `YOURfirstname-YOURlastname` and Add the photo to `assets/images/members/YOURfirstname-YOURlastname.jpg`.

**Note:** Make sure the photo name matches the `photo` reference, and that both refer to you!


### Add an Event
Events are added in a way similar to adding members. 

1. Make a copy of the template file ('_TEMPLATE_EVENT.md') into the _events directory. **Important:** The file name must include the date (YYYY-MM-DD-event-name.md):

```bash
# Copy the event template with proper date format
cp _events/_TEMPLATE_EVENT.md _events/2025-12-05-your-event-name.md
```

2. Edit the file and add your event information. The information at the top (before the ---) has a certain structure with key value pairs. Keep the structure as is, and just change the event details. These details will automatically be inserted into the user-interface (UI).

For example: 
`title: "Your Event Title"`
✅ VALID CHANGE: `title: "Intro to Python"`
🚫 DOESN'T WORK:  `event-name: "Intro to Python"    # changed the key name`
                  `title: Intro to Python           # deleted the quotes`

The section at the bottom (after the ---) is in markdown format. This is where you write the event description, requirements, and any additional details.

3. Choose your event type:
   - **Single-Session Event:** Just fill in the `date:` and `location:` fields at the top
   - **Multi-Session Event:** In addition to the single `date:` and `location:` add a `sessions:` block (see template for examples)

**Note:** Layout is automatically applied - no need to specify it! See `_events/2025-11-17-intro-to-python.md` for a complete multi-session example.


## 🔧 Troubleshooting

**Changes not showing?**
```bash
# Restart Jekyll
bundle exec jekyll serve
```

**Config changes not applying?**
```bash
# Clean and rebuild
bundle exec jekyll clean
bundle exec jekyll serve
```

**Port 4000 in use?**
```bash
bundle exec jekyll serve --port 4001
```

## 📚 Further Documentation

- **[PRE_LAUNCH.md](PRE_LAUNCH.md)** - Complete pre-launch checklist and deployment guide, used for deploying a new instance
- **[TECHNICAL.md](TECHNICAL.md)** - Developer documentation (architecture, performance, detailed setup)
- **Jekyll Docs** - https://jekyllrb.com/docs/

## 💡 Support

- Email: Configure in `_config.yml` (`contact_email`)
- [IHE Delft](https://www.un-ihe.org/)
- [Open Tech International](https://opentechinternational.org/)

## 🤖 Built With AI Assistance

This website was developed collaboratively using:
- **[Cursor](https://www.cursor.com/)** - AI-powered code editor
- **Claude Sonnet 4.5** ([Anthropic](https://www.anthropic.com/)) - AI pair programming assistant
- **[Jekyll](https://jekyllrb.com/)** - Static site generator

The AI assisted with code generation, design decisions, and documentation, with human oversight and direction throughout the development process.

## 📄 License

See [LICENSE](LICENSE) file.

---

Built with ❤️ using [Jekyll](https://jekyllrb.com/)
