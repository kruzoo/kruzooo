// Массив для хранения товаров
const products = [
    {
        id: 1,
        name: "Диван Modern",
        price: 25000,
        image: "./image/sofa1.jpg",
        category: "sofas",
        material: "leather",
        popularity: 10,
        date: "2024-01-15"
    },
    {
        id: 2,
        name: "Кресло Vintage",
        price: 18500,
        image: "./image/chair1.jpg",
        category: "chairs",
        material: "oak",
        popularity: 8,
        date: "2024-01-10"
    },
    {
        id: 3,
        name: "Стол Minimalist",
        price: 32000,
        image: "./image/table1.jpg",
        category: "tables",
        material: "pine",
        popularity: 7,
        date: "2024-01-20"
    },
    {
        id: 4,
        name: "Шкаф Classic",
        price: 45000,
        image: "./image/wardrobe1.jpg",
        category: "wardrobes",
        material: "walnut",
        popularity: 6,
        date: "2024-01-05"
    },
    {
        id: 5,
        name: "Кровать Luxe",
        price: 58000,
        image: "./image/bad1.jpg",
        category: "beds",
        material: "beech",
        popularity: 9,
        date: "2024-01-25"
    },
    {
        id: 6,
        name: "Комод Retro",
        price: 22000,
        image: "./image/dresser1.jpg",
        category: "dressers",
        material: "birch",
        popularity: 5,
        date: "2024-01-12"
    },
    {
        id: 7,
        name: "Диван Scandinavian",
        price: 35000,
        image: "./image/sofa2.jpg",
        category: "sofas",
        material: "oak",
        popularity: 12,
        date: "2024-01-18"
    },
    {
        id: 8,
        name: "Кресло Loft",
        price: 15000,
        image: "./image/chair2.jpg",
        category: "chairs",
        material: "leather",
        popularity: 7,
        date: "2024-01-08"
    },
    {
        id: 9,
        name: "Стол Industrial",
        price: 28000,
        image: "./image/table2.jpg",
        category: "tables",
        material: "walnut",
        popularity: 8,
        date: "2024-01-22"
    },
    {
        id: 10,
        name: "Шкаф Modern",
        price: 52000,
        image: "./image/wardrobe2.jpg",
        category: "wardrobes",
        material: "beech",
        popularity: 11,
        date: "2024-01-03"
    },
    {
        id: 11,
        name: "Кровать Contemporary",
        price: 48000,
        image: "./image/bad2.jpg",
        category: "beds",
        material: "pine",
        popularity: 9,
        date: "2024-01-28"
    },
    {
        id: 12,
        name: "Комод Minimal",
        price: 19500,
        image: "./image/dresser2.jpg",
        category: "dressers",
        material: "oak",
        popularity: 6,
        date: "2024-01-14"
    },
    {
        id: 13,
        name: "Диван Classic",
        price: 42000,
        image: "./image/sofa3.jpg",
        category: "sofas",
        material: "birch",
        popularity: 10,
        date: "2024-01-17"
    },
    {
        id: 14,
        name: "Кресло Royal",
        price: 23000,
        image: "./image/chair3.jpg",
        category: "chairs",
        material: "walnut",
        popularity: 8,
        date: "2024-01-09"
    },
    {
        id: 15,
        name: "Стол Classic",
        price: 35000,
        image: "./image/table3.jpg",
        category: "tables",
        material: "beech",
        popularity: 7,
        date: "2024-01-21"
    },
    {
        id: 16,
        name: "Шкаф Scandinavian",
        price: 38000,
        image: "./image/wardrobe3.jpg",
        category: "wardrobes",
        material: "pine",
        popularity: 9,
        date: "2024-01-04"
    },
    {
        id: 17,
        name: "Кровать Modern",
        price: 55000,
        image: "./image/bad3.jpg",
        category: "beds",
        material: "leather",
        popularity: 11,
        date: "2024-01-27"
    },
    {
        id: 18,
        name: "Комод Loft",
        price: 24000,
        image: "./image/dresser3.jpg",
        category: "dressers",
        material: "oak",
        popularity: 7,
        date: "2024-01-13"
    },
    {
        id: 19,
        name: "Диван Industrial",
        price: 47000,
        image: "./image/sofa4.jpg",
        category: "sofas",
        material: "walnut",
        popularity: 8,
        date: "2024-01-16"
    },
    {
        id: 20,
        name: "Кресло Modern",
        price: 21000,
        image: "./image/chair4.jpg",
        category: "chairs",
        material: "beech",
        popularity: 9,
        date: "2024-01-07"
    },
    {
        id: 21,
        name: "Диван Vintage",
        price: 39000,
        image: "./image/sofa5.jpg",
        category: "sofas",
        material: "leather",
        popularity: 8,
        date: "2024-02-01"
    },
    {
        id: 22,
        name: "Кресло Minimalist",
        price: 17500,
        image: "./image/chair5.jpg",
        category: "chairs",
        material: "pine",
        popularity: 7,
        date: "2024-02-02"
    },
    {
        id: 23,
        name: "Стол Scandinavian",
        price: 29500,
        image: "./image/table4.jpg",
        category: "tables",
        material: "oak",
        popularity: 9,
        date: "2024-02-03"
    },
    {
        id: 24,
        name: "Шкаф Industrial",
        price: 41000,
        image: "./image/wardrobe4.jpg",
        category: "wardrobes",
        material: "birch",
        popularity: 6,
        date: "2024-02-04"
    },
    {
        id: 25,
        name: "Кровать Classic",
        price: 51000,
        image: "./image/bad4.jpg",
        category: "beds",
        material: "walnut",
        popularity: 10,
        date: "2024-02-05"
    },
    {
        id: 26,
        name: "Комод Modern",
        price: 23500,
        image: "./image/dresser4.jpg",
        category: "dressers",
        material: "beech",
        popularity: 7,
        date: "2024-02-06"
    },
    {
        id: 27,
        name: "Диван Loft",
        price: 36500,
        image: "./image/sofa6.jpg",
        category: "sofas",
        material: "leather",
        popularity: 8,
        date: "2024-02-07"
    },
    {
        id: 28,
        name: "Кресло Industrial",
        price: 19500,
        image: "./image/chair6.jpg",
        category: "chairs",
        material: "oak",
        popularity: 6,
        date: "2024-02-08"
    },
    {
        id: 29,
        name: "Стол Modern",
        price: 31500,
        image: "./image/table5.jpg",
        category: "tables",
        material: "walnut",
        popularity: 9,
        date: "2024-02-09"
    },
    {
        id: 30,
        name: "Шкаф Vintage",
        price: 43500,
        image: "./image/wardrobe5.jpg",
        category: "wardrobes",
        material: "pine",
        popularity: 7,
        date: "2024-02-10"
    },
    {
        id: 31,
        name: "Кровать Scandinavian",
        price: 54000,
        image: "./image/bad5.jpg",
        category: "beds",
        material: "birch",
        popularity: 11,
        date: "2024-02-11"
    },
    {
        id: 32,
        name: "Комод Classic",
        price: 25500,
        image: "./image/dresser5.jpg",
        category: "dressers",
        material: "beech",
        popularity: 6,
        date: "2024-02-12"
    },
    {
        id: 33,
        name: "Диван Royal",
        price: 62000,
        image: "./image/sofa7.jpg",
        category: "sofas",
        material: "leather",
        popularity: 12,
        date: "2024-02-13"
    },
    {
        id: 34,
        name: "Кресло Classic",
        price: 22500,
        image: "./image/chair7.jpg",
        category: "chairs",
        material: "walnut",
        popularity: 8,
        date: "2024-02-14"
    },
    {
        id: 35,
        name: "Стол Vintage",
        price: 33500,
        image: "./image/table6.jpg",
        category: "tables",
        material: "oak",
        popularity: 7,
        date: "2024-02-15"
    },
    {
        id: 36,
        name: "Шкаф Minimalist",
        price: 46500,
        image: "./image/wardrobe6.jpg",
        category: "wardrobes",
        material: "beech",
        popularity: 9,
        date: "2024-02-16"
    },
    {
        id: 37,
        name: "Кровать Industrial",
        price: 57000,
        image: "./image/bad6.jpg",
        category: "beds",
        material: "pine",
        popularity: 10,
        date: "2024-02-17"
    },
    {
        id: 38,
        name: "Комод Scandinavian",
        price: 27500,
        image: "./image/dresser6.jpg",
        category: "dressers",
        material: "birch",
        popularity: 7,
        date: "2024-02-18"
    },
    {
        id: 39,
        name: "Диван Minimalist",
        price: 41500,
        image: "./image/sofa8.jpg",
        category: "sofas",
        material: "oak",
        popularity: 8,
        date: "2024-02-19"
    },
    {
        id: 40,
        name: "Кресло Scandinavian",
        price: 24500,
        image: "./image/chair8.jpg",
        category: "chairs",
        material: "leather",
        popularity: 9,
        date: "2024-02-20"
    },
    {
        id: 41,
        name: "Стол Royal",
        price: 37500,
        image: "./image/table7.jpg",
        category: "tables",
        material: "walnut",
        popularity: 8,
        date: "2024-02-21"
    },
    {
        id: 42,
        name: "Шкаф Loft",
        price: 49500,
        image: "./image/wardrobe7.jpg",
        category: "wardrobes",
        material: "beech",
        popularity: 7,
        date: "2024-02-22"
    },
    {
        id: 43,
        name: "Кровать Vintage",
        price: 59000,
        image: "./image/bad7.jpg",
        category: "beds",
        material: "oak",
        popularity: 11,
        date: "2024-02-23"
    },
    {
        id: 44,
        name: "Комод Industrial",
        price: 29500,
        image: "./image/dresser7.jpg",
        category: "dressers",
        material: "pine",
        popularity: 6,
        date: "2024-02-24"
    },
    {
        id: 45,
        name: "Диван Contemporary",
        price: 44500,
        image: "./image/sofa9.jpg",
        category: "sofas",
        material: "leather",
        popularity: 9,
        date: "2024-02-25"
    },
    {
        id: 46,
        name: "Кресло Modern",
        price: 26500,
        image: "./image/chair9.jpg",
        category: "chairs",
        material: "birch",
        popularity: 8,
        date: "2024-02-26"
    },
    {
        id: 47,
        name: "Стол Loft",
        price: 39500,
        image: "./image/table8.jpg",
        category: "tables",
        material: "walnut",
        popularity: 7,
        date: "2024-02-27"
    },
    {
        id: 48,
        name: "Шкаф Royal",
        price: 53500,
        image: "./image/wardrobe8.jpg",
        category: "wardrobes",
        material: "beech",
        popularity: 10,
        date: "2024-02-28"
    },
    {
        id: 49,
        name: "Кровать Minimalist",
        price: 61000,
        image: "./image/bad8.jpg",
        category: "beds",
        material: "oak",
        popularity: 9,
        date: "2024-02-29"
    },
    {
        id: 50,
        name: "Комод Royal",
        price: 31500,
        image: "./image/dresser8.jpg",
        category: "dressers",
        material: "leather",
        popularity: 7,
        date: "2024-03-01"
    },
    {
        id: 51,
        name: "Диван Luxe",
        price: 67000,
        image: "./image/sofa10.jpg",
        category: "sofas",
        material: "leather",
        popularity: 12,
        date: "2024-03-02"
    },
    {
        id: 52,
        name: "Кресло Contemporary",
        price: 28500,
        image: "./image/chair10.jpg",
        category: "chairs",
        material: "pine",
        popularity: 8,
        date: "2024-03-03"
    },
    {
        id: 53,
        name: "Стол Classic",
        price: 41500,
        image: "./image/table9.jpg",
        category: "tables",
        material: "birch",
        popularity: 9,
        date: "2024-03-04"
    },
    {
        id: 54,
        name: "Шкаф Contemporary",
        price: 55500,
        image: "./image/wardrobe9.jpg",
        category: "wardrobes",
        material: "walnut",
        popularity: 8,
        date: "2024-03-05"
    },
    {
        id: 55,
        name: "Кровать Royal",
        price: 63000,
        image: "./image/bad9.jpg",
        category: "beds",
        material: "beech",
        popularity: 11,
        date: "2024-03-06"
    },
    {
        id: 56,
        name: "Комод Luxe",
        price: 33500,
        image: "./image/dresser9.jpg",
        category: "dressers",
        material: "oak",
        popularity: 7,
        date: "2024-03-07"
    },
    {
        id: 57,
        name: "Диван Elite",
        price: 69000,
        image: "./image/sofa11.jpg",
        category: "sofas",
        material: "leather",
        popularity: 13,
        date: "2024-03-08"
    },
    {
        id: 58,
        name: "Кресло Luxe",
        price: 30500,
        image: "./image/chair11.jpg",
        category: "chairs",
        material: "walnut",
        popularity: 9,
        date: "2024-03-09"
    },
    {
        id: 59,
        name: "Стол Contemporary",
        price: 43500,
        image: "./image/table10.jpg",
        category: "tables",
        material: "beech",
        popularity: 8,
        date: "2024-03-10"
    },
    {
        id: 60,
        name: "Шкаф Elite",
        price: 57500,
        image: "./image/wardrobe10.jpg",
        category: "wardrobes",
        material: "oak",
        popularity: 10,
        date: "2024-03-11"
    },
    {
        id: 61,
        name: "Кровать Elite",
        price: 65000,
        image: "./image/bad10.jpg",
        category: "beds",
        material: "leather",
        popularity: 12,
        date: "2024-03-12"
    },
    {
        id: 62,
        name: "Комод Elite",
        price: 35500,
        image: "./image/dresser10.jpg",
        category: "dressers",
        material: "walnut",
        popularity: 8,
        date: "2024-03-13"
    },
    {
        id: 63,
        name: "Диван Premium",
        price: 71000,
        image: "./image/sofa12.jpg",
        category: "sofas",
        material: "leather",
        popularity: 14,
        date: "2024-03-14"
    },
    {
        id: 64,
        name: "Кресло Elite",
        price: 32500,
        image: "./image/chair12.jpg",
        category: "chairs",
        material: "beech",
        popularity: 10,
        date: "2024-03-15"
    },
    {
        id: 65,
        name: "Стол Premium",
        price: 45500,
        image: "./image/table11.jpg",
        category: "tables",
        material: "oak",
        popularity: 9,
        date: "2024-03-16"
    },
    {
        id: 66,
        name: "Шкаф Premium",
        price: 59500,
        image: "./image/wardrobe11.jpg",
        category: "wardrobes",
        material: "birch",
        popularity: 11,
        date: "2024-03-17"
    },
    {
        id: 67,
        name: "Кровать Premium",
        price: 67000,
        image: "./image/bad11.jpg",
        category: "beds",
        material: "walnut",
        popularity: 13,
        date: "2024-03-18"
    },
    {
        id: 68,
        name: "Комод Premium",
        price: 37500,
        image: "./image/dresser11.jpg",
        category: "dressers",
        material: "leather",
        popularity: 9,
        date: "2024-03-19"
    },
    {
        id: 69,
        name: "Диван Exclusive",
        price: 73000,
        image: "./image/sofa13.jpg",
        category: "sofas",
        material: "leather",
        popularity: 15,
        date: "2024-03-20"
    },
    {
        id: 70,
        name: "Кресло Premium",
        price: 34500,
        image: "./image/chair13.jpg",
        category: "chairs",
        material: "oak",
        popularity: 11,
        date: "2024-03-21"
    },
];

