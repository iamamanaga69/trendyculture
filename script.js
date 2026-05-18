/*
      ==================== EDITABLE STORE DATA ====================
      Non-technical editors: this is the main content area.
      Change product names, prices, images, reviews, and job posts here.
    */

    /*
      EDIT YOUR PRODUCTS HERE
      Copy a product object and paste it below to add a new product.
      Change name, price, category, image, badge, sizes, colors, and description.
    */
    const products = [
      { id: 1, name: "TC Air Runner", category: "shoes", price: 2999, originalPrice: 4999, discount: 40, rating: 4.8, reviews: 234, image: "https://picsum.photos/400/500?random=10", badge: "BESTSELLER", inStock: true, sizes: ["7","8","9","10","11"], colors: ["black","white"], fastDelivery: true, isNew: false, description: "Lightweight runners built for the streets. Breathable mesh upper, cushioned sole, clean silhouette." },
      { id: 2, name: "TC Foam Slide", category: "shoes", price: 1499, originalPrice: 1999, discount: 25, rating: 4.6, reviews: 189, image: "https://picsum.photos/400/500?random=11", badge: "NEW DROP", inStock: true, sizes: ["7","8","9","10"], colors: ["black","green"], fastDelivery: true, isNew: true, description: "The slide you never knew you needed. Thick foam, signature TC branding." },
      { id: 3, name: "TC High Court", category: "shoes", price: 3499, originalPrice: 4499, discount: 22, rating: 4.7, reviews: 145, image: "https://picsum.photos/400/500?random=12", badge: "LIMITED", inStock: true, sizes: ["8","9","10","11"], colors: ["white","navy"], fastDelivery: false, isNew: true, description: "High-top silhouette inspired by basketball culture. Premium leather upper." },
      { id: 4, name: "TC Track Low", category: "shoes", price: 2499, originalPrice: 3299, discount: 24, rating: 4.5, reviews: 98, image: "https://picsum.photos/400/500?random=13", badge: "", inStock: false, sizes: ["6","7","8"], colors: ["cream","red"], fastDelivery: false, isNew: false, description: "Retro track runner. Suede and mesh combo. Drops energy everywhere you step." },
      { id: 5, name: "Culture Tee - Black", category: "tees", price: 799, originalPrice: 1199, discount: 33, rating: 4.9, reviews: 512, image: "https://picsum.photos/400/500?random=20", badge: "TOP SELLER", inStock: true, sizes: ["XS","S","M","L","XL"], colors: ["black"], fastDelivery: true, isNew: false, description: "The essential oversized tee. 100% heavyweight cotton. Dropped shoulder. Front TC logo print." },
      { id: 6, name: "Chaos Graphic Tee", category: "tees", price: 999, originalPrice: 1499, discount: 33, rating: 4.7, reviews: 321, image: "https://picsum.photos/400/500?random=21", badge: "NEW", inStock: true, sizes: ["S","M","L","XL","XXL"], colors: ["white","black"], fastDelivery: true, isNew: true, description: "Front and back graphic print. Vintage wash finish. 100% cotton." },
      { id: 7, name: "Blank Tee - White", category: "tees", price: 599, originalPrice: 899, discount: 33, rating: 4.6, reviews: 278, image: "https://picsum.photos/400/500?random=22", badge: "", inStock: true, sizes: ["XS","S","M","L","XL","XXL"], colors: ["white","cream","black"], fastDelivery: true, isNew: false, description: "The cleanest white tee you'll own. Heavyweight 220 GSM. Box fit." },
      { id: 8, name: "Washed Acid Tee", category: "tees", price: 1099, originalPrice: 1599, discount: 31, rating: 4.8, reviews: 194, image: "https://picsum.photos/400/500?random=23", badge: "LIMITED", inStock: true, sizes: ["M","L","XL"], colors: ["purple","green"], fastDelivery: false, isNew: true, description: "Acid wash finish. No two pieces are identical. Unisex oversized fit." },
      { id: 9, name: "TC Embroidered Tee", category: "tees", price: 1299, originalPrice: 1799, discount: 28, rating: 4.7, reviews: 143, image: "https://picsum.photos/400/500?random=24", badge: "", inStock: true, sizes: ["S","M","L","XL"], colors: ["navy","black"], fastDelivery: true, isNew: false, description: "Chest embroidery logo. Ribbed collar. Premium combed cotton." },
      { id: 10, name: "Split Dye Tee", category: "tees", price: 1199, originalPrice: 1699, discount: 29, rating: 4.5, reviews: 87, image: "https://picsum.photos/400/500?random=25", badge: "NEW DROP", inStock: false, sizes: ["S","M","L"], colors: ["black/white"], fastDelivery: false, isNew: true, description: "Half black half white vertical split dye. Conversation starter. Guaranteed." },
      { id: 11, name: "Linen Relaxed Shirt", category: "shirts", price: 1799, originalPrice: 2499, discount: 28, rating: 4.7, reviews: 201, image: "https://picsum.photos/400/500?random=30", badge: "BESTSELLER", inStock: true, sizes: ["S","M","L","XL"], colors: ["cream","white","olive"], fastDelivery: true, isNew: false, description: "Relaxed linen shirt. Boxy cut. Perfect to half-tuck. Summer essential." },
      { id: 12, name: "Camp Collar Shirt", category: "shirts", price: 1599, originalPrice: 2199, discount: 27, rating: 4.6, reviews: 167, image: "https://picsum.photos/400/500?random=31", badge: "NEW", inStock: true, sizes: ["M","L","XL","XXL"], colors: ["navy","black","white"], fastDelivery: true, isNew: true, description: "Cuban collar open shirt. Woven fabric. Wear open over a tee or button up." },
      { id: 13, name: "Flannel Overshirt", category: "shirts", price: 2199, originalPrice: 2999, discount: 27, rating: 4.8, reviews: 289, image: "https://picsum.photos/400/500?random=32", badge: "TOP RATED", inStock: true, sizes: ["S","M","L","XL"], colors: ["red/black","navy/white"], fastDelivery: true, isNew: false, description: "Heavy flannel overshirt. Wear it as a jacket or shirt. Year-round staple." },
      { id: 14, name: "TC Bowling Shirt", category: "shirts", price: 1899, originalPrice: 2599, discount: 27, rating: 4.5, reviews: 112, image: "https://picsum.photos/400/500?random=33", badge: "LIMITED", inStock: true, sizes: ["M","L","XL"], colors: ["cream","black"], fastDelivery: false, isNew: true, description: "Retro bowling shirt with TC custom embroidery. Rayon-viscose blend." },
      { id: 15, name: "Utility Cargo Shirt", category: "shirts", price: 2499, originalPrice: 3299, discount: 24, rating: 4.6, reviews: 134, image: "https://picsum.photos/400/500?random=34", badge: "", inStock: true, sizes: ["S","M","L","XL","XXL"], colors: ["olive","black"], fastDelivery: true, isNew: false, description: "Multi-pocket cargo shirt. Heavy cotton twill. The hardest shirt in the room." },
      { id: 16, name: "Satin Loose Shirt", category: "shirts", price: 2099, originalPrice: 2799, discount: 25, rating: 4.7, reviews: 178, image: "https://picsum.photos/400/500?random=35", badge: "NEW DROP", inStock: false, sizes: ["S","M","L","XL"], colors: ["silver","black","cream"], fastDelivery: false, isNew: true, description: "Satin finish. Fluid drape. The shirt for the fit pics. No ironing needed." }
    ];

    /*
      EDIT YOUR REVIEWS HERE
      Copy a review block and paste below to add more customer reviews.
    */
    const reviews = [
      { id: 1, name: "Arjun S.", initials: "AS", date: "12 May 2025", rating: 5, title: "Absolutely fire", body: "Got the Culture Tee and it's everything. Heavyweight cotton, perfect oversized fit, dropped shoulders. No notes.", product: "Culture Tee - Black, M", helpful: 47, verified: true },
      { id: 2, name: "Zara K.", initials: "ZK", date: "8 May 2025", rating: 5, title: "The flannel hits different", body: "Ordered the Flannel Overshirt in red/black. Wore it as a jacket all spring. Got 3 compliments on day 1.", product: "Flannel Overshirt, L", helpful: 38, verified: true },
      { id: 3, name: "Dev M.", initials: "DM", date: "2 May 2025", rating: 4, title: "Shoes are clean but sizing runs big", body: "TC Air Runner looks insane in person. Very clean silhouette. Go half a size down though.", product: "TC Air Runner, Size 9", helpful: 29, verified: true },
      { id: 4, name: "Priya R.", initials: "PR", date: "28 Apr 2025", rating: 5, title: "My entire fit is from here now", body: "Bought 3 tees, 2 shirts and the foam slides in one order. Everything fits perfectly. Delivery was 2 days.", product: "Blank Tee - White, S", helpful: 52, verified: true },
      { id: 5, name: "Kabir T.", initials: "KT", date: "20 Apr 2025", rating: 4, title: "Camp collar is the vibe", body: "Exactly as described. Fabric feels premium. Goes with everything. Size up for relaxed fit.", product: "Camp Collar Shirt, M", helpful: 21, verified: false },
      { id: 6, name: "Meera V.", initials: "MV", date: "14 Apr 2025", rating: 5, title: "Packaging was immaculate", body: "Even the packaging felt premium. Black tissue paper, sticker seal, a handwritten thank you note. Bought for the fit, stayed for the brand.", product: "Chaos Graphic Tee, L", helpful: 43, verified: true },
      { id: 7, name: "Rohan D.", initials: "RD", date: "5 Apr 2025", rating: 3, title: "Good but took long", body: "Quality is solid. Delivery took 8 days which was a bit slow. Will order again once speed improves.", product: "TC High Court, Size 10", helpful: 14, verified: true },
      { id: 8, name: "Ananya L.", initials: "AL", date: "28 Mar 2025", rating: 5, title: "Everyone asked where I got this", body: "Wore the Acid Wash Tee to a concert and legit 5 people stopped me to ask. It's a statement piece.", product: "Washed Acid Tee, M", helpful: 67, verified: true }
    ];

    /*
      EDIT YOUR JOB POSTINGS HERE
      Copy a job block and paste below to add or edit roles.
    */
    const jobs = [
      { id: 1, title: "Frontend Developer", department: "Tech", location: "Remote", type: "Full-time", description: "Build and ship new features on our storefront. You care about pixels, performance, and people.", requirements: ["2+ years React or vanilla JS", "Eye for design", "Comfortable with Git"], responsibilities: ["Build product pages and filters", "Optimize for mobile speed", "Work with design on new drops"] },
      { id: 2, title: "Product Manager", department: "Product", location: "Hybrid - Bangalore", type: "Full-time", description: "Own the roadmap. Talk to customers. Ship stuff. No deck warriors.", requirements: ["3+ years PM experience", "Strong data skills", "Startup DNA"], responsibilities: ["Define feature priorities", "Write product specs", "Work across design, tech, and ops"] },
      { id: 3, title: "Marketing & Social Media Executive", department: "Marketing", location: "Remote", type: "Full-time", description: "You live on Instagram and TikTok. You know what's trending before it trends. This role is yours.", requirements: ["Portfolio of social content", "Experience with influencer briefs", "Meme literacy required"], responsibilities: ["Run Instagram, YouTube Shorts, and Threads", "Brief creators and UGC partners", "Plan drop campaigns"] },
      { id: 4, title: "Customer Experience Lead", department: "Operations", location: "On-site - Mumbai", type: "Full-time", description: "Make every customer feel like they're the only one. High empathy, high speed.", requirements: ["2+ years customer support", "Zendesk or Freshdesk experience", "Fluent in English + Hindi"], responsibilities: ["Handle order queries, returns, exchanges", "Build support SOP", "Track CSAT scores"] },
      { id: 5, title: "Visual Design Intern", department: "Design", location: "Remote", type: "Internship - 3 months", description: "Design product pages, social posts, email templates. Learn fast. Ship faster.", requirements: ["Figma proficiency", "Portfolio welcome", "Available 5 days/week"], responsibilities: ["Design campaign assets", "Create social templates", "Assist on lookbook shoots"] }
    ];

    /* ==================== SMALL HELPERS ==================== */
    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
    const rupee = value => `₹${Number(value).toLocaleString("en-IN")}`;
    const randomFrom = list => list[Math.floor(Math.random() * list.length)];
    const storage = {
      get(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
      },
      set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
    };
    const state = {
      cart: storage.get("tc_cart", []),
      wishlist: storage.get("tc_wishlist", []),
      category: "all",
      search: "",
      filters: { price: 10000, sizes: [], colors: [], stock: false, sale: false, fresh: false },
      promo: storage.get("tc_promo", null),
      reviewLimit: 4,
      reviewRating: "all",
      bannerIndex: 0,
      checkoutStep: 1,
      theme: storage.get("tc_theme", "dark")
    };

    /* ==================== PAGE LOADER ==================== */
    function initLoader() {
      const logo = "TrendyCulture";
      $("#loaderLogo").innerHTML = logo.split("").map((letter, index) => `<span style="animation-delay:${index * 0.045}s">${letter}</span>`).join("");
      if (sessionStorage.getItem("tc_loaded")) {
        $("#loader").classList.add("is-hidden");
        return;
      }
      setTimeout(() => {
        $("#loader").classList.add("is-hidden");
        sessionStorage.setItem("tc_loaded", "true");
      }, 2050);
    }

    /* ==================== TOAST NOTIFICATION SYSTEM ==================== */
    function toast(message, subtext = "", type = "success") {
      const icons = { success: "✅", error: "❌", info: "ℹ️" };
      const item = document.createElement("div");
      item.className = "toast";
      item.innerHTML = `<span>${icons[type] || icons.info}</span><div><p>${message}</p>${subtext ? `<small>${subtext}</small>` : ""}</div><button aria-label="Close toast">×</button>`;
      $("button", item).addEventListener("click", () => item.remove());
      $("#toastStack").appendChild(item);
      setTimeout(() => item.remove(), 3200);
    }

    /* ==================== NAVIGATION AND GLOBAL UI ==================== */
    function initNavigation() {
      const nav = $("#navbar");
      const announcement = $("#announcement");
      if (sessionStorage.getItem("tc_announcement_closed")) announcement.classList.add("is-hidden");
      $("#announcementClose").addEventListener("click", () => {
        announcement.classList.add("is-hidden");
        sessionStorage.setItem("tc_announcement_closed", "true");
      });
      window.addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 60));
      $("#hamburger").addEventListener("click", () => toggleMobileMenu());
      $("#pageBlur").addEventListener("click", closeAllOverlays);
      $$("#mobileMenu a").forEach(link => link.addEventListener("click", toggleMobileMenu));
      $("#themeToggle").addEventListener("click", toggleTheme);
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            $$("#navLinks a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
          }
        });
      }, { threshold: 0.35 });
      ["home","drops","shop","lookbook","culture","about","contact"].forEach(id => observer.observe($(`#${id}`)));
    }
    function initTheme() {
      document.body.dataset.theme = state.theme;
      $("#themeIcon").textContent = state.theme === "light" ? "☾" : "☼";
    }
    function toggleTheme() {
      state.theme = state.theme === "light" ? "dark" : "light";
      storage.set("tc_theme", state.theme);
      initTheme();
      toast(`${state.theme.toUpperCase()} MODE`, "Palette switched.");
    }
    function toggleMobileMenu() {
      $("#hamburger").classList.toggle("is-open");
      $("#mobileMenu").classList.toggle("is-open");
      $("#pageBlur").classList.toggle("is-active");
      document.body.classList.toggle("menu-open");
      $("#hamburger").setAttribute("aria-expanded", $("#mobileMenu").classList.contains("is-open"));
    }
    function closeAllOverlays() {
      $$(".side-panel").forEach(panel => panel.classList.remove("is-open"));
      $("#mobileMenu").classList.remove("is-open");
      $("#hamburger").classList.remove("is-open");
      $("#quickLayer").classList.remove("is-open");
      $("#plainModalLayer").classList.remove("is-open");
      $("#pageBlur").classList.remove("is-active");
      document.body.classList.remove("panel-open", "modal-open", "menu-open");
    }
    function openPanel(id) {
      closeAllOverlays();
      $(`#${id}`).classList.add("is-open");
      $("#pageBlur").classList.add("is-active");
      document.body.classList.add("panel-open");
    }

    /* ==================== RENDER PRODUCT CARDS ==================== */
    function altImage(product) {
      const random = Number((product.image.match(/random=(\d+)/) || [0, product.id])[1]) + 100;
      return product.image.replace(/random=\d+/, `random=${random}`);
    }
    function productCard(product) {
      const badgeClass = /limited|sold/i.test(product.badge) ? "badge badge-red" : "badge";
      return `
        <article class="product-card" tabindex="0" data-product-id="${product.id}">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <img class="alt-img" src="${altImage(product)}" alt="${product.name} alternate view" loading="lazy">
            ${product.badge ? `<span class="${badgeClass}">${product.badge}</span>` : ""}
            ${!product.inStock ? `<div class="stock-overlay">SOLD OUT</div>` : ""}
            <div class="quick-actions">
              <button class="icon-btn wishlist-toggle" data-id="${product.id}" aria-label="Save ${product.name}">♡</button>
              <button class="icon-btn quick-view" data-id="${product.id}" aria-label="Quick view ${product.name}">👁</button>
              <button class="btn btn-primary add-bag" data-id="${product.id}" ${!product.inStock ? "disabled" : ""}>Add To Bag +</button>
            </div>
          </div>
          <div class="product-info">
            <div class="product-topline"><span>${product.category}</span><span class="rating">★ ${product.rating} (${product.reviews})</span></div>
            <h3 class="product-name">${product.name}</h3>
            <div class="price-row"><span class="sale-price">${rupee(product.price)}</span><span class="old-price">${rupee(product.originalPrice)}</span><span class="discount-pill">${product.discount}% OFF</span></div>
            <div class="card-size-picker" aria-label="Choose ${product.category === "shoes" ? "shoe size" : "size"} for ${product.name}">
              ${product.sizes.map((size, index) => `<button class="${index === 0 ? "active" : ""}" data-card-size="${size}" type="button">${size}</button>`).join("")}
            </div>
            <div class="card-color-picker" aria-label="Choose color for ${product.name}">
              ${product.colors.slice(0, 4).map((color, index) => `<button class="${index === 0 ? "active" : ""}" data-card-color="${color}" title="${color}" style="background:${cssColor(color.split('/')[0])}" type="button"></button>`).join("")}
            </div>
            <div class="stock-line"><span class="stock-dot ${product.inStock && product.id % 5 === 0 ? "low" : ""}"></span>${product.inStock ? (product.id % 5 === 0 ? "Low Stock (3 left)" : "In Stock") : "Out of Stock"}</div>
          </div>
        </article>`;
    }
    function currentProducts() {
      let list = products.filter(p => state.category === "all" || p.category === state.category);
      if (state.search) list = list.filter(p => `${p.name} ${p.category} ${p.description} ${p.sizes.join(" ")} ${p.colors.join(" ")}`.toLowerCase().includes(state.search.toLowerCase()));
      list = list.filter(p => p.price <= state.filters.price);
      if (state.filters.sizes.length) list = list.filter(p => p.sizes.some(size => state.filters.sizes.includes(size)));
      if (state.filters.colors.length) list = list.filter(p => p.colors.some(color => state.filters.colors.includes(color)));
      if (state.filters.stock) list = list.filter(p => p.inStock);
      if (state.filters.sale) list = list.filter(p => p.discount > 0);
      if (state.filters.fresh) list = list.filter(p => p.isNew);
      const sort = $("#sortSelect")?.value || "featured";
      const sorters = {
        new: (a,b) => Number(b.isNew) - Number(a.isNew),
        priceLow: (a,b) => a.price - b.price,
        priceHigh: (a,b) => b.price - a.price,
        best: (a,b) => b.reviews - a.reviews,
        rated: (a,b) => b.rating - a.rating
      };
      return sorters[sort] ? list.sort(sorters[sort]) : list;
    }
    function renderProducts() {
      $("#productGrid").innerHTML = currentProducts().map(productCard).join("") || `<p class="section-subtitle">No fits found. Reset filters and run it back.</p>`;
    }
    function initShop() {
      $("#dropsGrid").innerHTML = products.filter(p => p.isNew).slice(0,3).map((p, i) => `
        <article class="drop-card">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="badge ${i === 2 ? "badge-red" : ""}" style="position:absolute;z-index:2;top:18px;left:18px">${i === 2 ? "LIMITED" : "NEW"}</span>
          <div class="drop-content">
            <h3>${p.name}</h3>
            <div class="drop-hover"><strong>${rupee(p.price)}</strong><button class="btn btn-primary add-bag" data-id="${p.id}">Add To Bag</button></div>
            <div class="drop-timer">${i === 1 ? "Selling fast - 7 left" : "Drops in 02:14:33"}</div>
          </div>
        </article>`).join("");
      $("#dealThumbs").innerHTML = products.slice(4,7).map(p => `<div><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="badge badge-red" style="position:absolute;top:10px;left:10px">${p.discount}% OFF</span></div>`).join("");
      renderProducts();
      $("#categoryTabs").addEventListener("click", event => {
        const tab = event.target.closest(".tab");
        if (!tab) return;
        $$("#categoryTabs .tab").forEach(item => item.classList.remove("active"));
        tab.classList.add("active");
        state.category = tab.dataset.category;
        renderProducts();
      });
      $("#sortSelect").addEventListener("change", renderProducts);
      document.addEventListener("click", handleProductClicks);
    }
    function handleProductClicks(event) {
      const add = event.target.closest(".add-bag");
      const quick = event.target.closest(".quick-view");
      const wish = event.target.closest(".wishlist-toggle");
      const sizePick = event.target.closest("[data-card-size]");
      const colorPick = event.target.closest("[data-card-color]");
      const card = event.target.closest(".product-card");
      if (sizePick) {
        event.stopPropagation();
        $$(".card-size-picker button", card).forEach(button => button.classList.remove("active"));
        sizePick.classList.add("active");
      }
      else if (colorPick) {
        event.stopPropagation();
        $$(".card-color-picker button", card).forEach(button => button.classList.remove("active"));
        colorPick.classList.add("active");
      }
      else if (add) {
        event.stopPropagation();
        const parentCard = add.closest(".product-card");
        const selectedSize = parentCard ? $(".card-size-picker button.active", parentCard)?.dataset.cardSize : null;
        const selectedColor = parentCard ? $(".card-color-picker button.active", parentCard)?.dataset.cardColor : null;
        addToCart(Number(add.dataset.id), { size: selectedSize, color: selectedColor });
      }
      else if (quick) { event.stopPropagation(); openQuickView(Number(quick.dataset.id)); }
      else if (wish) { event.stopPropagation(); toggleWishlist(Number(wish.dataset.id)); }
      else if (card && event.target.closest(".product-media")) openQuickView(Number(card.dataset.productId));
    }

    /* ==================== FILTER DRAWER ==================== */
    function initFilters() {
      const sizes = ["XS","S","M","L","XL","XXL","6","7","8","9","10","11"];
      const colors = ["black","white","green","red","navy","cream"];
      $("#sizeFilters").innerHTML = sizes.map(size => `<label class="check-pill"><input type="checkbox" value="${size}"> ${size}</label>`).join("");
      $("#colorFilters").innerHTML = colors.map(color => `<button class="swatch" data-color="${color}" title="${color}" style="background:${cssColor(color)}"></button>`).join("");
      $("#filterOpen").addEventListener("click", () => openPanel("filterPanel"));
      $("#priceRange").addEventListener("input", event => $("#priceValue").textContent = event.target.value);
      $("#colorFilters").addEventListener("click", event => {
        const swatch = event.target.closest(".swatch");
        if (swatch) swatch.classList.toggle("active");
      });
      $("#applyFilters").addEventListener("click", () => {
        state.filters.price = Number($("#priceRange").value);
        state.filters.sizes = $$("#sizeFilters input:checked").map(input => input.value);
        state.filters.colors = $$("#colorFilters .swatch.active").map(button => button.dataset.color);
        state.filters.stock = $("#stockFilter").checked;
        state.filters.sale = $("#saleFilter").checked;
        state.filters.fresh = $("#newFilter").checked;
        renderProducts();
        closeAllOverlays();
      });
      $("#resetFilters").addEventListener("click", () => {
        state.filters = { price: 10000, sizes: [], colors: [], stock: false, sale: false, fresh: false };
        $("#priceRange").value = 10000; $("#priceValue").textContent = 10000;
        $$("#filterPanel input[type='checkbox']").forEach(input => input.checked = false);
        $$("#colorFilters .swatch").forEach(button => button.classList.remove("active"));
        renderProducts();
      });
    }
    function cssColor(color) {
      return ({ black: "#0a0a0a", white: "#f5f5f0", green: "#c8ff00", red: "#ff3c3c", navy: "#172554", cream: "#eadfca", purple: "#9b5de5", olive: "#556b2f", silver: "#c0c0c0" }[color] || "#888888");
    }

    /* ==================== CART EXPERIENCE ==================== */
    function addToCart(id, options = {}) {
      const product = products.find(p => p.id === id);
      if (!product || !product.inStock) return toast("SOLD OUT", product?.name || "", "error");
      const size = options.size || product.sizes[0];
      const color = options.color || product.colors[0];
      const existing = state.cart.find(item => item.id === id && item.size === size && item.color === color);
      if (existing) existing.qty += 1;
      else state.cart.push({ id, size, color, qty: 1 });
      persistCart();
      toast("ADDED TO BAG ✓", product.name);
      openPanel("cartPanel");
      clearTimeout(window.cartAutoClose);
      window.cartAutoClose = setTimeout(() => {
        if (!$("#cartPanel").matches(":hover")) closeAllOverlays();
      }, 3000);
    }
    function persistCart() {
      storage.set("tc_cart", state.cart);
      renderCart();
      bounceBadge("#cartCount");
    }
    function cartTotals() {
      const subtotal = state.cart.reduce((sum, item) => sum + products.find(p => p.id === item.id).price * item.qty, 0);
      const discount = state.promo ? Math.round(subtotal * state.promo.discount) : 0;
      const shipping = subtotal - discount >= 999 || subtotal === 0 ? 0 : 99;
      return { subtotal, discount, shipping, total: subtotal - discount + shipping };
    }
    function renderCart() {
      const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
      $("#cartCount").textContent = count;
      $("#cartTitle").textContent = `FIT BAG (${count})`;
      if (!state.cart.length) {
        $("#cartItems").innerHTML = `<div class="empty-state"><div><div class="emoji">🛍️</div><h3>Your bag is empty.</h3><button class="btn btn-primary" onclick="closeAllOverlays(); location.hash='shop'">Start Shopping</button></div></div>`;
        $("#cartFooter").innerHTML = "";
        return;
      }
      const totals = cartTotals();
      const freeTarget = 999;
      const freeProgress = Math.min(100, Math.round((totals.subtotal / freeTarget) * 100));
      const freeLeft = Math.max(0, freeTarget - totals.subtotal);
      $("#cartItems").innerHTML = state.cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return `<article class="cart-item">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <div class="cart-meta-row"><div><strong>${product.name}</strong><p style="color:var(--muted);margin:4px 0">${product.category === "shoes" ? "Shoe size" : "Size"} ${item.size} · ${item.color}</p></div><strong>${rupee(product.price * item.qty)}</strong></div>
            <div class="variant-row">
              <select class="variant-select" data-cart-size="${item.id}|${item.size}|${item.color}" aria-label="Change size">${product.sizes.map(size => `<option ${size === item.size ? "selected" : ""}>${size}</option>`).join("")}</select>
              <select class="variant-select" data-cart-color="${item.id}|${item.size}|${item.color}" aria-label="Change color">${product.colors.map(color => `<option ${color === item.color ? "selected" : ""}>${color}</option>`).join("")}</select>
            </div>
            <div class="cart-meta-row"><div class="qty-control"><button data-qty="${item.id}|${item.size}|${item.color}|-1">−</button><span>${item.qty}</span><button data-qty="${item.id}|${item.size}|${item.color}|1">+</button></div><button class="icon-btn" data-remove="${item.id}|${item.size}|${item.color}" aria-label="Remove item">×</button></div>
          </div>
        </article>`;
      }).join("");
      $("#cartFooter").innerHTML = `
        <div class="cart-progress"><strong>${freeLeft ? `${rupee(freeLeft)} away from free shipping` : "Free shipping unlocked"}</strong><div class="cart-progress-track"><div class="cart-progress-fill" style="transform:scaleX(${freeProgress / 100})"></div></div></div>
        <div class="promo-row"><input id="cartPromo" placeholder="Promo code" value="${state.promo?.code || ""}"><button class="btn" id="cartPromoApply">Apply</button></div>
        <div class="totals-row"><span>Subtotal</span><strong>${rupee(totals.subtotal)}</strong></div>
        ${totals.discount ? `<div class="totals-row"><span>Discount</span><strong>- ${rupee(totals.discount)}</strong></div>` : ""}
        <div class="totals-row"><span>Shipping</span><strong>${totals.shipping ? rupee(totals.shipping) : "FREE"}</strong></div>
        <div class="totals-row" style="font-size:20px"><span>Total</span><strong>${rupee(totals.total)}</strong></div>
        <button class="btn btn-primary" id="checkoutNow" style="width:100%">Checkout Now →</button>
        <p style="color:var(--muted);font-size:12px">UPI · Visa · Mastercard · Rupay · COD</p>`;
    }
    function initCart() {
      $("#cartOpen").addEventListener("click", () => openPanel("cartPanel"));
      $("#cartPanel").addEventListener("click", event => {
        const qty = event.target.dataset.qty;
        const remove = event.target.dataset.remove;
        if (qty) {
          const [id, size, color, delta] = qty.split("|");
          const item = state.cart.find(i => i.id == id && i.size === size && i.color === color);
          item.qty += Number(delta);
          if (item.qty <= 0) state.cart = state.cart.filter(i => i !== item);
          persistCart();
        }
        if (remove) {
          const [id, size, color] = remove.split("|");
          state.cart = state.cart.filter(i => !(i.id == id && i.size === size && i.color === color));
          persistCart();
          toast("REMOVED FROM BAG");
        }
        const sizeSelect = event.target.dataset.cartSize;
        const colorSelect = event.target.dataset.cartColor;
        if (sizeSelect || colorSelect) {
          const [id, size, color] = (sizeSelect || colorSelect).split("|");
          const item = state.cart.find(i => i.id == id && i.size === size && i.color === color);
          if (item) {
            if (sizeSelect) item.size = event.target.value;
            if (colorSelect) item.color = event.target.value;
            persistCart();
          }
        }
        if (event.target.id === "cartPromoApply") applyPromo($("#cartPromo").value);
        if (event.target.id === "checkoutNow") openCheckout();
      });
      renderCart();
    }
    function applyPromo(code) {
      const clean = code.trim().toUpperCase();
      const promos = { CULTURE10: 0.10, FREESHIP: 0, TRENDYDAY: 0.25 };
      if (!(clean in promos)) return toast("INVALID CODE - try again", "", "error");
      state.promo = { code: clean, discount: promos[clean] };
      storage.set("tc_promo", state.promo);
      renderCart();
      renderCheckoutSummary();
      toast(`COUPON APPLIED - ${clean === "FREESHIP" ? "FREE SHIPPING" : `${Math.round(promos[clean] * 100)}% OFF`}!`);
    }
    function bounceBadge(selector) {
      const badge = $(selector);
      badge.classList.remove("bump");
      requestAnimationFrame(() => badge.classList.add("bump"));
    }

    /* ==================== WISHLIST ==================== */
    function toggleWishlist(id) {
      if (state.wishlist.includes(id)) {
        state.wishlist = state.wishlist.filter(item => item !== id);
        toast("REMOVED FROM WISHLIST");
      } else {
        state.wishlist.push(id);
        toast("MOVED TO WISHLIST ♡", products.find(p => p.id === id).name);
      }
      storage.set("tc_wishlist", state.wishlist);
      renderWishlist();
      bounceBadge("#wishlistCount");
    }
    function renderWishlist() {
      $("#wishlistCount").textContent = state.wishlist.length;
      $("#wishlistTitle").textContent = `SAVED FITS (${state.wishlist.length})`;
      if (!state.wishlist.length) {
        $("#wishlistItems").innerHTML = `<div class="empty-state"><div><h3>Saved fits is your moodboard.</h3><p>Tap hearts on products and build the next drop-level outfit.</p><button class="btn btn-primary" onclick="closeAllOverlays(); location.hash='shop'">Explore Shop</button></div></div>`;
        return;
      }
      $("#wishlistItems").innerHTML = `<div class="mini-game-card"><strong>Saved Fit Perk</strong><p style="color:var(--muted)">Save 3 fits and unlock a secret styling coupon.</p><div class="cart-progress-track"><div class="cart-progress-fill" style="transform:scaleX(${Math.min(1, state.wishlist.length / 3)})"></div></div></div><div class="wishlist-grid">` + state.wishlist.map(id => {
        const product = products.find(p => p.id === id);
        return `<article class="wishlist-item">
          <img src="${product.image}" alt="${product.name}">
          <button class="icon-btn" data-unwish="${id}" style="position:absolute;top:10px;right:10px" aria-label="Remove saved fit">×</button>
          <div class="wishlist-meta-row"><strong>${product.name}</strong><span>${rupee(product.price)}</span></div>
          <p style="color:var(--muted);margin:6px 0">${product.category} · ${product.inStock ? "ready to ship" : "sold out"}</p>
          <select class="variant-select" data-wish-size="${id}" aria-label="Choose size before moving to bag">${product.sizes.map(size => `<option>${size}</option>`).join("")}</select>
          <div class="wishlist-actions">${product.inStock ? `<button class="btn btn-primary" data-move="${id}">Move To Bag</button><button class="btn" data-quick="${id}">Style Details</button>` : `<button class="btn" data-notify="${id}">Sold Out - Notify Me</button>`}</div>
        </article>`;
      }).join("") + `</div>`;
    }
    function initWishlist() {
      $("#wishlistOpen").addEventListener("click", () => openPanel("wishlistPanel"));
      $("#wishlistPanel").addEventListener("click", event => {
        if (event.target.dataset.move) {
          const card = event.target.closest(".wishlist-item");
          const size = $(".variant-select", card)?.value;
          addToCart(Number(event.target.dataset.move), { size });
        }
        if (event.target.dataset.quick) openQuickView(Number(event.target.dataset.quick));
        if (event.target.dataset.unwish) toggleWishlist(Number(event.target.dataset.unwish));
        if (event.target.dataset.notify) openPlainModal(`<h2 class="section-title" style="font-size:58px">NOTIFY ME</h2><div class="field"><label>Email</label><input type="email" placeholder="you@email.com"></div><button class="btn btn-primary" onclick="closeAllOverlays(); toast('WE WILL PING YOU', 'When this fit returns.')">Notify Me</button>`);
      });
      renderWishlist();
    }

    /* ==================== QUICK VIEW POPUP ==================== */
    function openQuickView(id) {
      const product = products.find(p => p.id === id);
      const related = products.filter(p => p.category === product.category && p.id !== id).slice(0, 3);
      $("#quickModal").innerHTML = `
        <button class="modal-close" aria-label="Close quick view">×</button>
        <div class="quick-content">
          <div>
            <img class="quick-main-img" id="quickMainImg" src="${product.image}" alt="${product.name}">
            <div class="thumb-row">
              ${[product.image, altImage(product), product.image.replace(/random=\d+/, `random=${product.id + 200}`)].map(src => `<img src="${src}" alt="${product.name} thumbnail" data-thumb="${src}">`).join("")}
            </div>
          </div>
          <div>
            <span class="badge">${product.category}</span>
            <h2 class="section-title" style="font-size:clamp(48px,7vw,78px)">${product.name}</h2>
            <p class="rating">★ ${product.rating} (${product.reviews} reviews)</p>
            <div class="price-row"><span class="sale-price">${rupee(product.price)}</span><span class="old-price">${rupee(product.originalPrice)}</span><span class="discount-pill">${product.discount}% OFF</span></div>
            <h4>Color</h4><div class="option-row color-options">${product.colors.map((color, index) => `<button class="color-dot ${index === 0 ? "active" : ""}" data-color="${color}" title="${color}" style="background:${cssColor(color.split('/')[0])}"></button>`).join("")}</div>
            <h4>Size</h4><div class="option-row size-options">${product.sizes.map((size, index) => `<button class="select-pill ${index === 0 ? "active" : ""}" data-size="${size}">${size}</button>`).join("")}</div>
            <button class="view-all" id="sizeGuide">SIZE GUIDE →</button>
            <h4>Quantity</h4><div class="qty-control" style="margin-bottom:16px"><button id="qMinus">−</button><span id="quickQty">1</span><button id="qPlus">+</button></div>
            <button class="btn btn-primary" id="quickAdd" data-id="${product.id}" style="width:100%" ${!product.inStock ? "disabled" : ""}>Add To Bag</button>
            <button class="btn" id="quickWish" data-id="${product.id}" style="width:100%;margin-top:10px">Add To Wishlist</button>
            <p class="section-subtitle">Free shipping above ₹999 • Estimated delivery 3-5 days</p>
            <p>${product.description}</p>
            <p><button class="btn" id="copyLink">Copy Link</button> <a class="btn" target="_blank" rel="noreferrer" href="https://wa.me/?text=${encodeURIComponent(product.name + " from TrendyCulture")}">WhatsApp Share</a></p>
            <h4>YOU MIGHT ALSO LIKE</h4><div class="related-row">${related.map(item => `<div class="related-mini" data-related="${item.id}"><img src="${item.image}" alt="${item.name}"><p>${item.name}</p></div>`).join("")}</div>
          </div>
        </div>`;
      $("#quickLayer").classList.add("is-open");
      document.body.classList.add("modal-open");
    }
    function initQuickView() {
      $("#quickLayer").addEventListener("click", event => {
        if (event.target.id === "quickLayer" || event.target.closest(".modal-close")) closeAllOverlays();
        const thumb = event.target.dataset.thumb;
        if (thumb) $("#quickMainImg").src = thumb;
        const color = event.target.closest(".color-dot");
        if (color) { $$(".color-dot", $("#quickModal")).forEach(b => b.classList.remove("active")); color.classList.add("active"); }
        const size = event.target.closest(".select-pill");
        if (size) { $$(".select-pill", $("#quickModal")).forEach(b => b.classList.remove("active")); size.classList.add("active"); }
        if (event.target.id === "qPlus") $("#quickQty").textContent = Number($("#quickQty").textContent) + 1;
        if (event.target.id === "qMinus") $("#quickQty").textContent = Math.max(1, Number($("#quickQty").textContent) - 1);
        if (event.target.id === "quickAdd") {
          const qty = Number($("#quickQty").textContent);
          for (let i = 0; i < qty; i++) addToCart(Number(event.target.dataset.id), { size: $(".select-pill.active", $("#quickModal")).dataset.size, color: $(".color-dot.active", $("#quickModal")).dataset.color });
        }
        if (event.target.id === "quickWish") toggleWishlist(Number(event.target.dataset.id));
        if (event.target.id === "sizeGuide") openSizeGuide();
        if (event.target.id === "copyLink") { navigator.clipboard?.writeText(location.href); toast("LINK COPIED"); }
        if (event.target.dataset.related) openQuickView(Number(event.target.dataset.related));
      });
      document.addEventListener("keydown", event => { if (event.key === "Escape") closeAllOverlays(); });
    }
    function openSizeGuide() {
      openPlainModal(`<h2 class="section-title" style="font-size:58px">SIZE GUIDE</h2><table style="width:100%;border-collapse:collapse"><tr><th>Size</th><th>Chest</th><th>Length</th><th>Shoe CM</th></tr><tr><td>S / 7</td><td>38</td><td>27</td><td>25.5</td></tr><tr><td>M / 8</td><td>40</td><td>28</td><td>26.5</td></tr><tr><td>L / 9</td><td>42</td><td>29</td><td>27.5</td></tr><tr><td>XL / 10</td><td>44</td><td>30</td><td>28.5</td></tr></table><button class="btn btn-primary" onclick="closeAllOverlays()">Got It</button>`);
    }
    function openPlainModal(html) {
      $("#plainModal").innerHTML = `<button class="modal-close" onclick="closeAllOverlays()">×</button>${html}`;
      $("#plainModalLayer").classList.add("is-open");
      document.body.classList.add("modal-open");
    }

    /* ==================== SEARCH EXPERIENCE ==================== */
    function initSearch() {
      $("#searchOpen").addEventListener("click", () => {
        $("#searchBar").classList.add("is-open");
        $("#searchInput").focus();
        renderSearch("");
      });
      $("#searchClose").addEventListener("click", () => $("#searchBar").classList.remove("is-open"));
      $("#searchInput").addEventListener("input", event => renderSearch(event.target.value));
      $("#searchInput").addEventListener("keydown", event => {
        if (event.key === "Enter") {
          state.search = event.target.value;
          $("#searchBar").classList.remove("is-open");
          location.hash = "shop";
          renderProducts();
        }
      });
      $("#searchResults").addEventListener("click", event => {
        const tag = event.target.dataset.tag;
        const add = event.target.dataset.searchAdd;
        if (tag) { $("#searchInput").value = tag; renderSearch(tag); }
        if (add) addToCart(Number(add));
      });
      $$("[data-route-category]").forEach(link => link.addEventListener("click", () => {
        state.category = link.dataset.routeCategory;
        $$("#categoryTabs .tab").forEach(tab => tab.classList.toggle("active", tab.dataset.category === state.category));
        renderProducts();
      }));
    }
    function renderSearch(query) {
      if (!query) {
        $("#searchResults").innerHTML = `<p class="section-label">Search by product, category, style, or size</p><p class="section-subtitle" style="margin-bottom:16px">Try "shoe 9", "linen shirt", "black tee", or tap a shortcut.</p><div class="trending-tags">${["Oversized Tee","White Shirt","Foam Slides","Graphic Tee","Shoe Size 9","Camp Shirt"].map(tag => `<button class="tag" data-tag="${tag}">${tag}</button>`).join("")}</div>`;
        return;
      }
      if (query.length < 2) return;
      const matches = products.filter(p => `${p.name} ${p.category} ${p.sizes.join(" ")} ${p.colors.join(" ")}`.toLowerCase().includes(query.toLowerCase()));
      if (!matches.length) {
        $("#searchResults").innerHTML = `<p>No fits found for "${query}"</p><a class="view-all" href="#shop">TRY BROWSING THE FULL SHOP →</a>`;
        return;
      }
      $("#searchResults").innerHTML = ["shoes","tees","shirts"].map(cat => {
        const group = matches.filter(p => p.category === cat);
        if (!group.length) return "";
        return `<div class="search-group-title">${cat}</div>${group.map(p => `<div class="search-item"><img src="${p.image}" alt="${p.name}"><div><strong>${p.name}</strong><p style="margin:3px 0;color:var(--muted)">${p.category} · ${rupee(p.price)}</p></div><button class="btn btn-primary" data-search-add="${p.id}">Add To Bag</button></div>`).join("")}`;
      }).join("");
    }

    /* ==================== BANNERS AND COUNTDOWNS ==================== */
    function initBannersAndTimers() {
      const dots = $("#bannerDots");
      dots.innerHTML = [0,1,2].map(i => `<button aria-label="Go to banner ${i+1}" data-banner="${i}" class="${i === 0 ? "active" : ""}"></button>`).join("");
      const setBanner = index => {
        state.bannerIndex = (index + 3) % 3;
        $("#bannerTrack").style.transform = `translateX(-${state.bannerIndex * 100}%)`;
        $$("#bannerDots button").forEach((dot, i) => dot.classList.toggle("active", i === state.bannerIndex));
      };
      $("#bannerPrev").addEventListener("click", () => setBanner(state.bannerIndex - 1));
      $("#bannerNext").addEventListener("click", () => setBanner(state.bannerIndex + 1));
      dots.addEventListener("click", event => { if (event.target.dataset.banner) setBanner(Number(event.target.dataset.banner)); });
      setInterval(() => setBanner(state.bannerIndex + 1), 5000);
      const end = Date.now() + 24 * 60 * 60 * 1000;
      setInterval(() => {
        const left = Math.max(0, end - Date.now());
        const h = String(Math.floor(left / 3600000)).padStart(2, "0");
        const m = String(Math.floor(left / 60000) % 60).padStart(2, "0");
        const s = String(Math.floor(left / 1000) % 60).padStart(2, "0");
        $("#flashTimer").textContent = `${h}:${m}:${s}`;
        $("#bannerCountdown").textContent = `Ends in ${h}:${m}:${s}`;
      }, 1000);
    }

    /* ==================== PROMO COPY BUTTONS ==================== */
    function initPromoCards() {
      $$(".copy-code").forEach(button => {
        button.addEventListener("click", () => {
          navigator.clipboard?.writeText(button.dataset.code);
          button.textContent = "COPIED ✓";
          button.classList.add("btn-primary", "copy-pop");
          toast("COUPON COPIED", button.dataset.code);
          setTimeout(() => { button.textContent = "Tap To Copy"; button.classList.remove("btn-primary", "copy-pop"); }, 1700);
        });
      });
    }

    /* ==================== SPIN WHEEL GAME ==================== */
    function initWheel() {
      const canvas = $("#wheelCanvas");
      const ctx = canvas.getContext("2d");
      const segments = ["10% OFF","FREE SHIPPING","15% OFF","₹100 OFF","5% OFF","20% OFF","25% OFF","TRY AGAIN"];
      const colors = ["#c8ff00","#f5f5f0","#9b5de5","#ff3c3c","#2a2a2a","#c8ff00","#f5f5f0","#9b5de5"];
      let rotation = 0;
      function drawWheel() {
        const cx = canvas.width / 2, cy = canvas.height / 2, radius = cx - 10;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        segments.forEach((text, i) => {
          const start = rotation + i * Math.PI * 2 / segments.length;
          const end = start + Math.PI * 2 / segments.length;
          ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, radius, start, end); ctx.closePath();
          ctx.fillStyle = colors[i]; ctx.fill();
          ctx.save(); ctx.translate(cx, cy); ctx.rotate(start + (end - start) / 2); ctx.textAlign = "right"; ctx.fillStyle = i === 0 || i === 4 || i === 5 ? "#0a0a0a" : "#0a0a0a"; ctx.font = "800 18px Space Grotesk"; ctx.fillText(text, radius - 22, 6); ctx.restore();
        });
        ctx.beginPath(); ctx.arc(cx, cy, 44, 0, Math.PI * 2); ctx.fillStyle = "#0a0a0a"; ctx.fill();
        ctx.fillStyle = "#c8ff00"; ctx.font = "800 26px Space Grotesk"; ctx.textAlign = "center"; ctx.fillText("TC", cx, cy + 8);
      }
      drawWheel();
      if (sessionStorage.getItem("tc_spun")) $("#spinButton").textContent = "ALREADY SPUN - COME BACK TOMORROW 😎";
      $("#spinButton").addEventListener("click", () => {
        if (sessionStorage.getItem("tc_spun")) return;
        const target = Math.random() * Math.PI * 2 + Math.PI * 12;
        const start = performance.now();
        function animate(now) {
          const t = Math.min(1, (now - start) / 4000);
          const eased = 1 - Math.pow(1 - t, 4);
          rotation = target * eased;
          drawWheel();
          if (t < 1) requestAnimationFrame(animate);
          else {
            sessionStorage.setItem("tc_spun", "true");
            $("#spinButton").textContent = "ALREADY SPUN - COME BACK TOMORROW 😎";
            const reward = randomFrom(segments);
            openPlainModal(reward === "TRY AGAIN"
              ? `<h2 class="section-title" style="font-size:62px">NAH FAM</h2><p class="section-subtitle">Luck wasn't it. Come back tomorrow.</p><button class="btn" onclick="closeAllOverlays()">Close</button>`
              : `<h2 class="section-title" style="font-size:62px">YOU WON ${reward}</h2><p class="section-subtitle">Code: TC${Math.floor(1000 + Math.random()*9000)}</p><button class="btn btn-primary" onclick="closeAllOverlays(); toast('REWARD APPLIED')">Apply To Bag</button>`);
          }
        }
        requestAnimationFrame(animate);
      });
    }

    /* ==================== SCRATCH CARD GAME ==================== */
    function initScratchCards() {
      const rewards = ["10% OFF", "Better luck next time", "Free Delivery"].sort(() => Math.random() - 0.5);
      $("#scratchGrid").innerHTML = rewards.map((reward, index) => `<div class="scratch-card"><span>${reward}</span><canvas width="300" height="180" data-reward="${reward}" data-index="${index}"></canvas></div>`).join("");
      $$("#scratchGrid canvas").forEach(canvas => setupScratch(canvas));
      initMysteryBoxes();
    }
    function initMysteryBoxes() {
      $("#mysteryBoxes").addEventListener("click", event => {
        const box = event.target.closest("[data-box]");
        if (!box) return;
        if (sessionStorage.getItem("tc_mystery_box")) return toast("MYSTERY BOX USED", "Come back next session.", "info");
        sessionStorage.setItem("tc_mystery_box", "true");
        const prize = randomFrom(["STYLE10 - 10% OFF", "FASTSHIP - EXPRESS UPGRADE", "SOCKDROP - FREE ADD-ON", "TRY AGAIN - THE BOX WAS EMPTY"]);
        box.classList.add("active");
        openPlainModal(`<h2 class="section-title" style="font-size:58px">${prize.includes("TRY") ? "EMPTY BOX" : "MYSTERY UNLOCKED"}</h2><p class="section-subtitle">${prize}</p><button class="btn btn-primary" onclick="closeAllOverlays(); toast('PERK READY', '${prize}')">Use Perk</button>`);
      });
    }
    function setupScratch(canvas) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#888888"; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#2a2a2a"; ctx.font = "800 22px Space Grotesk"; ctx.textAlign = "center"; ctx.fillText("SCRATCH", canvas.width / 2, canvas.height / 2);
      let scratching = false, revealed = false;
      const scratch = event => {
        if (sessionStorage.getItem("tc_scratched") && !revealed) return toast("ONE SCRATCH PER SESSION", "", "info");
        const rect = canvas.getBoundingClientRect();
        const x = ((event.touches?.[0]?.clientX ?? event.clientX) - rect.left) * canvas.width / rect.width;
        const y = ((event.touches?.[0]?.clientY ?? event.clientY) - rect.top) * canvas.height / rect.height;
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath(); ctx.arc(x, y, 24, 0, Math.PI * 2); ctx.fill();
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let clear = 0;
        for (let i = 3; i < pixels.length; i += 4) if (pixels[i] === 0) clear++;
        if (!revealed && clear / (pixels.length / 4) > 0.34) {
          revealed = true;
          sessionStorage.setItem("tc_scratched", "true");
          const reward = canvas.dataset.reward;
          openPlainModal(`<h2 class="section-title" style="font-size:58px">${reward.includes("Better") ? "BETTER LUCK NEXT TIME" : `YOU GOT ${reward}`}</h2><button class="btn btn-primary" onclick="closeAllOverlays(); toast('SCRATCH REWARD READY')">Apply To Cart</button>`);
        }
      };
      canvas.addEventListener("pointerdown", event => { scratching = true; scratch(event); });
      canvas.addEventListener("pointermove", event => { if (scratching) scratch(event); });
      window.addEventListener("pointerup", () => scratching = false);
    }

    /* ==================== LOOKBOOK AND STATIC CONTENT RENDERING ==================== */
    function initContentSections() {
      const modelLooks = [
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
      ];
      $("#lookbookGrid").innerHTML = modelLooks.map((src, i) => `<div class="look" data-look="${(i % products.length) + 1}"><img src="${src}" alt="Real model wearing TrendyCulture-inspired streetwear look ${i + 1}" loading="lazy"></div>`).join("");
      $("#lookbookGrid").addEventListener("click", event => {
        const look = event.target.closest(".look");
        if (look) openQuickView(Number(look.dataset.look));
      });
      $("#lifeGrid").innerHTML = Array.from({ length: 6 }, (_, i) => `<div><img src="https://picsum.photos/420/280?random=${160+i}" alt="Life at TrendyCulture ${i+1}" loading="lazy"><span>${["Ship fast, learn faster.","No fake corporate energy.","Every pixel gets respect.","The customer is in the room.","Culture is the calendar.","Details make the drop."][i]}</span></div>`).join("");
      $("#teamGrid").innerHTML = [
        ["Aisha Rao","Founder","Turns moodboards into sellout drops."],
        ["Kabir Mehta","Creative Lead","Can spot a weak fit from another pin code."],
        ["Naina Shah","Ops Head","Makes shipping feel suspiciously smooth."],
        ["Rey D'Souza","Community","Knows what the culture wants before the dashboard does."]
      ].map((m, i) => `<article class="team-card"><img class="avatar" src="https://picsum.photos/120?random=${180+i}" alt="${m[0]}"><h3>${m[0]}</h3><p class="section-label">${m[1]}</p><p>${m[2]}</p><a class="view-all" href="#">LinkedIn →</a></article>`).join("");
    }

    /* ==================== HOME FIT ASSISTANT POPUP ==================== */
    function initFitAssistant() {
      const open = () => openPlainModal(`<h2 class="section-title" style="font-size:58px">WHAT ARE YOU BUILDING?</h2><p class="section-subtitle">Pick a lane and I’ll take you straight there.</p><div class="assistant-grid">
        <button data-assist-category="tees">Oversized tee fit<span>Graphic, blank, washed, daily wear.</span></button>
        <button data-assist-category="shirts">Date-night shirt<span>Linen, camp collar, satin, flannel.</span></button>
        <button data-assist-category="shoes">Shoe size run<span>Runners, slides, high courts.</span></button>
        <button data-assist-action="deal">I want a discount<span>Open games and codes.</span></button>
      </div>`);
      $("#fitAssistantOpen").addEventListener("click", open);
      $("#fitAssistantFab").addEventListener("click", open);
      $("#plainModalLayer").addEventListener("click", event => {
        const category = event.target.closest("[data-assist-category]");
        const action = event.target.closest("[data-assist-action]");
        if (category) {
          state.category = category.dataset.assistCategory;
          $$("#categoryTabs .tab").forEach(tab => tab.classList.toggle("active", tab.dataset.category === state.category));
          renderProducts();
          closeAllOverlays();
          location.hash = "shop";
        }
        if (action) {
          closeAllOverlays();
          location.hash = "games";
        }
      });
    }

    /* ==================== REVIEWS SECTION ==================== */
    function renderReviews() {
      let list = reviews.filter(r => state.reviewRating === "all" || r.rating == state.reviewRating);
      if ($("#reviewSort").value === "Most Helpful") list = list.sort((a,b) => b.helpful - a.helpful);
      if ($("#reviewSort").value === "Verified Only") list = list.filter(r => r.verified);
      $("#reviewsList").innerHTML = list.slice(0, state.reviewLimit).map(r => `<article class="review-card">
        <div class="review-head"><div class="initials">${r.initials}</div><div><strong>${r.name}</strong><p style="margin:3px 0;color:var(--muted)">${r.date} ${r.verified ? "· VERIFIED PURCHASE ✓" : ""}</p></div></div>
        <div class="rating">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div>
        <h3>${r.title}</h3><p>${r.body}</p><p class="section-label">${r.product}</p>
        <button class="tag helpful" data-helpful="${r.id}">HELPFUL? 👍 YES (<span>${r.helpful}</span>)</button> <button class="tag">👎 NO (2)</button>
      </article>`).join("");
      $("#loadMoreReviews").style.display = state.reviewLimit >= list.length ? "none" : "inline-flex";
    }
    function initReviews() {
      renderReviews();
      $("#reviewFilters").addEventListener("click", event => {
        const tab = event.target.closest(".tab");
        if (!tab) return;
        $$("#reviewFilters .tab").forEach(item => item.classList.remove("active"));
        tab.classList.add("active");
        state.reviewRating = tab.dataset.rating;
        state.reviewLimit = 4;
        renderReviews();
      });
      $("#reviewSort").addEventListener("change", renderReviews);
      $("#loadMoreReviews").addEventListener("click", () => { state.reviewLimit += 4; renderReviews(); });
      $("#reviewsList").addEventListener("click", event => {
        const btn = event.target.closest(".helpful");
        if (btn && !btn.dataset.clicked) {
          btn.dataset.clicked = "true";
          const span = $("span", btn);
          span.textContent = Number(span.textContent) + 1;
          btn.classList.add("copy-pop");
        }
      });
      $("#writeReviewOpen").addEventListener("click", openReviewModal);
    }
    function openReviewModal() {
      openPlainModal(`<h2 class="section-title" style="font-size:58px">WRITE A REVIEW</h2>
        <form id="reviewForm" novalidate>
          <div class="field"><label>Rating</label><div id="starSelect" style="font-size:32px;color:var(--accent);cursor:pointer" data-rating="5">★★★★★</div><small></small></div>
          <div class="field"><label>Name</label><input required name="name"><small></small></div>
          <div class="field"><label>Email</label><input required type="email" name="email"><small></small></div>
          <div class="field"><label>Which product?</label><select required>${products.map(p => `<option>${p.name}</option>`).join("")}</select><small></small></div>
          <div class="field"><label>Review title</label><input required><small></small></div>
          <div class="field"><label>Review body</label><textarea required></textarea><small></small></div>
          <button class="btn btn-primary" type="submit">Submit Review</button>
        </form>`);
      $("#reviewForm").addEventListener("submit", event => {
        event.preventDefault();
        if (!validateForm(event.target)) return;
        closeAllOverlays();
        toast("YOUR REVIEW IS LIVE 🔥");
      });
    }

    /* ==================== CAREERS SECTION ==================== */
    function initCareers() {
      $("#jobsList").innerHTML = jobs.map(job => `<article class="job-card" data-job="${job.id}">
        <div class="job-head"><div><h3>${job.title}</h3><p><span class="badge">${job.department}</span> <span class="tag">${job.location}</span> <span class="tag">${job.type}</span></p></div><button class="btn apply-job" data-apply="${job.id}">Apply Now →</button></div>
        <div class="job-details"><p>${job.description}</p><strong>Requirements</strong><ul>${job.requirements.map(r => `<li>${r}</li>`).join("")}</ul><strong>Responsibilities</strong><ul>${job.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul><button class="btn btn-primary apply-job" data-apply="${job.id}">Apply Now →</button></div>
      </article>`).join("");
      $("#jobsList").addEventListener("click", event => {
        const apply = event.target.closest(".apply-job");
        if (apply) { event.stopPropagation(); openApplyModal(Number(apply.dataset.apply)); return; }
        const card = event.target.closest(".job-card");
        if (card) card.classList.toggle("is-open");
      });
    }
    function openApplyModal(id) {
      const job = jobs.find(j => j.id === id);
      openPlainModal(`<h2 class="section-title" style="font-size:58px">APPLY FOR ${job.title}</h2>
        <form id="applyForm" novalidate>
          <div class="field"><label>Full Name</label><input required><small></small></div>
          <div class="field"><label>Email</label><input type="email" required><small></small></div>
          <div class="field"><label>Phone</label><input required><small></small></div>
          <div class="field"><label>LinkedIn Profile URL</label><input type="url"><small></small></div>
          <div class="field"><label>Portfolio/Website URL</label><input type="url"><small></small></div>
          <div class="field"><label>Upload Resume</label><input type="file" id="resumeFile"><small></small></div>
          <div class="field"><label>Tell us why you. Don't be boring.</label><textarea required></textarea><small></small></div>
          <button class="btn btn-primary" type="submit">Submit Application</button>
        </form>`);
      $("#applyForm").addEventListener("submit", event => {
        event.preventDefault();
        if (!validateForm(event.target)) return;
        $("#plainModal").innerHTML = `<h2 class="section-title" style="font-size:58px">APPLICATION RECEIVED 🎉</h2><p class="section-subtitle">We'll be in touch.</p><button class="btn btn-primary" onclick="closeAllOverlays()">Done</button>`;
      });
    }

    /* ==================== CHECKOUT MULTI-STEP ==================== */
    function openCheckout() {
      if (!state.cart.length) return toast("YOUR BAG IS EMPTY", "", "error");
      closeAllOverlays();
      $("#siteContent").style.display = "none";
      $("footer").style.display = "none";
      $("#checkout").classList.add("is-active");
      scrollTo(0, 0);
      renderCheckoutSummary();
    }
    function renderCheckoutSummary() {
      if (!$("#confirmSummary")) return;
      $("#confirmSummary").innerHTML = `<h3>Order Summary</h3>${state.cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return `<div class="totals-row"><span>${product.name} · ${item.size} × ${item.qty}</span><strong>${rupee(product.price * item.qty)}</strong></div>`;
      }).join("")}`;
      const totals = cartTotals();
      $("#confirmTotals").innerHTML = `<div class="totals-row"><span>Subtotal</span><strong>${rupee(totals.subtotal)}</strong></div>${totals.discount ? `<div class="totals-row"><span>Discount</span><strong>- ${rupee(totals.discount)}</strong></div>` : ""}<div class="totals-row"><span>Delivery</span><strong>${totals.shipping ? rupee(totals.shipping) : "FREE"}</strong></div><div class="totals-row" style="font-size:24px"><span>Total</span><strong>${rupee(totals.total)}</strong></div>`;
    }
    function setCheckoutStep(step) {
      state.checkoutStep = step;
      $$(".checkout-step").forEach(panel => panel.classList.toggle("active", Number(panel.dataset.step) === step));
      $$("#checkoutProgress .step-pill").forEach((pill, index) => {
        pill.classList.toggle("active", index + 1 === step);
        pill.classList.toggle("done", index + 1 < step);
        if (index + 1 < step) pill.textContent = `✓ ${["YOU","DELIVERY","CONFIRM"][index]}`;
      });
    }
    function initCheckout() {
      $("#checkoutLogo").addEventListener("click", event => {
        event.preventDefault();
        $("#siteContent").style.display = "";
        $("footer").style.display = "";
        $("#checkout").classList.remove("is-active");
      });
      $$(".next-step").forEach(btn => btn.addEventListener("click", () => {
        const current = $(`.checkout-step[data-step="${state.checkoutStep}"]`);
        if (validateForm(current)) setCheckoutStep(state.checkoutStep + 1);
      }));
      $$("[data-back]").forEach(btn => btn.addEventListener("click", () => setCheckoutStep(Number(btn.dataset.back))));
      $("#pincode").addEventListener("input", event => { if (event.target.value.length === 6) $("#city").value = "Mumbai"; });
      $$("input[name='payment']").forEach(input => input.addEventListener("change", () => {
        $$(".payment-fields").forEach(group => group.classList.toggle("is-open", group.dataset.pay === input.value));
      }));
      $("#cardNumber").addEventListener("input", event => event.target.value = event.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim().slice(0, 19));
      $("#cardExpiry").addEventListener("input", event => event.target.value = event.target.value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "$1/$2").slice(0, 5));
      $("#checkoutPromoApply").addEventListener("click", () => applyPromo($("#checkoutPromo").value));
      $("#checkoutForm").addEventListener("submit", event => {
        event.preventDefault();
        const btn = $("#placeOrder");
        btn.textContent = "Placing order...";
        setTimeout(() => showOrderSuccess(), 1200);
      });
      $("#continueShopping").addEventListener("click", () => {
        $("#orderSuccess").classList.remove("is-open");
        $("#siteContent").style.display = "";
        $("footer").style.display = "";
        $("#checkout").classList.remove("is-active");
        state.cart = [];
        persistCart();
        location.hash = "shop";
      });
      $("#trackOrder").addEventListener("click", () => $("#orderSuccess").classList.remove("is-open"));
    }
    function showOrderSuccess() {
      const id = `#TC892${Math.floor(100000 + Math.random() * 900000)}`;
      const date = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
      $("#orderMeta").textContent = `Order ID: ${id} · Estimated delivery: ${date}`;
      $("#orderSuccess").classList.add("is-open");
      runConfetti();
    }
    function runConfetti() {
      const canvas = $("#confettiCanvas"), ctx = canvas.getContext("2d");
      canvas.width = innerWidth; canvas.height = innerHeight;
      const pieces = Array.from({ length: 150 }, () => ({ x: Math.random()*canvas.width, y: -20, s: Math.random()*6+3, v: Math.random()*4+2, c: randomFrom(["#c8ff00","#ff3c3c","#9b5de5","#f5f5f0"]) }));
      let frames = 0;
      function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        pieces.forEach(p => { p.y += p.v; p.x += Math.sin((p.y + p.s) / 25); ctx.fillStyle = p.c; ctx.fillRect(p.x, p.y, p.s, p.s * 1.6); });
        if (frames++ < 220) requestAnimationFrame(animate);
      }
      animate();
    }

    /* ==================== FORM VALIDATION ==================== */
    function validateForm(scope) {
      let ok = true;
      $$("input, select, textarea", scope).forEach(input => {
        if (input.type === "file" || input.closest(".payment-fields:not(.is-open)")) return;
        const field = input.closest(".field");
        if (!field) return;
        const invalid = input.hasAttribute("required") && !input.value.trim() || input.type === "email" && input.value && !/^\S+@\S+\.\S+$/.test(input.value);
        field.classList.toggle("is-error", invalid);
        field.classList.toggle("is-valid", !invalid && Boolean(input.value));
        $("small", field).textContent = invalid ? "This field needs a real answer." : "";
        if (invalid) ok = false;
      });
      return ok;
    }
    function initForms() {
      document.addEventListener("blur", event => {
        if (event.target.matches("input, select, textarea")) validateForm(event.target.closest("form") || document);
      }, true);
      $("#contactForm").addEventListener("submit", event => {
        event.preventDefault();
        if (!validateForm(event.target)) return;
        $("#contactSuccess").style.display = "block";
        toast("MESSAGE SENT");
      });
      $("#newsletterForm").addEventListener("submit", event => {
        event.preventDefault();
        $("#newsletterSuccess").style.display = "block";
        event.target.querySelector("button").textContent = "YOU'RE IN. 🔥";
        runMiniConfetti();
        toast("SUBSCRIBED! YOU'RE IN THE CULTURE 🎉");
      });
      $("#emailCopy").addEventListener("click", event => {
        event.preventDefault();
        navigator.clipboard?.writeText("hey@trendyculture.com");
        toast("EMAIL COPIED");
      });
      $("#footerSizeGuide").addEventListener("click", event => { event.preventDefault(); openSizeGuide(); });
    }
    function runMiniConfetti() {
      toast("CONFETTI BURST", "Welcome to the list.", "info");
    }

    /* ==================== SCROLL ANIMATIONS AND COUNTERS ==================== */
    function initScrollEffects() {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (entry.target.id === "statsGrid") animateCounters();
            if (entry.target.classList.contains("rating-box")) $$(".bar-fill").forEach(bar => bar.style.width = bar.dataset.width);
          }
        });
      }, { threshold: 0.16 });
      $$(".reveal, .rating-box").forEach(el => revealObserver.observe(el));
    }
    function animateCounters() {
      $$("#statsGrid [data-count]").forEach(el => {
        const target = Number(el.dataset.count);
        const start = performance.now();
        function tick(now) {
          const t = Math.min(1, (now - start) / 2000);
          const value = Math.floor(target * t);
          el.textContent = target === 48 ? "4.8" : value.toLocaleString("en-IN") + (target >= 50 ? "+" : "");
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }

    /* ==================== BUTTON RIPPLE EFFECT ==================== */
    function initRipple() {
      document.addEventListener("click", event => {
        const btn = event.target.closest(".btn, .icon-btn, .tab");
        if (!btn) return;
        const circle = document.createElement("span");
        const rect = btn.getBoundingClientRect();
        circle.style.cssText = `position:absolute;left:${event.clientX - rect.left}px;top:${event.clientY - rect.top}px;width:8px;height:8px;border-radius:50%;background:var(--ripple);transform:translate(-50%,-50%) scale(1);pointer-events:none;animation:ripple .5s ease forwards;`;
        btn.style.position = "relative";
        btn.style.overflow = "hidden";
        btn.appendChild(circle);
        setTimeout(() => circle.remove(), 520);
      });
      const style = document.createElement("style");
      style.textContent = "@keyframes ripple{to{opacity:0;transform:translate(-50%,-50%) scale(24)}}";
      document.head.appendChild(style);
    }

    /* ==================== PANEL CLOSE BUTTONS ==================== */
    function initPanels() {
      $$(".panel-close").forEach(button => button.addEventListener("click", () => closeAllOverlays()));
    }

    /* ==================== BOOT THE WEBSITE ==================== */
    initLoader();
    initTheme();
    initNavigation();
    initShop();
    initFilters();
    initCart();
    initWishlist();
    initQuickView();
    initSearch();
    initBannersAndTimers();
    initPromoCards();
    initWheel();
    initScratchCards();
    initContentSections();
    initFitAssistant();
    initReviews();
    initCareers();
    initCheckout();
    initForms();
    initScrollEffects();
    initRipple();
