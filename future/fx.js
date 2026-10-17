/* ════════════════════════════════════════════════════════════════════════
   BeUnifyT FUTURE · interfaz nueva (2026-10-17)
   Capa aislada: no cambia datos ni funciones. Dibuja una navegación y unas
   pantallas nuevas encima de las funciones existentes (mismo DB, mismos
   permisos, mismas acciones). Botón FUTURE a la derecha de DATOS (solo SA).
   Salir: menú de usuario → Vista clásica, o abrir INDEX.html?clasica
   Quitar todo: borrar la carpeta future/ y las 2 líneas FUTURE de INDEX.html.
   ════════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
if(window.__fxLoaded)return;window.__fxLoaded=true;

var FX_VER='1.0 (etapa 1)';
var LS_MODE='bu_fx_mode',LS_RAIL='bu_fx_rail';
var LIM=150;
var NATIVE={};            // pestañas con diseño nuevo
var S={page:null,ing2:{status:null,lim:LIM,fkey:'',seen:null},lay:'table',wide:false};

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
  info:sv('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>')
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
function lang(){var c='es';try{c=CUR_LANG||'es';}catch(e){}return c==='de'?'de':c==='es'?'es':'en';}
function loc(){return {es:'es-ES',en:'en-GB',de:'de-DE'}[lang()];}
function t(k,a){var d=T[lang()]||T.es,s=(d[k]!=null?d[k]:(T.es[k]!=null?T.es[k]:k));if(a)for(var x in a)s=s.split('{'+x+'}').join(a[x]);return s;}

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
function allowed(){var u=cu();return !!(u&&u.rol!=='empresa'&&u.rol==='superadmin');}
function lsGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function lsSet(k,v){try{if(v==null)localStorage.removeItem(k);else localStorage.setItem(k,v);}catch(e){}}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);}
function parseTs(s){if(!s)return null;s=String(s);var m=s.match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?/g);if(!m)return null;var x=m[m.length-1].match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?/);return {ymd:x[1]+'-'+x[2]+'-'+x[3],y:+x[1],mo:+x[2],d:+x[3],hm:x[4]?x[4]+':'+x[5]:''};}
function dayLbl(ymd){if(!ymd)return '';var p=ymd.split('-');try{return new Intl.DateTimeFormat(loc(),{day:'numeric',month:'short'}).format(new Date(+p[0],+p[1]-1,+p[2]));}catch(e){return p[2]+'/'+p[1];}}
function rangeLbl(a,b){if(!a&&!b)return '';if(!a||!b||a===b)return dayLbl(a||b);var pa=a.split('-'),pb=b.split('-');try{var f=new Intl.DateTimeFormat(loc(),{day:'numeric',month:'short'});var da=new Date(+pa[0],+pa[1]-1,+pa[2]),dbb=new Date(+pb[0],+pb[1]-1,+pb[2]);return f.formatRange?f.formatRange(da,dbb):f.format(da)+' – '+f.format(dbb);}catch(e){return dayLbl(a)+' – '+dayLbl(b);}}
function workEv(){var ev=null;try{ev=(fn('getUserWorkEvent')&&getUserWorkEvent())||(fn('getActiveEvent')&&getActiveEvent())||null;}catch(e){}return ev;}
function evDates(ev){if(!ev)return null;var a=ev.ini||ev.fechaDesde||ev.fechaInicio||ev.fechaIni||ev.desde||'',b=ev.fin||ev.fechaHasta||ev.fechaFin||ev.fechaTermina||ev.hasta||'';return (a||b)?{a:a,b:b}:null;}
var CC={'ESPAÑA':'E','ESPANA':'E','SPAIN':'E','SPANIEN':'E','POLONIA':'PL','POLAND':'PL','POLEN':'PL','ALEMANIA':'D','GERMANY':'D','DEUTSCHLAND':'D','FRANCIA':'F','FRANCE':'F','FRANKREICH':'F','ITALIA':'I','ITALY':'I','ITALIEN':'I','PORTUGAL':'P','PAISES BAJOS':'NL','PAÍSES BAJOS':'NL','HOLANDA':'NL','NETHERLANDS':'NL','BELGICA':'B','BÉLGICA':'B','BELGIUM':'B','UCRANIA':'UA','UKRAINE':'UA','RUMANIA':'RO','RUMANÍA':'RO','ROMANIA':'RO','BULGARIA':'BG','LITUANIA':'LT','LITHUANIA':'LT','AUSTRIA':'A','CHEQUIA':'CZ','REPUBLICA CHECA':'CZ','REPÚBLICA CHECA':'CZ','HUNGRIA':'H','HUNGRÍA':'H','ESLOVAQUIA':'SK','TURQUIA':'TR','TURQUÍA':'TR','REINO UNIDO':'UK','UNITED KINGDOM':'UK','SUIZA':'CH'};
function plateCC(p){if(!p)return '';p=String(p).trim().toUpperCase();if(/^[A-Z]{1,3}$/.test(p))return p==='ES'?'E':p==='DE'?'D':p==='FR'?'F':p==='IT'?'I':p==='PT'?'P':p;return CC[p]||'';}
function plate(m,cc,cls){return '<span class="fx-plate'+(cls?' '+cls:'')+'"><i>'+E(cc||'')+'</i><b>'+E(m||'–')+'</b></span>';}
function btn(act,ico,lbl,cls,extra){return '<button type="button" class="fx-btn'+(cls?' '+cls:'')+'" data-fx="'+act+'"'+(extra||'')+'>'+(ico||'')+(lbl?'<span>'+lbl+'</span>':'')+'</button>';}
function ibtn(act,ico,tip,cls,extra){return '<button type="button" class="fx-btn ico'+(cls?' '+cls:'')+'" data-fx="'+act+'" aria-label="'+E(tip)+'" data-fx-tip="'+E(tip)+'"'+(extra||'')+'>'+ico+'</button>';}

/* ── Navegación ── */
var GROUPS=[
  {k:'op',tabs:['ingresos2','ingresos','agenda','mensajes']},
  {k:'per',tabs:['conductores','flota','empresas']},
  {k:'cfg',tabs:['recintos','eventos','impresion','usuarios','auditoria','papelera']},
  {k:'dat',tabs:['dash','analytics','vehiculos','btnstats']}
];
var TAB_ICO={ingresos2:I.truck,ingresos:I.clip,agenda:I.calclock,mensajes:I.msg,conductores:I.idcard,flota:I.pkg,empresas:I.bldg,recintos:I.venue,eventos:I.cal,impresion:I.printer,usuarios:I.users,auditoria:I.folder,papelera:I.trash,dash:I.grid,analytics:I.chart,vehiculos:I.hist,btnstats:I.pointer};
function tabOk(tab){var b=document.querySelector('#mainTabs .btn-tab[data-tab="'+tab+'"]');return !!b&&b.getAttribute('data-perm-hidden')!=='1';}
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
  var ct=S.page?null:cur(),b=badges(),h='';
  GROUPS.forEach(function(g){
    var items=g.tabs.filter(tabOk);if(!items.length)return;
    h+='<div class="fx-ngrp"><div class="fx-nh">'+t('g_'+g.k)+'</div>';
    items.forEach(function(tab){
      var n=b[tab];
      h+='<button type="button" class="fx-ni'+(ct===tab?' on':'')+'" data-fx="go" data-tab="'+tab+'"'+(n?' data-badge="'+(BADGE_CLS[tab]||'t')+'"':'')+' title="'+E(t('tab_'+tab))+'">'+TAB_ICO[tab]+'<span>'+t('tab_'+tab)+'</span>'+(NATIVE[tab]?'<i class="new" aria-hidden="true"></i>':'')+(n?'<em class="'+(BADGE_CLS[tab]||'')+'">'+n+'</em>':'')+'</button>';
    });
    h+='</div>';
  });
  var rail=document.body.classList.contains('fx-rail');
  nav.innerHTML='<div class="fx-brand">'+LOGO+'<span class="fx-word"><b>Be</b>Unify<b>T</b></span></div>'
    +'<div class="fx-navscroll">'+h+'</div>'
    +'<div class="fx-navfoot">'
    +'<button type="button" class="fx-ni'+(S.page==='system'?' on':'')+'" data-fx="system" title="'+E(t('sys'))+'">'+I.palette+'<span>'+t('sys')+'</span></button>'
    +'<button type="button" class="fx-ni" data-fx="classic" title="'+E(t('classic'))+'">'+I.back+'<span>'+t('classic')+'</span></button>'
    +'<button type="button" class="fx-ni fx-railbtn" data-fx="rail" title="'+E(t(rail?'expand':'collapse'))+'">'+(rail?I.panelR:I.panel)+'<span>'+t(rail?'expand':'collapse')+'</span></button>'
    +'<div class="fx-copy">BeUnifyT FUTURE '+E(FX_VER)+'</div>'
    +'</div>';
}
function syncState(){var d=document.getElementById('syncDot'),c=d?d.className:'';return /sd-g/.test(c)?'ok':/sd-r/.test(c)?'err':/sd-o/.test(c)?'off':'wait';}
function renderTop(){
  var top=document.getElementById('fxTop');if(!top)return;
  var ev=workEv(),dd=evDates(ev),u=cu()||{},ss=syncState();
  var ini=String(u.nombre||'?').trim().split(/\s+/).map(function(w){return w.charAt(0);}).join('').slice(0,2).toUpperCase();
  var evSmall=ev?[dd?rangeLbl(dd.a,dd.b):'',ev.recinto||''].filter(Boolean):[];
  top.innerHTML=ibtn('nav',I.menu,t('openNav'),'ghost fx-burger')
    +'<button type="button" class="fx-ev" data-fx="ev" aria-haspopup="menu"><span class="fx-ev-ico">'+I.venue+'</span><span class="fx-ev-t"><b>'+E(ev?ev.nombre:t('noEvent'))+'</b>'+(evSmall.length?'<small>'+evSmall.map(E).join(', ')+'</small>':'')+'</span>'+I.chev+'</button>'
    +'<button type="button" class="fx-q" data-fx="search" aria-label="'+E(t('search'))+'">'+I.search+'<span>'+t('search')+'</span><kbd>/</kbd></button>'
    +'<div class="fx-tr">'
    +(fn('buOpenMapa')?'<button type="button" class="fx-btn ghost" data-fx="map" aria-label="'+E(t('map'))+'">'+I.map+'<span class="fx-hide-s">'+t('map')+'</span></button>':'')
    +'<span class="fx-sync '+ss+'" title="'+E(t('sync_'+ss))+'"><i></i><span>'+t('sync_'+ss)+'</span></span>'
    +'<button type="button" class="fx-btn ghost fx-hide-s" data-fx="lang" aria-label="'+E(t('language'))+'">'+I.globe+'<span>'+lang().toUpperCase()+'</span></button>'
    +'<button type="button" class="fx-av" data-fx="user" aria-haspopup="menu" aria-label="'+E(u.nombre||'')+'">'+E(ini)+'</button>'
    +'</div>';
}
function legacyNote(tab){
  var am=document.getElementById('appMain');if(!am)return;
  var n=document.getElementById('fxLegacy');
  if(!n){n=document.createElement('div');n.id='fxLegacy';am.insertBefore(n,am.firstChild);}
  var f=IF(),sub=tab==='ingresos2'&&f&&(f._sub2||'lista')!=='lista';
  n.innerHTML=I.info+'<span>'+t('legacy')+'</span>'+(sub?btn('i2list',I.back,t('backList'),'sm'):'');
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
function mi(act,ico,lbl,cls,extra,sub){return '<button type="button" role="menuitem" class="'+(cls||'')+'" data-fx="'+act+'"'+(extra||'')+'>'+(ico||'')+'<span>'+lbl+(sub?'<small>'+sub+'</small>':'')+'</span></button>';}

/* ── Armazón ── */
function loadFonts(){
  if(document.getElementById('fxFonts'))return;
  var l=document.createElement('link');l.id='fxFonts';l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Semi+Condensed:wght@500;600;700&display=swap';
  document.head.appendChild(l);
}
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
  var b=document.createElement('button');b.type='button';b.id='fxLaunch';b.className='fx-launch';b.title='BeUnifyT FUTURE';
  b.innerHTML=I.spark+'<span>Future</span>';b.setAttribute('aria-label','FUTURE');
  b.addEventListener('click',function(){fxEnter();});
  bar.appendChild(b);
}
function updLauncher(){var b=document.getElementById('fxLaunch');if(b)b.classList.toggle('on',allowed());}

