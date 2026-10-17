/* BeUnifyT FUTURE · Subpantallas del menú ⋯: Lista especial, Historial de ediciones, Columnas y Campos
   para Ingresos, Referencia, Agenda, Conductores y Embalaje. Usa las funciones y el almacenamiento de siempre. */
(function(){
'use strict';
var FX=window.FX;if(!FX||!FX.getView)return;
var I=FX.I,t=FX.t,E=FX.E,U=FX.ui,call=FX.call,can=FX.can;

FX.addT({
es:{sb_back:'Volver a la lista',sb_hist:'Historial de ediciones',sb_hist_sub:'Altas, cambios, salidas y reactivaciones de {t}, con lo que cambió.',sb_cols:'Columnas',sb_cols_sub:'Elige qué columnas ves en {t}. Se guarda solo para ti.',sb_fields:'Campos',sb_fields_sub:'Qué campos pide el formulario de {t} en el evento activo y cuáles son obligatorios.',sb_ln:'Lista especial',sb_ln_sub:'Matrículas con alerta o bloqueo. La lista es la misma en Ingresos, Referencia y Agenda.',
 h_q:'Buscar por matrícula, posición, usuario o acción',h_empty:'Sin cambios registrados',h_empty_p:'Cada alta, edición, salida o reactivación aparecerá aquí.',ha_new:'Nuevo',ha_edit:'Editado',ha_out:'Salida',ha_react:'Reactivado',c_changes:'Cambios',c_action:'Acción',c_user2:'Usuario',c_when3:'Fecha',
 cv_tpl:'Plantillas',cv_tpl_p:'Guarda la combinación actual de columnas para reutilizarla.',cv_name:'Nombre de la plantilla',cv_save:'Guardar plantilla',cv_ev:'Evento',cv_all_ev:'Todos los eventos',cv_none:'Sin plantillas para este evento.',cv_favs:'Favoritas',cv_load:'Aplicar',cv_edit:'Editar',cv_fav:'Favorita (máx. 4)',cv_always:'Siempre visible',cv_up:'Subir',cv_down:'Bajar',cv_vis:'Visible',cv_hid:'Oculta',cv_editing:'Editando «{n}». Cambia las columnas y guarda.',
 g_vehiculo:'Vehículo',g_conductor:'Conductor',g_expositor:'Expositor',g_traza:'Trazabilidad',g_otros:'Otros',g_all:'Columnas',
 cf_off:'Oculto',cf_show:'Visible',cf_req:'Obligatorio',cf_width:'Ancho {n}/4',cf_noev:'Activa un evento para configurar los campos.',cf_noperm:'No tienes permiso para configurar campos.',cf_tpl_p:'Guarda esta configuración de campos para otros eventos.',n_req:'{n} obligatorios',n_hid:'{n} ocultos',
 ln_new:'Añadir matrícula',ln_block:'Bloqueo',ln_alert:'Alerta',ln_q:'Buscar por matrícula, motivo o empresa',c_reason:'Motivo',c_until:'Válido hasta',ln_empty:'La lista especial está vacía',ln_empty_p:'Añade matrículas para avisar o impedir su entrada.',ln_blocks:'Bloqueadas',ln_alerts:'Con alerta'},
en:{sb_back:'Back to list',sb_hist:'Edit history',sb_hist_sub:'New records, edits, exits and reactivations in {t}, with what changed.',sb_cols:'Columns',sb_cols_sub:'Choose which columns you see in {t}. Saved only for you.',sb_fields:'Fields',sb_fields_sub:'Which fields the {t} form asks for in the active event and which are required.',sb_ln:'Special list',sb_ln_sub:'Plates with an alert or a block. The same list is used in Entries, Reference and Schedule.',
 h_q:'Search by plate, position, user or action',h_empty:'No changes recorded',h_empty_p:'Every new record, edit, exit or reactivation will appear here.',ha_new:'New',ha_edit:'Edited',ha_out:'Exit',ha_react:'Reactivated',c_changes:'Changes',c_action:'Action',c_user2:'User',c_when3:'Date',
 cv_tpl:'Templates',cv_tpl_p:'Save the current column set to reuse it.',cv_name:'Template name',cv_save:'Save template',cv_ev:'Event',cv_all_ev:'All events',cv_none:'No templates for this event.',cv_favs:'Favourites',cv_load:'Apply',cv_edit:'Edit',cv_fav:'Favourite (max. 4)',cv_always:'Always visible',cv_up:'Move up',cv_down:'Move down',cv_vis:'Visible',cv_hid:'Hidden',cv_editing:'Editing “{n}”. Change the columns and save.',
 g_vehiculo:'Vehicle',g_conductor:'Driver',g_expositor:'Exhibitor',g_traza:'Traceability',g_otros:'Other',g_all:'Columns',
 cf_off:'Hidden',cf_show:'Visible',cf_req:'Required',cf_width:'Width {n}/4',cf_noev:'Activate an event to configure the fields.',cf_noperm:'You do not have permission to configure fields.',cf_tpl_p:'Save this field setup for other events.',n_req:'{n} required',n_hid:'{n} hidden',
 ln_new:'Add plate',ln_block:'Block',ln_alert:'Alert',ln_q:'Search by plate, reason or company',c_reason:'Reason',c_until:'Valid until',ln_empty:'The special list is empty',ln_empty_p:'Add plates to warn about or stop their entry.',ln_blocks:'Blocked',ln_alerts:'With alert'},
de:{sb_back:'Zurück zur Liste',sb_hist:'Änderungsverlauf',sb_hist_sub:'Neue Einträge, Änderungen, Ausfahrten und Reaktivierungen in {t}, mit den Änderungen.',sb_cols:'Spalten',sb_cols_sub:'Wählen Sie, welche Spalten Sie in {t} sehen. Wird nur für Sie gespeichert.',sb_fields:'Felder',sb_fields_sub:'Welche Felder das Formular von {t} in der aktiven Veranstaltung abfragt und welche Pflicht sind.',sb_ln:'Sonderliste',sb_ln_sub:'Kennzeichen mit Warnung oder Sperre. Dieselbe Liste gilt für Einfahrten, Referenzen und Zeitplan.',
 h_q:'Nach Kennzeichen, Position, Benutzer oder Aktion suchen',h_empty:'Keine Änderungen erfasst',h_empty_p:'Jeder neue Eintrag, jede Änderung, Ausfahrt oder Reaktivierung erscheint hier.',ha_new:'Neu',ha_edit:'Bearbeitet',ha_out:'Ausfahrt',ha_react:'Reaktiviert',c_changes:'Änderungen',c_action:'Aktion',c_user2:'Benutzer',c_when3:'Datum',
 cv_tpl:'Vorlagen',cv_tpl_p:'Speichern Sie die aktuelle Spaltenauswahl zur Wiederverwendung.',cv_name:'Name der Vorlage',cv_save:'Vorlage speichern',cv_ev:'Veranstaltung',cv_all_ev:'Alle Veranstaltungen',cv_none:'Keine Vorlagen für diese Veranstaltung.',cv_favs:'Favoriten',cv_load:'Anwenden',cv_edit:'Bearbeiten',cv_fav:'Favorit (max. 4)',cv_always:'Immer sichtbar',cv_up:'Nach oben',cv_down:'Nach unten',cv_vis:'Sichtbar',cv_hid:'Ausgeblendet',cv_editing:'„{n}“ wird bearbeitet. Spalten ändern und speichern.',
 g_vehiculo:'Fahrzeug',g_conductor:'Fahrer',g_expositor:'Aussteller',g_traza:'Rückverfolgung',g_otros:'Sonstiges',g_all:'Spalten',
 cf_off:'Ausgeblendet',cf_show:'Sichtbar',cf_req:'Pflicht',cf_width:'Breite {n}/4',cf_noev:'Aktivieren Sie eine Veranstaltung, um die Felder zu konfigurieren.',cf_noperm:'Sie dürfen die Felder nicht konfigurieren.',cf_tpl_p:'Diese Feldeinstellung für andere Veranstaltungen speichern.',n_req:'{n} Pflicht',n_hid:'{n} ausgeblendet',
 ln_new:'Kennzeichen hinzufügen',ln_block:'Sperre',ln_alert:'Warnung',ln_q:'Nach Kennzeichen, Grund oder Firma suchen',c_reason:'Grund',c_until:'Gültig bis',ln_empty:'Die Sonderliste ist leer',ln_empty_p:'Fügen Sie Kennzeichen hinzu, um zu warnen oder die Einfahrt zu sperren.',ln_blocks:'Gesperrt',ln_alerts:'Mit Warnung'}
});

function IFo(){return FX.IF()||{};}
var TABS={
  ingresos:{get:function(){return IFo()._sub||'lista';},set:function(v){IFo()._sub=v;},render:'renderIngresos',title:'tab_ingresos',ln:'listanegra'},
  ingresos2:{get:function(){return IFo()._sub2||'lista';},set:function(v){IFo()._sub2=v;},render:'renderIngresos2',title:'tab_ingresos2',ln:'listanegra'},
  agenda:{get:function(){return window._agSubTab||'lista';},set:function(v){window._agSubTab=v;},render:'renderAgenda',title:'tab_agenda',ln:'especial'},
  conductores:{get:function(){return window._condSub||'lista';},set:function(v){window._condSub=v;},render:'renderConductores',title:'tab_conductores'},
  flota:{get:function(){return window._flotaSub||'lista';},set:function(v){window._flotaSub=v;},render:'renderFlota',title:'tab_flota'}
};
var HIST_COL={ingresos:'ingresos',ingresos2:'ingresos2',agenda:'agenda',conductores:'conductores',flota:'movimientos'};
function kind(tab,s){var T=TABS[tab];if(s==='historial')return 'hist';if(s==='columnas')return 'cols';if(s==='campos')return 'fields';if(T.ln&&s===T.ln)return 'ln';return '';}
function db(){return FX.db()||{};}
function go(tab,s){var T=TABS[tab];T.set(s);call('_saveSubTab',tab,s);call(T.render);FX.sync();FX.scrollTop();}
function tabName(tab){return t(TABS[tab].title);}
function pretty(l){l=String(l||'').replace(/^[^A-Za-zÁÉÍÓÚÑáéíóúñ#0-9]+/,'').trim();if(l&&l===l.toUpperCase()&&/[A-ZÁÉÍÓÚÑ]{3}/.test(l))l=l.charAt(0)+l.slice(1).toLowerCase();return l;}
var KL={matricula:'c_plate',remolque:'f_trailer',conductor:'f_name',empresa:'f_comp',hall:'f_hall',stand:'f_stand',telefono:'f_tel',email:'f_mail',pasaporte:'f_pass',referencia:'f_ref',ref:'f_ref',montador:'f_mont',expositor:'f_expo',llamador:'f_pager',tipoVehiculo:'f_vtype',descargaTipo:'f_serv',puertaHall:'f_door',comentario:'f_com',notas:'f_notes',eventoNombre:'f_ev',evento:'f_ev',pais:'f_country',hora:'c_time',tipoCarga:'f_load',status:'c_state',estado:'c_state',tacografoHora:'f_tacho'};
function lbl(k,l){var tk=KL[k];if(tk){var v=t(tk);if(v!==tk)return v;}return pretty(l)||k;}
function head(tab,s,title,sub,acts){
  return '<div class="fx-crumb">'+U.btn('sb.back',I.back,t('sb_back'),'ghost sm',' data-tab="'+tab+'"')+'<span class="fx-lbl">'+E(tabName(tab))+'</span></div>'+U.ph(title,sub,acts||'');
}

/* ── Historial de ediciones ── */
var HQ={};
function hAct(a){a=a||'';if(a.indexOf('new')===0)return U.st('in',t('ha_new'));if(a.indexOf('edit')===0)return U.st('idle',t('ha_edit'));if(a==='salida')return U.st('out',t('ha_out'));if(a==='reactivar')return U.st('pend',t('ha_react'));return U.st('idle',a);}
function chg(h){var c=h.changes||[];if(!c.length)return h.note?'<span class="fx-lbl" style="white-space:normal">'+E(h.note)+'</span>':U.dash;return '<div class="fx-chg">'+c.map(function(x){return '<div><b>'+E(pretty(x.campo))+'</b><s>'+E(x.antes||'∅')+'</s>'+I.chev.replace('<svg','<svg class="fx-arr"')+'<ins>'+E(x.ahora||'∅')+'</ins></div>';}).join('')+'</div>';}
function histPage(tab){
  var col=HIST_COL[tab],q=String(HQ[tab]||'').toLowerCase();
  var list=(db().editHistory||[]).filter(function(h){if(h.collection)return h.collection===col;return col==='ingresos'||col==='ingresos2';});
  if(q)list=list.filter(function(h){return [h.pos,h.mat,h.action,h.user].join(' ').toLowerCase().indexOf(q)>=0;});
  var h=head(tab,'historial',t('sb_hist'),t('sb_hist_sub',{t:E(tabName(tab))}));
  h+='<div class="fx-bar">'+U.search('hist_'+tab,HQ[tab]||'',t('h_q'))+'</div>';
  if(!list.length)return h+U.empty(q?t('empty_q'):t('h_empty'),q?t('empty_q_p'):t('h_empty_p'),'');
  var pg=U.page('hist_'+tab,q,list.map(function(x,i){return {id:i,x:x};})),rows=pg.list.map(function(o){return o.x;});
  var openable=tab==='ingresos'||tab==='ingresos2';
  if(FX.S.lay!=='table'){
    h+=U.list(rows.map(function(x){return U.li({id:openable?x.id:'',src:openable?'hist_'+tab:'',pos:x.pos?E(x.pos):'',plate:x.mat?U.plate(x.mat,'','sm'):'',title:E(x.user||'–'),meta:['<span class="fx-num">'+E(FX.tsLbl(x.ts,''))+'</span>',chg(x)],st:hAct(x.action),act:''});}).join(''));
  } else {
    var th=function(l,c){return U.th('',null,l,{},c);};
    h+=U.table(th('#')+th(t('c_plate'))+th(t('c_action'))+th(t('c_user2'))+th(t('c_changes'))+th(t('c_when3')),rows.map(function(x){return '<tr'+(openable?' data-fxrow="'+E(x.id)+'" data-src="hist_'+tab+'"':'')+'><td class="c-pos">'+E(x.pos||'')+'</td><td class="c-plate">'+(x.mat?U.plate(x.mat,'','sm'):U.dash)+'</td><td class="c-st">'+hAct(x.action)+'</td><td class="fx-strong">'+E(x.user||'–')+'</td><td class="c-chgs">'+chg(x)+'</td><td class="fx-num c-time">'+E(FX.tsLbl(x.ts,'')||'–')+'</td></tr>';}).join(''));
  }
  return h+U.foot('hist_'+tab,rows.length,list.length);
}

/* ── Columnas ── */
var GROUPS={
  ingresos:[['vehiculo',['pos','matricula','remolque','tipoVehiculo','descargaTipo','llamador']],['conductor',['nombre','conductor','apellido','pasaporte','fechaNacimiento','pais','telefono','email']],['expositor',['empresa','expositor','montador','referencia','ref','hall','stand','puertaHall','evento']],['traza',['salida','rampaHora','oficinaHora','salidaHora','salidaRealParking','entrada','comentario','horario']]],
  agenda:[['vehiculo',['matricula','remolque','tipoVehiculo','descargaTipo','tipoCarga','llamador']],['conductor',['conductor','nombre','apellido','pasaporte','pais','telefono','email','pase']],['expositor',['empresa','expositor','montador','referencia','ref','hall','stand','puertaHall','evento']],['traza',['estado','fecha','hora','horaReal','dif','notas','extras','comentario','horario']]]
};
GROUPS.ingresos2=GROUPS.ingresos;
var CV={name:{}};
function colDefs(tab){try{return (_COL_DEFS[tab]||[]);}catch(e){return [];}}
function colGroups(tab){
  var defs=colDefs(tab),order=call('_getColOrder',tab)||defs.map(function(d){return d.k;});
  var srt=function(keys){return keys.slice().sort(function(a,b){var ia=order.indexOf(a),ib=order.indexOf(b);if(ia<0)ia=999;if(ib<0)ib=999;return ia-ib;});};
  var raw=GROUPS[tab];
  if(!raw)return [{id:'all',keys:srt(defs.map(function(d){return d.k;}))}];
  var gs=raw.map(function(g){return {id:g[0],keys:srt(g[1].filter(function(k){return defs.some(function(d){return d.k===k;});}))};}).filter(function(g){return g.keys.length;});
  var cov={};gs.forEach(function(g){g.keys.forEach(function(k){cov[k]=1;});});
  var rest=defs.filter(function(d){return !cov[d.k];}).map(function(d){return d.k;});
  if(rest.length)gs.push({id:'otros',keys:srt(rest)});
  return gs;
}
function guessEv(c,names){if(c.evNombre)return c.evNombre;var n=String(c.name||'').toUpperCase();for(var i=0;i<names.length;i++){var en=String(names[i]).toUpperCase();if(n.indexOf(en)>=0||en.indexOf(n)>=0)return names[i];var tok=en.split(/\s+/)[0];if(tok&&tok.length>=3&&n.indexOf(tok)>=0)return names[i];}return '';}
function colsPage(tab){
  var defs=colDefs(tab),vis=call('_getColVis',tab)||{},saved=call('_getSavedColCfgs',tab)||[],favs=call('_getFavTpls',tab)||[];
  var ev=FX.workEv(),evNames=(db().eventos||[]).map(function(e){return e.nombre;}).filter(Boolean);
  if(CV.ev===undefined)CV.ev=ev?ev.nombre:'';
  var editing=window['_colEditing_'+tab]||'';
  var h=head(tab,'columnas',t('sb_cols'),t('sb_cols_sub',{t:E(tabName(tab))}));
  if(favs.length)h+='<div class="fx-fchips"><span class="fx-lbl">'+t('cv_favs')+'</span>'+favs.map(function(n){return '<button type="button" class="fx-fchip" data-fx="cv.loadn" data-tab="'+tab+'" data-v="'+E(n)+'">'+I.star+E(n)+'</button>';}).join('')+'</div>';
  h+='<div class="fx-split2"><aside class="fx-side">';
  h+='<h3 class="fx-h4" style="margin-top:0">'+t('cv_tpl')+'</h3><p class="fx-hint" style="margin:0 0 12px">'+t('cv_tpl_p')+'</p>';
  if(editing)h+=U.note('pend',I.edit,E(t('cv_editing',{n:editing})));
  h+='<div class="fx-form"><input class="fx-in" id="fxCvName" data-tab="'+tab+'" placeholder="'+E(t('cv_name'))+'" value="'+E(CV.name[tab]!=null?CV.name[tab]:editing)+'">'+U.btn('cv.save',I.save,t('cv_save'),'pri',' data-tab="'+tab+'"')+'</div>';
  if(saved.length){
    var opts=[{v:'',lbl:t('cv_all_ev')}].concat(evNames.map(function(n){return {v:n,lbl:E(n)};}));
    h+='<div class="fx-form" style="margin-top:14px"><span class="fx-lbl">'+t('cv_ev')+'</span><select class="fx-in" data-fxsel="cv.ev" data-tab="'+tab+'">'+opts.map(function(o){return '<option value="'+E(o.v)+'"'+(o.v===CV.ev?' selected':'')+'>'+o.lbl+'</option>';}).join('')+'</select></div>';
    var list=saved.map(function(c,i){return {c:c,i:i};}).filter(function(o){return !CV.ev||guessEv(o.c,evNames)===CV.ev;});
    h+=list.length?'<ul class="fx-vl" style="margin-top:12px">'+list.map(function(o){var x=' data-tab="'+tab+'" data-v="'+o.i+'"',fav=favs.indexOf(o.c.name)>=0;return '<li><span class="fx-grow fx-ell"><b class="fx-strong">'+E(o.c.name)+'</b><small>'+E(guessEv(o.c,evNames)||'–')+'</small></span>'+U.ibtn('cv.fav',I.star,t('cv_fav'),'ghost sm'+(fav?' on':''),x+' data-n="'+E(o.c.name)+'"')+U.btn('cv.load',null,t('cv_load'),'sm',x)+U.ibtn('cv.ren',I.edit,t('cv_edit'),'ghost sm',x)+U.ibtn('cv.del',I.trash,t('a_del'),'ghost sm',x)+'</li>';}).join('')+'</ul>':'<p class="fx-sub" style="margin:12px 0 0">'+t('cv_none')+'</p>';
  }
  h+='</aside><div class="fx-cvgroups">';
  colGroups(tab).forEach(function(g){
    var vk=g.keys.filter(function(k){var d=defs.find(function(x){return x.k===k;});return d&&(d.always||vis[k]!==false);}).length;
    h+='<section class="fx-panel"><header><h2>'+t('g_'+g.id)+' <small class="fx-num">'+vk+' / '+g.keys.length+'</small></h2></header><div class="fx-panel-b"><ul class="fx-cvlist">';
    g.keys.forEach(function(k,ix){var d=defs.find(function(x){return x.k===k;});if(!d)return;var on_=d.always||vis[k]!==false,x=' data-tab="'+tab+'" data-v="'+E(k)+'"';
      h+='<li class="'+(on_?'':'off')+'"><span class="fx-grow">'+E(lbl(k,d.l))+(d.always?'<small>'+t('cv_always')+'</small>':'')+'</span>'
        +(d.always?'':U.ibtn('cv.up',I.sortUp,t('cv_up'),'ghost sm',x+(ix===0?' disabled':''))+U.ibtn('cv.down',I.sortDown,t('cv_down'),'ghost sm',x+(ix===g.keys.length-1?' disabled':'')))
        +'<button type="button" class="fx-switch'+(on_?' on':'')+'" role="switch" aria-checked="'+on_+'" aria-label="'+E(lbl(k,d.l))+'" data-fx="cv.tog"'+x+(d.always?' disabled':'')+'><i></i></button></li>';});
    h+='</ul></div></section>';
  });
  return h+'</div></div>';
}
function rerender(tab,s){TABS[tab].set(s);call(TABS[tab].render);FX.sync();}
FX.act('cv.tog',function(el,id,v){var tab=el.getAttribute('data-tab'),vis=call('_getColVis',tab)||{};vis[v]=(vis[v]===false);call('_setColVis',tab,vis);rerender(tab,'columnas');});
function moveCol(tab,k,dir){
  var g=colGroups(tab).find(function(x){return x.keys.indexOf(k)>=0;});if(!g)return;var i=g.keys.indexOf(k),j=i+dir;if(j<0||j>=g.keys.length)return;
  var other=g.keys[j],ord=call('_getColOrder',tab)||colDefs(tab).map(function(d){return d.k;});
  [k,other].forEach(function(x){if(ord.indexOf(x)<0)ord.push(x);});
  var a=ord.indexOf(k),b=ord.indexOf(other);ord[a]=other;ord[b]=k;call('_setColOrder',tab,ord);rerender(tab,'columnas');
}
FX.act('cv.up',function(el,id,v){moveCol(el.getAttribute('data-tab'),v,-1);});
FX.act('cv.down',function(el,id,v){moveCol(el.getAttribute('data-tab'),v,1);});
function withInput(id,val,fn_){var inp=document.getElementById(id),tmp=false;if(!inp){inp=document.createElement('input');inp.type='hidden';inp.id=id;document.body.appendChild(inp);tmp=true;}inp.value=val;try{fn_();}finally{if(tmp)inp.remove();}}
FX.act('cv.save',function(el){var tab=el.getAttribute('data-tab'),n=(document.getElementById('fxCvName')||{}).value||'';withInput('_colCfgName_'+tab,n.trim(),function(){call('_saveColCfg',tab);});if(n.trim())CV.name[tab]='';FX.sync();});
FX.act('cv.load',function(el,id,v){var tab=el.getAttribute('data-tab');call('_loadColCfg',tab,+v);FX.sync();});
FX.act('cv.loadn',function(el,id,v){var tab=el.getAttribute('data-tab');call('_loadColCfgByName',tab,v);FX.sync();});
FX.act('cv.ren',function(el,id,v){var tab=el.getAttribute('data-tab'),s=(call('_getSavedColCfgs',tab)||[])[+v];call('_renameColCfg',tab,+v);if(s)CV.name[tab]=s.name;FX.sync();setTimeout(function(){var i=document.getElementById('fxCvName');if(i){i.focus();i.select();}},60);});
FX.act('cv.del',function(el,id,v){call('_delColCfg',el.getAttribute('data-tab'),+v);});
FX.act('cv.fav',function(el){call('_toggleFav',el.getAttribute('data-tab'),el.getAttribute('data-n'));FX.sync();});

/* ── Campos del formulario ── */
var CF={name:{}};
function ckOf(tab){return call('_getCamposKey',tab)||'campos_ref';}
function fieldDefs(tab){
  if(tab==='ingresos'||tab==='ingresos2'){try{return PRINT_DEF.map(function(k){return {k:k,l:(PRINT_LABELS&&PRINT_LABELS[k])||k};});}catch(e){return [];}}
  return colDefs(tab).filter(function(c){return !c.always;});
}
function fieldsPage(tab){
  var h=head(tab,'campos',t('sb_fields'),t('sb_fields_sub',{t:E(tabName(tab))}));
  if(!can('canCampos'))return h+U.empty(t('cf_noperm'),'','');
  var ev=null;try{ev=getActiveEvent();}catch(e){}
  if(!ev)return h+U.empty(t('cf_noev'),'','');
  var ck=ckOf(tab),D=db(),cfg=(D.camposCfg||{})[ck]||{},cur=cfg.current||{},saved=Array.isArray(cfg)?cfg:(cfg.saved||[]),defs=fieldDefs(tab),sa=can('isSA');
  var wid={};try{var uc=_userCfg();wid=(uc.campoWidth&&uc.campoWidth[tab])||{};}catch(e){}
  var nReq=defs.filter(function(d){return cur[d.k]==='required';}).length,nOff=defs.filter(function(d){return cur[d.k]==='off';}).length;
  h+='<div class="fx-split2"><aside class="fx-side">';
  h+='<div class="fx-pin on" style="margin-bottom:14px"><span class="fx-pin-ico">'+I.venue+'</span><div><small>'+t('ds_ev')+'</small><b>'+E(ev.nombre)+'</b><span>'+E(t('n_req',{n:nReq})+' · '+t('n_hid',{n:nOff}))+'</span></div></div>';
  h+='<h3 class="fx-h4" style="margin-top:0">'+t('cv_tpl')+'</h3><p class="fx-hint" style="margin:0 0 12px">'+t('cf_tpl_p')+'</p>';
  h+='<div class="fx-form"><input class="fx-in" id="fxCfName" data-tab="'+tab+'" placeholder="'+E(t('cv_name'))+'" value="'+E(CF.name[tab]||'')+'">'+U.btn('cf.save',I.save,t('cv_save'),'pri',' data-tab="'+tab+'"')+'</div>';
  if(saved.length)h+='<ul class="fx-vl" style="margin-top:12px">'+saved.map(function(c,i){var x=' data-tab="'+tab+'" data-v="'+i+'"';return '<li><span class="fx-grow fx-ell"><b class="fx-strong">'+E(c.name||'–')+'</b><small>'+E(c.evNombre||'–')+'</small></span>'+U.btn('cf.load',null,t('cv_load'),'sm',x)+U.ibtn('cf.ren',I.edit,t('cv_edit'),'ghost sm',x)+U.ibtn('cf.del',I.trash,t('a_del'),'ghost sm',x)+'</li>';}).join('')+'</ul>';
  h+='</aside><section class="fx-panel"><div class="fx-panel-b"><ul class="fx-cvlist fx-cflist">';
  defs.forEach(function(d){var st=cur[d.k]||'show',x=' data-tab="'+tab+'" data-k="'+E(d.k)+'"';
    h+='<li class="'+(st==='off'?'off':'')+'"><span class="fx-grow">'+E(lbl(d.k,d.l))+'</span>'+(sa&&(tab==='ingresos'||tab==='ingresos2'||tab==='agenda')?'<button type="button" class="fx-fchip" data-fx="cf.w"'+x+'>'+E(t('cf_width',{n:wid[d.k]||1}))+'</button>':'')
      +U.seg('cf.set',[{v:'off',lbl:t('cf_off')},{v:'show',lbl:t('cf_show')},{v:'required',lbl:t('cf_req')}],st,lbl(d.k,d.l),x)+'</li>';});
  return h+'</ul></div></section></div>';
}
FX.act('cf.set',function(el,id,v){
  if(!can('canCampos')){call('toast',call('tr','sinPermiso'),'var(--red)');return;}
  var tab=el.getAttribute('data-tab'),k=el.getAttribute('data-k'),ck=ckOf(tab);if(!DB.camposCfg)DB.camposCfg={};
  if(!DB.camposCfg[ck]||!DB.camposCfg[ck].current)DB.camposCfg[ck]={saved:((DB.camposCfg[ck]&&DB.camposCfg[ck].saved)||[]),current:{}};
  if((DB.camposCfg[ck].current[k]||'show')===v)return;
  DB.camposCfg[ck].current[k]=v;call('saveDB');rerender(tab,'campos');
});
FX.act('cf.w',function(el){var tab=el.getAttribute('data-tab'),k=el.getAttribute('data-k');var f=window._campoCycleWidth;if(typeof f==='function')f({stopPropagation:function(){}},tab,k);FX.sync();});
FX.act('cf.save',function(el){var tab=el.getAttribute('data-tab'),ck=ckOf(tab),n=((document.getElementById('fxCfName')||{}).value||'').trim();withInput('camposCfgName_'+ck,n,function(){call('saveCamposCfg',ck,tab);});if(n)CF.name[tab]='';FX.sync();});
FX.act('cf.load',function(el,id,v){var tab=el.getAttribute('data-tab');call('loadCamposCfg',ckOf(tab),tab,+v);FX.sync();});
FX.act('cf.ren',function(el,id,v){var tab=el.getAttribute('data-tab'),ck=ckOf(tab),c=((db().camposCfg||{})[ck]||{}).saved;c=c&&c[+v];call('renameCamposCfg',ck,+v);if(c)CF.name[tab]=c.name;FX.sync();setTimeout(function(){var i=document.getElementById('fxCfName');if(i){i.focus();i.select();}},90);});
FX.act('cf.del',function(el,id,v){call('delCamposCfg',ckOf(el.getAttribute('data-tab')),+v);});

/* ── Lista especial ── */
var LQ={q:''};
function lnPage(tab){
  var all=db().listaNegra||[],q=LQ.q.toLowerCase(),acts='';
  if(can('canExport'))acts+=U.btn('ln.export',I.down,t('export'));
  if(can('canSpecial'))acts+=U.btn('ln.new',I.plus,t('ln_new'),'pri');
  var h=head(tab,'ln',t('sb_ln'),t('sb_ln_sub'),acts);
  if(!all.length)return h+U.empty(t('ln_empty'),t('ln_empty_p'),can('canSpecial')?U.btn('ln.new',I.plus,t('ln_new'),'pri'):'');
  var nb=all.filter(function(x){return x.nivel==='bloqueo';}).length;
  h+='<div class="fx-kpis k3">'+'<div class="fx-kpi bad"><small>'+t('ln_blocks')+'</small><b class="fx-num">'+nb+'</b></div><div class="fx-kpi mid"><small>'+t('ln_alerts')+'</small><b class="fx-num">'+(all.length-nb)+'</b></div><div class="fx-kpi"><small>'+t('total')+'</small><b class="fx-num">'+all.length+'</b></div></div>';
  var items=all.filter(function(x){return !q||[x.matricula,x.motivo,x.empresa].join(' ').toLowerCase().indexOf(q)>=0;});
  h+='<div class="fx-bar" style="margin-top:16px">'+U.search('lnq',LQ.q,t('ln_q'))+'</div>';
  if(!items.length)return h+U.empty(t('empty_q'),t('empty_q_p'),U.btn('qclr',I.x,t('clear_q'),'',' data-k="lnq"'));
  var badge=function(x){return x.nivel==='bloqueo'?U.st('blk',t('ln_block')):U.st('pend',t('ln_alert'));};
  var acts_=function(x){var a='',d=' data-id="'+E(x.id)+'"';if(can('canSpecial'))a+=U.ibtn('ln.edit',I.edit,t('a_edit'),'ghost sm',d)+U.ibtn('ln.del',I.trash,t('a_del'),'ghost sm',d);return U.acts(a);};
  if(FX.S.lay!=='table')h+=U.list(items.map(function(x){return U.li({id:x.id,src:'ln',cls:x.nivel==='bloqueo'?'blk':'pend',pos:'',plate:U.plate(x.matricula,''),title:E(x.motivo||'–'),meta:[x.empresa?'<span>'+E(x.empresa)+'</span>':'',x.hasta?'<span class="fx-num">'+E(t('c_until'))+' '+E(FX.dayLbl(x.hasta))+'</span>':''],st:badge(x),act:acts_(x)});}).join(''));
  else{var th=function(l){return U.th('',null,l,{});};h+=U.table(th(t('c_plate'))+th(t('c_level'))+th(t('c_reason'))+th(t('c_comp'))+th(t('c_until'))+'<th><span class="fx-sr">'+t('more')+'</span></th>',items.map(function(x){return '<tr class="'+(x.nivel==='bloqueo'?'blk':'pend')+'" data-fxrow="'+E(x.id)+'" data-src="ln"><td class="c-plate">'+U.plate(x.matricula,'')+'</td><td class="c-st">'+badge(x)+'</td><td class="c-txt"><span class="fx-ell">'+E(x.motivo||'–')+'</span></td><td class="c-txt"><span class="fx-ell">'+E(x.empresa||'–')+'</span></td><td class="fx-num c-time">'+E(x.hasta?FX.dayLbl(x.hasta):'–')+'</td><td class="c-act">'+acts_(x)+'</td></tr>';}).join(''));}
  return h;
}
function lnRec(id){return (db().listaNegra||[]).find(function(x){return x.id===id;});}
FX.act('ln.new',function(){call('openLNModal');});
FX.act('ln.edit',function(el,id){var x=lnRec(id);if(x)call('openLNModal',x);});
FX.act('ln.del',function(el,id){call('askDelLN',id);});
FX.act('ln.export',function(){call('exportListaNegra');});
FX.row('ln',function(id){var x=lnRec(id);if(x&&can('canSpecial'))call('openLNModal',x);});
FX.q('lnq',function(v){LQ.q=v;FX.sync();});
FX.wrap('saveLN',function(){if(FX.on())FX.sync();});

/* ── Enganche con las vistas existentes ── */
FX.act('sb.back',function(el){var v=FX.getView(el.getAttribute('data-tab'));if(v&&v.back){v.back();FX.scrollTop();}});
Object.keys(TABS).forEach(function(tab){
  var base=FX.getView(tab);if(!base)return;
  FX.q('hist_'+tab,function(v){HQ[tab]=v;FX.sync();});
  FX.row('hist_'+tab,function(id){if(FX.openIng)FX.openIng(tab,id);});
  FX.view(tab,{
    when:function(){var s=TABS[tab].get();if(s==='lista')return !base.when||base.when();return !!kind(tab,s);},
    render:function(){var s=TABS[tab].get(),k=kind(tab,s),inner;
      if(!k||s==='lista')return base.render();
      inner=k==='hist'?histPage(tab):k==='cols'?colsPage(tab):k==='fields'?fieldsPage(tab):lnPage(tab);
      return '<div class="fx-page" data-view="'+tab+'-'+s+'">'+inner+'</div>';},
    back:base.back,reset:base.reset
  });
});
document.addEventListener('input',function(e){var el=e.target;if(!el||!el.id)return;if(el.id==='fxCvName')CV.name[el.getAttribute('data-tab')]=el.value;else if(el.id==='fxCfName')CF.name[el.getAttribute('data-tab')]=el.value;});
/* Selects con data-fxsel (filtro de evento de plantillas) */
document.addEventListener('change',function(e){var el=e.target;if(!FX.on()||!el||!el.matches||!el.matches('#fxMain select[data-fxsel="cv.ev"]'))return;CV.ev=el.value;FX.sync();});
})();
