# Hostinger Static Deployment

This project is configured for a static Next.js export. The build output is generated in `out/`.

## Build

```bash
npm install
npm run build
```

## Upload

Upload the contents of the `out/` folder to Hostinger `public_html`.

Do not upload the `out/` folder itself. Upload the files and folders inside it.

## Clean Routes

The project includes `public/.htaccess`, so `npm run build` copies it into `out/.htaccess`.

After uploading, make sure `public_html/.htaccess` contains:

```apache
Options -MultiViews
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^(.+)/$ $1/index.html [L]
RewriteRule ^([^./]+)$ $1/index.html [L]
RewriteRule ^(.+[^/])$ $1/index.html [L]
```

This lets clean URLs such as `/contact/` and `/our-team/maria/` resolve to their exported static HTML files.

## Contact Forms

The contact and newsletter forms are currently marked as not connected. To make them functional on static hosting, connect them to an external form service such as Formspree, Basin, Getform, or a CRM-provided endpoint.