function fxEnter(){
  if(!allowed())return;
  loadFonts();buildShell();
  document.body.classList.add('fx');
  var rp=lsGet(LS_RAIL);document.body.classList.toggle('fx-rail',rp==='1'||(rp==null&&window.innerWidth<1280));
  lsSet(LS_MODE,'1');
  fxSync();
}
function fxExit(){
  closeMenu();
  document.body.classList.remove('fx','fx-native','fx-navopen','fx-rail');
  lsSet(LS_MODE,null);S.page=null;
  var c=cur();if(c&&fn('goTab'))call('goTab',c);
  call('tgSyncGroupToActiveTab');
}
window.fxEnter=fxEnter;window.fxExit=fxExit;

var _raf=0;
function fxSyncSoon(){if(_raf||!on())return;_raf=requestAnimationFrame(function(){_raf=0;fxSync();});}
function fxSync(){
  if(!on())return;
  if(!allowed()){fxExit();return;}
  renderNav();renderTop();
  var key=S.page||cur(),v=NATIVE[key],nat=!!(v&&(!v.when||v.when()));
  document.body.classList.toggle('fx-native',nat);
  if(nat){
    measure();
    var main=document.getElementById('fxMain'),ae=document.activeElement,aid=ae&&ae.id,ss=null,se=null;
    if(aid&&main.contains(ae)&&ae.setSelectionRange){ss=ae.selectionStart;se=ae.selectionEnd;}
    main.innerHTML=v.render();
    if(aid){var n=document.getElementById(aid);if(n&&main.contains(n)){try{n.focus({preventScroll:true});if(ss!=null)n.setSelectionRange(ss,se);}catch(e){}}}
  } else legacyNote(key);
}
function layKey(){var m=document.getElementById('fxMain'),w=(m&&m.clientWidth)||window.innerWidth;return {lay:w<640?'cards':w<1060?'list':'table',wide:w>=1360};}
function measure(){var k=layKey();S.lay=k.lay;S.wide=k.wide;}
var _ro=null;
function watchSize(){
  var m=document.getElementById('fxMain');if(!m||_ro||typeof ResizeObserver==='undefined')return;
  _ro=new ResizeObserver(function(){if(!on()||!document.body.classList.contains('fx-native'))return;var k=layKey();if(k.lay!==S.lay||k.wide!==S.wide)fxSyncSoon();});
  _ro.observe(m);
}
function scrollTop(){['fxMain','appMain'].forEach(function(id){var e=document.getElementById(id);if(e)e.scrollTop=0;});}
function fxGo(tab){
  closeMenu();document.body.classList.remove('fx-navopen');
  if(tab==='btnstats'){call('tgShowStats');return;}
  S.page=null;
  var f=IF();if(tab==='ingresos2'&&f&&f._sub2&&f._sub2!=='lista'){f._sub2='lista';window._subRestored_ingresos2=true;call('_saveSubTab','ingresos2','lista');}
  var b=document.querySelector('#mainTabs .btn-tab[data-tab="'+tab+'"]');
  call('goTab',tab,b);call('tgSyncGroupToActiveTab');
  scrollTop();fxSyncSoon();
}

