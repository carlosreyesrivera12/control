# MAPA_FIRA · detalles de funcionamiento (2026-10-09)

**Punto de restauración** antes de este cambio: tag `restore-2026-10-09-antes-capacidad` (commit `7227031`).
Solo cambia `MAPA_FIRA.html`. `INDEX.html` y los datos de BeUnifyT no se tocan.

## 1. Tocar una rambla → zoom
- Al tocar una rambla en el plano (o elegirla en *Planificación*), el mapa se acerca a esa zona con todas sus puertas.
- **⤢** vuelve a la vista completa.
- Arrastrar el mapa ya no selecciona nada; solo un toque sin mover selecciona.
- Las rutas dibujadas no bloquean los toques.

## 2. Colores de estado (los mismos que la web)
| Estado | Color | De dónde sale (web BeUnifyT) |
|---|---|---|
| Pendiente | blanco | Cita de agenda de hoy sin ingreso |
| En el SOT | rojo | Ingreso sin tracking, o último paso `rampa` / `cabina` |
| Al venue | marrón claro | Último paso `salida_parking` / `en_ruta` |
| En el venue | marrón con borde verde | Último paso `entrada_recinto` / `en_espera` |
| En puerta | verde (borde rojo si excede su slot) | Último paso `descarga` / `carga` |
| Terminado | negro | Último paso `retorno` / `terminado`, o ingreso con `salida` |

- **Cada slot** se pinta con el estado más avanzado de sus camiones de hoy:
  - Un número indica cuántos camiones le quedan.
  - Un marco naranja discontinuo avisa de que la puerta **satura su ventana horaria**.
- Botones en la ficha: Llegó al SOT → Sale al venue → Entra al recinto → Llamar a puerta → Finalizar.

## 3. Tocar una puerta → sus camiones
- Barra y contadores por estado de los camiones de hoy.
- Veredicto:
  - **Satura** (se pasa X′ de la ventana → retrasar o mover).
  - **Holgada** (X′ libres → se puede adelantar).
  - **Justa**.
- Agenda de la puerta con matrícula, empresa, hora, estado, llegada puntual o tarde y retraso en cascada.

## 4. Sincronización en vivo con BeUnifyT
- **Solo lee** `localStorage['cu1_local']`, que es lo que guarda INDEX en el mismo navegador. Nunca escribe.
- Se actualiza al abrir el mapa, cada 20 s, al instante cuando INDEX guarda en otra pestaña, y con el botón **Sincronizar BeUnifyT**.
- Un camión por matrícula y día (id `web_MATRICULA`). Une la cita de agenda con su ingreso.
- **Puerta**:
  - Se toma de `puertaHall`: «3.10», «3,10», «3.01» o «P5» con hall 3 dan 3.5.
  - Si no hay puerta, se asigna la puerta útil del hall que antes queda libre.
  - Si el usuario la cambia en el mapa, se respeta hasta que la web cambie su `puertaHall`.
- **Estado**: la web solo hace avanzar el estado, nunca lo retrocede.
- **Cabecera**: muestra «Web: N camiones · hh:mm».

## 5. Capacidad y saturación (botón **Capacidad**)
- **Zonas por defecto** (editables):

  | Zona | Trabajadores |
  |---|---|
  | Halls 2 y 3 | 20 |
  | Halls 4 y 6 | 10 |
  | Halls 5 y 7 | 10 |
  | Hall 1 | 6 |
  | Hall 8 | 4 |

  Todas con 2 por camión y ventana 08:00–14:00.
- **Botones de ventana**: **Ventana 8–14** y **Ampliar 8–20**.
- **Cálculo**:
  - Descargas a la vez = mínimo(trabajadores ÷ por camión, puertas útiles de la zona).
  - Trabajo pendiente = suma de duraciones. A un camión en puerta se le cuenta solo lo que le queda.
  - Ocupación = trabajo ÷ (minutos de ventana restantes × descargas a la vez).
  - Fin previsto = ahora (o inicio de ventana) + trabajo ÷ descargas a la vez.
- **Veredicto**:
  - Holgado (≤85 %): se puede adelantar.
  - Justo (85–100 %).
  - Satura (>100 %).
  - Ventana terminada.
- **Opciones si satura**: ampliar hasta la hora calculada, subir a N trabajadores (o «faltan puertas»), mover ~N camiones.
- **Camiones a la vez por hora**:
  - Barra frente a la línea de capacidad.
  - «retrasar N» en las horas que se pasan; «N libres» en las que sobra hueco.
- **Carga por puerta**: minutos, fin previsto y etiqueta *Retrasar / mover*, *Adelantar* o *Justa*.
- **Repartir pendientes entre puertas**:
  - Mueve los camiones *Pendiente* (aún no en el SOT) a la puerta útil que antes quede libre, sin cambiar su hora.
  - Solo cambia el plan del mapa.
- La pantalla de inicio muestra la ocupación de cada zona con camiones hoy.

## 5b. Dentro de la web
- Botón **🗺️ MAPA** en la cabecera de INDEX: abre el mapa a pantalla completa sin salir de la web (✕ / Esc para cerrar, ↗ en otra pestaña).
- Dentro de la web el mapa lee `DB` en directo (`buMapaDB()`, solo lectura), incluidos ingresos e ingresos2: cada 10 s y al abrir.

## 6. Datos
- Plano: `bu_mapa_layout_v8`, sin cambios. Las zonas se añaden solas sin perder tus ajustes.
- Reservas: `bu_mapa_plan_v3`, nueva. El plan v2 queda guardado en el navegador por si se quiere volver.

## 7. Cómo volver atrás
Ver `RESTAURAR.md`:
```bash
git checkout restore-2026-10-09-antes-capacidad -- MAPA_FIRA.html
```
