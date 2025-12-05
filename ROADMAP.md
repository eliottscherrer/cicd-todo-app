# Roadmap du projet CI/CD Todo App

## Vendredi 28.11.2025 - 0 période

- Absence

## Jeudi 04.12.2025 - 2 périodes effectives

- 2 périodes initiales dédiées au rattrapage d'un test
- Tâches:
  - Revue rapide du cahier des charges et des VMs disponibles.
  - Analyse du repository: structure backend/frontend/tests, Docker existant.
  - Début de rédaction de la planification (roadmap) et structuration des séances.

## Vendredi 05.12.2025 - 4 périodes

- Tâches:
  - Mise en place des conventions Git (branches feature, PR, règles de merge).
  - Ajout/validation des scripts npm pour lint/test/build côté back et front.
  - Début de création du workflow CI: jobs lint/test pour backend (Node/Express) et frontend (Vue).

## Jeudi 11.12.2025 - 4 périodes

- Tâches:
  - Finaliser CI de base (lint + tests + build).
  - Préparer Dockerfiles pour backend et frontend (première version).

## Vendredi 12.12.2025 - 4 périodes

- Tâches:
  - Finaliser Dockerfiles + docker-compose (dev/test), .env et variables.
  - Vérifier connexion aux services (Mongo en local).

## Jeudi 18.12.2025 - 4 périodes

- Tâches:
  - Ajouter job CI pour build/push images versionnées (tag unique: v0.x).
  - Rédiger scripts SSH pour déploiement sur VMs de test.

## Vendredi 19.12.2025 - 4 périodes

- Tâches:
  - Déploiement automatisé sur VMs de test: pull images, compose up, health-check.
  - Tests E2E critiques (auth + todo) sur env test.

## Jeudi 08.01.2026 - 4 périodes

- Tâches:
  -
  - Promotion vers prod: validation manuelle, déploiement sur les VMs.
  - Rollback simple: re-pull de l'image précédente et docker compose up -d.
  - Vérification post-déploiement: logs, endpoints, latence basique.

## Vendredi 09.01.2026 - 4 périodes

- Tâches:
  - Ecriture de la documentation
  - Récapitulatif des tests: unitaires + 2-3 E2E critiques, couverture rapide.
  - Bilan court: ce qui marche, points d'amélioration (observabilité, sécurité, scaling).
