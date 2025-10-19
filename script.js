//function untuk menyembunyikan page dan juga mengembalikan scroll ke atas
function showPage(pageId) {
    document.getElementById('page-home').style.display = 'none';
    document.getElementById('page-product').style.display = 'none';
    document.getElementById('page-checkout').style.display = 'none';

    document.getElementById(pageId).style.display = 'block';

    window.scrollTo(0, 0);
}

// Data produk (fiktif)
const products = {
    laptop: {
        id: 'laptop',
        category: 'Laptop',
        title: 'Laptop Gaming Pro X15 (Fiktif)',
        ratingText: '⭐ 5.0 • 1 terjual',
        oldPrice: 12000000,
        discountLabel: 'Diskon 12%',
        price: 10500000,
        variants: ['16GB / 512GB SSD', '32GB / 1TB SSD'],
        colors: ['Hitam', 'Silver'],
        images: ['pic/laptop.jpg'],
        detail: '<p>Rasakan performa gaming tak tertandingi dengan Laptop Gaming Pro X15. Ditenagai prosesor terbaru dan GPU kencang, laptop ini siap menjalankan semua game AAA favorit Anda dengan lancar.</p><ul><li>Layar: 15.6&quot; FHD IPS 144Hz</li><li>Kondisi: Baru (New)</li><li>Garansi: 2 Tahun Garansi Resmi AdaTech</li></ul>',
        specs: {
            'CPU': 'Intel Core i9 Gen-13 (Fiktif)',
            'GPU': 'NVIDIA RTX 5060 8GB (Fiktif)',
            'RAM': '16GB DDR5 (Upgradable)',
            'Storage': '512GB NVMe SSD Gen4',
            'OS': 'Windows 11 Home'
        },
        seller: 'GravityComputer',
        stock: 99
    },
    hp: {
        id: 'hp',
        category: 'Smartphone',
        title: 'SmartPhone Alpha (Fiktif)',
        ratingText: '⭐ 4.8 • 520 terjual',
        oldPrice: null,
        discountLabel: '',
        price: 2795000,
        variants: ['8GB / 128GB','12GB / 256GB'],
        colors: ['Midnight', 'Ocean Blue', 'Pearl White'],
        images: ['pic/hp.png'],
        detail: '<p>SmartPhone Alpha menawarkan keseimbangan antara performa dan harga. Cocok untuk pengguna sehari-hari yang menginginkan kamera layak dan baterai tahan lama.</p><ul><li>Layar: 6.6&quot; AMOLED 90Hz</li><li>Kondisi: Baru</li><li>Garansi: 1 Tahun Resmi</li></ul>',
        specs: {
            'CPU': 'Octa-core 2.6GHz (Fiktif)',
            'Camera': '48MP + 8MP + 2MP',
            'RAM': '8GB',
            'Storage': '128GB',
            'Battery': '5000mAh',
            'OS': 'Android 14 (Fiktif)'
        },
        seller: 'DBKlik Indonesia',
        stock: 150
    },
    pc: {
        id: 'pc',
        category: 'PC',
        title: 'Pc gaming (Fiktif)',
        ratingText: '⭐ 5.0 • 10.2k terjual',
        oldPrice: 5699000,
        discountLabel: 'Hemat 10%',
        price: 4829000,
        variants: ['Ryzen 5 / 16GB / 512GB','Ryzen 7 / 32GB / 1TB'],
        colors: ['Black'],
        images: ['pic/pc.jpg'],
        detail: '<p>PC gaming dirancang untuk penggemar game yang menginginkan setup kuat tanpa menguras dompet.</p>',
        specs: {
            'CPU': 'AMD Ryzen 5 (Fiktif)',
            'GPU': 'RX 7600 (Fiktif)',
            'RAM': '16GB DDR4',
            'Storage': '512GB SSD',
            'OS': 'Windows 11 Home'
        },
        seller: 'PC Indonesia',
        stock: 45
    },
    tv: {
        id: 'tv',
        category: 'TV',
        title: 'LED Smart TV 55" (Fiktif)',
        ratingText: '⭐ 4.9 • 6 terjual',
        oldPrice: null,
        discountLabel: '',
        price: 20500000,
        variants: ['55" 4K','65" 4K'],
        colors: ['Black'],
        images: ['pic/tv.jpg'],
        detail: '<p>Smart TV 55&quot; dengan kualitas gambar jernih dan smart OS sederhana untuk streaming favorit Anda.</p>',
        specs: {
            'Resolution': '4K UHD',
            'Panel': 'LED',
            'Smart OS': 'AdaTV OS (Fiktif)',
            'Ports': 'HDMI x3, USB x2'
        },
        seller: 'PrasTech',
        stock: 20
    },
    gpu: {
        id: 'gpu',
        category: 'GPU',
        title: 'GPU Navdia 3070 (Fiktif)',
        ratingText: '⭐ 4.9 • 70 terjual',
        oldPrice: 7200000,
        discountLabel: 'Diskon 10%',
        price: 6500000,
        variants: ['8GB GDDR6','12GB GDDR6X'],
        colors: ['Black'],
        images: ['pic/gpu.png'],
        detail: '<p>Navdia 3070 cocok untuk gamer yang ingin naik kelas performa. Ditenagai memori cepat dan pendingin efisien.</p>',
        specs: {
            'GPU': 'Navdia 3070 (Fiktif)',
            'Memory': '8GB GDDR6',
            'Bus': '256-bit'
        },
        seller: 'PrasTech',
        stock: 30
    }
};

