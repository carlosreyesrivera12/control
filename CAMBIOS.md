# Registro de cambios — BeUnifyT (INDEX)

Cada entrada indica qué se cambió, en qué archivos y cuál es su punto de restauración.
Para volver atrás, ver `RESTAURAR.md`.

---

## 2026-10-31 · CCIB: calendario de fechas

**Punto de restauración:** commit `7b4a0d6`.

- Fechas de montaje, evento y desmontaje con calendario propio: modo **Días** (días sueltos) o **Desde – hasta** (rango), lunes primero, Limpiar / Listo. Los pedidos anteriores conservan sus fechas.

## 2026-10-31 · CCIB: colocar un extra en el plano

**Punto de restauración:** commit `a5a61e1`.

- Botón «📍 Colocar en el plano» en cada extra: se elige planta, se toca el punto y el extra pasa a ser una zona propia con su nombre y sus personas (en evento), editable como cualquier zona.

## 2026-10-31 · CCIB: cuadrante con nombres, fechas, zonas y plantillas

**Punto de restauración:** commit `8b396e3`.

- Fechas de montaje, evento y desmontaje (desde/hasta) además del horario.
- Pestaña **Cuadrante**: empleados con nombre y apellidos; cada puesto, correturnos y coordinador por día y turno con su empleado; horario de descanso de cada puesto y a quién cubre cada correturnos; autoasignar respetando un turno por día, 12 h de descanso, máx. semanal y días seguidos; avisos por empleado.
- **Reemplazos**: al cambiar un empleado asignado pregunta si es reemplazo y queda registrado (lo ve el cliente). Tabla «Quién está en cada zona».
- **Coordinador** del proveedor por turno (1 cada 20 personas, editable): CCIB pide al coordinador, no da órdenes directas (fijos discontinuos de su empresa).
- **Zonas**: activar/desactivar (desaparecen del plano y tablas), renombrar, crear zonas propias tocando el plano («+ Zona en el plano»), moverlas o borrarlas.
- **Plantillas** de zonas por tipo de evento: guardar, aplicar, sustituir, borrar.
- Datos globales en `cu1/ccib/config` y `cu1/ccib/empleados`.

## 2026-10-31 · CCIB: turnos y plantilla real

**Punto de restauración:** commit `651b590`.

- Nuevo bloque «Turnos y plantilla»: por fase, días y horario → turnos de igual duración sin pasar la jornada máxima, pausa y correturnos si el turno supera 6 h, rotación por máximo semanal y días seguidos.
- Gente necesaria para lo que pide CCIB y para lo que aporta Logística; «Proveedor pone» avisa si faltan personas y cuántas h/día saldrían por persona (jornada doble / horas extra).
- Trabajador tipo fijo discontinuo: llamamiento, turno, pausa, descanso entre jornadas (≥12 h) y h/semana.
- Parámetros laborales editables en «Reglas» (por defecto ET art. 34 y 37), guardados en `cu1/ccib/params`.
- Quitadas las horas sueltas de la barra superior (los pedidos antiguos se convierten a horario).

## 2026-10-31 · CCIB: lo que pide CCIB vs lo que aporta Logística

**Punto de restauración:** commit `8fb8961`.

- Por zona y fase: **Regla** (tabla), **CCIB pide** (cliente; si difiere de la regla exige motivo) y **Logística aporta** (proveedor), con diferencia.
- En el plano: número de CCIB y, si difiere, el de Logística en verde (más) o rojo (menos). Totales por fase con ambas columnas.
- Control automático: CCIB vs regla (±10 %) y zonas donde Logística aporta menos. Quitado el campo «Pedido» manual.

## 2026-10-31 · CCIB: un solo número por zona y fase

**Punto de restauración:** commit `2cccb94` (CCIB con L/A).

- Quitado el desglose L/A: cada zona tiene un solo número de personas por fase (reglas, panel de zona, detalle). Los datos guardados con L/A se suman al cargar.
- Corregido: poner 0 en «Pedido» volvía a la regla; ahora 0 cuenta.
- Panel «Personas por fase» (montaje / evento / desmontaje) y «Cómo se calcula» con la suma zona a zona de la fase elegida.

