THE GENTLEMAN PWA - VERSION 2

CORRECTION PRINCIPALE
Cette version N'UTILISE PLUS D'IFRAME.
Elle ouvre directement Google Apps Script pour éviter l'erreur Google 401.

URL ADMIN UTILISEE
https://script.google.com/macros/s/AKfycbxeJnzsyuEIrMjleUmabRIEuoGU2JXbzwewxOrCu9l_hGl1Bla3R6Gg39cjt32ajr4g/exec/admin

FICHIERS
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

MISE A JOUR SUR GITHUB PAGES
1. Ouvre ton dépôt GitHub : The-gentleman-app
2. Remplace index.html, manifest.webmanifest, sw.js, icon-192.png et icon-512.png
3. Commit changes
4. Attends 1 à 3 minutes
5. Ouvre :
   https://punishconcept-create.github.io/The-gentleman-app/

SI TU AS DEJA INSTALLE L'ANCIENNE PWA
- Désinstalle l'ancien raccourci/application The Gentleman.
- Dans Chrome, recharge la page GitHub Pages.
- Réinstalle l'application.
Cela évite que l'ancien service worker/ancien index reste en cache.

IMPORTANT
Une PWA GitHub Pages ne peut pas conserver Google Apps Script à l'intérieur de son propre domaine
sans iframe/proxy. Cette version privilégie donc la compatibilité : elle lance l'Admin directement.