/* ════════════ INGRESOS (ingresos2) ════════════ */
function i2Status(){var f=IF()||{};if(f.activos2)return 'in';return S.ing2.status==='out'?'out':'all';}
function i2Data(){
  var D=db()||{},f=IF()||{};
  if(f._dateMode2==='evento'&&!f.fecha2&&!f.fechaDesde2&&!f.fechaHasta2&&fn('_getEventDates')){var e=_getEventDates();if(e){f.fechaDesde2=e.desde;f.fechaHasta2=e.hasta;}}
  var items=(D.ingresos2||[]).slice();
  var ev=fn('getUserWorkEventId')?getUserWorkEventId():null;
  if(ev)items=items.filter(function(i){return !i.eventoId||i.eventoId===ev;});
  var q=(f.q2||'').toLowerCase();
  if(q)items=items.filter(function(i){return [i.pos,i.matricula,i.nombre,i.apellido,i.empresa,i.llamador,i.referencia,(i.halls||[i.hall||'']).join(' '),i.stand,i.remolque,i.montador,i.expositor,i.comentario,i.telefono,i.email,i.pasaporte,i.eventoNombre,i.puertaHall,i.tipoCarga].map(function(x){return x==null?'':x;}).join(' ').toLowerCase().indexOf(q)>=0;});
  if(f.hall2)items=items.filter(function(i){return (i.halls||[i.hall||'']).indexOf(f.hall2)>=0;});
  if(f.fechaDesde2||f.fechaHasta2)items=items.filter(function(i){return _dateRangePass(i.entrada,f.fechaDesde2,f.fechaHasta2,'');});
  else if(f.fecha2)items=items.filter(function(i){return i.entrada&&String(i.entrada).slice(0,10)===f.fecha2;});
  var nIn=0,nOut=0;items.forEach(function(i){if(i.salida)nOut++;else nIn++;});
  var all=items.length,st=i2Status();
  if(st==='in')items=items.filter(function(i){return !i.salida;});else if(st==='out')items=items.filter(function(i){return !!i.salida;});
  var s=fn('getSort')?getSort('ingresos2'):{},col=s.col||'pos',dir=s.dir||'asc';
  if(fn('sortArr'))items=sortArr(items,col,dir);
  if(!q&&col==='pos'){dir='asc';items.sort(function(a,b){var pa=parseInt(a.pos)||0,pb=parseInt(b.pos)||0;return pa!==pb?pa-pb:String(a.matricula||'').localeCompare(String(b.matricula||''));});}
  return {items:items,all:all,nIn:nIn,nOut:nOut,col:col,dir:dir};
}
function i2DateMode(){
  var f=IF()||{},td=todayStr(),e=fn('_getEventDates')?_getEventDates():null,m=f._dateMode2||'';
  if(m==='hoy'||(f.fecha2===td&&!f.fechaDesde2&&!f.fechaHasta2))return 'hoy';
  if(m==='ayer')return 'ayer';
  if(m==='evento'||(e&&f.fechaDesde2===e.desde&&f.fechaHasta2===e.hasta))return 'evento';
  if(f.fechaDesde2||f.fechaHasta2||f.fecha2)return 'rango';
  return 'all';
}
function colOn(k){try{return fn('_isColVisible')?_isColVisible('ingresos2',k):true;}catch(e){return true;}}
function th(col,lbl,d){
  if(!col)return '<th>'+lbl+'</th>';
  var on_=d.col===col,ic=on_?(d.dir==='asc'?I.sortUp:I.sortDown):I.sort;
  return '<th aria-sort="'+(on_?(d.dir==='asc'?'ascending':'descending'):'none')+'"><button type="button" class="fx-th'+(on_?' on':'')+'" data-fx="i2sort" data-col="'+col+'">'+lbl+ic+'</button></th>';
}
function i2Head(d){
  return '<thead><tr>'+th('pos',t('c_pos'),d)+th('matricula',t('c_plate'),d)
    +(colOn('referencia')?th('referencia',t('c_ref'),d):'')
    +th('empresa',t('c_comp'),d)
    +(S.wide&&colOn('conductor')?th('nombre',t('c_driver'),d):'')
    +(colOn('hall')?th(null,t('c_hall'),d):'')
    +th('salida',t('c_state'),d)+'<th><span class="fx-sr">'+t('more')+'</span></th></tr></thead>';
}
function outLbl(i){var s=parseTs(i.salida),e=parseTs(i.entrada);if(!s)return t('s_out',{t:''}).trim();return t('s_out',{t:(e&&e.ymd===s.ymd||!e)?s.hm||dayLbl(s.ymd):dayLbl(s.ymd)+' '+s.hm});}
function stCell(i,single){
  var e=parseTs(i.entrada);
  return (i.salida?'<span class="fx-st out">'+E(outLbl(i))+'</span>':'<span class="fx-st in">'+t('s_in')+'</span>')
    +(e?'<span class="fx-meta fx-num">'+E(t('s_since',{t:(single?'':dayLbl(e.ymd)+', ')+(e.hm||'')}))+'</span>':'');
}
function hallHtml(i){var halls=(i.halls||[i.hall||'']).filter(Boolean);return halls.map(function(x){return '<span class="fx-hall">'+E(x)+'</span>';}).join('');}
function i2Actions(i){
  var id=E(i.id),h='';
  h+=ibtn('i2print',I.printer,t('a_print'),'ghost sm',' data-id="'+id+'"');
  h+=ibtn('i2ramp',I.ticket,t('a_ramp'),'ghost sm',' data-id="'+id+'"');
  if(!i.salida&&can('canStatus'))h+=btn('i2out',I.exit,t('a_out'),'go sm',' data-id="'+id+'"');
  h+=ibtn('i2more',I.more,t('more'),'ghost sm',' data-id="'+id+'" aria-haspopup="menu"');
  return '<div class="fx-acts">'+h+'</div>';
}
function i2Row(i,single,isNew){
  var inV=!i.salida,hh=hallHtml(i);
  var drv=[i.nombre,i.apellido].filter(Boolean).join(' '),tel=((i.telPais||'')+' '+(i.telefono||'')).trim();
  var h='<tr class="'+(inV?'in':'out')+(isNew?' fx-new':'')+'" data-fxrow="'+E(i.id)+'">';
  h+='<td class="c-pos">'+(i.pos?E(i.pos):'<span class="fx-dash">–</span>')+'</td>';
  h+='<td class="c-plate">'+plate(i.matricula,plateCC(i.pais))+(i.remolque&&colOn('remolque')?'<br>'+plate(i.remolque,'','sm'):'')+'</td>';
  if(colOn('referencia'))h+='<td class="c-ref">'+(i.referencia?'<span class="fx-code">'+E(i.referencia)+'</span>':'<span class="fx-dash">–</span>')+(i.llamador&&colOn('llamador')?'<span class="fx-meta">'+E(t('pager',{n:i.llamador}))+'</span>':'')+'</td>';
  h+='<td class="c-txt"><span class="fx-strong fx-ell">'+(i.empresa?E(i.empresa):'<span class="fx-dash">–</span>')+'</span>'+(i.expositor&&i.expositor!==i.empresa?'<span class="fx-meta">'+E(i.expositor)+'</span>':'')+'</td>';
  if(S.wide&&colOn('conductor'))h+='<td class="c-txt"><span class="fx-ell">'+(drv?E(drv):'<span class="fx-dash">–</span>')+'</span>'+(tel&&colOn('telefono')?'<span class="fx-meta fx-num">'+E(tel)+'</span>':'')+'</td>';
  if(colOn('hall'))h+='<td class="c-hall">'+(hh||'<span class="fx-dash">–</span>')+(i.stand&&colOn('stand')?'<span class="fx-meta">'+E(t('stand',{s:i.stand}))+'</span>':'')+'</td>';
  h+='<td class="c-st">'+stCell(i,single)+'</td>';
  h+='<td class="c-act">'+i2Actions(i)+'</td>';
  return h+'</tr>';
}
function i2Li(i,single,isNew){
  var inV=!i.salida,hh=hallHtml(i),drv=[i.nombre,i.apellido].filter(Boolean).join(' '),meta=[];
  if(i.referencia&&colOn('referencia'))meta.push('<span class="fx-code">'+E(i.referencia)+'</span>');
  if(hh)meta.push('<span>'+hh+(i.stand?' &nbsp;'+E(t('stand',{s:i.stand})):'')+'</span>');
  var e=parseTs(i.entrada);if(e)meta.push('<span class="fx-num">'+E(t('s_since',{t:(single?'':dayLbl(e.ymd)+', ')+(e.hm||'')}))+'</span>');
  if(drv&&colOn('conductor'))meta.push('<span class="fx-ell">'+E(drv)+'</span>');
  var h='<div class="fx-li '+(inV?'in':'out')+(isNew?' fx-new':'')+'" data-fxrow="'+E(i.id)+'">';
  h+='<span class="c-pos">'+(i.pos?E(i.pos):'')+'</span>';
  h+='<span class="li-plate">'+plate(i.matricula,plateCC(i.pais))+(i.remolque&&colOn('remolque')?plate(i.remolque,'','sm'):'')+'</span>';
  h+='<span class="li-main"><b>'+E(i.empresa||'–')+'</b>'+(meta.length?'<span class="li-meta">'+meta.join('')+'</span>':'')+'</span>';
  h+='<span class="li-st">'+(inV?'<span class="fx-st in">'+t('s_in')+'</span>':'<span class="fx-st out">'+E(outLbl(i))+'</span>')+'</span>';
  h+='<span class="li-act">'+i2Actions(i)+'</span>';
  return h+'</div>';
}
function renderIng2(){
  var f=IF()||{},d=i2Data(),ev=workEv(),dm=i2DateMode(),st=i2Status(),e=fn('_getEventDates')?_getEventDates():null;
  var fkey=[f.q2,f.hall2,f.fecha2,f.fechaDesde2,f.fechaHasta2,st,d.col,d.dir].join('|');
  if(fkey!==S.ing2.fkey){S.ing2.lim=LIM;}
  var prev=S.ing2.fkey===fkey?S.ing2.seen:null,seen={};
  S.ing2.fkey=fkey;
  var single=dm==='hoy'||dm==='ayer'||(!!f.fecha2&&!f.fechaDesde2&&!f.fechaHasta2);
  var h='<div class="fx-page" data-view="ingresos2">';
  /* cabecera */
  h+='<div class="fx-ph"><div><h1 class="fx-h1">'+t('tab_ingresos2')+'</h1><p class="fx-sub">'+(ev?t('i2_sub_ev',{ev:E(ev.nombre)}):t('i2_sub'))+'</p></div><div class="fx-acts">';
  if(can('canImport'))h+='<button type="button" class="fx-btn" data-fx="i2import" aria-haspopup="menu">'+I.up+'<span>'+t('import')+'</span></button>';
  if(can('canExport'))h+=btn('i2export',I.down,t('export'));
  h+=ibtn('i2opts',I.more,t('more'),'',' aria-haspopup="menu"');
  if(can('canAdd'))h+=btn('i2new',I.plus,t('i2_new'),'pri');
  h+='</div></div>';
  /* filtros */
  h+='<div class="fx-bar"><label class="fx-search">'+I.search+'<input type="search" id="fxQ-ing2" data-fxq="ing2" autocomplete="off" spellcheck="false" placeholder="'+E(t('q_ph'))+'" value="'+E(f.q2||'')+'">'+(f.q2?'<button type="button" class="fx-clr" data-fx="i2qclr" aria-label="'+E(t('clear'))+'">'+I.x+'</button>':'')+'</label>';
  h+='<div class="fx-seg" role="group" aria-label="'+E(t('c_state'))+'">'
    +'<button type="button" class="'+(st==='all'?'on':'')+'" data-fx="i2st" data-v="all" aria-pressed="'+(st==='all')+'">'+t('st_all')+' <b>'+d.all+'</b></button>'
    +'<button type="button" class="'+(st==='in'?'on':'')+'" data-fx="i2st" data-v="in" aria-pressed="'+(st==='in')+'"><i style="background:var(--fx-teal)"></i>'+t('st_in')+' <b>'+d.nIn+'</b></button>'
    +'<button type="button" class="'+(st==='out'?'on':'')+'" data-fx="i2st" data-v="out" aria-pressed="'+(st==='out')+'"><i style="background:var(--fx-slate)"></i>'+t('st_out')+' <b>'+d.nOut+'</b></button>'
    +'</div></div>';
  h+='<div class="fx-bar"><div class="fx-seg" role="group" aria-label="'+E(t('d_range'))+'">'
    +'<button type="button" class="'+(dm==='hoy'?'on':'')+'" data-fx="i2date" data-v="hoy">'+t('d_today')+'</button>'
    +'<button type="button" class="'+(dm==='ayer'?'on':'')+'" data-fx="i2date" data-v="ayer">'+t('d_yday')+'</button>'
    +(e?'<button type="button" class="'+(dm==='evento'?'on':'')+'" data-fx="i2date" data-v="evento" title="'+E(rangeLbl(e.desde,e.hasta))+'">'+t('d_event')+'</button>':'')
    +'<button type="button" class="'+(dm==='all'?'on':'')+'" data-fx="i2date" data-v="clear">'+t('d_all')+'</button>'
    +'</div>';
  var rl=(dm==='rango'||dm==='evento')?rangeLbl(f.fechaDesde2,f.fechaHasta2):(dm==='hoy'||dm==='ayer')?dayLbl(f.fecha2):'';
  h+='<button type="button" class="fx-btn'+(dm==='rango'?' go':'')+'" data-fx="i2range" aria-haspopup="menu">'+I.cal+'<span>'+(rl?E(rl):t('d_range'))+'</span></button>';
  var halls=fn('getRecintoHalls')?getRecintoHalls():[];
  if(halls&&halls.length){
    h+='<span class="fx-grow"></span><div class="fx-tiles" role="group" aria-label="'+E(t('hall'))+'"><span class="fx-lbl">'+t('hall')+'</span>'
      +'<button type="button" class="fx-tile txt'+(!f.hall2?' on':'')+'" data-fx="i2hall" data-v="">'+t('st_all')+'</button>'
      +halls.map(function(x){return '<button type="button" class="fx-tile'+(f.hall2===x?' on':'')+'" data-fx="i2hall" data-v="'+E(x)+'">'+E(x)+'</button>';}).join('')+'</div>';
  }
  h+='</div>';
  /* lista */
  var list=d.items.slice(0,S.ing2.lim);
  list.forEach(function(i){seen[i.id]=1;});
  if(!d.items.length){
    h+='<div class="fx-empty"><h3>'+t('empty_t')+'</h3><p>'+t('empty_p')+'</p><div class="fx-acts">'+(dm!=='all'?btn('i2date',I.cal,t('empty_all'),'',' data-v="clear"'):'')+(can('canAdd')?btn('i2new',I.plus,t('i2_new'),'pri'):'')+'</div></div>';
  } else if(S.lay!=='table'){
    h+='<div class="fx-list'+(S.lay==='cards'?' cards':'')+'">'+list.map(function(i){return i2Li(i,single,prev&&!prev[i.id]);}).join('')+'</div>';
  } else {
    h+='<div class="fx-tblwrap"><table class="fx-tbl">'+i2Head(d)+'<tbody>'+list.map(function(i){return i2Row(i,single,prev&&!prev[i.id]);}).join('')+'</tbody></table></div>';
  }
  if(d.items.length)h+='<div class="fx-foot"><span class="fx-num">'+t('showing',{a:list.length,b:d.items.length})+'</span>'+(d.items.length>list.length?btn('i2moreRows',null,t('showMore',{n:Math.min(LIM,d.items.length-list.length)}),'sm'):'')+'</div>';
  h+='</div>';
  S.ing2.seen=seen;
  return h;
}
NATIVE.ingresos2={when:function(){var f=IF();return !f||(f._sub2||'lista')==='lista';},render:renderIng2};
function i2Rerender(){call('renderIngresos2');}
var _qT=0;