## 2026-10-31 · CCIB: pedido de personal por zonas

**Punto de restauración:** rama `restore-2026-10-31-antes-ccib` (commit `23cd7b3`).

- Nueva pestaña **CCIB** (grupo Logística) con `CCIB.html` dentro; en FUTURE, botón **CCIB** en el panel izquierdo (pantalla completa).
- Planos reales del CCIB (págs. 3 y 4 del PDF oficial) en `ccib/`; muelle -2 y plazas WB/LD en esquema.
- Tocar una zona la marca y muestra su personal por fase (L logística / A auxiliar); se puede ajustar con motivo (zona en naranja «ajustado»).
- Tabla de reglas editable (zona × fase × tamaño S/M/L × perfil), control pedido vs calculado (±10 %), extras con motivo, historial con «fuera de plazo → facturar». Varios pedidos (selector + Nuevo).
- Datos en `cu1/ccib` (no toca `cu1/controlunificado`); sin permiso guarda en el dispositivo.
- Cifras de ejemplo hasta cargar la tabla real.
- `future/fx.js` y `future/fx-cfg.js` (`?v=14`): botón CCIB y `ccib` en permisos por defecto de superadmin/supervisor.

## 2026-10-27 · MIBA: logística de empresa

**Punto de restauración:** rama `restore-2026-10-27-antes-miba` (commit `bf2b2eb`).

- Nuevo `MIBA.html` (archivo aparte, como el mapa) abierto a pantalla completa desde el botón **MIBA** del panel izquierdo (FUTURE).
- Empresa, choferes (caducidades carnet/CAP/tacógrafo), vehículos y tipo de camión (ITV/seguro), empresas logísticas (reemplazo por ciudad/país), supervisores/encargados.
- Eventos con país, ciudad, centro, dirección, teléfono, email, puertas, horario, preregistro, acreditación, pago extra de registro y parkings cercanos (búsqueda en OpenStreetMap).
- Servicios: origen/destino con contactos, hall, stand, puerta cercana y de ingreso, referencia, carga (bultos, palets, peso, volumen, ADR, temperatura), aduanas, km y ETA (ruta OSRM + descansos UE 561/2006 + prohibición de fin de semana + tráfico según día/hora), marcar salida/llegada, adelantar/retrasar, incidencias, anular/reactivar, duplicar, hoja de ruta imprimible y por WhatsApp, CSV.
- Panel y analítica: progresión de estados, puntualidad, retraso medio, km, peso, coste, por logística/evento/tipo de camión/incidencia, llegadas por día y alertas.
- Datos en `cu1/miba` (no toca `cu1/controlunificado`). Sin permiso en la nube guarda en el dispositivo.
- `future/fx.js`: botón MIBA en el panel izquierdo; FUTURE 9.2; cargador `?v=13`.

## 2026-10-17 · FUTURE 9.1: Impresión todo a la vista

**Punto de restauración:** rama `restore-2026-10-17-antes-future-e9-1` (commit `c9f5e55`).

- Tres columnas (campos · lienzo · propiedades) desde 980 px útiles: a zoom 100 % ya no baja nada. Cada panel lateral se desplaza por su cuenta y el lienzo queda fijo a la vista.
- El papel se ajusta solo al hueco si el zoom guardado no cabe (solo en pantalla; no cambia el zoom guardado). «Auto» ajusta al ancho y lo guarda.
- Quitado el texto «Diseña la ficha que se imprime…». Las pestañas del editor suben a la línea del título.
- Plantillas guardadas: botones de cargar/renombrar/eliminar con icono visible y chips de destino (Ref, Ing, Ag…) en verde cuando están asignados.
- Cargador `?v=12`.

## 2026-10-17 · FUTURE 9.0: Impresión con el sistema de diseño

**Punto de restauración:** rama `restore-2026-10-17-antes-future-e9` (commit `5897708`).

Solo FUTURE (`future/fx.css`, `future/fx-cfg.js`). El papel y las fichas del lienzo no cambian: reflejan lo que se imprime. La vista clásica queda igual.

