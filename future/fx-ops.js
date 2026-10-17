/* BeUnifyT FUTURE · Operativa: Ingresos, Referencia, Agenda, Mensajes y panel de detalle.
   Usa las funciones existentes de INDEX.html; no escribe datos por su cuenta. */
(function(){
'use strict';
var FX=window.FX;if(!FX)return;
var I=FX.I,t=FX.t,E=FX.E,U=FX.ui,call=FX.call,can=FX.can,fn=FX.fn;

FX.addT({
es:{i1_sub_ev:'Referencias de carga y descarga para {ev}.',i1_sub:'Referencias de carga y descarga.',i1_new:'Nueva referencia',empty_t1:'No hay referencias con estos filtros',
 import_tpl:'Descargar plantilla',tr_ramp:'Rampa',tr_office:'Oficina',tr_out:'Salida',tr_park:'Parking',est:'estimada',
 tl_entry:'Entrada',tl_ramp:'Rampa',tl_office:'Oficina',tl_office_out:'Salida de oficina',tl_exit:'Salida',tl_park:'Salida del parking',tl_pending:'Pendiente',tl_plan:'Prevista',tl_arrive:'Llegada',tl_leave:'Salida',
 dr_pos:'Posición',dr_trace:'Trazabilidad',dr_data:'Datos',close:'Cerrar',
 f_comp:'Empresa',f_expo:'Expositor',f_mont:'Montador',f_ref:'Referencia',f_pager:'Busca',f_name:'Conductor',f_tel:'Teléfono',f_pass:'Pasaporte o DNI',f_mail:'Email',f_stand:'Stand',f_door:'Puerta de hall',f_vtype:'Tipo de vehículo',f_serv:'Tipo de servicio',f_ev:'Evento',f_by:'Creado por',f_com:'Comentario',f_trailer:'Remolque',f_notes:'Notas',f_hall:'Hall',f_pass2:'Pase',serv_mano:'A mano',serv_maq:'Con maquinaria',
 ag_sub_ev:'Citas de descarga para {ev}.',ag_sub:'Citas de descarga.',ag_new:'Nueva cita',ag_pend:'Pendientes',ag_late:'Con retraso',ag_arr:'Llegados',ag_out:'Con salida',
 s_pend:'Pendiente',s_late:'Retrasada',s_noshow:'Sin llegada',s_arr:'Llegó {t}',s_left:'Salió {t}',a_arrive:'Marcar llegada',a_leave:'Marcar salida',a_track:'Registrar paso de tracking',
 c_time:'Hora',plan:'Prevista {t}',real:'Real {t}',d_ontime:'Puntual',d_late:'+{n} min',d_early:'{n} min antes',empty_ag:'No hay citas con estos filtros',empty_ag_p:'Cambia las fechas o el estado, o crea una cita.',n_ag:'{n} citas',n_ag1:'1 cita',clean_ag:'Limpiar agenda',
 m_title:'Mensajes',m_sub:'Avisos para el equipo de rampa. Al abrir esta pantalla quedan marcados como leídos.',m_new:'Nuevo mensaje',m_read:'Marcar todos como leídos',m_clean:'Borrar todos los mensajes',m_pause:'Pausar',m_resume:'Reactivar',m_paused:'Pausado',m_expired:'Caducado',m_empty:'No hay mensajes',m_empty_p:'Los avisos que envíes a la rampa aparecerán aquí.',m_by:'Por {a}',m_urg:'Urgente',m_alt:'Alerta',m_info:'Aviso',m_clean_t:'Limpiar todos los mensajes',m_clean_p:'Se eliminarán <b>{n}</b> mensajes. Esta acción no se puede deshacer.'},
en:{i1_sub_ev:'Loading and unloading references for {ev}.',i1_sub:'Loading and unloading references.',i1_new:'New reference',empty_t1:'No references match these filters',
 import_tpl:'Download template',tr_ramp:'Ramp',tr_office:'Office',tr_out:'Exit',tr_park:'Parking',est:'estimated',
 tl_entry:'Entry',tl_ramp:'Ramp',tl_office:'Office',tl_office_out:'Left office',tl_exit:'Exit',tl_park:'Left parking',tl_pending:'Pending',tl_plan:'Planned',tl_arrive:'Arrival',tl_leave:'Exit',
 dr_pos:'Position',dr_trace:'Traceability',dr_data:'Details',close:'Close',
 f_comp:'Company',f_expo:'Exhibitor',f_mont:'Stand builder',f_ref:'Reference',f_pager:'Pager',f_name:'Driver',f_tel:'Phone',f_pass:'Passport or ID',f_mail:'Email',f_stand:'Stand',f_door:'Hall door',f_vtype:'Vehicle type',f_serv:'Service type',f_ev:'Event',f_by:'Created by',f_com:'Comment',f_trailer:'Trailer',f_notes:'Notes',f_hall:'Hall',f_pass2:'Pass',serv_mano:'By hand',serv_maq:'With machinery',
 ag_sub_ev:'Unloading appointments for {ev}.',ag_sub:'Unloading appointments.',ag_new:'New appointment',ag_pend:'Pending',ag_late:'Late',ag_arr:'Arrived',ag_out:'Left',
 s_pend:'Pending',s_late:'Late',s_noshow:'No show',s_arr:'Arrived {t}',s_left:'Left {t}',a_arrive:'Mark arrival',a_leave:'Mark exit',a_track:'Log tracking step',
 c_time:'Time',plan:'Planned {t}',real:'Actual {t}',d_ontime:'On time',d_late:'+{n} min',d_early:'{n} min early',empty_ag:'No appointments match these filters',empty_ag_p:'Change the dates or status, or create an appointment.',n_ag:'{n} appointments',n_ag1:'1 appointment',clean_ag:'Clear schedule',
 m_title:'Messages',m_sub:'Notices for the ramp team. Opening this screen marks them as read.',m_new:'New message',m_read:'Mark all as read',m_clean:'Delete all messages',m_pause:'Pause',m_resume:'Resume',m_paused:'Paused',m_expired:'Expired',m_empty:'No messages',m_empty_p:'Notices you send to the ramp will appear here.',m_by:'By {a}',m_urg:'Urgent',m_alt:'Alert',m_info:'Notice',m_clean_t:'Clear all messages',m_clean_p:'<b>{n}</b> messages will be deleted. This cannot be undone.'},
de:{i1_sub_ev:'Lade- und Entladereferenzen für {ev}.',i1_sub:'Lade- und Entladereferenzen.',i1_new:'Neue Referenz',empty_t1:'Keine Referenzen für diese Filter',
 import_tpl:'Vorlage herunterladen',tr_ramp:'Rampe',tr_office:'Büro',tr_out:'Ausfahrt',tr_park:'Parkplatz',est:'geschätzt',
 tl_entry:'Einfahrt',tl_ramp:'Rampe',tl_office:'Büro',tl_office_out:'Büro verlassen',tl_exit:'Ausfahrt',tl_park:'Parkplatz verlassen',tl_pending:'Ausstehend',tl_plan:'Geplant',tl_arrive:'Ankunft',tl_leave:'Abfahrt',
 dr_pos:'Position',dr_trace:'Rückverfolgung',dr_data:'Angaben',close:'Schließen',
 f_comp:'Firma',f_expo:'Aussteller',f_mont:'Messebauer',f_ref:'Referenz',f_pager:'Pager',f_name:'Fahrer',f_tel:'Telefon',f_pass:'Pass oder Ausweis',f_mail:'E-Mail',f_stand:'Stand',f_door:'Hallentor',f_vtype:'Fahrzeugtyp',f_serv:'Serviceart',f_ev:'Veranstaltung',f_by:'Erstellt von',f_com:'Kommentar',f_trailer:'Anhänger',f_notes:'Notizen',f_hall:'Halle',f_pass2:'Ausweis',serv_mano:'Von Hand',serv_maq:'Mit Maschinen',
 ag_sub_ev:'Entladetermine für {ev}.',ag_sub:'Entladetermine.',ag_new:'Neuer Termin',ag_pend:'Ausstehend',ag_late:'Verspätet',ag_arr:'Angekommen',ag_out:'Abgefahren',
 s_pend:'Ausstehend',s_late:'Verspätet',s_noshow:'Nicht erschienen',s_arr:'Angekommen {t}',s_left:'Abgefahren {t}',a_arrive:'Ankunft buchen',a_leave:'Abfahrt buchen',a_track:'Tracking-Schritt erfassen',
 c_time:'Uhrzeit',plan:'Geplant {t}',real:'Tatsächlich {t}',d_ontime:'Pünktlich',d_late:'+{n} Min.',d_early:'{n} Min. früher',empty_ag:'Keine Termine für diese Filter',empty_ag_p:'Ändern Sie Zeitraum oder Status oder legen Sie einen Termin an.',n_ag:'{n} Termine',n_ag1:'1 Termin',clean_ag:'Zeitplan leeren',
 m_title:'Nachrichten',m_sub:'Hinweise für das Rampenteam. Beim Öffnen dieser Ansicht gelten sie als gelesen.',m_new:'Neue Nachricht',m_read:'Alle als gelesen markieren',m_clean:'Alle Nachrichten löschen',m_pause:'Pausieren',m_resume:'Fortsetzen',m_paused:'Pausiert',m_expired:'Abgelaufen',m_empty:'Keine Nachrichten',m_empty_p:'Hinweise an die Rampe erscheinen hier.',m_by:'Von {a}',m_urg:'Dringend',m_alt:'Warnung',m_info:'Hinweis',m_clean_t:'Alle Nachrichten löschen',m_clean_p:'<b>{n}</b> Nachrichten werden gelöscht. Dies kann nicht rückgängig gemacht werden.'}
});

function setSrc(v){try{_ingSource=v;}catch(e){}}
function dateRangePass(d,a,b){try{return _dateRangePass(d,a,b,'');}catch(e){return true;}}

/* ════════════ INGRESOS (ingresos2) y REFERENCIA (ingresos) ════════════ */
var ING={
  ingresos2:{tab:'ingresos2',col:'ingresos2',title:'tab_ingresos2',subEv:'i2_sub_ev',sub:'i2_sub',newL:'i2_new',emptyT:'empty_t',
    k:{q:'q2',hall:'hall2',fecha:'fecha2',desde:'fechaDesde2',hasta:'fechaHasta2',act:'activos2',sub:'_sub2',pg:'_pg2',mode:'_dateMode2'},
    render:'renderIngresos2',dateH:'_ing2DateHandler',
    neu:function(){setSrc('ingresos2');call('openIngModal2');},edit:function(i){setSrc('ingresos2');call('openIngModal2',i);},
    print:'printIngreso2',ramp:'printTrqIng',out:'marcarSalidaIng2',undo:'reactivarIngreso2',del:'askDelIng2',exp:'exportIngresos2',
    paste:function(){call('openImportRef','ingresos2');},xlsx:'xlsxIng2',tpl:null,clean:'ingresos2'},
  ingresos:{tab:'ingresos',col:'ingresos',title:'tab_ingresos',subEv:'i1_sub_ev',sub:'i1_sub',newL:'i1_new',emptyT:'empty_t1',
    k:{q:'q',hall:'hall',fecha:'fecha',desde:'fechaDesde',hasta:'fechaHasta',act:'activos',sub:'_sub',pg:'_pg',mode:'_dateMode'},
    render:'renderIngresos',dateH:'_ingDateHandler',
    neu:function(){setSrc('ingresos');call('openIngModal');},edit:function(i){setSrc('ingresos');call('openIngModal',i);},
    print:'printIngreso',ramp:'printTrqRef',out:'marcarSalidaIng',undo:'reactivarIngreso',del:'askDelIng',exp:'exportIngresos',
    paste:function(){call('openImportRef');},xlsx:'xlsxIng',tpl:'dlTemplateIng',clean:'ingresos'}
};
var ST={ingresos2:'all',ingresos:'all'};
var HAY=['pos','matricula','nombre','apellido','empresa','llamador','referencia','halls','hall','stand','remolque','montador','expositor','comentario','telefono','email','pasaporte','eventoNombre','puertaHall','tipoCarga'];
function rec(c,id){var D=FX.db()||{};return (D[c.col]||[]).find(function(x){return x.id===id;});}
function ingStatus(c){var f=FX.IF()||{};if(f[c.k.act])return 'in';return ST[c.tab]==='out'?'out':'all';}
function ingData(c){
  var D=FX.db()||{},f=FX.IF()||{},K=c.k;
  if(f[K.mode]==='evento'&&!f[K.fecha]&&!f[K.desde]&&!f[K.hasta]){var e=FX.getEvDates();if(e){f[K.desde]=e.desde;f[K.hasta]=e.hasta;}}
  var items=(D[c.col]||[]).slice();
  var ev=fn('getUserWorkEventId')?getUserWorkEventId():null;
  if(ev)items=items.filter(function(i){return !i.eventoId||i.eventoId===ev;});
  var q=(f[K.q]||'').toLowerCase();
  if(q)items=items.filter(function(i){return FX.hay(i,HAY).indexOf(q)>=0;});
  var h=f[K.hall];
  if(h)items=items.filter(function(i){return c.col==='ingresos'?(i.hall===h||(i.halls||[]).indexOf(h)>=0):(i.halls||[i.hall||'']).indexOf(h)>=0;});
  if(f[K.desde]||f[K.hasta])items=items.filter(function(i){return dateRangePass(i.entrada,f[K.desde],f[K.hasta]);});
  else if(f[K.fecha])items=items.filter(function(i){return i.entrada&&String(i.entrada).slice(0,10)===f[K.fecha];});
  var nIn=0,nOut=0;items.forEach(function(i){if(i.salida)nOut++;else nIn++;});
  var all=items.length,st=ingStatus(c);
  if(st==='in')items=items.filter(function(i){return !i.salida;});else if(st==='out')items=items.filter(function(i){return !!i.salida;});
  var s={};try{s=getSort(c.tab)||{};}catch(e){}
  var col=s.col||'pos',dir=s.dir||'desc';
  var byPos=function(a,b){var pa=parseInt(a.pos,10),pb=parseInt(b.pos,10);if(isNaN(pa))pa=Infinity;if(isNaN(pb))pb=Infinity;return pa!==pb?pa-pb:String(a.matricula||'').localeCompare(String(b.matricula||''));};
  if(c.col==='ingresos2'){items=FX.sortArr(items,col,s.dir||'asc');if(!q&&col==='pos')items.sort(function(a,b){var pa=parseInt(a.pos)||0,pb=parseInt(b.pos)||0;return pa!==pb?pa-pb:String(a.matricula||'').localeCompare(String(b.matricula||''));});}
  else{if(q)items.sort(byPos);else items.sort(function(a,b){return String(b.entrada||'').localeCompare(String(a.entrada||''));});}
  items=FX.sortArr(items,col,dir);
  return {items:items,all:all,nIn:nIn,nOut:nOut,col:col,dir:dir,st:st};
}
function trace(i){
  var steps=[['rampaHora','tr_ramp'],['oficinaHora','tr_office'],['salidaHora','tr_out'],['salidaRealParking','tr_park']];
  var any=steps.some(function(s){return !!i[s[0]];});if(!any)return '';
  var last=null,h='<span class="fx-trace" aria-label="'+E(t('dr_trace'))+'">';
  steps.forEach(function(s){var v=i[s[0]],p=FX.parseTs(v),est=s[0]==='rampaHora'&&i._rampaHoraEstimada;if(v)last={l:t(s[1]),p:p,est:est};h+='<i class="'+(v?(est?'est':'on'):'')+'" title="'+E(t(s[1])+(p?' '+(p.hm||FX.dayLbl(p.ymd)):'')+(est?' ('+t('est')+')':''))+'"></i>';});
  if(last)h+='<span>'+E(last.l)+(last.p&&last.p.hm?' '+(last.est?'~':'')+last.p.hm:'')+'</span>';
  return h+'</span>';
}
function outLbl(i){var s=FX.parseTs(i.salida),e=FX.parseTs(i.entrada);if(!s)return t('s_out',{t:''}).trim();return t('s_out',{t:(!e||e.ymd===s.ymd)?(s.hm||FX.dayLbl(s.ymd)):FX.dayLbl(s.ymd)+' '+s.hm});}
function stBadge(i){return i.salida?U.st('out',outLbl(i)):U.st('in',t('s_in'));}
function stCell(c,i,single){var e=FX.parseTs(i.entrada);return stBadge(i)+(e?U.meta(E(t('s_since',{t:(single?'':FX.dayLbl(e.ymd)+', ')+(e.hm||'')})),'fx-num'):'')+trace(i);}
function ingActs(c,i){
  var id=E(i.id),x=' data-id="'+id+'" data-src="'+c.tab+'"',h='';
  h+=U.ibtn('ing.print',I.printer,t('a_print'),'ghost sm',x);
  h+=U.ibtn('ing.ramp',I.ticket,t('a_ramp'),'ghost sm',x);
  if(!i.salida&&can('canStatus'))h+=U.btn('ing.out',I.exit,t('a_out'),'go sm',x);
  h+=U.ibtn('ing.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"');
  return U.acts(h);
}
function ingHead(c,d){
  var a='ing.sort" data-src="'+c.tab;
  return U.th(a,'pos',t('c_pos'),d)+U.th(a,'matricula',t('c_plate'),d)
    +(FX.colOn(c.tab,'referencia')?U.th(a,'referencia',t('c_ref'),d):'')
    +U.th(a,'empresa',t('c_comp'),d)
    +(FX.S.wide&&FX.colOn(c.tab,'conductor')?U.th(a,'nombre',t('c_driver'),d):'')
    +(FX.colOn(c.tab,'hall')?U.th(a,null,t('c_hall'),d):'')
    +U.th(a,'salida',t('c_state'),d)+'<th><span class="fx-sr">'+t('more')+'</span></th>';
}
function servLbl(v){if(!v)return '';var m={mano:'serv_mano',maquinaria:'serv_maq'};return m[v]?t(m[v]):v;}
function vType(i){var v=i.tipoVehiculo;if(!v)return '';try{var m=TV[v];if(m)return String(m).replace(/^[^A-Za-zÁÉÍÓÚÑáéíóúñ]+/,'');}catch(e){}return v;}
function ingRow(c,i,single,isNew){
  var inV=!i.salida,hh=U.halls(i.halls||[i.hall||'']);
  var drv=[i.nombre,i.apellido].filter(Boolean).join(' '),tel=((i.telPais||'')+' '+(i.telefono||'')).trim();
  var sub2=[i.expositor&&i.expositor!==i.empresa?i.expositor:'',c.col==='ingresos'&&i.montador&&i.montador!==i.empresa&&i.montador!==i.expositor?i.montador:''].filter(Boolean);
  var h='<tr class="'+(inV?'in':'out')+(isNew?' fx-new':'')+'" data-fxrow="'+E(i.id)+'" data-src="'+c.tab+'">';
  h+='<td class="c-pos">'+(i.pos?E(i.pos):U.dash)+'</td>';
  h+='<td class="c-plate">'+U.plate(i.matricula,FX.plateCC(i.pais))+(i.remolque?'<br>'+U.plate(i.remolque,'','sm'):'')+(vType(i)&&FX.colOn(c.tab,'tipoVehiculo')?U.meta(E(vType(i))):'')+'</td>';
  if(FX.colOn(c.tab,'referencia'))h+='<td class="c-ref">'+(i.referencia?'<span class="fx-code">'+E(i.referencia)+'</span>':U.dash)+(i.llamador&&FX.colOn(c.tab,'llamador')?U.meta(E(t('pager',{n:i.llamador}))):'')+'</td>';
  h+='<td class="c-txt"><span class="fx-strong fx-ell">'+(i.empresa?E(i.empresa):U.dash)+'</span>'+sub2.map(function(x){return U.meta(E(x));}).join('')+'</td>';
  if(FX.S.wide&&FX.colOn(c.tab,'conductor'))h+='<td class="c-txt"><span class="fx-ell">'+(drv?E(drv):U.dash)+'</span>'+(tel&&FX.colOn(c.tab,'telefono')?U.meta(E(tel),'fx-num'):'')+'</td>';
  if(FX.colOn(c.tab,'hall'))h+='<td class="c-hall">'+(hh||U.dash)+(i.stand&&FX.colOn(c.tab,'stand')?U.meta(E(t('stand',{s:i.stand}))):'')+'</td>';
  h+='<td class="c-st">'+stCell(c,i,single)+'</td>';
  h+='<td class="c-act">'+ingActs(c,i)+'</td>';
  return h+'</tr>';
}
function ingLi(c,i,single,isNew){
  var hh=U.halls(i.halls||[i.hall||'']),drv=[i.nombre,i.apellido].filter(Boolean).join(' '),e=FX.parseTs(i.entrada),meta=[];
  if(i.referencia&&FX.colOn(c.tab,'referencia'))meta.push('<span class="fx-code">'+E(i.referencia)+'</span>');
  if(hh)meta.push('<span>'+hh+(i.stand?' &nbsp;'+E(t('stand',{s:i.stand})):'')+'</span>');
  if(e)meta.push('<span class="fx-num">'+E(t('s_since',{t:(single?'':FX.dayLbl(e.ymd)+', ')+(e.hm||'')}))+'</span>');
  if(drv&&FX.colOn(c.tab,'conductor'))meta.push('<span class="fx-ell">'+E(drv)+'</span>');
  return U.li({id:i.id,src:c.tab,cls:(i.salida?'out':'in')+(isNew?' fx-new':''),pos:i.pos?E(i.pos):'',plate:U.plate(i.matricula,FX.plateCC(i.pais))+(i.remolque?U.plate(i.remolque,'','sm'):''),title:E(i.empresa||'–'),meta:meta,st:stBadge(i),act:ingActs(c,i)});
}
function ingRender(c){
  var f=FX.IF()||{},K=c.k,d=ingData(c),ev=FX.workEv();
  var dm=U.dateMode(f[K.fecha],f[K.desde],f[K.hasta],f[K.mode]);
  var single=dm==='hoy'||dm==='ayer'||(!!f[K.fecha]&&!f[K.desde]&&!f[K.hasta]);
  var acts='';
  if(can('canImport'))acts+='<button type="button" class="fx-btn" data-fx="ing.import" data-src="'+c.tab+'" aria-haspopup="menu">'+I.up+'<span>'+t('import')+'</span></button>';
  if(can('canExport'))acts+=U.btn('ing.export',I.down,t('export'),'',' data-src="'+c.tab+'"');
  acts+=U.ibtn('ing.opts',I.more,t('more'),'',' data-src="'+c.tab+'" aria-haspopup="menu"');
  if(can('canAdd'))acts+=U.btn('ing.new',I.plus,t(c.newL),'pri',' data-src="'+c.tab+'"');
  var h='<div class="fx-page" data-view="'+c.tab+'">'+U.ph(t(c.title),ev?t(c.subEv,{ev:E(ev.nombre)}):t(c.sub),acts);
  h+='<div class="fx-bar">'+U.search(c.tab,f[K.q],t('q_ph'))
    +U.seg('ing.st',[{v:'all',lbl:t('st_all'),n:d.all},{v:'in',lbl:t('st_in'),n:d.nIn,dot:'var(--fx-teal)'},{v:'out',lbl:t('st_out'),n:d.nOut,dot:'var(--fx-slate)'}],d.st,t('c_state'),' data-src="'+c.tab+'"')+'</div>';
  h+='<div class="fx-bar">'+U.dateSeg('ing.date" data-src="'+c.tab,dm,f[K.fecha],f[K.desde],f[K.hasta],'ing.range" data-src="'+c.tab)+U.tiles('ing.hall" data-src="'+c.tab,FX.halls(),f[K.hall])+'</div>';
  var fkey=[f[K.q],f[K.hall],f[K.fecha],f[K.desde],f[K.hasta],d.st,d.col,d.dir].join('|');
  var pg=U.page(c.tab,fkey,d.items);
  if(!d.items.length){
    h+=U.empty(t(c.emptyT),t('empty_p'),(dm!=='all'?U.btn('ing.date',I.cal,t('empty_all'),'',' data-v="clear" data-src="'+c.tab+'"'):'')+(can('canAdd')?U.btn('ing.new',I.plus,t(c.newL),'pri',' data-src="'+c.tab+'"'):''));
  } else if(FX.S.lay!=='table'){
    h+=U.list(pg.list.map(function(i){return ingLi(c,i,single,pg.isNew(i.id));}).join(''));
  } else {
    h+=U.table(ingHead(c,d),pg.list.map(function(i){return ingRow(c,i,single,pg.isNew(i.id));}).join(''));
  }
  h+=U.foot(c.tab,pg.list.length,d.items.length);
  return h+'</div>';
}
function ingRerender(c){call(c.render);}
function C(el){return ING[el.getAttribute('data-src')]||ING.ingresos2;}
Object.keys(ING).forEach(function(tab){
  var c=ING[tab];
  FX.view(tab,{
    when:function(){var f=FX.IF();return !f||(f[c.k.sub]||'lista')==='lista';},
    render:function(){return ingRender(c);},
    back:function(){var f=FX.IF();if(f){f[c.k.sub]='lista';call('_saveSubTab',c.tab,'lista');}ingRerender(c);},
    reset:function(){var f=FX.IF();if(f&&f[c.k.sub]&&f[c.k.sub]!=='lista'){f[c.k.sub]='lista';window['_subRestored_'+c.tab]=true;call('_saveSubTab',c.tab,'lista');}},
    wrap:[c.render]
  });
  FX.q(tab,function(v){var f=FX.IF();if(!f)return;f[c.k.q]=v;f[c.k.pg]=0;ingRerender(c);});
  FX.row(tab,function(id){openIngDrawer(c,id);});
});
FX.act('ing.new',function(el){FX.closeMenu();C(el).neu();});
FX.act('ing.export',function(el){call(C(el).exp);});
FX.act('ing.import',function(el){var c=C(el),x=' data-src="'+c.tab+'"';FX.menu(el,U.mi('ing.paste',I.paste,t('import_paste'),'',x,t('import_paste_s'))+U.mi('ing.xlsx',I.sheet,t('import_xlsx'),'',x)+(c.tpl?U.mi('ing.tpl',I.file,t('import_tpl'),'',x):''),true);});
FX.act('ing.paste',function(el){FX.closeMenu();C(el).paste();});
FX.act('ing.xlsx',function(el){FX.closeMenu();if(!can('canImport')){call('toast',call('tr','sinPermiso'),'var(--red)');return;}var xi=document.getElementById(C(el).xlsx);if(xi)xi.click();});
FX.act('ing.tpl',function(el){FX.closeMenu();call(C(el).tpl);});
FX.act('ing.opts',function(el){var c=C(el),x=' data-src="'+c.tab+'"';var h=U.mi('ing.sub',I.listx,t('special'),'',x+' data-v="listanegra"')+U.mi('ing.sub',I.hist,t('edits'),'',x+' data-v="historial"')+U.mi('ing.sub',I.cols,t('columns'),'',x+' data-v="columnas"');if(can('canCampos'))h+=U.mi('ing.sub',I.sliders,t('fields'),'',x+' data-v="campos"');if(can('canClean'))h+='<hr>'+U.mi('ing.clean',I.trash,t('clean'),'dng',x);FX.menu(el,h,true);});
FX.act('ing.sub',function(el,id,v){FX.closeMenu();var c=C(el),f=FX.IF();if(!f)return;f[c.k.sub]=v;call('_saveSubTab',c.tab,v);ingRerender(c);FX.scrollTop();});
FX.act('ing.clean',function(el){FX.closeMenu();call('cleanTab',C(el).clean);});
FX.act('ing.st',function(el,id,v){var c=C(el),f=FX.IF();if(!f)return;ST[c.tab]=v;f[c.k.act]=(v==='in');f[c.k.pg]=0;ingRerender(c);});
FX.act('ing.date',function(el,id,v){var c=C(el),f=FX.IF();if(f)f[c.k.pg]=0;call(c.dateH,v);});
FX.act('ing.range',function(el){var c=C(el),f=FX.IF()||{};U.rangeMenu(el,'ing.rangeOk" data-src="'+c.tab,f[c.k.desde]||f[c.k.fecha],f[c.k.hasta]||f[c.k.fecha]);});
FX.act('ing.rangeOk',function(el){var c=C(el),f=FX.IF();if(!f)return;var r=U.rangeVal();f[c.k.desde]=r.a;f[c.k.hasta]=r.b;f[c.k.fecha]='';f[c.k.mode]=(r.a||r.b)?'rango':'all';f[c.k.pg]=0;ingRerender(c);});
FX.act('ing.hall',function(el,id,v){var c=C(el),f=FX.IF();if(!f)return;f[c.k.hall]=v||'';f[c.k.pg]=0;ingRerender(c);});
FX.act('ing.sort',function(el){call('setSort',C(el).tab,el.getAttribute('data-col'));});
FX.act('ing.more',function(el,id){var c=C(el),i=rec(c,id);if(!i)return;var x=' data-id="'+E(id)+'" data-src="'+c.tab+'"';
  var h=U.mi('ing.view',I.eye,t('a_view'),'',x);if(can('canEdit'))h+=U.mi('ing.edit',I.edit,t('a_edit'),'',x);
  h+=U.mi('ing.print',I.printer,t('a_print'),'',x)+U.mi('ing.ramp',I.ticket,t('a_ramp'),'',x);
  if(can('canStatus'))h+=i.salida?U.mi('ing.undo',I.undo,t('a_undo'),'',x):U.mi('ing.out',I.exit,t('a_out'),'',x);
  if(can('canDel'))h+='<hr>'+U.mi('ing.del',I.trash,t('a_del'),'dng',x);FX.menu(el,h,true);});
FX.act('ing.view',function(el,id){FX.closeMenu();openIngDrawer(C(el),id);});
FX.act('ing.edit',function(el,id){FX.closeMenu();var c=C(el),i=rec(c,id);if(!i)return;FX.drawer.close();c.edit(i);});
FX.act('ing.print',function(el,id){FX.closeMenu();call(C(el).print,id);});
FX.act('ing.ramp',function(el,id){FX.closeMenu();call(C(el).ramp,id);});
FX.act('ing.out',function(el,id){FX.closeMenu();call(C(el).out,id);});
FX.act('ing.undo',function(el,id){FX.closeMenu();call(C(el).undo,id);});
FX.act('ing.del',function(el,id){FX.closeMenu();FX.drawer.close();call(C(el).del,id);});

/* ── Panel de detalle de un ingreso o referencia ── */
function dl(pairs){var h='<dl class="fx-dl">';pairs.forEach(function(p){if(p[1]==null||String(p[1]).trim()==='')return;h+='<div'+(p[2]?' class="w"':'')+'><dt>'+E(p[0])+'</dt><dd>'+E(p[1])+'</dd></div>';});return h+'</dl>';}
function tl(steps){return '<ol class="fx-tl">'+steps.map(function(s){return '<li class="'+(s.v?'':'off')+'"><b>'+E(s.l)+'</b><span>'+(s.v?E(s.v):E(t('tl_pending')))+'</span></li>';}).join('')+'</ol>';}
function openIngDrawer(c,id){
  FX.drawer.open(function(){
    var i=rec(c,id);if(!i)return null;
    var x=' data-id="'+E(i.id)+'" data-src="'+c.tab+'"',ref=FX.parseTs(i.entrada),refY=ref&&ref.ymd;
    var steps=[{l:t('tl_entry'),v:FX.tsLbl(i.entrada,null)}];
    if(i.rampaHora)steps.push({l:t('tl_ramp'),v:(i._rampaHoraEstimada?'~ ':'')+FX.tsLbl(i.rampaHora,refY)+(i._rampaHoraEstimada?' ('+t('est')+')':'')});
    if(i.oficinaHora)steps.push({l:t('tl_office'),v:FX.tsLbl(i.oficinaHora,refY)});
    if(i.salidaHora)steps.push({l:t('tl_office_out'),v:FX.tsLbl(i.salidaHora,refY)});
    steps.push({l:t('tl_exit'),v:i.salida?FX.tsLbl(i.salida,refY):''});
    if(i.salidaRealParking)steps.push({l:t('tl_park'),v:FX.tsLbl(i.salidaRealParking,refY)});
    var drv=[i.nombre,i.apellido].filter(Boolean).join(' ');
    var h='<div class="fx-dr-h"><div class="fx-dr-id">'+(i.pos?'<span class="fx-dr-pos"><small>'+t('dr_pos')+'</small><b>'+E(i.pos)+'</b></span>':'')
      +'<span class="fx-dr-plates">'+U.plate(i.matricula,FX.plateCC(i.pais),'lg')+(i.remolque?U.plate(i.remolque,'','sm'):'')+'</span></div>'
      +U.ibtn('drClose',I.x,t('close'),'ghost')+'</div>';
    h+='<div class="fx-dr-b"><div class="fx-dr-st">'+stBadge(i)+U.halls(i.halls||[i.hall||''])+(i.stand?'<span class="fx-lbl">'+E(t('stand',{s:i.stand}))+'</span>':'')+'</div>';
    h+='<h3>'+t('dr_trace')+'</h3>'+tl(steps);
    h+='<h3>'+t('dr_data')+'</h3>'+dl([[t('f_comp'),i.empresa],[t('f_ref'),i.referencia],[t('f_expo'),i.expositor],[t('f_mont'),i.montador],[t('f_name'),drv],[t('f_tel'),((i.telPais||'')+' '+(i.telefono||'')).trim()],[t('f_pager'),i.llamador],[t('f_door'),i.puertaHall],[t('f_vtype'),vType(i)],[t('f_serv'),servLbl(i.descargaTipo)],[t('f_pass'),i.pasaporte],[t('f_mail'),i.email],[t('f_ev'),i.eventoNombre],[t('f_by'),i.creadoPor],[t('f_com'),i.comentario,1]]);
    h+='</div><div class="fx-dr-f">';
    if(can('canStatus'))h+=i.salida?U.btn('ing.undo',I.undo,t('a_undo'),'',x):U.btn('ing.out',I.exit,t('a_out'),'go',x);
    if(can('canEdit'))h+=U.btn('ing.edit',I.edit,t('a_edit'),'',x);
    h+=U.btn('ing.print',I.printer,t('a_print'),'',x)+U.btn('ing.ramp',I.ticket,t('a_ramp'),'',x);
    return h+'</div>';
  });
}
FX.openIngDrawer=function(src,id){openIngDrawer(ING[src]||ING.ingresos2,id);};

/* Tabla de muestra para la página del sistema de diseño */
FX.sysTable=function(){
  var td=FX.todayStr(),c=ING.ingresos2;
  var demo=[{id:'d1',pos:'4',matricula:'4183JBT',pais:'E',remolque:'R5244BCG',referencia:'044-260521-0193',empresa:'Pirata Transportes',nombre:'Ángel',apellido:'Bozada',halls:['3'],stand:'B18',entrada:td+' 14:02:11',rampaHora:td+' 14:05:00',oficinaHora:td+' 14:20:00'},
    {id:'d2',pos:'14',matricula:'WGM87933',pais:'PL',referencia:'058-260521-0207',empresa:'DSV Contract Logistics',expositor:'Plockmatic Group',halls:['2'],stand:'A6',entrada:td+' 09:41:52',salida:td+' 12:18:03'}];
  var noop=function(s){return s.replace(/data-fxrow="[^"]*"/g,'').replace(/data-fx="[^"]*"/g,'data-fx="noop"');};
  return U.table(noop(ingHead(c,{col:'pos',dir:'asc'})),demo.map(function(i){return noop(ingRow(c,i,true,false));}).join(''));
};

/* ════════════ AGENDA ════════════ */
var AGS={st:'all'},AGM={};
function agS(a){return AGM[a.id]||agState(a,FX.todayStr(),FX.nowHM());}
function AG(){try{return agF;}catch(e){return null;}}
function agSub(){return window._agSubTab||'lista';}
function agRec(id){var D=FX.db()||{};return (D.agenda||[]).find(function(x){return x.id===id;});}
function diffM(p,r){try{return fn('diffMins')?diffMins(p,r):null;}catch(e){return null;}}
function agState(a,td,now){var e=a.estado||'PENDIENTE';if(e==='LLEGADO')return 'arr';if(e==='SALIDA')return 'out';if(a.fecha<td)return 'noshow';if(a.fecha===td&&a.hora&&a.hora<now)return 'late';return 'pend';}
function agData(){
  var D=FX.db()||{},g=AG()||{},td=FX.todayStr(),now=FX.nowHM();
  if(g._mode==='evento'&&!g.desde&&!g.hasta){var e=FX.getEvDates();if(e){g.desde=e.desde;g.hasta=e.hasta;}}
  var items=(D.agenda||[]).slice();
  var tabEv=null;try{tabEv=getTabEvent('agenda');}catch(e){}
  if(tabEv)items=items.filter(function(a){return !a.eventoId||a.eventoId===tabEv.id||a.eventoNombre===tabEv.nombre;});
  if(g.desde)items=items.filter(function(a){return a.fecha>=g.desde;});
  if(g.hasta)items=items.filter(function(a){return a.fecha<=g.hasta;});
  if(g.fecha)items=items.filter(function(a){return a.fecha===g.fecha;});
  if(g.hall)items=items.filter(function(a){return a.hall===g.hall;});
  var q=(g.q||'').toLowerCase();if(q)items=items.filter(function(a){return FX.hay(a,['matricula','conductor','empresa','referencia','montador','expositor','hall','remolque']).indexOf(q)>=0;});
  if(g.evento)items=items.filter(function(a){return String(a.eventoNombre||a.empresa||'').toLowerCase().indexOf(String(g.evento).toLowerCase())>=0;});
  var cnt={all:items.length,pend:0,late:0,arr:0,out:0};
  AGM={};items.forEach(function(a){var s=agState(a,td,now);AGM[a.id]=s;if(s==='pend'||s==='late'||s==='noshow')cnt.pend++;if(s==='late'||s==='noshow')cnt.late++;if(s==='arr')cnt.arr++;if(s==='out')cnt.out++;});
  var st=AGS.st;
  var S_=function(a){return AGM[a.id];};
  if(st==='pend')items=items.filter(function(a){var x=S_(a);return x==='pend'||x==='late'||x==='noshow';});
  else if(st==='late')items=items.filter(function(a){var x=S_(a);return x==='late'||x==='noshow';});
  else if(st==='arr')items=items.filter(function(a){return S_(a)==='arr';});
  else if(st==='out')items=items.filter(function(a){return S_(a)==='out';});
  var s=FX.sortOf('agenda','hora','asc');
  if(s.col==='hora')items.sort(function(a,b){return String(a.fecha||'').localeCompare(String(b.fecha||''))||String(a.hora||'99').localeCompare(String(b.hora||'99'))*(s.dir==='desc'?-1:1);});
  else items=FX.sortArr(items,s.col,s.dir);
  return {items:items,cnt:cnt,col:s.col,dir:s.dir,grouped:s.col==='hora'||s.col==='fecha'};
}
function agBadge(a){
  var s=agS(a);
  if(s==='arr')return U.st('in',t('s_arr',{t:a.horaReal||''}).trim());
  if(s==='out'){var p=FX.parseTs(a.horaSalida);return U.st('out',t('s_left',{t:p?p.hm:''}).trim());}
  if(s==='late')return U.st('pend',t('s_late'));
  if(s==='noshow')return U.st('pend',t('s_noshow'));
  return U.st('idle',t('s_pend'));
}
function agDiff(a){var d=a.horaReal?diffM(a.hora,a.horaReal):null;if(d==null)return '';if(Math.abs(d)<=2)return '<span class="fx-diff ok">'+t('d_ontime')+'</span>';if(d>10)return '<span class="fx-diff late">'+t('d_late',{n:d})+'</span>';if(d>0)return '<span class="fx-diff">'+t('d_late',{n:d})+'</span>';return '<span class="fx-diff">'+t('d_early',{n:Math.abs(d)})+'</span>';}
function agActs(a){
  var x=' data-id="'+E(a.id)+'"',h='',e=a.estado||'PENDIENTE';
  if(can('canStatus')&&e!=='LLEGADO'&&e!=='SALIDA')h+=U.btn('ag.arrive',I.arrive,t('a_arrive'),'go sm',x);
  if(can('canStatus')&&e==='LLEGADO')h+=U.btn('ag.leave',I.exit,t('a_leave'),'sm',x);
  h+=U.ibtn('ag.print',I.printer,t('a_print'),'ghost sm',x);
  h+=U.ibtn('ag.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"');
  return U.acts(h);
}
function agTimeCell(a){return '<span class="fx-time">'+E(a.hora||'–')+'</span>'+(a.horaReal?U.meta(E(t('real',{t:a.horaReal}))+' &nbsp;'+agDiff(a),'fx-num'):'');}
function agRow(a,isNew){
  var drv=a.conductor||'';
  var h='<tr class="'+(agS(a)==='arr'?'in':'')+(isNew?' fx-new':'')+'" data-fxrow="'+E(a.id)+'" data-src="agenda">';
  h+='<td class="c-time">'+agTimeCell(a)+'</td>';
  h+='<td class="c-plate">'+U.plate(a.matricula,FX.plateCC(a.pais))+(a.remolque?'<br>'+U.plate(a.remolque,'','sm'):'')+'</td>';
  if(FX.colOn('agenda','referencia'))h+='<td class="c-ref">'+(a.referencia?'<span class="fx-code">'+E(a.referencia)+'</span>':U.dash)+'</td>';
  h+='<td class="c-txt"><span class="fx-strong fx-ell">'+(a.empresa?E(a.empresa):U.dash)+'</span>'+(drv&&FX.colOn('agenda','conductor')?U.meta(E(drv)):'')+(a.expositor&&a.expositor!==a.empresa?U.meta(E(a.expositor)):'')+'</td>';
  if(FX.colOn('agenda','hall'))h+='<td class="c-hall">'+(a.hall?U.hall(a.hall):U.dash)+(a.stand?U.meta(E(t('stand',{s:a.stand}))):'')+'</td>';
  h+='<td class="c-st">'+agBadge(a)+'</td>';
  h+='<td class="c-act">'+agActs(a)+'</td>';
  return h+'</tr>';
}
function agLi(a,isNew){
  var meta=[];
  if(a.referencia)meta.push('<span class="fx-code">'+E(a.referencia)+'</span>');
  if(a.hall)meta.push('<span>'+U.hall(a.hall)+(a.stand?' &nbsp;'+E(t('stand',{s:a.stand})):'')+'</span>');
  if(a.horaReal)meta.push('<span class="fx-num">'+E(t('real',{t:a.horaReal}))+' &nbsp;'+agDiff(a)+'</span>');
  if(a.conductor)meta.push('<span class="fx-ell">'+E(a.conductor)+'</span>');
  return U.li({id:a.id,src:'agenda',cls:(agS(a)==='arr'?'in':'')+(isNew?' fx-new':''),pos:'<span class="fx-time">'+E(a.hora||'–')+'</span>',plate:U.plate(a.matricula,FX.plateCC(a.pais))+(a.remolque?U.plate(a.remolque,'','sm'):''),title:E(a.empresa||'–'),meta:meta,st:agBadge(a),act:agActs(a)}).replace('class="c-pos"','class="c-pos fx-time"');
}
function agHead(d){var a='ag.sort';return U.th(a,'hora',t('c_time'),d)+U.th(a,'matricula',t('c_plate'),d)+(FX.colOn('agenda','referencia')?U.th(a,'referencia',t('c_ref'),d):'')+U.th(a,'empresa',t('c_comp'),d)+(FX.colOn('agenda','hall')?U.th(a,null,t('c_hall'),d):'')+U.th(a,'estado',t('c_state'),d)+'<th><span class="fx-sr">'+t('more')+'</span></th>';}
function agRender(){
  var g=AG()||{},d=agData(),ev=FX.workEv(),td=FX.todayStr();
  var dm=U.dateMode(g.desde===g.hasta?g.desde:'',g.desde,g.hasta,g._mode);
  var acts='';
  acts+='<button type="button" class="fx-btn" data-fx="ag.import" aria-haspopup="menu">'+I.up+'<span>'+t('import')+'</span></button>';
  if(can('canExport'))acts+=U.btn('ag.export',I.down,t('export'));
  acts+=U.ibtn('ag.opts',I.more,t('more'),'',' aria-haspopup="menu"');
  if(can('canAdd'))acts+=U.btn('ag.new',I.plus,t('ag_new'),'pri');
  var h='<div class="fx-page" data-view="agenda">'+U.ph(t('tab_agenda'),ev?t('ag_sub_ev',{ev:E(ev.nombre)}):t('ag_sub'),acts);
  var opts=[{v:'all',lbl:t('st_all'),n:d.cnt.all},{v:'pend',lbl:t('ag_pend'),n:d.cnt.pend,dot:'var(--fx-line2)'}];
  if(d.cnt.late)opts.push({v:'late',lbl:t('ag_late'),n:d.cnt.late,dot:'var(--fx-amber-solid)'});
  opts.push({v:'arr',lbl:t('ag_arr'),n:d.cnt.arr,dot:'var(--fx-teal)'},{v:'out',lbl:t('ag_out'),n:d.cnt.out,dot:'var(--fx-slate)'});
  h+='<div class="fx-bar">'+U.search('agenda',g.q,t('q_ph'))+U.seg('ag.st',opts,AGS.st,t('c_state'))+'</div>';
  h+='<div class="fx-bar">'+U.dateSeg('ag.date',dm,g.desde===g.hasta?g.desde:'',g.desde,g.hasta,'ag.range')+U.tiles('ag.hall',FX.halls(),g.hall)+'</div>';
  var fkey=[g.q,g.hall,g.desde,g.hasta,AGS.st,d.col,d.dir].join('|');
  var pg=U.page('agenda',fkey,d.items);
  if(!d.items.length){
    h+=U.empty(t('empty_ag'),t('empty_ag_p'),(dm!=='all'?U.btn('ag.date',I.cal,t('empty_all'),'',' data-v="clear"'):'')+(can('canAdd')?U.btn('ag.new',I.plus,t('ag_new'),'pri'):''));
  } else {
    var groups=[],cur=null;
    pg.list.forEach(function(a){var k=d.grouped?(a.fecha||''):'_';if(!cur||cur.k!==k){cur={k:k,items:[]};groups.push(cur);}cur.items.push(a);});
    var multi=d.grouped&&(groups.length>1||(groups[0]&&groups[0].k!==td));
    var dayCount=function(k){return d.items.filter(function(a){return a.fecha===k;}).length;};
    var dayH=function(k){var n=dayCount(k);return '<div class="fx-dayh">'+E(FX.dayLong(k))+'<small class="fx-num">'+(n===1?t('n_ag1'):t('n_ag',{n:n}))+'</small></div>';};
    if(FX.S.lay!=='table'){
      groups.forEach(function(gr){h+=(multi&&gr.k!=='_'?'<div class="fx-dayblk">'+dayH(gr.k)+'</div>':'')+U.list(gr.items.map(function(a){return agLi(a,pg.isNew(a.id));}).join(''));});
    } else {
      var ncol=5+(FX.colOn('agenda','referencia')?1:0)+(FX.colOn('agenda','hall')?1:0),rows='';
      groups.forEach(function(gr){if(multi&&gr.k!=='_')rows+='<tr class="fx-day"><td colspan="'+ncol+'">'+dayH(gr.k)+'</td></tr>';rows+=gr.items.map(function(a){return agRow(a,pg.isNew(a.id));}).join('');});
      h+=U.table(agHead(d),rows);
    }
  }
  h+=U.foot('agenda',pg.list.length,d.items.length);
  return h+'</div>';
}
FX.view('agenda',{
  when:function(){return agSub()==='lista';},
  render:agRender,
  back:function(){window._agSubTab='lista';call('_saveSubTab','agenda','lista');call('renderAgenda');},
  reset:function(){if(agSub()!=='lista'){window._agSubTab='lista';window._subRestored_agenda=true;call('_saveSubTab','agenda','lista');}},
  wrap:['renderAgenda']
});
FX.q('agenda',function(v){var g=AG();if(!g)return;g.q=v;call('renderAgenda');});
FX.row('agenda',function(id){openAgDrawer(id);});
FX.act('ag.new',function(){FX.closeMenu();call('openAgendaModal');});
FX.act('ag.export',function(){call('exportAgenda');});
FX.act('ag.import',function(el){FX.menu(el,U.mi('ag.paste',I.paste,t('import_paste'),'','',t('import_paste_s'))+U.mi('ag.xlsx',I.sheet,t('import_xlsx'))+U.mi('ag.tpl',I.file,t('import_tpl')),true);});
FX.act('ag.paste',function(){FX.closeMenu();call('openImportRef','agenda');});
FX.act('ag.xlsx',function(){FX.closeMenu();var x=document.getElementById('xlsxAg');if(x)x.click();});
FX.act('ag.tpl',function(){FX.closeMenu();call('dlTemplateAg');});
FX.act('ag.opts',function(el){var h=U.mi('ag.sub',I.listx,t('special'),'',' data-v="especial"')+U.mi('ag.sub',I.hist,t('edits'),'',' data-v="historial"')+U.mi('ag.sub',I.cols,t('columns'),'',' data-v="columnas"');if(can('canCampos'))h+=U.mi('ag.sub',I.sliders,t('fields'),'',' data-v="campos"');if(can('canClean'))h+='<hr>'+U.mi('ag.clean',I.trash,t('clean_ag'),'dng');FX.menu(el,h,true);});
FX.act('ag.sub',function(el,id,v){FX.closeMenu();window._agSubTab=v;call('_saveSubTab','agenda',v);call('renderAgenda');FX.scrollTop();});
FX.act('ag.clean',function(){FX.closeMenu();if(!window.confirm(call('tr','limpiar')+'?'))return;call('cleanTab','agenda');});
FX.act('ag.st',function(el,id,v){AGS.st=v;var g=AG();if(g)g.estado='';call('renderAgenda');});
FX.act('ag.date',function(el,id,v){call('_agDateHandler',v);});
FX.act('ag.range',function(el){var g=AG()||{};U.rangeMenu(el,'ag.rangeOk',g.desde,g.hasta);});
FX.act('ag.rangeOk',function(){var g=AG();if(!g)return;var r=U.rangeVal();g.desde=r.a;g.hasta=r.b;g._mode=(r.a||r.b)?'rango':'all';call('renderAgenda');});
FX.act('ag.hall',function(el,id,v){var g=AG();if(!g)return;g.hall=v||'';call('renderAgenda');});
FX.act('ag.sort',function(el){call('setSort','agenda',el.getAttribute('data-col'));});
FX.act('ag.arrive',function(el,id){FX.closeMenu();call('marcarAgLlegado',id);});
FX.act('ag.leave',function(el,id){FX.closeMenu();call('marcarAgSalida',id);});
FX.act('ag.print',function(el,id){FX.closeMenu();var a=agRec(id);if(a)call('printAgendaItem',a);});
FX.act('ag.track',function(el,id){FX.closeMenu();call('registrarPasoTrackingAg',id);});
FX.act('ag.view',function(el,id){FX.closeMenu();openAgDrawer(id);});
FX.act('ag.edit',function(el,id){FX.closeMenu();FX.drawer.close();var a=agRec(id);if(a)call('openAgendaModal',a);});
FX.act('ag.del',function(el,id){FX.closeMenu();FX.drawer.close();call('askDelAg',id);});
FX.act('ag.more',function(el,id){var x=' data-id="'+E(id)+'"';var h=U.mi('ag.view',I.eye,t('a_view'),'',x)+U.mi('ag.track',I.radar,t('a_track'),'',x);if(can('canEdit'))h+=U.mi('ag.edit',I.edit,t('a_edit'),'',x);if(can('canDel'))h+='<hr>'+U.mi('ag.del',I.trash,t('a_del'),'dng',x);FX.menu(el,h,true);});
function openAgDrawer(id){
  FX.drawer.open(function(){
    var a=agRec(id);if(!a)return null;AGM[a.id]=agState(a,FX.todayStr(),FX.nowHM());
    var x=' data-id="'+E(a.id)+'"',e=a.estado||'PENDIENTE',ps=FX.parseTs(a.horaSalida);
    var h='<div class="fx-dr-h"><div class="fx-dr-id"><span class="fx-dr-pos"><small>'+E(FX.dayLbl(a.fecha))+'</small><b>'+E(a.hora||'–')+'</b></span><span class="fx-dr-plates">'+U.plate(a.matricula,FX.plateCC(a.pais),'lg')+(a.remolque?U.plate(a.remolque,'','sm'):'')+'</span></div>'+U.ibtn('drClose',I.x,t('close'),'ghost')+'</div>';
    h+='<div class="fx-dr-b"><div class="fx-dr-st">'+agBadge(a)+(a.hall?U.hall(a.hall):'')+(a.stand?'<span class="fx-lbl">'+E(t('stand',{s:a.stand}))+'</span>':'')+'</div>';
    h+='<h3>'+t('dr_trace')+'</h3>'+tl([{l:t('tl_plan'),v:[FX.dayLbl(a.fecha),a.hora].filter(Boolean).join(', ')},{l:t('tl_arrive'),v:a.horaReal?a.horaReal+(agDiff(a)?' ':''):''},{l:t('tl_leave'),v:ps?FX.tsLbl(a.horaSalida,a.fecha):''}]);
    var tv='';try{tv=a.tipoVehiculo?(TV[a.tipoVehiculo]||a.tipoVehiculo).replace(/^[^A-Za-zÁÉÍÓÚÑáéíóúñ]+/,''):'';}catch(err){tv=a.tipoVehiculo||'';}
    h+='<h3>'+t('dr_data')+'</h3>'+dl([[t('f_comp'),a.empresa],[t('f_ref'),a.referencia],[t('f_name'),a.conductor],[t('f_tel'),a.telefono],[t('f_expo'),a.expositor],[t('f_mont'),a.montador],[t('f_door'),a.puertaHall||a.puerta],[t('f_vtype'),tv],[t('f_serv'),servLbl(a.descargaTipo)],[t('f_pass'),a.pasaporte],[t('f_ev'),a.eventoNombre],[t('f_notes'),a.notas,1]]);
    h+='</div><div class="fx-dr-f">';
    if(can('canStatus')&&e!=='LLEGADO'&&e!=='SALIDA')h+=U.btn('ag.arrive',I.arrive,t('a_arrive'),'go',x);
    if(can('canStatus')&&e==='LLEGADO')h+=U.btn('ag.leave',I.exit,t('a_leave'),'',x);
    if(can('canEdit'))h+=U.btn('ag.edit',I.edit,t('a_edit'),'',x);
    h+=U.btn('ag.print',I.printer,t('a_print'),'',x)+U.btn('ag.track',I.radar,t('a_track'),'',x);
    return h+'</div>';
  });
}

/* ════════════ MENSAJES ════════════ */
function msgRender(){
  var D=FX.db()||{},now=Date.now(),sid='';try{sid=SID;}catch(e){}
  var items=(D.mensajesRampa||[]).slice().sort(function(a,b){return String(b.ts||'').localeCompare(String(a.ts||''));}).slice(0,80);
  var acts=U.btn('msg.read',I.check,t('m_read'));
  if(can('canExport'))acts+=U.ibtn('msg.export',I.down,t('export'));
  if(can('isSup')&&(D.mensajesRampa||[]).length)acts+=U.ibtn('msg.clean',I.trash,t('m_clean'),'dng');
  acts+=U.btn('msg.new',I.plus,t('m_new'),'pri');
  var h='<div class="fx-page" data-view="mensajes">'+U.ph(t('m_title'),t('m_sub'),acts);
  if(!items.length)h+=U.empty(t('m_empty'),t('m_empty_p'),U.btn('msg.new',I.plus,t('m_new'),'pri'));
  else{
    h+='<div class="fx-msgs">';
    items.forEach(function(m){
      var exp=m.expiraTs&&now>m.expiraTs,unread=!(m.leido&&m.leido.indexOf(sid)>=0)&&!m.pausado&&!exp;
      var k=m.tipo==='urgente'?'urg':m.tipo==='alerta'?'alt':'inf',p=FX.parseTs(m.ts);
      var meta=[U.st(k==='urg'?'blk':k==='alt'?'pend':'idle',t(k==='urg'?'m_urg':k==='alt'?'m_alt':'m_info'))];
      if(m.pausado)meta.push(U.st('out',t('m_paused')));else if(exp)meta.push(U.st('out',t('m_expired')));
      if(m.matricula)meta.push(U.plate(m.matricula,'','sm'));
      if(p)meta.push('<span class="fx-num">'+E(FX.tsLbl(m.ts,FX.todayStr()))+'</span>');
      if(m.autor)meta.push('<span>'+E(t('m_by',{a:m.autor}))+'</span>');
      h+='<div class="fx-msg '+k+(unread?' unread':'')+(m.pausado||exp?' paused':'')+'"><span class="fx-msg-ico">'+(k==='inf'?I.info:I.alert)+'</span><div><h3>'+E(m.titulo||'–')+'</h3>'+(m.mensaje?'<p>'+E(m.mensaje)+'</p>':'')+'<div class="fx-meta">'+meta.join('')+'</div></div>'
        +U.btn('msg.pause',m.pausado?I.play:I.pause,t(m.pausado?'m_resume':'m_pause'),'sm',' data-id="'+E(m.id)+'"')+'</div>';
    });
    h+='</div>';
  }
  return h+'</div>';
}
FX.view('mensajes',{render:msgRender,wrap:['renderMensajesTab']});
FX.act('msg.new',function(){call('openMsgModal');});
FX.act('msg.read',function(){call('marcarTodosMsgLeidos');call('renderMensajesTab');call('renderHdr');});
FX.act('msg.export',function(){call('exportMensajes');});
FX.act('msg.pause',function(el,id){call('pauseMsg',id);});
FX.act('msg.clean',function(){var D=FX.db();if(!D)return;var n=(D.mensajesRampa||[]).length;call('askDel',t('m_clean_t'),t('m_clean_p',{n:n}),function(){DB.mensajesRampa=[];call('_markDeleteOp','mensajesRampa');call('saveDB');call('renderMensajesTab');call('renderHdr');});});
})();