/* ════════════ SISTEMA DE DISEÑO ════════════ */
function renderSystem(){
  function sw(name,role,col,bd){return '<div><span style="background:'+col+(bd?';border-bottom:1px solid var(--fx-line)':'')+'"></span><p><b>'+name+'</b>'+role+'<br><span class="fx-num">'+col+'</span></p></div>';}
  var h='<div class="fx-page fx-ds">';
  h+='<div class="fx-ph"><div><h1 class="fx-h1">'+t('sys')+'</h1><p class="fx-sub">'+t('ds_sub')+'</p></div><div class="fx-acts"><span class="fx-lbl">'+t('ver')+' '+E(FX_VER)+'</span></div></div>';
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
    +'<div class="fx-ds-row"><small>'+t('b_pri')+'</small>'+btn('',I.plus,t('i2_new'),'pri')+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_sec')+'</small>'+btn('',I.down,t('export'))+btn('',I.exit,t('a_out'),'go')+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_ghost')+'</small>'+btn('',I.map,t('map'),'ghost')+btn('',I.printer,t('a_print'),'ghost')+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_dng')+'</small>'+btn('',I.trash,t('a_del'),'dng')+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_ico')+'</small>'+ibtn('',I.printer,t('a_print'),'ghost')+ibtn('',I.ticket,t('a_ramp'),'ghost')+ibtn('',I.more,t('more'))+'</div>'
    +'<div class="fx-ds-row"><small>'+t('b_sm')+'</small>'+btn('',I.exit,t('a_out'),'go sm')+btn('',null,t('showMore',{n:150}),'sm')+'</div>';
  h+='<h2>'+t('h_ctl')+'</h2><p>'+t('h_ctl_p')+'</p>'
    +'<div class="fx-ds-row"><label class="fx-search" style="flex:1 1 320px">'+I.search+'<input type="search" placeholder="'+E(t('q_ph'))+'" tabindex="-1"></label>'
    +'<div class="fx-seg"><button type="button" class="on">'+t('st_all')+' <b>203</b></button><button type="button"><i style="background:var(--fx-teal)"></i>'+t('st_in')+' <b>2</b></button><button type="button"><i style="background:var(--fx-slate)"></i>'+t('st_out')+' <b>201</b></button></div></div>'
    +'<div class="fx-ds-row"><div class="fx-seg"><button type="button" class="on">'+t('d_today')+'</button><button type="button">'+t('d_yday')+'</button><button type="button">'+t('d_event')+'</button><button type="button">'+t('d_all')+'</button></div>'
    +'<div class="fx-tiles"><button type="button" class="fx-tile txt on">'+t('st_all')+'</button><button type="button" class="fx-tile">2</button><button type="button" class="fx-tile">3</button><button type="button" class="fx-tile">5</button><button type="button" class="fx-tile">8.1</button></div></div>';
  h+='<h2>'+t('h_state')+'</h2><p>'+t('p2')+'</p>'
    +'<div class="fx-ds-row"><span class="fx-st in">'+t('s_in')+'</span><span class="fx-st pend">'+t('st_pend')+'</span><span class="fx-st out">'+t('s_out',{t:'14:32'})+'</span><span class="fx-st blk">'+t('st_blk')+'</span></div>';
  h+='<h2>'+t('h_plate')+'</h2><p>'+t('h_plate_p')+'</p>'
    +'<div class="fx-ds-row">'+plate('4183JBT','E','lg')+plate('B KX 4471','D','lg')+plate('WGM87933','PL','lg')+'</div>'
    +'<div class="fx-ds-row">'+plate('ZFBD148','')+plate('R5244BCG','','sm')+'<span class="fx-hall">2</span><span class="fx-hall">3</span><span class="fx-hall">5</span><span class="fx-hall">8.1</span></div>';
  var demo=[{id:'d1',pos:'4',matricula:'4183JBT',pais:'E',remolque:'R5244BCG',referencia:'044-260521-0193',empresa:'Pirata Transportes',nombre:'Ángel',apellido:'Bozada',telPais:'+34',telefono:'685 291 439',halls:['3'],stand:'B18',entrada:todayStr()+' 14:02:11'},
    {id:'d2',pos:'14',matricula:'WGM87933',pais:'PL',referencia:'058-260521-0207',empresa:'DSV Contract Logistics',expositor:'Plockmatic Group',nombre:'Dzmitry',apellido:'Karyshau',telPais:'+48',telefono:'721 018 845',halls:['2'],stand:'A6',entrada:todayStr()+' 09:41:52',salida:todayStr()+' 12:18:03'}];
  var noop=function(s){return s.replace(/data-fxrow="[^"]*"/g,'').replace(/data-fx="[^"]*"/g,'data-fx="noop"');};
  h+='<h2>'+t('h_tbl')+'</h2><p>'+t('h_tbl_p')+'</p><div class="fx-tblwrap"><table class="fx-tbl">'+noop(i2Head({col:'pos',dir:'asc'}))+'<tbody>'
    +demo.map(function(i){return noop(i2Row(i,true,false));}).join('')+'</tbody></table></div>';
  return h+'</div>';
}
NATIVE.system={render:renderSystem};

