var materialesData = {
  piano: {
    name: 'Piano',
    icon: 'piano',
    essential: ['Folder catálogo para guardar partituras'],
    recommended: ['Lápiz y borrador']
  },
  guitarra: {
    name: 'Guitarra acústica',
    icon: 'guitar',
    essential: ['Guitarra acústica', 'Folder catálogo para guardar partituras'],
    recommended: ['Lápiz y borrador', 'Afinador']
  },
  electrica: {
    name: 'Guitarra eléctrica',
    icon: 'guitar',
    essential: ['Guitarra eléctrica', 'Púas de guitarra', 'Folder catálogo para guardar partituras'],
    recommended: ['Lápiz y borrador', 'Afinador']
  },
  bateria: {
    name: 'Batería',
    icon: 'drums',
    essential: ['Folder catálogo para guardar partituras'],
    recommended: ['Baquetas', 'Lápiz y borrador']
  },
  canto: {
    name: 'Canto',
    icon: 'mic',
    essential: ['Folder catálogo para temas trabajados en clase', 'Botella de agua'],
    recommended: ['Lápiz y borrador']
  },
  violin: {
    name: 'Violín',
    icon: 'violin',
    essential: ['Violín', 'Resina', 'Folder catálogo para guardar partituras'],
    recommended: ['Paño de limpieza de cuerdas']
  }
};
 
var materialesOrder = ['piano', 'guitarra', 'electrica', 'bateria', 'canto', 'violin'];
var materialesCurrent = 'piano';
 
var materialesIcons = {
  piano: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="6" width="20" height="12" rx="1"/><line x1="6" y1="6" x2="6" y2="14"/><line x1="9" y1="6" x2="9" y2="14"/><line x1="12" y1="6" x2="12" y2="14"/><line x1="15" y1="6" x2="15" y2="14"/><line x1="18" y1="6" x2="18" y2="14"/></svg>',
  guitar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="16" r="5"/><path d="M11 12.5 L17 4"/><circle cx="17" cy="4" r="1.4"/><line x1="13" y1="9.5" x2="15" y2="6.5"/></svg>',
  drums: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="7" rx="8" ry="3"/><path d="M4 7v8c0 1.7 3.6 3 8 3s8-1.3 8-3V7"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>',
  violin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2c-1.5 0-2.5 1-2.5 2.2 0 1 .6 1.6.6 2.5 0 .8-1.1 1-1.1 2.3 0 1.6 1.5 2 1.5 3.5v7.5a1.5 1.5 0 0 0 3 0V12.5c0-1.5 1.5-1.9 1.5-3.5 0-1.3-1.1-1.5-1.1-2.3 0-.9.6-1.5.6-2.5C14.5 3 13.5 2 12 2z"/></svg>'
};
 
function renderMaterialesChips() {
  var row = document.getElementById('chipRow');
  if (!row) return;
  row.innerHTML = '';
  materialesOrder.forEach(function (key) {
    var d = materialesData[key];
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip' + (key === materialesCurrent ? ' active' : '');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', key === materialesCurrent ? 'true' : 'false');
    btn.setAttribute('aria-label', d.name);
    btn.innerHTML = '<span class="chip-icon" aria-hidden="true">' + materialesIcons[d.icon] + '</span><span>' + d.name + '</span>';
    btn.addEventListener('click', function () {
      materialesCurrent = key;
      renderMaterialesChips();
      renderMaterialesCard();
    });
    row.appendChild(btn);
  });
}
 
function renderMaterialesCard() {
  var d = materialesData[materialesCurrent];
  var host = document.getElementById('cardHost');
  if (!host) return;
 
  var essentialItems = d.essential.map(function (item) {
    return '<div class="essential-item">' +
      '<span class="essential-dash" aria-hidden="true">&mdash;</span>' +
      '<span class="essential-text">' + item + '</span></div>';
  }).join('');
 
  var recommendedItems = d.recommended.map(function (item) {
    return '<div class="recommended-item">' +
      '<span class="recommended-dot" aria-hidden="true">&middot;</span>' +
      '<span class="recommended-text">' + item + '</span></div>';
  }).join('');
 
  host.innerHTML =
    '<svg class="wave" viewBox="0 0 600 14" preserveAspectRatio="none" aria-hidden="true">' +
      '<path d="M0,7 Q15,0 30,7 T60,7 T90,7 T120,7 T150,7 T180,7 T210,7 T240,7 T270,7 T300,7 T330,7 T360,7 T390,7 T420,7 T450,7 T480,7 T510,7 T540,7 T570,7 T600,7" stroke="var(--granate)" stroke-width="1.5" fill="none"/>' +
    '</svg>' +
    '<p class="instrument-name">' + d.name + '</p>' +
    '<p class="instrument-level">Nivel iniciación</p>' +
    '<p class="list-label essential">Esencial desde el día 1</p>' +
    '<div class="essential-list">' + essentialItems + '</div>' +
    '<p class="list-label recommended">También recomendado</p>' +
    '<div>' + recommendedItems + '</div>';
}
 
document.addEventListener('DOMContentLoaded', function () {
  renderMaterialesChips();
  renderMaterialesCard();
});