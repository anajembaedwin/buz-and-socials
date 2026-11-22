# Buz and Socials Ventures

The website for Buz and Socials Ventures, a business based in Abuja, Nigeria. It brings together Reservations, Staffing, Technologies, Agro and Consulting. Each business has its own page here and its own website.

Live at https://buzandsocials.com

## What is in here

A plain static website. No framework and no build step.

- `site/` holds the whole website: Home, About, Contact and one page for each of the five businesses.
- `site/styles.css` holds all the styling, for desktop and phone.
- `site/site.js` holds the phone menu and the contact form. The form opens WhatsApp with the message ready to send, so it needs no server.
- `wrangler.jsonc` publishes `site/` on Cloudflare, which is free.

## Things to fill in when you have them

- Partner logos: put the images in `site/assets/partners/` and add them inside the `.slide` element in `site/index.html`. Then remove the `hidden` attribute on the partners section.
- The five business websites (reservations., staffing., tech., agro. and consulting.buzandsocials.com) are separate sites. The buttons on these pages already link to them.

## Publish

```
npx wrangler deploy
```

Run it from the repository folder. Then add `buzandsocials.com` as a custom domain to the `buz-ventures-website` worker in Cloudflare.

Licensed as in `LICENSE`.
