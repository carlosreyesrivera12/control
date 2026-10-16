# Registro de cambios — BeUnifyT (INDEX)

Cada entrada indica qué se cambió, en qué archivos y cuál es su punto de restauración.
Para volver atrás, ver `RESTAURAR.md`.

---

## 2026-10-16 · Login v2 (Entrar / Crear cuenta, Sitio Empresa, aviso al admin)

**Punto de restauración:** tag `restore-2026-10-16-antes-login-v2` y copia `backups/INDEX_2026-10-16_antes-login-v2.html`.
Borrar el bloque CSS `/* LOGIN v2 */` y el bloque JS `LOGIN v2` también deshace el diseño.

- Tarjeta de acceso nueva: título "Bienvenido", pestañas Entrar / Crear cuenta, Google, email + contraseña (ojo para ver), "¿Olvidaste la contraseña?".
- Crear cuenta: checklist de contraseña (8 caracteres, mayúscula, minúscula, número, carácter) y botón activo solo si se cumple. Envía email de verificación; no se entra hasta verificar.
- Todos los botones con la misma altura (52px) y ancho; Empresa e Idioma en una fila de dos botones iguales.
- Menú de idioma desplegable dentro de la tarjeta (ya no flota encima del formulario).
- Sitio Empresa usa la misma tarjeta (título "Sitio Empresa", botón Volver). Google y email entran como empresa.
- Aviso por email a carlosreyesrivera12@gmail.com (EmailJS) al crear cuenta y al enviar solicitud de acceso (staff o empresa).
- Requiere activar Email/contraseña en Firebase → Authentication → Sign-in method.
- v2.3: idioma con selector nativo (sin panel ni lista encima). Todos los textos de la tarjeta se traducen a los 22 idiomas. Empresa e Idioma mismo ancho.
- v2.2: la tarjeta no se mueve al cambiar Entrar/Crear cuenta ni con errores (altura fija). Idioma abre como panel dentro de la tarjeta, sin desplazar nada.
- v2.1: tarjeta más compacta (cabe en ventanas bajas), scroll correcto si no cabe, sin anillo azul al pulsar pestañas.
- No se tocó ningún dato ni estructura de DB.

## 2026-10-11 · Rediseño visual (cabecera, menú lateral, detalle lateral, tablas)

**Copia de restauración:** `backups/INDEX_2026-10-11_antes-rediseno.html` (renombrar a `INDEX.html` para volver atrás).
Todo el cambio está en un único bloque `<style id="ui-2026-10-11">` + un `<script>` corto antes de `</head>`; borrarlo también restaura.

- Cabecera: botones planos, sin sombras ni saltos al pasar el ratón, altura uniforme.
- Búsqueda global como barra ancha "Buscar en todo… /" en pantallas ≥1100px; la tecla `/` la abre.
- Pestañas y grupos: estilo pestaña con indicador inferior (sin cajas); activa en azul con fondo suave. Soporte tema oscuro/contraste.
- Menú lateral (pantallas ≥1100px): las pestañas pasan a una columna fija a la izquierda; los grupos de la cabecera (Operativa, Logística, Configuración, Datos) filtran el menú. En móvil/iPad vertical siguen como barra horizontal.
- Detalle de ingreso (`#mIngDetail`) como panel lateral derecho en pantallas ≥1100px: la lista sigue visible detrás. En móvil sigue como hoja inferior.
- Arreglo: la cabecera no cabía en pantallas <1600px y SALIR quedaba fuera de la pantalla. Ahora la barra de búsqueda ancha solo aparece ≥1600px y la cabecera se compacta por tamaños (≤1400, ≤1200, ≤1023, ≤800, ≤600: grupos y MAPA solo icono, SALIR solo icono en móvil). Comprobado SALIR pulsable de 390px a 1920px.
- Ingresos: 4 indicadores arriba (Total, En recinto, Con salida, Sin referencia) que también filtran (En recinto = solo activos). Pulsar en cualquier parte de la fila abre el detalle. Botones de fila y de la barra (importar/exportar/limpiar) en estilo neutro; rojo solo en eliminar/limpiar. Cambio en `renderIngresos2`: se calcula la base de KPIs antes del filtro 'solo activos' (mismo resultado de la lista).
- Tablas `.dtbl`: cabecera fija al hacer scroll, números con ancho fijo, marca lateral en la fila bajo el cursor.
- iPad/táctil: objetivos de toque mínimos de 44px. Foco visible al navegar con teclado.
- No se tocó ninguna función, dato ni estructura de DB.

## 2026-10-09 · Mapa integrado en la web

**Punto de restauración:** tag `restore-2026-10-09-antes-mapa-integrado` (commit `d6f24f1`)

- **INDEX.html**:
  - El botón 🗺️ pasa a llamarse **🗺️ MAPA** y abre el mapa dentro de la web, a pantalla completa. Se cierra con ✕ o Esc.
  - El botón ↗ abre el mapa en otra pestaña.
  - Se añadió un bloque al final del archivo, marcado `MAPA_FIRA integrado`, que solo expone `buMapaDB()` para **leer** `DB`.
  - No se cambió ninguna función existente.
- **MAPA_FIRA.html**:
  - Dentro de la web lee `DB` en vivo, incluidos ingresos e ingresos2, cada 10 s y al abrirse.
  - Fuera de la web sigue leyendo `cu1_local`.
- **Quitar**: borra en INDEX el bloque `MAPA_FIRA integrado` y el botón `#btnMapa`, o restaura con el tag.

---

## 2026-10-09 · Estados por color, zoom por rambla, sincronización con la web y capacidad

**Punto de restauración:** tag `restore-2026-10-09-antes-capacidad` (commit `7227031`)
**Archivo:** solo `MAPA_FIRA.html`. Los detalles completos están en `MAPA_FIRA_DETALLES.md`.

- **Zoom por rambla**: al tocar una rambla, el mapa se acerca a sus puertas. Arrastrar el mapa ya no selecciona nada.
- **Seis estados con los colores de la web**:
  - Pendiente blanco, SOT rojo, Al venue marrón claro.
  - En el venue marrón con verde, En puerta verde, Terminado negro.
- **Slots del plano**: cada slot toma el color del estado más avanzado de sus camiones y muestra un número con los que le quedan. Un marco naranja indica que la puerta satura su ventana.
- **Ficha de puerta**: camiones de hoy con su estado y el veredicto Satura / Justa / Holgada (retrasar o adelantar).
- **Sincronización en vivo con BeUnifyT** (solo lectura de `cu1_local`):
  - Lee agenda e ingresos de hoy.
  - Toma el estado del último paso de tracking y la puerta de `puertaHall`.
- **Panel Capacidad** por zona:
  - Datos de la zona: trabajadores, personas por camión, puertas útiles y ventana 8–14 / 8–20.
  - Resultados: ocupación, fin previsto, opciones, barras por hora y carga por puerta.
  - Botón *Repartir pendientes*.
- Datos: las reservas pasan a `bu_mapa_plan_v3`. El plano sigue en `bu_mapa_layout_v8`, con las zonas añadidas.

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
- Plano: `localStorage['bu_mapa_layout_v8']`
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
- Rambla C: 3 salidas posibles: vuelta por 2.1 → B → Gate 4; subir a 3.2 → derecha → Gate 2; seguir hasta 7.1 → derecha → Alumini → Gate 4. Se elige por rambla (por defecto) o por vehículo en su ficha.
