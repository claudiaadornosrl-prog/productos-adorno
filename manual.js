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
    { icon: '🧭', titulo: 'La barra de arriba', desc: 'Es igual en todos los módulos: mismo lugar para cada cosa y el color de la moneda del módulo (el mismo del Hub).',
      pasos: ['A la izquierda, la moneda y el nombre del módulo. En la computadora, tocando el nombre (Productos ▾) se abre la lista para pasar a otro módulo; al final de esa lista está «Volver al Hub».', 'Al lado van los apartados (Artículos, Juegos, Sin categoría, Altas): son íconos; al pasar el mouse aparece el nombre, y el apartado en el que estás queda marcado en blanco con su nombre.', 'En el celular: los apartados están adentro del botón ☰; a la vista queda 🏠 Hub (volver al Hub).', 'Para cerrar la sesión: volvé al Hub y tocá 👤 (arriba) → Salir; se cierra en todos los módulos. En los módulos no hay botón de Salir.', '¿Dudas? Preguntale a Clodi (el botón de abajo a la derecha): sabe todo lo que dice este manual.', '🎙 Hablarle a Clodi: mantené apretado el micrófono (con el dedo, con el clic del mouse o con la barra espaciadora) mientras hablás, y soltalo para mandar la pregunta. Ya no se corta solo a mitad de la frase. En el iPhone el micrófono abre el teclado: se dicta con el 🎤 del teclado y se manda con retorno. Si lo que pedís se hace en otro módulo, Clodi muestra el botón «Ir a … →»; si le decís «llevame a…», te lleva sola.', '🟥 Si algo falla, arriba sale un cartel rojo que NO se va solo: leelo y cerralo con la ✕. Explica el problema en palabras simples; «Ver detalle técnico» es para pasárselo a administración o a JP si sigue pasando.'] },
    { icon: '📊', titulo: 'Tablas tipo Excel', desc: 'Todas las tablas del módulo (la lista de artículos, la ficha, juegos, altas) funcionan igual que en Excel.',
      pasos: [
        'Títulos fijos: al bajar por una tabla larga, la fila de títulos queda siempre arriba.',
        'Renglones alternados: las filas se pintan una sí y una no para leerlas más fácil; la que está bajo el mouse se resalta.',
        'Ordenar: tocar el título de una columna ordena de menor a mayor; otra vez, de mayor a menor; una tercera vez, vuelve al orden original. Las fechas se ordenan como fechas y los importes como números.',
        'Filtrar: el embudito al lado de cada título abre un menú para buscar dentro de esa columna, elegir qué valores mostrar (como los filtros de Excel) o poner un «desde/hasta» en fechas e importes. Arriba de la tabla aparece «Mostrando X de Y» con el botón «Quitar filtros».',
        'Ocultar columnas: en el mismo menú, «Ocultar columna». Para volver a verlas: «Mostrar» en la barrita de arriba de la tabla, o «Columnas» en el menú de cualquier título. Se recuerdan en esa computadora.',
        'Agrandar o achicar columnas: arrastrar el borde derecho del título. Doble clic en ese borde (o «Anchos automáticos» en el menú) vuelve al ancho normal. Los anchos también se recuerdan en esa computadora.',
        'Los filtros y el orden duran mientras la página esté abierta; al recargarla, la tabla vuelve a mostrarse completa.',
      ] },
    { icon: '🔐', titulo: 'Qué puede hacer cada uno (permisos del Hub)', desc: 'Lo que ve y puede hacer cada persona en Productos lo decide JP en el Hub (ícono de persona → Permisos), función por función y según el perfil.',
      pasos: ['Si una función está apagada para tu perfil, no aparece: la pestaña (Juegos, Sin categoría, Altas, Precios, Pedidos), el ➕ o el 📥 de Altas, el ✏️ o el ⛔ Dar de baja de la ficha, el ✏️ de los precios, el ➕ y 🗑 de las equivalencias o el "🚫 No lo trabajamos".', 'El precio de costo (listas COSTO, COMPRA y costo en dólares, margen, historia, reglas de precio y el sugerido) y "Cómo lo factura cada proveedor" solo los ve quien tiene esas funciones: para el resto, la ficha y el buscador muestran solo el precio de venta.', 'Si está en "pide permiso", al tocarla se abre "Pedir autorización": alguien que la tenga habilitada pone SU usuario personal y su clave (y el código del celular si lo tiene), y la operación se graba a su nombre. Las cuentas de los locales y de la oficina no autorizan. Para mirar un apartado alcanza con autorizar una vez hasta recargar.', '"No lo trabajamos" va por local: cada uno decide por SUS locales (los que tiene en el Hub); por otro local hace falta "Pedir o decidir en nombre de otro local" (la oficina lo tiene).', 'Si dice "Tu perfil no tiene habilitado…", pedíselo a administración (Hub → Permisos). La base controla lo mismo: sin el permiso no se graba ni se ve el costo.', '👁 Si arriba dice «Viendo como … · solo lectura», es JP mirando Productos con los permisos de esa persona (desde el Hub): se ve lo mismo que ve ella (por ejemplo, sin costo si no lo tiene), pero no se graba nada. Al tocar un botón avisa si esa persona puede hacerlo o si no lo tiene; si a ella le pide permiso, se abre la misma ventana «Pedir autorización» que le aparece, pero no se autoriza nada. «Salir» vuelve al Hub.'] },
    { icon: '📷', titulo: 'Quién lo hizo (📷 Registra quién)', desc: 'Si JP marcó una función con "📷 Registra quién" en el Hub, al usarla se pide quién la está haciendo (por la cara, o tocando tu nombre en la lista); con usuario personal se anota solo.',
      pasos: ['En Productos pueden pedirlo: cargar, editar, borrar o volver a borrador un alta; exportar las altas al Dragonfish; agregar o borrar una equivalencia de proveedor; marcar que un local no trabaja un producto (o que vuelve a trabajarlo); armar, editar, confirmar o borrar la receta de un juego; editar la ficha de un artículo, darlo de baja o reactivarlo, o resolver un pedido de corrección; y cambiar precios, desde la ficha o en bloque (queda a nombre de quien se anotó, también en 🕘 Cambios).', 'Con una cuenta compartida aparecen en pastillas los nombres de la gente: tocá el tuyo ("Ver todos los locales" si venís de otro).', 'Si cerrás esa ventana, la operación no se hace y lo que escribiste queda ahí.', '📷 En las compus que tienen el fichador por cámara, cuando hace falta la cámara (ver quién lo hace, autorizar o el lector de códigos) el sistema le pide al fichador que la suelte un momento y después le avisa que siga. Mientras tanto no se puede fichar en esa compu, así que conviene terminar y cerrar la ventana.', 'Lo anotado lo ve JP en Hub → Permisos → Registro: quién, cuándo, con qué cuenta y qué hizo. La foto nunca se guarda.'] },
    {
      icon: '🏷', titulo: 'Para qué sirve',
      desc: 'Una sola ficha por artículo con todo lo que el sistema sabe de él.',
      pasos: [
        'Los datos de identidad (descripción, proveedor, categoría, origen, material, precios) vienen del Dragonfish, base de Oficina, y se actualizan todas las mañanas. Hasta el 31-dic se cambian en el Dragonfish; desde el 1-ene-2027 (se apaga el Dragonfish) se cambian acá: ver «🏛 Editar el artículo».',
        'Lo que agrega el sistema se edita acá: cómo lo factura cada proveedor, si se compra como juego y se vende desglosado, y en qué local no se trabaja.',
        'Para entrar se usa el mismo usuario que en el Hub. Código del celular (doble factor): si sos admin o directora y lo activaste en el Hub (panel de sesión, "Código del celular al entrar"), en cada computadora te pide, después de la clave, el código de 6 números de la app de autenticación del celular (Google o Microsoft Authenticator), y después una vez cada 30 días. En el celular registrado con "Entrar con la cara en este equipo" no hace falta ni clave ni código: te pide la cara (o la huella) al abrir. Si cambiás o perdés el celular, avisale a JP para darlo de baja.',
        'La versión del módulo se ve en la pestaña del navegador (por ejemplo «Productos · Claudia Adorno · v54»). Si Productos está instalado como app, se ve en la barra de la ventana, y dice « · PRUEBA» si está en modo prueba.',
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
      desc: 'Todo junto en una ventana: a la izquierda, en azul, la foto, el código, el precio y los botones; a la derecha, en tarjetas, el stock, los precios, la ficha técnica, juegos, proveedores y movimientos.',
      pasos: [
        'Panel azul (izquierda): foto, proveedor, código y descripción; si está activo o discontinuado (y si es un juego o una pieza de un juego); el precio de venta de los tres locales y, si ves el costo, el margen sobre costo con su barrita y el sugerido por regla. Abajo, los botones: ✏️ Editar (o ✏️ Corregir, mientras se carga en el Dragonfish), 💲 Precio, 📷 Foto y ⛔ Dar de baja; cada uno aparece solo si tu perfil lo tiene. En la compu el panel queda quieto y se desplazan las tarjetas; en el celular va arriba de todo. ✕ (o Escape) cierra la ficha.',
        '📦 Dónde hay: una tarjeta por local con el stock en grande, y arriba el total. Verde = está bien; rojo = por debajo del mínimo de reposición cargado en el Dragonfish (dice cuántos faltan); gris = sin stock, o el local no lo trabaja.',
        '🚫 No lo trabajamos (en la tarjeta del local): el local deja de recibir sugerencias de traslado de ese artículo (lo mismo que en Stock → 🔄). ↩ lo vuelve atrás. Lo puede marcar el admin o la encargada de ese local.',
        '💲 De la compra a la venta (si ves el costo): la escalera lista COMPRA del proveedor → descuento pactado → lista COSTO → cuántas veces el costo → venta. Abajo, el costo en dólares (si es importado), el sugerido por regla y la historia de listas. El margen se calcula sobre la venta sin IVA. Quien no ve el costo ve solo la venta.',
        '📋 Ficha técnica: rubro (grupo › categoría › clasificación), origen, material, unidad, temporada, descuento del proveedor, alta y última modificación.',
        '🚚 Movimientos: una línea de tiempo con los remitos en los que entró, los cambios de lista del proveedor (si ves el costo) y, arriba en naranja, los pedidos a proveedores todavía sin entregar.',
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
        'Se venden igual, pero en el reporte de ventas caen en "SIN GRUPO". La lista los agrupa por proveedor.',
        'Para completar uno: abrí su ficha y tocá ✏️ Corregir (en el panel azul) o el ✏️ de «📋 Ficha técnica». Se arma un renglón de modificación en ➕ Altas con los datos que ya tiene; completás categoría, origen y material y listo.',
      ],
    },
    {
      icon: '➕', titulo: 'Altas y correcciones para el Dragonfish',
      desc: 'Pestaña ➕ Altas. Reemplaza el CSV armado a mano: acá los datos obligatorios no se pueden saltear.',
      pasos: [
        '➕ Nuevo artículo: código (hasta 15), descripción, proveedor, y la tipificación: Nivel 1 (ambiente), Nivel 2 (qué es), Nivel 3 (variante, opcional), origen y material. Los desplegables salen del catálogo vivo; un valor que no existe no se acepta salvo que marques "Permitir valores nuevos" (y solo si va a tener 5 artículos o más).',
        'Si el código ya existe en el Dragonfish el renglón sale como modificación (el importador actualiza el artículo); si no, como alta. "Traer sus datos" precarga lo que ya tiene.',
        '💾 Guardar y cargar otro deja proveedor, categoría, origen y material puestos para el siguiente de la misma tanda.',
        '📥 Descargar CSV: baja el archivo con el formato exacto del importador (separado por ; y con la codificación que lee el Dragonfish) y marca los renglones como exportados (lote). Importarlo en el Dragonfish de Oficina (ADMIN), no en una réplica.',
        'Lotes ya exportados: ✅ cuando el sync de la mañana ya muestra esos datos en el catálogo, ⏳ mientras no. ↩ vuelve un renglón a borrador si el CSV no se llegó a importar; 📥 lote #N vuelve a bajar el archivo.',
        'La imagen se escribe con la ruta unificada C:\FOTOS_PRODUCTOS\CODIGO.JPG; la foto tiene que estar en esa carpeta (OneDrive FOTOS_PRODUCTOS).',
        '🧪 Un código que empieza con ZZPRUEBA no va al CSV: se graba directo en el artículo, con sus precios, como va a ser desde el 1-ene (ver «🏛 Editar el artículo»).',
      ],
    },
    {
      icon: '📝', titulo: 'Pedidos de corrección de los locales',
      desc: 'Pestaña 📝 Pedidos (solo Oficina). Los artículos y los precios los cambia solo Oficina; los locales piden la corrección desde Stock, con 📝 en la tarjeta del artículo.',
      pasos: [
        'Cada pedido dice cuándo, de qué local, quién, el artículo, qué hay que corregir (descripción, precio, proveedor, categoría, material, origen, foto, código de barras u otra cosa) y cómo tendría que ser. El número en la pestaña son los pendientes; a Oficina le llega además un aviso al celular o a la compu.',
        'Tocá el artículo para abrir su ficha. Corregilo donde corresponda (hasta el 31-dic en el Dragonfish o con ➕ Altas; desde el 1-ene en la misma ficha) y tocá ✅ Hecho; si no hay que cambiar nada, Descartar. En los dos casos podés escribir una respuesta.',
        'A quien lo pidió le llega el aviso con la respuesta (si lo pidió la cuenta compartida del local, a las compus del local y a la encargada), y lo ve en Stock → ⋮ → 📝 Pedidos de corrección.',
        'En la ficha de un artículo aparecen también sus pedidos pendientes, con los mismos botones.',
        'Pendientes / Resueltos: los resueltos muestran qué se contestó, quién y cuándo.',
      ],
    },
    {
      icon: '🏛', titulo: 'Editar el artículo (desde el 1-ene-2027)',
      desc: 'Cuando se apaga el Dragonfish, Productos pasa a ser el dueño de los artículos y los precios: se cargan y se corrigen acá, y lo ven enseguida Stock, el POS y Compras en los tres locales. Lo hace solo Oficina.',
      pasos: [
        'En la ficha, ✏️ Editar (en el panel azul) o el ✏️ de «📋 Ficha técnica»: el mismo formulario de altas (descripción, proveedor, Nivel 1/2/3, origen, material…); 💾 Guardar lo graba directo. El precio de venta es uno solo para los tres locales.',
        '➕ Artículo nuevo (pestaña ➕ Altas): el mismo formulario, con «💲 Precios» al final: la venta (una sola para los tres locales), y el costo y la compra si los ves. 💾 Guardar crea el artículo en los tres locales con stock 0 y con esos precios, todo junto: si un precio está mal escrito no se graba nada. Si dejás la venta vacía, pregunta si lo creás igual y se la ponés después desde la ficha. Los precios aparecen solo para un código nuevo: el de uno que ya existe se cambia con 💲 ✏️ de la ficha o en la pestaña 💲 Precios. Para poner precios hace falta además el permiso de cambiar precios. Si ves el costo, también está «Costo en dólares» (solo lo importado) y, abajo, el precio sugerido según las reglas de precio: elegís a qué redondear para arriba y «usar» lo pone en la venta.',
        '⛔ Dar de baja (en el panel azul de la ficha): el artículo queda discontinuado en los tres locales (no se borra nada); ↩ Reactivar lo vuelve a activar.',
        '📷 Foto: en el panel azul de la ficha, «📷 Subir foto» (o «📷 Cambiar foto»). Elegís una foto de la compu, o con el celular la sacás en el momento. Se achica sola y la ven enseguida Stock y Productos; la anterior queda en 🕘 Cambios. La sube solo Oficina: desde los locales se pide con 📝 (tipo «Foto»). Hasta el 31-dic las fotos se siguen cargando como siempre (carpeta FOTOS_PRODUCTOS y el Dragonfish): acá solo se prueba con los códigos ZZPRUEBA.',
        '💲 Precio (en el panel azul) o el ✏️ de «💲 De la compra a la venta»: la venta (una sola para los tres locales), y el costo, la compra y el costo en dólares si los ves. Si la venta cambia más de 50 %, pregunta antes de grabar. En la ficha se ve además el sugerido por regla, con la cuenta y la diferencia contra el precio de hoy; «usar el sugerido» lo pone en la venta.',
        '🕘 Cambios (abajo de todo en la ficha): cada cambio con el antes, el después, quién y cuándo. El costo y la compra solo los ve quien tiene permiso de ver el costo.',
        'Hasta el 31-dic los artículos se siguen cargando en el Dragonfish: lo único que se graba directo son los códigos de prueba que empiezan con ZZPRUEBA (salen con la marca 🧪 prueba).',
      ],
    },
    {
      icon: '💲', titulo: 'Precios en bloque',
      desc: 'Pestaña 💲 Precios (solo Oficina). El precio de venta es uno solo para los tres locales; el POS toma el nuevo solo, en unos minutos. Lo que la encargada cambia a mano en una factura del POS es solo para esa venta: no toca el precio del artículo.',
      pasos: [
        '% Aumento: elegí un proveedor y/o una categoría (Nivel 1 y 2), el % (8 = sube 8 %, -5 = baja 5 %) y qué precio (venta, y costo o compra si los ves). «Armar la tabla» muestra cada artículo con el precio de hoy, el nuevo y la diferencia. El nuevo sale al peso, sin redondear: corregilo a mano donde haga falta (por ejemplo, para dejarlo redondo). Vacío = ese precio no se toca.',
        '📋 Pegar desde Excel: copiá de Excel la columna del código y las de los precios, con la fila de títulos (CODIGO o SKU, VENTA o PRECIO, COSTO, COMPRA, COSTO_USD o USD, en cualquier orden), y pegalas. Entiende $ 12.500, 12500 y 1.234,50. «Ver cómo queda» arma la misma tabla: los códigos que no existen o los precios que no se entienden salen en rojo; si un código está repetido, vale el último.',
        '📐 Por regla: elegí un proveedor y/o un Nivel 1 y 2 (o tildá «solo los que están fuera de regla») y a qué redondear para arriba ($ 100, $ 500, $ 1.000, $ 5.000, $ 10.000, o «lo de la regla»). «Armar la tabla» muestra para cada artículo la cuenta (costo × multiplicador, o US$ × multiplicador × dólar) y pone el sugerido como precio nuevo. Si cambiás el redondeo se recalcula, salvo lo que corregiste a mano. Los que no tienen costo quedan sin tocar. Arriba están las reglas (ver «📐 Reglas de precio»).',
        'Arriba de la tabla: cuántos se van a grabar, cuántos tienen error y cuántos cambian más de 50 % (en rojo, para revisarlos). ✅ Grabar pide confirmación y anota quién lo hizo; cada artículo queda ✅ grabado y el cambio aparece en 🕘 Cambios de su ficha.',
        '📥 Excel baja la tabla (código, descripción, proveedor y los precios nuevos) a un archivo que abre Excel. Se puede retocar ahí y volver a pegar.',
        '🔒 Hasta el 1-ene los precios se siguen cambiando en el Dragonfish: la tabla se arma igual (sirve para calcular el aumento y bajarlo a Excel), pero esos artículos salen con 🔒 Dragonfish y no se graban. Solo se graban los códigos de prueba ZZPRUEBA.',
      ],
    },
    {
      icon: '📐', titulo: 'Reglas de precio',
      desc: 'En 💲 Precios → 📐 Por regla, arriba, está la tabla de reglas: cómo se calcula el precio de venta sugerido. Las ve quien ve el costo; las cambia Oficina (permiso de cambiar precios). Una regla no cambia ningún precio sola: solo sugiere.',
      pasos: [
        'La base es el costo: la compra menos los descuentos por pago contado. La regla general es costo × 3, que ya incluye el IVA, redondeado para arriba a $ 1.000.',
        'Casos especiales: Espalma, sets de toalla y toallón × 3,33 (están en promo 50 % en la segunda: Espalma dio un 10 % más de descuento y en vez de bajar el precio se subió el margen); Bijou Claudia Adorno × 2. Si a un artículo le corresponden varias reglas, vale la más específica: proveedor, después Nivel 3, Nivel 2 y Nivel 1; la general, para todo lo demás.',
        'Importados: la base es el costo en dólares (lista COSTO_USD) por un multiplicador según el tramo (menos de US$ 500: × 2,25; desde US$ 500: × 2; desde US$ 1.000: × 1,75) y por el dólar oficial BNA del día. El resultado ya es precio final con IVA.',
        '💵 El dólar oficial BNA lo trae solo el sistema de lunes a viernes (10:20, 13:20 y 16:20); arriba de la tabla se ve el último y su fecha. Si no llegó o hay que corregirlo, el ✏️ al lado lo carga a mano para ese día.',
        '➕ Nueva regla o ✏️ cambiar: nombre; para qué (proveedor, Nivel 1, 2 y 3; vacío = todos); base (costo, o costo en dólares × dólar BNA); multiplicador (o varios tramos con ➕ tramo); a qué redondear para arriba; y notas. Destildar «activa» la deja guardada pero sin usar. No puede haber dos reglas activas para lo mismo. 🗑 la borra.',
        'El sugerido aparece en el alta de un artículo nuevo (con el costo cargado), en la ficha («Sugerido por regla») y en la tabla 📐 Por regla de la pestaña Precios.',
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
          <div style="font-weight:700;font-size:16px;">Manual · Productos</div>
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
    b.title = 'Manual';
    b.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><span class="lb">Manual</span>';
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
