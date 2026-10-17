/* BeUnifyT FUTURE · Datos: Dashboard, Historial de vehículos y Análisis.
   Solo lectura de DB más las acciones existentes (exportar, importar, limpiar con PIN). */
(function(){
'use strict';
var FX=window.FX;if(!FX)return;
var I=FX.I,t=FX.t,E=FX.E,U=FX.ui,call=FX.call,can=FX.can;

FX.addT({
es:{ds_sub_ev:'Situación de {ev} en tiempo real.',ds_sub:'Situación de todos los eventos.',ds_ev:'Evento activo',ds_all:'Todos los eventos',
 k_in:'En recinto',k_today:'Entradas hoy',k_today_s:'Referencia {a} · Ingresos {b}',k_ing:'Ingresos',k_ref:'Referencia',k_ag:'Agenda hoy',k_ag_s:'{n} pendientes',k_pre:'Preregistros',k_pre_s:'{n} empresas',k_msg:'{n} mensajes sin leer para la rampa',k_msg1:'1 mensaje sin leer para la rampa',open:'Abrir',
 p_7d:'Últimos 7 días',p_14d:'Últimos 14 días',p_hour:'Hoy por hora',p_hour_all:'Por hora del día',p_halls:'Halls más activos',p_split:'Referencia frente a Ingresos',p_trk:'Tracking por paso',p_pre:'Preregistros de empresas',p_ag:'Agenda de hoy',p_last:'Últimos ingresos',p_emp:'Empresas con más entradas',p_veh:'Tipos de vehículo',p_unl:'Tipo de descarga',p_stay:'Tiempo en recinto',
 no_data:'Sin datos todavía.',no_today:'Sin entradas hoy.',no_trk:'Sin pasos de tracking registrados.',no_ag:'No hay citas para hoy.',see_ag:'Ver agenda',see_ing:'Ver ingresos',this_ev:'Este evento',total:'Total',companies:'Empresas',
 vh_sub:'Cada matrícula que ha entrado alguna vez, con su conductor y su último ingreso.',vh_q:'Buscar por matrícula, conductor, empresa o teléfono',vh_empty:'Todavía no hay vehículos',vh_empty_p:'Se llenan solos al registrar ingresos.',c_visits2:'Ingresos',c_lastev:'Último evento',c_lastin:'Último ingreso',vh_clean:'Limpiar el evento activo',vh_wipe:'Vaciar todo el historial',vh_pin:'Piden el PIN de SuperAdmin y descargan una copia antes de borrar.',n_vh:'{n} vehículos',n_vh1:'1 vehículo',dr_last10:'Últimos ingresos',
 an_sub:'Explora los ingresos por día, hora, hall, empresa y tipo de vehículo.',an_src:'Origen',an_all:'Todo',an_filters:'Filtros',an_clear:'Quitar filtros',an_metrics:'Métricas',an_fields:'Campos y totales',an_export:'Exportar día',
 an_state:'Estado',an_unl:'Descarga',an_vt:'Tipo de vehículo',an_load:'Carga',an_hour:'Hora',an_emp:'Empresa',an_emp_ph:'Filtrar por empresa',an_any:'Cualquiera',k_rec:'Registros',k_stay:'Estancia media',k_stay_s:'Mediana {m}',
 m_ingresos:'Días',m_horario:'Horas',m_halls:'Halls',m_empresas:'Empresas',m_vehiculos:'Tipos de vehículo',m_descarga:'Descarga',m_estancia:'Estancia',m_refvsing:'Referencia frente a Ingresos',m_tracking:'Tracking',m_agenda:'Agenda',
 st_min:'Mínimo {v}',st_max:'Máximo {v}',st_none:'Sin entradas con salida en estos filtros.',h_n:'{h}:00',tap_filter:'Pulsa una barra para filtrar.'},
en:{ds_sub_ev:'Live status of {ev}.',ds_sub:'Status across all events.',ds_ev:'Active event',ds_all:'All events',
 k_in:'On site',k_today:'Entries today',k_today_s:'Reference {a} · Entries {b}',k_ing:'Entries',k_ref:'Reference',k_ag:'Schedule today',k_ag_s:'{n} pending',k_pre:'Pre-registrations',k_pre_s:'{n} companies',k_msg:'{n} unread messages for the ramp',k_msg1:'1 unread message for the ramp',open:'Open',
 p_7d:'Last 7 days',p_14d:'Last 14 days',p_hour:'Today by hour',p_hour_all:'By hour of day',p_halls:'Busiest halls',p_split:'Reference vs entries',p_trk:'Tracking by step',p_pre:'Company pre-registrations',p_ag:'Today\'s schedule',p_last:'Latest entries',p_emp:'Companies with most entries',p_veh:'Vehicle types',p_unl:'Unloading type',p_stay:'Time on site',
 no_data:'No data yet.',no_today:'No entries today.',no_trk:'No tracking steps recorded.',no_ag:'No appointments today.',see_ag:'View schedule',see_ing:'View entries',this_ev:'This event',total:'Total',companies:'Companies',
 vh_sub:'Every plate that has ever entered, with its driver and latest entry.',vh_q:'Search by plate, driver, company or phone',vh_empty:'No vehicles yet',vh_empty_p:'They fill in automatically as entries are recorded.',c_visits2:'Entries',c_lastev:'Latest event',c_lastin:'Latest entry',vh_clean:'Clear active event',vh_wipe:'Empty the whole history',vh_pin:'Both ask for the SuperAdmin PIN and download a copy before deleting.',n_vh:'{n} vehicles',n_vh1:'1 vehicle',dr_last10:'Latest entries',
 an_sub:'Explore entries by day, hour, hall, company and vehicle type.',an_src:'Source',an_all:'All',an_filters:'Filters',an_clear:'Clear filters',an_metrics:'Metrics',an_fields:'Fields and totals',an_export:'Export day',
 an_state:'Status',an_unl:'Unloading',an_vt:'Vehicle type',an_load:'Load',an_hour:'Hour',an_emp:'Company',an_emp_ph:'Filter by company',an_any:'Any',k_rec:'Records',k_stay:'Average stay',k_stay_s:'Median {m}',
 m_ingresos:'Days',m_horario:'Hours',m_halls:'Halls',m_empresas:'Companies',m_vehiculos:'Vehicle types',m_descarga:'Unloading',m_estancia:'Stay',m_refvsing:'Reference vs entries',m_tracking:'Tracking',m_agenda:'Schedule',
 st_min:'Min {v}',st_max:'Max {v}',st_none:'No entries with exit for these filters.',h_n:'{h}:00',tap_filter:'Tap a bar to filter.'},
de:{ds_sub_ev:'Live-Status von {ev}.',ds_sub:'Status aller Veranstaltungen.',ds_ev:'Aktive Veranstaltung',ds_all:'Alle Veranstaltungen',
 k_in:'Auf dem Gelände',k_today:'Einfahrten heute',k_today_s:'Referenzen {a} · Einfahrten {b}',k_ing:'Einfahrten',k_ref:'Referenzen',k_ag:'Zeitplan heute',k_ag_s:'{n} ausstehend',k_pre:'Voranmeldungen',k_pre_s:'{n} Firmen',k_msg:'{n} ungelesene Nachrichten für die Rampe',k_msg1:'1 ungelesene Nachricht für die Rampe',open:'Öffnen',
 p_7d:'Letzte 7 Tage',p_14d:'Letzte 14 Tage',p_hour:'Heute nach Stunde',p_hour_all:'Nach Tageszeit',p_halls:'Aktivste Hallen',p_split:'Referenzen und Einfahrten',p_trk:'Tracking nach Schritt',p_pre:'Voranmeldungen von Firmen',p_ag:'Zeitplan heute',p_last:'Letzte Einfahrten',p_emp:'Firmen mit den meisten Einfahrten',p_veh:'Fahrzeugtypen',p_unl:'Entladeart',p_stay:'Verweildauer',
 no_data:'Noch keine Daten.',no_today:'Heute keine Einfahrten.',no_trk:'Keine Tracking-Schritte erfasst.',no_ag:'Heute keine Termine.',see_ag:'Zeitplan ansehen',see_ing:'Einfahrten ansehen',this_ev:'Diese Veranstaltung',total:'Gesamt',companies:'Firmen',
 vh_sub:'Jedes Kennzeichen, das je eingefahren ist, mit Fahrer und letzter Einfahrt.',vh_q:'Nach Kennzeichen, Fahrer, Firma oder Telefon suchen',vh_empty:'Noch keine Fahrzeuge',vh_empty_p:'Füllt sich automatisch mit jeder Einfahrt.',c_visits2:'Einfahrten',c_lastev:'Letzte Veranstaltung',c_lastin:'Letzte Einfahrt',vh_clean:'Aktive Veranstaltung leeren',vh_wipe:'Gesamten Verlauf leeren',vh_pin:'Beide verlangen die SuperAdmin-PIN und laden vorher eine Sicherung herunter.',n_vh:'{n} Fahrzeuge',n_vh1:'1 Fahrzeug',dr_last10:'Letzte Einfahrten',
 an_sub:'Einfahrten nach Tag, Stunde, Halle, Firma und Fahrzeugtyp auswerten.',an_src:'Quelle',an_all:'Alle',an_filters:'Filter',an_clear:'Filter entfernen',an_metrics:'Kennzahlen',an_fields:'Felder und Summen',an_export:'Tag exportieren',
 an_state:'Status',an_unl:'Entladung',an_vt:'Fahrzeugtyp',an_load:'Ladung',an_hour:'Uhrzeit',an_emp:'Firma',an_emp_ph:'Nach Firma filtern',an_any:'Beliebig',k_rec:'Datensätze',k_stay:'Mittlere Verweildauer',k_stay_s:'Median {m}',
 m_ingresos:'Tage',m_horario:'Stunden',m_halls:'Hallen',m_empresas:'Firmen',m_vehiculos:'Fahrzeugtypen',m_descarga:'Entladung',m_estancia:'Verweildauer',m_refvsing:'Referenzen und Einfahrten',m_tracking:'Tracking',m_agenda:'Zeitplan',
 st_min:'Min. {v}',st_max:'Max. {v}',st_none:'Keine Einfahrten mit Ausfahrt für diese Filter.',h_n:'{h}:00',tap_filter:'Tippen Sie auf einen Balken zum Filtern.'}
});

function db(){return FX.db()||{};}
function cnt(n,k1,kn){return n===1?t(k1):t(kn,{n:n});}
function ymd(off){return FX.ymdOff(off);}
function hourOf(s){var p=FX.parseTs(s);return p&&p.hm?parseInt(p.hm.slice(0,2),10):-1;}
function fmtMin(m){m=Math.round(m);var h=Math.floor(m/60),mm=m%60;return h?h+' h '+(mm<10?'0':'')+mm+' min':mm+' min';}
var TK={es:{rampa:'Rampa',cabina:'Cabina',salida_parking:'Salida del parking',en_ruta:'En ruta al recinto',entrada_recinto:'Entrada al recinto',descarga:'Descarga',carga:'Carga',en_espera:'En espera',retorno:'Retorno al parking',terminado:'Servicio terminado'},
  en:{rampa:'Ramp',cabina:'Booth',salida_parking:'Left parking',en_ruta:'On the way to venue',entrada_recinto:'Venue entry',descarga:'Unloading',carga:'Loading',en_espera:'Waiting',retorno:'Back to parking',terminado:'Service completed'},
  de:{rampa:'Rampe',cabina:'Kabine',salida_parking:'Parkplatz verlassen',en_ruta:'Unterwegs zum Gelände',entrada_recinto:'Einfahrt Gelände',descarga:'Entladung',carga:'Beladung',en_espera:'Wartet',retorno:'Zurück zum Parkplatz',terminado:'Service abgeschlossen'}};
function tkLbl(id){var l=(TK[FX.lang()]||TK.es)[id];if(l)return l;try{var s=(TRACKING_STEPS||[]).find(function(x){return x.id===id;});if(s)return s.name;}catch(e){}return id;}

/* ── Gráficos (HTML/CSS, sin librerías) ── */
function cols(list,o){
  o=o||{};var mx=Math.max.apply(null,list.map(function(c){return (c.a||0)+(c.b||0);}).concat([1]));
  var h='<div class="fx-cols'+(o.dense?' dense':'')+'" role="img" aria-label="'+E(o.aria||'')+'">';
  var L=FX.S.lay,step=Math.max(1,Math.ceil(list.length/(L==='cards'?7:L==='list'?12:31))),showV=list.length<=(L==='cards'?8:31);
  list.forEach(function(c,ix){var v=(c.a||0)+(c.b||0),pct=Math.round(v/mx*100),lb=(c.hl||(ix%step===0&&!(step>1&&list[ix+1]&&list[ix+1].hl)))?c.lbl:'';
    var tag=o.act?'button type="button" data-fx="'+o.act+'" data-v="'+E(c.k)+'"':'div';
    h+='<'+tag+' class="fx-col'+(c.on?' on':'')+(c.hl?' hl':'')+'" title="'+E(c.lbl+': '+v)+'"><span class="fx-col-b"><span class="fx-col-v fx-num">'+(v&&(showV||c.hl||c.on)?v:'')+'</span><i style="height:'+(v?Math.max(Math.round(pct*0.86),3):0)+'%">'+(c.b?'<em class="s2" style="flex:'+c.b+'"></em>':'')+(c.a?'<em class="s1" style="flex:'+c.a+'"></em>':'')+'</i></span><span class="fx-col-l">'+E(lb)+'</span></'+(o.act?'button':'div')+'>';});
  return h+'</div>';
}
function legend(items){return '<div class="fx-legend">'+items.map(function(x){return '<span><i class="'+x[0]+'"></i>'+E(x[1])+'</span>';}).join('')+'</div>';}
function hbars(rows,o){
  o=o||{};if(!rows.length)return '<p class="fx-sub" style="margin:0">'+E(o.empty||t('no_data'))+'</p>';
  var mx=Math.max.apply(null,rows.map(function(r){return r.v;}).concat([1]));
  return '<div class="fx-hb">'+rows.map(function(r){var tag=o.act?'button type="button" data-fx="'+o.act+'" data-v="'+E(r.k)+'"':'div';return '<'+tag+' class="fx-hb-r'+(r.on?' on':'')+'"><span class="fx-hb-l">'+r.lbl+'</span><i><em style="width:'+Math.max(Math.round(r.v/mx*100),r.v?2:0)+'%"></em></i><b class="fx-num">'+r.v+'</b></'+(o.act?'button':'div')+'>';}).join('')+'</div>';
}
function split(a,b,la,lb){var tot=a+b,pa=tot?Math.round(a/tot*100):0,pb=tot?100-pa:0;return '<div class="fx-split"><i><em class="s1" style="width:'+pa+'%"></em><em class="s2" style="width:'+pb+'%"></em></i><div><span><i class="s1"></i>'+E(la)+' <b class="fx-num">'+a+'</b> <small class="fx-num">'+pa+'%</small></span><span><i class="s2"></i>'+E(lb)+' <b class="fx-num">'+b+'</b> <small class="fx-num">'+pb+'%</small></span></div></div>';}
function panel(title,body,cls,acts){return '<section class="fx-panel'+(cls?' '+cls:'')+'"><header><h2>'+title+'</h2>'+(acts||'')+'</header><div class="fx-panel-b">'+body+'</div></section>';}
function kpi(lbl,n,sub,cls,tab){var tag=tab?'button type="button" data-fx="go" data-tab="'+tab+'"':'div';return '<'+tag+' class="fx-kpi'+(cls?' '+cls:'')+'"><small>'+E(lbl)+'</small><b class="fx-num">'+n+'</b>'+(sub?'<span>'+E(sub)+'</span>':'')+'</'+(tab?'button':'div')+'>';}
function grid(){return FX.S.lay!=='table'?'c1':FX.S.wide?'c3':'c2';}

/* ════════════ DASHBOARD ════════════ */
function dsEvId(){try{return _dashEvFilter;}catch(e){return null;}}
function dsSetEv(v){try{_dashEvFilter=v;}catch(e){}}
function dsRender(){
  var D=db(),td=FX.todayStr(),act=D.activeEventId?(D.eventos||[]).find(function(e){return e.id===D.activeEventId;}):null;
  if(dsEvId()===null&&act)dsSetEv(act.id);
  var sel=dsEvId()?(D.eventos||[]).find(function(e){return e.id===dsEvId();}):null;
  var R=(D.ingresos||[]).filter(function(i){return !sel||i.eventoId===sel.id;}),G=(D.ingresos2||[]).filter(function(i){return !sel||i.eventoId===sel.id;}),A=R.concat(G);
  var onDay=function(i,d){return i.entrada&&String(i.entrada).indexOf(d)===0;};
  var inside=A.filter(function(i){return !i.salida;}).length,hR=R.filter(function(i){return onDay(i,td);}).length,hG=G.filter(function(i){return onDay(i,td);}).length;
  var ag=(D.agenda||[]).filter(function(a){return a.fecha===td&&(!sel||a.eventoId===sel.id||!a.eventoId);}),agP=ag.filter(function(a){return (a.estado||'PENDIENTE')==='PENDIENTE';}).length;
  var pres=(D.preregistros||[]).filter(function(p){return !sel||p.eventoId===sel.id||p.eventoNombre===sel.nombre;});
  var sid='';try{sid=SID;}catch(e){}var msgs=(D.mensajesRampa||[]).filter(function(m){return !m.leido||m.leido.indexOf(sid)<0;}).length;
  var acts=act?U.seg('ds.ev',[{v:act.id,lbl:t('ds_ev')},{v:'',lbl:t('ds_all')}],sel?sel.id:'',t('tab_eventos')):'';
  var h='<div class="fx-page" data-view="dash">'+U.ph(t('tab_dash'),sel?t('ds_sub_ev',{ev:E(sel.nombre)}):t('ds_sub'),acts);
  if(msgs)h+='<div class="fx-note blk fx-note-act">'+I.msg+'<span>'+E(cnt(msgs,'k_msg1','k_msg'))+'</span>'+U.btn('go',null,t('open'),'sm',' data-tab="mensajes"')+'</div>';
  h+='<div class="fx-kpis k6">'+kpi(t('k_in'),inside,'','ok','ingresos2')+kpi(t('k_today'),hR+hG,t('k_today_s',{a:hR,b:hG}),'')+kpi(t('k_ing'),G.length,'','','ingresos2')+kpi(t('k_ref'),R.length,'','','ingresos')+kpi(t('k_ag'),ag.length,agP?t('k_ag_s',{n:agP}):'',agP?'mid':'','agenda')+kpi(t('k_pre'),pres.length,t('k_pre_s',{n:(D.empresas||[]).length}),'',can('isSA')?'empresas':'')+'</div>';
  // 7 días
  var days=[];for(var i=6;i>=0;i--)days.push(ymd(-i));
  var c7=days.map(function(d){return {k:d,lbl:FX.dayLbl(d),a:R.filter(function(x){return onDay(x,d);}).length,b:G.filter(function(x){return onDay(x,d);}).length,hl:d===td};});
  // por hora hoy
  var hrs=[];for(var hh=0;hh<24;hh++)hrs.push({h:hh,a:R.filter(function(x){return onDay(x,td)&&hourOf(x.entrada)===hh;}).length,b:G.filter(function(x){return onDay(x,td)&&hourOf(x.entrada)===hh;}).length});
  var act_=hrs.filter(function(x){return x.a+x.b;}),h0=act_.length?Math.max(0,act_[0].h-1):6,h1=act_.length?Math.min(23,act_[act_.length-1].h+1):20,nowH=new Date().getHours();
  var ch=hrs.slice(h0,h1+1).map(function(x){return {k:x.h,lbl:(x.h<10?'0':'')+x.h,a:x.a,b:x.b,hl:x.h===nowH};});
  // halls
  var hc={};A.forEach(function(x){(x.halls||(x.hall?[x.hall]:[])).filter(Boolean).forEach(function(k){hc[k]=(hc[k]||0)+1;});});
  var th=Object.keys(hc).sort(function(a,b){return hc[b]-hc[a];}).slice(0,6).map(function(k){return {lbl:U.hall(k),v:hc[k]};});
  // tracking
  var tc={};A.forEach(function(x){(x.tracking||[]).forEach(function(s){tc[s.stepId]=(tc[s.stepId]||0)+1;});});
  var tr_=Object.keys(tc).sort(function(a,b){return tc[b]-tc[a];}).map(function(k){return {lbl:E(tkLbl(k)),v:tc[k]};});
  var dc={mano:0,maquinaria:0};A.forEach(function(x){if(dc[x.descargaTipo]!=null)dc[x.descargaTipo]++;});
  var g=grid();
  h+='<div class="fx-dgrid '+g+'">';
  h+=panel(t('p_7d'),cols(c7,{aria:t('p_7d')})+legend([['s2',t('k_ing')],['s1',t('k_ref')]]),'');
  h+=panel(t('p_hour'),act_.length?cols(ch,{aria:t('p_hour'),dense:1})+legend([['s2',t('k_ing')],['s1',t('k_ref')]]):'<p class="fx-sub" style="margin:0">'+t('no_today')+'</p>','');
  h+=panel(t('p_halls'),hbars(th),'');
  h+=panel(t('p_split'),split(R.length,G.length,t('k_ref'),t('k_ing'))+'<h3 class="fx-h4">'+t('d_today')+'</h3><div class="fx-mini"><div><b class="fx-num">'+hR+'</b><small>'+t('k_ref')+'</small></div><div><b class="fx-num">'+hG+'</b><small>'+t('k_ing')+'</small></div></div><h3 class="fx-h4">'+t('p_unl')+'</h3>'+split(dc.mano,dc.maquinaria,t('serv_mano'),t('serv_maq')),'');
  h+=panel(t('p_trk'),hbars(tr_,{empty:t('no_trk')}),'');
  var ec={};pres.forEach(function(p){if(p.empresaId)ec[p.empresaId]=(ec[p.empresaId]||0)+1;});
  var te=Object.keys(ec).sort(function(a,b){return ec[b]-ec[a];}).slice(0,5).map(function(k){var e=(D.empresas||[]).find(function(x){return x.id===k;});return {lbl:E(e?e.nombre:k),v:ec[k]};});
  h+=panel(t('p_pre'),'<div class="fx-mini"><div><b class="fx-num">'+pres.length+'</b><small>'+(sel?t('this_ev'):t('total'))+'</small></div><div><b class="fx-num">'+(D.empresas||[]).length+'</b><small>'+t('companies')+'</small></div></div>'+(te.length?'<div style="margin-top:14px">'+hbars(te)+'</div>':''),'');
  // agenda hoy
  var agL=ag.slice().sort(function(a,b){return String(a.hora||'').localeCompare(String(b.hora||''));}).slice(0,6);
  var agSt=function(a){var e=a.estado||'PENDIENTE',ps=FX.parseTs(a.horaSalida);return e==='LLEGADO'?U.st('in',t('s_arr',{t:a.horaReal||''}).trim()):e==='SALIDA'?U.st('out',t('s_left',{t:ps?ps.hm:''}).trim()):(a.hora&&a.hora<FX.nowHM()?U.st('pend',t('s_late')):U.st('idle',t('s_pend')));};
  h+=panel(t('p_ag')+' <small class="fx-num">'+ag.length+'</small>',agL.length?'<ul class="fx-vl">'+agL.map(function(a){return '<li><span class="fx-time" style="font-size:18px;min-width:50px">'+E(a.hora||'–')+'</span>'+U.plate(a.matricula,FX.plateCC(a.pais),'sm')+'<span class="fx-grow fx-ell">'+E(a.empresa||a.conductor||'–')+'</span>'+agSt(a)+'</li>';}).join('')+'</ul>':'<p class="fx-sub" style="margin:0">'+t('no_ag')+'</p>','',U.btn('go',null,t('see_ag'),'ghost sm',' data-tab="agenda"'));
  // últimos ingresos
  var ids2={};(D.ingresos2||[]).forEach(function(x){ids2[x.id]=1;});
  var last=A.slice().sort(function(a,b){return String(b.entrada||'').localeCompare(String(a.entrada||''));}).slice(0,8);
  h+=panel(t('p_last'),last.length?'<ul class="fx-vl">'+last.map(function(x){var p=FX.parseTs(x.entrada);return '<li class="fx-li-btn" data-fx="ds.ing" data-id="'+E(x.id)+'" data-v="'+(ids2[x.id]?'ingresos2':'ingresos')+'">'+U.plate(x.matricula,FX.plateCC(x.pais),'sm')+'<span class="fx-grow fx-ell">'+E(x.empresa||'–')+'<small>'+E(ids2[x.id]?t('k_ing'):t('k_ref'))+'</small></span>'+U.halls(x.halls||[x.hall])+'<span class="fx-num fx-lbl">'+E(p?(p.ymd===td?p.hm:FX.dayLbl(p.ymd)+', '+p.hm):'')+'</span></li>';}).join('')+'</ul>':'<p class="fx-sub" style="margin:0">'+t('no_data')+'</p>',g==='c3'?'w2':'',U.btn('go',null,t('see_ing'),'ghost sm',' data-tab="ingresos2"'));
  h+='</div>';
  return h+'</div>';
}
FX.view('dash',{render:dsRender,wrap:['renderDash']});
FX.act('ds.ev',function(el,id,v){dsSetEv(v||'');if(!v)dsSetEv('');call('renderDash');FX.sync();});
FX.act('ds.ing',function(el,id,v){if(FX.openIng)FX.openIng(v,id);});

/* ════════════ HISTORIAL (vehículos) ════════════ */
function vhRec(id){return (db().vehiculos||[]).find(function(x){return x.id===id;});}
function vhData(){
  var D=db(),all=D.vehiculos||[],q=String(D._vehQ||'').toLowerCase();
  var items=all.filter(function(v){return !q||FX.hay(v,['matricula','nombre','empresa','telefono','remolque','tipoVehiculo']).indexOf(q)>=0;});
  var s={};try{s=getSort('vehiculos');}catch(e){}
  if(s&&s.col)items=FX.sortArr(items,s.col,s.dir);else items=items.slice().sort(function(a,b){return String(b.ultimoIngreso||'').localeCompare(String(a.ultimoIngreso||''));});
  return {items:items,total:all.length,q:D._vehQ||'',col:(s&&s.col)||'ultimoIngreso',dir:(s&&s.dir)||'desc'};
}
function vhRender(){
  var d=vhData(),sa=can('isSA'),acts='';
  if(can('canExport'))acts+=U.btn('vh.export',I.down,t('export'));
  if(sa)acts+='<label class="fx-btn">'+I.up+'<span>'+t('import')+'</span><input type="file" accept=".xlsx,.xls" hidden onchange="importVehiculos(this)"></label>'+U.ibtn('vh.opts',I.more,t('more'),'',' aria-haspopup="menu"');
  var h='<div class="fx-page" data-view="vehiculos">'+U.ph(t('tab_vehiculos'),t('vh_sub'),acts);
  if(!d.total)return h+U.empty(t('vh_empty'),t('vh_empty_p'),'')+'</div>';
  h+='<div class="fx-bar">'+U.search('vehiculos',d.q,t('vh_q'))+'<span class="fx-lbl fx-num">'+cnt(d.items.length,'n_vh1','n_vh')+'</span></div>';
  var pg=U.page('vehiculos',[d.q,d.col,d.dir].join('|'),d.items),td=FX.todayStr();
  var last=function(v){var p=FX.parseTs(v.ultimoIngreso);return p?(p.ymd===td?t('d_today')+', '+p.hm:FX.dayLbl(p.ymd)+(p.hm?', '+p.hm:'')):'';};
  if(!d.items.length)h+=U.empty(t('empty_q'),t('empty_q_p'),U.btn('qclr',I.x,t('clear_q'),'',' data-k="vehiculos"'));
  else if(FX.S.lay!=='table')h+=U.list(pg.list.map(function(v){var meta=[];if(v.empresa)meta.push('<span class="fx-ell">'+E(v.empresa)+'</span>');if(v.telefono)meta.push('<span class="fx-num">'+E([v.telPais,v.telefono].filter(Boolean).join(' '))+'</span>');if(v.evento)meta.push('<span>'+E(v.evento)+'</span>');meta.push('<span class="fx-num">'+E(last(v))+'</span>');return U.li({id:v.id,src:'vehiculos',pos:'<span class="fx-num">'+(v.ingresos||0)+'</span>',plate:U.plate(v.matricula,''),title:E(v.nombre||'–'),meta:meta,st:'',act:''});}).join(''));
  else{var a='vh.sort',dd={col:d.col,dir:d.dir};
    h+=U.table(U.th(a,'matricula',t('c_plate'),dd)+U.th(a,'nombre',t('c_driver'),dd)+U.th(a,'empresa',t('c_comp'),dd)+U.th(a,null,t('c_tel'),dd)+U.th(a,'ingresos',t('c_visits2'),dd,'c-n')+U.th(a,'evento',t('c_lastev'),dd)+U.th(a,'ultimoIngreso',t('c_lastin'),dd),
      pg.list.map(function(v){return '<tr data-fxrow="'+E(v.id)+'" data-src="vehiculos"><td class="c-plate">'+U.plate(v.matricula,'')+'</td><td class="c-txt"><span class="fx-strong fx-ell">'+E(v.nombre||'–')+'</span></td><td class="c-txt"><span class="fx-ell">'+E(v.empresa||'–')+'</span></td><td class="c-tel fx-num">'+(v.telefono?E([v.telPais,v.telefono].filter(Boolean).join(' ')):U.dash)+'</td><td class="c-n">'+(v.ingresos||0)+'</td><td class="c-txt"><span class="fx-ell">'+E(v.evento||'–')+'</span></td><td class="c-time fx-num">'+E(last(v)||'–')+'</td></tr>';}).join(''));}
  h+=U.foot('vehiculos',pg.list.length,d.items.length);
  return h+'</div>';
}
FX.view('vehiculos',{render:vhRender,wrap:['renderVehiculos']});
FX.q('vehiculos',function(v){var D=FX.db();if(!D)return;D._vehQ=v;call('renderVehiculos');});
FX.row('vehiculos',function(id){openVhDrawer(id);});
FX.act('vh.sort',function(el){call('setSort','vehiculos',el.getAttribute('data-col'));});
FX.act('vh.export',function(){call('exportVehiculos');});
FX.act('vh.opts',function(el){FX.menu(el,U.mi('vh.tpl',I.file,t('import_tpl'))+'<hr><div class="lbl" style="white-space:normal;line-height:1.35">'+t('vh_pin')+'</div>'+U.mi('vh.clean',I.trash,t('vh_clean'),'dng')+U.mi('vh.wipe',I.alert,t('vh_wipe'),'dng'),true);});
FX.act('vh.tpl',function(){FX.closeMenu();call('dlTemplateVehiculos');});
FX.act('vh.clean',function(){FX.closeMenu();call('ask2FAVehiculos','limpiar');});
FX.act('vh.wipe',function(){FX.closeMenu();call('ask2FAVehiculos','vaciar');});
function openVhDrawer(id){
  FX.drawer.open(function(){
    var v=vhRec(id);if(!v)return null;var D=db(),ids2={};(D.ingresos2||[]).forEach(function(x){ids2[x.id]=1;});
    var list=(D.ingresos||[]).concat(D.ingresos2||[]).filter(function(i){return i.matricula===v.matricula;}).sort(function(a,b){return String(b.entrada||'').localeCompare(String(a.entrada||''));}).slice(0,10);
    var tel=[v.telPais,v.telefono].filter(Boolean).join(' '),num=String(v.telefono||'').replace(/[^\d+]/g,'');
    var h='<div class="fx-dr-h"><div class="fx-dr-id"><span class="fx-dr-pos"><small>'+t('c_visits2')+'</small><b>'+(v.ingresos||0)+'</b></span><span class="fx-dr-plates">'+U.plate(v.matricula,'','lg')+'</span></div>'+U.ibtn('drClose',I.x,t('close'),'ghost')+'</div>';
    h+='<div class="fx-dr-b">';
    if(num)h+='<div class="fx-dr-acts" style="margin-top:0"><a class="fx-btn" href="tel:'+E((num.charAt(0)==='+'?'':(v.telPais||''))+num)+'">'+I.phone+'<span>'+t('a_call')+'</span></a><a class="fx-btn" target="_blank" rel="noopener" href="https://wa.me/'+E(((num.charAt(0)==='+'?'':(v.telPais||''))+num).replace(/\D/g,''))+'">'+I.msg+'<span>'+t('a_wa')+'</span></a></div>';
    h+='<h3>'+t('dr_data')+'</h3>'+U.dl([[t('f_name'),v.nombre],[t('f_comp'),v.empresa],[t('f_tel'),tel],[t('f_trailer'),v.remolque],[t('f_vtype'),FX.tv(v.tipoVehiculo)],[t('c_lastev'),v.evento],[t('c_lastin'),v.ultimoIngreso?FX.tsLbl(v.ultimoIngreso,''):'']]);
    h+='<h3>'+t('dr_last10')+'</h3>'+(list.length?'<ul class="fx-vl">'+list.map(function(i){var p=FX.parseTs(i.entrada);return '<li class="fx-li-btn" data-fx="ds.ing" data-id="'+E(i.id)+'" data-v="'+(ids2[i.id]?'ingresos2':'ingresos')+'"><span class="fx-grow"><b class="fx-strong">'+E(p?FX.dayLbl(p.ymd)+(p.hm?', '+p.hm:''):'–')+'</b><small>'+E([ids2[i.id]?t('k_ing'):t('k_ref'),i.eventoNombre].filter(Boolean).join(' · '))+'</small></span>'+U.halls(i.halls||[i.hall])+(i.salida?U.st('out',t('st_out')):U.st('in',t('s_in')))+'</li>';}).join('')+'</ul>':'<p class="fx-sub" style="margin:0">'+t('no_data')+'</p>');
    return h+'</div>';
  });
}

/* ════════════ ANÁLISIS ════════════ */
var ANL={panel:false};
function S_(){if(!window._anlState)window._anlState={evFilter:null,source:'all',tipoV:'',descarga:'',hall:'',empresa:'',carga:'',estado:'',desde:'',hasta:'',hora:'',metrics:{ingresos:true,tracking:true,halls:true,empresas:true,descarga:true,agenda:true,vehiculos:true,horario:true,estancia:false,refvsing:false},subtab:'graficos'};var S=window._anlState;if(!S.metrics)S.metrics={};return S;}
var METRICS=['ingresos','horario','halls','empresas','vehiculos','descarga','estancia','refvsing','tracking','agenda'];
function anData(){
  var D=db(),S=S_(),td=FX.todayStr(),sel=S.evFilter?(D.eventos||[]).find(function(e){return e.id===S.evFilter;}):null,all=[];
  if(S.source==='ref'||S.source==='all')all=all.concat(D.ingresos||[]);
  if(S.source==='ing'||S.source==='all')all=all.concat(D.ingresos2||[]);
  var x=sel?all.filter(function(i){return i.eventoId===sel.id;}):all;
  if(S.tipoV)x=x.filter(function(i){return i.tipoVehiculo===S.tipoV;});
  if(S.descarga)x=x.filter(function(i){return i.descargaTipo===S.descarga;});
  if(S.hall)x=x.filter(function(i){return (i.halls||[i.hall||'']).indexOf(S.hall)>=0;});
  if(S.empresa)x=x.filter(function(i){return String(i.empresa||'').toLowerCase().indexOf(String(S.empresa).toLowerCase())>=0;});
  if(S.estado==='recinto')x=x.filter(function(i){return !i.salida;});else if(S.estado==='salida')x=x.filter(function(i){return !!i.salida;});
  if(S.desde)x=x.filter(function(i){return i.entrada&&String(i.entrada).slice(0,10)>=S.desde;});
  if(S.hasta)x=x.filter(function(i){return i.entrada&&String(i.entrada).slice(0,10)<=S.hasta;});
  if(S.hora!==''&&S.hora!=null){var hh=parseInt(S.hora,10);x=x.filter(function(i){return hourOf(i.entrada)===hh;});}
  if(S.carga)x=x.filter(function(i){return i.tipoCarga===S.carga;});
  var uniq=function(f){var o={};all.forEach(function(i){f(i).forEach(function(v){if(v)o[v]=1;});});return Object.keys(o).sort();};
  return {ings:x,all:all,sel:sel,td:td,halls:uniq(function(i){return i.halls||[i.hall];}),vts:uniq(function(i){return [i.tipoVehiculo];}),cargas:uniq(function(i){return [i.tipoCarga];}),
    hasF:!!(S.evFilter||S.tipoV||S.descarga||S.hall||S.empresa||S.estado||S.desde||S.hasta||(S.hora!==''&&S.hora!=null)||S.carga||S.source!=='all')};
}
function fchip(k,lbl){return '<button type="button" class="fx-fchip" data-fx="an.unset" data-v="'+k+'">'+E(lbl)+I.x+'</button>';}
function anRender(){
  var S=S_(),M=S.metrics,d=anData(),D=db(),x=d.ings;
  var acts='';if(can('canExport'))acts+=U.btn('an.export',I.down,t('an_export'));acts+=U.btn('an.fields',I.sliders,t('an_fields'))+'<button type="button" class="fx-btn" data-fx="an.metrics" aria-haspopup="menu">'+I.chart+'<span>'+t('an_metrics')+'</span></button>';
  var h='<div class="fx-page" data-view="analytics">'+U.ph(t('tab_analytics'),t('an_sub'),acts);
  var evs=(D.eventos||[]),evB='<button type="button" class="fx-btn" data-fx="an.ev" aria-haspopup="menu">'+I.cal+'<span>'+E(d.sel?d.sel.nombre:t('ds_all'))+'</span>'+I.chev+'</button>';
  var nF=[S.tipoV,S.descarga,S.hall,S.empresa,S.estado,S.carga,(S.hora!==''&&S.hora!=null)?'h':''].filter(Boolean).length;
  var rng=(S.desde||S.hasta)?FX.rangeLbl(S.desde,S.hasta):t('d_range');
  h+='<div class="fx-bar">'+U.seg('an.src',[{v:'all',lbl:t('an_all')},{v:'ing',lbl:t('k_ing')},{v:'ref',lbl:t('k_ref')}],S.source||'all',t('an_src'))+(evs.length?evB:'')+'<button type="button" class="fx-btn" data-fx="an.range" aria-haspopup="dialog">'+I.cal+'<span>'+E(rng)+'</span></button>'+'<button type="button" class="fx-btn'+(ANL.panel?' on2':'')+'" data-fx="an.panel" aria-expanded="'+ANL.panel+'">'+I.sliders+'<span>'+t('an_filters')+'</span>'+(nF?' <b class="fx-badge">'+nF+'</b>':'')+'</button>'+(d.hasF?U.btn('an.clear',I.x,t('an_clear'),'ghost'):'')+'</div>';
  if(ANL.panel){
    h+='<div class="fx-fpanel">';
    h+='<div><span class="fx-lbl">'+t('an_state')+'</span>'+U.seg('an.set',[{v:'',lbl:t('an_any')},{v:'recinto',lbl:t('st_in')},{v:'salida',lbl:t('st_out')}],S.estado||'',t('an_state'),' data-k="estado"')+'</div>';
    h+='<div><span class="fx-lbl">'+t('an_unl')+'</span>'+U.seg('an.set',[{v:'',lbl:t('an_any')},{v:'mano',lbl:t('serv_mano')},{v:'maquinaria',lbl:t('serv_maq')}],S.descarga||'',t('an_unl'),' data-k="descarga"')+'</div>';
    if(d.vts.length)h+='<div><span class="fx-lbl">'+t('an_vt')+'</span>'+U.seg('an.set',[{v:'',lbl:t('an_any')}].concat(d.vts.map(function(v){return {v:v,lbl:E(FX.tv(v))};})),S.tipoV||'',t('an_vt'),' data-k="tipoV"')+'</div>';
    if(d.cargas.length)h+='<div><span class="fx-lbl">'+t('an_load')+'</span>'+U.seg('an.set',[{v:'',lbl:t('an_any')}].concat(d.cargas.map(function(v){return {v:v,lbl:E(v)};})),S.carga||'',t('an_load'),' data-k="carga"')+'</div>';
    if(d.halls.length)h+='<div><span class="fx-lbl">'+t('hall')+'</span><div class="fx-tiles"><button type="button" class="fx-tile txt'+(!S.hall?' on':'')+'" data-fx="an.set" data-k="hall" data-v="">'+t('st_all')+'</button>'+d.halls.map(function(k){return '<button type="button" class="fx-tile'+(S.hall===k?' on':'')+'" data-fx="an.set" data-k="hall" data-v="'+E(k)+'">'+E(k)+'</button>';}).join('')+'</div></div>';
    h+='<div><span class="fx-lbl">'+t('an_emp')+'</span>'+U.search('anlemp',S.empresa||'',t('an_emp_ph'))+'</div>';
    h+='</div>';
  }
  var chips=[];
  if(S.estado)chips.push(fchip('estado',S.estado==='recinto'?t('st_in'):t('st_out')));
  if(S.descarga)chips.push(fchip('descarga',S.descarga==='mano'?t('serv_mano'):t('serv_maq')));
  if(S.tipoV)chips.push(fchip('tipoV',FX.tv(S.tipoV)));if(S.carga)chips.push(fchip('carga',S.carga));if(S.hall)chips.push(fchip('hall',t('hall')+' '+S.hall));
  if(S.empresa)chips.push(fchip('empresa',S.empresa));if(S.hora!==''&&S.hora!=null)chips.push(fchip('hora',t('h_n',{h:S.hora})));
  if(chips.length&&!ANL.panel)h+='<div class="fx-fchips">'+chips.join('')+'</div>';
  // KPIs
  var stays=x.filter(function(i){return i.salida&&i.entrada;}).map(function(i){var a=new Date(String(i.entrada).replace(' ','T')),b=new Date(String(i.salida).replace(' ','T'));return (b-a)/60000;}).filter(function(m){return m>0&&m<1440;}).sort(function(a,b){return a-b;});
  var avg=stays.length?stays.reduce(function(a,b){return a+b;},0)/stays.length:0,med=stays.length?stays[Math.floor(stays.length/2)]:0;
  var pre=d.sel?(D.preregistros||[]).filter(function(p){return p.eventoId===d.sel.id||p.eventoNombre===d.sel.nombre;}).length:(D.preregistros||[]).length;
  h+='<div class="fx-kpis k5">'+kpi(t('k_rec'),x.length,'','')+kpi(t('k_in'),x.filter(function(i){return !i.salida;}).length,'','ok')+kpi(t('d_today'),x.filter(function(i){return i.entrada&&String(i.entrada).indexOf(d.td)===0;}).length,'','')+kpi(t('k_stay'),stays.length?fmtMin(avg):'–',stays.length?t('k_stay_s',{m:fmtMin(med)}):'','')+kpi(t('k_pre'),pre,'','')+'</div>';
  var g=grid(),P='';
  if(M.ingresos){var days=[];for(var i=13;i>=0;i--)days.push(ymd(-i));P+=panel(t('p_14d'),cols(days.map(function(dd){return {k:dd,lbl:FX.dayLbl(dd),b:x.filter(function(i){return i.entrada&&String(i.entrada).indexOf(dd)===0;}).length,hl:dd===d.td};}),{aria:t('p_14d'),dense:1}),g==='c3'?'w2':'');}
  if(M.horario){var hs=S.hora!==''&&S.hora!=null?parseInt(S.hora,10):-1;var hc=[];for(var hh=0;hh<24;hh++)hc.push({k:hh,lbl:(hh<10?'0':'')+hh,b:x.filter(function(i){return hourOf(i.entrada)===hh;}).length,on:hh===hs});P+=panel(t('p_hour_all'),cols(hc,{aria:t('p_hour_all'),act:'an.hour',dense:1})+'<p class="fx-hint">'+t('tap_filter')+'</p>',g==='c3'?'':'');}
  if(M.halls){var hl={};x.forEach(function(i){(i.halls||[i.hall||'']).filter(Boolean).forEach(function(k){hl[k]=(hl[k]||0)+1;});});P+=panel(t('p_halls'),hbars(Object.keys(hl).sort(function(a,b){return hl[b]-hl[a];}).slice(0,8).map(function(k){return {k:k,lbl:U.hall(k),v:hl[k],on:S.hall===k};}),{act:'an.hallset'}),'');}
  if(M.empresas){var ec={};x.forEach(function(i){if(i.empresa)ec[i.empresa]=(ec[i.empresa]||0)+1;});P+=panel(t('p_emp'),hbars(Object.keys(ec).sort(function(a,b){return ec[b]-ec[a];}).slice(0,8).map(function(k){return {k:k,lbl:'<span class="fx-ell">'+E(k)+'</span>',v:ec[k],on:S.empresa===k};}),{act:'an.empset'}),'');}
  if(M.vehiculos){var vc={};x.forEach(function(i){if(i.tipoVehiculo)vc[i.tipoVehiculo]=(vc[i.tipoVehiculo]||0)+1;});P+=panel(t('p_veh'),hbars(Object.keys(vc).sort(function(a,b){return vc[b]-vc[a];}).map(function(k){return {k:k,lbl:E(FX.tv(k)),v:vc[k],on:S.tipoV===k};}),{act:'an.vtset'}),'');}
  if(M.descarga){var dm=x.filter(function(i){return i.descargaTipo==='mano';}).length,dq=x.filter(function(i){return i.descargaTipo==='maquinaria';}).length;P+=panel(t('p_unl'),split(dm,dq,t('serv_mano'),t('serv_maq')),'');}
  if(M.estancia){var bk=[[0,30],[30,60],[60,120],[120,240],[240,480],[480,1440]];P+=panel(t('p_stay')+(stays.length?' <small class="fx-num">'+stays.length+'</small>':''),stays.length?'<div class="fx-mini"><div><b class="fx-num">'+fmtMin(avg)+'</b><small>'+t('k_stay')+'</small></div><div><b class="fx-num">'+fmtMin(med)+'</b><small>'+t('k_stay_s',{m:''}).replace(/\s*$/,'')+'</small></div></div><p class="fx-hint">'+E(t('st_min',{v:fmtMin(stays[0])})+' · '+t('st_max',{v:fmtMin(stays[stays.length-1])}))+'</p>'+hbars(bk.map(function(b){return {lbl:'<span class="fx-num">'+E(fmtMin(b[0]).replace(' 00 min','')+' – '+fmtMin(b[1]).replace(' 00 min',''))+'</span>',v:stays.filter(function(m){return m>=b[0]&&m<b[1];}).length};})):'<p class="fx-sub" style="margin:0">'+t('st_none')+'</p>','');}
  if(M.refvsing){var rN=(D.ingresos||[]).filter(function(i){return !d.sel||i.eventoId===d.sel.id;}).length,iN=(D.ingresos2||[]).filter(function(i){return !d.sel||i.eventoId===d.sel.id;}).length;P+=panel(t('p_split'),split(rN,iN,t('k_ref'),t('k_ing')),'');}
  if(M.tracking){var tc={};x.forEach(function(i){(i.tracking||[]).forEach(function(s){tc[s.stepId]=(tc[s.stepId]||0)+1;});});P+=panel(t('p_trk'),hbars(Object.keys(tc).sort(function(a,b){return tc[b]-tc[a];}).map(function(k){return {lbl:E(tkLbl(k)),v:tc[k]};}),{empty:t('no_trk')}),'');}
  if(M.agenda){var ag={PENDIENTE:0,LLEGADO:0,SALIDA:0};(D.agenda||[]).filter(function(a){return a.fecha===d.td&&(!d.sel||a.eventoId===d.sel.id);}).forEach(function(a){var e=a.estado||'PENDIENTE';ag[e]=(ag[e]||0)+1;});P+=panel(t('p_ag'),'<div class="fx-mini three"><div><b class="fx-num">'+ag.PENDIENTE+'</b><small>'+t('ag_pend')+'</small></div><div><b class="fx-num">'+ag.LLEGADO+'</b><small>'+t('ag_arr')+'</small></div><div><b class="fx-num">'+ag.SALIDA+'</b><small>'+t('ag_out')+'</small></div></div>','',U.btn('go',null,t('see_ag'),'ghost sm',' data-tab="agenda"'));}
  h+='<div class="fx-dgrid '+g+'">'+P+'</div>';
  return h+'</div>';
}
FX.view('analytics',{
  when:function(){return S_().subtab!=='campos';},
  render:anRender,
  back:function(){S_().subtab='graficos';call('renderAnalytics');},
  reset:function(){S_().subtab='graficos';},
  wrap:['renderAnalytics','renderAnalyticsGraficos','renderAnalyticsCampos']
});
function anRe(){call('renderAnalytics');FX.sync();}
FX.q('anlemp',function(v){S_().empresa=v;anRe();});
FX.act('an.src',function(el,id,v){S_().source=v||'all';anRe();});
FX.act('an.ev',function(el){var D=db(),S=S_(),h=U.mi('an.evset',!S.evFilter?I.check:null,t('ds_all'),!S.evFilter?'on':'',' data-v=""');(D.eventos||[]).forEach(function(e){h+=U.mi('an.evset',S.evFilter===e.id?I.check:null,E(e.nombre),S.evFilter===e.id?'on':'',' data-v="'+E(e.id)+'"');});FX.menu(el,h,false);});
FX.act('an.evset',function(el,id,v){FX.closeMenu();S_().evFilter=v||null;anRe();});
FX.act('an.range',function(el){var S=S_();U.rangeMenu(el,'an.rangeOk',S.desde,S.hasta);});
FX.act('an.rangeOk',function(){var r=U.rangeVal(),S=S_();S.desde=r.a;S.hasta=r.b;anRe();});
FX.act('an.panel',function(){ANL.panel=!ANL.panel;FX.sync();});
FX.act('an.set',function(el,id,v){var k=el.getAttribute('data-k');if(!k)return;S_()[k]=v||'';anRe();});
FX.act('an.unset',function(el,id,v){S_()[v]='';anRe();});
FX.act('an.hour',function(el,id,v){var S=S_();S.hora=String(S.hora)===String(v)?'':String(v);anRe();});
FX.act('an.hallset',function(el,id,v){var S=S_();S.hall=S.hall===v?'':v;anRe();});
FX.act('an.empset',function(el,id,v){var S=S_();S.empresa=S.empresa===v?'':v;anRe();});
FX.act('an.vtset',function(el,id,v){var S=S_();S.tipoV=S.tipoV===v?'':v;anRe();});
FX.act('an.clear',function(){var S=S_();S.evFilter=null;S.source='all';S.tipoV='';S.descarga='';S.hall='';S.empresa='';S.carga='';S.estado='';S.desde='';S.hasta='';S.hora='';anRe();});
FX.act('an.export',function(){call('exportDia');});
FX.act('an.fields',function(){S_().subtab='campos';call('renderAnalyticsCampos');FX.scrollTop();});
FX.act('an.metrics',function(el){var M=S_().metrics,h='';METRICS.forEach(function(k){h+=U.mi('an.mt',M[k]?I.check:null,t('m_'+k),M[k]?'on':'',' data-v="'+k+'"');});FX.menu(el,h,true);});
FX.act('an.mt',function(el,id,v){var M=S_().metrics;M[v]=!M[v];FX.closeMenu();anRe();});
})();
