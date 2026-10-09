# Cómo restaurar una versión anterior

Cada cambio deja un **tag** `restore-AAAA-MM-DD-...` en el commit anterior al cambio y una **copia** en `backups/`.
La lista completa está en `CAMBIOS.md`.

## Puntos de restauración

| Tag | Commit | Estado |
|---|---|---|
| `restore-2026-10-09-antes-mapa` | `12a7962` | INDEX antes del botón 🗺️ y sin `MAPA_FIRA.html` |

## Opción A — Sin terminal (desde GitHub web)
1. Abre `backups/INDEX_2026-10-09_antes-mapa.html` en GitHub y pulsa **Raw**. Copia todo.
2. Abre `INDEX.html`, pulsa ✏️ **Edit**, pega el contenido y haz **Commit changes**.
3. GitHub Pages publica en 1–2 minutos.

## Opción B — Terminal
```bash
# Volver solo INDEX.html a como estaba antes del mapa
git checkout restore-2026-10-09-antes-mapa -- INDEX.html
git commit -m "Restaurar INDEX a restore-2026-10-09-antes-mapa"
git push

# Quitar también el mapa
git rm MAPA_FIRA.html && git commit -m "Quitar MAPA_FIRA" && git push
```

## Quitar solo el botón del mapa (sin restaurar nada más)
En `INDEX.html`, busca `MAPA_FIRA 2026-10-09` y borra esa línea de comentario y el `<button>` que va justo debajo.

## Datos
- Restaurar el HTML **no borra datos**. Firebase y `localStorage['cu1_local']` no se tocan.
- El mapa guarda lo suyo aparte, en `bu_mapa_layout_v2` y `bu_mapa_plan_v1`.
- Para limpiar el mapa: en *Configurar plano*, pulsa *Restablecer plano*.