// Переменные для пагинации
let currentPage = 1;
const itemsPerPage = 12;

// Текущие фильтры
let currentFilters = {
    category: 'all',
    material: 'all',
    priceRange: {
        min: 0,
        max: Infinity
    },
    sort: 'default',
    search: ''
};

// Функция создания карточки товара
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='image/placeholder.jpg'">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price.toLocaleString()} ₽</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">В корзину</button>
        </div>
    `;
}

// Функция фильтрации и сортировки товаров
function filterAndSortProducts() {
    let filteredProducts = [...products];

    // Фильтрация по категории
    if (currentFilters.category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === currentFilters.category
        );
    }

    // Фильтрация по ценовому диапазону
    const minPrice = currentFilters.priceRange.min || 0;
    const maxPrice = currentFilters.priceRange.max || Infinity;
    filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );

    // Сортировка
    switch(currentFilters.sort) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'popular':
            filteredProducts.sort((a, b) => b.popularity - a.popularity);
            break;
        case 'new':
            filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
    }

    // Обновление счетчика товаров
    updateProductCount(filteredProducts.length);
    
    // Отображение товаров
    displayProducts(filteredProducts);
}

// Функция отображения товаров
function displayProducts(filteredProducts) {
    const container = document.getElementById('products-container');
    if (!container) return;

    if (filteredProducts.length === 0) {
        container.innerHTML = '<div class="no-products">Товары не найдены</div>';
        return;
    }

    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    container.innerHTML = productsToShow.map(product => createProductCard(product)).join('');

    // Добавляем кнопку "Показать еще"
    if (filteredProducts.length > endIndex) {
        container.innerHTML += `
            <div class="load-more-container">
                <button class="load-more-btn" onclick="loadMore()">Показать еще</button>
            </div>
        `;
    }
}

// Функция обновления счетчика товаров
function updateProductCount(count) {
    const countElement = document.getElementById('product-count');
    if (countElement) {
        countElement.textContent = `Найдено товаров: ${count}`;
    }
}

// Функция загрузки дополнительных товаров
function loadMore() {
    currentPage++;
    filterAndSortProducts();
}

// Корзина
let cart = [];

// Функция добавления в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        updateCartCounter();
        updateCartDisplay();
        showAddToCartAnimation();
    }
}

// Функция обновления счетчика корзины
function updateCartCounter() {
    const counter = document.querySelector('.cart-counter');
    if (counter) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        counter.textContent = totalItems;
    }
}

// Функция обновления отображения корзины
function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total-amount');
    
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Ваша корзина пуста</p>
                <p>Добавьте товары из каталога</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.price.toLocaleString()} ₽ × ${item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                    <button onclick="removeFromCart(${item.id})" class="remove-item">×</button>
                </div>
            </div>
        `).join('');
    }

    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `${total.toLocaleString()} ₽`;
    }
}

