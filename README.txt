THE GENTLEMAN PWA V5

NOUVEAU
- Le scanner QR est maintenant intégré directement à la PWA.
- Le bouton SCANNER UNE CARTE ouvre scanner.html sur GitHub Pages.
- La caméra est demandée par la PWA HTTPS, pas par Google Apps Script.
- Une fois le QR reconnu, l'application ouvre :
  https://script.google.com/macros/s/AKfycbxeJnzsyuEIrMjleUmabRIEuoGU2JXbzwewxOrCu9l_hGl1Bla3R6Gg39cjt32ajr4g/exec/bar?id=...&token=...

FICHIERS A METTRE SUR GITHUB
- index.html
- scanner.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

MISE A JOUR
1. Remplace les fichiers dans le dépôt The-gentleman-app.
2. Commit changes.
3. Attends 1 à 3 minutes.
4. Ferme complètement l'application The Gentleman.
5. Relance-la.
6. Si l'ancienne V4 reste affichée, ouvre le site GitHub Pages dans Chrome et recharge une fois.

AUTORISATION CAMERA
Au premier lancement du scanner, Android/Chrome doit demander l'accès caméra.
Choisir Autoriser seulement lorsque l'appli est utilisée.

IMPORTANT
Le fichier Scanner.html d'Apps Script peut rester dans ton projet, mais la PWA V5 ne l'utilise plus.
