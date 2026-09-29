# Artist Portfolio — GitHub Pages

A lightweight, responsive portfolio for a visual artist. It uses plain HTML, CSS, and JavaScript, so there is no build process and no framework to maintain.

## Files

- `index.html` — site content and artwork metadata
- `styles.css` — layout, typography, responsive styling
- `script.js` — mobile navigation, artwork filtering, artwork detail dialog
- `assets/images/` — put artwork images here
- `assets/artist-cv.pdf` — optional artist CV

## Customize the site

### 1. Change the artist name

In `index.html`, replace every instance of `Artist Name` with the artist's actual name.

### 2. Change biography, exhibitions, and contact details

Edit the text in the About, Exhibitions, and Contact sections of `index.html`.

### 3. Add artwork images

Copy images into:

```text
assets/images/
```

For example:

```text
assets/images/untitled-1.jpg
```

Then replace a placeholder inside an artwork card with an image:

```html
<img src="assets/images/untitled-1.jpg" alt="Untitled I, 2026, oil on canvas">
```

If you also want the image to appear in the large artwork dialog, set the button's `data-image` value:

```html
data-image="assets/images/untitled-1.jpg"
```

For best performance, export web images as JPEG or WebP at approximately 1600–2400 px on the longest side.

### 4. Add the CV

Place the PDF at:

```text
assets/artist-cv.pdf
```

Or remove the CV link from `index.html` if it is not needed.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `artist-portfolio`.
2. Upload all files in this folder to the repository root.
3. Open the repository's **Settings**.
4. Go to **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder.
7. Save.

GitHub will publish the site at a URL similar to:

```text
https://YOUR-USERNAME.github.io/artist-portfolio/
```

If the repository is named exactly `YOUR-USERNAME.github.io`, the site will publish at:

```text
https://YOUR-USERNAME.github.io/
```

## Custom domain

In **Settings → Pages → Custom domain**, enter the artist's domain such as `artistname.com`. GitHub will show the DNS records that need to be configured with the domain provider.

## Notes

- The site is fully static and works on GitHub Pages as-is.
- No analytics, cookies, or trackers are included.
- The Google Fonts links can be removed if you want the site to use only system fonts.
