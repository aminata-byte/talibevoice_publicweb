# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

                                    ## DOCUMENTATION

# TalibeVoice — Application Web Publique

Plateforme numérique de recensement, cartographie, gestion et suivi des talibés et des daaras au Sénégal.

## Description

Cette application est destinée aux **donateurs** et aux **partenaires**. Elle permet de :

- Faire un don anonymement
- Explorer les daaras sur une carte
- Devenir partenaire
- Soumettre des offres de formation, stage ou emploi

## Technologies

- React.js + Vite
- React Router DOM
- Axios
- CSS Variables (design system TalibeVoice)

## Lancer le projet

```bash
npm install
npm run dev
```

## Architecture

Fait partie du monorepo TalibeVoice :

- `talibevoice_publicweb` — App Web Publique (ce repo)
- `talibevoice_adminweb` — App Web Administrateur
- `talibevoice_mobilepwa` — App Mobile PWA AgentDeTerrain
- `talibevoice_api` — API Laravel + PostgreSQL
