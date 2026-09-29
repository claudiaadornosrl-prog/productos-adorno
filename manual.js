// ═══════════════════════════════════════════════════════════════════════
//  Productos Adorno · manual.js — Manual de uso (overlay 📖, autoinyectable)
//  🚨 REGLA: cada vez que se agrega o cambia una función del módulo,
//  actualizar la sección correspondiente acá (y bump del ?v= en index.html).
// ═══════════════════════════════════════════════════════════════════════

function _mEsc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function _manualSecciones() {
  return [
    {
      icon: '🏷', titulo: 'Para qué sirve',
      desc: 'Una sola ficha por artículo con todo lo que el sistema sabe de él.',
      pasos: [
        'Los datos de identidad (descripción, proveedor, categoría, origen, material, precios) vienen del Dragonfish, base de Oficina, y se actualizan todas las mañanas. Se cambian en el Dragonfish, no acá.',
        'Lo que agrega el sistema se edita acá: cómo lo factura cada proveedor, si se compra como juego y se vende desglosado, y en qué local no se trabaja.',
      ],
    },
    {
      icon: '🔍', titulo: 'Buscar un artículo',
      desc: 'Pestaña 🔍 Artículos.',
      pasos: [
        'Escribí el SKU, parte de la descripción o el proveedor (varias palabras: tienen que estar todas). Espera a que termines de escribir; Enter busca ya.',
        'El filtro de la derecha muestra solo activos, discontinuados, juegos, piezas, los que tienen equivalencia o los que no tienen categoría.',
        'Tocá la fila para abrir la ficha. Stock A · U · O = Alcorta · Unicenter · Oficina.',
        'Desde otro lado se puede abrir directo una ficha con la dirección …/productos-adorno/?sku=CODIGO.',
      ],
    },
    {
      icon: '📦', titulo: 'La ficha',
      desc: 'Todo junto: stock, mínimos, precios, juegos, proveedores y últimas entradas.',
      pasos: [
        'Stock y reposición: el stock por local y el mínimo de reposición cargado en el Dragonfish. En rojo, lo que está por debajo del mínimo.',
        '🚫 No lo trabajamos: el local deja de recibir sugerencias de traslado de ese artículo (lo mismo que en Stock → 🔄). ↩ lo vuelve atrás. Lo puede marcar el admin o la encargada de ese local.',
        'Precios: venta, lista COMPRA del proveedor y lista COSTO (con el descuento pactado), con su historia. El margen se calcula sobre la venta sin IVA.',
        'Últimas entradas: los remitos en los que entró, y si hay pedidos a proveedores todavía sin entregar.',
      ],
    },
    {
      icon: '🧩', titulo: 'Juegos que se desglosan',
      desc: 'El proveedor lo factura como un juego bajo un solo SKU y lo vendemos por separado (ej. SREDO → SREDO + SREDOCH).',
      pasos: [
        'La receta dice qué OTRAS piezas salen de cada juego (el juego sigue entrando con su SKU). Se edita desde la ficha (✏️ Editar receta / ➕ Se vende desglosado) o en la pestaña 🧩 Juegos.',
        'Las recetas en amarillo se dedujeron de los desgloses que los locales ya hacían en el Dragonfish: revisalas y tocá ✔ Confirmar. Solo las confirmadas se suman al TXT que genera Compras.',
        '📋 Desgloses por remito: para los TXT de FGR a los locales, qué piezas le toca sumar a cada local y si ya lo cargó en su Dragonfish (⏳ sin cargar · ⚠ difiere · ✅ cargado).',
      ],
    },
    {
      icon: '🔗', titulo: 'Cómo lo factura cada proveedor',
      desc: 'Las mismas equivalencias de Compras, vistas desde el artículo.',
      pasos: [
        '➕ Agregar: elegí el proveedor, poné su código (o su descripción, si factura sin código) y cuántas unidades nuestras trae 1 del proveedor (PX2 → 2). Desde ahí las facturas y remitos de ese proveedor entran con nuestro SKU.',
        '🗑 borra la equivalencia. Las que son parte de un set fraccionado se editan desde Compras → 🔗 Equivalencias.',
      ],
    },
    {
      icon: '🏷', titulo: 'Sin categoría',
      desc: 'Artículos activos a los que les falta grupo o categoría en el Dragonfish.',
      pasos: [
        'Se venden igual, pero en el reporte de ventas caen en "SIN GRUPO". La lista los agrupa por proveedor para completarlos por tandas con el importador del Dragonfish.',
      ],
    },
  ];
}