/*Fungsi untuk menampilkan produk*/
function showProduct(productId) {
    const p = products[productId];
    if (!p) return;

    // Tampilkan halaman produk
    showPage('page-product');

    document.getElementById('breadcrumb-category').textContent = p.category;
    document.getElementById('breadcrumb-title').textContent = p.title;

    document.getElementById('productTitle').textContent = p.title;
    document.getElementById('productRating').innerHTML = p.ratingText;

    const oldPriceEl = document.getElementById('oldPrice');
    const discountBadge = document.getElementById('discountBadge');
    const priceEl = document.getElementById('price');

    if (p.oldPrice) {
        oldPriceEl.style.display = 'inline';
        oldPriceEl.textContent = formatIDR(p.oldPrice);
    } else {
        oldPriceEl.style.display = 'none';
    }
    if (p.discountLabel) {
        discountBadge.style.display = 'inline-block';
        discountBadge.textContent = p.discountLabel;
    } else {
        discountBadge.style.display = 'none';
    }
    priceEl.textContent = formatIDR(p.price);
    // variant
    const variantArea = document.getElementById('variantArea');
    variantArea.innerHTML = '<label class="form-label fw-bold">Pilih Varian:</label><div id="variantsRow"></div>';
    const variantsRow = document.getElementById('variantsRow');
    p.variants.forEach((v, idx) => {
        const id = `${p.id}-v${idx}`;
        const checked = idx===0 ? 'checked' : '';
        const radio = `<input type="radio" class="btn-check" name="varian-${p.id}" id="${id}" autocomplete="off" ${checked}>
                       <label class="btn btn-outline-secondary btn-sm me-1" for="${id}">${v}</label>`;
        variantsRow.insertAdjacentHTML('beforeend', radio);
    });
    // warna
    const colorArea = document.getElementById('colorArea');
    colorArea.innerHTML = '<label class="form-label fw-bold">Pilih Warna:</label><div id="colorsRow"></div>';
    const colorsRow = document.getElementById('colorsRow');
    p.colors.forEach((c, idx) => {
        const id = `${p.id}-c${idx}`;
        const checked = idx===0 ? 'checked' : '';
        const radio = `<input type="radio" class="btn-check" name="warna-${p.id}" id="${id}" autocomplete="off" ${checked}>
                       <label class="btn btn-outline-secondary btn-sm me-1" for="${id}">${c}</label>`;
        colorsRow.insertAdjacentHTML('beforeend', radio);
    });

    // Images (main + thumbnails)
    const mainImg = document.getElementById('mainProductImage');
    mainImg.src = p.images[0] || '';
    const thumbRow = document.getElementById('thumbRow');
    thumbRow.innerHTML = '';
    p.images.forEach((img, idx) => {
        const col = document.createElement('div');
        col.className = 'col-3';
        const activeClass = idx===0 ? 'active' : '';
        col.innerHTML = `<img src="${img}" class="img-thumbnail product-thumbnail ${activeClass}" alt="Thumb ${idx+1}" onclick="setMainImage('${img}', this)">`;
        thumbRow.appendChild(col);
    });

    // Detail & specs
    document.getElementById('productDetailText').innerHTML = p.detail || '';
    const specsList = document.getElementById('productSpecs');
    specsList.innerHTML = '';
    for (const key in p.specs) {
        specsList.insertAdjacentHTML('beforeend', `<li><strong>${key}:</strong> ${p.specs[key]}</li>`);
    }

    // Seller & stock
    document.getElementById('stockText').textContent = 'Stok: ' + (p.stock ?? 'N/A');

    updateSubtotal(p.price);

    // Setup qty buttons
    const qtyInput = document.getElementById('qtyInput');
    qtyInput.value = 1;
    document.getElementById('qtyMinus').onclick = () => {
        let v = parseInt(qtyInput.value) || 1;
        if (v>1) v--;
        qtyInput.value = v;
        updateSubtotal(p.price);
    };
    document.getElementById('qtyPlus').onclick = () => {
        let v = parseInt(qtyInput.value) || 1;
        if (p.stock && v < p.stock) v++;
        else v++;
        qtyInput.value = v;
        updateSubtotal(p.price);
    };
    qtyInput.oninput = () => {
        let v = parseInt(qtyInput.value) || 1;
        if (v < 1) v = 1;
        qtyInput.value = v;
        updateSubtotal(p.price);
    };


    // tombol beli
document.getElementById('buyNowBtn').onclick = () => {
    const qty = parseInt(document.getElementById('qtyInput').value) || 1;
    checkoutData = {
        title: p.title,
        price: p.price,
        seller: p.seller,
        img: p.images[0],
        qty: qty
    };
    showPage('page-checkout');
    tampilkanCheckout();
};

document.getElementById('addCartBtn').onclick = () => {
    alert('+ Keranjang: ' + p.title + '\nJumlah: ' + document.getElementById('qtyInput').value);
};

    document.getElementById('addCartBtn').onclick = () => {
        alert('+ Keranjang: ' + p.title + '\nJumlah: ' + document.getElementById('qtyInput').value);
    };
}


