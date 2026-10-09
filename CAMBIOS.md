# Registro de cambios — BeUnifyT (INDEX)

Cada entrada indica qué se cambió, en qué archivos y cuál es su punto de restauración.
Para volver atrás, ver `RESTAURAR.md`.

---

## 2026-10-09 · Mapa de puertas y rampas de Fira Gran Via

**Punto de restauración:** tag `restore-2026-10-09-antes-mapa` (commit `12a7962`)
**Copia:** `backups/INDEX_2026-10-09_antes-mapa.html`

### Archivos
| Archivo | Cambio |
|---|---|
| `MAPA_FIRA.html` | **Nuevo.** Planificador de puertas y rampas sobre el plano de Gran Via. |
| `INDEX.html` | **+2 líneas.** Botón 🗺️ en la cabecera, junto a la lupa, que abre `MAPA_FIRA.html` en otra pestaña. No se tocó ninguna otra función. |
| `CAMBIOS.md`, `RESTAURAR.md`, `backups/` | **Nuevos.** Documentación y copia de seguridad. |

### Qué hace `MAPA_FIRA.html`
- **Plano oficial**
  - Fondo: «Loading Bays – Gran Via» de Fira Barcelona (nov 2025), incrustado en el HTML. Fuente: guestevents.firabarcelona.com, centro de descargas.
  - Ramblas con su letra oficial: A (X1), B (1-2), C (2-3), D (3-4), E (3-5), F (4-6), G (5-7), H (7-8 / 6-8), I (X2.2 y X3.2), J (X5 y X7), K (X2.1, X3.1, X4, X6) y L (X8).
- **Slots en cada puerta**
  - Cada puerta (2.1, 3.10, 3.17…) tiene un hueco dibujado junto al pabellón, dentro de su rambla.
  - El color del slot indica su estado: libre, llega en 30 min, descargando, excedido o libre antes de hora.
- **Accesos**
  - Por defecto: 1 entrada; 2 y 3 salida; 4 y 5 entrada y salida.
  - Se pueden mover y cambiar desde *Configurar plano*.
- **Mapa de circulación por rambla**
  - Cada rambla tiene su ruta: acceso de entrada → rambla → acceso de salida.
  - La ruta se ve sobre el plano: verde la entrada, rojo la salida.
  - Ejemplo: Rambla 2-3 entra por el acceso 4 y sale por el 2.
- **Parkings de espera con capacidad**
  - Triángulo 2.1 (10 camiones), Triángulo 3.17 (10) y SOT del Migdia externo (60).
  - Si el parking de la rambla está lleno, la llegada se desvía al siguiente parking libre y se avisa.
- **Planificación por tiempo**
  - Slots de 30, 45 o 60 minutos; las duraciones se pueden configurar.
  - Cada vehículo se marca como adelantado, puntual o retrasado, en la llegada y en la descarga. La tolerancia es de ±5 min y se puede configurar.
- **Retraso en cascada**
  - Si una descarga excede su tiempo, las reservas siguientes de esa puerta muestran la hora prevista real y el retraso.
- **Tiempo extra**
  - Si un camión termina antes, la puerta queda en "libre antes de hora".
  - Aparece un botón **Adelantar** con los vehículos que ya esperan en la misma rambla, para aprovechar el hueco.
- **Planificación (Gantt)**
  - Muestra cada rambla con sus puertas y la línea de la hora actual.
  - Al pulsar una fila vacía se crea una reserva a esa hora.
- **Importar de BeUnifyT**
  - Trae las citas de **agenda de hoy** de la app principal.
  - Solo **lee** `localStorage['cu1_local']`; nunca escribe en los datos de BeUnifyT.
- **Configurar plano**
  - Se puede subir el plano oficial de montaje como fondo y ajustar su posición y transparencia.
  - Puertas, accesos y parkings se arrastran a su sitio. También se pueden crear puertas y parkings (3 clics) y redibujar la ruta de cada rambla.
  - El plano se exporta e importa en JSON.
- **Simulación**: los botones +5′ y +15′ adelantan el reloj para probar retrasos y adelantos.

### Datos
- Plano: `localStorage['bu_mapa_layout_v7']`
- Reservas: `localStorage['bu_mapa_plan_v2']`
- **No usa Firebase todavía.** Cada dispositivo guarda su propio plan.
  - Siguiente paso propuesto: sincronizar con el RTDB, en `cu1/controlunificado/mapa`.

### Pendiente / a validar
- Plano y ramblas: reales. **Por confirmar**: numeración y número exacto de puertas por pabellón, posición de los accesos 1–5 y del triángulo 3.17. Se ajustan arrastrando en *Configurar plano*, y basta con hacerlo una vez y exportar el JSON.
- Numeración de puertas real (plano RESA Expo):
  - X.1 arriba en el centro; pares a la izquierda, impares a la derecha, de arriba abajo.
  - Hall 2: fila de arriba 2.2 · 2.1 · 2.3, luego 2.4/2.5 … 2.18/2.19.
  - Hall 3: 3.1 arriba, 3.2–3.14 a la izquierda (rambla C) y 3.3–3.17 a la derecha (E y D).
  - Hall 1: 1.1–1.4 en la rambla B y 1.5 abajo.
- Gate 1 (entrada) en C/ Ciències, arriba de la rambla B, según el plano RESA.

### Actualización · plano RESA
- Fondo: plano operativo de RESA Expo Logistics con las puertas reales, los gates 1–5 y los sentidos de circulación.
- Slots colocados sobre cada puerta del plano: 1.01–1.05, 2.01–2.19, 3.01–3.17, 4.02–4.09, 5.01–5.09, 6.02–6.09, 7.01–7.09 y 8.01 / 8.03 / 8.05.
- **Puertas no utilizables:** 1.5, 2.1, 2.2, 3.9 y 3.11. Se ven en gris y no se pueden reservar ni asignar. Se cambia en *Configurar plano* → puerta → «No utilizable».
- Rambla C (2-3): no hay salida por abajo (prohibido junto a 2.19). Recorrido: entra por Gate 1 → baja por C hasta 2.19 → vuelve a subir hasta 2.1 → izquierda → baja por B hasta 1.4 → vial sur → sale por Gate 4.