function abrirManual() {
  if (document.getElementById('manual-overlay')) return;
  const items = _manualSecciones();
  const ov = document.createElement('div');
  ov.id = 'manual-overlay';
  ov.innerHTML = `
    <div class="m-box">
      <div class="m-head">
        <span style="font-size:22px;">📖</span>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:16px;">Manual · Documentos</div>
          <div style="font-size:12px;opacity:.85;">Guía rápida de cada herramienta del módulo</div>
        </div>
        <button class="m-close" onclick="cerrarManual()">✕</button>
      </div>
      ${items.map((s, i) => `
        <div class="m-sec">
          <div class="m-tit">${s.icon} ${i + 1}. ${_mEsc(s.titulo)}</div>
          <div class="m-desc">${_mEsc(s.desc)}</div>
          <ul class="m-pasos">${s.pasos.map(p => `<li>${_mEsc(p)}</li>`).join('')}</ul>
        </div>`).join('')}
      <div class="m-foot">💡 Este manual se actualiza junto con el sistema. ¿Falta algo o no funciona? Avisale a JP.</div>
    </div>`;
  ov.addEventListener('click', e => { if (e.target === ov) cerrarManual(); });
  document.body.appendChild(ov);
  _manualLupa(ov);
  document.body.style.overflow = 'hidden';
}

function cerrarManual() {
  const ov = document.getElementById('manual-overlay');
  if (ov) ov.remove();
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarManual(); });

(function _manualInit() {
  const css = document.createElement('style');
  css.textContent = `
    #manual-overlay{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:9999;display:flex;align-items:flex-start;justify-content:center;padding:20px 12px;overflow-y:auto;-webkit-overflow-scrolling:touch;}
    #manual-overlay .m-box{background:#f8fafc;border-radius:14px;max-width:760px;width:100%;padding-bottom:6px;box-shadow:0 20px 60px rgba(0,0,0,.3);}
    #manual-overlay .m-head{position:sticky;top:0;background:#0f766e;color:#fff;padding:14px 18px;border-radius:14px 14px 0 0;display:flex;align-items:center;gap:10px;z-index:1;}
    #manual-overlay .m-close{background:rgba(255,255,255,.18);border:none;color:#fff;font-size:16px;border-radius:8px;padding:6px 11px;cursor:pointer;}
    #manual-overlay .m-sec{background:#fff;border:1px solid #e2e8f0;border-left:4px solid #0f766e;border-radius:10px;margin:14px 14px 0;padding:14px 18px;}
    #manual-overlay .m-tit{font-weight:700;font-size:15px;margin-bottom:4px;color:#115e59;}
    #manual-overlay .m-desc{font-size:13px;color:#475569;margin-bottom:8px;}
    #manual-overlay .m-pasos{margin:0 0 2px 18px;padding:0;font-size:13px;line-height:1.65;color:#334155;}
    #manual-overlay .m-pasos li{margin-bottom:4px;}
    #manual-overlay .m-foot{margin:16px 14px 12px;background:#fef3c7;border-left:4px solid #d97706;border-radius:8px;padding:11px 14px;font-size:12.5px;color:#92400e;}`;
  document.head.appendChild(css);

  const nav = document.querySelector('nav.tabs');
  if (nav) {
    const b = document.createElement('button');
    b.textContent = '📖 Manual';
    b.onclick = () => abrirManual();
    nav.appendChild(b);
  }
})();

