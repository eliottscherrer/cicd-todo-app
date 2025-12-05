# Roadmap du projet CI/CD Todo App

## Vendredi 28.11.2025 - 0 période

- Absence

## Jeudi 04.12.2025 - 2 périodes effectives

- 2 périodes initiales dédiées au rattrapage d'un test
- Tâches:
  - Revue rapide du cahier des charges et des VMs disponibles.
  - Analyse du repository: structure backend/frontend/tests, Docker existant.
  - Début de rédaction de la planification (roadmap) et structuration des séances.
  - Création du projet Kanban GitHub Projects (columns: Backlog, In Progress, Review, Done) et définition des issues initiales.

## Vendredi 05.12.2025 - 4 périodes

- Tâches:
  - Mise en place des conventions Git (branches feature, PR, règles de merge, protection de la branche `main`).
  - Ajout/validation des scripts npm pour audit/lint/test/build côté back et front.
  - Début de création du workflow CI de base: jobs audit + lint + tests pour backend (Node/Express) et frontend (Vue), avec exécution en parallèle et cache npm.

## Jeudi 11.12.2025 - 4 périodes

- Tâches:
  - Finaliser CI de base (audit + lint + tests + build).
  - Configurer tests frontend sur 3 navigateurs (Chrome, Firefox, Edge) via Cypress.
  - Préparer Dockerfiles pour backend et frontend (première version) avec support MySQL via variables d'environnement.
  - Créer documentation technique initiale dans `docs/` (architecture, flux CI/CD, env dev/test/prod).

## Vendredi 12.12.2025 - 4 périodes

- Tâches:
  - Finaliser Dockerfiles + docker-compose (dev/test), `.env` et variables pour MySQL (DB host/user/password, init script).
  - Ajouter cache des dépendances dans GitHub Actions (actions/setup-node + cache npm) et paralléliser back/front.
  - Préparer secrets GitHub pour déploiement SSH sur serveur de test (hôte dédié selon CdC).

## Jeudi 18.12.2025 - 4 périodes

- Tâches:
  - Ajouter job CI pour build/push images versionnées (tag unique: `v0.x`) vers un registre (GHCR ou Docker Hub).
  - Créer workflow CD "test": déclenchement sur `push` de `main`, SSH vers serveur dédié, `docker pull`, `docker compose up -d`, health-check.
  - Rédiger scripts SSH pour serveur de test.

## Vendredi 19.12.2025 - 4 périodes

- Tâches:
  - Déploiement automatisé sur serveur de test: pull images, compose up, health-check.
  - Tests E2E critiques (auth + todo) sur env test, sur 3 navigateurs, avec rapport.

## Jeudi 08.01.2026 - 4 périodes

- Tâches:
  - Préparer workflow CD « production »: déclenchement uniquement manuel (workflow_dispatch), déploiement sur serveur dédié prod.
  - Mise en place rollback simple: re-pull de l'image précédente et `docker compose up -d`.
  - Vérification post-déploiement: logs, endpoints, latence basique.
  - Finaliser release GitHub (code source + workflows YAML commentés).

## Vendredi 09.01.2026 - 4 périodes

- Tâches:
  - Rédaction du rapport PDF CI/CD dans `docs/` (introduction, description app, actions nécessaires back/front selon env, étapes du workflow CI/CD, schéma draw.io complet, rapport de déploiement, captures CI/CD GitHub Actions, usage de l'IA, conclusion).
  - Récapitulatif des tests: unitaires + 2-3 E2E critiques, couverture rapide.
  - Bilan court: ce qui marche, points d'amélioration (observabilité, sécurité, scaling).
