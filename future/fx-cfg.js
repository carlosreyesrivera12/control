/* BeUnifyT FUTURE · Configuración: Recintos, Eventos, Usuarios, Archivos y Papelera.
   Impresión sigue con su editor actual. Usa las funciones existentes de INDEX.html. */
(function(){
'use strict';
var FX=window.FX;if(!FX)return;
var I=FX.I,t=FX.t,E=FX.E,U=FX.ui,call=FX.call,can=FX.can;

FX.addT({
es:{rc_sub:'Recintos feriales con sus halls, puertas de acceso y contacto de logística.',rc_new:'Nuevo recinto',rc_empty:'Todavía no hay recintos',rc_empty_p:'Crea el primero con sus halls y puertas.',rc_halls:'Halls',rc_doors:'Puertas',rc_care:'Atención al cliente',rc_del_q:'¿Eliminar el recinto {n}?',no_perm:'No tienes permiso para ver esta sección.',
 ev_sub:'Ferias y eventos. El evento activo lo ve todo el equipo; el evento de trabajo es solo para ti.',ev_new:'Nuevo evento',ev_backup:'Copia completa',ev_tab_l:'Eventos',ev_tab_h:'Historial de cambios',ev_tab_d:'Eliminados',
 ev_active:'Evento activo para todos',ev_work:'Tu evento de trabajo',ev_none_active:'Ningún evento activo',ev_none_work:'Usas el evento activo',ev_deact:'Desactivar',ev_deact_t:'Desactivar evento global',ev_deact_p:'¿Desactivar el evento global para todos los usuarios?',ev_unset:'Quitar',
 c_dates:'Fechas',c_venue:'Recinto',c_doors:'Puertas',ev_on:'Activo',ev_def:'Predefinido',ev_off:'Inactivo',ev_now:'En curso',ev_past:'Finalizado',ev_next:'Próximo',a_activate:'Activar',a_deactivate:'Desactivar',a_work:'Usar para trabajar',a_unwork:'Dejar de usar para trabajar',a_default:'Predefinir para todos',a_restore:'Restaurar',
 ev_empty:'Todavía no hay eventos',ev_empty_p:'Crea un evento para empezar a registrar ingresos.',ev_noactive:'No hay ningún evento activo. Pide al SuperAdmin que active uno.',c_by:'Por',c_when:'Fecha',h_empty:'Sin cambios registrados.',d_empty:'No hay eventos eliminados.',
 us_sub:'Personas con acceso a BeUnifyT, su rol y lo que pueden hacer.',us_new:'Nuevo usuario',us_tab_o:'Operadores',us_tab_e:'Cuentas de empresa',us_tab_ocr:'Lectura de matrículas',us_q:'Buscar por nombre, usuario o email',us_empty:'No hay usuarios con estos filtros',
 r_controlador_rampa:'Control de rampa',r_editor:'Editor',r_visor:'Solo lectura',r_empresa:'Empresa',rs_all:'Todos',c_user:'Usuario',c_role:'Rol',c_tabs:'Pestañas',c_perms:'Permisos',p_all:'Todos',p_none:'Sin permisos',n_tabs:'{n} pestañas',
 p_canAdd:'Crear',p_canEdit:'Editar',p_canDel:'Eliminar',p_canStatus:'Estados',p_canExport:'Exportar',p_canSpecial:'Lista especial',p_canImport:'Importar',p_canPrint:'Imprimir',p_canClean:'Limpiar',p_canCampos:'Campos',
 a_clean_on:'Permitir limpiar',a_clean_off:'Quitar permiso de limpiar',cl_on:'Puede limpiar',you:'Tú',
 rq_title:'Solicitudes de acceso',rq_ok:'Dar acceso',rq_no:'Rechazar',rq_company:'Empresa',
 ocr_svc:'Servicio de lectura',ocr_vision:'Google Vision',ocr_local:'Lectura local',ocr_total:'Lecturas',ocr_rate:'Acierto',ocr_7d:'Últimos 7 días',ocr_last:'Últimas lecturas',ocr_reset:'Reiniciar contadores',ocr_reset_q:'¿Reiniciar los contadores de lectura?',ocr_empty:'Todavía no hay lecturas registradas.',ocr_ok:'Leída',ocr_ko:'Fallida',
 dz_title:'Zona peligrosa',dz_p:'Borra ingresos, conductores, eventos, recintos, agenda e historial. Se mantiene la configuración de Firebase y la clave de API. Pide doble confirmación.',dz_btn:'Borrar todos los datos',
 au_title:'Archivos',au_sub:'Registro de sesiones, acciones, seguridad, exportaciones y dispositivos.',au_q:'Buscar por usuario, detalle o IP',au_ses:'Sesiones',au_act:'Acciones',au_sec:'Seguridad',au_exp:'Exportaciones',au_dev:'Dispositivos',au_clean:'Limpiar registro',au_clean_q:'¿Limpiar el registro de sesiones, acciones y seguridad?',
 c_detail:'Detalle',c_device:'Dispositivo',c_ip:'IP',c_when2:'Fecha y hora',c_entity:'Entidad',c_type:'Tipo',c_tab:'Pestaña',c_file:'Archivo',c_last:'Último acceso',
 m_login_ok:'Acceso',m_logout:'Cierre de sesión',m_blocked:'Bloqueado',m_nosync:'Sin sincronizar',m_reset:'Borrado total',m_clean:'Limpieza',m_login:'Inicio de sesión',m_new:'Nuevo',m_edit:'Edición',m_out:'Salida',m_react:'Reactivado',m_del:'Eliminado',
 au_e_ses:'Sin sesiones registradas',au_e_act:'Sin acciones registradas',au_e_sec:'Sin eventos de seguridad',au_e_exp:'Sin exportaciones registradas',au_e_dev:'Sin dispositivos registrados',au_e_p:'Los registros aparecerán aquí.',
 dv_appr:'Aprobar dispositivos nuevos',dv_appr_on:'Los dispositivos nuevos quedan bloqueados hasta que un SuperAdmin los apruebe.',dv_appr_off:'Los dispositivos nuevos entran directamente y el SuperAdmin recibe un aviso.',dv_trusted:'De confianza',dv_blocked:'Bloqueado',dv_new:'Nuevo',a_trust:'Aprobar',a_dblock:'Bloquear',a_rename:'Renombrar',dv_sa:'Solo el SuperAdmin puede cambiar dispositivos.',
 pp_sub:'Registros eliminados. Puedes restaurarlos o borrarlos para siempre.',pp_q:'Buscar en registros eliminados',pp_empty:'La papelera está vacía',pp_empty_p:'Lo que se elimine en cualquier pestaña aparecerá aquí.',pp_vaciar:'Vaciar papelera',c_origin:'Origen',c_content:'Contenido',c_delby:'Eliminado por',c_delwhen:'Fecha',a_purge:'Eliminar para siempre',n_sel:'{n} seleccionados',n_sel1:'1 seleccionado',sel_all:'Seleccionar todo',sel_clear:'Quitar selección',
 o_ingresos:'Referencia',o_ingresos2:'Ingresos',o_agenda:'Agenda',o_conductores:'Conductores',o_movimientos:'Embalaje',o_listaNegra:'Lista especial',o_mensajesRampa:'Mensajes',pp_item:'Registro eliminado',
 tpl:'Plantilla'},
en:{rc_sub:'Exhibition venues with their halls, access gates and logistics contact.',rc_new:'New venue',rc_empty:'No venues yet',rc_empty_p:'Create the first one with its halls and gates.',rc_halls:'Halls',rc_doors:'Gates',rc_care:'Customer service',rc_del_q:'Delete venue {n}?',no_perm:'You do not have permission to view this section.',
 ev_sub:'Fairs and events. The active event is shared with the whole team; your working event is only for you.',ev_new:'New event',ev_backup:'Full backup',ev_tab_l:'Events',ev_tab_h:'Change history',ev_tab_d:'Deleted',
 ev_active:'Active event for everyone',ev_work:'Your working event',ev_none_active:'No active event',ev_none_work:'Using the active event',ev_deact:'Deactivate',ev_deact_t:'Deactivate global event',ev_deact_p:'Deactivate the global event for all users?',ev_unset:'Remove',
 c_dates:'Dates',c_venue:'Venue',c_doors:'Gates',ev_on:'Active',ev_def:'Default',ev_off:'Inactive',ev_now:'Running',ev_past:'Finished',ev_next:'Upcoming',a_activate:'Activate',a_deactivate:'Deactivate',a_work:'Use for my work',a_unwork:'Stop using for my work',a_default:'Set as default for everyone',a_restore:'Restore',
 ev_empty:'No events yet',ev_empty_p:'Create an event to start recording entries.',ev_noactive:'There is no active event. Ask the SuperAdmin to activate one.',c_by:'By',c_when:'Date',h_empty:'No changes recorded.',d_empty:'No deleted events.',
 us_sub:'People with access to BeUnifyT, their role and what they can do.',us_new:'New user',us_tab_o:'Operators',us_tab_e:'Company accounts',us_tab_ocr:'Plate reading',us_q:'Search by name, username or email',us_empty:'No users match these filters',
 r_controlador_rampa:'Ramp control',r_editor:'Editor',r_visor:'Read only',r_empresa:'Company',rs_all:'All',c_user:'User',c_role:'Role',c_tabs:'Tabs',c_perms:'Permissions',p_all:'All',p_none:'No permissions',n_tabs:'{n} tabs',
 p_canAdd:'Create',p_canEdit:'Edit',p_canDel:'Delete',p_canStatus:'Status',p_canExport:'Export',p_canSpecial:'Special list',p_canImport:'Import',p_canPrint:'Print',p_canClean:'Clear',p_canCampos:'Fields',
 a_clean_on:'Allow clearing',a_clean_off:'Remove clearing permission',cl_on:'Can clear',you:'You',
 rq_title:'Access requests',rq_ok:'Grant access',rq_no:'Decline',rq_company:'Company',
 ocr_svc:'Reading service',ocr_vision:'Google Vision',ocr_local:'On-device reading',ocr_total:'Reads',ocr_rate:'Success',ocr_7d:'Last 7 days',ocr_last:'Latest reads',ocr_reset:'Reset counters',ocr_reset_q:'Reset the reading counters?',ocr_empty:'No reads recorded yet.',ocr_ok:'Read',ocr_ko:'Failed',
 dz_title:'Danger zone',dz_p:'Deletes entries, drivers, events, venues, schedule and history. Firebase configuration and API key are kept. Asks for double confirmation.',dz_btn:'Delete all data',
 au_title:'Records',au_sub:'Log of sessions, actions, security, exports and devices.',au_q:'Search by user, detail or IP',au_ses:'Sessions',au_act:'Actions',au_sec:'Security',au_exp:'Exports',au_dev:'Devices',au_clean:'Clear log',au_clean_q:'Clear the session, action and security log?',
 c_detail:'Detail',c_device:'Device',c_ip:'IP',c_when2:'Date and time',c_entity:'Entity',c_type:'Type',c_tab:'Tab',c_file:'File',c_last:'Last access',
 m_login_ok:'Signed in',m_logout:'Signed out',m_blocked:'Blocked',m_nosync:'Not syncing',m_reset:'Full reset',m_clean:'Clear',m_login:'Sign-in',m_new:'New',m_edit:'Edit',m_out:'Exit',m_react:'Reactivated',m_del:'Deleted',
 au_e_ses:'No sessions recorded',au_e_act:'No actions recorded',au_e_sec:'No security events',au_e_exp:'No exports recorded',au_e_dev:'No devices registered',au_e_p:'Records will appear here.',
 dv_appr:'Approve new devices',dv_appr_on:'New devices stay blocked until a SuperAdmin approves them.',dv_appr_off:'New devices get in directly and the SuperAdmin is notified.',dv_trusted:'Trusted',dv_blocked:'Blocked',dv_new:'New',a_trust:'Approve',a_dblock:'Block',a_rename:'Rename',dv_sa:'Only the SuperAdmin can change devices.',
 pp_sub:'Deleted records. Restore them or delete them for good.',pp_q:'Search deleted records',pp_empty:'The bin is empty',pp_empty_p:'Anything deleted in any tab will appear here.',pp_vaciar:'Empty bin',c_origin:'Source',c_content:'Content',c_delby:'Deleted by',c_delwhen:'Date',a_purge:'Delete for good',n_sel:'{n} selected',n_sel1:'1 selected',sel_all:'Select all',sel_clear:'Clear selection',
 o_ingresos:'Reference',o_ingresos2:'Entries',o_agenda:'Schedule',o_conductores:'Drivers',o_movimientos:'Packaging',o_listaNegra:'Special list',o_mensajesRampa:'Messages',pp_item:'Deleted record',
 tpl:'Template'},
de:{rc_sub:'Messegelände mit Hallen, Zufahrtstoren und Logistikkontakt.',rc_new:'Neues Gelände',rc_empty:'Noch keine Messegelände',rc_empty_p:'Legen Sie das erste mit Hallen und Toren an.',rc_halls:'Hallen',rc_doors:'Tore',rc_care:'Kundenservice',rc_del_q:'Gelände {n} löschen?',no_perm:'Sie haben keine Berechtigung für diesen Bereich.',
 ev_sub:'Messen und Veranstaltungen. Die aktive Veranstaltung sieht das ganze Team; Ihre Arbeitsveranstaltung nur Sie.',ev_new:'Neue Veranstaltung',ev_backup:'Vollständige Sicherung',ev_tab_l:'Veranstaltungen',ev_tab_h:'Änderungsverlauf',ev_tab_d:'Gelöscht',
 ev_active:'Aktive Veranstaltung für alle',ev_work:'Ihre Arbeitsveranstaltung',ev_none_active:'Keine aktive Veranstaltung',ev_none_work:'Sie nutzen die aktive Veranstaltung',ev_deact:'Deaktivieren',ev_deact_t:'Globale Veranstaltung deaktivieren',ev_deact_p:'Globale Veranstaltung für alle Benutzer deaktivieren?',ev_unset:'Entfernen',
 c_dates:'Zeitraum',c_venue:'Gelände',c_doors:'Tore',ev_on:'Aktiv',ev_def:'Standard',ev_off:'Inaktiv',ev_now:'Läuft',ev_past:'Beendet',ev_next:'Demnächst',a_activate:'Aktivieren',a_deactivate:'Deaktivieren',a_work:'Für meine Arbeit nutzen',a_unwork:'Nicht mehr für meine Arbeit nutzen',a_default:'Als Standard für alle festlegen',a_restore:'Wiederherstellen',
 ev_empty:'Noch keine Veranstaltungen',ev_empty_p:'Legen Sie eine Veranstaltung an, um Einfahrten zu erfassen.',ev_noactive:'Keine aktive Veranstaltung. Bitten Sie den SuperAdmin, eine zu aktivieren.',c_by:'Von',c_when:'Datum',h_empty:'Keine Änderungen erfasst.',d_empty:'Keine gelöschten Veranstaltungen.',
 us_sub:'Personen mit Zugang zu BeUnifyT, ihre Rolle und ihre Rechte.',us_new:'Neuer Benutzer',us_tab_o:'Mitarbeitende',us_tab_e:'Firmenkonten',us_tab_ocr:'Kennzeichenerkennung',us_q:'Nach Name, Benutzername oder E-Mail suchen',us_empty:'Keine Benutzer für diese Filter',
 r_controlador_rampa:'Rampenkontrolle',r_editor:'Bearbeiter',r_visor:'Nur Lesen',r_empresa:'Firma',rs_all:'Alle',c_user:'Benutzer',c_role:'Rolle',c_tabs:'Bereiche',c_perms:'Rechte',p_all:'Alle',p_none:'Keine Rechte',n_tabs:'{n} Bereiche',
 p_canAdd:'Anlegen',p_canEdit:'Bearbeiten',p_canDel:'Löschen',p_canStatus:'Status',p_canExport:'Exportieren',p_canSpecial:'Sonderliste',p_canImport:'Importieren',p_canPrint:'Drucken',p_canClean:'Leeren',p_canCampos:'Felder',
 a_clean_on:'Leeren erlauben',a_clean_off:'Leeren nicht mehr erlauben',cl_on:'Darf leeren',you:'Sie',
 rq_title:'Zugangsanfragen',rq_ok:'Zugang gewähren',rq_no:'Ablehnen',rq_company:'Firma',
 ocr_svc:'Erkennungsdienst',ocr_vision:'Google Vision',ocr_local:'Lokale Erkennung',ocr_total:'Lesungen',ocr_rate:'Trefferquote',ocr_7d:'Letzte 7 Tage',ocr_last:'Letzte Lesungen',ocr_reset:'Zähler zurücksetzen',ocr_reset_q:'Lesezähler zurücksetzen?',ocr_empty:'Noch keine Lesungen erfasst.',ocr_ok:'Gelesen',ocr_ko:'Fehlgeschlagen',
 dz_title:'Gefahrenbereich',dz_p:'Löscht Einfahrten, Fahrer, Veranstaltungen, Gelände, Zeitplan und Verlauf. Firebase-Konfiguration und API-Schlüssel bleiben erhalten. Mit doppelter Bestätigung.',dz_btn:'Alle Daten löschen',
 au_title:'Protokolle',au_sub:'Protokoll von Sitzungen, Aktionen, Sicherheit, Exporten und Geräten.',au_q:'Nach Benutzer, Detail oder IP suchen',au_ses:'Sitzungen',au_act:'Aktionen',au_sec:'Sicherheit',au_exp:'Exporte',au_dev:'Geräte',au_clean:'Protokoll leeren',au_clean_q:'Sitzungs-, Aktions- und Sicherheitsprotokoll leeren?',
 c_detail:'Detail',c_device:'Gerät',c_ip:'IP',c_when2:'Datum und Uhrzeit',c_entity:'Objekt',c_type:'Art',c_tab:'Bereich',c_file:'Datei',c_last:'Letzter Zugriff',
 m_login_ok:'Angemeldet',m_logout:'Abgemeldet',m_blocked:'Gesperrt',m_nosync:'Ohne Sync',m_reset:'Komplett gelöscht',m_clean:'Geleert',m_login:'Anmeldung',m_new:'Neu',m_edit:'Bearbeitet',m_out:'Ausfahrt',m_react:'Reaktiviert',m_del:'Gelöscht',
 au_e_ses:'Keine Sitzungen erfasst',au_e_act:'Keine Aktionen erfasst',au_e_sec:'Keine Sicherheitsereignisse',au_e_exp:'Keine Exporte erfasst',au_e_dev:'Keine Geräte registriert',au_e_p:'Einträge erscheinen hier.',
 dv_appr:'Neue Geräte freigeben',dv_appr_on:'Neue Geräte bleiben gesperrt, bis ein SuperAdmin sie freigibt.',dv_appr_off:'Neue Geräte kommen direkt hinein, der SuperAdmin wird benachrichtigt.',dv_trusted:'Vertrauenswürdig',dv_blocked:'Gesperrt',dv_new:'Neu',a_trust:'Freigeben',a_dblock:'Sperren',a_rename:'Umbenennen',dv_sa:'Nur der SuperAdmin kann Geräte ändern.',
 pp_sub:'Gelöschte Einträge. Sie können sie wiederherstellen oder endgültig löschen.',pp_q:'Gelöschte Einträge durchsuchen',pp_empty:'Der Papierkorb ist leer',pp_empty_p:'Was in einem Bereich gelöscht wird, erscheint hier.',pp_vaciar:'Papierkorb leeren',c_origin:'Herkunft',c_content:'Inhalt',c_delby:'Gelöscht von',c_delwhen:'Datum',a_purge:'Endgültig löschen',n_sel:'{n} ausgewählt',n_sel1:'1 ausgewählt',sel_all:'Alle auswählen',sel_clear:'Auswahl aufheben',
 o_ingresos:'Referenzen',o_ingresos2:'Einfahrten',o_agenda:'Zeitplan',o_conductores:'Fahrer',o_movimientos:'Leergut',o_listaNegra:'Sonderliste',o_mensajesRampa:'Nachrichten',pp_item:'Gelöschter Eintrag',
 tpl:'Vorlage'}
});

function db(){return FX.db()||{};}
function noPerm(title){return '<div class="fx-page">'+U.ph(title,'','')+U.empty(t('no_perm'),'','')+'</div>';}
function cnt(n,k1,kn){return n===1?t(k1):t(kn,{n:n});}
function fileBtn(onchange,ico,lbl){return '<label class="fx-btn">'+ico+'<span>'+lbl+'</span><input type="file" accept=".xlsx,.xls" hidden onchange="'+onchange+'(this)"></label>';}
function ts(s){return s?FX.tsLbl(String(s).replace('T',' '),''):'';}
function lang2(c){return c?'<span class="fx-lang">'+E(c)+'</span>':U.dash;}

/* ════════════ RECINTOS ════════════ */
function rcRec(id){return (db().recintos||[]).find(function(x){return x.id===id;});}
function rcRender(){
  if(!can('isSup'))return noPerm(t('tab_recintos'));
  var items=db().recintos||[];
  var h='<div class="fx-page" data-view="recintos">'+U.ph(t('tab_recintos'),t('rc_sub'),U.btn('rc.new',I.plus,t('rc_new'),'pri'));
  if(!items.length)return h+U.empty(t('rc_empty'),t('rc_empty_p'),U.btn('rc.new',I.plus,t('rc_new'),'pri'))+'</div>';
  h+='<div class="fx-cards">';
  items.forEach(function(r){
    var x=' data-id="'+E(r.id)+'"',at=r.atencion||{},doors=r.puertas||[];
    h+='<article class="fx-card"><header><span class="fx-avs sq">'+I.venue+'</span><div><h3>'+E(r.nombre||'–')+'</h3><p>'+E([r.ciudad,r.pais].filter(Boolean).join(', ')||'–')+'</p></div>'+U.ibtn('rc.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"')+'</header>';
    h+='<div class="fx-card-b"><div class="fx-card-l">'+t('rc_halls')+' <b>'+(r.halls||[]).length+'</b></div><div class="fx-card-halls">'+((r.halls||[]).length?U.halls(r.halls):U.dash)+'</div>';
    h+='<div class="fx-card-l">'+t('rc_doors')+' <b>'+doors.length+'</b></div>'+(doors.length?'<ul class="fx-card-doors">'+doors.map(function(p){return '<li>'+I.door+'<span><b>'+E(p.nombre||'')+'</b>'+(p.direccion?'<small>'+E(p.direccion)+'</small>':'')+'</span>'+(p.qr?'<a href="'+E(p.qr)+'" target="_blank" rel="noopener" class="fx-btn ghost sm ico" aria-label="QR">'+I.link+'</a>':'')+'</li>';}).join('')+'</ul>':'<p class="fx-sub" style="margin:0">–</p>');
    if(at.tel||at.email)h+='<div class="fx-card-l">'+t('rc_care')+'</div><div class="fx-card-c">'+(at.tel?'<a class="fx-btn sm" href="tel:'+E(String(at.tel).replace(/[^\d+]/g,''))+'">'+I.phone+'<span>'+E(at.tel)+'</span></a>':'')+(at.email?'<a class="fx-btn sm" href="mailto:'+E(at.email)+'">'+I.mail+'<span>'+E(at.email)+'</span></a>':'')+'</div>';
    h+='</div></article>';
  });
  return h+'</div></div>';
}
FX.view('recintos',{render:rcRender,wrap:['renderRecintos']});
FX.act('rc.new',function(){call('openRecintoModal');});
FX.act('rc.edit',function(el,id){FX.closeMenu();var r=rcRec(id);if(r)call('openRecintoModal',r);});
FX.act('rc.del',function(el,id){FX.closeMenu();var r=rcRec(id);if(!r)return;if(!window.confirm(t('rc_del_q',{n:r.nombre})))return;DB.recintos=DB.recintos.filter(function(x){return x.id!==id;});call('saveDB');call('renderRecintos');call('toast','🗑 '+call('tr','eliminado'));});
FX.act('rc.more',function(el,id){var x=' data-id="'+E(id)+'"';FX.menu(el,U.mi('rc.edit',I.edit,t('a_edit'),'',x)+'<hr>'+U.mi('rc.del',I.trash,t('a_del'),'dng',x),true);});

/* ════════════ EVENTOS ════════════ */
var EVS={tab:'l'};
function evRec(id){return (db().eventos||[]).find(function(x){return x.id===id;});}
function evPhase(ev){var td=FX.todayStr(),a=ev.ini||'',b=ev.fin||'';if(a&&a>td)return 'next';if(b&&b<td)return 'past';if(a||b)return 'now';return '';}
function evActs(ev,act,isW){
  var x=' data-id="'+E(ev.id)+'"',h='';
  if(can('isSA')&&!act)h+=U.btn('ev.on',I.play,t('a_activate'),'go sm',x);
  h+=U.ibtn('ev.work',isW?I.star:I.star,t(isW?'a_unwork':'a_work'),'ghost sm'+(isW?' on':''),x+' aria-pressed="'+isW+'"');
  h+=U.ibtn('ev.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"');
  return U.acts(h);
}
function evRender(){
  var D=db(),items=(D.eventos||[]).slice(),act=D.activeEventId||null,wid=null,sa=can('isSA');
  try{wid=getUserWorkEventId();}catch(e){}
  var actEv=act?items.find(function(e){return e.id===act;}):null,wEv=wid?items.find(function(e){return e.id===wid;}):null;
  var acts='';if(sa){acts+=U.btn('ev.export',I.down,t('export'))+U.btn('ev.backup',I.save,t('ev_backup'));}if(can('canEditEvento'))acts+=U.btn('ev.new',I.plus,t('ev_new'),'pri');
  var h='<div class="fx-page" data-view="eventos">'+U.ph(t('tab_eventos'),t('ev_sub'),acts);
  var dd=function(e){var r=FX.evDates(e);return r?FX.rangeLbl(r.a,r.b):'';};
  h+='<div class="fx-pins">';
  h+='<div class="fx-pin'+(actEv?' on':'')+'"><span class="fx-pin-ico">'+I.venue+'</span><div><small>'+t('ev_active')+'</small><b>'+E(actEv?actEv.nombre:t('ev_none_active'))+'</b>'+(actEv?'<span>'+E([dd(actEv),actEv.recinto].filter(Boolean).join(' · '))+'</span>':'')+'</div>'+(actEv&&sa?U.btn('ev.deactAll',I.stop,t('ev_deact'),'sm'):'')+'</div>';
  h+='<div class="fx-pin'+(wEv?' on':'')+'"><span class="fx-pin-ico">'+I.star+'</span><div><small>'+t('ev_work')+'</small><b>'+E(wEv?wEv.nombre:t('ev_none_work'))+'</b>'+(wEv?'<span>'+E([dd(wEv),wEv.recinto].filter(Boolean).join(' · '))+'</span>':'')+'</div>'+(wEv?U.btn('ev.unwork',I.x,t('ev_unset'),'sm'):'')+'</div>';
  h+='</div>';
  if(!sa&&!act)h+=U.note('pend',I.alert,E(t('ev_noactive')));
  var hist=D.eventoHistorial||[],del=D.eventosPapelera||[];
  if(sa&&(hist.length||del.length))h+=U.tabs('ev.tab',[{v:'l',lbl:t('ev_tab_l'),n:items.length},{v:'h',lbl:t('ev_tab_h'),n:hist.length},{v:'d',lbl:t('ev_tab_d'),n:del.length}],EVS.tab,t('tab_eventos'));
  var tab=sa?EVS.tab:'l';
  if(tab==='h'){
    h+=hist.length?U.table(U.th('',null,t('ev_tab_l'),{})+U.th('',null,t('c_by'),{})+U.th('',null,t('c_when'),{})+'<th></th>',hist.map(function(e,i){return '<tr><td class="c-txt"><span class="fx-strong">'+E(e.nombre||'–')+'</span></td><td>'+E(e._editedBy||'–')+'</td><td class="fx-num">'+E(ts(e._editedTs)||'–')+'</td><td class="c-act">'+U.btn('ev.restV',I.restore,t('a_restore'),'sm',' data-v="'+i+'"')+'</td></tr>';}).join('')):U.empty(t('h_empty'),'','');
    return h+'</div>';
  }
  if(tab==='d'){
    h+=del.length?U.table(U.th('',null,t('ev_tab_l'),{})+U.th('',null,t('c_by'),{})+U.th('',null,t('c_when'),{})+'<th></th>',del.map(function(e,i){return '<tr><td class="c-txt"><span class="fx-strong">'+E(e.nombre||'–')+'</span></td><td>'+E(e._deletedBy||'–')+'</td><td class="fx-num">'+E(ts(e._deletedTs)||'–')+'</td><td class="c-act">'+U.btn('ev.restD',I.restore,t('a_restore'),'sm',' data-v="'+i+'"')+'</td></tr>';}).join('')):U.empty(t('d_empty'),'','');
    return h+'</div>';
  }
  if(!items.length)return h+U.empty(t('ev_empty'),t('ev_empty_p'),can('canEditEvento')?U.btn('ev.new',I.plus,t('ev_new'),'pri'):'')+'</div>';
  items.sort(function(a,b){return (b.id===act)-(a.id===act)||String(b.ini||'').localeCompare(String(a.ini||''));});
  var ph={now:'in',next:'idle',past:'out'};
  if(FX.S.lay!=='table'){
    h+=U.list(items.map(function(ev){var a=ev.id===act,w=ev.id===wid,p=evPhase(ev),meta=[];if(dd(ev))meta.push('<span class="fx-num">'+E(dd(ev))+'</span>');if(ev.recinto)meta.push('<span class="fx-ell">'+E(ev.recinto)+'</span>');if((ev.halls||[]).length)meta.push('<span>'+U.halls(ev.halls)+'</span>');
      return U.li({id:ev.id,src:'eventos',cls:a?'in':'',pos:'<span class="fx-avs sq" style="width:32px;height:32px">'+I.cal+'</span>',plate:'',title:E(ev.nombre||'–'),meta:meta,st:a?U.st('in',t('ev_on')+(D.defaultEventId===ev.id?' · '+t('ev_def'):'')):(p?U.st(ph[p],t('ev_'+p)):''),act:evActs(ev,a,w)});}).join(''));
  } else {
    var head=U.th('',null,t('ev_tab_l'),{})+U.th('',null,t('c_dates'),{})+U.th('',null,t('rc_halls'),{})+U.th('',null,t('c_doors'),{})+U.th('',null,t('c_state'),{})+'<th><span class="fx-sr">'+t('more')+'</span></th>';
    h+=U.table(head,items.map(function(ev){
      var a=ev.id===act,w=ev.id===wid,p=evPhase(ev),doors=ev.puertas||[];
      return '<tr class="'+(a?'in':'')+'" data-fxrow="'+E(ev.id)+'" data-src="eventos"><td class="c-who"><span class="fx-strong fx-ell">'+E(ev.nombre||'–')+'</span>'+U.meta(E([ev.recinto,ev.ciudad].filter(Boolean).join(' · ')))+'</td>'
        +'<td class="c-time fx-num"><span class="fx-strong">'+E(dd(ev)||'–')+'</span>'+(p?U.meta(E(t('ev_'+p))):'')+'</td>'
        +'<td class="c-hall">'+((ev.halls||[]).length?U.halls(ev.halls):U.dash)+'</td>'
        +'<td class="c-txt">'+(doors.length?'<span class="fx-ell">'+E(doors.map(function(d){return d.nombre;}).join(', '))+'</span>':U.dash)+'</td>'
        +'<td class="c-st">'+(a?U.st('in',t('ev_on'))+(D.defaultEventId===ev.id?U.meta(E(t('ev_def'))):''):U.st('idle',t('ev_off')))+(w?U.meta(I.star+' '+E(t('ev_work')),'fx-wk'):'')+'</td>'
        +'<td class="c-act">'+evActs(ev,a,w)+'</td></tr>';
    }).join(''));
  }
  return h+'</div>';
}
FX.view('eventos',{render:evRender,wrap:['renderEventosTab']});
FX.row('eventos',function(id){var ev=evRec(id);if(ev&&can('canEditEvento'))call('openEventoModal',ev);});
FX.act('ev.tab',function(el,id,v){EVS.tab=v;FX.sync();});
FX.act('ev.new',function(){call('openEventoModal');});
FX.act('ev.export',function(){call('exportEventos');});
FX.act('ev.backup',function(){call('exportAll');});
FX.act('ev.on',function(el,id){FX.closeMenu();call('activarEvento',id);});
FX.act('ev.off',function(el,id){FX.closeMenu();call('desactivarEvento',id);});
FX.act('ev.def',function(el,id){FX.closeMenu();call('setDefaultEvento',id);});
FX.act('ev.work',function(el,id){FX.closeMenu();var w=null;try{w=getUserWorkEventId();}catch(e){}call('setUserWorkEvent',w===id?null:id);FX.sync();});
FX.act('ev.unwork',function(){call('setUserWorkEvent',null);FX.sync();});
FX.act('ev.edit',function(el,id){FX.closeMenu();var ev=evRec(id);if(ev)call('openEventoModal',ev);});
FX.act('ev.del',function(el,id){FX.closeMenu();call('askDelEvento',id);});
FX.act('ev.restV',function(el,id,v){call('restoreEventoVersion',+v);FX.sync();});
FX.act('ev.restD',function(el,id,v){call('restoreEventoDeleted',+v);FX.sync();});
FX.act('ev.deactAll',function(){call('askDel',t('ev_deact_t'),t('ev_deact_p'),function(){DB.activeEventId=null;DB.activeEventIds=[];call('saveDB');call('renderEventosTab');call('renderHdr');});});
FX.act('ev.more',function(el,id){
  var D=db(),ev=evRec(id);if(!ev)return;var x=' data-id="'+E(id)+'"',a=D.activeEventId===id,w=null,sa=can('isSA');try{w=getUserWorkEventId();}catch(e){}
  var h=U.mi('ev.work',I.star,t(w===id?'a_unwork':'a_work'),'',x);
  if(sa&&!a)h+=U.mi('ev.on',I.play,t('a_activate'),'',x);
  if(sa&&a)h+=U.mi('ev.off',I.stop,t('a_deactivate'),'',x);
  if(sa&&a&&D.defaultEventId!==id)h+=U.mi('ev.def',I.check,t('a_default'),'',x);
  if(can('canEditEvento'))h+=U.mi('ev.edit',I.edit,t('a_edit'),'',x);
  if(sa)h+='<hr>'+U.mi('ev.del',I.trash,t('a_del'),'dng',x);
  FX.menu(el,h,true);
});

/* ════════════ USUARIOS ════════════ */
var ROLES=['superadmin','supervisor','controlador_rampa','editor','visor'];
var DEFT={superadmin:['dash','ingresos','ingresos2','flota','conductores','agenda','analytics','vehiculos','auditoria','papelera','recintos','eventos','mensajes','usuarios','impresion','empresas'],supervisor:['dash','ingresos','ingresos2','flota','conductores','agenda','analytics','vehiculos','auditoria','papelera','recintos','eventos','usuarios','impresion'],controlador_rampa:['ingresos','ingresos2'],editor:['ingresos','ingresos2','conductores','agenda','impresion'],visor:['ingresos','ingresos2','agenda'],empresa:['empresas']};
function usSub(){var s=window._fxUSub||window._uSub||'operadores';return (s==='ocr'&&!can('isSA'))?'operadores':s;}
function rolLbl(r){var k='r_'+r;return t(k)!==k?t(k):(r||'–');}
function permsOf(u){if(u.rol==='superadmin'||u.rol==='supervisor')return t('p_all');var p=Object.keys(u.permisos||{}).filter(function(k){return u.permisos[k];}).map(function(k){var l='p_'+k;return t(l)!==l?t(l):k;});return p.length?p.join(', '):t('p_none');}
function usActs(u){var me=(FX.cu()||{}).id,x=' data-id="'+E(u.id)+'"',h='',sa=can('isSA');if(sa||me===u.id)h+=U.ibtn('us.edit',I.edit,t('a_edit'),'ghost sm',x);if(sa&&(u.id!==me||u.rol==='supervisor'))h+=U.ibtn('us.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"');return U.acts(h);}
function usRow(u,emp){
  var me=(FX.cu()||{}).id,h='<tr data-fxrow="'+E(u.id)+'" data-src="usuarios">';
  h+='<td class="c-who"><span class="fx-who">'+U.av(u.nombre)+'<span><span class="fx-strong fx-ell">'+E(u.nombre||'–')+(u.id===me?' <small class="fx-lbl" style="font-size:13px">· '+t('you')+'</small>':'')+'</span>'+U.meta(E([u.username||u.usuario,u.email].filter(Boolean).join(' · ')))+'</span></span></td>';
  if(emp){var e=(db().empresas||[]).find(function(x){return x.userId===u.id||x.id===u.empresaId||x.id===u.empId;});h+='<td>'+lang2(u.lang)+'</td><td class="c-txt"><span class="fx-ell">'+(e?E(e.nombre):U.dash)+'</span>'+(e&&e.cif?U.meta(E(e.cif)):'')+'</td>';}
  else{var tabs=u.tabs||DEFT[u.rol]||[];h+='<td class="c-st">'+U.st(u.rol==='superadmin'?'in':u.rol==='supervisor'?'out':'idle',rolLbl(u.rol))+(u.rol==='supervisor'&&u.canClean?U.meta(E(t('cl_on'))):'')+'</td><td>'+lang2(u.lang)+'</td>'
    +'<td class="c-txt"><span class="fx-strong">'+E(t('n_tabs',{n:tabs.length}))+'</span>'+U.meta(E(tabs.map(function(x){return t('tab_'+x);}).join(', ')))+'</td><td class="c-txt"><span class="fx-ell">'+E(permsOf(u))+'</span></td>';}
  return h+'<td class="c-act">'+usActs(u)+'</td></tr>';
}
function usLi(u,emp){
  var meta=[];if(u.username||u.usuario)meta.push('<span>'+E(u.username||u.usuario)+'</span>');if(u.email)meta.push('<span class="fx-ell">'+E(u.email)+'</span>');if(u.lang)meta.push(lang2(u.lang));if(!emp)meta.push('<span>'+E(permsOf(u))+'</span>');
  return U.li({id:u.id,src:'usuarios',pos:U.av(u.nombre),plate:'',title:E(u.nombre||'–'),meta:meta,st:emp?U.st('idle',rolLbl('empresa')):U.st(u.rol==='superadmin'?'in':u.rol==='supervisor'?'out':'idle',rolLbl(u.rol)),act:usActs(u)});
}
function reqs(){try{if(typeof _gWatchReqs==='function')_gWatchReqs();}catch(e){}var r=window._gReqs||{};return Object.keys(r).filter(function(k){return r[k]&&r[k].status==='pendiente';}).map(function(k){return {k:k,r:r[k]};});}
function reqPanel(){
  var l=reqs();if(!l.length)return '';var AN={};try{(_G_AREAS||[]).forEach(function(a){AN[a[0]]=a[1];});}catch(e){}
  return '<section class="fx-req"><h2>'+t('rq_title')+' <small>'+l.length+'</small></h2><ul class="fx-vl">'+l.map(function(x){var r=x.r,k=' data-v="'+E(x.k)+'"';
    var sub=r.tipo==='empresa'?[t('rq_company'),r.empresa,r.cif,r.contacto,r.tel,r.pais]:(r.areas||[]).map(function(a){return AN[a]||a;});
    return '<li>'+(r.foto?'<img class="fx-avs" src="'+E(r.foto)+'" alt="" referrerpolicy="no-referrer">':U.av(r.nombre||r.email))+'<span class="fx-grow"><b class="fx-strong">'+E(r.nombre||'–')+'</b> <span class="fx-lbl" style="font-size:14px">'+E(r.email||'')+'</span><small>'+E(sub.filter(Boolean).join(' · '))+'</small></span>'+U.btn('rq.ok',I.check,t('rq_ok'),'pri sm',k)+U.btn('rq.no',null,t('rq_no'),'ghost sm',k)+'</li>';}).join('')+'</ul></section>';
}
function ocrPanel(){
  var D=db(),svc=D.ocrService||'vision',st=D.ocrStats||[];
  var agg=function(f){var a=st.filter(f),ok=a.filter(function(s){return s.exito;}).length;return {n:a.length,ok:ok,r:a.length?Math.round(ok/a.length*100):0};};
  var all=agg(function(){return true;}),v=agg(function(s){return (s.servicio||'vision')==='vision';}),l=agg(function(s){return s.servicio==='local';});
  var h='<div class="fx-bar">'+'<span class="fx-lbl">'+t('ocr_svc')+'</span>'+U.seg('ocr.svc',[{v:'vision',lbl:t('ocr_vision')},{v:'local',lbl:t('ocr_local')}],svc,t('ocr_svc'))+'</div>';
  var kp=function(lbl,n,sub,cls){return '<div class="fx-kpi'+(cls?' '+cls:'')+'"><small>'+lbl+'</small><b class="fx-num">'+n+'</b>'+(sub?'<span>'+sub+'</span>':'')+'</div>';};
  var rc=function(r){return r>=70?'ok':r>=40?'mid':'bad';};
  h+='<div class="fx-kpis">'+kp(t('ocr_total'),all.n,'')+kp(t('ocr_rate'),all.r+'%',E(all.ok+' / '+all.n),rc(all.r))+kp(t('ocr_vision'),v.r+'%',E(v.ok+' / '+v.n),rc(v.r))+kp(t('ocr_local'),l.r+'%',E(l.ok+' / '+l.n),rc(l.r))+'</div>';
  if(!st.length)return h+U.empty(t('ocr_empty'),'','');
  var days=[];for(var i=6;i>=0;i--)days.push(FX.ymdOff(-i));
  var by=days.map(function(d){var a=st.filter(function(s){return s.fecha===d;}),ok=a.filter(function(s){return s.exito;}).length;return {d:d,n:a.length,ok:ok};});
  var mx=Math.max.apply(null,by.map(function(x){return x.n;}).concat([1]));
  h+='<h3 class="fx-h3">'+t('ocr_7d')+'</h3><div class="fx-bars">'+by.map(function(x){var r=x.n?Math.round(x.ok/x.n*100):0;return '<div class="fx-barrow"><span class="fx-num">'+E(FX.dayLbl(x.d))+'</span><i><em style="width:'+Math.round(x.n/mx*100)+'%"><s style="width:'+(x.n?Math.round(x.ok/x.n*100):0)+'%"></s></em></i><b class="fx-num">'+x.n+'</b><span class="fx-num">'+(x.n?r+'%':'–')+'</span></div>';}).join('')+'</div>';
  var rec=st.slice().reverse().slice(0,10);
  h+='<h3 class="fx-h3">'+t('ocr_last')+'</h3><ul class="fx-vl">'+rec.map(function(s){var d=s.ts?new Date(s.ts):null;return '<li>'+(s.matricula?U.plate(s.matricula,'','sm'):U.dash)+'<span class="fx-grow"><small style="margin:0">'+E((s.servicio==='local'?t('ocr_local'):t('ocr_vision'))+(d?' · '+FX.dayLbl(s.fecha||'')+', '+('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2):''))+'</small></span>'+U.st(s.exito?'in':'blk',t(s.exito?'ocr_ok':'ocr_ko'))+'</li>';}).join('')+'</ul>';
  h+='<div class="fx-bar" style="justify-content:flex-end;margin-top:16px">'+U.btn('ocr.reset',I.restore,t('ocr_reset'),'dng sm')+'</div>';
  return h;
}
function usRender(){
  if(!can('isSup'))return noPerm(t('tab_usuarios'));
  var D=db(),all=D.usuarios||[],sa=can('isSA'),sub=usSub(),q=String(window._uQ||'').toLowerCase(),rf=window._uFiltRol||'';
  var emps=all.filter(function(u){return u.rol==='empresa';}),ops=all.filter(function(u){return u.rol!=='empresa';});
  var acts='';
  if(sa){acts+='<button type="button" class="fx-btn" data-fx="us.import" aria-haspopup="menu">'+I.up+'<span>'+t('import')+'</span></button>'+U.btn('us.export',I.down,t('export'))+U.btn('us.new',I.plus,t('us_new'),'pri');}
  var h='<div class="fx-page" data-view="usuarios">'+U.ph(t('tab_usuarios'),t('us_sub'),acts);
  if(sa)h+=reqPanel();
  var tabs=[{v:'operadores',lbl:t('us_tab_o'),n:ops.length},{v:'empresas',lbl:t('us_tab_e'),n:emps.length}];if(sa)tabs.push({v:'ocr',lbl:t('us_tab_ocr')});
  h+=U.tabs('us.sub',tabs,sub,t('tab_usuarios'));
  if(sub==='ocr')return h+ocrPanel()+dangerZone()+'</div>';
  var base=sub==='empresas'?emps:ops;
  if(q)base=base.filter(function(u){return (u.nombre||'').toLowerCase().indexOf(q)>=0||(u.usuario||u.username||'').toLowerCase().indexOf(q)>=0||(u.email||'').toLowerCase().indexOf(q)>=0;});
  var rc={'':base.length};ROLES.forEach(function(r){rc[r]=base.filter(function(u){return u.rol===r;}).length;});
  var list=(sub!=='empresas'&&rf)?base.filter(function(u){return u.rol===rf;}):base;
  h+='<div class="fx-bar">'+U.search('usuarios',window._uQ||'',t('us_q'))+(sub!=='empresas'?U.seg('us.rol',[{v:'',lbl:t('rs_all'),n:rc['']}].concat(ROLES.filter(function(r){return rc[r];}).map(function(r){return {v:r,lbl:rolLbl(r),n:rc[r]};})),rf,t('c_role')):'')+'</div>';
  var emp=sub==='empresas';
  if(!list.length)h+=U.empty(t('us_empty'),'','');
  else if(FX.S.lay!=='table')h+=U.list(list.map(function(u){return usLi(u,emp);}).join(''));
  else{var hd=U.th('',null,t('c_user'),{})+(emp?U.th('',null,t('c_lang'),{})+U.th('',null,t('c_comp'),{}):U.th('',null,t('c_role'),{})+U.th('',null,t('c_lang'),{})+U.th('',null,t('c_tabs'),{})+U.th('',null,t('c_perms'),{}))+'<th><span class="fx-sr">'+t('more')+'</span></th>';h+=U.table(hd,list.map(function(u){return usRow(u,emp);}).join(''));}
  return h+dangerZone()+'</div>';
}
function dangerZone(){return can('isSA')?'<section class="fx-danger"><div><h2>'+t('dz_title')+'</h2><p>'+t('dz_p')+'</p></div>'+U.btn('us.reset',I.alert,t('dz_btn'),'dng')+'</section>':'';}
FX.view('usuarios',{render:usRender,wrap:['renderUsuarios']});
FX.wrap('gReqPanelHTML',function(){if(FX.on()&&FX.cur()==='usuarios')FX.sync();});
FX.q('usuarios',function(v){window._uQ=v;call('renderUsuarios');});
FX.row('usuarios',function(id){var me=(FX.cu()||{}).id;if(can('isSA')||me===id)call('openUserModal',id);});
FX.act('us.sub',function(el,id,v){window._fxUSub=v;if(v!=='ocr')window._uSub=v;FX.sync();FX.scrollTop();});
FX.act('us.rol',function(el,id,v){window._uFiltRol=v||'';call('renderUsuarios');});
FX.act('us.new',function(){call('openUserModal');});
FX.act('us.edit',function(el,id){FX.closeMenu();call('openUserModal',id);});
FX.act('us.del',function(el,id){FX.closeMenu();call('askDelUser',id);});
FX.act('us.clean',function(el,id){FX.closeMenu();call('toggleCleanPermission',id);});
FX.act('us.more',function(el,id){var u=(db().usuarios||[]).find(function(x){return x.id===id;});if(!u)return;var x=' data-id="'+E(id)+'"',me=(FX.cu()||{}).id,h='';if(can('isSA')||me===id)h+=U.mi('us.edit',I.edit,t('a_edit'),'',x);if(can('isSA')&&u.rol==='supervisor')h+=U.mi('us.clean',u.canClean?I.lock:I.unlock,t(u.canClean?'a_clean_off':'a_clean_on'),'',x);if(can('isSA')&&u.id!==me)h+='<hr>'+U.mi('us.del',I.trash,t('a_del'),'dng',x);FX.menu(el,h,true);});
FX.act('us.export',function(){call('exportUsuarios');});
FX.act('us.import',function(el){FX.menu(el,'<label role="menuitem" class="fx-mi-file">'+I.sheet+'<span>'+t('import_xlsx')+'</span><input type="file" accept=".xlsx,.xls" hidden onchange="FX.closeMenu();importUsuarios(this)"></label>'+U.mi('us.tpl',I.file,t('import_tpl')),true);});
FX.act('us.tpl',function(){FX.closeMenu();call('dlTemplateUsuarios');});
FX.act('us.reset',function(){call('resetAllData');});
FX.act('rq.ok',function(el,id,v){call('gReqApprove',v);});
FX.act('rq.no',function(el,id,v){call('gReqResolve',v,'rechazada');FX.sync();});
FX.act('ocr.svc',function(el,id,v){call('_setOcrSvc',v);FX.sync();});
FX.act('ocr.reset',function(){if(!window.confirm(t('ocr_reset_q')))return;DB.ocrStats=[];call('saveDB');call('renderUsuarios');FX.sync();});

/* ════════════ ARCHIVOS (auditoría) ════════════ */
var SEC=['blocked','sin_sync_activado','reset_total','limpiar_tab'];
function auSub(){return window._audSub||'sesiones';}
function noSync(){try{return JSON.parse(localStorage.getItem('cu1_noSyncLog')||'[]');}catch(e){return [];}}
function meta(a){a=a||'';
  if(a==='login_ok')return ['in',t('m_login_ok')];if(a==='logout')return ['out',t('m_logout')];if(a==='blocked')return ['blk',t('m_blocked')];
  if(a==='sin_sync_activado')return ['pend',t('m_nosync')];if(a==='reset_total')return ['blk',t('m_reset')];if(a==='limpiar_tab')return ['blk',t('m_clean')];
  if(a==='login')return ['idle',t('m_login')];if(a.indexOf('new')===0)return ['in',t('m_new')];if(a.indexOf('edit')===0)return ['idle',t('m_edit')];
  if(a==='salida')return ['out',t('m_out')];if(a==='reactivar')return ['idle',t('m_react')];if(a.indexOf('del')>=0||a.indexOf('borr')>=0)return ['blk',t('m_del')];return ['idle',a];}
function badge(e){var m=meta(e.action);return U.st(m[0],m[1]);}
function auData(){
  var D=db(),log=D.auditLog||[],ex=(D.exportLog||[]).slice().sort(function(a,b){return String(b.ts||'').localeCompare(String(a.ts||''));}),ns=noSync(),q=String(window._audQ2||'').toLowerCase();
  var hasq=function(s){return !q||String(s).toLowerCase().indexOf(q)>=0;};
  var ses=log.filter(function(e){return e.entity==='sesion';}),act=log.filter(function(e){return e.entity!=='sesion';}),sec=log.filter(function(e){return SEC.indexOf(e.action)>=0;});
  return {cnt:{sesiones:ses.length,acciones:act.length,seguridad:sec.length+ns.length,exportaciones:ex.length,dispositivos:(D.devices||[]).filter(function(d){return d.status==='new';}).length},
    sesiones:ses.filter(function(e){var s=e.session||{};return hasq([e.user,e.detail,s.ip,s.device].join(' '));}),
    acciones:act.filter(function(e){return hasq([e.user,e.action,e.entity,e.detail].join(' '));}),
    seguridad:ns.filter(function(x){return hasq([x.user,x.motivo].join(' '));}).map(function(x){return {ns:1,x:x};}).concat(sec.filter(function(e){return hasq([e.user,e.detail].join(' '));}).map(function(e){return {e:e};})),
    exportaciones:ex.filter(function(e){return hasq([e.user,e.tab,e.filename].join(' '));}),
    dispositivos:(D.devices||[]).slice().sort(function(a,b){return String(b.lastAccess||'').localeCompare(String(a.lastAccess||''));}).filter(function(d){return hasq([d.name,d.lastUser,d.fp].join(' '));}),q:window._audQ2||''};
}
var DVS={trusted:['in','dv_trusted'],blocked:['blk','dv_blocked'],new:['pend','dv_new']};
function auRender(){
  if(!can('isSup'))return noPerm(t('au_title'));
  var sub=auSub(),d=auData(),sa=can('isSA'),acts='';
  if(sa)acts+=U.btn('au.export',I.down,t('export'));
  if(sa&&(sub==='sesiones'||sub==='acciones'||sub==='seguridad'))acts+=U.btn('au.clean',I.trash,t('au_clean'),'dng');
  var h='<div class="fx-page" data-view="auditoria">'+U.ph(t('tab_auditoria'),t('au_sub'),acts);
  h+=U.tabs('au.sub',[{v:'sesiones',lbl:t('au_ses'),n:d.cnt.sesiones},{v:'acciones',lbl:t('au_act'),n:d.cnt.acciones},{v:'seguridad',lbl:t('au_sec'),n:d.cnt.seguridad},{v:'exportaciones',lbl:t('au_exp'),n:d.cnt.exportaciones},{v:'dispositivos',lbl:t('au_dev'),n:d.cnt.dispositivos||null}],sub,t('tab_auditoria'));
  h+='<div class="fx-bar">'+U.search('auditoria',d.q,t('au_q'))+'</div>';
  var items=d[sub]||[],pg=U.page('au_'+sub,d.q,items.map(function(x,i){return {id:i,x:x};})),rows=pg.list.map(function(o){return o.x;}),th=function(l,c){return U.th('',null,l,{},c);};
  var E_={sesiones:'au_e_ses',acciones:'au_e_act',seguridad:'au_e_sec',exportaciones:'au_e_exp',dispositivos:'au_e_dev'};
  if(sub==='dispositivos'){
    var on_=!!db()._devRequireApproval;
    h+='<div class="fx-switchrow"><div><b>'+t('dv_appr')+'</b><small>'+t(on_?'dv_appr_on':'dv_appr_off')+'</small></div><button type="button" class="fx-switch'+(on_?' on':'')+'" role="switch" aria-checked="'+on_+'" aria-label="'+E(t('dv_appr'))+'" data-fx="dv.appr"'+(sa?'':' disabled')+'><i></i></button></div>';
    if(!sa)h+=U.note('',I.info,E(t('dv_sa')));
  }
  if(!items.length)return h+U.empty(t(E_[sub]),t('au_e_p'),'')+'</div>';
  var tbl=FX.S.lay==='table';
  if(!tbl){
    var li=function(o){return U.li({id:'',src:'',pos:'',plate:o.plate||'',title:o.title,meta:o.meta.filter(Boolean),st:o.st,act:o.act||''});};
    var L=rows.map(function(o){
      if(sub==='sesiones'){var s=o.session||{};return li({title:E(o.user||'–'),meta:[o.detail?'<span>'+E(o.detail)+'</span>':'',s.device?'<span>'+E(s.device+(s.browser?' · '+s.browser:''))+'</span>':'',s.ip?'<span class="fx-code" style="font-size:14px">'+E(s.ip)+'</span>':'','<span class="fx-num">'+E(ts(o.ts))+'</span>'],st:badge(o)});}
      if(sub==='acciones')return li({title:E(o.user||'–'),meta:[o.entity?'<span class="fx-lang" style="text-transform:none">'+E(o.entity)+'</span>':'',o.detail?'<span>'+E(o.detail)+'</span>':'','<span class="fx-num">'+E(ts(o.ts))+'</span>'],st:badge(o)});
      if(sub==='seguridad'){if(o.ns)return li({title:E(o.x.user||'–'),meta:['<span>'+E(o.x.motivo||'')+'</span>'],st:U.st('pend',t('m_nosync'))});return li({title:E(o.e.user||'–'),meta:['<span>'+E(o.e.detail||'')+'</span>','<span class="fx-num">'+E(ts(o.e.ts))+'</span>'],st:badge(o.e)});}
      if(sub==='exportaciones')return li({title:E(o.user||'–'),meta:['<span>'+E(o.tab||'')+'</span>','<span class="fx-code" style="font-size:14px">'+E(o.filename||'')+'</span>','<span class="fx-num">'+E(ts(o.ts))+'</span>'],st:''});
      var s2=DVS[o.status||'new']||DVS['new'],x=' data-id="'+E(o.id)+'"',a='';if(sa){if(o.status!=='trusted')a+=U.btn('dv.trust',I.check,t('a_trust'),'go sm',x);a+=U.ibtn('dv.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"');}
      return li({title:E(o.name||'–'),meta:['<span>'+E(o.lastUser||'–')+'</span>','<span class="fx-num">'+E(ts(o.lastAccess))+'</span>'],st:U.st(s2[0],t(s2[1])),act:U.acts(a)});
    }).join('');
    return h+U.list(L)+U.foot('au_'+sub,rows.length,items.length)+'</div>';
  }
  if(sub==='sesiones')h+=U.table(th(t('c_state'))+th(t('c_user'))+th(t('c_detail'))+(tbl?th(t('c_device'))+th(t('c_ip')):'')+th(t('c_when2')),rows.map(function(e){var s=e.session||{};return '<tr><td class="c-st">'+badge(e)+'</td><td class="fx-strong">'+E(e.user||'–')+'</td><td class="c-txt"><span class="fx-ell">'+E(e.detail||'–')+'</span></td>'+(tbl?'<td>'+(s.device?E(s.device+(s.browser?' · '+s.browser:'')):U.dash)+'</td><td class="fx-code" style="font-size:14.5px">'+E(s.ip||'–')+'</td>':'')+'<td class="fx-num c-time">'+E(ts(e.ts)||'–')+'</td></tr>';}).join(''));
  else if(sub==='acciones')h+=U.table(th(t('c_type'))+th(t('c_user'))+(tbl?th(t('c_entity')):'')+th(t('c_detail'))+th(t('c_when2')),rows.map(function(e){return '<tr><td class="c-st">'+badge(e)+'</td><td class="fx-strong">'+E(e.user||'–')+'</td>'+(tbl?'<td>'+(e.entity?'<span class="fx-lang" style="text-transform:none;letter-spacing:.02em">'+E(e.entity)+'</span>':U.dash)+'</td>':'')+'<td class="c-txt"><span class="fx-ell">'+E(e.detail||'–')+'</span></td><td class="fx-num c-time">'+E(ts(e.ts)||'–')+'</td></tr>';}).join(''));
  else if(sub==='seguridad')h+=U.table(th(t('c_type'))+th(t('c_user'))+th(t('c_detail'))+(tbl?th(t('c_ip')):'')+th(t('c_when2')),rows.map(function(o){if(o.ns){var x=o.x,dt=x.ts?new Date(x.ts):null;return '<tr class="pend"><td class="c-st">'+U.st('pend',t('m_nosync'))+'</td><td class="fx-strong">'+E(x.user||'–')+U.meta(E(x.rol||''))+'</td><td class="c-txt"><span class="fx-ell">'+E(x.motivo||'–')+'</span></td>'+(tbl?'<td class="c-txt"><span class="fx-ell fx-lbl" style="font-size:13px">'+E(String(x.ua||'').slice(0,60))+'</span></td>':'')+'<td class="fx-num c-time">'+E(dt?FX.dayLbl(dt.getFullYear()+'-'+('0'+(dt.getMonth()+1)).slice(-2)+'-'+('0'+dt.getDate()).slice(-2))+', '+('0'+dt.getHours()).slice(-2)+':'+('0'+dt.getMinutes()).slice(-2):'–')+'</td></tr>';}var e=o.e,s=e.session||{};return '<tr class="blk"><td class="c-st">'+badge(e)+'</td><td class="fx-strong">'+E(e.user||'–')+'</td><td class="c-txt"><span class="fx-ell">'+E(e.detail||'–')+'</span></td>'+(tbl?'<td class="fx-code" style="font-size:14.5px">'+E(s.ip||'')+'</td>':'')+'<td class="fx-num c-time">'+E(ts(e.ts)||'–')+'</td></tr>';}).join(''));
  else if(sub==='exportaciones')h+=U.table(th(t('c_when2'))+th(t('c_user'))+(tbl?th(t('c_role')):'')+th(t('c_tab'))+th(t('c_file')),rows.map(function(e){return '<tr><td class="fx-num c-time">'+E(ts(e.ts)||'–')+'</td><td class="fx-strong">'+E(e.user||'–')+'</td>'+(tbl?'<td>'+E(e.rol?rolLbl(e.rol):'–')+'</td>':'')+'<td>'+E(e.tab||'–')+'</td><td class="c-txt"><span class="fx-ell fx-code" style="font-size:14.5px">'+E(e.filename||'–')+'</span></td></tr>';}).join(''));
  else if(sub==='dispositivos')h+=U.table(th(t('c_device'))+th(t('c_user'))+th(t('c_last'))+th(t('c_state'))+'<th><span class="fx-sr">'+t('more')+'</span></th>',rows.map(function(dv){var s=DVS[dv.status||'new']||DVS['new'],x=' data-id="'+E(dv.id)+'"',a='';if(sa){if(dv.status!=='trusted')a+=U.btn('dv.trust',I.check,t('a_trust'),'go sm',x);a+=U.ibtn('dv.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"');}
    return '<tr class="'+(dv.status==='blocked'?'blk':dv.status==='new'||!dv.status?'pend':'')+'"><td class="c-who"><span class="fx-who"><span class="fx-avs sq" style="width:34px;height:34px">'+I.monitor+'</span><span><span class="fx-strong fx-ell">'+E(dv.name||'–')+'</span>'+U.meta(E(String(dv.fp||'').slice(0,8)),'fx-code')+'</span></span></td><td>'+E(dv.lastUser||'–')+'</td><td class="fx-num c-time">'+E(ts(dv.lastAccess)||'–')+'</td><td class="c-st">'+U.st(s[0],t(s[1]))+'</td><td class="c-act">'+U.acts(a)+'</td></tr>';}).join(''));
  h+=U.foot('au_'+sub,rows.length,items.length);
  return h+'</div>';
}
FX.view('auditoria',{render:auRender,wrap:['renderAuditoria']});
FX.q('auditoria',function(v){window._audQ2=v;call('renderAuditoria');});
FX.act('au.sub',function(el,id,v){window._audSub=v;call('renderAuditoria');FX.scrollTop();});
FX.act('au.export',function(){call('exportAuditLog');});
FX.act('au.clean',function(){if(!window.confirm(t('au_clean_q')))return;DB.auditLog=[];call('saveDB');call('renderAuditoria');});
FX.act('dv.appr',function(){if(!can('isSA'))return;var v=!DB._devRequireApproval;DB._devRequireApproval=v;call('saveDB');call('renderAuditoria');var dot=document.getElementById('devApprovalDot');if(dot)dot.style.display=v?'block':'none';call('toast',v?'🔒 '+t('dv_appr_on'):'🔓 '+t('dv_appr_off'),v?'#4a5568':'var(--text2)');});
FX.act('dv.trust',function(el,id){FX.closeMenu();call('setDeviceStatus',id,'trusted');});
FX.act('dv.block',function(el,id){FX.closeMenu();call('setDeviceStatus',id,'blocked');});
FX.act('dv.rename',function(el,id){FX.closeMenu();call('renameDevice',id);});
FX.act('dv.del',function(el,id){FX.closeMenu();call('deleteDevice',id);});
FX.act('dv.more',function(el,id){var dv=(db().devices||[]).find(function(x){return x.id===id;});if(!dv)return;var x=' data-id="'+E(id)+'"',h=U.mi('dv.rename',I.edit,t('a_rename'),'',x);if(dv.status!=='trusted')h+=U.mi('dv.trust',I.check,t('a_trust'),'',x);if(dv.status!=='blocked')h+=U.mi('dv.block',I.lock,t('a_dblock'),'',x);h+='<hr>'+U.mi('dv.del',I.trash,t('a_del'),'dng',x);FX.menu(el,h,true);});

/* ════════════ PAPELERA ════════════ */
var SEL={};
function ppLbl(o){var k='o_'+o;return t(k)!==k?t(k):(o||'–');}
function ppTitle(p){var i=p.item||{};return i.matricula||[i.nombre,i.apellido].filter(Boolean).join(' ')||i.referencia||i.titulo||String(p.id||'').slice(0,8);}
function ppSub(p){var i=p.item||{};return i.empresa||(i.matricula&&i.nombre?[i.nombre,i.apellido].filter(Boolean).join(' '):'')||i.mensaje||'';}
function ppRec(id){return (db().papelera||[]).find(function(x){return x.id===id;});}
function ppData(){
  var D=db(),all=D.papelera||[],q=String(D._papQ||'').toLowerCase(),f=D._papFiltro||'';
  var oc={};all.forEach(function(p){oc[p.origen]=(oc[p.origen]||0)+1;});
  var items=all.filter(function(p){return (!f||p.origen===f)&&(!q||JSON.stringify(p.item).toLowerCase().indexOf(q)>=0);}).sort(function(a,b){return String(b.ts||'').localeCompare(String(a.ts||''));});
  Object.keys(SEL).forEach(function(k){if(!all.some(function(p){return p.id===k;}))delete SEL[k];});
  return {items:items,oc:oc,total:all.length,f:f,q:D._papQ||''};
}
function chk(id,on_){return '<input type="checkbox" class="papelera-chk fx-chk" data-pid="'+E(id)+'"'+(on_?' checked':'')+' aria-label="'+E(t('sel_all'))+'">';}
function ppActs(p){var x=' data-id="'+E(p.id)+'"';return U.acts(U.btn('pp.restore',I.restore,t('a_restore'),'go sm',x)+((can('canDel')||can('isSA'))?U.ibtn('pp.purge',I.trash,t('a_purge'),'ghost sm',x):''));}
function ppRender(){
  var d=ppData(),sa=can('isSA'),n=Object.keys(SEL).length,acts='';
  if(can('canExport')||sa)acts+=U.btn('pp.export',I.down,t('export'));
  if(sa)acts+=fileBtn('importPapelera',I.up,t('import'))+U.ibtn('pp.tpl',I.file,t('tpl'),'');
  if(sa&&d.total)acts+=U.btn('pp.empty',I.trash,t('pp_vaciar'),'dng');
  var h='<div class="fx-page" data-view="papelera">'+U.ph(t('tab_papelera'),t('pp_sub'),acts);
  if(!d.total)return h+U.empty(t('pp_empty'),t('pp_empty_p'),'')+'</div>';
  var opts=[{v:'',lbl:t('st_all'),n:d.total}].concat(Object.keys(d.oc).map(function(k){return {v:k,lbl:E(ppLbl(k)),n:d.oc[k]};}));
  h+='<div class="fx-bar">'+U.search('papelera',d.q,t('pp_q'))+U.seg('pp.f',opts,d.f,t('c_origin'))+'</div>';
  var pg=U.page('papelera',[d.q,d.f].join('|'),d.items),shown={};pg.list.forEach(function(p){shown[p.id]=1;});
  Object.keys(SEL).forEach(function(k){if(!shown[k])delete SEL[k];});n=Object.keys(SEL).length;
  if(n)h+='<div class="fx-selbar" role="region" aria-live="polite"><b>'+E(cnt(n,'n_sel1','n_sel'))+'</b>'+U.btn('pp.selClear',I.x,t('sel_clear'),'ghost sm')+'<span class="fx-grow"></span>'+U.btn('pp.restoreSel',I.restore,t('a_restore'),'go sm')+((can('canDel')||sa)?U.btn('pp.purgeSel',I.trash,t('a_purge'),'dng sm'):'')+'</div>';
  if(!d.items.length)h+=d.q?U.empty(t('empty_q'),t('empty_q_p'),U.btn('qclr',I.x,t('clear_q'),'',' data-k="papelera"')):U.empty(t('pp_empty'),'','');
  else if(FX.S.lay!=='table')h+=U.list(pg.list.map(function(p){var meta=[U.st('idle',ppLbl(p.origen))];if(ppSub(p))meta.push('<span class="fx-ell">'+E(ppSub(p))+'</span>');meta.push('<span class="fx-num">'+E((p.borradoPor||'–')+' · '+ts(p.ts))+'</span>');var hasM=p.item&&p.item.matricula;if(hasM&&ppSub(p))meta.splice(1,1);return U.li({id:p.id,src:'papelera',cls:SEL[p.id]?'sel':'',pos:chk(p.id,SEL[p.id]),plate:hasM?U.plate(p.item.matricula,'','sm'):'',title:E(hasM?(ppSub(p)||ppLbl(p.origen)):ppTitle(p)),meta:meta,st:'',act:ppActs(p)});}).join(''));
  else{
    var allOn=pg.list.length&&pg.list.every(function(p){return SEL[p.id];});
    var head='<th class="c-chk"><input type="checkbox" class="fx-chk fx-ppall"'+(allOn?' checked':'')+' aria-label="'+E(t('sel_all'))+'"></th>'+U.th('',null,t('c_origin'),{})+U.th('',null,t('c_content'),{})+U.th('',null,t('c_delby'),{})+U.th('',null,t('c_delwhen'),{})+'<th><span class="fx-sr">'+t('more')+'</span></th>';
    h+=U.table(head,pg.list.map(function(p){var i=p.item||{};return '<tr class="'+(SEL[p.id]?'sel':'')+'" data-fxrow="'+E(p.id)+'" data-src="papelera"><td class="c-chk">'+chk(p.id,SEL[p.id])+'</td><td class="c-st">'+U.st('idle',ppLbl(p.origen))+'</td><td class="c-txt">'+(i.matricula?U.plate(i.matricula,'','sm')+(ppSub(p)?U.meta(E(ppSub(p))):''):'<span class="fx-strong fx-ell">'+E(ppTitle(p))+'</span>'+(ppSub(p)?U.meta(E(ppSub(p))):''))+'</td><td>'+E(p.borradoPor||'–')+'</td><td class="fx-num c-time">'+E(ts(p.ts)||'–')+'</td><td class="c-act">'+ppActs(p)+'</td></tr>';}).join(''));
  }
  h+=U.foot('papelera',pg.list.length,d.items.length);
  return h+'</div>';
}
FX.view('papelera',{render:ppRender,wrap:['renderPapelera']});
FX.q('papelera',function(v){var D=FX.db();if(!D)return;D._papQ=v;call('renderPapelera');});
FX.row('papelera',function(id){openPpDrawer(id);});
FX.act('pp.f',function(el,id,v){var D=FX.db();if(!D)return;D._papFiltro=v||'';call('renderPapelera');});
FX.act('pp.export',function(){call('exportPapelera');});
FX.act('pp.tpl',function(){call('dlTemplatePapelera');});
FX.act('pp.empty',function(){call('vaciarPapelera');FX.sync();});
FX.act('pp.restore',function(el,id){FX.drawer.close();delete SEL[id];call('restoreFromPapelera',id);});
FX.act('pp.purge',function(el,id){FX.drawer.close();delete SEL[id];call('purgeFromPapelera',id);});
FX.act('pp.selClear',function(){SEL={};FX.sync();});
FX.act('pp.restoreSel',function(){call('restaurarSeleccion');SEL={};FX.sync();});
FX.act('pp.purgeSel',function(){call('purgeSelectedPapelera');SEL={};FX.sync();});
document.addEventListener('change',function(e){
  var el=e.target;if(!FX.on()||!el||!el.closest||!el.closest('#fxMain'))return;
  if(el.classList.contains('papelera-chk')){var id=el.getAttribute('data-pid');if(el.checked)SEL[id]=1;else delete SEL[id];FX.sync();}
  else if(el.classList.contains('fx-ppall')){var on_=el.checked;document.querySelectorAll('#fxMain .papelera-chk').forEach(function(c){var id=c.getAttribute('data-pid');if(on_)SEL[id]=1;else delete SEL[id];});FX.sync();}
});
function openPpDrawer(id){
  FX.drawer.open(function(){
    var p=ppRec(id);if(!p)return null;var i=p.item||{},x=' data-id="'+E(p.id)+'"';
    var h='<div class="fx-dr-h"><div class="fx-dr-id">'+(i.matricula?'<span class="fx-dr-plates">'+U.plate(i.matricula,'','lg')+'</span>':'<span class="fx-dr-who"><span><small>'+t('pp_item')+'</small><b>'+E(ppTitle(p))+'</b></span></span>')+'</div>'+U.ibtn('drClose',I.x,t('close'),'ghost')+'</div>';
    h+='<div class="fx-dr-b"><div class="fx-dr-st">'+U.st('idle',ppLbl(p.origen))+'<span class="fx-lbl">'+E((p.borradoPor||'–')+' · '+ts(p.ts))+'</span></div>';
    var skip={id:1,_ts:1,__st:1};
    h+='<h3>'+t('dr_data')+'</h3>'+U.dl(Object.keys(i).filter(function(k){var v=i[k];return !skip[k]&&v!=null&&v!==''&&typeof v!=='object';}).map(function(k){return [k,String(i[k])];}).concat(Object.keys(i).filter(function(k){return Array.isArray(i[k])&&i[k].length&&typeof i[k][0]!=='object';}).map(function(k){return [k,i[k].join(', ')];})));
    h+='</div><div class="fx-dr-f">'+U.btn('pp.restore',I.restore,t('a_restore'),'pri',x)+((can('canDel')||can('isSA'))?U.btn('pp.purge',I.trash,t('a_purge'),'dng',x):'')+'</div>';
    return h;
  });
}
/* ════════════ IMPRESIÓN (editor actual, con cabecera FUTURE) ════════════ */
FX.addT({es:{im_sub:'Diseña la ficha que se imprime para cada vehículo: campos, tamaño de letra, papel, textos y códigos QR. Los cambios se ven en el lienzo central.'},
 en:{im_sub:'Design the sheet printed for each vehicle: fields, font size, paper, texts and QR codes. Changes show on the central canvas.'},
 de:{im_sub:'Gestalten Sie das Blatt, das für jedes Fahrzeug gedruckt wird: Felder, Schriftgröße, Papier, Texte und QR-Codes. Änderungen erscheinen auf der Arbeitsfläche.'}});
FX.addT({es:{im_notpl:'Sin plantilla asignada'},en:{im_notpl:'No template assigned'},de:{im_notpl:'Keine Vorlage zugewiesen'}});
FX.hostHead('impresion',function(){setTimeout(impDec,0);return '<div class="fx-page fx-imp-hd">'+U.ph(t('tab_impresion'),'','')+'</div>';});
/* Etapa 9: pestañas con nombre (agrupadas) y enfoque compatible con la rejilla FUTURE. Solo marco; no toca datos. */
var IMP_T={ing1:'tab_ingresos',ing2:'tab_ingresos2',ag:'tab_agenda',cond:'tab_conductores',flota:'tab_flota'};
function impDec(){
  if(!FX.on())return;
  var el=document.getElementById('tab-impresion');if(!el)return;
  var bar=el.querySelector('.app-main>div');if(!bar||bar.classList.contains('fx-imp-bar'))return;
  var btns=[].filter.call(bar.children,function(b){return b.tagName==='BUTTON'&&/_impSub='/.test(b.getAttribute('onclick')||'');});
  if(!btns.length)return;
  bar.classList.add('fx-imp-bar');
  var grp=document.createElement('div');grp.className='fx-imp-tabs';grp.setAttribute('role','tablist');
  var cur=window._impSub||'ing1';
  btns.forEach(function(b){
    var k=((b.getAttribute('onclick')||'').match(/_impSub='(\w+)'/)||[])[1];
    var s=document.createElement('span');s.className='fx-imp-lbl';s.textContent=IMP_T[k]?t(IMP_T[k]):(b.getAttribute('title')||'').split(' — ')[0];
    b.appendChild(s);
    if(/ — Sin plantilla$/.test(b.getAttribute('title')||'')){var d=document.createElement('i');d.title=t('im_notpl');b.appendChild(d);}
    b.setAttribute('role','tab');b.setAttribute('aria-selected',k===cur?'true':'false');
    if(k===cur)b.classList.add('on');
    grp.appendChild(b);
  });
  var acts=document.querySelector('#fxLegacy .fx-imp-hd .fx-acts');
  if(acts){acts.innerHTML='';acts.appendChild(grp);}else bar.insertBefore(grp,bar.firstChild);
  /* «Auto» ajusta el papel al ancho disponible (guarda el zoom, como hacía «Auto») */
  var ab=[].filter.call(bar.querySelectorAll('[id^="pc-toolbar-"] button'),function(b){return /pcSetZoom\(/.test(b.getAttribute('onclick')||'');})[0];
  if(ab){ab.removeAttribute('onclick');ab.addEventListener('click',function(){impFit(window._impSub||'ing1',true);});}
  setTimeout(function(){impFit(cur,false);},180);setTimeout(function(){impFit(cur,false);},650);
  var of=window.pcToggleFocus;
  if(typeof of==='function'&&!of.__fx){
    var w=function(ck){var r=of.apply(this,arguments);
      var o=document.querySelector('.pc-outer-'+ck);
      if(o&&FX.on()){var f=!!(window._pcFocusMode||{})[ck];o.classList.toggle('fx-focus',f);if(!f){o.style.removeProperty('grid-template-columns');setTimeout(function(){impFit(ck,false);},250);}}
      return r;};
    w.__fx=1;window.pcToggleFocus=w;
  }
}
/* Si el zoom guardado no cabe en el hueco del lienzo, se ajusta solo a la vista (sin guardar) */
function impFit(ck,save){
  if(!FX.on())return;
  var pv=document.getElementById('pv-'+ck),wr=document.getElementById('pc-canvas-wrap-'+ck);if(!pv||!wr||!wr.clientWidth)return;
  var bw=pv.offsetWidth||794,bh=pv.offsetHeight||1123,av=wr.clientWidth-6;
  var z=Math.max(30,Math.min(150,Math.floor(av/bw*100)));
  if(save){if(typeof window.pcSetZoom==='function')window.pcSetZoom(ck,Math.min(z,100));return;}
  var sl=document.getElementById('pc-zoom-'+ck),cz=parseInt(sl&&sl.value,10)||76;
  if(bw*cz/100<=av)return;
  var sc=z/100;pv.style.transform='scale('+sc+')';pv.style.transformOrigin='top left';
  wr.style.height=Math.round(bh*sc+20)+'px';
  if(sl)sl.value=z;var lb=document.getElementById('pc-zoom-lbl-'+ck);if(lb)lb.textContent=z+'%';
}
var _impRz=0;window.addEventListener('resize',function(){clearTimeout(_impRz);_impRz=setTimeout(function(){if(FX.on()&&document.querySelector('.fx-imp-tabs'))impFit(window._impSub||'ing1',false);},200);});
(function(){var o=window.renderImpresion;if(typeof o!=='function'||o.__fx)return;
  var w=function(){var r=o.apply(this,arguments);try{impDec();}catch(e){}return r;};w.__fx=1;window.renderImpresion=w;})();
})();
