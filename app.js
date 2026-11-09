// Array of 40 Cakes with exact prices from image numbers
const cakesData = [
    { id: 1, name: "Pink Cupcakes Box", price: 6, category: "cupcakes", image: "images/cake-1.jpg", desc: "Box of gorgeous pink buttercream cupcakes." },
    { id: 2, name: "Manchester United Cake", price: 25, category: "football", image: "images/cake-2.jpg", desc: "Custom football theme cake for Man United fans." },
    { id: 3, name: "Blue Floral Birthday Cake", price: 20, category: "birthday", image: "images/cake-3.jpg", desc: "Elegant textured blue cake adorned with colorful flowers." },
    { id: 4, name: "Alicia's Pink Birthday Cake", price: 20, category: "birthday", image: "images/cake-4.jpg", desc: "Stunning pink celebration cake with custom topper." },
    { id: 5, name: "Boss Baby Birthday Cake", price: 10, category: "kids", image: "images/cake-5.jpg", desc: "Fun Boss Baby themed party cake." },
    { id: 6, name: "Leona Graduation Cake", price: 15, category: "special", image: "images/cake-6.jpg", desc: "Green textured graduation cake with scrolls and cap topper." },
    { id: 7, name: "Wife Peach Birthday Cake", price: 15, category: "birthday", image: "images/cake-7.jpg", desc: "Delicate peach cake with floral arrangement and gold lettering." },
    { id: 8, name: "Pink Ruffled Birthday Cake", price: 20, category: "birthday", image: "images/cake-8.jpg", desc: "Soft pink ruffled design with vibrant flower accents." },
    { id: 9, name: "Indo Birthday Cake", price: 80, category: "birthday", image: "images/cake-9.jpg", desc: "Grand multi-tier celebratory cake." },
    { id: 10, name: "Gold Accent Celebration Cake", price: 35, category: "special", image: "images/cake-10.jpg", desc: "Premium styling with gold spheres and topper." },
    { id: 11, name: "Cocomelon Prince Cake", price: 70, category: "kids", image: "images/cake-11.jpg", desc: "Vibrant Cocomelon themed party cake for kids." },
    { id: 12, name: "Nancy #19 Birthday Cake", price: 20, category: "birthday", image: "images/cake-12.jpg", desc: "Custom milestone birthday cake." },
    { id: 13, name: "Janatswa, Junior & K Square Cake", price: 80, category: "birthday", image: "images/cake-13.jpg", desc: "Large square celebration cake with royal blue styling." },
    { id: 14, name: "Paw Patrol Dillan Cake", price: 10, category: "kids", image: "images/cake-14.jpg", desc: "Exciting Paw Patrol themed cake for kids." },
    { id: 15, name: "2nd Anniversary Peach Cake", price: 25, category: "special", image: "images/cake-15.jpg", desc: "Romantic anniversary cake with gold spheres." },
    { id: 16, name: "Hubby White & Gold Cake", price: 35, category: "birthday", image: "images/cake-16.jpg", desc: "Sophisticated white cake with gold and white balloon clusters." },
    { id: 17, name: "Mum Rose Birthday Cake", price: 25, category: "birthday", image: "images/cake-17.jpg", desc: "Elegant peach and brown rose cake dedicated to Mum." },
    { id: 18, name: "Orange Ombre Cake", price: 25, category: "birthday", image: "images/cake-18.jpg", desc: "Stunning orange gradient textured finish." },
    { id: 19, name: "Sofia the First Cake", price: 10, category: "kids", image: "images/cake-19.jpg", desc: "Magical princess cake featuring Sofia the First." },
    { id: 20, name: "Cocomelon Reign Cake", price: 25, category: "kids", image: "images/cake-20.jpg", desc: "Green Cocomelon birthday cake customized for Reign." },
    { id: 21, name: "Kian 1st Birthday Teddy Cake", price: 25, category: "kids", image: "images/cake-21.jpg", desc: "Adorable blue and white teddy bear themed 1st birthday cake." },
    { id: 22, name: "White Floral Pearl Cake", price: 25, category: "birthday", image: "images/cake-22.jpg", desc: "Clean white finish with delicate edible pearls and florals." },
    { id: 23, name: "Cocomelon Mini Cake", price: 15, category: "kids", image: "images/cake-23.jpg", desc: "Compact Cocomelon fun cake." },
    { id: 24, name: "Blue Textured Floral Cake", price: 20, category: "birthday", image: "images/cake-24.jpg", desc: "Rich blue textured buttercream with bright flowers." },
    { id: 25, name: "Liverpool Fredrick Cake", price: 15, category: "football", image: "images/cake-25.jpg", desc: "Custom Liverpool FC football fan cake." },
    { id: 26, name: "Barbie Pink Cake", price: 15, category: "kids", image: "images/cake-26.jpg", desc: "Classic pink Barbie themed celebration cake." },
    { id: 27, name: "Spiderman Anashe Cake", price: 15, category: "kids", image: "images/cake-27.jpg", desc: "Action-packed Spiderman cake for Anashe." },
    { id: 28, name: "Manyoni Special Cake", price: 30, category: "special", image: "images/cake-28.jpg", desc: "Signature house special designer cake." },
    { id: 29, name: "Mint & Orange Wifey Cake", price: 20, category: "birthday", image: "images/cake-29.jpg", desc: "Trendy mint green cake with bold orange brush strokes." },
    { id: 30, name: "Dragon Ball Z Tu #10 Cake", price: 10, category: "kids", image: "images/cake-30.jpg", desc: "Awesome Dragon Ball Z anime cake." },
    { id: 31, name: "Best Dad Mechanic Theme Cake", price: 35, category: "special", image: "images/cake-31.jpg", desc: "Creative automotive and mechanic parts theme cake for Dad." },
    { id: 32, name: "Arsenal Emirates Cake", price: 20, category: "football", image: "images/cake-32.jpg", desc: "Special custom cake for Arsenal football supporters." },
    { id: 33, name: "Barbie Mukundi Cake", price: 15, category: "kids", image: "images/cake-33.jpg", desc: "Custom Barbie cake for Mukundi." },
    { id: 34, name: "Woman of Valour Tribute Cake", price: 45, category: "special", image: "images/cake-34.jpg", desc: "Empowering tribute cake celebrating an extraordinary woman." },
    { id: 35, name: "Sonic the Hedgehog Ashley Cake", price: 25, category: "kids", image: "images/cake-35.jpg", desc: "High-speed Sonic themed birthday cake." },
    { id: 36, name: "Spiderman Ryan Cake", price: 15, category: "kids", image: "images/cake-36.jpg", desc: "Spiderman themed cake customized for Ryan." },
    { id: 37, name: "Petty Birthday Cake", price: 20, category: "birthday", image: "images/cake-37.jpg", desc: "Charming birthday celebration cake." },
    { id: 38, name: "Pink Birthday Cake", price: 15, category: "birthday", image: "images/cake-38.jpg", desc: "Simple and sweet pink frosted cake." },
    { id: 39, name: "Taffy Master Cake", price: 35, category: "birthday", image: "images/cake-39.jpg", desc: "Customized premium cake for Taffy Master." },
    { id: 40, name: "My Steeee Peach Cake", price: 25, category: "birthday", image: "images/cake-40.jpg", desc: "Gorgeous peach cake with metallic rose gold spheres." }
];

