let cart = JSON.parse(localStorage.getItem("juiceCart")) || [];

function saveAndRender() {
    localStorage.setItem("juiceCart", JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const container = document.getElementById("cartItemsContainer");
    const totalItemsSpan = document.getElementById("totalItemsCount");
    const totalPriceSpan = document.getElementById("totalPriceSum");
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-5"><i class="fas fa-empty-set fa-4x text-muted"></i><h3>السلة فارغة</h3><a href="index.html" class="btn btn-fruit mt-3">تصفح المنتجات</a></div>`;
        totalItemsSpan.innerText = "0";
        totalPriceSpan.innerText = "0";
        return;
    }
    let totalQty = 0, totalPrice = 0;
    let html = '';
    cart.forEach((item, idx) => {
        const itemTotal = item.price * item.quantity;
        totalQty += item.quantity;
        totalPrice += itemTotal;
        html += `
            <div class="col-12 cart-item-card card p-3" data-index="${idx}">
                <div class="row align-items-center g-3">
                    <div class="col-md-1 text-center"><div class="cart-item-icon mx-auto">${item.icon}</div></div>
                    <div class="col-md-2"><h5 class="fw-bold">${item.name}</h5><p class="text-muted mb-0">الحجم: ${item.selectedSize}</p></div>
                    <div class="col-md-2"><div class="d-flex gap-2"><button class="quantity-btn dec-qty" data-idx="${idx}">-</button><span class="fw-bold fs-5 mx-2">${item.quantity}</span><button class="quantity-btn inc-qty" data-idx="${idx}">+</button></div></div>
                    <div class="col-md-2"><span class="fw-bold">${item.price} ريال × ${item.quantity}</span><br><span class="text-success">الإجمالي: ${itemTotal} ريال</span></div>
                    <div class="col-md-3"><textarea class="notes-field" placeholder="ملاحظات (بدون سكر، ثلج إضافي...)" data-idx="${idx}" rows="2">${item.notes || ''}</textarea></div>
                    <div class="col-md-2 text-center"><button class="btn btn-danger delete-item" data-idx="${idx}"><i class="fas fa-trash-alt"></i> حذف</button></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    totalItemsSpan.innerText = totalQty;
    totalPriceSpan.innerText = totalPrice;

    document.querySelectorAll('.inc-qty').forEach(btn => {
        btn.addEventListener('click', () => { cart[btn.dataset.idx].quantity++; saveAndRender(); });
    });
    document.querySelectorAll('.dec-qty').forEach(btn => {
        btn.addEventListener('click', () => {
            if (cart[btn.dataset.idx].quantity > 1) cart[btn.dataset.idx].quantity--;
            else cart.splice(btn.dataset.idx, 1);
            saveAndRender();
        });
    });
    document.querySelectorAll('.delete-item').forEach(btn => {
        btn.addEventListener('click', () => { cart.splice(btn.dataset.idx, 1); saveAndRender(); });
    });
    document.querySelectorAll('.notes-field').forEach(field => {
        field.addEventListener('change', (e) => { cart[field.dataset.idx].notes = field.value; localStorage.setItem("juiceCart", JSON.stringify(cart)); });
    });
}

// زر إرسال الطلب - تم تعديله لتفريغ السلة بعد الإرسال
document.getElementById("sendOrderBtn")?.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("السلة فارغة، أضف بعض المنتجات أولاً.");
        return;
    }
    let msg = "السلام عليكم%0Aطلب جديد من عصائر الصعيدي%0A%0A";
    cart.forEach(item => {
        msg += `اسم المنتج: ${item.name}%0Aالحجم: ${item.selectedSize}%0Aالكمية: ${item.quantity}%0Aالملاحظات: ${item.notes || "لا توجد"}%0Aالسعر الإجمالي للصنف: ${item.price * item.quantity} ريال%0A-----------------%0A`;
    });
    const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    msg += `إجمالي الطلب: ${total} ريال%0Aشكراً لكم.`;
    window.open(`https://wa.me/966552121467?text=${msg}`, '_blank');
    
    // إفراغ السلة بعد الإرسال
    cart = [];
    localStorage.setItem("juiceCart", JSON.stringify(cart));
    renderCart();
    alert("✅ تم إرسال الطلب بنجاح! سلة الطلبات الآن فارغة.");
});

renderCart();
window.addEventListener("storage", () => {
    cart = JSON.parse(localStorage.getItem("juiceCart")) || [];
    renderCart();
});