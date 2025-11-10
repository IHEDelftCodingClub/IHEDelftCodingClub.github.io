# IHE Delft Coding Club Website

A Jekyll-based website for the IHE Delft Water and Sustainable Development MSc Coding Club, created in collaboration with [Open Tech International](https://opentechinternational.org/).

## 🚀 Quick Start

### Prerequisites
- Ruby 3.2+
- Bundler gem

### Installation

```bash
# Clone repository
git clone <repository-url>
cd IHEDelftCodingClub/web

# Install dependencies
bundle install

# Run development server
bundle exec jekyll serve --future

# Visit http://localhost:4000
```

**First time with Ruby?** See [Detailed Setup Guide](#detailed-setup-guide) below.

## 📋 Pre-Launch Checklist

Before deploying, complete these tasks:

### Required
- [x] Add OTI logo to `assets/images/oti-logo.svg`
- [ ] Update Google Calendar URL in `_config.yml`
- [ ] Add member profile photos to `assets/images/members/`
- [x] Update contact email in `_config.yml`
- [x] Add favicons to `assets/images/` (favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png)

### Content
- [ ] Update member profiles with real information
- [ ] Replace placeholder video URLs
- [ ] Update event dates and details
- [ ] Verify all external links work

See [CHECKLIST.md](CHECKLIST.md) for complete list.

## 📝 Adding Content

### Add an Event

**Easy way:** Copy the template file:

```bash
# Copy the event template
cp _events/_TEMPLATE_EVENT.md _events/2025-12-05-your-event-name.md

# Then edit the file and add your event details
```

#### Single-Session Event

For a one-time event with a single date/time:

```yaml
---
title: "Your Event Title"
date: 2025-11-15 18:00:00
location: "IHE Delft, Room 3.22"
instructor: "Instructor Name"
excerpt: "Brief description"
---

Event details in markdown...
```

#### Multi-Session Event

For workshops or courses spanning multiple sessions:

```yaml
---
title: "Python Course: 3-Week Series"
date: 2025-12-01 18:00:00  # First session date
instructor: "Instructor Name"
excerpt: "Brief description"
sessions:
  - date: 2025-12-01 18:00:00
    end_time: "20:00"
    location: "IHE Delft, Room 2.15"
    topic: "Session 1: Introduction"
  - date: 2025-12-08 18:00:00
    end_time: "20:00"
    location: "IHE Delft, Room 2.15"
    topic: "Session 2: Advanced Topics"
  - date: 2025-12-15 18:00:00
    end_time: "20:00"
    location: "IHE Delft, Room 2.15"
    topic: "Session 3: Final Project"
---

Event details in markdown...
```

**Note:** Layout is automatically applied - no need to specify it! See `_events/_EXAMPLE_MULTI_SESSION.md` for a complete multi-session example.

### Add a Member

**Easy way:** Copy a template file:

```bash
# Simple template (recommended)
cp _members/_TEMPLATE_SIMPLE.md _members/firstname-lastname.md

# Or use the comprehensive template
cp _members/_TEMPLATE.md _members/firstname-lastname.md

# Then edit the file and add your information
```

**Manual way:** Create `_members/firstname-lastname.md`:

```yaml
---
name: "First Last"
role: "MSc Student"
photo: "/assets/images/members/firstname.jpg"
email: "email@students.ihe.nl"
linkedin: "https://linkedin.com/in/username"  # Optional
github: "https://github.com/username"          # Optional
order: 1
---

Member bio in markdown...
```

**Don't forget:** Add profile photo to `assets/images/members/firstname.jpg`.

## 🎨 Customization

### Color Theme

Edit `assets/css/main.css` `:root` section:

```css
--primary-blue: #0066a1;
--secondary-blue: #00aeef;
--accent-green: #6cb33f;
```

### Site Settings

Edit `_config.yml` to update:
- Site title and description
- **Contact email** - `contact_email: "your-email@ihe.nl"`
- Organization information
- Google Calendar URL
- **Meeting times** - Update days and times in one place:
  ```yaml
  meeting_times:
    day1: "Mondays"
    day1_time: "6-7pm"
    day1_time_full: "6:00-7:00pm"
    day2: "Thursdays"      # For single day: use day2: ""
    day2_time: "6-8pm"
    day2_time_full: "6:00-8:00pm"
  ```
  These will automatically update throughout the entire website! Set `day2: ""` (empty) to switch to once per week.

## 🚀 Deployment

### GitHub Pages

```bash
# Push to GitHub
git push origin main

# Enable Pages in repo Settings > Pages
```

### Netlify

- Build command: `jekyll build`
- Publish directory: `_site`

## 📁 Project Structure

```
web/
├── _config.yml              # Site configuration
├── _includes/               # Reusable components
│   ├── event-card.html
│   ├── page-header.html
│   ├── social-links.html
│   └── lazy-image.html
├── _layouts/                # Page templates
│   ├── default.html
│   ├── event.html
│   └── member.html
├── _events/                 # Event markdown files
├── _members/                # Member markdown files
├── assets/
│   ├── css/main.css        # Styles
│   └── images/             # Images and logos
├── index.html              # Landing page
├── events.html             # Events listing
├── members.html            # Members listing
└── sw.js                   # Service worker for offline support
```

## 🔧 Troubleshooting

**Changes not showing?**
```bash
# Restart Jekyll (remember --future for upcoming events)
bundle exec jekyll serve --future
```

**Config changes not applying?**
```bash
# Clean and rebuild
bundle exec jekyll clean
bundle exec jekyll serve --future
```

**Port 4000 in use?**
```bash
bundle exec jekyll serve --port 4001 --future
```

## 📚 Documentation

- **[CHECKLIST.md](CHECKLIST.md)** - Complete pre-launch checklist
- **[TECHNICAL.md](TECHNICAL.md)** - Developer documentation (architecture, performance, components)
- **Jekyll Docs** - https://jekyllrb.com/docs/

## 🎯 Features

- **Mobile-optimized** with hamburger navigation
- **Offline support** via service worker
- **Lazy loading images** for fast load times
- **Optimized for slow connections** (2G/3G)
- **Responsive design** for all screen sizes
- **Accessible** with proper ARIA labels

## 💡 Support

- Email: Configure in `_config.yml` (`contact_email`)
- [IHE Delft](https://www.un-ihe.org/)
- [Open Tech International](https://opentechinternational.org/)

## 📄 License

See [LICENSE](LICENSE) file.

---

## Detailed Setup Guide

### Installing Ruby

**Option 1: rbenv (Recommended for macOS/Linux)**
```bash
brew install rbenv ruby-build
rbenv install 3.2.2
rbenv init
```

**Option 2: RVM**
```bash
\curl -sSL https://get.rvm.io | bash -s stable
rvm install 3.2.2
```

**Option 3: System Package Manager**
```bash
# macOS
brew install ruby

# Ubuntu/Debian
sudo apt-get install ruby-full

# Windows
# Download from https://rubyinstaller.org/
```

### Installing Bundler

```bash
gem install bundler
```

### Project Setup

```bash
# Navigate to project
cd IHEDelftCodingClub/web

# Install gems in isolated environment
bundle install --path vendor/bundle

# Run Jekyll
bundle exec jekyll serve --future
```

**Always use `bundle exec`** before Jekyll commands to use the correct gem versions.

---

Built with ❤️ using [Jekyll](https://jekyllrb.com/)