// ── 🔍 Lupa del manual (29-sep, pedido Contreras): busca por palabra, sin tildes ni mayúsculas.
//    Deja solo las secciones que la contienen, dentro de ellas los pasos que la contienen,
//    y resalta la palabra. Mismo bloque en todos los módulos (el de RRHH usa _mLupaFiltrar).
function _mLupaNorm(s){ return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
function _mLupaMarcar(el, q){
  const nodos = [], w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) nodos.push(w.currentNode);
  nodos.forEach(n => {
    const t = n.nodeValue; let norm = '', mapa = [];
    for (let i = 0; i < t.length; i++){ const c = _mLupaNorm(t[i]); for (let k = 0; k < c.length; k++){ norm += c[k]; mapa.push(i); } }
    let desde = 0, pos, frag = null, ult = 0;
    while (q && (pos = norm.indexOf(q, desde)) >= 0){
      frag = frag || document.createDocumentFragment();
      const a = mapa[pos], b = mapa[pos + q.length - 1] + 1;
      if (a > ult) frag.appendChild(document.createTextNode(t.slice(ult, a)));
      const m = document.createElement('mark'); m.textContent = t.slice(a, b);
      m.style.cssText = 'background:#fde047;color:inherit;padding:0 1px;border-radius:3px'; frag.appendChild(m);
      ult = b; desde = pos + q.length;
    }
    if (frag){ if (ult < t.length) frag.appendChild(document.createTextNode(t.slice(ult))); n.parentNode.replaceChild(frag, n); }
  });
}
function _mLupaFiltrar(cont, selSec, texto, info){
  if (!cont) return;
  const q = _mLupaNorm(String(texto || '').trim());
  let vistas = 0;
  cont.querySelectorAll(selSec).forEach(sec => {
    if (sec.dataset.mOrig == null) sec.dataset.mOrig = sec.innerHTML; else sec.innerHTML = sec.dataset.mOrig;
    if (!q){ sec.style.display = ''; return; }
    const lis = [...sec.querySelectorAll('li')];
    const enLis = lis.filter(li => _mLupaNorm(li.textContent).includes(q));
    const hay = _mLupaNorm(sec.textContent).includes(q);
    sec.style.display = hay ? '' : 'none';
    if (!hay) return;
    vistas++;
    if (enLis.length) lis.forEach(li => { if (!enLis.includes(li)) li.style.display = 'none'; });
    _mLupaMarcar(sec, q);
  });
  if (info) info.textContent = !q ? '' : vistas ? `${vistas} ${vistas === 1 ? 'sección' : 'secciones'} con «${String(texto).trim()}»` : `No encontré «${String(texto).trim()}» en el manual.`;
  const primera = q && cont.querySelector('mark');
  if (primera) primera.scrollIntoView({block: 'center', behavior: 'smooth'});
}
function _manualLupa(ov){
  const head = ov && ov.querySelector('.m-head'); if (!head) return;
  head.style.flexWrap = 'wrap';
  const box = document.createElement('div');
  box.style.cssText = 'flex-basis:100%;display:flex;gap:8px;align-items:center;margin-top:8px';
  box.innerHTML = '<input type="search" placeholder="🔍 Buscar en el manual (por ej.: equivalencias, remito, echeq)…" '
    + 'style="flex:1;min-width:0;padding:8px 11px;border-radius:9px;border:none;font-size:14px;color:#0f172a;font-family:inherit">'
    + '<span class="m-lupa-info" style="font-size:12px;opacity:.9;white-space:nowrap"></span>';
  head.appendChild(box);
  const inp = box.querySelector('input'), info = box.querySelector('.m-lupa-info');
  let t = null;
  inp.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => _mLupaFiltrar(ov, '.m-sec', inp.value, info), 250); });
  inp.addEventListener('keydown', e => { if (e.key === 'Escape' && inp.value){ e.stopPropagation(); inp.value = ''; _mLupaFiltrar(ov, '.m-sec', '', info); } });
  setTimeout(() => inp.focus(), 50);
}
