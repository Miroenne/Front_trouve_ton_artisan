# Trouve Ton Artisan - Frontend

Application React permettant de rechercher des artisans de la région Auvergne-Rhône-Alpes, de consulter leurs informations et de les contacter par email.

## Fonctionnalités

- Affichage des trois artisans du mois sur la page d'accueil.
- Navigation par catégories d'artisans.
- Recherche d'un artisan par nom, puis redirection vers sa fiche par identifiant.
- Page détail d'un artisan avec note, spécialité, ville, site web et présentation.
- Formulaire de contact générant un lien `mailto:`.
- Page d'erreur pour les liens de footer non implémentés.

## Technologies

- React
- React Router
- Sass
- Bootstrap classes
- Create React App

## Prérequis

- Node.js
- npm
- API locale démarrée sur `http://localhost:3000`

Le frontend consomme directement l'API avec des appels `fetch` vers `http://localhost:3000`.

## Installation

```bash
npm install
```

## Lancement

```bash
npm start
```

Create React App démarre par défaut sur le port `3000`. Comme l'API utilise aussi ce port, CRA proposera généralement de lancer le frontend sur `3001`.

URL frontend habituelle :

```txt
http://localhost:3001
```

## Scripts disponibles

```bash
npm start
```

Démarre l'application en mode développement.

```bash
npm test
```

Lance les tests en mode interactif.

```bash
npm run build
```

Génère une version de production dans le dossier `build`.

## Structure

```txt
src/
├── assets/
│   ├── fonts/
│   └── img/
├── components/
│   ├── Card.jsx
│   ├── Display_Artisan.jsx
│   ├── Footer.jsx
│   ├── Form.jsx
│   └── Nav.jsx
├── pages/
│   ├── Artisan.jsx
│   ├── Category.jsx
│   ├── Error.jsx
│   └── Home.jsx
├── scss/
├── utils/
│   └── renderStars.js
├── App.js
└── index.js
```

## Routes Frontend

| Route | Page | Description |
| --- | --- | --- |
| `/` | `Home` | Accueil et artisans du mois |
| `/catégories/:categoryName` | `Category` | Liste des artisans d'une catégorie |
| `/artisans/:id` | `Artisan` | Détail d'un artisan |
| `/error` | `Error` | Page d'erreur |

Les routes de catégorie et de détail artisan utilisent des paramètres d'URL avec `useParams`. Cela permet d'ouvrir directement une page, de partager son URL et d'améliorer son indexation.

## API Consommée

| Méthode | Endpoint | Utilisation |
| --- | --- | --- |
| `GET` | `/top3/` | Artisans du mois |
| `GET` | `/categories/` | Catégories du menu |
| `GET` | `/societies/:nom` | Recherche par nom d'artisan, retourne une liste de résultats |
| `GET` | `/societies/id/:id` | Détail d'un artisan par identifiant |
| `GET` | `/societies/categorized/:category` | Recherche par catégorie |

## Documentation du Code

Les composants et utilitaires principaux sont documentés avec des commentaires JSDoc :

- description du rôle du composant ou de la fonction ;
- description des props ;
- description des paramètres d'événements ;
- valeur retournée.

Ces commentaires sont utiles pour l'autocomplétion IDE, la maintenance et une future génération de documentation technique.

## Points d'Attention Connus

- Les appels API sont écrits en dur avec `http://localhost:3000`. Une variable d'environnement `REACT_APP_API_URL` éviterait de modifier le code entre développement et production.
- La recherche de la navbar prend le premier résultat retourné par `/societies/:nom`. Si plusieurs artisans correspondent, une page de résultats dédiée serait plus précise.
- Certaines icônes d'étoiles restent exposées avec des textes alternatifs répétitifs. Pour une meilleure accessibilité, une note textuelle unique et des étoiles décoratives seraient préférables.
