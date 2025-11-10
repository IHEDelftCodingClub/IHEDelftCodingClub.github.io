# Pre-Launch Checklist

Complete these tasks before making the website live:

## ✅ Critical (MUST DO)

### Configuration
- [x] **Update Google Calendar URL** in `_config.yml`  
  Replace `YOUR_GOOGLE_CALENDAR_URL_HERE` with your actual Google Calendar public link
  
- [x] **Verify contact email** in `_config.yml`  
  Current: `codingclub@ihe.nl` - make sure this email exists and is monitored

- [x] **Update meeting times** in `_config.yml` if they change  
  Current: Mondays 6-7pm, Thursdays 6-8pm

### Content
- [ ] **Update event details**  
  - Change dates in `_events/*.md` files to match your actual schedule
  - Update locations, instructors, and descriptions
  
- [ ] **Add real member profiles**  
  - Copy `_members/_TEMPLATE_MEMBER.md` for each member
  - Add profile photos to `assets/images/members/` (format: `firstname_lastname.jpg`)
  - Update with actual names, roles, bios, and social links

### Testing
- [x] **Test locally**  
  Run `bundle exec jekyll serve` and verify:
  - All pages load correctly
  - Navigation works
  - Events display properly
  - Member profiles show up
  - Mobile view works
  
- [x] **Test all external links**  
  - Google Calendar link
  - IHE Delft program link
  - Open Tech International link
  - Social media links (LinkedIn, GitHub)

## 🎨 Recommended (SHOULD DO)

- [ ] **Add more members**  
  Include all founding members and regular participants

- [ ] **Create multiple events**  
  Show a full schedule for the semester

- [x] **Set up Google Calendar**  
  - Create a public Google Calendar for the coding club
  - Add all recurring sessions
  - Add special workshops
  - Get the public shareable link

- [ ] **Customize color scheme** (optional)  
  Edit `assets/css/main.css` if you want different colors

## 📱 Before Going Live

### Deploy Checklist
- [x] Choose hosting platform:
  - [x] GitHub Pages (free, easy)
  - [ ] Netlify (free, more features)
  - [ ] Other

### GitHub Pages Setup
```bash
# 1. Create GitHub repository
# 2. Push your code
git add .
git commit -m "Initial website setup"
git push origin main

# 3. Enable GitHub Pages
# Go to repo Settings > Pages > Source: main branch
```

### Post-Deploy
- [ ] **Test deployed site**  
  Visit your live URL and check everything works

- [ ] **Set up custom domain** (optional)  
  e.g., `codingclub.ihe.nl` or `ihecodingclub.org`

- [ ] **Share with stakeholders**  
  - IHE Delft administrators
  - Open Tech International
  - Current students

## 🚀 Launch Day

- [ ] **Announce to students**  
  - Email announcement
  - Student portal post
  - Presentation at orientation (if applicable)

- [ ] **Share on social media** (if you have accounts)

- [ ] **Update any existing coding club materials** with new website link

## 📊 Post-Launch Monitoring

- [ ] Monitor email for questions/feedback
- [ ] Update events regularly
- [ ] Add new members as they join
- [ ] Keep content fresh and current

---

## Quick Reference

**Live site will be at:**
- GitHub Pages: `https://[your-username].github.io/[repo-name]/`
- Custom domain: `your-domain.com`

**Local development:**
```bash
bundle exec jekyll serve
# Visit: http://localhost:4000
```

**Update content:**
- Events: `_events/` folder
- Members: `_members/` folder
- Config: `_config.yml`

**Need help?**
- Check `README.md` for user documentation
- Check `TECHNICAL.md` for developer details and setup instructions
- Contact Open Tech International: https://opentechinternational.org/