function setMainImage(src, el) {
    document.getElementById('mainProductImage').src = src;
    
    document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
}

function formatIDR(num) {
    if (num == null) return '-';
    return 'Rp' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function updateSubtotal(unitPrice) {
    const qty = parseInt(document.getElementById('qtyInput').value) || 1;
    const subtotal = unitPrice * qty;
    document.getElementById('subtotalText').textContent = formatIDR(subtotal);
}

// inisialisasi: biarkan home tampil
showPage('page-home');

function beliLangsung(productId) {
    const p = products[productId];
    if (!p) return;
    alert(`Beli langsung: ${p.title}\nHarga: ${formatIDR(p.price)}\nPenjual: ${p.seller}`);
}

function tambahKeranjang(productId) {
    const p = products[productId];
    if (!p) return;
    alert(`+ Keranjang: ${p.title}\nHarga: ${formatIDR(p.price)}\nPenjual: ${p.seller}`);
}

let checkoutData = null;

function beliLangsung(productId) {
    const p = products[productId];
    if (!p) return;

    checkoutData = {
        title: p.title,
        price: p.price,
        seller: p.seller,
        img: p.images[0],
        qty: 1
    };

    // tampilkan halaman checkout
    showPage('page-checkout');
    tampilkanCheckout();
}
// fungsi untuk menampilkan menu checkout

function tampilkanCheckout() {
    const area = document.getElementById('checkoutSummary');
    const total = document.getElementById('checkoutTotal');

    if (!checkoutData) {
        area.innerHTML = '<p class="text-muted">Tidak ada produk yang dibeli.</p>';
        total.textContent = 'Rp0';
        return;
    }

    const subtotal = checkoutData.price * checkoutData.qty;
    area.innerHTML = `
        <div class="d-flex align-items-center mb-3">
          <img src="${checkoutData.img}" alt="Produk" class="me-3 rounded" style="width:80px; height:80px; object-fit:cover;">
          <div>
            <h6 class="fw-bold mb-1">${checkoutData.title}</h6>
            <p class="small text-muted mb-1">${checkoutData.seller}</p>
            <p class="mb-0 fw-bold text-dark">${formatIDR(checkoutData.price)}</p>
          </div>
        </div>
        <div class="mb-2">
          <label class="form-label small">Jumlah:</label>
          <input type="number" class="form-control form-control-sm" id="checkoutQty" min="1" value="${checkoutData.qty}" style="width:90px;">
        </div>
    `;
    total.textContent = formatIDR(subtotal);

    const qtyInput = document.getElementById('checkoutQty');
    qtyInput.oninput = () => {
        let v = parseInt(qtyInput.value) || 1;
        if (v < 1) v = 1;
        checkoutData.qty = v;
        total.textContent = formatIDR(checkoutData.price * v);
    };

    document.getElementById('checkoutBtn').onclick = () => {
        alert(`Checkout berhasil!\nProduk: ${checkoutData.title}\nJumlah: ${checkoutData.qty}\nTotal: ${formatIDR(checkoutData.price * checkoutData.qty)}`);
        showPage('page-home');
    };
}
