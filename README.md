# TalibeVoice — Application Web Publique

Plateforme numérique de recensement, cartographie, gestion et suivi des talibés et des daaras au Sénégal.

## Description

Cette application est destinée aux **donateurs** et aux **partenaires**. Elle permet de :

- Faire un don (financier ou matériel) via Wave ou Orange Money
- Explorer les daaras sur une carte et consulter leurs besoins
- Devenir partenaire de la plateforme
- Soumettre des offres de formation, stage ou emploi pour les talibés majeurs
- Accéder à un espace partenaire sécurisé par code unique

## Technologies

- React.js + Vite
- React Router DOM
- Lucide React (icônes)
- Axios
- CSS Variables (design system TalibeVoice)

## Design System

| Élément            | Valeur               |
| ------------------ | -------------------- |
| Couleur primaire   | `#1B7D4B`            |
| Couleur secondaire | `#2D3748`            |
| Accent             | `#FFD54F`            |
| Police             | Inter (Google Fonts) |

## Pages

| Page                 | Route                         |
| -------------------- | ----------------------------- |
| Landing page         | `/`                           |
| À propos             | `/a-propos`                   |
| Explorer les daaras  | `/daaras`                     |
| Faire un don         | `/faire-un-don`               |
| Devenir partenaire   | `/devenir-partenaire`         |
| Login partenaire     | `/partenaire/login`           |
| Dashboard partenaire | `/partenaire/dashboard`       |
| Soumettre une offre  | `/partenaire/soumettre-offre` |
| Talibés inscrits     | `/partenaire/talibe-inscrits` |
| Impact partenaire    | `/partenaire/impact`          |
| Profil partenaire    | `/partenaire/profil`          |
| Confidentialité      | `/confidentialite`            |
| Conditions           | `/conditions`                 |
| Contact              | `/contact`                    |

## Lancer le projet

```bash
npm install
npm run dev
```

## Structure du projet

src/
├── assets/ # Images et logos
├── components/
│ ├── layout/ # Navbar, Footer
│ └── sections/ # HeroSection, StatsSection, HowItWorks...
├── pages/
│ ├── partner/ # Pages espace partenaire
│ └── \*.jsx # Pages publiques
├── styles/
│ └── variables.css # Tokens CSS design system
├── App.jsx # Routes React Router
└── main.jsx

## Architecture monorepo TalibeVoice

| App                        | Repo                    | Acteurs              |
| -------------------------- | ----------------------- | -------------------- |
| App Web Publique (ce repo) | `talibevoice_publicweb` | Donateur, Partenaire |
| App Web Admin              | `talibevoice_adminweb`  | Administrateur       |
| App Mobile PWA             | `talibevoice_mobilepwa` | AgentDeTerrain       |
| API Backend                | `talibevoice_api`       | Laravel + PostgreSQL |

## Auteur

Projet de fin de cycle — Licence 3 Génie Logiciel  
Institut Supérieur d'Informatique (ISI) — Dakar, Sénégal  
© 2025 TalibeVoice
