# Guide de Déploiement - Portfolio Albert

## 🚀 Options d'Hébergement Recommandées

### 1. **Netlify (Recommandé - Gratuit)**
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez votre dossier de projet
3. Votre site sera automatiquement déployé
4. URL générée : `https://votre-site.netlify.app`

**Avantages :**
- Déploiement automatique depuis GitHub
- HTTPS gratuit
- CDN global
- Formulaires intégrés (Formspree déjà configuré)

### 2. **Vercel (Excellent - Gratuit)**
1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre repository GitHub
3. Déploiement automatique à chaque push
4. URL générée : `https://votre-site.vercel.app`

**Avantages :**
- Performance optimale
- Déploiement automatique
- Analytics intégrés
- Edge Functions

### 3. **GitHub Pages (Gratuit)**
1. Créez un repository GitHub
2. Uploadez vos fichiers
3. Allez dans Settings > Pages
4. Sélectionnez la branche main
5. URL : `https://votre-username.github.io/votre-repo`

## 📋 Préparation Avant Déploiement

### 1. **Mise à jour des URLs**
Remplacez `https://votre-domaine.com` par votre vraie URL dans :
- `sitemap.xml`
- `robots.txt`
- `index.html` (balises Open Graph)

### 2. **Création du CV**
Ajoutez votre CV PDF dans le dossier `documents/` :
```
documents/
└── cv-albert.pdf
```

### 3. **Images manquantes**
Remplacez les images `placeholder-project.jpg` par de vraies images de vos projets.

## 🔧 Configuration Post-Déploiement

### 1. **Domaine personnalisé (Optionnel)**
- Achetez un domaine (OVH, Namecheap, etc.)
- Configurez les DNS vers votre hébergeur
- Activez HTTPS

### 2. **Analytics (Recommandé)**
Ajoutez Google Analytics dans `index.html` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. **Search Console**
1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété
3. Soumettez votre sitemap.xml

## 📊 Test de Performance

Après déploiement, testez votre site sur :
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🔒 Sécurité

Le site inclut déjà :
- Headers de sécurité dans `.htaccess`
- Protection XSS
- Content Security Policy
- HTTPS redirect (à activer)

## 📱 PWA (Progressive Web App)

Le site est configuré comme PWA avec :
- Manifest.json
- Service Worker (à ajouter)
- Installation possible sur mobile

## 🆘 Support

En cas de problème :
1. Vérifiez les logs de déploiement
2. Testez en local : `python -m http.server 8000`
3. Vérifiez la console du navigateur
4. Contactez le support de votre hébergeur

---

**Votre portfolio est maintenant prêt pour un déploiement professionnel ! 🎉**