/* ── Acciones (delegación de clics) ── */
function evMenu(anchor){
  var D=db()||{},cur_=workEv(),act=D.activeEventId,evs=(D.eventos||[]).slice().sort(function(a,b){return (b.id===act)-(a.id===act)||String(b.ini||'').localeCompare(String(a.ini||''));});
  var h='<div class="lbl">'+t('evWork')+'</div>';
  evs.forEach(function(ev){var dd=evDates(ev);h+=mi('evset',cur_&&cur_.id===ev.id?I.check:'<svg viewBox="0 0 24 24"></svg>',E(ev.nombre),cur_&&cur_.id===ev.id?'on':'',' data-id="'+E(ev.id)+'"',[dd?E(rangeLbl(dd.a,dd.b)):'',ev.id===act?t('evActive'):''].filter(Boolean).join(', '));});
  if(tabOk('eventos'))h+='<hr>'+mi('go',I.cal,t('evManage'),'',' data-tab="eventos"');
  openMenu(anchor,h,false);
}
function userMenu(anchor){
  var u=cu()||{},dark=/dark|contrast/.test(document.documentElement.getAttribute('data-theme')||'');
  var role=(T[lang()]&&T[lang()]['r_'+u.rol])||u.rol||'';
  var h='<div class="who"><b>'+E(u.nombre||'')+'</b><small>'+E(role)+'</small>'+(u.email?'<small>'+E(u.email)+'</small>':'')+'</div><hr>';
  h+=mi('theme',dark?I.sun:I.moon,t(dark?'theme_light':'theme_dark'));
  h+=mi('lang',I.globe,t('language'));
  if(fn('exportDia')&&(can('isSA')||(fn('hasPerm')&&hasPerm('canSaveDay'))))h+=mi('backup',I.save,t('backup'));
  h+='<hr>'+mi('classic',I.back,t('classic'))+mi('logout',I.logout,t('logout'));
  openMenu(anchor,h,true);
}
function i2RowMenu(anchor,id){
  var D=db()||{},i=(D.ingresos2||[]).find(function(x){return x.id===id;});if(!i)return;
  var h=mi('i2view',I.eye,t('a_view'),'',' data-id="'+E(id)+'"');
  if(can('canEdit'))h+=mi('i2edit',I.edit,t('a_edit'),'',' data-id="'+E(id)+'"');
  h+=mi('i2print',I.printer,t('a_print'),'',' data-id="'+E(id)+'"')+mi('i2ramp',I.ticket,t('a_ramp'),'',' data-id="'+E(id)+'"');
  if(can('canStatus'))h+=i.salida?mi('i2undo',I.undo,t('a_undo'),'',' data-id="'+E(id)+'"'):mi('i2out',I.exit,t('a_out'),'',' data-id="'+E(id)+'"');
  if(can('canDel'))h+='<hr>'+mi('i2del',I.trash,t('a_del'),'dng',' data-id="'+E(id)+'"');
  openMenu(anchor,h,true);
}
function i2OptsMenu(anchor){
  var h=mi('i2sub',I.listx,t('special'),'',' data-v="listanegra"')+mi('i2sub',I.hist,t('edits'),'',' data-v="historial"')+mi('i2sub',I.cols,t('columns'),'',' data-v="columnas"');
  if(can('canCampos'))h+=mi('i2sub',I.sliders,t('fields'),'',' data-v="campos"');
  if(can('canClean'))h+='<hr>'+mi('i2clean',I.trash,t('clean'),'dng');
  openMenu(anchor,h,true);
}
function i2RangeMenu(anchor){
  var f=IF()||{};
  var h='<div class="fx-range"><label>'+t('d_from')+'<input type="date" id="fxD-from" value="'+E(f.fechaDesde2||f.fecha2||'')+'"></label><label>'+t('d_to')+'<input type="date" id="fxD-to" value="'+E(f.fechaHasta2||f.fecha2||'')+'"></label>'
    +'<button type="button" class="fx-btn pri" data-fx="i2rangeOk" style="width:100%">'+t('apply')+'</button></div>';
  openMenu(anchor,h,false);
}
function act(a,el,e){
  var id=el.getAttribute('data-id'),v=el.getAttribute('data-v'),f=IF()||{};
  switch(a){
    case 'noop':return;
    case 'go':fxGo(el.getAttribute('data-tab'));return;
    case 'system':closeMenu();document.body.classList.remove('fx-navopen');S.page='system';scrollTop();fxSync();return;
    case 'classic':fxExit();return;
    case 'rail':var r=!document.body.classList.contains('fx-rail');document.body.classList.toggle('fx-rail',r);lsSet(LS_RAIL,r?'1':'0');renderNav();return;
    case 'nav':document.body.classList.toggle('fx-navopen');return;
    case 'navclose':document.body.classList.remove('fx-navopen');return;
    case 'ev':evMenu(el);return;
    case 'evset':closeMenu();call('setUserWorkEvent',id);fxSyncSoon();return;
    case 'search':call('openGlobalSearch');return;
    case 'map':call('buOpenMapa');return;
    case 'lang':closeMenu();call('openLangPicker');return;
    case 'user':userMenu(el);return;
    case 'theme':closeMenu();var dk=/dark|contrast/.test(document.documentElement.getAttribute('data-theme')||'');call('applyTheme',dk?'light':'dark');return;
    case 'backup':closeMenu();call('exportDia');return;
    case 'logout':closeMenu();call('doLogout');return;
    /* Ingresos */
    case 'i2new':closeMenu();try{_ingSource='ingresos2';}catch(x){}call('openIngModal2');return;
    case 'i2export':call('exportIngresos2');return;
    case 'i2import':openMenu(el,mi('i2paste',I.paste,t('import_paste'),'','',t('import_paste_s'))+mi('i2xlsx',I.sheet,t('import_xlsx')),true);return;
    case 'i2paste':closeMenu();call('openImportRef','ingresos2');return;
    case 'i2xlsx':closeMenu();if(!can('canImport')){call('toast',call('tr','sinPermiso'),'var(--red)');return;}var xi=document.getElementById('xlsxIng2');if(xi)xi.click();return;
    case 'i2opts':i2OptsMenu(el);return;
    case 'i2sub':closeMenu();f._sub2=v;call('_saveSubTab','ingresos2',v);i2Rerender();scrollTop();return;
    case 'i2list':f._sub2='lista';call('_saveSubTab','ingresos2','lista');i2Rerender();scrollTop();return;
    case 'i2clean':closeMenu();call('cleanTab','ingresos2');return;
    case 'i2qclr':f.q2='';f._pg2=0;i2Rerender();var qi=document.getElementById('fxQ-ing2');if(qi)qi.focus();return;
    case 'i2st':S.ing2.status=v;f.activos2=(v==='in');f._pg2=0;i2Rerender();return;
    case 'i2date':f._pg2=0;call('_ing2DateHandler',v);return;
    case 'i2range':i2RangeMenu(el);return;
    case 'i2rangeOk':var a1=(document.getElementById('fxD-from')||{}).value||'',b1=(document.getElementById('fxD-to')||{}).value||'';if(a1&&b1&&a1>b1){var tmp=a1;a1=b1;b1=tmp;}closeMenu();f.fechaDesde2=a1;f.fechaHasta2=b1;f.fecha2='';f._dateMode2=(a1||b1)?'rango':'all';f._pg2=0;i2Rerender();return;
    case 'i2hall':f.hall2=v||'';f._pg2=0;i2Rerender();return;
    case 'i2sort':call('setSort','ingresos2',el.getAttribute('data-col'));return;
    case 'i2moreRows':S.ing2.lim+=LIM;fxSync();return;
    case 'i2more':i2RowMenu(el,id);return;
    case 'i2view':closeMenu();call('showIngDetalle',id,'ingresos2');return;
    case 'i2edit':closeMenu();var D=db()||{},it=(D.ingresos2||[]).find(function(x){return x.id===id;});if(it)call('openIngModal2',it);return;
    case 'i2print':closeMenu();call('printIngreso2',id);return;
    case 'i2ramp':closeMenu();call('printTrqIng',id);return;
    case 'i2out':closeMenu();call('marcarSalidaIng2',id);return;
    case 'i2undo':closeMenu();call('reactivarIngreso2',id);return;
    case 'i2del':closeMenu();call('askDelIng2',id);return;
  }
}
document.addEventListener('click',function(e){
  if(!on())return;
  var el=e.target.closest&&e.target.closest('[data-fx]');
  if(el&&(el.closest('#fxNav,#fxTop,#fxMain,#fxLegacy,.fx-menu')||el.id==='fxScrim')){e.preventDefault();act(el.getAttribute('data-fx'),el,e);return;}
  var row=e.target.closest&&e.target.closest('#fxMain [data-fxrow]');
  if(row&&!e.target.closest('button,a,input,select,label')){var rid=row.getAttribute('data-fxrow');if(rid)call('showIngDetalle',rid,'ingresos2');}
});
document.addEventListener('input',function(e){
  if(!on())return;var q=e.target.closest&&e.target.closest('input[data-fxq="ing2"]');if(!q)return;
  var f=IF();if(!f)return;f.q2=q.value;f._pg2=0;
  clearTimeout(_qT);_qT=setTimeout(i2Rerender,160);
});
document.addEventListener('pointerdown',function(e){if(MENU&&!MENU.el.contains(e.target)&&!MENU.anchor.contains(e.target))closeMenu();},true);
document.addEventListener('keydown',function(e){
  if(!on())return;
  if(e.key==='Escape'){if(MENU){closeMenu();e.stopPropagation();}else document.body.classList.remove('fx-navopen');}
  if(e.key==='Enter'&&MENU&&e.target&&e.target.closest&&e.target.closest('.fx-range')){var ok=MENU.el.querySelector('[data-fx="i2rangeOk"]');if(ok)ok.click();}
});
window.addEventListener('resize',function(){if(MENU)closeMenu();});