let cart = [];

// DOM Elements
const cakeGrid = document.getElementById('cakeGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.getElementById('filterButtons');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartCount = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartEmpty = document.getElementById('cartEmpty');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    displayCakes(cakesData);
    setupEventListeners();
});

// Display Cakes in Grid
function displayCakes(cakes) {
    cakeGrid.innerHTML = '';
    if (cakes.length === 0) {
        cakeGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#888; padding: 40px;">No cakes found matching your search.</p>`;
        return;
    }

    cakes.forEach(cake => {
        const card = document.createElement('div');
        card.className = 'cake-card';
        card.innerHTML = `
            <div class="cake-img-container">
                <img src="${cake.image}" alt="${cake.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80'">
                <div class="cake-price-tag">$${cake.price}</div>
            </div>
            <div class="cake-info">
                <div>
                    <h3>${cake.name}</h3>
                    <p>${cake.desc}</p>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${cake.id})">
                    <i class="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        cakeGrid.appendChild(card);
    });
}

// Event Listeners Setup
function setupEventListeners() {
    // Search Filter
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = cakesData.filter(cake => 
            cake.name.toLowerCase().includes(query) || 
            cake.desc.toLowerCase().includes(query)
        );
        displayCakes(filtered);
    });

    // Category Filter Buttons
    filterButtons.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-filter');
            
            if (category === 'all') {
                displayCakes(cakesData);
            } else {
                const filtered = cakesData.filter(cake => cake.category === category);
                displayCakes(filtered);
            }
        }
    });

    // Cart Drawer Toggles
    cartToggleBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    // WhatsApp Checkout
    whatsappCheckoutBtn.addEventListener('click', sendWhatsAppOrder);
}

function toggleCart() {
    cartDrawer.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

// Add to Cart
window.addToCart = function(id) {
    const cake = cakesData.find(c => c.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...cake, quantity: 1 });
    }

    updateCartUI();
    toggleCart(); 
}

// Remove from Cart
window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        cartFooter.style.display = 'none';
        cartEmpty.style.display = 'block';
        return;
    }

    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price} x ${item.quantity}</p>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
}

// WhatsApp Checkout Logic
function sendWhatsAppOrder() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const date = document.getElementById('deliveryDate').value;
    const notes = document.getElementById('customerNotes').value.trim();

    if (!name || !phone || !date) {
        alert('Please fill in your Name, Phone Number, and Delivery Date.');
        return;
    }

    let orderMessage = `🍰 *NEW CAKE ORDER - PJ CAKES* 🍰\n\n`;
    orderMessage += `👤 *Customer:* ${name}\n`;
    orderMessage += `📞 *Phone:* ${phone}\n`;
    orderMessage += `📅 *Delivery Date:* ${date}\n`;
    if (notes) orderMessage += `📝 *Notes:* ${notes}\n\n`;
    orderMessage += `🛒 *Order Items:* \n`;

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        orderMessage += `- ${item.name} (x${item.quantity}): $${itemTotal}\n`;
    });

    orderMessage += `\n💰 *Total Amount:* $${total.toFixed(2)}`;

    // Your configured WhatsApp number
    const bakerWhatsAppNumber = "263776630029"; 

    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappURL = `https://wa.me/${bakerWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}