- Pestañas del editor con nombre (Referencia, Ingresos, Agenda, Conductores, Embalaje) en un selector agrupado; punto ámbar = sin plantilla asignada.
- Barra de herramientas con botones de 36 px, iconos de 16 px y estados activos en verde de marca (negrita, alineación, Solo Valor).
- Paneles: tarjetas blancas sin cabeceras de colores, textos a 13–14,5 px, todos los botones a la misma altura, interruptores ON/OFF legibles, deslizadores nativos (antes parecían interruptores).
- «Guardar imagen como guía» ya no queda cortado.
- El lienzo ya no se corta por la derecha: si no caben tres columnas, las propiedades bajan bajo la lista de campos y el lienzo conserva su ancho. Tres columnas a partir de 1340 px útiles; una columna en móvil.
- Modo enfoque compatible con la nueva rejilla.
- Cargador `?v=11`.

## 2026-10-17 · Vista clásica: resto de fallos del mismo tipo

**Punto de restauración:** rama `restore-2026-10-17-antes-fix-clasica-2` (commit `efdf6a2`).

Revisión completa del archivo buscando funciones o variables que se usan donde no existen.

1. **Portal de empresa**: al entrar con una cuenta de empresa se abría el portal vacío (sin nombre, datos ni estado en vivo). `_launchPortal` vivía dentro del `load` y no se veía desde el login. Ahora se publica en `window`; la espera al arrancar sube de 2 s a 30 s para móviles lentos. La etiqueta «Teléfono» del portal ya no muestra `${tr(...)}`.
2. **Portal › Halls**: el botón «+ Hall» que aparece tras añadir el primer hall llamaba a una función inexistente (`pAddHall`). Ahora abre el selector como el original, y las sugerencias de halls ya no se duplican cada vez que se abre.
3. **Impresión › Frases 1 y 2**: lo que se escribía en el cuadro de frase no se guardaba (llamaba a `pcSavePhrase`, que no existía). Creada la función: guarda con espera de 0,65 s y refresca la frase en el lienzo.
4. **Dashboard y Análisis › Tracking por paso**: los pasos salían como código interno con «•» en vez de «🅿️ Rampa», «🏢 Cabina»… (usaba `window.TRACKING_STEPS`, que es `const`).
5. **Orden de sub-pestañas arrastrado**: se guardaba igual para todos los usuarios del dispositivo (usaba `window.CU`). Ahora es por usuario; si un usuario no tiene orden propio, se usa el que había guardado antes.
6. **Botón de tema**: la etiqueta («Tema») no cambiaba de idioma hasta abrir el menú. `updateThemeMenuLabels` ahora es visible para `setLang`.
7. **Tracking público › Acceso operario**: el botón «← Volver» de la pantalla de error daba error (`renderTracking` no visible). Publicado en `window`.
8. **Impresión › modo normal/troquel** (`showFixedBlocks`): leía `window.DB` y siempre daba «normal». Corregido; esa función no se llama desde ningún sitio hoy, así que no cambia nada visible.

## 2026-10-17 · Vista clásica: 5 correcciones

**Punto de restauración:** rama `restore-2026-10-17-antes-fix-clasica` (commit `ffb02cc`).

1. **Reiniciar contadores de lectura de matrículas** (Usuarios): ahora sí borra. Comprobaba `window.DB`, que no existe porque `DB` se declara con `let`. FUTURE vuelve a mostrar el botón, con confirmación.
2. **Aviso +9 h en SOT** (Embalaje): `addH` devolvía la hora en UTC y se leía como local, así que el aviso salía 2 h antes en verano y 1 h en invierno. Ahora devuelve hora local.
3. **Ventana de conductor**: sobraba un `</div>` que dejaba Cancelar y Crear fuera de la ventana. Las etiquetas que mostraban `${tr(...)}` (Matrícula habitual, Evento, Referencia, Teléfono, Confirmar contraseña, Acción, PIN incorrecto) ahora muestran el texto y se traducen.
4. **Ficha de conductor, cita y vehículo**: daban error al abrirse porque buscaban un botón EDITAR que solo existe tras abrir una ficha de ingreso. Ahora tienen título visible, su propio EDITAR (conductor y cita) y no arrastran botones de otra ficha.
5. **Placeholders**: quitadas las comillas y `+` sobrantes en el buscador de matrícula, búsqueda global y búsqueda de agenda.