/* ── Enganches con la app existente (no cambian su comportamiento) ── */
function wrap(name,after){
  var o=window[name];if(typeof o!=='function'||o.__fx)return;
  var w=function(){var r=o.apply(this,arguments);try{after.apply(this,arguments);}catch(e){console.warn('[FUTURE]',e);}return r;};
  w.__fx=true;w.__orig=o;window[name]=w;
}
function install(){
  addLauncher();updLauncher();
  wrap('goTab',function(){if(on())fxSyncSoon();});
  wrap('renderIngresos2',function(){if(on()&&cur()==='ingresos2')fxSyncSoon();});
  wrap('renderHdr',function(){updLauncher();if(!on()&&lsGet(LS_MODE)==='1'&&allowed())fxEnter();else if(on())fxSyncSoon();});
  wrap('setSyncStatus',function(){if(on())renderTop();});
  wrap('applyTheme',function(){if(on())fxSyncSoon();});
  wrap('doLogout',function(){closeMenu();document.body.classList.remove('fx','fx-native','fx-navopen');updLauncher();});
  if(/[?&]clasica\b/.test(location.search))lsSet(LS_MODE,null);
  else if(/[?&]future\b/.test(location.search))lsSet(LS_MODE,'1');
  if(lsGet(LS_MODE)==='1'&&allowed())fxEnter();
}
install();
})();
