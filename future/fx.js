/* ════════════════════════════════════════════════════════════════════════
   BeUnifyT FUTURE · núcleo (armazón, menú, barra superior, componentes)
   Capa aislada: no cambia datos ni funciones. Dibuja pantallas nuevas encima
   de las funciones existentes (mismo DB, mismos permisos, mismas acciones).
   Módulos: fx-ops.js (Operativa), fx-log.js (Logística), fx-cfg.js
   (Configuración), fx-dat.js (Datos), fx-sub.js (menú ⋯).
   Salir: menú de usuario → Vista clásica, o abrir INDEX.html?clasica
   Quitar todo: borrar la carpeta future/ y las líneas FUTURE de INDEX.html.
   ════════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
if(window.FX)return;
var FX=window.FX={};

var FX_VER='9.2';
var LS_MODE='bu_fx_mode',LS_RAIL='bu_fx_rail';
var LIM=150;
var VIEWS={};             // pestañas con diseño nuevo
var S={page:null,lay:'table',wide:false,lim:{},fkey:{},seen:{}};
FX.S=S;FX.LIM=LIM;FX.VER=FX_VER;

/* ── Iconos (trazo 1.75) ── */
function sv(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>';}
var I={
  truck:sv('<path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>'),
  clip:sv('<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>'),
  calclock:sv('<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/>'),
  msg:sv('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  idcard:sv('<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5 16c.6-1.5 1.7-2.2 3-2.2s2.4.7 3 2.2"/><path d="M14 10h4"/><path d="M14 14h4"/>'),
  pkg:sv('<path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/>'),
  bldg:sv('<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>'),
  venue:sv('<path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/>'),
  cal:sv('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>'),
  printer:sv('<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>'),
  users:sv('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
  folder:sv('<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>'),
  trash:sv('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),
  grid:sv('<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>'),
  chart:sv('<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>'),
  hist:sv('<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>'),
  pointer:sv('<path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/>'),
  search:sv('<circle cx="11" cy="11" r="7.5"/><path d="m20.5 20.5-4.2-4.2"/>'),
  plus:sv('<path d="M12 5v14"/><path d="M5 12h14"/>'),
  down:sv('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'),
  up:sv('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>'),
  more:sv('<circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/><circle cx="5" cy="12" r="1.2"/>'),
  logout:sv('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>'),
  map:sv('<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/>'),
  moon:sv('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'),
  sun:sv('<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'),
  globe:sv('<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'),
  chev:sv('<path d="m6 9 6 6 6-6"/>'),
  check:sv('<path d="M20 6 9 17l-5-5"/>'),
  x:sv('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
  exit:sv('<path d="M3 5v14"/><path d="M21 12H7"/><path d="m15 18 6-6-6-6"/>'),
  undo:sv('<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>'),
  edit:sv('<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>'),
  eye:sv('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'),
  menu:sv('<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>'),
  panel:sv('<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>'),
  panelR:sv('<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/>'),
  palette:sv('<circle cx="13.5" cy="6.5" r=".6"/><circle cx="17.5" cy="10.5" r=".6"/><circle cx="8.5" cy="7.5" r=".6"/><circle cx="6.5" cy="12.5" r=".6"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.56-2.5 5.56-5.55C21.97 6.01 17.46 2 12 2z"/>'),
  back:sv('<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>'),
  ticket:sv('<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>'),
  save:sv('<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>'),
  listx:sv('<path d="M11 12H3"/><path d="M16 6H3"/><path d="M16 18H3"/><path d="m19 10-4 4"/><path d="m15 10 4 4"/>'),
  cols:sv('<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>'),
  sliders:sv('<line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/>'),
  sheet:sv('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/>'),
  paste:sv('<path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M16 4h2a2 2 0 0 1 2 2v2"/><path d="M11 14h10"/><path d="m17 10 4 4-4 4"/>'),
  sort:sv('<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>'),
  sortUp:sv('<path d="m18 15-6-6-6 6"/>'),
  sortDown:sv('<path d="m6 9 6 6 6-6"/>'),
  spark:sv('<path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="m6 6 2.5 2.5"/><path d="m15.5 15.5 2.5 2.5"/><path d="m6 18 2.5-2.5"/><path d="m15.5 8.5 2.5-2.5"/>'),
  info:sv('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'),
  clock:sv('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
  arrive:sv('<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/>'),
  radar:sv('<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>'),
  user:sv('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
  phone:sv('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),
  file:sv('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>'),
  shield:sv('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'),
  key:sv('<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>'),
  monitor:sv('<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>'),
  lock:sv('<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
  unlock:sv('<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>'),
  star:sv('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),
  play:sv('<polygon points="6 3 20 12 6 21 6 3"/>'),
  stop:sv('<rect width="14" height="14" x="5" y="5" rx="1"/>'),
  pause:sv('<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>'),
  door:sv('<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.56v16.88a.5.5 0 0 1-.62.49L5 20V5.56a1 1 0 0 1 .76-.97l6-1.5a1 1 0 0 1 1.24.97z"/>'),
  restore:sv('<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>'),
  send:sv('<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'),
  alert:sv('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>'),
  mail:sv('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
  link:sv('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
  qr:sv('<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>')
};
var LOGO='<svg viewBox="0 0 140 140" aria-hidden="true"><rect width="140" height="140" rx="28" fill="#030812"/><polygon points="70,14 120,42 120,98 70,126 20,98 20,42" stroke="#00ffc8" stroke-width="5" fill="#00ffc810"/><circle cx="70" cy="70" r="14" fill="#00ffc8"/><circle cx="70" cy="70" r="5.5" fill="#030812"/></svg>';

/* ── Textos (es / en / de) ── */
var T={
es:{g_op:'Operativa',g_per:'Logística',g_cfg:'Configuración',g_dat:'Datos',
 tab_ingresos2:'Ingresos',tab_ingresos:'Referencia',tab_agenda:'Agenda',tab_mensajes:'Mensajes',tab_conductores:'Conductores',tab_flota:'Embalaje',tab_empresas:'Empresas',tab_recintos:'Recintos',tab_eventos:'Eventos',tab_impresion:'Impresión',tab_usuarios:'Usuarios',tab_auditoria:'Archivos',tab_papelera:'Papelera',tab_dash:'Dashboard',tab_analytics:'Análisis',tab_vehiculos:'Historial',tab_btnstats:'Uso de botones',
 sys:'Sistema de diseño',classic:'Vista clásica',collapse:'Plegar menú',expand:'Desplegar menú',openNav:'Abrir menú',
 search:'Buscar matrícula, referencia o empresa',map:'Mapa',sync_ok:'En línea',sync_err:'Sin conexión',sync_wait:'Conectando',sync_off:'Sin sincronizar',
 noEvent:'Sin evento activo',evWork:'Evento de trabajo',evManage:'Gestionar eventos',evActive:'Activo para todos',
 theme_dark:'Tema oscuro',theme_light:'Tema claro',language:'Idioma',backup:'Copia de seguridad completa',logout:'Cerrar sesión',
 legacy:'Esta sección conserva el diseño anterior mientras se rediseña.',backList:'Volver a la lista',
 r_superadmin:'Superadministrador',r_supervisor:'Supervisor',
 i2_sub_ev:'Vehículos registrados en rampa para {ev}.',i2_sub:'Vehículos registrados en rampa.',
 i2_new:'Nuevo ingreso',import:'Importar',import_paste:'Pegar tabla',import_paste_s:'Filas copiadas de Excel o de un correo',import_xlsx:'Archivo Excel o CSV',export:'Exportar',more:'Más opciones',
 special:'Lista especial',edits:'Historial de ediciones',columns:'Columnas visibles',fields:'Campos del formulario',clean:'Limpiar registros del día',
 q_ph:'Buscar matrícula, referencia, empresa, conductor…',clear:'Borrar búsqueda',
 st_all:'Todos',st_in:'En recinto',st_out:'Con salida',
 d_today:'Hoy',d_yday:'Ayer',d_event:'Evento',d_all:'Todo',d_range:'Fechas',d_from:'Desde',d_to:'Hasta',apply:'Aplicar',hall:'Hall',
 c_pos:'Pos.',c_plate:'Matrícula',c_ref:'Referencia',c_comp:'Empresa',c_driver:'Conductor',c_hall:'Hall',c_in:'Entrada',c_state:'Estado',
 s_in:'En recinto',s_out:'Salió {t}',s_since:'Entrada {t}',
 a_print:'Imprimir ficha',a_ramp:'Ticket de rampa',a_out:'Dar salida',a_undo:'Anular salida',a_view:'Ver ficha',a_edit:'Editar',a_del:'Eliminar',
 trailer:'Remolque',pager:'Busca {n}',stand:'Stand {s}',showMore:'Mostrar {n} más',showing:'{a} de {b}',
 empty_t:'No hay ingresos con estos filtros',empty_p:'Cambia las fechas o el estado, o registra un vehículo nuevo.',empty_all:'Ver todas las fechas',
 ds_sub:'Las piezas con las que se construye cada pantalla de BeUnifyT. Si algo no está aquí, no se usa.',
 p1t:'La matrícula manda',p1:'Cada vehículo se muestra como su placa. Se reconoce antes de leerla.',
 p2t:'El color es estado',p2:'Petróleo: en el recinto. Ámbar: requiere atención. Gris: terminado. Rojo: bloqueado. Nada más lleva color.',
 p3t:'Una acción principal',p3:'Cada pantalla tiene un solo botón en tinta oscura. Lo demás es secundario o está en Más opciones.',
 p4t:'Frases normales',p4:'Sin mayúsculas sostenidas. Verbos que dicen lo que pasa: Dar salida, Imprimir ficha.',
 p5t:'Hecho para la rampa',p5:'Zonas táctiles de 44 px, filas de 62 px y contraste para leer al sol en un iPad.',
 h_color:'Color',h_color_p:'Base de asfalto y hormigón. El color se reserva para el estado del vehículo.',
 sw_ink:'Asfalto',sw_ink_r:'Texto y acción principal',sw_paper:'Hormigón',sw_paper_r:'Fondo y navegación',sw_surf:'Superficie',sw_surf_r:'Zona de trabajo',sw_teal:'Petróleo',sw_teal_r:'En recinto y marca',sw_amber:'Ámbar',sw_amber_r:'Requiere atención',sw_red:'Rojo',sw_red_r:'Bloqueado y eliminar',sw_slate:'Pizarra',sw_slate_r:'Terminado',sw_eu:'Azul UE',sw_eu_r:'Solo matrículas',
 h_type:'Tipografía',h_type_p:'Barlow, una familia inspirada en la señalética de carretera. Su versión semicondensada se usa para matrículas, halls y cifras.',
 ty_h1:'Título de página',ty_h2:'Sección',ty_body:'Texto',ty_meta:'Detalle',ty_num:'Cifras y códigos',ty_s1:'Ingresos de hoy',ty_s2:'Vehículos en el recinto',ty_s3:'El conductor espera en la puerta 3.10 con la referencia confirmada.',ty_s4:'Registrado por Celeste a las 14:02',
 h_btn:'Botones',h_btn_p:'Rectangulares, ajustados al texto y con la misma fuente que la app.',b_pri:'Principal',b_sec:'Secundario',b_ghost:'Sin borde',b_dng:'Peligro',b_ico:'Solo icono',b_sm:'Compacto',
 h_ctl:'Filtros y campos',h_ctl_p:'Un control segmentado para cada decisión y la búsqueda siempre a la izquierda.',
 h_state:'Estados del vehículo',st_pend:'Pendiente',st_blk:'Bloqueado',
 h_plate:'Matrículas y halls',h_plate_p:'La placa lleva la franja azul europea. Los halls se ven como la señalética del recinto.',
 h_tbl:'Tablas',h_tbl_p:'Cabecera fija, filas de 62 px, franja de estado a la izquierda, acciones frecuentes a la vista y el resto en Más opciones.',
 ver:'Versión'},
en:{g_op:'Operations',g_per:'Logistics',g_cfg:'Settings',g_dat:'Data',
 tab_ingresos2:'Entries',tab_ingresos:'References',tab_agenda:'Schedule',tab_mensajes:'Messages',tab_conductores:'Drivers',tab_flota:'Empties',tab_empresas:'Companies',tab_recintos:'Venues',tab_eventos:'Events',tab_impresion:'Printing',tab_usuarios:'Users',tab_auditoria:'Files',tab_papelera:'Trash',tab_dash:'Dashboard',tab_analytics:'Analytics',tab_vehiculos:'History',tab_btnstats:'Button usage',
 sys:'Design system',classic:'Classic view',collapse:'Collapse menu',expand:'Expand menu',openNav:'Open menu',
 search:'Search plate, reference or company',map:'Map',sync_ok:'Online',sync_err:'Offline',sync_wait:'Connecting',sync_off:'Not syncing',
 noEvent:'No active event',evWork:'Working event',evManage:'Manage events',evActive:'Active for everyone',
 theme_dark:'Dark theme',theme_light:'Light theme',language:'Language',backup:'Full backup',logout:'Sign out',
 legacy:'This section keeps the previous design while it is being redesigned.',backList:'Back to list',
 r_superadmin:'Super admin',r_supervisor:'Supervisor',
 i2_sub_ev:'Vehicles registered at the ramp for {ev}.',i2_sub:'Vehicles registered at the ramp.',
 i2_new:'New entry',import:'Import',import_paste:'Paste table',import_paste_s:'Rows copied from Excel or an email',import_xlsx:'Excel or CSV file',export:'Export',more:'More options',
 special:'Special list',edits:'Edit history',columns:'Visible columns',fields:'Form fields',clean:"Clear today's records",
 q_ph:'Search plate, reference, company, driver…',clear:'Clear search',
 st_all:'All',st_in:'On site',st_out:'Exited',
 d_today:'Today',d_yday:'Yesterday',d_event:'Event',d_all:'All dates',d_range:'Dates',d_from:'From',d_to:'To',apply:'Apply',hall:'Hall',
 c_pos:'Pos.',c_plate:'Plate',c_ref:'Reference',c_comp:'Company',c_driver:'Driver',c_hall:'Hall',c_in:'Entry',c_state:'Status',
 s_in:'On site',s_out:'Left {t}',s_since:'Entry {t}',
 a_print:'Print sheet',a_ramp:'Ramp ticket',a_out:'Check out',a_undo:'Undo check-out',a_view:'Open record',a_edit:'Edit',a_del:'Delete',
 trailer:'Trailer',pager:'Pager {n}',stand:'Stand {s}',showMore:'Show {n} more',showing:'{a} of {b}',
 empty_t:'No entries match these filters',empty_p:'Change the dates or status, or register a new vehicle.',empty_all:'Show all dates',
 ds_sub:"The building blocks of every BeUnifyT screen. If it isn't here, it isn't used.",
 p1t:'The plate leads',p1:'Every vehicle appears as its plate, recognisable before it is read.',
 p2t:'Colour means status',p2:'Teal: on site. Amber: needs attention. Grey: done. Red: blocked. Nothing else is coloured.',
 p3t:'One main action',p3:'Each screen has a single dark ink button. Everything else is secondary or under More options.',
 p4t:'Plain sentences',p4:'No all-caps. Verbs that say what happens: Check out, Print sheet.',
 p5t:'Built for the ramp',p5:'44 px touch targets, 62 px rows and contrast that reads in sunlight on an iPad.',
 h_color:'Colour',h_color_p:'An asphalt and concrete base. Colour is reserved for vehicle status.',
 sw_ink:'Asphalt',sw_ink_r:'Text and main action',sw_paper:'Concrete',sw_paper_r:'Background and navigation',sw_surf:'Surface',sw_surf_r:'Work area',sw_teal:'Teal',sw_teal_r:'On site and brand',sw_amber:'Amber',sw_amber_r:'Needs attention',sw_red:'Red',sw_red_r:'Blocked and delete',sw_slate:'Slate',sw_slate_r:'Done',sw_eu:'EU blue',sw_eu_r:'Plates only',
 h_type:'Typography',h_type_p:'Barlow, a family inspired by road signage. Its semi-condensed cut is used for plates, halls and figures.',
 ty_h1:'Page title',ty_h2:'Section',ty_body:'Body',ty_meta:'Detail',ty_num:'Figures and codes',ty_s1:"Today's entries",ty_s2:'Vehicles on site',ty_s3:'The driver is waiting at gate 3.10 with a confirmed reference.',ty_s4:'Registered by Celeste at 14:02',
 h_btn:'Buttons',h_btn_p:"Rectangular, sized to their text, in the app's own typeface.",b_pri:'Primary',b_sec:'Secondary',b_ghost:'Borderless',b_dng:'Danger',b_ico:'Icon only',b_sm:'Compact',
 h_ctl:'Filters and fields',h_ctl_p:'One segmented control per decision, with search always on the left.',
 h_state:'Vehicle status',st_pend:'Pending',st_blk:'Blocked',
 h_plate:'Plates and halls',h_plate_p:"Plates carry the European blue band. Halls look like the venue's own signage.",
 h_tbl:'Tables',h_tbl_p:'Sticky header, 62 px rows, a status rail on the left, frequent actions in view and the rest under More options.',
 ver:'Version'},
de:{g_op:'Betrieb',g_per:'Logistik',g_cfg:'Einstellungen',g_dat:'Daten',
 tab_ingresos2:'Einfahrten',tab_ingresos:'Referenzen',tab_agenda:'Zeitplan',tab_mensajes:'Nachrichten',tab_conductores:'Fahrer',tab_flota:'Leergut',tab_empresas:'Firmen',tab_recintos:'Gelände',tab_eventos:'Veranstaltungen',tab_impresion:'Druck',tab_usuarios:'Benutzer',tab_auditoria:'Dateien',tab_papelera:'Papierkorb',tab_dash:'Übersicht',tab_analytics:'Analyse',tab_vehiculos:'Verlauf',tab_btnstats:'Tastennutzung',
 sys:'Designsystem',classic:'Klassische Ansicht',collapse:'Menü einklappen',expand:'Menü ausklappen',openNav:'Menü öffnen',
 search:'Kennzeichen, Referenz oder Firma suchen',map:'Plan',sync_ok:'Online',sync_err:'Offline',sync_wait:'Verbinde',sync_off:'Keine Synchronisierung',
 noEvent:'Keine aktive Veranstaltung',evWork:'Arbeitsveranstaltung',evManage:'Veranstaltungen verwalten',evActive:'Für alle aktiv',
 theme_dark:'Dunkles Design',theme_light:'Helles Design',language:'Sprache',backup:'Vollständige Sicherung',logout:'Abmelden',
 legacy:'Dieser Bereich nutzt noch das bisherige Design, bis er neu gestaltet ist.',backList:'Zurück zur Liste',
 r_superadmin:'Superadmin',r_supervisor:'Supervisor',
 i2_sub_ev:'An der Rampe erfasste Fahrzeuge für {ev}.',i2_sub:'An der Rampe erfasste Fahrzeuge.',
 i2_new:'Neue Einfahrt',import:'Importieren',import_paste:'Tabelle einfügen',import_paste_s:'Aus Excel oder einer E-Mail kopierte Zeilen',import_xlsx:'Excel- oder CSV-Datei',export:'Exportieren',more:'Weitere Optionen',
 special:'Sonderliste',edits:'Änderungsverlauf',columns:'Sichtbare Spalten',fields:'Formularfelder',clean:'Tagesdaten löschen',
 q_ph:'Kennzeichen, Referenz, Firma, Fahrer suchen…',clear:'Suche löschen',
 st_all:'Alle',st_in:'Auf dem Gelände',st_out:'Ausgefahren',
 d_today:'Heute',d_yday:'Gestern',d_event:'Veranstaltung',d_all:'Alle Daten',d_range:'Zeitraum',d_from:'Von',d_to:'Bis',apply:'Anwenden',hall:'Halle',
 c_pos:'Pos.',c_plate:'Kennzeichen',c_ref:'Referenz',c_comp:'Firma',c_driver:'Fahrer',c_hall:'Halle',c_in:'Einfahrt',c_state:'Status',
 s_in:'Auf dem Gelände',s_out:'Ausgefahren {t}',s_since:'Einfahrt {t}',
 a_print:'Datenblatt drucken',a_ramp:'Rampenticket',a_out:'Ausfahrt buchen',a_undo:'Ausfahrt stornieren',a_view:'Datensatz öffnen',a_edit:'Bearbeiten',a_del:'Löschen',
 trailer:'Anhänger',pager:'Pager {n}',stand:'Stand {s}',showMore:'{n} weitere anzeigen',showing:'{a} von {b}',
 empty_t:'Keine Einfahrten für diese Filter',empty_p:'Ändern Sie Zeitraum oder Status oder erfassen Sie ein neues Fahrzeug.',empty_all:'Alle Daten anzeigen',
 ds_sub:'Die Bausteine jedes BeUnifyT-Bildschirms. Was hier fehlt, wird nicht verwendet.',
 p1t:'Das Kennzeichen zuerst',p1:'Jedes Fahrzeug erscheint als Kennzeichen und wird erkannt, bevor man es liest.',
 p2t:'Farbe heißt Status',p2:'Petrol: auf dem Gelände. Bernstein: braucht Aufmerksamkeit. Grau: erledigt. Rot: gesperrt. Sonst ist nichts farbig.',
 p3t:'Eine Hauptaktion',p3:'Jeder Bildschirm hat genau eine dunkle Schaltfläche. Alles andere ist sekundär oder unter Weitere Optionen.',
 p4t:'Klare Sätze',p4:'Keine Großbuchstaben-Blöcke. Verben, die sagen, was passiert: Ausfahrt buchen, Datenblatt drucken.',
 p5t:'Für die Rampe gebaut',p5:'44-px-Touchflächen, 62-px-Zeilen und Kontrast, der im Sonnenlicht auf dem iPad lesbar bleibt.',
 h_color:'Farbe',h_color_p:'Eine Basis aus Asphalt und Beton. Farbe ist dem Fahrzeugstatus vorbehalten.',
 sw_ink:'Asphalt',sw_ink_r:'Text und Hauptaktion',sw_paper:'Beton',sw_paper_r:'Hintergrund und Navigation',sw_surf:'Fläche',sw_surf_r:'Arbeitsbereich',sw_teal:'Petrol',sw_teal_r:'Auf dem Gelände, Marke',sw_amber:'Bernstein',sw_amber_r:'Braucht Aufmerksamkeit',sw_red:'Rot',sw_red_r:'Gesperrt und löschen',sw_slate:'Schiefer',sw_slate_r:'Erledigt',sw_eu:'EU-Blau',sw_eu_r:'Nur Kennzeichen',
 h_type:'Typografie',h_type_p:'Barlow, eine von Verkehrsschildern inspirierte Schrift. Der halbschmale Schnitt dient für Kennzeichen, Hallen und Zahlen.',
 ty_h1:'Seitentitel',ty_h2:'Abschnitt',ty_body:'Fließtext',ty_meta:'Detail',ty_num:'Zahlen und Codes',ty_s1:'Einfahrten heute',ty_s2:'Fahrzeuge auf dem Gelände',ty_s3:'Der Fahrer wartet an Tor 3.10 mit bestätigter Referenz.',ty_s4:'Erfasst von Celeste um 14:02',
 h_btn:'Schaltflächen',h_btn_p:'Rechteckig, passend zum Text, in der Schrift der App.',b_pri:'Primär',b_sec:'Sekundär',b_ghost:'Ohne Rahmen',b_dng:'Gefahr',b_ico:'Nur Symbol',b_sm:'Kompakt',
 h_ctl:'Filter und Felder',h_ctl_p:'Ein Segment-Schalter pro Entscheidung, die Suche immer links.',
 h_state:'Fahrzeugstatus',st_pend:'Ausstehend',st_blk:'Gesperrt',
 h_plate:'Kennzeichen und Hallen',h_plate_p:'Kennzeichen tragen das blaue EU-Band. Hallen sehen aus wie die Beschilderung des Geländes.',
 h_tbl:'Tabellen',h_tbl_p:'Fixierter Kopf, 62-px-Zeilen, Statusleiste links, häufige Aktionen sichtbar, der Rest unter Weitere Optionen.',
 ver:'Version'}
};
T.es.legacySub='Esta opción usa todavía la pantalla anterior.';T.en.legacySub='This option still uses the previous screen.';T.de.legacySub='Diese Option nutzt noch die bisherige Ansicht.';
T.es.err_t='No se pudo mostrar esta vista';T.en.err_t='This view could not be shown';T.de.err_t='Diese Ansicht konnte nicht angezeigt werden';

function lang(){var c='es';try{c=CUR_LANG||'es';}catch(e){}return c==='de'?'de':c==='es'?'es':'en';}
function loc(){return {es:'es-ES',en:'en-GB',de:'de-DE'}[lang()];}
function t(k,a){var d=T[lang()]||T.es,s=(d[k]!=null?d[k]:(T.es[k]!=null?T.es[k]:k));if(a)for(var x in a)s=s.split('{'+x+'}').join(a[x]);return s;}
FX.addT=function(dict){['es','en','de'].forEach(function(l){if(!dict[l])return;for(var k in dict[l])T[l][k]=dict[l][k];});};
FX.t=t;FX.lang=lang;FX.loc=loc;FX.I=I;FX.LOGO=LOGO;

/* ── Utilidades ── */
function E(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function fn(n){return typeof window[n]==='function';}
function call(n){if(!fn(n))return;var a=[].slice.call(arguments,1);try{return window[n].apply(window,a);}catch(e){console.warn('[FUTURE]',n,e);}}
function can(n){try{return fn(n)?!!window[n]():false;}catch(e){return false;}}
function db(){try{return DB;}catch(e){return null;}}
function cu(){try{return CU;}catch(e){return null;}}
function cur(){try{return curTab;}catch(e){return null;}}
function IF(){try{return iF;}catch(e){return null;}}
function on(){return document.body.classList.contains('fx');}
function allowed(){var u=cu();return !!(u&&u.rol==='superadmin');}
function lsGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function lsSet(k,v){try{if(v==null)localStorage.removeItem(k);else localStorage.setItem(k,v);}catch(e){}}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);}
function ymdOff(n){var d=new Date();d.setDate(d.getDate()+n);return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);}
function nowHM(){var d=new Date();return ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2);}
function parseTs(s){if(!s)return null;s=String(s);var m=s.match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?/g);if(!m)return null;var x=m[m.length-1].match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?/);return {ymd:x[1]+'-'+x[2]+'-'+x[3],y:+x[1],mo:+x[2],d:+x[3],hm:x[4]?x[4]+':'+x[5]:''};}
function ymdDate(ymd){var p=String(ymd||'').split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
function dayLbl(ymd){if(!ymd)return '';try{return new Intl.DateTimeFormat(loc(),{day:'numeric',month:'short'}).format(ymdDate(ymd));}catch(e){var p=ymd.split('-');return p[2]+'/'+p[1];}}
function dayLong(ymd){if(!ymd)return '';try{var s=new Intl.DateTimeFormat(loc(),{weekday:'long',day:'numeric',month:'long'}).format(ymdDate(ymd));return s.charAt(0).toUpperCase()+s.slice(1);}catch(e){return ymd;}}
function rangeLbl(a,b){if(!a&&!b)return '';if(!a||!b||a===b)return dayLbl(a||b);try{var f=new Intl.DateTimeFormat(loc(),{day:'numeric',month:'short'});return f.formatRange?f.formatRange(ymdDate(a),ymdDate(b)):f.format(ymdDate(a))+' – '+f.format(ymdDate(b));}catch(e){return dayLbl(a)+' – '+dayLbl(b);}}
function tsLbl(s,refYmd){var p=parseTs(s);if(!p)return '';return (refYmd&&p.ymd===refYmd?'':dayLbl(p.ymd)+', ')+(p.hm||'');}
function workEv(){var ev=null;try{ev=(fn('getUserWorkEvent')&&getUserWorkEvent())||(fn('getActiveEvent')&&getActiveEvent())||null;}catch(e){}return ev;}
function evDates(ev){if(!ev)return null;var a=ev.ini||ev.fechaDesde||ev.fechaInicio||ev.fechaIni||ev.desde||'',b=ev.fin||ev.fechaHasta||ev.fechaFin||ev.fechaTermina||ev.hasta||'';return (a||b)?{a:a,b:b}:null;}
function getEvDates(){try{return fn('_getEventDates')?_getEventDates():null;}catch(e){return null;}}
function halls(){try{return fn('getRecintoHalls')?(getRecintoHalls()||[]):[];}catch(e){return [];}}
function colOn(tab,k){try{return fn('_isColVisible')?_isColVisible(tab,k):true;}catch(e){return true;}}
function sortOf(tab,defCol,defDir){var s={};try{s=fn('getSort')?getSort(tab):{};}catch(e){}return {col:s.col||defCol,dir:s.dir||defDir};}
function sortArr(arr,col,dir){try{return fn('sortArr')?window.sortArr(arr,col,dir):arr;}catch(e){return arr;}}
function hay(o,keys){return keys.map(function(k){var v=o[k];return v==null?'':Array.isArray(v)?v.join(' '):v;}).join(' ').toLowerCase();}
var CC={'ESPAÑA':'E','ESPANA':'E','SPAIN':'E','SPANIEN':'E','POLONIA':'PL','POLAND':'PL','POLEN':'PL','ALEMANIA':'D','GERMANY':'D','DEUTSCHLAND':'D','FRANCIA':'F','FRANCE':'F','FRANKREICH':'F','ITALIA':'I','ITALY':'I','ITALIEN':'I','PORTUGAL':'P','PAISES BAJOS':'NL','PAÍSES BAJOS':'NL','HOLANDA':'NL','NETHERLANDS':'NL','BELGICA':'B','BÉLGICA':'B','BELGIUM':'B','UCRANIA':'UA','UKRAINE':'UA','RUMANIA':'RO','RUMANÍA':'RO','ROMANIA':'RO','BULGARIA':'BG','LITUANIA':'LT','LITHUANIA':'LT','AUSTRIA':'A','CHEQUIA':'CZ','REPUBLICA CHECA':'CZ','REPÚBLICA CHECA':'CZ','HUNGRIA':'H','HUNGRÍA':'H','ESLOVAQUIA':'SK','TURQUIA':'TR','TURQUÍA':'TR','REINO UNIDO':'UK','UNITED KINGDOM':'UK','SUIZA':'CH'};
function plateCC(p){if(!p)return '';p=String(p).trim().toUpperCase();if(/^[A-Z]{1,3}$/.test(p))return p==='ES'?'E':p==='DE'?'D':p==='FR'?'F':p==='IT'?'I':p==='PT'?'P':p;return CC[p]||'';}
FX.E=E;FX.fn=fn;FX.call=call;FX.can=can;FX.db=db;FX.cu=cu;FX.cur=cur;FX.IF=IF;FX.on=on;FX.lsGet=lsGet;FX.lsSet=lsSet;
FX.todayStr=todayStr;FX.ymdOff=ymdOff;FX.nowHM=nowHM;FX.parseTs=parseTs;FX.dayLbl=dayLbl;FX.dayLong=dayLong;FX.rangeLbl=rangeLbl;FX.tsLbl=tsLbl;
FX.workEv=workEv;FX.evDates=evDates;FX.getEvDates=getEvDates;FX.halls=halls;FX.colOn=colOn;FX.sortOf=sortOf;FX.sortArr=sortArr;FX.hay=hay;FX.plateCC=plateCC;

/* ── Componentes ── */
var U=FX.ui={};
U.plate=function(m,cc,cls){return '<span class="fx-plate'+(cls?' '+cls:'')+'"><i>'+E(cc||'')+'</i><b>'+E(m||'–')+'</b></span>';};
U.hall=function(h){return h?'<span class="fx-hall">'+E(h)+'</span>':'';};
U.halls=function(arr){return (arr||[]).filter(Boolean).map(U.hall).join('');};
U.st=function(cls,lbl){return '<span class="fx-st '+cls+'">'+E(lbl)+'</span>';};
U.dash='<span class="fx-dash">–</span>';
U.meta=function(s,cls){return s?'<span class="fx-meta'+(cls?' '+cls:'')+'">'+s+'</span>':'';};
U.btn=function(act,ico,lbl,cls,extra){return '<button type="button" class="fx-btn'+(cls?' '+cls:'')+'" data-fx="'+act+'"'+(extra||'')+'>'+(ico||'')+(lbl?'<span>'+lbl+'</span>':'')+'</button>';};
U.ibtn=function(act,ico,tip,cls,extra){return '<button type="button" class="fx-btn ico'+(cls?' '+cls:'')+'" data-fx="'+act+'" aria-label="'+E(tip)+'" data-fx-tip="'+E(tip)+'"'+(extra||'')+'>'+ico+'</button>';};
U.mi=function(act,ico,lbl,cls,extra,sub){return '<button type="button" role="menuitem" class="'+(cls||'')+'" data-fx="'+act+'"'+(extra||'')+'>'+(ico||'<svg viewBox="0 0 24 24"></svg>')+'<span>'+lbl+(sub?'<small>'+sub+'</small>':'')+'</span></button>';};
U.ph=function(title,sub,acts){return '<div class="fx-ph"><div><h1 class="fx-h1">'+title+'</h1>'+(sub?'<p class="fx-sub">'+sub+'</p>':'')+'</div><div class="fx-acts">'+(acts||'')+'</div></div>';};
U.search=function(key,val,ph){return '<label class="fx-search">'+I.search+'<input type="search" id="fxQ-'+key+'" data-fxq="'+key+'" autocomplete="off" spellcheck="false" placeholder="'+E(ph)+'" value="'+E(val||'')+'">'+(val?'<button type="button" class="fx-clr" data-fx="qclr" data-k="'+key+'" aria-label="'+E(t('clear'))+'">'+I.x+'</button>':'')+'</label>';};
/* opts: [{v,lbl,n,dot,title}] */
U.seg=function(act,opts,curv,aria,extra){return '<div class="fx-seg" role="group" aria-label="'+E(aria||'')+'">'+opts.map(function(o){var on_=String(o.v)===String(curv);return '<button type="button" class="'+(on_?'on':'')+'" data-fx="'+act+'" data-v="'+E(o.v)+'" aria-pressed="'+on_+'"'+(o.title?' title="'+E(o.title)+'"':'')+(extra||'')+'>'+(o.dot?'<i style="background:'+o.dot+'"></i>':'')+o.lbl+(o.n!=null?' <b>'+o.n+'</b>':'')+'</button>';}).join('')+'</div>';};
U.tiles=function(act,list,curv){if(!list||!list.length)return '';return '<span class="fx-grow"></span><div class="fx-tiles" role="group" aria-label="'+E(t('hall'))+'"><span class="fx-lbl">'+t('hall')+'</span><button type="button" class="fx-tile txt'+(!curv?' on':'')+'" data-fx="'+act+'" data-v="">'+t('st_all')+'</button>'+list.map(function(x){return '<button type="button" class="fx-tile'+(curv===x?' on':'')+'" data-fx="'+act+'" data-v="'+E(x)+'">'+E(x)+'</button>';}).join('')+'</div>';};
/* modo de fecha: hoy|ayer|evento|rango|all */
U.dateMode=function(fecha,desde,hasta,mode){var td=todayStr(),e=getEvDates();if(mode==='hoy'||(fecha===td&&!desde&&!hasta)||(!fecha&&desde===td&&hasta===td))return 'hoy';if(mode==='ayer')return 'ayer';if(mode==='evento'||(e&&desde===e.desde&&hasta===e.hasta))return 'evento';if(desde||hasta||fecha)return 'rango';return 'all';};
U.dateSeg=function(act,mode,fecha,desde,hasta,rangeAct){var e=getEvDates();var h=U.seg(act,[{v:'hoy',lbl:t('d_today')},{v:'ayer',lbl:t('d_yday')}].concat(e?[{v:'evento',lbl:t('d_event'),title:rangeLbl(e.desde,e.hasta)}]:[]).concat([{v:'clear',lbl:t('d_all')}]),mode==='all'?'clear':mode,t('d_range'));
  var rl=(mode==='rango'||mode==='evento')?rangeLbl(desde||fecha,hasta||fecha):(mode==='hoy'||mode==='ayer')?dayLbl(fecha||desde):'';
  return h+'<button type="button" class="fx-btn'+(mode==='rango'?' go':'')+'" data-fx="'+rangeAct+'" aria-haspopup="menu">'+I.cal+'<span>'+(rl?E(rl):t('d_range'))+'</span></button>';};
U.rangeMenu=function(anchor,okAct,from,to){openMenu(anchor,'<div class="fx-range"><label>'+t('d_from')+'<input type="date" id="fxD-from" value="'+E(from||'')+'"></label><label>'+t('d_to')+'<input type="date" id="fxD-to" value="'+E(to||'')+'"></label><button type="button" class="fx-btn pri" data-fx="'+okAct+'" style="width:100%">'+t('apply')+'</button></div>',false);};
U.rangeVal=function(){var a=(document.getElementById('fxD-from')||{}).value||'',b=(document.getElementById('fxD-to')||{}).value||'';if(a&&b&&a>b){var x=a;a=b;b=x;}closeMenu();return {a:a,b:b};};
U.th=function(act,col,lbl,d,cls){if(!col)return '<th'+(cls?' class="'+cls+'"':'')+'>'+lbl+'</th>';var on_=d.col===col,ic=on_?(d.dir==='asc'?I.sortUp:I.sortDown):I.sort;return '<th'+(cls?' class="'+cls+'"':'')+' aria-sort="'+(on_?(d.dir==='asc'?'ascending':'descending'):'none')+'"><button type="button" class="fx-th'+(on_?' on':'')+'" data-fx="'+act+'" data-col="'+col+'">'+lbl+ic+'</button></th>';};
U.table=function(head,rows){return '<div class="fx-tblwrap"><table class="fx-tbl"><thead><tr>'+head+'</tr></thead><tbody>'+rows+'</tbody></table></div>';};
/* o:{id,src,cls,pos,plate,title,meta[],st,act} */
U.li=function(o){return '<div class="fx-li '+(o.cls||'')+'" data-fxrow="'+E(o.id)+'" data-src="'+E(o.src||'')+'"><span class="c-pos">'+(o.pos||'')+'</span><span class="li-plate">'+(o.plate||'')+'</span><span class="li-main"><b>'+(o.title||'–')+'</b>'+((o.meta||[]).filter(Boolean).length?'<span class="li-meta">'+o.meta.filter(Boolean).join('')+'</span>':'')+'</span><span class="li-st">'+(o.st||'')+'</span><span class="li-act">'+(o.act||'')+'</span></div>';};
U.list=function(items){return '<div class="fx-list'+(S.lay==='cards'?' cards':'')+'">'+items+'</div>';};
U.empty=function(title,p,acts){return '<div class="fx-empty"><h3>'+title+'</h3>'+(p?'<p>'+p+'</p>':'')+(acts?'<div class="fx-acts">'+acts+'</div>':'')+'</div>';};
U.foot=function(key,shown,total){return total?'<div class="fx-foot"><span class="fx-num">'+t('showing',{a:shown,b:total})+'</span>'+(total>shown?U.btn('moreRows',null,t('showMore',{n:Math.min(LIM,total-shown)}),'sm',' data-k="'+key+'"'):'')+'</div>':'';};
U.tabs=function(act,opts,curv,aria){return '<div class="fx-tabs" role="tablist" aria-label="'+E(aria||'')+'">'+opts.map(function(o){var on_=String(o.v)===String(curv);return '<button type="button" role="tab" class="'+(on_?'on':'')+'" aria-selected="'+on_+'" data-fx="'+act+'" data-v="'+E(o.v)+'">'+o.lbl+(o.n!=null?' <b>'+o.n+'</b>':'')+'</button>';}).join('')+'</div>';};
U.av=function(name,cls){var s=String(name||'?').trim().split(/\s+/).map(function(w){return w.charAt(0);}).join('').slice(0,2).toUpperCase();return '<span class="fx-avs'+(cls?' '+cls:'')+'" aria-hidden="true">'+E(s)+'</span>';};
U.note=function(kind,ico,txt){return '<div class="fx-note '+(kind||'')+'">'+(ico||'')+'<span>'+txt+'</span></div>';};
U.dl=function(pairs){var h='<dl class="fx-dl">';pairs.forEach(function(p){if(p[1]==null||String(p[1]).trim()==='')return;h+='<div'+(p[2]?' class="w"':'')+'><dt>'+E(p[0])+'</dt><dd>'+(p[3]?p[1]:E(p[1]))+'</dd></div>';});return h+'</dl>';};
U.tl=function(steps){return '<ol class="fx-tl">'+steps.map(function(s){return '<li class="'+(s.v?'':'off')+'"><b>'+E(s.l)+'</b><span>'+(s.v?E(s.v):E(s.p||t('tl_pending')))+'</span></li>';}).join('')+'</ol>';};
FX.tv=function(v){if(!v)return '';try{var m=TV[v];if(m)return String(m).replace(/^[^A-Za-zÁÉÍÓÚÑáéíóúñ]+/,'');}catch(e){}return v;};
FX.langName=function(code){if(!code)return '';try{var l=(LANGS_UI||[]).find(function(x){return x.code===code;});return l?l.name:code;}catch(e){return code;}};
U.acts=function(h){return '<div class="fx-acts">'+h+'</div>';};
/* Paginación incremental y resaltado de filas nuevas por vista */
U.page=function(key,fkey,items){if(S.fkey[key]!==fkey){S.lim[key]=LIM;S.seen[key]=null;}var prev=S.fkey[key]===fkey?S.seen[key]:null;S.fkey[key]=fkey;var lim=S.lim[key]||LIM,list=items.slice(0,lim),seen={};list.forEach(function(i){seen[i.id]=1;});S.seen[key]=seen;return {list:list,isNew:function(id){return !!(prev&&!prev[id]);}};};
U.lay=function(){return S.lay;};U.wide=function(){return S.wide;};

/* ── Acciones (registro) ── */
var A={},Q={},ROW={},QT={};
FX.act=function(name,f){A[name]=f;};
FX.q=function(key,f){Q[key]=f;};
FX.row=function(src,f){ROW[src]=f;};
FX.view=function(tab,def){VIEWS[tab]=def;if(def.wrap)def.wrap.forEach(function(n){wrapRender(n,tab);});if(on())fxSyncSoon();};
FX.isView=function(tab){return !!VIEWS[tab];};
FX.getView=function(tab){return VIEWS[tab]||null;};

/* ── Navegación ── */
var GROUPS=[
  {k:'op',tabs:['ingresos2','ingresos','agenda','mensajes']},
  {k:'per',tabs:['conductores','flota','empresas']},
  {k:'cfg',tabs:['recintos','eventos','impresion','usuarios','auditoria','papelera']},
  {k:'dat',tabs:['dash','analytics','vehiculos','btnstats']}
];
var TAB_ICO={ingresos2:I.truck,ingresos:I.clip,agenda:I.calclock,mensajes:I.msg,conductores:I.idcard,flota:I.pkg,empresas:I.bldg,recintos:I.venue,eventos:I.cal,impresion:I.printer,usuarios:I.users,auditoria:I.folder,papelera:I.trash,dash:I.grid,analytics:I.chart,vehiculos:I.hist,btnstats:I.pointer};
function tabOk(tab){var b=document.querySelector('#mainTabs .btn-tab[data-tab="'+tab+'"]');return !!b&&b.getAttribute('data-perm-hidden')!=='1';}
FX.tabOk=tabOk;
function badges(){
  var D=db(),out={};if(!D)return out;var td=todayStr();
  try{var ev=fn('getUserWorkEventId')?getUserWorkEventId():null;out.ingresos2=(D.ingresos2||[]).filter(function(i){return !i.salida&&(!ev||!i.eventoId||i.eventoId===ev);}).length;}catch(e){}
  try{out.agenda=(D.agenda||[]).filter(function(a){return a.fecha===td&&a.estado==='PENDIENTE';}).length;}catch(e){}
  try{var sid=SID,now=Date.now();out.mensajes=(D.mensajesRampa||[]).filter(function(m){return !(m.leido&&m.leido.indexOf(sid)>=0)&&!m.pausado&&(!m.expiraTs||now<m.expiraTs);}).length;}catch(e){}
  return out;
}
var BADGE_CLS={ingresos2:'t',agenda:'a',mensajes:'r'};
function renderNav(){
  var nav=document.getElementById('fxNav');if(!nav)return;
  var ct=S.page?(S.page==='btnstats'?'btnstats':null):cur(),b=badges(),h='',sc=(nav.querySelector('.fx-navscroll')||{}).scrollTop||0;
  GROUPS.forEach(function(g){
    var items=g.tabs.filter(tabOk);if(!items.length)return;
    h+='<div class="fx-ngrp"><div class="fx-nh">'+t('g_'+g.k)+'</div>';
    items.forEach(function(tab){
      var n=b[tab];
      h+='<button type="button" class="fx-ni'+(ct===tab?' on':'')+'" data-fx="go" data-tab="'+tab+'"'+(n?' data-badge="'+(BADGE_CLS[tab]||'t')+'"':'')+' title="'+E(t('tab_'+tab))+'">'+TAB_ICO[tab]+'<span>'+t('tab_'+tab)+'</span>'+(n?'<em class="'+(BADGE_CLS[tab]||'')+'">'+n+'</em>':'')+'</button>';
    });
    h+='</div>';
  });
  if(typeof window.buOpenMiba==='function')h='<div class="fx-ngrp"><button type="button" class="fx-ni" data-fx="miba" title="MIBA · Logística de empresa">'+I.truck+'<span>MIBA</span></button></div>'+h;
  if(typeof window.buOpenCcib==='function')h='<div class="fx-ngrp"><button type="button" class="fx-ni" data-fx="ccib" title="CCIB · Pedido de personal">'+I.bldg+'<span>CCIB</span></button></div>'+h;
  var rail=document.body.classList.contains('fx-rail');
  nav.innerHTML='<div class="fx-brand">'+LOGO+'<span class="fx-word"><b>Be</b>Unify<b>T</b></span></div>'
    +'<div class="fx-navscroll">'+h+'</div>'
    +'<div class="fx-navfoot">'
    +'<button type="button" class="fx-ni'+(S.page==='system'?' on':'')+'" data-fx="system" title="'+E(t('sys'))+'">'+I.palette+'<span>'+t('sys')+'</span></button>'
    +'<button type="button" class="fx-ni" data-fx="classic" title="'+E(t('classic'))+'">'+I.back+'<span>'+t('classic')+'</span></button>'
    +'<button type="button" class="fx-ni fx-railbtn" data-fx="rail" title="'+E(t(rail?'expand':'collapse'))+'">'+(rail?I.panelR:I.panel)+'<span>'+t(rail?'expand':'collapse')+'</span></button>'
    +'<div class="fx-copy">BeUnifyT FUTURE '+E(FX_VER)+'</div>'
    +'</div>';
  var ns=nav.querySelector('.fx-navscroll');if(ns&&sc)ns.scrollTop=sc;
}
function syncState(){var d=document.getElementById('syncDot'),c=d?d.className:'';return /sd-g/.test(c)?'ok':/sd-r/.test(c)?'err':/sd-o/.test(c)?'off':'wait';}
function renderTop(){
  var top=document.getElementById('fxTop');if(!top)return;
  var ev=workEv(),dd=evDates(ev),u=cu()||{},ss=syncState();
  var ini=String(u.nombre||'?').trim().split(/\s+/).map(function(w){return w.charAt(0);}).join('').slice(0,2).toUpperCase();
  var evSmall=ev?[dd?rangeLbl(dd.a,dd.b):'',ev.recinto||''].filter(Boolean):[];
  top.innerHTML=U.ibtn('nav',I.menu,t('openNav'),'ghost fx-burger')
    +'<button type="button" class="fx-ev" data-fx="ev" aria-haspopup="menu"><span class="fx-ev-ico">'+I.venue+'</span><span class="fx-ev-t"><b>'+E(ev?ev.nombre:t('noEvent'))+'</b>'+(evSmall.length?'<small>'+evSmall.map(E).join(', ')+'</small>':'')+'</span>'+I.chev+'</button>'
    +'<button type="button" class="fx-q" data-fx="search" aria-label="'+E(t('search'))+'">'+I.search+'<span>'+t('search')+'</span><kbd>/</kbd></button>'
    +'<div class="fx-tr">'
    +(fn('buOpenMapa')?'<button type="button" class="fx-btn ghost" data-fx="map" aria-label="'+E(t('map'))+'">'+I.map+'<span class="fx-hide-s">'+t('map')+'</span></button>':'')
    +'<span class="fx-sync '+ss+'" title="'+E(t('sync_'+ss))+'"><i></i><span>'+t('sync_'+ss)+'</span></span>'
    +'<button type="button" class="fx-btn ghost fx-hide-s" data-fx="lang" aria-label="'+E(t('language'))+'">'+I.globe+'<span>'+lang().toUpperCase()+'</span></button>'
    +'<button type="button" class="fx-av" data-fx="user" aria-haspopup="menu" aria-label="'+E(u.nombre||'')+'">'+E(ini)+'</button>'
    +'</div>';
}
var HH={};FX.hostHead=function(tab,f){HH[tab]=f;};
function legacyNote(tab){
  var am=document.getElementById('appMain');if(!am)return;
  var n=document.getElementById('fxLegacy');
  if(!n){n=document.createElement('div');n.id='fxLegacy';am.insertBefore(n,am.firstChild);}
  if(HH[tab]){n.className='fx-hh';n.innerHTML=HH[tab]();return;}
  n.className='';
  var v=VIEWS[tab],sub=!!(v&&v.back);
  n.innerHTML=I.info+'<span>'+t(sub?'legacySub':'legacy')+'</span>'+(sub?U.btn('subBack',I.back,t('backList'),'sm',' data-tab="'+tab+'"'):'');
}

/* ── Menús emergentes ── */
var MENU=null;
function closeMenu(){if(MENU){MENU.el.remove();if(MENU.anchor)MENU.anchor.setAttribute('aria-expanded','false');MENU=null;}}
function openMenu(anchor,html,right){
  if(MENU&&MENU.anchor===anchor){closeMenu();return;}
  closeMenu();
  var m=document.createElement('div');m.className='fx-menu';m.setAttribute('role','menu');m.innerHTML=html;document.body.appendChild(m);
  var r=anchor.getBoundingClientRect(),w=m.offsetWidth,h=m.offsetHeight,vw=window.innerWidth,vh=window.innerHeight;
  var left=right?r.right-w:r.left;left=Math.max(8,Math.min(left,vw-w-8));
  var top=r.bottom+6;if(top+h>vh-8&&r.top-h-6>8)top=r.top-h-6;top=Math.max(8,Math.min(top,vh-h-8));
  m.style.left=left+'px';m.style.top=top+'px';
  anchor.setAttribute('aria-expanded','true');
  MENU={el:m,anchor:anchor};
  var f=m.querySelector('button,input');if(f&&!('ontouchstart' in window))try{f.focus({preventScroll:true});}catch(e){}
}
FX.menu=openMenu;FX.closeMenu=closeMenu;

/* ── Panel lateral de detalle (drawer) ── */
var DR=null;
function drawerEl(){var d=document.getElementById('fxDrawer');if(!d){d=document.createElement('div');d.id='fxDrawer';d.innerHTML='<div class="fx-dr-scrim" data-fx="drClose"></div><aside class="fx-dr" role="dialog" aria-modal="true"></aside>';document.body.appendChild(d);}return d;}
FX.drawer={
  open:function(render){DR={render:render};var d=drawerEl();var p=d.querySelector('.fx-dr');p.innerHTML=render();p.setAttribute('tabindex','-1');d.classList.add('on');document.body.classList.add('fx-dr-on');try{p.focus({preventScroll:true});}catch(e){}},
  close:function(){DR=null;var d=document.getElementById('fxDrawer');if(d){d.classList.remove('on');d.querySelector('.fx-dr').innerHTML='';}document.body.classList.remove('fx-dr-on');},
  refresh:function(){if(!DR)return;var html=DR.render();if(html==null){FX.drawer.close();return;}var el=document.querySelector('#fxDrawer .fx-dr');if(el){var sc=el.scrollTop;el.innerHTML=html;el.scrollTop=sc;}},
  isOpen:function(){return !!DR;}
};

/* ── Armazón ── */
function loadFonts(){
  if(document.getElementById('fxFonts'))return;
  var l=document.createElement('link');l.id='fxFonts';l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Semi+Condensed:wght@500;600;700&display=swap';
  document.head.appendChild(l);
}
var _ro=null;
function layKey(){var m=document.getElementById('fxMain'),w=(m&&m.clientWidth)||window.innerWidth;return {lay:w<640?'cards':w<1060?'list':'table',wide:w>=1360};}
function measure(){var k=layKey();S.lay=k.lay;S.wide=k.wide;}
function watchSize(){var m=document.getElementById('fxMain');if(!m||_ro||typeof ResizeObserver==='undefined')return;_ro=new ResizeObserver(function(){if(!on()||!document.body.classList.contains('fx-native'))return;var k=layKey();if(k.lay!==S.lay||k.wide!==S.wide)fxSyncSoon();});_ro.observe(m);}
function buildShell(){
  if(document.getElementById('fxNav'))return;
  var am=document.getElementById('appMain');if(!am)return;
  var nav=document.createElement('nav');nav.id='fxNav';nav.setAttribute('aria-label','BeUnifyT');
  var top=document.createElement('header');top.id='fxTop';
  var main=document.createElement('main');main.id='fxMain';
  var scrim=document.createElement('div');scrim.id='fxScrim';scrim.setAttribute('data-fx','navclose');
  am.parentNode.insertBefore(top,am);
  am.parentNode.insertBefore(main,am.nextSibling);
  document.body.appendChild(scrim);
  document.body.appendChild(nav);
  watchSize();
}
function addLauncher(){
  var bar=document.getElementById('tgGroupBar');if(!bar||document.getElementById('fxLaunch'))return;
  var b=document.createElement('button');b.type='button';b.id='fxLaunch';b.className='fx-launch';b.title='BeUnifyT FUTURE';b.setAttribute('aria-label','FUTURE');
  b.innerHTML=I.spark+'<span>Future</span>';
  b.addEventListener('click',function(){fxEnter();});
  bar.appendChild(b);
}
function updLauncher(){var b=document.getElementById('fxLaunch');if(b)b.classList.toggle('on',allowed());}
function capWord(s){return s.toLowerCase().replace(/^(\s*)(\S)/,function(m,a,b){return a+b.toUpperCase();});}
function tame(on_){
  document.querySelectorAll(on_?'.ov button[style*="!important"]':'.ov button[data-fx-style]').forEach(function(b){
    if(on_){b.dataset.fxStyle=b.getAttribute('style')||'';b.removeAttribute('style');b.classList.add('fx-tamed');}
    else if(b.dataset.fxStyle!=null){if(!b.getAttribute('style'))b.setAttribute('style',b.dataset.fxStyle);delete b.dataset.fxStyle;b.classList.remove('fx-tamed');}
  });
  /* Arreglos solo visuales dentro de FUTURE (se deshacen al salir):
     pie de ventana fuera de su caja, textos ${tr(...)} sin traducir, marcadores '+' en placeholders y botones en mayúsculas. */
  document.querySelectorAll('.ov').forEach(function(ov){
    var m=ov.querySelector(':scope>.modal');
    if(on_){var f=ov.querySelector(':scope>.ffoot');if(f&&m){f.dataset.fxMoved='1';f.__fxNext=f.nextSibling;m.appendChild(f);}}
    else{var f2=ov.querySelector('.modal>.ffoot[data-fx-moved]');if(f2){delete f2.dataset.fxMoved;var nx=f2.__fxNext;delete f2.__fxNext;ov.insertBefore(f2,nx&&nx.parentNode===ov?nx:null);}}
  });
  document.querySelectorAll('.ov .flbl,.ov .modal-section-title,.ov label').forEach(function(el){
    if(on_){if(el.children.length)return;var mt=/^\s*\$\{tr\('(\w+)'\)\}\s*$/.exec(el.textContent);if(mt&&fn('tr')){el.dataset.fxTxt=el.textContent;el.textContent=call('tr',mt[1]);}}
    else if(el.dataset.fxTxt!=null){el.textContent=el.dataset.fxTxt;delete el.dataset.fxTxt;}
  });
  document.querySelectorAll('.ov input[placeholder]').forEach(function(el){
    if(on_){var ph=el.getAttribute('placeholder');if(ph&&ph.indexOf("'+'")>=0){el.dataset.fxPh=ph;el.setAttribute('placeholder',ph.split("'+'").join('').replace(/^\s+|\s+$/g,''));}}
    else if(el.dataset.fxPh!=null){el.setAttribute('placeholder',el.dataset.fxPh);delete el.dataset.fxPh;}
  });
  document.querySelectorAll('.ov .ffoot button').forEach(function(b){
    var nodes=[];b.childNodes.forEach(function(n){if(n.nodeType===3)nodes.push(n);else if(n.nodeType===1&&n.tagName==='SPAN'&&!n.children.length)nodes.push(n.firstChild);});
    nodes.forEach(function(n){if(!n)return;
      if(on_){var v=n.nodeValue;if(v&&/[A-ZÁÉÍÓÚÑ]{4}/.test(v)&&v===v.toUpperCase()&&!/[a-záéíóúñ]/.test(v)){n.__fxTxt=v;n.nodeValue=capWord(v);}}
      else if(n.__fxTxt!=null){n.nodeValue=n.__fxTxt;delete n.__fxTxt;}
    });
  });
}
var _ovObs=null;
function watchOv(){
  if(_ovObs||typeof MutationObserver==='undefined')return;
  _ovObs=new MutationObserver(function(ms){if(!on())return;for(var i=0;i<ms.length;i++){if(ms[i].target.classList&&ms[i].target.classList.contains('open')){setTimeout(function(){tame(true);},0);break;}}});
  document.querySelectorAll('.ov').forEach(function(o){_ovObs.observe(o,{attributes:true,attributeFilter:['class']});});
}
function fxEnter(){
  if(!allowed())return;
  loadFonts();buildShell();tame(true);watchOv();
  document.body.classList.add('fx');
  var rp=lsGet(LS_RAIL);document.body.classList.toggle('fx-rail',rp==='1'||(rp==null&&window.innerWidth<1280));
  lsSet(LS_MODE,'1');
  fxSync();
}
function fxExit(){
  closeMenu();FX.drawer.close();
  document.body.classList.remove('fx','fx-native','fx-navopen','fx-rail');
  tame(false);lsSet(LS_MODE,null);S.page=null;
  var c=cur();if(c&&fn('goTab'))call('goTab',c);
  call('tgSyncGroupToActiveTab');
}
window.fxEnter=fxEnter;window.fxExit=fxExit;
/* Pausa sin borrar la preferencia (p. ej. vista previa del portal de una empresa) */
FX.suspend=function(){if(!on())return;closeMenu();FX.drawer.close();document.body.classList.remove('fx','fx-native','fx-navopen');tame(false);S.susp=true;};
FX.resume=function(){if(!S.susp)return;S.susp=false;if(lsGet(LS_MODE)==='1'&&allowed())fxEnter();};
var _raf=0;
function fxSyncSoon(){if(_raf||!on())return;_raf=requestAnimationFrame(function(){_raf=0;fxSync();});}
FX.sync=fxSyncSoon;
function fxSync(){
  if(!on())return;
  if(!allowed()){fxExit();return;}
  renderNav();renderTop();
  var key=S.page||cur(),v=VIEWS[key],nat=false;
  try{nat=!!(v&&(!v.when||v.when()));}catch(e){nat=false;}
  document.body.classList.toggle('fx-native',nat);
  if(nat){
    measure();
    var main=document.getElementById('fxMain'),ae=document.activeElement,aid=ae&&ae.id,ss=null,se=null;
    if(aid&&main.contains(ae)&&ae.setSelectionRange){try{ss=ae.selectionStart;se=ae.selectionEnd;}catch(e){}}
    var html='';try{html=v.render();}catch(e){console.error('[FUTURE] vista',key,e);html=U.empty(t('err_t'),E(String(e&&e.message||e)));}
    main.innerHTML=html;
    if(aid){var n=document.getElementById(aid);if(n&&main.contains(n)){try{n.focus({preventScroll:true});if(ss!=null)n.setSelectionRange(ss,se);}catch(e){}}}
  } else legacyNote(key);
  FX.drawer.refresh();
}
function scrollTop(){['fxMain','appMain'].forEach(function(id){var e=document.getElementById(id);if(e)e.scrollTop=0;});}
FX.scrollTop=scrollTop;
function fxGo(tab){
  closeMenu();FX.drawer.close();document.body.classList.remove('fx-navopen');
  if(tab==='btnstats'){if(VIEWS.btnstats){S.page='btnstats';scrollTop();fxSync();}else call('tgShowStats');return;}
  S.page=null;
  var v=VIEWS[tab];if(v&&v.reset)try{v.reset();}catch(e){}
  var b=document.querySelector('#mainTabs .btn-tab[data-tab="'+tab+'"]');
  call('goTab',tab,b);call('tgSyncGroupToActiveTab');
  scrollTop();fxSyncSoon();
}
FX.go=fxGo;

/* ── Sistema de diseño ── */
function renderSystem(){
  function sw(name,role,col,bd){return '<div><span style="background:'+col+(bd?';border-bottom:1px solid var(--fx-line)':'')+'"></span><p><b>'+name+'</b>'+role+'<br><span class="fx-num">'+col+'</span></p></div>';}
  var h='<div class="fx-page fx-ds">';
  h+=U.ph(t('sys'),t('ds_sub'),'<span class="fx-lbl">'+t('ver')+' '+E(FX_VER)+'</span>');
  h+='<ul class="fx-ds-prin">'+[1,2,3,4,5].map(function(n){return '<li><b>'+t('p'+n+'t')+'</b>'+t('p'+n)+'</li>';}).join('')+'</ul>';
  h+='<h2>'+t('h_color')+'</h2><p>'+t('h_color_p')+'</p><div class="fx-sw">'
    +sw(t('sw_ink'),t('sw_ink_r'),'#142030')+sw(t('sw_paper'),t('sw_paper_r'),'#E9EDF0')+sw(t('sw_surf'),t('sw_surf_r'),'#FFFFFF',1)
    +sw(t('sw_teal'),t('sw_teal_r'),'#00826C')+sw(t('sw_amber'),t('sw_amber_r'),'#F2B400')+sw(t('sw_red'),t('sw_red_r'),'#B42318')
    +sw(t('sw_slate'),t('sw_slate_r'),'#465565')+sw(t('sw_eu'),t('sw_eu_r'),'#1D3E9E')+'</div>';
  h+='<h2>'+t('h_type')+'</h2><p>'+t('h_type_p')+'</p><div class="fx-type">'
    +'<div><small>'+t('ty_h1')+'<br>Barlow 600, 30 px</small><span style="font:600 30px/1.1 var(--fx-font);letter-spacing:-.4px">'+t('ty_s1')+'</span></div>'
    +'<div><small>'+t('ty_h2')+'<br>Barlow 600, 21 px</small><span style="font:600 21px/1.2 var(--fx-font)">'+t('ty_s2')+'</span></div>'
    +'<div><small>'+t('ty_body')+'<br>Barlow 500, 15,5 px</small><span style="font:500 15.5px/1.45 var(--fx-font)">'+t('ty_s3')+'</span></div>'
    +'<div><small>'+t('ty_meta')+'<br>Barlow 500, 13,5 px</small><span style="font:500 13.5px/1.3 var(--fx-font);color:var(--fx-mute)">'+t('ty_s4')+'</span></div>'
    +'<div><small>'+t('ty_num')+'<br>Barlow Semi Condensed 600</small><span><span class="fx-code" style="font-size:19px">044-260521-0193</span> &nbsp; <span style="font:600 21px/1 var(--fx-cond)" class="fx-num">14:02 &nbsp; 248 &nbsp; 3.10</span></span></div>'
    +'</div>';
  h+='<h2>'+t('h_btn')+'</h2><p>'+t('h_btn_p')+'</p>'
    +'<div class="fx-ds-row"><small>'+t('b_pri')+'</small>'+U.btn('noop',I.plus,t('i2_new'),'pri')+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_sec')+'</small>'+U.btn('noop',I.down,t('export'))+U.btn('noop',I.exit,t('a_out'),'go')+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_ghost')+'</small>'+U.btn('noop',I.map,t('map'),'ghost')+U.btn('noop',I.printer,t('a_print'),'ghost')+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_dng')+'</small>'+U.btn('noop',I.trash,t('a_del'),'dng')+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_ico')+'</small>'+U.ibtn('noop',I.printer,t('a_print'),'ghost')+U.ibtn('noop',I.ticket,t('a_ramp'),'ghost')+U.ibtn('noop',I.more,t('more'))+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_sm')+'</small>'+U.btn('noop',I.exit,t('a_out'),'go sm')+U.btn('noop',null,t('showMore',{n:150}),'sm')+'</div>';
  h+='<h2>'+t('h_ctl')+'</h2><p>'+t('h_ctl_p')+'</p>'
    +'<div class="fx-ds-row"><label class="fx-search" style="flex:1 1 320px">'+I.search+'<input type="search" placeholder="'+E(t('q_ph'))+'" tabindex="-1"></label>'
    +U.seg('noop',[{v:'all',lbl:t('st_all'),n:203},{v:'in',lbl:t('st_in'),n:2,dot:'var(--fx-teal)'},{v:'out',lbl:t('st_out'),n:201,dot:'var(--fx-slate)'}],'all','')+'</div>'
    +'<div class="fx-ds-row">'+U.seg('noop',[{v:'h',lbl:t('d_today')},{v:'y',lbl:t('d_yday')},{v:'e',lbl:t('d_event')},{v:'a',lbl:t('d_all')}],'h','')
    +'<div class="fx-tiles"><button type="button" class="fx-tile txt on">'+t('st_all')+'</button><button type="button" class="fx-tile">2</button><button type="button" class="fx-tile">3</button><button type="button" class="fx-tile">5</button><button type="button" class="fx-tile">8.1</button></div></div>';
  h+='<h2>'+t('h_state')+'</h2><p>'+t('p2')+'</p>'
    +'<div class="fx-ds-row">'+U.st('in',t('s_in'))+U.st('pend',t('st_pend'))+U.st('out',t('s_out',{t:'14:32'}))+U.st('blk',t('st_blk'))+'</div>';
  h+='<h2>'+t('h_plate')+'</h2><p>'+t('h_plate_p')+'</p>'
    +'<div class="fx-ds-row">'+U.plate('4183JBT','E','lg')+U.plate('B KX 4471','D','lg')+U.plate('WGM87933','PL','lg')+'</div>'
    +'<div class="fx-ds-row">'+U.plate('ZFBD148','')+U.plate('R5244BCG','','sm')+U.hall('2')+U.hall('3')+U.hall('5')+U.hall('8.1')+'</div>';
  h+='<h2>'+t('h_more')+'</h2><p>'+t('h_more_p')+'</p>'
    +'<div class="fx-ds-row"><small>'+t('dsx_tabs')+'</small><div style="flex:1 1 360px">'+U.tabs('noop',[{v:'a',lbl:t('tab_ingresos2'),n:71},{v:'b',lbl:t('tab_ingresos'),n:48},{v:'c',lbl:t('tab_agenda'),n:26}],'a','')+'</div></div>'
    +'<div class="fx-ds-row"><small>'+t('dsx_kpi')+'</small><div class="fx-kpis k3" style="flex:1 1 480px;margin:0"><div class="fx-kpi ok"><small>'+t('st_in')+'</small><b class="fx-num">6</b></div><div class="fx-kpi mid"><small>'+t('st_pend')+'</small><b class="fx-num">11</b></div><div class="fx-kpi bad"><small>'+t('st_blk')+'</small><b class="fx-num">1</b></div></div></div>'
    +'<div class="fx-ds-row"><small>'+t('dsx_sw')+'</small><button type="button" class="fx-switch on" role="switch" aria-checked="true" aria-label="on" data-fx="noop"><i></i></button><button type="button" class="fx-switch" role="switch" aria-checked="false" aria-label="off" data-fx="noop"><i></i></button></div>'
    +'<div class="fx-ds-row"><small>'+t('dsx_note')+'</small><div style="flex:1 1 360px">'+U.note('blk',I.alert,E(t('st_blk')))+U.note('pend',I.info,E(t('st_pend')))+'</div></div>';
  if(FX.sysTable)h+='<h2>'+t('h_tbl')+'</h2><p>'+t('h_tbl_p')+'</p>'+FX.sysTable();
  return h+'</div>';
}
VIEWS.system={render:renderSystem};

/* ── Delegación de eventos ── */
function evMenu(anchor){
  var D=db()||{},cur_=workEv(),act=D.activeEventId,evs=(D.eventos||[]).slice().sort(function(a,b){return (b.id===act)-(a.id===act)||String(b.ini||'').localeCompare(String(a.ini||''));});
  var h='<div class="lbl">'+t('evWork')+'</div>';
  evs.forEach(function(ev){var dd=evDates(ev);h+=U.mi('evset',cur_&&cur_.id===ev.id?I.check:null,E(ev.nombre),cur_&&cur_.id===ev.id?'on':'',' data-id="'+E(ev.id)+'"',[dd?E(rangeLbl(dd.a,dd.b)):'',ev.id===act?t('evActive'):''].filter(Boolean).join(', '));});
  if(tabOk('eventos'))h+='<hr>'+U.mi('go',I.cal,t('evManage'),'',' data-tab="eventos"');
  openMenu(anchor,h,false);
}
function userMenu(anchor){
  var u=cu()||{},dark=/dark|contrast/.test(document.documentElement.getAttribute('data-theme')||'');
  var role=(T[lang()]&&T[lang()]['r_'+u.rol])||u.rol||'';
  var h='<div class="who"><b>'+E(u.nombre||'')+'</b><small>'+E(role)+'</small>'+(u.email?'<small>'+E(u.email)+'</small>':'')+'</div><hr>';
  h+=U.mi('theme',dark?I.sun:I.moon,t(dark?'theme_light':'theme_dark'));
  h+=U.mi('lang',I.globe,t('language'));
  if(fn('exportDia')&&(can('isSA')||(fn('hasPerm')&&hasPerm('canSaveDay'))))h+=U.mi('backup',I.save,t('backup'));
  h+='<hr>'+U.mi('classic',I.back,t('classic'))+U.mi('logout',I.logout,t('logout'));
  openMenu(anchor,h,true);
}
A.noop=function(){};
A.go=function(el){fxGo(el.getAttribute('data-tab'));};
A.system=function(){closeMenu();FX.drawer.close();document.body.classList.remove('fx-navopen');S.page='system';scrollTop();fxSync();};
A.classic=function(){fxExit();};
A.ccib=function(){closeMenu();FX.drawer.close();document.body.classList.remove('fx-navopen');if(typeof window.buOpenCcib==='function')window.buOpenCcib();};
A.miba=function(){closeMenu();FX.drawer.close();document.body.classList.remove('fx-navopen');if(typeof window.buOpenMiba==='function')window.buOpenMiba();};
A.rail=function(){var r=!document.body.classList.contains('fx-rail');document.body.classList.toggle('fx-rail',r);lsSet(LS_RAIL,r?'1':'0');renderNav();};
A.nav=function(){document.body.classList.toggle('fx-navopen');};
A.navclose=function(){document.body.classList.remove('fx-navopen');};
A.ev=function(el){evMenu(el);};
A.evset=function(el,id){closeMenu();call('setUserWorkEvent',id);fxSyncSoon();};
A.search=function(){call('openGlobalSearch');};
A.map=function(){call('buOpenMapa');};
A.lang=function(){closeMenu();call('openLangPicker');};
A.user=function(el){userMenu(el);};
A.theme=function(){closeMenu();var dk=/dark|contrast/.test(document.documentElement.getAttribute('data-theme')||'');if(fn('selectTheme'))call('selectTheme',dk?'light':'dark');else call('applyTheme',dk?'light':'dark');fxSyncSoon();};
A.backup=function(){closeMenu();call('exportDia');};
A.logout=function(){closeMenu();FX.drawer.close();call('doLogout');};
A.qclr=function(el){var k=el.getAttribute('data-k');if(Q[k])Q[k]('');var qi=document.getElementById('fxQ-'+k);if(qi)setTimeout(function(){var n=document.getElementById('fxQ-'+k);if(n)n.focus();},30);};
A.moreRows=function(el){var k=el.getAttribute('data-k');S.lim[k]=(S.lim[k]||LIM)+LIM;fxSync();};
A.subBack=function(el){var v=VIEWS[el.getAttribute('data-tab')];if(v&&v.back){v.back();scrollTop();}};
A.drClose=function(){FX.drawer.close();};
document.addEventListener('click',function(e){
  if(!on())return;
  var el=e.target.closest&&e.target.closest('[data-fx]');
  if(el&&(el.closest('#fxNav,#fxTop,#fxMain,#fxLegacy,.fx-menu,#fxDrawer')||el.id==='fxScrim')){
    e.preventDefault();var a=el.getAttribute('data-fx');
    if(A[a]){try{A[a](el,el.getAttribute('data-id'),el.getAttribute('data-v'),e);}catch(err){console.error('[FUTURE] acción',a,err);}}
    return;
  }
  var row=e.target.closest&&e.target.closest('#fxMain [data-fxrow]');
  if(row&&!e.target.closest('button,a,input,select,label,textarea')){var src=row.getAttribute('data-src');if(ROW[src])ROW[src](row.getAttribute('data-fxrow'),row);}
});
document.addEventListener('input',function(e){
  if(!on())return;var q=e.target.closest&&e.target.closest('input[data-fxq]');if(!q)return;
  var k=q.getAttribute('data-fxq'),v=q.value;if(!Q[k])return;
  clearTimeout(QT[k]);QT[k]=setTimeout(function(){Q[k](v);},160);
});
document.addEventListener('pointerdown',function(e){if(MENU&&!MENU.el.contains(e.target)&&!MENU.anchor.contains(e.target))closeMenu();},true);
document.addEventListener('keydown',function(e){
  if(!on())return;
  if(e.key==='Escape'){if(MENU){closeMenu();e.stopPropagation();}else if(FX.drawer.isOpen()&&!document.querySelector('.ov.open')){FX.drawer.close();e.stopPropagation();}else document.body.classList.remove('fx-navopen');}
  if(e.key==='Enter'&&MENU&&e.target&&e.target.closest&&e.target.closest('.fx-range')){var ok=MENU.el.querySelector('.fx-range .fx-btn.pri');if(ok)ok.click();}
},true);
window.addEventListener('resize',function(){if(MENU)closeMenu();});

/* ── Enganches con la app existente (no cambian su comportamiento) ── */
function wrap(name,after){
  var o=window[name];if(typeof o!=='function'||o.__fx)return false;
  var w=function(){var r=o.apply(this,arguments);try{after.apply(this,arguments);}catch(e){console.warn('[FUTURE]',e);}return r;};
  w.__fx=true;w.__orig=o;window[name]=w;return true;
}
var _pendingWraps=[];
function wrapRender(name,tab){
  if(!wrap(name,function(){if(on()&&cur()===tab)fxSyncSoon();}))_pendingWraps.push([name,tab]);
}
FX.wrap=wrap;
function install(){
  addLauncher();updLauncher();
  wrap('goTab',function(){S.page=null;if(on())fxSyncSoon();});
  wrap('renderHdr',function(){updLauncher();if(!on()&&lsGet(LS_MODE)==='1'&&allowed())fxEnter();else if(on())fxSyncSoon();});
  wrap('setSyncStatus',function(){if(on())renderTop();});
  wrap('applyTheme',function(){if(on())fxSyncSoon();});
  wrap('doLogout',function(){closeMenu();FX.drawer.close();document.body.classList.remove('fx','fx-native','fx-navopen');tame(false);updLauncher();});
  wrap('closeOv',function(){if(on())fxSyncSoon();});
  wrap('setFormPrintMode',function(){if(on())tame(true);});
  _pendingWraps.splice(0).forEach(function(p){wrapRender(p[0],p[1]);});
  if(/[?&]clasica\b/.test(location.search))lsSet(LS_MODE,null);
  else if(/[?&]future\b/.test(location.search))lsSet(LS_MODE,'1');
  if(lsGet(LS_MODE)==='1'&&allowed())fxEnter();
}
FX.addT({es:{h_more:'Más componentes',h_more_p:'Pestañas de sección, indicadores, interruptores y avisos. Siempre los mismos colores de estado.',dsx_tabs:'Pestañas de sección',dsx_kpi:'Indicadores',dsx_sw:'Interruptor',dsx_note:'Avisos'},
 en:{h_more:'More components',h_more_p:'Section tabs, indicators, switches and notices. Always the same status colours.',dsx_tabs:'Section tabs',dsx_kpi:'Indicators',dsx_sw:'Switch',dsx_note:'Notices'},
 de:{h_more:'Weitere Komponenten',h_more_p:'Bereichsreiter, Kennzahlen, Schalter und Hinweise. Immer dieselben Statusfarben.',dsx_tabs:'Bereichsreiter',dsx_kpi:'Kennzahlen',dsx_sw:'Schalter',dsx_note:'Hinweise'}});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else setTimeout(install,0);
})();
