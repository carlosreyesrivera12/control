/* BeUnifyT FUTURE · Logística: Conductores, Embalaje y Empresas.
   Usa las funciones existentes de INDEX.html; no escribe datos por su cuenta. */
(function(){
'use strict';
var FX=window.FX;if(!FX)return;
var I=FX.I,t=FX.t,E=FX.E,U=FX.ui,call=FX.call,can=FX.can;

FX.addT({
es:{cd_sub:'Directorio de conductores con su vehículo y contacto habituales.',cd_new:'Nuevo conductor',cd_q:'Buscar por nombre, matrícula, empresa o teléfono',
 c_name:'Conductor',c_veh:'Vehículo',c_tel:'Teléfono',c_lang:'Idioma',c_evs:'Eventos',c_visits:'Ingresos',n_cd:'{n} conductores',n_cd1:'1 conductor',
 empty_cd:'Todavía no hay conductores',empty_cd_p:'Crea uno o impórtalos desde una tabla o un Excel.',empty_q:'Ningún resultado para esta búsqueda',empty_q_p:'Prueba con otra matrícula, nombre o empresa.',clear_q:'Borrar búsqueda',
 a_call:'Llamar',a_wa:'WhatsApp',a_mail:'Email',dr_contact:'Contacto',dr_visits:'Últimos ingresos',no_visits:'Sin ingresos registrados con esta matrícula.',visits_n:'{n} ingresos',visits_1:'1 ingreso',
 f_born:'Fecha de nacimiento',f_docexp:'Caducidad del documento',f_country:'País',f_manager:'Encargado',f_mtel:'Teléfono del encargado',f_memail:'Email del encargado',f_hallh:'Hall habitual',f_lang:'Idioma',f_evs:'Eventos',clean_cd:'Limpiar conductores',
 fl_sub:'Vehículos de embalaje entre almacén y recinto.',fl_new:'Nuevo movimiento',fl_q:'Buscar por matrícula, conductor, empresa o hall',
 ms_ALMACEN:'Almacén',ms_SOT:'SOT',ms_FIRA:'Fira',ms_FINAL:'Final',nx_SOT:'Pasar a SOT',nx_FIRA:'Pasar a Fira',nx_FINAL:'Finalizar',fl_all:'Todos',
 c_load:'Carga',c_tacho:'Tacógrafo',sot_over:'+9 h',sot_over_n:'{n} con +9 h',sot_over_l:'Han pasado más de 9 horas desde la hora del tacógrafo ({t}).',
 ago_h:'hace {n} h',ago_m:'hace {n} min',trip:'Vuelta {n}',set_st:'Estado',dr_route:'Recorrido',cur_st:'Ahora',
 empty_fl:'Todavía no hay movimientos',empty_fl_p:'Crea uno o impórtalos desde una tabla o un Excel.',empty_flf:'No hay vehículos con estos filtros',empty_flf_p:'Cambia el estado o el hall.',clean_fl:'Limpiar embalaje',
 f_trip:'Vuelta',f_tacho:'Tacógrafo',f_last:'Último cambio de estado',f_load:'Tipo de carga',n_fl:'{n} vehículos',n_fl1:'1 vehículo',
 em_sub:'Cuentas de empresa del portal y sus preregistros.',em_tab_e:'Empresas',em_tab_p:'Preregistros',em_new:'Crear empresa',em_q:'Buscar por nombre, CIF, contacto o email',pr_q:'Buscar por matrícula, empresa, referencia o evento',
 lv_verified:'Verificada',lv_semi:'Sin verificar',lv_blocked:'Bloqueada',lvs_all:'Todas',lvs_verified:'Verificadas',lvs_semi:'Sin verificar',lvs_blocked:'Bloqueadas',
 c_cif:'CIF / VAT',c_contact:'Contacto',c_vehs:'Vehículos',c_prereg:'Preregistros',c_rgpd:'RGPD',c_level:'Nivel',c_plan:'Previsto',c_unload:'Descarga',c_event:'Evento',c_expo:'Expositor',
 rgpd_ok:'Firmado',rgpd_no:'Sin firmar',a_portal:'Ver portal',a_promote:'Verificar empresa',a_block:'Bloquear empresa',a_unblock:'Desbloquear empresa',a_user:'Editar usuario',a_company:'Ver empresa',
 ps_preregistrado:'Preregistrado',ps_en_camino:'En camino',ps_en_recinto:'En recinto',pss_all:'Todos',pss_preregistrado:'Preregistrados',pss_en_camino:'En camino',pss_en_recinto:'En recinto',
 empty_em:'No hay empresas con estos filtros',empty_em_p:'Cambia el nivel o la búsqueda.',empty_pr:'No hay preregistros con estos filtros',empty_pr_p:'Cambia el evento, el estado o la búsqueda.',ev_all:'Todos los eventos',
 f_cif:'CIF / VAT',f_contact:'Persona de contacto',f_type:'Tipo',f_level:'Nivel',f_created:'Alta',f_rgpd:'Consentimiento RGPD',f_keep:'Conservar datos hasta',f_origin:'Origen',f_plan:'Previsto',f_unload:'Descarga',f_by2:'Creado',
 ty_transportista:'Transportista',ty_montador:'Montador',ty_expositor:'Expositor',no_vehs:'Sin vehículos registrados.',no_pre:'Sin preregistros.',dr_vehs:'Vehículos',dr_pre:'Preregistros'},
en:{cd_sub:'Driver directory with their usual vehicle and contact details.',cd_new:'New driver',cd_q:'Search by name, plate, company or phone',
 c_name:'Driver',c_veh:'Vehicle',c_tel:'Phone',c_lang:'Language',c_evs:'Events',c_visits:'Entries',n_cd:'{n} drivers',n_cd1:'1 driver',
 empty_cd:'No drivers yet',empty_cd_p:'Create one or import them from a table or an Excel file.',empty_q:'No results for this search',empty_q_p:'Try another plate, name or company.',clear_q:'Clear search',
 a_call:'Call',a_wa:'WhatsApp',a_mail:'Email',dr_contact:'Contact',dr_visits:'Latest entries',no_visits:'No entries recorded for this plate.',visits_n:'{n} entries',visits_1:'1 entry',
 f_born:'Date of birth',f_docexp:'Document expiry',f_country:'Country',f_manager:'Manager',f_mtel:'Manager phone',f_memail:'Manager email',f_hallh:'Usual hall',f_lang:'Language',f_evs:'Events',clean_cd:'Clear drivers',
 fl_sub:'Packaging vehicles between warehouse and venue.',fl_new:'New movement',fl_q:'Search by plate, driver, company or hall',
 ms_ALMACEN:'Warehouse',ms_SOT:'SOT',ms_FIRA:'Venue',ms_FINAL:'Done',nx_SOT:'Move to SOT',nx_FIRA:'Move to venue',nx_FINAL:'Complete',fl_all:'All',
 c_load:'Load',c_tacho:'Tachograph',sot_over:'+9 h',sot_over_n:'{n} over 9 h',sot_over_l:'More than 9 hours have passed since the tachograph time ({t}).',
 ago_h:'{n} h ago',ago_m:'{n} min ago',trip:'Trip {n}',set_st:'Status',dr_route:'Route',cur_st:'Now',
 empty_fl:'No movements yet',empty_fl_p:'Create one or import them from a table or an Excel file.',empty_flf:'No vehicles match these filters',empty_flf_p:'Change the status or the hall.',clean_fl:'Clear packaging',
 f_trip:'Trip',f_tacho:'Tachograph',f_last:'Last status change',f_load:'Load type',n_fl:'{n} vehicles',n_fl1:'1 vehicle',
 em_sub:'Company portal accounts and their pre-registrations.',em_tab_e:'Companies',em_tab_p:'Pre-registrations',em_new:'Create company',em_q:'Search by name, VAT number, contact or email',pr_q:'Search by plate, company, reference or event',
 lv_verified:'Verified',lv_semi:'Unverified',lv_blocked:'Blocked',lvs_all:'All',lvs_verified:'Verified',lvs_semi:'Unverified',lvs_blocked:'Blocked',
 c_cif:'VAT number',c_contact:'Contact',c_vehs:'Vehicles',c_prereg:'Pre-reg.',c_rgpd:'GDPR',c_level:'Level',c_plan:'Planned',c_unload:'Unloading',c_event:'Event',c_expo:'Exhibitor',
 rgpd_ok:'Signed',rgpd_no:'Not signed',a_portal:'View portal',a_promote:'Verify company',a_block:'Block company',a_unblock:'Unblock company',a_user:'Edit user',a_company:'View company',
 ps_preregistrado:'Pre-registered',ps_en_camino:'On the way',ps_en_recinto:'On site',pss_all:'All',pss_preregistrado:'Pre-registered',pss_en_camino:'On the way',pss_en_recinto:'On site',
 empty_em:'No companies match these filters',empty_em_p:'Change the level or the search.',empty_pr:'No pre-registrations match these filters',empty_pr_p:'Change the event, status or search.',ev_all:'All events',
 f_cif:'VAT number',f_contact:'Contact person',f_type:'Type',f_level:'Level',f_created:'Created',f_rgpd:'GDPR consent',f_keep:'Keep data until',f_origin:'Source',f_plan:'Planned',f_unload:'Unloading',f_by2:'Created',
 ty_transportista:'Carrier',ty_montador:'Stand builder',ty_expositor:'Exhibitor',no_vehs:'No vehicles registered.',no_pre:'No pre-registrations.',dr_vehs:'Vehicles',dr_pre:'Pre-registrations'},
de:{cd_sub:'Fahrerverzeichnis mit üblichem Fahrzeug und Kontaktdaten.',cd_new:'Neuer Fahrer',cd_q:'Nach Name, Kennzeichen, Firma oder Telefon suchen',
 c_name:'Fahrer',c_veh:'Fahrzeug',c_tel:'Telefon',c_lang:'Sprache',c_evs:'Veranstaltungen',c_visits:'Einfahrten',n_cd:'{n} Fahrer',n_cd1:'1 Fahrer',
 empty_cd:'Noch keine Fahrer',empty_cd_p:'Legen Sie einen an oder importieren Sie sie aus einer Tabelle oder Excel-Datei.',empty_q:'Keine Treffer für diese Suche',empty_q_p:'Versuchen Sie ein anderes Kennzeichen, einen Namen oder eine Firma.',clear_q:'Suche löschen',
 a_call:'Anrufen',a_wa:'WhatsApp',a_mail:'E-Mail',dr_contact:'Kontakt',dr_visits:'Letzte Einfahrten',no_visits:'Keine Einfahrten mit diesem Kennzeichen.',visits_n:'{n} Einfahrten',visits_1:'1 Einfahrt',
 f_born:'Geburtsdatum',f_docexp:'Ablauf des Dokuments',f_country:'Land',f_manager:'Verantwortlicher',f_mtel:'Telefon des Verantwortlichen',f_memail:'E-Mail des Verantwortlichen',f_hallh:'Übliche Halle',f_lang:'Sprache',f_evs:'Veranstaltungen',clean_cd:'Fahrer leeren',
 fl_sub:'Leergut-Fahrzeuge zwischen Lager und Messegelände.',fl_new:'Neue Bewegung',fl_q:'Nach Kennzeichen, Fahrer, Firma oder Halle suchen',
 ms_ALMACEN:'Lager',ms_SOT:'SOT',ms_FIRA:'Messe',ms_FINAL:'Fertig',nx_SOT:'Zu SOT',nx_FIRA:'Zur Messe',nx_FINAL:'Abschließen',fl_all:'Alle',
 c_load:'Ladung',c_tacho:'Tachograf',sot_over:'+9 Std.',sot_over_n:'{n} über 9 Std.',sot_over_l:'Seit der Tachografzeit ({t}) sind mehr als 9 Stunden vergangen.',
 ago_h:'vor {n} Std.',ago_m:'vor {n} Min.',trip:'Fahrt {n}',set_st:'Status',dr_route:'Ablauf',cur_st:'Jetzt',
 empty_fl:'Noch keine Bewegungen',empty_fl_p:'Legen Sie eine an oder importieren Sie sie aus einer Tabelle oder Excel-Datei.',empty_flf:'Keine Fahrzeuge für diese Filter',empty_flf_p:'Ändern Sie Status oder Halle.',clean_fl:'Leergut leeren',
 f_trip:'Fahrt',f_tacho:'Tachograf',f_last:'Letzte Statusänderung',f_load:'Ladungsart',n_fl:'{n} Fahrzeuge',n_fl1:'1 Fahrzeug',
 em_sub:'Firmenkonten im Portal und ihre Voranmeldungen.',em_tab_e:'Firmen',em_tab_p:'Voranmeldungen',em_new:'Firma anlegen',em_q:'Nach Name, USt-IdNr., Kontakt oder E-Mail suchen',pr_q:'Nach Kennzeichen, Firma, Referenz oder Veranstaltung suchen',
 lv_verified:'Verifiziert',lv_semi:'Nicht verifiziert',lv_blocked:'Gesperrt',lvs_all:'Alle',lvs_verified:'Verifiziert',lvs_semi:'Nicht verifiziert',lvs_blocked:'Gesperrt',
 c_cif:'USt-IdNr.',c_contact:'Kontakt',c_vehs:'Fahrzeuge',c_prereg:'Voranm.',c_rgpd:'DSGVO',c_level:'Stufe',c_plan:'Geplant',c_unload:'Entladung',c_event:'Veranstaltung',c_expo:'Aussteller',
 rgpd_ok:'Unterzeichnet',rgpd_no:'Nicht unterzeichnet',a_portal:'Portal ansehen',a_promote:'Firma verifizieren',a_block:'Firma sperren',a_unblock:'Firma entsperren',a_user:'Benutzer bearbeiten',a_company:'Firma ansehen',
 ps_preregistrado:'Vorangemeldet',ps_en_camino:'Unterwegs',ps_en_recinto:'Auf dem Gelände',pss_all:'Alle',pss_preregistrado:'Vorangemeldet',pss_en_camino:'Unterwegs',pss_en_recinto:'Auf dem Gelände',
 empty_em:'Keine Firmen für diese Filter',empty_em_p:'Ändern Sie Stufe oder Suche.',empty_pr:'Keine Voranmeldungen für diese Filter',empty_pr_p:'Ändern Sie Veranstaltung, Status oder Suche.',ev_all:'Alle Veranstaltungen',
 f_cif:'USt-IdNr.',f_contact:'Ansprechpartner',f_type:'Art',f_level:'Stufe',f_created:'Angelegt',f_rgpd:'DSGVO-Einwilligung',f_keep:'Daten aufbewahren bis',f_origin:'Quelle',f_plan:'Geplant',f_unload:'Entladung',f_by2:'Erstellt',
 ty_transportista:'Spediteur',ty_montador:'Messebauer',ty_expositor:'Aussteller',no_vehs:'Keine Fahrzeuge registriert.',no_pre:'Keine Voranmeldungen.',dr_vehs:'Fahrzeuge',dr_pre:'Voranmeldungen'}
});

/* ── utilidades comunes ── */
function name(o){return [o.nombre,o.apellido].filter(Boolean).join(' ');}
function telTxt(p,n){n=String(n||'').trim();return n?((p&&n.charAt(0)!=='+'?p+' ':'')+n):'';}
function telHref(p,n){return 'tel:'+((n&&String(n).trim().charAt(0)==='+')?'':(p||''))+String(n||'').replace(/[^\d+]/g,'');}
function waHref(p,n){return 'https://wa.me/'+(((n&&String(n).trim().charAt(0)==='+')?'':(p||''))+String(n||'')).replace(/\D/g,'');}
function linkBtn(href,ico,lbl,ext){return '<a class="fx-btn" href="'+E(href)+'"'+(ext?' target="_blank" rel="noopener"':'')+'>'+ico+'<span>'+E(lbl)+'</span></a>';}
function contactActs(p,n,mail){var h='';if(n){h+=linkBtn(telHref(p,n),I.phone,t('a_call'))+linkBtn(waHref(p,n),I.msg,t('a_wa'),1);}if(mail)h+=linkBtn('mailto:'+mail,I.mail,t('a_mail'));return h?'<div class="fx-dr-acts">'+h+'</div>':'';}
function cnt(n,k1,kn){return n===1?t(k1):t(kn,{n:n});}
function tsDate(s){if(!s)return null;var d=new Date(String(s).replace(' ','T'));return isNaN(d.getTime())?null:d;}
function ago(s){var d=tsDate(s);if(!d)return '';var m=Math.round((Date.now()-d.getTime())/60000);if(m<0)return '';if(m<60)return t('ago_m',{n:m});return t('ago_h',{n:Math.floor(m/60)});}
function emptyQ(key){return U.empty(t('empty_q'),t('empty_q_p'),U.btn('qclr',I.x,t('clear_q'),'',' data-k="'+key+'"'));}
function subMenu(act,el,extra){var h=U.mi(act,I.hist,t('edits'),'',' data-v="historial"')+U.mi(act,I.cols,t('columns'),'',' data-v="columnas"');if(can('canCampos'))h+=U.mi(act,I.sliders,t('fields'),'',' data-v="campos"');if(extra)h+=extra;FX.menu(el,h,true);}
function importMenu(el,pre,tpl){FX.menu(el,U.mi(pre+'.paste',I.paste,t('import_paste'),'','',t('import_paste_s'))+U.mi(pre+'.xlsx',I.sheet,t('import_xlsx'))+(tpl?U.mi(pre+'.tpl',I.file,t('import_tpl')):''),true);}
function xlsx(id){if(!can('canImport')&&FX.fn('canImport')){call('toast',call('tr','sinPermiso'),'var(--red)');return;}var x=document.getElementById(id);if(x)x.click();}
function headActs(pre,newKey,expFn){var a='<button type="button" class="fx-btn" data-fx="'+pre+'.import" aria-haspopup="menu">'+I.up+'<span>'+t('import')+'</span></button>';if(can('canExport'))a+=U.btn(pre+'.export',I.down,t('export'));a+=U.ibtn(pre+'.opts',I.more,t('more'),'',' aria-haspopup="menu"');if(can('canAdd'))a+=U.btn(pre+'.new',I.plus,t(newKey),'pri');return a;}

/* ════════════ CONDUCTORES ════════════ */
function CF(){try{return cF;}catch(e){return null;}}
function cdSub(){return window._condSub||'lista';}
function cdRec(id){var D=FX.db()||{};return (D.conductores||[]).find(function(x){return x.id===id;});}
function visitMap(){var D=FX.db()||{},m={};(D.ingresos||[]).concat(D.ingresos2||[]).forEach(function(i){if(i&&i.matricula)m[i.matricula]=(m[i.matricula]||0)+1;});return m;}
function cdData(){
  var D=FX.db()||{},f=CF()||{},q=(f.q||'').toLowerCase(),all=D.conductores||[];
  var items=all.filter(function(c){return !q||FX.hay(c,['nombre','apellido','empresa','matricula','remolque','telefono','email','tipoVehiculo','hall','idioma']).indexOf(q)>=0;});
  var s=FX.sortOf('conductores','nombre','asc');items=FX.sortArr(items,s.col,s.dir);
  return {items:items,col:s.col,dir:s.dir,total:all.length,q:f.q||''};
}
function cdActs(c){var x=' data-id="'+E(c.id)+'"',h='';if(can('canEdit'))h+=U.ibtn('cd.edit',I.edit,t('a_edit'),'ghost sm',x);h+=U.ibtn('cd.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"');return U.acts(h);}
function cdHead(d){var a='cd.sort',w=FX.ui.wide();
  return U.th(a,'nombre',t('c_name'),d)+U.th(a,'matricula',t('c_veh'),d)
    +(FX.colOn('conductores','empresa')?U.th(a,'empresa',t('c_comp'),d):'')
    +(FX.colOn('conductores','telefono')?U.th(a,null,t('c_tel'),d):'')
    +(FX.colOn('conductores','hall')?U.th(a,'hall',t('c_hall'),d):'')
    +(FX.colOn('conductores','idioma')?U.th(a,null,t('c_lang'),d):'')
    +(w&&FX.colOn('conductores','eventos')?U.th(a,null,t('c_evs'),d):'')
    +(FX.colOn('conductores','ingresos')?U.th(a,null,t('c_visits'),d,'c-n'):'')
    +'<th><span class="fx-sr">'+t('more')+'</span></th>';}
function cdRow(c,vm,isNew){
  var w=FX.ui.wide(),tv=FX.tv(c.tipoVehiculo),h='<tr class="'+(isNew?'fx-new':'')+'" data-fxrow="'+E(c.id)+'" data-src="conductores">';
  h+='<td class="c-who"><span class="fx-who">'+U.av(name(c))+'<span><span class="fx-strong fx-ell">'+E(name(c)||'–')+'</span>'+(tv?U.meta(E(tv)):'')+'</span></span></td>';
  h+='<td class="c-plate">'+(c.matricula?U.plate(c.matricula,FX.plateCC(c.pais)):U.dash)+(c.remolque?'<br>'+U.plate(c.remolque,'','sm'):'')+'</td>';
  if(FX.colOn('conductores','empresa'))h+='<td class="c-txt"><span class="fx-ell">'+(c.empresa?E(c.empresa):U.dash)+'</span></td>';
  if(FX.colOn('conductores','telefono'))h+='<td class="c-tel fx-num">'+(c.telefono?E(telTxt(c.telPais,c.telefono)):U.dash)+'</td>';
  if(FX.colOn('conductores','hall'))h+='<td class="c-hall">'+(c.hall?U.hall(c.hall):U.dash)+'</td>';
  if(FX.colOn('conductores','idioma'))h+='<td class="c-lang">'+(c.idioma?'<span class="fx-lang">'+E(c.idioma)+'</span>'+(w?'<span>'+E(FX.langName(c.idioma))+'</span>':''):U.dash)+'</td>';
  if(w&&FX.colOn('conductores','eventos'))h+='<td class="c-txt"><span class="fx-meta" style="margin:0">'+E((c.eventosNombres||[]).join(', ')||'–')+'</span></td>';
  if(FX.colOn('conductores','ingresos'))h+='<td class="c-n">'+(vm[c.matricula]||0)+'</td>';
  return h+'<td class="c-act">'+cdActs(c)+'</td></tr>';
}
function cdLi(c,vm,isNew){
  var meta=[],tv=FX.tv(c.tipoVehiculo),n=vm[c.matricula]||0;
  if(c.empresa)meta.push('<span class="fx-ell">'+E(c.empresa)+'</span>');
  if(c.telefono)meta.push('<span class="fx-num">'+E(telTxt(c.telPais,c.telefono))+'</span>');
  if(c.hall)meta.push(U.hall(c.hall));
  if(c.idioma)meta.push('<span class="fx-lang">'+E(c.idioma)+'</span>');
  return U.li({id:c.id,src:'conductores',cls:isNew?'fx-new':'',pos:U.av(name(c)),plate:(c.matricula?U.plate(c.matricula,FX.plateCC(c.pais)):'')+(c.remolque?U.plate(c.remolque,'','sm'):''),title:E(name(c)||'–')+(tv?' <small class="fx-lbl" style="font-size:13.5px">'+E(tv)+'</small>':''),meta:meta,st:U.st('idle',cnt(n,'visits_1','visits_n')),act:cdActs(c)});
}
function cdRender(){
  var d=cdData(),vm=visitMap();
  var h='<div class="fx-page" data-view="conductores">'+U.ph(t('tab_conductores'),t('cd_sub'),headActs('cd','cd_new'));
  h+='<div class="fx-bar">'+U.search('conductores',d.q,t('cd_q'))+'<span class="fx-lbl fx-num">'+cnt(d.items.length,'n_cd1','n_cd')+'</span></div>';
  var pg=U.page('conductores',[d.q,d.col,d.dir].join('|'),d.items);
  if(!d.total)h+=U.empty(t('empty_cd'),t('empty_cd_p'),can('canAdd')?U.btn('cd.new',I.plus,t('cd_new'),'pri'):'');
  else if(!d.items.length)h+=emptyQ('conductores');
  else if(FX.S.lay!=='table')h+=U.list(pg.list.map(function(c){return cdLi(c,vm,pg.isNew(c.id));}).join(''));
  else h+=U.table(cdHead(d),pg.list.map(function(c){return cdRow(c,vm,pg.isNew(c.id));}).join(''));
  h+=U.foot('conductores',pg.list.length,d.items.length);
  return h+'</div>';
}
FX.view('conductores',{
  when:function(){return cdSub()==='lista';},
  render:cdRender,
  back:function(){window._condSub='lista';call('_saveSubTab','conductores','lista');call('renderConductores');},
  reset:function(){if(cdSub()!=='lista'){window._condSub='lista';window._subRestored_conductores=true;call('_saveSubTab','conductores','lista');}},
  wrap:['renderConductores']
});
FX.q('conductores',function(v){var f=CF();if(!f)return;f.q=v;call('renderConductores');});
FX.row('conductores',function(id){openCdDrawer(id);});
FX.act('cd.new',function(){FX.closeMenu();call('openCondModal');});
FX.act('cd.edit',function(el,id){FX.closeMenu();FX.drawer.close();var c=cdRec(id);if(c)call('openCondModal',c);});
FX.act('cd.del',function(el,id){FX.closeMenu();FX.drawer.close();call('askDelCond',id);});
FX.act('cd.view',function(el,id){FX.closeMenu();openCdDrawer(id);});
FX.act('cd.more',function(el,id){var x=' data-id="'+E(id)+'"',h=U.mi('cd.view',I.eye,t('a_view'),'',x);if(can('canEdit'))h+=U.mi('cd.edit',I.edit,t('a_edit'),'',x);if(can('canDel'))h+='<hr>'+U.mi('cd.del',I.trash,t('a_del'),'dng',x);FX.menu(el,h,true);});
FX.act('cd.export',function(){call('exportConductores');});
FX.act('cd.import',function(el){importMenu(el,'cd',true);});
FX.act('cd.paste',function(){FX.closeMenu();call('openImportRef','conductores');});
FX.act('cd.xlsx',function(){FX.closeMenu();xlsx('xlsxCond');});
FX.act('cd.tpl',function(){FX.closeMenu();call('downloadPlantillaCond');});
FX.act('cd.opts',function(el){subMenu('cd.sub',el,can('canClean')?'<hr>'+U.mi('cd.clean',I.trash,t('clean_cd'),'dng'):'');});
FX.act('cd.sub',function(el,id,v){FX.closeMenu();window._condSub=v;call('_saveSubTab','conductores',v);call('renderConductores');FX.scrollTop();});
FX.act('cd.clean',function(){FX.closeMenu();if(!window.confirm(t('clean_cd')+'?'))return;call('cleanTab','conductores');});
FX.act('cd.sort',function(el){call('setSort','conductores',el.getAttribute('data-col'));});
function lastVisits(mat,n){if(!mat)return [];var D=FX.db()||{};return (D.ingresos2||[]).map(function(i){return {i:i,src:'ingresos2'};}).concat((D.ingresos||[]).map(function(i){return {i:i,src:'ingresos'};})).filter(function(x){return x.i.matricula===mat;}).sort(function(a,b){return String(b.i.entrada||'').localeCompare(String(a.i.entrada||''));}).slice(0,n);}
function visitList(mat){
  var v=lastVisits(mat,6);if(!v.length)return '<p class="fx-sub" style="margin:0">'+t('no_visits')+'</p>';
  return '<ul class="fx-vl">'+v.map(function(x){var i=x.i,e=FX.parseTs(i.entrada);return '<li><span class="fx-grow"><b class="fx-strong">'+E(e?FX.dayLbl(e.ymd)+(e.hm?', '+e.hm:''):'–')+'</b><small>'+E([t(x.src==='ingresos'?'tab_ingresos':'tab_ingresos2'),i.eventoNombre].filter(Boolean).join(' · '))+'</small></span>'+U.halls(i.halls||[i.hall])+(i.salida?U.st('out',t('st_out')):U.st('in',t('s_in')))+'</li>';}).join('')+'</ul>';
}
function openCdDrawer(id){
  FX.drawer.open(function(){
    var c=cdRec(id);if(!c)return null;
    var x=' data-id="'+E(c.id)+'"',n=visitMap()[c.matricula]||0;
    var h='<div class="fx-dr-h"><div class="fx-dr-id"><span class="fx-dr-who">'+U.av(name(c),'lg')+'<span><b>'+E(name(c)||'–')+'</b>'+(c.empresa?'<small>'+E(c.empresa)+'</small>':'')+'</span></span></div>'+U.ibtn('drClose',I.x,t('close'),'ghost')+'</div>';
    h+='<div class="fx-dr-b"><div class="fx-dr-st">'+(c.matricula?U.plate(c.matricula,FX.plateCC(c.pais),'lg'):'')+(c.remolque?U.plate(c.remolque,'','sm'):'')+(c.hall?U.hall(c.hall):'')+'</div>';
    h+=contactActs(c.telPais,c.telefono,c.email);
    h+='<h3>'+t('dr_data')+'</h3>'+U.dl([[t('f_comp'),c.empresa],[t('f_tel'),telTxt(c.telPais,c.telefono)],[t('f_mail'),c.email],[t('f_vtype'),FX.tv(c.tipoVehiculo)],[t('f_hallh'),c.hall],[t('f_lang'),FX.langName(c.idioma)],[t('f_country'),c.pais],[t('f_pass'),c.pasaporte],[t('f_born'),c.fechaNacimiento],[t('f_docexp'),c.fechaExpiracion],[t('f_evs'),(c.eventosNombres||[]).join(', '),1],[t('f_manager'),c.encargado],[t('f_mtel'),telTxt(c.encargadoTelPais,c.encargadoTel)],[t('f_memail'),c.encargadoEmail],[t('f_notes'),c.notas,1]]);
    h+='<h3>'+t('dr_visits')+'<small>'+E(cnt(n,'visits_1','visits_n'))+'</small></h3>'+visitList(c.matricula);
    h+='</div>';
    var f='';if(can('canEdit'))f+=U.btn('cd.edit',I.edit,t('a_edit'),'',x);if(can('canDel'))f+=U.btn('cd.del',I.trash,t('a_del'),'dng',x);
    return h+(f?'<div class="fx-dr-f">'+f+'</div>':'');
  });
}

/* ════════════ EMBALAJE (movimientos) ════════════ */
var MS=['ALMACEN','SOT','FIRA','FINAL'],MS_CLS={ALMACEN:'idle',SOT:'pend',FIRA:'in',FINAL:'out'};
function FF(){try{return fF;}catch(e){return null;}}
function flSub(){return window._flotaSub||'lista';}
function mvRec(id){var D=FX.db()||{};return (D.movimientos||[]).find(function(x){return x.id===id;});}
function msLbl(s){return MS.indexOf(s)>=0?t('ms_'+s):(s||'–');}
function nextMs(s){var i=MS.indexOf(s);return i>=0&&i<MS.length-1?MS[i+1]:null;}
function sotOver(m){if(m.status!=='SOT')return false;var d=tsDate(m.tacografoHora);return !!d&&d.getTime()+9*3600000<=Date.now();}
function mvBadge(m){if(sotOver(m))return U.st('blk',t('ms_SOT')+' · '+t('sot_over'));return U.st(MS_CLS[m.status]||'idle',msLbl(m.status));}
function mvCls(m){return sotOver(m)?'blk':m.status==='FIRA'?'in':m.status==='SOT'?'pend':'';}
function tag(c){return c?'<span class="fx-tag '+E(c)+'">'+E(c)+'</span>':'';}
function tacho(m){var p=FX.parseTs(m.tacografoHora);return p?(p.ymd===FX.todayStr()?p.hm:FX.dayLbl(p.ymd)+', '+p.hm):'';}
function flData(){
  var D=FX.db()||{},f=FF()||{},q=(f.q||'').toLowerCase(),all=D.movimientos||[];
  var base=all.filter(function(m){return !q||FX.hay(m,['matricula','nombre','empresa','hall','remolque','status']).indexOf(q)>=0;});
  if(f.hall)base=base.filter(function(m){return m.hall===f.hall;});
  var c={all:base.length,over:0};MS.forEach(function(s){c[s]=0;});
  base.forEach(function(m){if(c[m.status]!=null)c[m.status]++;if(sotOver(m))c.over++;});
  var items=f.status?base.filter(function(m){return m.status===f.status;}):base;
  var s=FX.sortOf('flota','posicion','asc');
  if(s.col)items=FX.sortArr(items,s.col,s.dir);else items=items.slice().sort(function(a,b){return (a.posicion||999)-(b.posicion||999);});
  return {items:items,cnt:c,col:s.col,dir:s.dir,total:all.length,q:f.q||'',st:f.status||'',hall:f.hall||''};
}
function mvActs(m){
  var x=' data-id="'+E(m.id)+'"',h='',nx=nextMs(m.status);
  if(nx&&can('canStatus'))h+=U.btn('fl.set',nx==='FINAL'?I.check:I.exit,t('nx_'+nx),(nx==='FIRA'?'go ':'')+'sm',x+' data-v="'+nx+'"');
  h+=U.ibtn('fl.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"');
  return U.acts(h);
}
function flHead(d){var a='fl.sort';
  return U.th(a,'posicion','#',d)+U.th(a,'matricula',t('c_plate'),d)
    +((FX.colOn('flota','nombre')||FX.colOn('flota','empresa'))?U.th(a,FX.colOn('flota','nombre')?'nombre':'empresa',FX.colOn('flota','nombre')?t('c_driver'):t('c_comp'),d):'')
    +(FX.colOn('flota','hall')?U.th(a,'hall',t('c_hall'),d):'')
    +(FX.colOn('flota','tipoCarga')?U.th(a,'tipoCarga',t('c_load'),d):'')
    +U.th(a,'status',t('c_state'),d)
    +(FX.colOn('flota','tacografoHora')?U.th(a,'tacografoHora',t('c_tacho'),d):'')
    +'<th><span class="fx-sr">'+t('more')+'</span></th>';}
function mvRow(m,isNew){
  var on_=FX.colOn('flota','nombre'),oe=FX.colOn('flota','empresa');
  var h='<tr class="'+mvCls(m)+(isNew?' fx-new':'')+'" data-fxrow="'+E(m.id)+'" data-src="flota">';
  h+='<td class="c-pos">'+E(m.posicion||'–')+'</td>';
  h+='<td class="c-plate">'+U.plate(m.matricula,'')+(m.remolque&&FX.colOn('flota','remolque')?'<br>'+U.plate(m.remolque,'','sm'):'')+'</td>';
  if(on_||oe){var ttl=on_?name(m):m.empresa;h+='<td class="c-txt"><span class="fx-strong fx-ell">'+(ttl?E(ttl):U.dash)+'</span>'+(on_&&oe&&m.empresa?U.meta(E(m.empresa)):'')+'</td>';}
  if(FX.colOn('flota','hall'))h+='<td class="c-hall">'+(m.hall?U.hall(m.hall):U.dash)+'</td>';
  if(FX.colOn('flota','tipoCarga'))h+='<td>'+(m.tipoCarga?tag(m.tipoCarga):U.dash)+'</td>';
  h+='<td class="c-st">'+mvBadge(m)+((+m.numVuelta||0)>1?U.meta(E(t('trip',{n:m.numVuelta}))):'')+'</td>';
  if(FX.colOn('flota','tacografoHora'))h+='<td class="c-time">'+(m.tacografoHora?'<span class="fx-time" style="font-size:19px">'+E(tacho(m))+'</span>'+U.meta(E(ago(m.tacografoHora)),'fx-num'):U.dash)+'</td>';
  return h+'<td class="c-act">'+mvActs(m)+'</td></tr>';
}
function mvLi(m,isNew){
  var meta=[];
  if(m.empresa&&(m.nombre||m.apellido))meta.push('<span class="fx-ell">'+E(m.empresa)+'</span>');
  if(m.hall)meta.push(U.hall(m.hall));
  if(m.tipoCarga)meta.push(tag(m.tipoCarga));
  if(m.tacografoHora)meta.push('<span class="fx-num">'+E(t('c_tacho')+' '+tacho(m))+'</span>');
  return U.li({id:m.id,src:'flota',cls:mvCls(m)+(isNew?' fx-new':''),pos:E(m.posicion||'–'),plate:U.plate(m.matricula,'')+(m.remolque?U.plate(m.remolque,'','sm'):''),title:E(name(m)||m.empresa||'–'),meta:meta,st:mvBadge(m),act:mvActs(m)});
}
function flow(d){
  var h='<div class="fx-flow" role="group" aria-label="'+E(t('c_state'))+'">';
  h+='<button type="button" class="fx-fl all'+(!d.st?' on':'')+'" data-fx="fl.st" data-v="" aria-pressed="'+(!d.st)+'"><span>'+t('fl_all')+'</span><b>'+d.cnt.all+'</b></button>';
  MS.forEach(function(s){var on_=d.st===s;h+='<button type="button" class="fx-fl stg s-'+s+(on_?' on':'')+'" data-fx="fl.st" data-v="'+s+'" aria-pressed="'+on_+'"><span>'+t('ms_'+s)+'</span><b>'+d.cnt[s]+'</b>'+(s==='SOT'&&d.cnt.over?'<small>'+E(t('sot_over_n',{n:d.cnt.over}))+'</small>':'')+'</button>';});
  return h+'</div>';
}
function flRender(){
  var d=flData();
  var h='<div class="fx-page" data-view="flota">'+U.ph(t('tab_flota'),t('fl_sub'),headActs('fl','fl_new'));
  if(d.total)h+=flow(d);
  h+='<div class="fx-bar">'+U.search('flota',d.q,t('fl_q'))+U.tiles('fl.hall',FX.halls(),d.hall)+'</div>';
  var pg=U.page('flota',[d.q,d.st,d.hall,d.col,d.dir].join('|'),d.items);
  if(!d.total)h+=U.empty(t('empty_fl'),t('empty_fl_p'),can('canAdd')?U.btn('fl.new',I.plus,t('fl_new'),'pri'):'');
  else if(!d.items.length)h+=(d.q?emptyQ('flota'):U.empty(t('empty_flf'),t('empty_flf_p'),U.btn('fl.reset',I.x,t('clear'))));
  else if(FX.S.lay!=='table')h+=U.list(pg.list.map(function(m){return mvLi(m,pg.isNew(m.id));}).join(''));
  else h+=U.table(flHead(d),pg.list.map(function(m){return mvRow(m,pg.isNew(m.id));}).join(''));
  h+=U.foot('flota',pg.list.length,d.items.length);
  return h+'</div>';
}
FX.view('flota',{
  when:function(){return flSub()==='lista';},
  render:flRender,
  back:function(){window._flotaSub='lista';call('_saveSubTab','flota','lista');call('renderFlota');},
  reset:function(){if(flSub()!=='lista'){window._flotaSub='lista';window._subRestored_flota=true;call('_saveSubTab','flota','lista');}},
  wrap:['renderFlota']
});
FX.q('flota',function(v){var f=FF();if(!f)return;f.q=v;call('renderFlota');});
FX.row('flota',function(id){openMvDrawer(id);});
FX.act('fl.new',function(){FX.closeMenu();call('openMovModal');});
FX.act('fl.edit',function(el,id){FX.closeMenu();FX.drawer.close();var m=mvRec(id);if(m)call('openMovModal',m);});
FX.act('fl.del',function(el,id){FX.closeMenu();FX.drawer.close();call('askDelMov',id);});
FX.act('fl.view',function(el,id){FX.closeMenu();openMvDrawer(id);});
FX.act('fl.set',function(el,id,v){FX.closeMenu();if(!can('canStatus')||MS.indexOf(v)<0)return;var m=mvRec(id);if(!m||m.status===v)return;call('cambiarEstMov',id,v);});
FX.act('fl.more',function(el,id){var m=mvRec(id);if(!m)return;var x=' data-id="'+E(id)+'"',h=U.mi('fl.view',I.eye,t('a_view'),'',x);
  if(can('canStatus')){h+='<hr><div class="lbl">'+t('set_st')+'</div>';MS.forEach(function(s){h+=U.mi('fl.set',m.status===s?I.check:null,t('ms_'+s),m.status===s?'on':'',x+' data-v="'+s+'"');});h+='<hr>';}
  if(can('canEdit'))h+=U.mi('fl.edit',I.edit,t('a_edit'),'',x);if(can('canDel'))h+=U.mi('fl.del',I.trash,t('a_del'),'dng',x);FX.menu(el,h,true);});
FX.act('fl.st',function(el,id,v){var f=FF();if(!f)return;f.status=(f.status===v?'':v)||'';call('renderFlota');});
FX.act('fl.hall',function(el,id,v){var f=FF();if(!f)return;f.hall=v||'';call('renderFlota');});
FX.act('fl.reset',function(){var f=FF();if(!f)return;f.status='';f.hall='';call('renderFlota');});
FX.act('fl.sort',function(el){call('setSort','flota',el.getAttribute('data-col'));});
FX.act('fl.export',function(){call('exportFlota');});
FX.act('fl.import',function(el){importMenu(el,'fl',true);});
FX.act('fl.paste',function(){FX.closeMenu();call('openImportRef','flota');});
FX.act('fl.xlsx',function(){FX.closeMenu();xlsx('xlsxFlota');});
FX.act('fl.tpl',function(){FX.closeMenu();call('dlTemplateFlota');});
FX.act('fl.opts',function(el){subMenu('fl.sub',el,can('canClean')?'<hr>'+U.mi('fl.clean',I.trash,t('clean_fl'),'dng'):'');});
FX.act('fl.sub',function(el,id,v){FX.closeMenu();window._flotaSub=v;call('_saveSubTab','flota',v);call('renderFlota');FX.scrollTop();});
FX.act('fl.clean',function(){FX.closeMenu();if(!window.confirm(t('clean_fl')+'?'))return;call('cleanTab','movimientos');});
function openMvDrawer(id){
  FX.drawer.open(function(){
    var m=mvRec(id);if(!m)return null;
    var x=' data-id="'+E(m.id)+'"',ci=MS.indexOf(m.status),nx=nextMs(m.status),over=sotOver(m);
    var h='<div class="fx-dr-h"><div class="fx-dr-id"><span class="fx-dr-pos"><small>'+t('dr_pos')+'</small><b>'+E(m.posicion||'–')+'</b></span><span class="fx-dr-plates">'+U.plate(m.matricula,'','lg')+(m.remolque?U.plate(m.remolque,'','sm'):'')+'</span></div>'+U.ibtn('drClose',I.x,t('close'),'ghost')+'</div>';
    h+='<div class="fx-dr-b"><div class="fx-dr-st">'+mvBadge(m)+(m.hall?U.hall(m.hall):'')+(m.tipoCarga?tag(m.tipoCarga):'')+'</div>';
    if(over)h+=U.note('blk',I.alert,E(t('sot_over_l',{t:tacho(m)})));
    if(can('canStatus'))h+='<h3>'+t('set_st')+'</h3>'+U.seg('fl.set',MS.map(function(s){return {v:s,lbl:t('ms_'+s)};}),m.status,t('set_st'),x);
    h+='<h3>'+t('dr_route')+'</h3>'+U.tl(MS.map(function(s,i){return {l:t('ms_'+s),v:i<ci?'✓':i===ci?t('cur_st'):'',p:' '};}));
    h+='<h3>'+t('dr_data')+'</h3>'+U.dl([[t('f_name'),name(m)],[t('f_comp'),m.empresa],[t('f_load'),m.tipoCarga],[t('f_trip'),m.numVuelta],[t('f_tacho'),m.tacografoHora?FX.tsLbl(m.tacografoHora,'')+(ago(m.tacografoHora)?' · '+ago(m.tacografoHora):''):''],[t('f_last'),m.lastStatusTs?FX.tsLbl(m.lastStatusTs,''):''],[t('f_notes'),m.notas,1]]);
    h+='</div>';
    var f='';
    if(nx&&can('canStatus'))f+=U.btn('fl.set',nx==='FINAL'?I.check:I.exit,t('nx_'+nx),'pri',x+' data-v="'+nx+'"');
    if(can('canEdit'))f+=U.btn('fl.edit',I.edit,t('a_edit'),'',x);
    if(can('canDel'))f+=U.btn('fl.del',I.trash,t('a_del'),'dng',x);
    return h+(f?'<div class="fx-dr-f">'+f+'</div>':'');
  });
}

/* ════════════ EMPRESAS (solo SuperAdmin) ════════════ */
var PS=['preregistrado','en_camino','en_recinto'],PS_CLS={preregistrado:'idle',en_camino:'pend',en_recinto:'in'},PRS={st:''};
var LV=['verified','semi','blocked'],LV_CLS={verified:'in',semi:'pend',blocked:'blk'};
function emSub(){return window._empSub==='preregistros'?'preregistros':'empresas';}
function emRec(id){var D=FX.db()||{};return (D.empresas||[]).find(function(x){return x.id===id;});}
function prRec(id){var D=FX.db()||{};return (D.preregistros||[]).find(function(x){return x.id===id;});}
function consent(id){var D=FX.db()||{};return (D.consentimientos||[]).find(function(c){return c.empresaId===id;});}
function lvBadge(e){var l=LV.indexOf(e.nivel)>=0?e.nivel:'semi';return U.st(LV_CLS[l],t('lv_'+l));}
function tyLbl(v){return v?(t('ty_'+v)!=='ty_'+v?t('ty_'+v):v):'';}
function psBadge(p){var s=p.estado;return PS.indexOf(s)>=0?U.st(PS_CLS[s],t('ps_'+s)):U.st('out',s?String(s).charAt(0).toUpperCase()+String(s).slice(1).replace(/_/g,' '):'–');}
function evName(id){var D=FX.db()||{},e=(D.eventos||[]).find(function(x){return x.id===id;});return e?e.nombre:'';}
function emData(){
  var D=FX.db()||{},emps=D.empresas||[],q=String(window._empSearch||'').toLowerCase(),lv=window._empFiltNivel||'';
  var base=emps.filter(function(e){return !q||((e.nombre||'')+' '+(e.cif||'')+' '+(e.email||'')+' '+(e.contacto||'')+(e.tel||'')).toLowerCase().indexOf(q)>=0;});
  var c={all:base.length};LV.forEach(function(l){c[l]=base.filter(function(e){return e.nivel===l;}).length;});
  var items=lv?base.filter(function(e){return e.nivel===lv;}):base;
  return {items:items,cnt:c,lv:lv,total:emps.length,q:window._empSearch||''};
}
function prData(){
  var D=FX.db()||{},pres=D.preregistros||[],q=String(window._empSearch||'').toLowerCase(),ev=window._empFiltEvento||'';
  var base=pres.filter(function(p){if(ev&&p.eventoId!==ev)return false;if(q){var s=((p.matricula||'')+' '+(p.empresa||'')+' '+(p.empresaNombre||'')+' '+(p.ref||'')+' '+(p.eventoNombre||'')+' '+(p.nombre||'')+' '+(p.expositor||'')+' '+(p.stand||'')+' '+(p.hall||'')).toLowerCase();if(s.indexOf(q)<0)return false;}return true;});
  var c={all:base.length};PS.forEach(function(s){c[s]=base.filter(function(p){return p.estado===s;}).length;});
  var items=(PRS.st?base.filter(function(p){return p.estado===PRS.st;}):base).slice().sort(function(a,b){return String(b.creadoTs||'').localeCompare(String(a.creadoTs||''));});
  return {items:items,cnt:c,ev:ev,total:pres.length,q:window._empSearch||''};
}
function emActs(e){var x=' data-id="'+E(e.id)+'"';return U.acts(U.btn('em.portal',I.eye,t('a_portal'),'ghost sm',x)+U.ibtn('em.more',I.more,t('more'),'ghost sm',x+' aria-haspopup="menu"'));}
function emCounts(){var D=FX.db()||{},m={};(D.preregistros||[]).forEach(function(p){if(p.empresaId)m[p.empresaId]=(m[p.empresaId]||0)+1;});return m;}
function emRow(e,pc){
  var con=consent(e.id),w=FX.ui.wide();
  var h='<tr class="'+(e.nivel==='blocked'?'blk':'')+'" data-fxrow="'+E(e.id)+'" data-src="empresas">';
  h+='<td class="c-who"><span class="fx-who">'+U.av(e.nombre,'sq')+'<span><span class="fx-strong fx-ell">'+E(e.nombre||'–')+'</span>'+U.meta(E([tyLbl(e.tipo),e.cif].filter(Boolean).join(' · ')))+'</span></span></td>';
  h+='<td class="c-txt"><span class="fx-ell">'+(e.contacto?E(e.contacto):U.dash)+'</span>'+(e.email?U.meta(E(e.email)):'')+'</td>';
  if(w)h+='<td class="c-tel fx-num">'+(e.tel?E(e.tel):U.dash)+'</td>';
  h+='<td class="c-n">'+(e.vehiculos||[]).length+'</td><td class="c-n">'+(pc[e.id]||0)+'</td>';
  h+='<td class="c-st">'+(con?U.st('in',t('rgpd_ok')):U.st('pend',t('rgpd_no')))+'</td>';
  h+='<td class="c-st">'+lvBadge(e)+'</td>';
  return h+'<td class="c-act">'+emActs(e)+'</td></tr>';
}
function emLi(e,pc){
  var con=consent(e.id),meta=[];
  if(e.contacto)meta.push('<span class="fx-ell">'+E(e.contacto)+'</span>');
  if(e.email)meta.push('<span class="fx-ell">'+E(e.email)+'</span>');
  meta.push('<span class="fx-num">'+E(t('c_vehs'))+' '+(e.vehiculos||[]).length+' · '+E(t('c_prereg'))+' '+(pc[e.id]||0)+'</span>');
  meta.push(con?U.st('in',t('rgpd_ok')):U.st('pend',t('rgpd_no')));
  return U.li({id:e.id,src:'empresas',cls:e.nivel==='blocked'?'blk':'',pos:U.av(e.nombre,'sq'),plate:'',title:E(e.nombre||'–'),meta:meta,st:lvBadge(e),act:emActs(e)});
}
function emHead(){var w=FX.ui.wide(),d={col:'',dir:''};return U.th('',null,t('c_comp'),d)+U.th('',null,t('c_contact'),d)+(w?U.th('',null,t('c_tel'),d):'')+U.th('',null,t('c_vehs'),d,'c-n')+U.th('',null,t('c_prereg'),d,'c-n')+U.th('',null,t('c_rgpd'),d)+U.th('',null,t('c_level'),d)+'<th><span class="fx-sr">'+t('more')+'</span></th>';}
function prRow(p){
  var w=FX.ui.wide(),plan=[p.fechaPlan?FX.dayLbl(p.fechaPlan):'',p.horaPlan].filter(Boolean).join(', ');
  var h='<tr class="'+(p.estado==='en_recinto'?'in':p.estado==='en_camino'?'pend':'')+'" data-fxrow="'+E(p.id)+'" data-src="prereg">';
  h+='<td class="c-plate">'+(p.matricula?U.plate(p.matricula,''):U.dash)+(p.remolque?'<br>'+U.plate(p.remolque,'','sm'):'')+'</td>';
  h+='<td class="c-txt"><span class="fx-strong fx-ell">'+E(p.empresaNombre||p.empresa||'–')+'</span>'+(p.nombre?U.meta(E(p.nombre)):'')+'</td>';
  h+='<td class="c-ref">'+(p.ref?'<span class="fx-code">'+E(p.ref)+'</span>':U.dash)+(w&&p.eventoNombre?U.meta(E(p.eventoNombre)):'')+'</td>';
  if(w)h+='<td class="c-txt"><span class="fx-ell">'+(p.expositor?E(p.expositor):U.dash)+'</span></td>';
  h+='<td class="c-hall">'+(p.hall?U.hall(p.hall):U.dash)+(p.stand?U.meta(E(t('stand',{s:p.stand}))):'')+'</td>';
  h+='<td class="c-time fx-num">'+(plan?'<span class="fx-strong">'+E(plan)+'</span>':U.dash)+(p.descargaTipo?U.meta(E(servLbl(p.descargaTipo))):'')+'</td>';
  h+='<td class="c-st">'+psBadge(p)+'</td>';
  return h+'</tr>';
}
function prLi(p){
  var meta=[],plan=[p.fechaPlan?FX.dayLbl(p.fechaPlan):'',p.horaPlan].filter(Boolean).join(', ');
  if(p.ref)meta.push('<span class="fx-code">'+E(p.ref)+'</span>');
  if(p.hall)meta.push('<span>'+U.hall(p.hall)+(p.stand?' &nbsp;'+E(t('stand',{s:p.stand})):'')+'</span>');
  if(plan)meta.push('<span class="fx-num">'+E(t('f_plan'))+' '+E(plan)+'</span>');
  if(p.nombre)meta.push('<span class="fx-ell">'+E(p.nombre)+'</span>');
  return U.li({id:p.id,src:'prereg',cls:p.estado==='en_recinto'?'in':p.estado==='en_camino'?'pend':'',pos:'',plate:(p.matricula?U.plate(p.matricula,''):'')+(p.remolque?U.plate(p.remolque,'','sm'):''),title:E(p.empresaNombre||p.empresa||'–'),meta:meta,st:psBadge(p),act:''});
}
function prHead(){var w=FX.ui.wide(),d={col:'',dir:''};return U.th('',null,t('c_plate'),d)+U.th('',null,t('c_comp'),d)+U.th('',null,t('c_ref'),d)+(w?U.th('',null,t('c_expo'),d):'')+U.th('',null,t('c_hall'),d)+U.th('',null,t('c_plan'),d)+U.th('',null,t('c_state'),d);}
function servLbl(v){return v==='mano'?t('serv_mano'):v==='maquinaria'?t('serv_maq'):(v||'');}
function emRender(){
  var sub=emSub(),D=FX.db()||{},nE=(D.empresas||[]).length,nP=(D.preregistros||[]).length,acts='';
  if(sub==='empresas'){acts+=U.btn('em.export',I.down,t('export'))+U.btn('em.new',I.plus,t('em_new'),'pri');}
  else acts+=U.btn('em.export',I.down,t('export'));
  var h='<div class="fx-page" data-view="empresas">'+U.ph(t('tab_empresas'),t('em_sub'),acts);
  h+=U.tabs('em.sub',[{v:'empresas',lbl:t('em_tab_e'),n:nE},{v:'preregistros',lbl:t('em_tab_p'),n:nP}],sub,t('tab_empresas'));
  if(sub==='empresas'){
    var d=emData(),pc=emCounts();
    h+='<div class="fx-bar">'+U.search('empresas',d.q,t('em_q'))+U.seg('em.lv',[{v:'',lbl:t('lvs_all'),n:d.cnt.all},{v:'verified',lbl:t('lvs_verified'),n:d.cnt.verified,dot:'var(--fx-teal)'},{v:'semi',lbl:t('lvs_semi'),n:d.cnt.semi,dot:'var(--fx-amber-solid)'},{v:'blocked',lbl:t('lvs_blocked'),n:d.cnt.blocked,dot:'var(--fx-red)'}],d.lv,t('c_level'))+'</div>';
    var pg=U.page('empresas',[d.q,d.lv].join('|'),d.items);
    if(!d.items.length)h+=d.q?emptyQ('empresas'):U.empty(t('empty_em'),t('empty_em_p'),'');
    else if(FX.S.lay!=='table')h+=U.list(pg.list.map(function(e){return emLi(e,pc);}).join(''));
    else h+=U.table(emHead(),pg.list.map(function(e){return emRow(e,pc);}).join(''));
    h+=U.foot('empresas',pg.list.length,d.items.length);
  } else {
    var p=prData(),evs=(D.eventos||[]);
    var evBtn='<button type="button" class="fx-btn" data-fx="em.ev" aria-haspopup="menu">'+I.cal+'<span>'+E(p.ev?(evName(p.ev)||p.ev):t('ev_all'))+'</span>'+I.chev+'</button>';
    h+='<div class="fx-bar">'+U.search('prereg',p.q,t('pr_q'))+(evs.length?evBtn:'')+'</div>';
    h+='<div class="fx-bar">'+U.seg('pr.st',[{v:'',lbl:t('pss_all'),n:p.cnt.all}].concat(PS.map(function(s){return {v:s,lbl:t('pss_'+s),n:p.cnt[s],dot:s==='en_recinto'?'var(--fx-teal)':s==='en_camino'?'var(--fx-amber-solid)':'var(--fx-line2)'};})),PRS.st,t('c_state'))+'</div>';
    var pp=U.page('prereg',[p.q,p.ev,PRS.st].join('|'),p.items);
    if(!p.items.length)h+=p.q?emptyQ('prereg'):U.empty(t('empty_pr'),t('empty_pr_p'),'');
    else if(FX.S.lay!=='table')h+=U.list(pp.list.map(prLi).join(''));
    else h+=U.table(prHead(),pp.list.map(prRow).join(''));
    h+=U.foot('prereg',pp.list.length,p.items.length);
  }
  return h+'</div>';
}
FX.view('empresas',{render:emRender,wrap:['renderEmpresasTab']});
function emRerender(){call('renderEmpresasTab');FX.sync();}
FX.q('empresas',function(v){window._empSearch=v;emRerender();});
FX.q('prereg',function(v){window._empSearch=v;emRerender();});
FX.row('empresas',function(id){openEmDrawer(id);});
FX.row('prereg',function(id){openPrDrawer(id);});
FX.act('em.sub',function(el,id,v){window._empSub=v;window._empSearch='';emRerender();FX.scrollTop();});
FX.act('em.lv',function(el,id,v){window._empFiltNivel=v||'';emRerender();});
FX.act('pr.st',function(el,id,v){PRS.st=v||'';FX.sync();});
FX.act('em.ev',function(el){var D=FX.db()||{},cur=window._empFiltEvento||'',h=U.mi('em.evset',!cur?I.check:null,t('ev_all'),!cur?'on':'',' data-v=""');(D.eventos||[]).forEach(function(e){h+=U.mi('em.evset',cur===e.id?I.check:null,E(e.nombre),cur===e.id?'on':'',' data-v="'+E(e.id)+'"');});FX.menu(el,h,false);});
FX.act('em.evset',function(el,id,v){FX.closeMenu();window._empFiltEvento=v||'';emRerender();});
FX.act('em.new',function(){call('saCrearEmpresa');});
FX.act('em.export',function(){if(emSub()==='empresas')call('saExportEmpresas');else call('_exportPreregistros');});
FX.act('em.portal',function(el,id){FX.closeMenu();FX.drawer.close();call('saVerPortalEmpresa',id);});
FX.act('em.user',function(el,id){FX.closeMenu();FX.drawer.close();call('saEditarEmpresa',id);});
FX.act('em.promote',function(el,id){FX.closeMenu();call('saPromoverEmpresa',id);emRerender();});
FX.act('em.block',function(el,id){FX.closeMenu();call('saBloquearEmpresa',id);emRerender();});
FX.act('em.unblock',function(el,id){FX.closeMenu();call('saDesbloquearEmpresa',id);emRerender();});
FX.act('em.view',function(el,id){FX.closeMenu();openEmDrawer(id);});
function emMenuItems(e,x){var h='';if(e.nivel==='semi')h+=U.mi('em.promote',I.shield,t('a_promote'),'',x);h+=U.mi('em.user',I.user,t('a_user'),'',x);h+='<hr>'+(e.nivel==='blocked'?U.mi('em.unblock',I.unlock,t('a_unblock'),'',x):U.mi('em.block',I.lock,t('a_block'),'dng',x));return h;}
FX.act('em.more',function(el,id){var e=emRec(id);if(!e)return;var x=' data-id="'+E(id)+'"';FX.menu(el,U.mi('em.view',I.eye,t('a_view'),'',x)+emMenuItems(e,x),true);});
function openEmDrawer(id){
  FX.drawer.open(function(){
    var e=emRec(id);if(!e)return null;
    var D=FX.db()||{},x=' data-id="'+E(e.id)+'"',con=consent(e.id),vs=e.vehiculos||[],pr=(D.preregistros||[]).filter(function(p){return p.empresaId===e.id;}).sort(function(a,b){return String(b.creadoTs||'').localeCompare(String(a.creadoTs||''));});
    var h='<div class="fx-dr-h"><div class="fx-dr-id"><span class="fx-dr-who">'+U.av(e.nombre,'lg sq')+'<span><b>'+E(e.nombre||'–')+'</b><small>'+E([tyLbl(e.tipo),e.cif].filter(Boolean).join(' · '))+'</small></span></span></div>'+U.ibtn('drClose',I.x,t('close'),'ghost')+'</div>';
    h+='<div class="fx-dr-b"><div class="fx-dr-st">'+lvBadge(e)+(con?U.st('in',t('c_rgpd')+' · '+t('rgpd_ok')):U.st('pend',t('c_rgpd')+' · '+t('rgpd_no')))+'</div>';
    h+=contactActs('',e.tel,e.email);
    h+='<h3>'+t('dr_data')+'</h3>'+U.dl([[t('f_contact'),e.contacto],[t('f_tel'),e.tel],[t('f_mail'),e.email],[t('f_cif'),e.cif],[t('f_type'),tyLbl(e.tipo)],[t('f_country'),e.pais],[t('f_created'),e.creadoTs?FX.tsLbl(String(e.creadoTs).replace('T',' '),''):''],[t('f_origin'),e.origen],[t('f_rgpd'),con&&con.timestamp?FX.tsLbl(String(con.timestamp).replace('T',' '),''):''],[t('f_keep'),con&&con.conservHasta?FX.dayLbl(String(con.conservHasta).slice(0,10)):'']]);
    h+='<h3>'+t('dr_vehs')+'<small>'+vs.length+'</small></h3>'+(vs.length?'<ul class="fx-vl">'+vs.map(function(v){return '<li>'+U.plate(v.matricula,'','sm')+'<span class="fx-grow">'+E(v.conductor||'')+(v.remolque?'<small>'+E(t('f_trailer'))+' '+E(v.remolque)+'</small>':'')+'</span></li>';}).join('')+'</ul>':'<p class="fx-sub" style="margin:0">'+t('no_vehs')+'</p>');
    h+='<h3>'+t('dr_pre')+'<small>'+pr.length+'</small></h3>'+(pr.length?'<ul class="fx-vl">'+pr.slice(0,6).map(function(p){return '<li>'+U.plate(p.matricula,'','sm')+'<span class="fx-grow">'+E(p.eventoNombre||'–')+'<small>'+E([p.ref,p.fechaPlan?FX.dayLbl(p.fechaPlan):'',p.horaPlan].filter(Boolean).join(' · '))+'</small></span>'+psBadge(p)+'</li>';}).join('')+'</ul>':'<p class="fx-sub" style="margin:0">'+t('no_pre')+'</p>');
    h+='</div><div class="fx-dr-f">'+U.btn('em.portal',I.eye,t('a_portal'),'pri',x)+U.btn('em.user',I.user,t('a_user'),'',x);
    if(e.nivel==='semi')h+=U.btn('em.promote',I.shield,t('a_promote'),'go',x);
    h+=e.nivel==='blocked'?U.btn('em.unblock',I.unlock,t('a_unblock'),'',x):U.btn('em.block',I.lock,t('a_block'),'dng',x);
    return h+'</div>';
  });
}
FX.act('pr.company',function(el,id){var p=prRec(id);if(p&&p.empresaId&&emRec(p.empresaId))openEmDrawer(p.empresaId);});
function openPrDrawer(id){
  FX.drawer.open(function(){
    var p=prRec(id);if(!p)return null;
    var x=' data-id="'+E(p.id)+'"',plan=[p.fechaPlan?FX.dayLong(p.fechaPlan):'',p.horaPlan].filter(Boolean).join(', ');
    var h='<div class="fx-dr-h"><div class="fx-dr-id"><span class="fx-dr-plates">'+U.plate(p.matricula,'','lg')+(p.remolque?U.plate(p.remolque,'','sm'):'')+'</span></div>'+U.ibtn('drClose',I.x,t('close'),'ghost')+'</div>';
    h+='<div class="fx-dr-b"><div class="fx-dr-st">'+psBadge(p)+(p.hall?U.hall(p.hall):'')+(p.stand?'<span class="fx-lbl">'+E(t('stand',{s:p.stand}))+'</span>':'')+'</div>';
    h+='<h3>'+t('dr_data')+'</h3>'+U.dl([[t('f_comp'),p.empresaNombre||p.empresa],[t('f_ev'),p.eventoNombre],[t('f_ref'),p.ref],[t('f_name'),p.nombre],[t('f_tel'),p.telefono],[t('f_expo'),p.expositor],[t('f_plan'),plan],[t('f_unload'),servLbl(p.descargaTipo)],[t('f_level'),p.nivelEmpresa?t('lv_'+p.nivelEmpresa):''],[t('f_by2'),p.creadoTs?FX.tsLbl(String(p.creadoTs).replace('T',' '),''):'']]);
    h+='</div>';
    if(p.empresaId&&emRec(p.empresaId))h+='<div class="fx-dr-f">'+U.btn('pr.company',I.bldg,t('a_company'),'',x)+'</div>';
    return h;
  });
}

/* Vista previa del portal: FUTURE se pausa y vuelve al regresar (las funciones se definen al cargar la página) */
function hookPortal(){
  var o=window.saVerPortalEmpresa;
  if(typeof o==='function'&&!o.__fx){var w=function(){var was=FX.on();if(was)FX.suspend();var r=o.apply(this,arguments);if(was&&!window._saPreviewFrom)FX.resume();return r;};w.__fx=true;w.__orig=o;window.saVerPortalEmpresa=w;}
  FX.wrap('saVolverDesdePreview',function(){FX.resume();});
}
if(document.readyState==='complete')setTimeout(hookPortal,0);else window.addEventListener('load',function(){setTimeout(hookPortal,0);});
})();
