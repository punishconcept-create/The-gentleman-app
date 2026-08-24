THE GENTLEMAN PWA

Cette structure enveloppe ton interface Google Apps Script dans une PWA installable.

FICHIERS
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

INTERFACE CHARGEE
https://script.google.com/macros/s/AKfycbxeJnzsyuEIrMjleUmabRIEuoGU2JXbzwewxOrCu9l_hGl1Bla3R6Gg39cjt32ajr4g/exec/admin

HEBERGEMENT
Héberge le contenu du dossier sur un hébergement HTTPS statique :
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- Netlify

INSTALLATION ANDROID
1. Ouvre l'URL publique de l'hébergement dans Chrome.
2. Menu ⋮
3. Choisis "Installer l'application" ou "Ajouter à l'écran d'accueil".

SI TON URL APPS SCRIPT CHANGE
Modifie la valeur src de l'iframe dans index.html.

NOTE
Le service worker met en cache uniquement la coque PWA. L'administration Apps Script nécessite Internet.
