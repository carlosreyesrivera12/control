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
- **Plano**
  - Esquema de los 8 pabellones de Gran Via según el plano oficial: franjas paralelas cruzadas por la pasarela, con 5 y 7 al otro lado y 8.0 / 8.1 al norte.
  - Ramblas entre pabellones: 1-2, 2-3, 2-5, 3-4, 5-7, 4-6, lateral este 6, muelles 8.0 y 8.1, y vial norte.
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
- Plano: `localStorage['bu_mapa_layout_v1']`
- Reservas: `localStorage['bu_mapa_plan_v1']`
- **No usa Firebase todavía.** Cada dispositivo guarda su propio plan.
  - Siguiente paso propuesto: sincronizar con el RTDB, en `cu1/controlunificado/mapa`.

### Pendiente / a validar
- Las posiciones de puertas, accesos y triángulos son una **aproximación**. Hay que calibrarlas con el plano oficial de montaje desde *Configurar plano*. Basta hacerlo una vez y exportar el JSON.
- Numeración de puertas por defecto: lado oeste de arriba abajo y continúa por el lado este. Ejemplo en el pabellón 3: 3.1–3.9 en la rambla 2-3 y 3.10–3.18 en la rambla 3-4.
