# Hostinger Static Deployment

This project is configured for a static Next.js export. The build output is generated in `out/`.

## Build

Create `.env.local` with the Web3Forms access key before building:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

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

The contact form submits directly to Web3Forms from the browser. For Vercel staging, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in the Vercel project environment variables. For Hostinger, set the same value in `.env.local` before running `npm run build`.
