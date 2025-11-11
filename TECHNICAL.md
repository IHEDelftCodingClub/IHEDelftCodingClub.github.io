# Technical Documentation

Developer documentation for the IHE Delft Coding Club website architecture, components, and optimizations.

## Table of Contents

1. [Detailed Setup Guide](#detailed-setup-guide)
2. [Architecture Overview](#architecture-overview)
3. [Reusable Components](#reusable-components)
4. [Performance Optimizations](#performance-optimizations)
5. [Mobile Optimizations](#mobile-optimizations)
6. [Development Workflow](#development-workflow)
7. [Customization](#customization)
8. [Best Practices](#best-practices)

---

## Detailed Setup Guide

### Installing Ruby

Ruby 3.2+ is required for Jekyll 4.4+.

**Option 1: rbenv (Recommended for macOS/Linux)**
```bash
brew install rbenv ruby-build
rbenv install 3.2.2
rbenv init

# Add rbenv to your shell
echo 'eval "$(rbenv init -)"' >> ~/.zshrc  # or ~/.bashrc
source ~/.zshrc  # or ~/.bashrc
```

**Option 2: RVM**
```bash
\curl -sSL https://get.rvm.io | bash -s stable
rvm install 3.2.2
rvm use 3.2.2 --default
```

**Option 3: System Package Manager**
```bash
# macOS
brew install ruby

# Ubuntu/Debian
sudo apt-get install ruby-full build-essential

# Fedora
sudo dnf install ruby ruby-devel

# Windows
# Download from https://rubyinstaller.org/
# Choose Ruby+Devkit version
```

**Verify Installation:**
```bash
ruby --version  # Should show 3.2.x or higher
```

### Installing Bundler

Bundler manages Ruby gem dependencies for the project.

```bash
gem install bundler

# Verify installation
bundler --version
```

### Project Setup

```bash
# Clone and navigate to project
git clone <repository-url>
cd IHEDelftCodingClub/ihe-coding-club-website

# Install all required gems in isolated environment
bundle install --path vendor/bundle

# Run Jekyll development server
bundle exec jekyll serve

# Site will be available at http://localhost:4000
```

**Important Notes:**
- **Always use `bundle exec`** before Jekyll commands to ensure you're using the correct gem versions from `Gemfile.lock`
- Future-dated events will show automatically (configured in `_config.yml` with `future: true`)
- The `--path vendor/bundle` flag keeps gems isolated to the project (optional but recommended)

### Common Installation Issues

**Issue: Permission denied when installing gems**
```bash
# Don't use sudo! Instead, configure gem installation path
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.zshrc
echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Issue: Native extension build fails**
```bash
# macOS: Install Xcode Command Line Tools
xcode-select --install

# Ubuntu/Debian: Install build tools
sudo apt-get install build-essential patch ruby-dev zlib1g-dev liblzma-dev
```

**Issue: Jekyll command not found**
```bash
# Make sure bundler is being used
bundle exec jekyll serve

# If still not working, reinstall
bundle install
```

---

## Architecture Overview

### Technology Stack

- **Static Site Generator**: Jekyll 4.4+
- **CSS**: Custom CSS with CSS variables
- **JavaScript**: Vanilla JS (no frameworks)
- **Service Worker**: Offline-first PWA capabilities
- **Hosting**: GitHub Pages / Netlify compatible

### Key Design Decisions

1. **No JavaScript frameworks** - Faster load times, simpler maintenance
2. **System fonts** - No external font loading
3. **Inline critical CSS** - Faster first paint
4. **Progressive enhancement** - Works without JavaScript
5. **Mobile-first responsive design**

---

## Reusable Components

### 1. Page Header (`_includes/page-header.html`)

Standardized page header with optional subtitle and button.

**Usage:**
```liquid
{% include page-header.html 
   title="Page Title" 
   subtitle="Optional subtitle" 
   show_calendar_btn=true %}
```

**Parameters:**
- `title` (required): Page heading
- `subtitle` (optional): Descriptive text below title
- `show_calendar_btn` (optional): Shows calendar subscription button

**Used in:** `events.html`, `members.html`, `event.html`, `member.html`

### 2. Event Card (`_includes/event-card.html`)

Reusable event card with two display styles.

**Usage:**
```liquid
{% for event in events %}
  {% include event-card.html 
     event=event 
     style="preview" 
     is_past=false %}
{% endfor %}
```

**Parameters:**
- `event` (required): Event object from collection
- `style` (required): `"preview"` (compact) or `"full"` (detailed)
- `is_past` (optional): Boolean for styling past events

**Styles:**
- **preview**: Compact card for homepage (date + basic info)
- **full**: Detailed card for events page (includes year, instructor)

### 3. Social Links (`_includes/social-links.html`)

Consistent social media link rendering.

**Usage:**
```liquid
{% include social-links.html 
   member=page 
   style="full" %}
```

**Parameters:**
- `member` (required): Member object with social links
- `style` (required): `"compact"` (icons only) or `"full"` (text labels)

### 4. Lazy Image (`_includes/lazy-image.html`)

Optimized image loading with placeholders.

**Usage:**
```liquid
{% include lazy-image.html 
   src="/path/to/image.jpg" 
   alt="Description" 
   class="optional-class" %}
```

**Features:**
- SVG placeholder while loading
- Native `loading="lazy"` attribute
- Intersection Observer API for smart loading
- Fallback for older browsers
- `<noscript>` support

---

## Performance Optimizations

### 1. CSS Compression

**Configuration:** `_config.yml`
```yaml
sass:
  style: compressed  # ~30-40% smaller
```

### 2. Critical CSS Inline

Critical styles inlined in `<head>` for instant rendering:
- Base body styles
- Navigation bar
- Container layout

**Location:** `_layouts/default.html` `<style>` tag

### 3. Service Worker (`sw.js`)

**Caching Strategy:** Network-first with cache fallback

**Cached Assets:**
- Homepage, events page, members page
- CSS stylesheet
- OTI logo
- All visited pages (dynamic)

**Benefits:**
- Offline functionality
- Faster repeat visits
- Reduced bandwidth usage

**Update Cache:** Change `CACHE_VERSION` in `sw.js`

### 4. Lazy Loading Images

**Implementation:**
- Intersection Observer API
- Loads images 50px before viewport
- Blur effect during load
- Fallback for older browsers

**Performance Gain:**
- 60-80% reduction in initial page load
- Saves bandwidth on slow connections

### 5. DNS Prefetch

Pre-resolves external domains:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
```

---

## Mobile Optimizations

### 1. Hamburger Navigation

**Breakpoint:** < 768px

**Features:**
- Slide-out side menu
- Smooth CSS transitions
- Body scroll lock when open
- Click-outside to close
- Accessible (ARIA labels)

**CSS Classes:**
- `.nav-toggle` - Hamburger button
- `.nav-menu.active` - Open state
- `.nav-toggle.active` - Animated icon

### 2. Touch Targets

**Minimum Size:** 44px × 44px (Apple/Google guidelines)

**Applied to:**
- All buttons (`.btn`)
- Navigation links (`.nav-menu a`)
- Social links
- Event cards

### 3. Responsive Breakpoints

**768px and below:**
- Hamburger menu activates
- Event cards stack vertically
- Reduced padding and spacing
- Single column layouts

**480px and below:**
- Even more compact spacing
- Event metadata stacks vertically
- Smaller typography
- 15px container padding

### 4. Sticky Navigation

Navigation stays visible while scrolling:
```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
```

### 5. Theme Color

Mobile browser theme matches site:
```html
<meta name="theme-color" content="#0066a1">
```

---

## Development Workflow

### Local Development

```bash
# Start server
bundle exec jekyll serve

# Clean build
bundle exec jekyll clean
bundle exec jekyll serve

# Custom port
bundle exec jekyll serve --port 4001
```

### Configuration Changes

**Important:** Jekyll doesn't auto-reload `_config.yml`

After editing config:
1. Stop server (Ctrl+C)
2. Restart: `bundle exec jekyll serve`

### Adding New Components

1. Create file in `_includes/component-name.html`
2. Document parameters at top:
```liquid
{% comment %}
  Component Name
  Parameters:
  - param1: Description
  - param2: Description
{% endcomment %}
```
3. Use in templates:
```liquid
{% include component-name.html param1="value" %}
```

### Testing Performance

**Chrome DevTools:**
1. Lighthouse audit (target score > 90)
2. Network throttling (Slow 3G)
3. Device emulation
4. Service Worker inspection

**Mobile Testing:**
- iOS Safari
- Android Chrome
- Various screen sizes

**Offline Testing:**
1. Visit site once
2. DevTools > Network > Offline
3. Refresh - should still work

---

## Customization

### Color Theme

The site uses CSS variables for easy color customization. Edit `assets/css/main.css` in the `:root` section.

**Impact:** Color changes will automatically apply throughout the entire site.

### Site Settings

Edit `_config.yml` to configure site-wide settings including Basic Information, Contact Information, Organization Information, and Regular Meeting Schedule.

**Important:** These variables automatically update throughout the entire website, including:
- Homepage hero section
- Events page header
- "Get Involved" section

**For Single Day Schedule:** Set `day2: ""` (empty string) to display only one meeting day.

**Example (Once per week):**
```yaml
meeting_times:
  day1: "Thursdays"
  day1_time: "6-8pm"
  day1_time_full: "6:00-8:00pm"
  day2: ""                       # Empty = single day schedule
  day2_time: ""
  day2_time_full: ""
```

### Deployment

#### GitHub Pages

The simplest deployment option for Jekyll sites:

1. **Create GitHub repository**
2. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```
3. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Set Source to `main` branch
   - Site will be live at `https://[username].github.io/[repo-name]/`

#### Netlify

For more advanced features (custom domains, faster builds):

1. Connect your GitHub repository
2. Configure build settings:
   - **Build command:** `jekyll build`
   - **Publish directory:** `_site`
3. Deploy

**Note:** The site is configured with `future: true` in `_config.yml` to automatically show upcoming events.

### Schedule Banner (Dismissable Warning)

The site includes a dismissable banner for temporary announcements (e.g., schedule changes).

**Location:** `_includes/schedule-banner.html`

#### How It Works
- Banner appears at the top of every page
- Uses **localStorage** (not cookies) to remember dismissal
- Once closed, it won't show again in that browser
- Persists across all pages
- Resets when user clears browser cache

#### Update Banner Message

Edit `_includes/schedule-banner.html`:

```html
<div class="banner-text">
  <strong>Schedule Update:</strong> Your new message here...
</div>
```

**Important:** If you want dismissed banners to show again after updating the message, change the localStorage key:

```javascript
// Change 'scheduleBannerDismissed' to something new
localStorage.setItem('scheduleBannerDismissedV2', 'true');
```

#### Remove Banner Completely

1. Delete `_includes/schedule-banner.html`
2. Remove from `_layouts/default.html`:
   ```liquid
   {% include schedule-banner.html %}
   ```

#### Testing: Clear localStorage to See Banner Again

**Chrome:**
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to **Application** tab
3. Left sidebar: **Storage** → **Local Storage** → Select your site URL
4. Right-click on `scheduleBannerDismissed` → **Delete**
5. Refresh page

**Alternative (Clear all site data):**
1. Chrome Settings → Privacy and security → Site Settings
2. View permissions and data stored → Find your localhost URL
3. Click **Clear data**

**Quick method for localhost testing:**
- Use Incognito/Private mode (fresh localStorage each time)

### Embedded Google Calendar

The events page includes an embedded Google Calendar that displays all upcoming sessions and workshops.

**Location:** `_includes/calendar-embed.html`

#### Setup: Get Your Calendar ID

You need two things from Google Calendar:

1. **Calendar ID** (for the embed)
2. **Public sharing URL** (for "Add to Calendar" links)

**Steps:**

1. Go to [Google Calendar](https://calendar.google.com/)
2. Find your coding club calendar in the left sidebar
3. Click the three dots (⋮) next to the calendar name → **Settings and sharing**
4. Scroll to **"Integrate calendar"** section
5. Copy the **Calendar ID** (looks like: `xyz123@group.calendar.google.com`)
6. Add it to `_config.yml`:
   ```yaml
   organization:
     google_calendar_id: "your-calendar-id@group.calendar.google.com"
   ```

#### Make Calendar Public

For the embed to work, the calendar must be publicly viewable:

1. In calendar **Settings and sharing**
2. Scroll to **"Access permissions for events"**
3. Check ✅ **"Make available to public"**
4. Set visibility to "See all event details"

#### Customize the Embed

The embed uses these settings (configured in `calendar-embed.html`):
- **View:** AGENDA mode (list view, works best on mobile)
- **Timezone:** Europe/Amsterdam (matches site timezone)
- **Hidden:** Title, print button, extra calendars
- **Shown:** Navigation, dates, tabs

To change the view mode, edit the iframe `src` parameter:
- `mode=AGENDA` - List view (current, best for mobile)
- `mode=WEEK` - Week grid view
- `mode=MONTH` - Month grid view

#### Benefits Over External Link

- **Lower barrier:** Users can see schedule without leaving your site
- **Always current:** Updates automatically when you edit Google Calendar
- **Mobile-optimized:** Responsive design works on all devices
- **Better UX:** Banner links to `/events` (internal) instead of Google Calendar (external)

---

## Best Practices

### File Naming

- Events: `YYYY-MM-DD-event-title.md`
- Members: `firstname-lastname.md`
- Images: `firstname.jpg` (lowercase, no spaces)

### Image Optimization

- **Format:** JPEG for photos, PNG for logos
- **Max width:** 1200px
- **Compression:** 80% quality
- **Tools:** ImageOptim, Squoosh, TinyPNG

---

## Troubleshooting

### Service Worker Issues

**Clear cache:**
```javascript
// In browser console
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(reg => reg.unregister());
});
```

### Image Not Loading

1. Check file path is correct
2. Verify image exists in `assets/images/`
3. Check console for errors
4. Test without lazy loading

### Navigation Menu Stuck

Check for JavaScript errors in console. Menu relies on:
- `.nav-toggle` button exists
- `.nav-menu` element exists
- No conflicting event listeners

### CSS Changes Not Applying

1. Hard refresh: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
2. Clear browser cache
3. Check CSS syntax (no errors)
4. Verify file is saved

---

## Future Enhancements

Potential improvements to consider:

- [ ] WebP image format with JPEG fallback
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Event filtering by topic
- [ ] RSS feed for events
- [ ] Email notifications for new events
- [ ] Member spotlight section
- [ ] Project showcase gallery

---

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev Performance](https://web.dev/performance/)
- [Service Worker Cookbook](https://serviceworke.rs/)

---

*Last updated: November 10, 2025*