## 2026-10-17 · FUTURE 8.1 (revisión independiente)

**Punto de restauración:** commit `f763ec4` (etapa 8).

- Análisis › Campos y totales: el PIN de usuario ya no puede aparecer al cruzar campos.
- Textos de la base de datos escapados en el filtro de Papelera y en Historial (número de ingresos).
- Quitado el botón «Reiniciar contadores» de lectura de matrículas: el de la vista clásica no llega a borrar nada (usa `window.DB`, que no existe), así que FUTURE no debe hacerlo por su cuenta.
- Al salir de FUTURE: el panel lateral ya no deja sombra en el borde derecho, el pie de la ventana de conductor vuelve a su posición exacta y los botones de impresión conservan su último estilo.
- Tema claro/oscuro del menú de usuario: ahora usa `selectTheme` (antes no hacía nada).
- Papelera: la selección se limita a lo que se ve, para que «N seleccionados» coincida con lo que se restaura o elimina.
- Limpiar en Ingresos y Referencia pide la misma doble confirmación que la vista clásica.

## 2026-10-17 · FUTURE etapa 8 (Campos y totales, Uso de botones, Impresión) · FUTURE completo

**Punto de restauración:** rama `restore-2026-10-17-antes-future-e8` (commit `a3e6152`).

- **Análisis → Campos y totales** con diseño propio: pestañas por origen (Referencia, Ingresos, Embalaje, Agenda, Historial, Archivos, Papelera, Usuarios), campos rellenos con sus valores más repetidos y cruce de campos (pares y tripletas). Los PIN de usuario nunca se muestran.
- **Uso de botones** como página dentro de FUTURE (antes ventana): botones, pulsaciones, poco usados, búsqueda, exportar CSV y reiniciar.
- **Impresión**: cabecera FUTURE con explicación sobre el editor de siempre; botones y campos con la tipografía de la marca. El lienzo no se toca.
- Sistema de diseño: añadidos pestañas de sección, indicadores, interruptor y avisos.

## 2026-10-17 · FUTURE etapa 7 (pantallas del menú ⋯)

**Punto de restauración:** rama `restore-2026-10-17-antes-future-e7` (commit `bbb083d`).

- Nuevo `future/fx-sub.js`: Lista especial, Historial de ediciones, Columnas y Campos con diseño propio en Ingresos, Referencia, Agenda, Conductores y Embalaje, con «Volver a la lista».
- **Historial de ediciones**: acción, usuario, cambios (antes tachado → ahora) y fecha; búsqueda; en Ingresos y Referencia la fila abre la ficha.
- **Columnas**: interruptor por columna agrupado (Vehículo, Conductor, Expositor, Trazabilidad), subir/bajar para ordenar, plantillas con guardar, aplicar, editar, eliminar, favoritas y filtro por evento. Mismo almacenamiento por usuario que la vista clásica.
- **Campos**: cada campo como Oculto / Visible / Obligatorio para el evento activo, ancho (solo SA) y plantillas.
- **Lista especial**: bloqueos y alertas con búsqueda, añadir, editar, eliminar y exportar.

## 2026-10-17 · FUTURE etapa 6 (ventanas y formularios)

**Punto de restauración:** rama `restore-2026-10-17-antes-future-e6` (commit `34936b2`).

- Todas las ventanas (nuevo ingreso, cita, conductor, movimiento, recinto, evento, usuario, mensaje, importar, búsqueda, idioma, confirmaciones) con cabecera y pie fijos y desplazamiento interno; en móvil ocupan la pantalla completa.
- Matrícula y remolque se escriben sobre una placa UE; tipo de vehículo y descarga se marcan como segmentos; Cancelar como botón discreto y la acción principal destacada; Eliminar en rojo.
- Solo dentro de FUTURE y reversible al salir: el pie de la ventana de conductor vuelve dentro de su caja, se traducen etiquetas que mostraban `${tr(...)}`, se limpian los `'+'` del buscador de matrícula y los botones en mayúsculas pasan a tipo frase.
- Corregido: al volver a la vista clásica, los botones del pie de Nuevo ingreso recuperan su estilo original.