// Функции управления количеством в корзине
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCartDisplay();
        updateCartCounter();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            updateCartCounter();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    updateCartCounter();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Обработчики для категорий
    document.querySelectorAll('#category-filters .filter-option').forEach(filter => {
        filter.addEventListener('click', (e) => {
            document.querySelectorAll('#category-filters .filter-option')
                .forEach(f => f.classList.remove('active'));
            e.target.classList.add('active');
            currentFilters.category = e.target.dataset.category;
            filterAndSortProducts();
        });
    });

    // Обработчики для сортировки
    document.querySelectorAll('.sort-option').forEach(option => {
        option.addEventListener('click', (e) => {
            document.querySelectorAll('.sort-option')
                .forEach(o => o.classList.remove('active'));
            e.target.classList.add('active');
            currentFilters.sort = e.target.dataset.sort;
            filterAndSortProducts();
        });
    });

    // Обработчики для ценового фильтра
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');

    if (priceMin && priceMax) {
        priceMin.addEventListener('input', (e) => {
            currentFilters.priceRange.min = Number(e.target.value) || 0;
            filterAndSortProducts();
        });

        priceMax.addEventListener('input', (e) => {
            currentFilters.priceRange.max = Number(e.target.value) || Infinity;
            filterAndSortProducts();
        });
    }

    // Кнопка сброса фильтров
    const resetButton = document.querySelector('.reset-filters-btn');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            currentFilters = {
                category: 'all',
                material: 'all',
                priceRange: {
                    min: 0,
                    max: Infinity
                },
                sort: 'default',
                search: ''
            };

            // Сброс активных классов
            document.querySelectorAll('.filter-option, .sort-option')
                .forEach(el => el.classList.remove('active'));

            // Сброс полей ввода цены
            if (priceMin) priceMin.value = '';
            if (priceMax) priceMax.value = '';

            filterAndSortProducts();
        });
    }

    // Обработчики корзины
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.querySelector('.cart-modal');
    const closeCart = document.querySelector('.close-cart');

    if (cartIcon && cartModal) {
        cartIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            cartModal.classList.add('active');
            updateCartDisplay();
        });

        if (closeCart) {
            closeCart.addEventListener('click', () => {
                cartModal.classList.remove('active');
            });
        }

        document.addEventListener('click', (e) => {
            if (!cartModal.contains(e.target) && !cartIcon.contains(e.target)) {
                cartModal.classList.remove('active');
            }
        });
    }

    // Начальная фильтрация
    filterAndSortProducts();
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.n1');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });

    // Закрываем меню при клике на пункт меню
    document.querySelectorAll('.n1 a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });
});