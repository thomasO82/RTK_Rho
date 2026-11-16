# RecipesI7 — TD1 : les vues

Application React adaptée progressivement aux cinq TD. Le code original est conservé sur main.

| Branche | Contenu ajouté |
| --- | --- |
| td1-vues | Quatre routes, catégories, recherche, fiche et modale useToggle ; Axios et état local |
| td2-zustand | Deux slices Zustand, courses de la semaine et calendrier |
| td3-planification | Action de planification atomique |
| td4-synchronisation | Suppression des ingrédients associés à une planification supprimée |
| td5-tanstack-query | Lectures TheMealDB avec TanStack Query |

Chaque branche reprend la précédente. Pour changer : `git switch td1-vues`, puis `npm ci`.

## Cette étape

La modale propose une date, mais la validation est volontairement désactivée jusqu'au TD2.
Les vues Courses et Planning sont préparées pour l'étape suivante.
Les lectures Axios gèrent chargement, erreur, résultat vide.
Composants limités à 50 lignes ; composants et styles existants conservés ou adaptés.

## Commandes

`npm ci`, `npm run dev`, `npm run build`, `npm run lint`.

Les lectures nécessitent un accès à TheMealDB. Aucun serveur applicatif ni clé d'API n'est nécessaire.