## 2026-10-17 · FUTURE etapa 5 (Datos: Dashboard, Análisis, Historial) · todas las pestañas en FUTURE

**Punto de restauración:** rama `restore-2026-10-17-antes-future-e5` (commit `f0578ac`).

- Nuevo `future/fx-dat.js`. Con esta etapa todas las pestañas tienen diseño propio en FUTURE, salvo el editor de Impresión y Uso de botones (ventana), que mantienen su pantalla.
- **Dashboard**: aviso de mensajes sin leer, 6 indicadores que llevan a su pestaña, últimos 7 días (Ingresos y Referencia), hoy por hora, halls más activos, Referencia frente a Ingresos y tipo de descarga, tracking por paso, preregistros por empresa, agenda de hoy y últimos ingresos (abren su ficha). Evento activo o todos.
- **Análisis**: origen (Todo, Ingresos, Referencia), evento, fechas y panel de filtros (estado, descarga, tipo de vehículo, carga, hall, empresa); los filtros activos se ven como etiquetas. Indicadores con estancia media y mediana. Gráficos por día, por hora, halls, empresas y tipos de vehículo: pulsar una barra filtra. Menú Métricas para mostrar u ocultar cada bloque. Campos y totales sigue en su pantalla anterior.
- **Historial**: vehículos con conductor, empresa, teléfono, número de ingresos y último ingreso; ficha con llamar, WhatsApp y los 10 últimos ingresos. Limpiar evento y vaciar historial siguen pidiendo el PIN de SuperAdmin.
- Gráficos hechos con HTML y CSS (sin librerías), en los colores de la marca, modo claro y oscuro.

## 2026-10-17 · FUTURE etapa 4 (Configuración: Recintos, Eventos, Usuarios, Archivos, Papelera)

**Punto de restauración:** rama `restore-2026-10-17-antes-future-e4` (commit `d874abf`).

- Nuevo `future/fx-cfg.js`. Impresión mantiene su editor (con la marca FUTURE alrededor).
- **Recintos**: tarjetas con halls como señalética, puertas con dirección y enlace, y contacto de atención al cliente (llamar, email).
- **Eventos**: evento activo para todos y tu evento de trabajo arriba; tabla con fechas (en curso, próximo, finalizado), halls, puertas y estado; Activar, usar para trabajar (estrella), predefinir, editar, eliminar. Historial de cambios y eliminados con Restaurar (solo SA).
- **Usuarios**: solicitudes de acceso con Dar acceso / Rechazar; operadores con filtro por rol, cuentas de empresa; pestaña Lectura de matrículas con servicio (Google Vision / local), acierto por servicio, últimos 7 días y últimas lecturas; zona peligrosa al final.
- **Archivos**: Sesiones, Acciones, Seguridad, Exportaciones y Dispositivos (interruptor de aprobación, Aprobar, Bloquear, Renombrar, Eliminar). Listas largas paginadas.
- **Papelera**: filtro por origen, selección múltiple con barra Restaurar / Eliminar para siempre, ficha con todos los campos del registro antes de restaurar.
- Casillas de verificación visibles dentro de FUTURE (la vista clásica las oculta por un estilo general).

## 2026-10-17 · FUTURE etapa 3 (Logística: Conductores, Embalaje, Empresas)

**Punto de restauración:** rama `restore-2026-10-17-antes-future-e3` (commit `d207f3c`).

- Nuevo `future/fx-log.js`.
- **Conductores**: directorio con iniciales, vehículo (placa), empresa, teléfono, hall, idioma y número de ingresos. Ficha lateral con Llamar, WhatsApp y Email, todos los datos y los últimos ingresos de esa matrícula.
- **Embalaje**: flujo Almacén → SOT → Fira → Final con contadores que filtran; aviso en rojo cuando un vehículo en SOT supera 9 h desde el tacógrafo. Cada fila tiene el siguiente paso (Pasar a SOT, Pasar a Fira, Finalizar); el menú ⋯ permite cualquier estado. Usa `cambiarEstMov` como siempre.
- **Empresas** (solo SuperAdmin): pestañas Empresas y Preregistros. Empresas con nivel (Verificada, Sin verificar, Bloqueada) y RGPD; ficha con vehículos y preregistros, Ver portal, Editar usuario, Verificar, Bloquear o Desbloquear. Preregistros con filtro por evento y estado.
- Ver portal de una empresa pausa FUTURE y lo recupera al volver como SA.
- Componentes nuevos: pestañas de sección, flujo de estados, iniciales y monograma, avisos.

