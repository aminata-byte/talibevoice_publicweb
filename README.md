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

| Élément | Valeur |
|---|---|
| Couleur primaire | `#1B7D4B` |
| Couleur secondaire | `#2D3748` |
| Couleur tertiaire | `#AD505A` |
| Accent | `#FFD54F` |
| Fond | `#F7FAFC` |
| Police | Inter (Google Fonts) |

## Pages

| Page | Route | Accès |
|---|---|---|
| Landing page | `/` | Public |
| À propos | `/a-propos` | Public |
| Explorer les daaras | `/daaras` | Public |
| Faire un don | `/faire-un-don` | Public |
| Devenir partenaire | `/devenir-partenaire` | Public |
| Confidentialité | `/confidentialite` | Public |
| Conditions | `/conditions` | Public |
| Contact | `/contact` | Public |
| Login partenaire | `/partenaire/login` | Public |
| Dashboard partenaire | `/partenaire/dashboard` | Protégé |
| Soumettre une offre | `/partenaire/soumettre-offre` | Protégé |
| Talibés inscrits | `/partenaire/talibe-inscrits` | Protégé |
| Impact partenaire | `/partenaire/impact` | Protégé |
| Profil partenaire | `/partenaire/profil` | Protégé |

## Architecture du projet

src/
├── assets/               # Images et logos
├── components/
│   ├── layout/           # Navbar, Footer, ProtectedRoute
│   └── sections/         # HeroSection, StatsSection, HowItWorks...
├── context/
│   └── PartnerAuthContext.jsx  # Contexte authentification partenaire
├── hooks/
│   ├── usePartnerAuth.js       # Hook authentification partenaire
│   ├── useDaaras.js            # Hook chargement des daaras
│   └── useDon.js               # Hook soumission des dons
├── pages/
│   ├── partner/          # Pages espace partenaire
│   └── *.jsx             # Pages publiques
├── services/
│   ├── api.js            # Instance Axios + intercepteurs
│   ├── daaraService.js   # Appels API daaras
│   ├── donService.js     # Appels API dons
│   └── partnerService.js # Appels API partenaires
├── styles/
│   └── variables.css     # Tokens CSS design system
├── App.jsx               # Routes React Router
└── main.jsx

## Variables d'environnement

Crée un fichier `.env` à la racine :

```env
VITE_API_URL=http://localhost:8000/api
```

## Lancer le projet

```bash
npm install
npm run dev
```

## État de connexion API

> Les données sont actuellement en mode mock (statiques).
> La connexion au backend Laravel sera activée une fois l'API déployée.

## Architecture monorepo TalibeVoice

| App | Repo | Acteurs |
|---|---|---|
| App Web Publique (ce repo) | `talibevoice_publicweb` | Donateur, Partenaire |
| App Web Admin | `talibevoice_adminweb` | Administrateur |
| App Mobile PWA | `talibevoice_mobilepwa` | AgentDeTerrain |
| API Backend | `talibevoice_backend` | Laravel + PostgreSQL |

## Auteur

Projet de fin de cycle — Licence 3 Génie Logiciel  
Institut Supérieur d'Informatique (ISI) — Dakar, Sénégal  
© 2025 TalibeVoice