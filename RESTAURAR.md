# Cómo restaurar una versión anterior

Cada cambio deja un **tag** `restore-AAAA-MM-DD-...` en el commit anterior al cambio y una **copia** en `backups/`.
La lista completa está en `CAMBIOS.md`.

## Puntos de restauración

| Tag | Commit | Estado |
|---|---|---|
| rama `restore-2026-10-17-antes-future-e9-1` | `c9f5e55` | FUTURE 9.0 (Impresión rediseñada; propiedades bajan en pantallas medianas) |
| rama `restore-2026-10-17-antes-future-e9` | `5897708` | Antes del rediseño de Impresión en FUTURE (vista clásica ya corregida) |
| rama `restore-2026-10-17-antes-fix-clasica-2` | `efdf6a2` | Antes del resto de correcciones de la vista clásica (portal empresa, frases, halls…) |
| rama `restore-2026-10-17-antes-fix-clasica` | `ffb02cc` | Antes de las 5 correcciones de la vista clásica (FUTURE 8.1 completo) |
| rama `restore-2026-10-17-antes-future-e8` | `a3e6152` | FUTURE etapa 7 (falta Campos y totales, Uso de botones e Impresión) |
| rama `restore-2026-10-17-antes-future-e7` | `bbb083d` | FUTURE etapa 6 (ventanas rediseñadas; menú ⋯ aún con pantalla anterior) |
| rama `restore-2026-10-17-antes-future-e6` | `34936b2` | FUTURE etapa 5 (todas las pestañas, ventanas sin rediseñar) |
| rama `restore-2026-10-17-antes-future-e5` | `f0578ac` | FUTURE etapa 4 (todo menos Datos con diseño propio) |
| rama `restore-2026-10-17-antes-future-e4` | `d874abf` | FUTURE etapa 3 (Operativa y Logística con diseño propio) |
| rama `restore-2026-10-17-antes-future-e3` | `d207f3c` | FUTURE etapa 2 (Operativa con diseño propio) |
| rama `restore-2026-10-17-antes-future-e2` | `0bd1941` | FUTURE etapa 1 (solo Ingresos con diseño propio) |
| rama `restore-2026-10-17-antes-future` | `700b036` | INDEX antes de FUTURE (sin botón FUTURE ni carpeta `future/`) |
| `restore-2026-10-16-antes-login-v2` / `backups/INDEX_2026-10-16_antes-login-v2.html` | `9dc86ad` | INDEX antes del login v2 (Entrar/Crear cuenta, Sitio Empresa) |
| (archivo) `backups/INDEX_2026-10-11_antes-rediseno.html` | `b885a82` | INDEX antes del rediseño visual fase 1 — renombrar a `INDEX.html` |
| `restore-2026-10-09-antes-mapa` | `12a7962` | INDEX antes del botón 🗺️ y sin `MAPA_FIRA.html` |
| `restore-2026-10-09-antes-mapa-integrado` | `d6f24f1` | Capacidad hecha, mapa aún en ventana aparte (sin panel dentro de INDEX) |
| `restore-2026-10-09-antes-capacidad` | `7227031` | Mapa con plano RESA y rutas, antes de los estados por color, el zoom por rambla, la sincronización con la web y la capacidad |

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

## Volver el mapa a antes de la capacidad
```bash
git checkout restore-2026-10-09-antes-capacidad -- MAPA_FIRA.html
git commit -m "Restaurar MAPA_FIRA a antes-capacidad" && git push
```
Sin terminal: en GitHub abre *Tags* → `restore-2026-10-09-antes-capacidad` → `MAPA_FIRA.html` → **Raw**, copia y pega en `MAPA_FIRA.html` → **Commit**.

## Quitar el mapa integrado de INDEX
```bash
git checkout restore-2026-10-09-antes-mapa-integrado -- INDEX.html MAPA_FIRA.html
```
O a mano: en `INDEX.html` borra el bloque `MAPA_FIRA integrado` (antes de `</body>`) y el botón `id="btnMapa"`.

## Quitar solo el botón del mapa (sin restaurar nada más)
En `INDEX.html`, busca `MAPA_FIRA 2026-10-09` y borra esa línea de comentario y el `<button>` que va justo debajo.

## Quitar FUTURE
En `INDEX.html`, borra las líneas del bloque `<!-- FUTURE 2026-10-17` … `<!-- /FUTURE -->` (justo antes de `</body>`) y la carpeta `future/`. La vista clásica queda exactamente como antes.
Para salir de FUTURE sin borrar nada: menú de usuario → Vista clásica, o abre `INDEX.html?clasica`.
FUTURE guarda solo dos preferencias en el navegador: `bu_fx_mode` (entrar en FUTURE) y `bu_fx_rail` (menú plegado).

## Datos
- Restaurar el HTML **no borra datos**. Firebase y `localStorage['cu1_local']` no se tocan.
- El mapa guarda lo suyo aparte, en `bu_mapa_layout_v8` y `bu_mapa_plan_v3` (la versión anterior usaba `bu_mapa_plan_v2`, que sigue en el navegador).
- Para limpiar el mapa: en *Configurar plano*, pulsa *Restablecer plano*.