## 2026-10-17 · FUTURE etapa 2 (Referencia, Agenda, Mensajes y capa de marca)

**Punto de restauración:** rama `restore-2026-10-17-antes-future-e2` (commit `0bd1941`).

- Nuevo `future/fx-ops.js`: Operativa con diseño propio.
- **Referencia**: igual que Ingresos, con trazabilidad (rampa → oficina → salida → salida parking). Hora de rampa estimada marcada con ~.
- **Agenda**: agrupada por día, hora prevista y retraso (llega tarde / no presentado), filtros Pendientes / Con retraso / Llegados / Con salida. Marcar llegada, salida, imprimir, tracking, editar y eliminar llaman a las funciones de siempre. El estado se calcula al dibujar; no se guarda nada en los datos.
- **Mensajes**: tarjetas por prioridad (urgente / alerta), no leídos marcados, pausar, marcar todo leído, exportar y limpiar.
- **Ficha lateral** al pulsar una fila (Ingresos, Referencia, Agenda): estado, halls, línea de tiempo, datos y acciones.
- **Capa de marca** para las pestañas que aún no tienen diseño propio: botones, campos, matrículas, halls, tablas, tarjetas y ventanas con los colores y la tipografía de FUTURE. El editor de Impresión no se toca.
- Ventanas (nuevo ingreso, etc.): botones del pie con el estilo FUTURE y Guardar como acción principal. Al volver a la vista clásica recuperan su aspecto original.

## 2026-10-17 · FUTURE etapa 1 (sistema de diseño, armazón e Ingresos)

**Punto de restauración:** rama `restore-2026-10-17-antes-future` (commit `700b036`).
Quitar FUTURE sin restaurar nada: borrar en `INDEX.html` el bloque `FUTURE 2026-10-17` … `/FUTURE` (antes de `</body>`) y la carpeta `future/`.

- Botón **FUTURE** a la derecha de DATOS (solo SuperAdmin). Abre la interfaz nueva encima de la actual; la vista clásica no cambia.
- Todo FUTURE vive en `future/fx.css` y `future/fx.js`. No cambia datos, funciones ni permisos: dibuja pantallas nuevas y llama a las funciones existentes (mismo DB, mismas acciones).
- Sistema de diseño (menú lateral → Sistema de diseño): colores, tipografía Barlow, botones, filtros, estados, matrículas tipo placa UE, halls como señalética, tablas.
- Armazón: menú lateral con todos los módulos agrupados y contadores (en recinto, agenda pendiente, mensajes), barra superior con evento de trabajo, búsqueda, mapa, sincronización, idioma y menú de usuario. Menú plegable; en iPad horizontal arranca plegado; en iPad vertical y móvil es un cajón.
- **Ingresos** rediseñado: búsqueda, Todos / En recinto / Con salida con contadores, Hoy / Ayer / Evento / Todo, rango de fechas, filtro por hall, tabla con franja de estado, Dar salida, imprimir ficha, ticket de rampa y menú ⋯ (ver ficha, editar, anular salida, eliminar). Importar, exportar, lista especial, historial, columnas, campos y limpiar en sus menús. Tabla en escritorio, lista en iPad, tarjetas en móvil. Un ingreso nuevo se ilumina al llegar.
- Textos de FUTURE en español, inglés y alemán (sigue el idioma de la app). Tema claro y oscuro.
- Las demás pestañas se ven dentro de FUTURE con su diseño anterior hasta su etapa.
- Salir: menú de usuario → Vista clásica, o abrir `INDEX.html?clasica`. Entrar directo: `INDEX.html?future`.

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
- v2.4: idioma con menú propio de la web (se abre sobre el botón, con ✓ en el actual; cierra con clic fuera o Esc). Ojo de contraseña estándar: ojo = mostrar, ojo tachado = ocultar.
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
