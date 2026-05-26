const budayaData = {
  sejarah: {
    title: "Sejarah Kota Ambon",
    description: "Ambon adalah ibu kota Provinsi Maluku, dikenal sebagai 'Ambon Manise' (Ambon Cantik). Pada masa lalu, Ambon menjadi pusat perdagangan rempah-rempah dan benteng Portugis serta Belanda. Benteng Victoria menjadi saksi bisu perjuangan rakyat Maluku. Ambon juga dikenal sebagai kota musik dan intelektual.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ambon_Island_View.JPG/800px-Ambon_Island_View.JPG",
    keyPoints: ["Benteng Victoria", "Perang Ambon", "Pusat Rempah", "Gereja Sion"]
  },
  tarian: {
    title: "Tarian & Alat Musik Tradisional",
    description: "Tarian Cakalele adalah tarian perang khas Maluku yang menggambarkan keberanian. Tari Lenso menggunakan sapu tangan. Alat musik tradisional seperti Tifa (gendang), Totobuang (gong kecil), dan Suling bambu.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tari_Cakalele.jpg/640px-Tari_Cakalele.jpg",
    items: ["Tari Cakalele", "Tari Lenso", "Tifa", "Totobuang"]
  },
  kuliner: {
    title: "Kuliner Khas Ambon",
    description: "Ambon memiliki kuliner laut yang lezat dan unik: Papeda (bubur sagu), Ikan Kuah Kuning, Kohu-Kohu (kelapa campur ikan), dan Kue Sagu Keju.",
    image: "https://asset.kompas.com/crops/8I0pNZmmscO22oLPhFW4ryLs65E=/0x0:1000x667/750x500/data/photo/2020/06/23/5ef1c0998ec3c.jpg",
    foods: ["Papeda & Ikan Kuah Kuning", "Kohu-Kohu", "Nasi Jaha", "Kue Sagu Keju"]
  },
  pakaian: {
    title: "Pakaian Adat Maluku (Ambon)",
    description: "Pakaian tradisional Ambon untuk pria: baju cele, kain sarung, dan kepala ikat. Wanita: Baju bodo dengan hiasan manik-manik serta kain sarung. Penuh warna dan motif khas Maluku.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pakaian_Adat_Maluku.jpg/640px-Pakaian_Adat_Maluku.jpg",
    attributes: ["Baju Cele (Pria)", "Baju Bodo (Wanita)", "Ikat Kepala", "Manik Leher"]
  }
};

const galleryImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ambon_Island_View.JPG/400px-Ambon_Island_View.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tari_Cakalele.jpg/400px-Tari_Cakalele.jpg",
  "https://asset.kompas.com/crops/8I0pNZmmscO22oLPhFW4ryLs65E=/0x0:1000x667/750x500/data/photo/2020/06/23/5ef1c0998ec3c.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Tifa_music_instrument.jpg/400px-Tifa_music_instrument.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Benteng_Victoria_Ambon.jpg/400px-Benteng_Victoria_Ambon.jpg"
];

const budayaList = ["Sejarah", "Tarian & Musik", "Kuliner Khas", "Pakaian Adat"];

function loadPage(pageName) {
  const container = document.getElementById("app-container");
  if (!container) return;
  
  let htmlContent = "";
  switch(pageName) {
    case "home":
      htmlContent = getHomePage();
      break;
    case "sejarah":
      htmlContent = getDetailPage("sejarah");
      break;
    case "tarian":
      htmlContent = getDetailPage("tarian");
      break;
    case "kuliner":
      htmlContent = getDetailPage("kuliner");
      break;
    case "pakaian":
      htmlContent = getDetailPage("pakaian");
      break;
    case "galeri":
      htmlContent = getGaleriPage();
      break;
    case "kontak":
      htmlContent = getKontakPage();
      break;
    default:
      htmlContent = getHomePage();
  }
  container.innerHTML = htmlContent;
  if(pageName === "kontak") attachFormListener();
  if(pageName === "galeri") attachGaleriModalListener();
  container.classList.add("fade-page");
  setTimeout(() => container.classList.remove("fade-page"), 500);
}

// Homepage dengan Flex list, grid untuk fitur showcase, animations, transitions, text-effect
function getHomePage() {
  return `
    <div class="home-wrapper">
      <div class="text-effect">✨ Selamat Datang di Ambon Manise ✨</div>
      <p class="lead">Kota musik, rempah, dan keramahan. Mari jelajahi keindahan budaya Ambon, Maluku.</p>
      
      <!-- List dengan Flex -->
      <h3><i class="fas fa-music"></i> Pesona Budaya Ambon :</h3>
      <div class="flex-list">
        ${budayaList.map(item => `<div class="flex-item"><i class="fas fa-heart"></i> ${item}</div>`).join('')}
      </div>
      
      <!-- Grid untuk menampilkan preview kebudayaan - memenuhi fitur image, grid, transisi -->
      <div class="grid-container">
        <div class="card">
          <img src="${budayaData.sejarah.image}" alt="Sejarah Ambon">
          <div class="card-content">
            <h3>📜 Sejarah</h3>
            <p>Perjalanan panjang rempah dan benteng peninggalan kolonial.</p>
            <button class="btn" data-nav="sejarah">Selengkapnya →</button>
          </div>
        </div>
        <div class="card">
          <img src="${budayaData.tarian.image}" alt="Tari Cakalele">
          <div class="card-content">
            <h3>💃 Tari & Musik</h3>
            <p>Tifa, Totobuang, Tari Cakalele yang heroik.</p>
            <button class="btn" data-nav="tarian">Selengkapnya →</button>
          </div>
        </div>
        <div class="card">
          <img src="${budayaData.kuliner.image}" alt="Kuliner Ambon">
          <div class="card-content">
            <h3>🍲 Kuliner Khas</h3>
            <p>Papeda kuah kuning, Kohu-Kohu lezat.</p>
            <button class="btn" data-nav="kuliner">Selengkapnya →</button>
          </div>
        </div>
        <div class="card">
          <img src="${budayaData.pakaian.image}" alt="Pakaian Adat">
          <div class="card-content">
            <h3>👘 Pakaian Adat</h3>
            <p>Baju Cele dan Baju Bodo yang memukau.</p>
            <button class="btn" data-nav="pakaian">Selengkapnya →</button>
          </div>
        </div>
      </div>
      <div style="margin-top:2rem; text-align:center">
        <p><i class="fas fa-gem"></i> Ambon kota toleransi & pesona laut yang memikat.</p>
      </div>
    </div>
  `;
}

function getDetailPage(key) {
  const data = budayaData[key];
  if(!data) return "<p>Konten tidak ditemukan</p>";
  // Untuk menampilkan list tambahan menggunakan looping JS (Conditional item loop)
  let extraList = "";
  if(key === "sejarah" && data.keyPoints) {
    extraList = `<h4>📍 Poin Penting:</h4><ul>${data.keyPoints.map(p => `<li><i class="fas fa-map-marker-alt"></i> ${p}</li>`).join('')}</ul>`;
  } else if(key === "tarian" && data.items) {
    extraList = `<h4>🎵 Daftar Tifa & Tarian:</h4><div class="flex-list">${data.items.map(i => `<div class="flex-item">${i}</div>`).join('')}</div>`;
  } else if(key === "kuliner" && data.foods) {
    extraList = `<h4>🥘 Menu Wajib Coba:</h4><div class="flex-list">${data.foods.map(f => `<div class="flex-item"><i class="fas fa-utensils"></i> ${f}</div>`).join('')}</div>`;
  } else if(key === "pakaian" && data.attributes) {
    extraList = `<h4>🧵 Atribut Pakaian:</h4><ul>${data.attributes.map(a => `<li>✨ ${a}</li>`).join('')}</ul>`;
  }
  return `
    <div class="detail-page">
      <h1 class="text-effect">${data.title}</h1>
      <img src="${data.image}" alt="${data.title}" style="width:100%; max-height:400px; object-fit:cover; border-radius:32px; margin:1rem 0;">
      <p style="font-size:1.1rem; margin:1rem 0">${data.description}</p>
      ${extraList}
      <button class="btn" onclick="window.dispatchEvent(new CustomEvent('navigate', {detail:{page:'home'}}))">← Kembali ke Beranda</button>
    </div>
  `;
}

function getGaleriPage() {
  let imagesHtml = "";
  for(let i=0; i<galleryImages.length; i++) {
    imagesHtml += `<img src="${galleryImages[i]}" alt="Galeri Ambon ${i+1}" class="gallery-img-item" data-img="${galleryImages[i]}">`;
  }
  return `
    <div>
      <h1 class="text-effect"><i class="fas fa-camera"></i> Galeri Budaya Ambon</h1>
      <p>Koleksi foto benteng, tarian, kuliner, dan suasana khas kota Ambon.</p>
      <div class="img-gallery">
        ${imagesHtml}
      </div>
      <div id="modalPreview" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); justify-content:center; align-items:center; z-index:1000;" onclick="this.style.display='none'">
        <img id="modalImg" style="max-width:90%; max-height:90%; border-radius:20px;" src="">
      </div>
      <button class="btn" style="margin-top:20px;" data-nav="home">Tutup Galeri</button>
    </div>
  `;
}

function getKontakPage() {
  return `
    <div>
      <h1 class="text-effect"><i class="fas fa-envelope"></i> Kirim Pesan Budaya</h1>
      <p>Ingin mengetahui lebih dalam soal budaya Ambon? Silakan kirim pesan!</p>
      <div class="contact-form">
        <form id="cultureForm">
          <div class="form-group">
            <label>Nama Lengkap</label>
            <input type="text" id="nama" placeholder="Nama anda" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" id="email" placeholder="email@contoh.com" required>
          </div>
          <div class="form-group">
            <label>Minat Budaya</label>
            <select id="interest">
              <option value="Sejarah">Sejarah Ambon</option>
              <option value="Tarian & Musik">Tarian & Musik</option>
              <option value="Kuliner">Kuliner</option>
              <option value="Pakaian">Pakaian Adat</option>
            </select>
          </div>
          <div class="form-group">
            <label>Pesan</label>
            <textarea rows="4" id="message" placeholder="Tulis pesan anda..."></textarea>
          </div>
          <button type="submit" id="submitBtn">Kirim Pesan <i class="fas fa-paper-plane"></i></button>
          <div id="formFeedback" style="margin-top:1rem; font-weight:bold;"></div>
        </form>
      </div>
    </div>
  `;
}

function attachFormListener() {
  const form = document.getElementById("cultureForm");
  if(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const interest = document.getElementById("interest").value;
      const msg = document.getElementById("message").value.trim();
      const feedbackDiv = document.getElementById("formFeedback");
      if(nama === "" || email === "") {
        feedbackDiv.innerHTML = "<span style='color:red'>❌ Nama dan Email wajib diisi!</span>";
        return;
      }
      if(!email.includes("@") || !email.includes(".")) {
        feedbackDiv.innerHTML = "<span style='color:red'>❌ Email tidak valid!</span>";
        return;
      }

      let summary = `Terima kasih ${nama}, minat anda pada ${interest} telah tercatat. <br> Pesan: "${msg ? msg.substring(0,50) : '-'}"<br>`;
      let additional = "Kami akan segera membalas ke " + email + ". <i class='fas fa-smile'></i>";
      feedbackDiv.innerHTML = `<span style='color:green; background:#e0f2e0; padding:10px; border-radius:20px; display:inline-block;">✅ ${summary} ${additional}</span>`;
      form.reset();

      setTimeout(() => feedbackDiv.innerHTML = "", 5000);
    });
  }
}

function attachGaleriModalListener() {
  const images = document.querySelectorAll(".gallery-img-item");
  const modal = document.getElementById("modalPreview");
  const modalImg = document.getElementById("modalImg");
  if(images.length && modal && modalImg) {
    images.forEach(img => {
      img.addEventListener("click", function(e) {
        e.stopPropagation();
        const src = this.getAttribute("data-img");
        modalImg.src = src;
        modal.style.display = "flex";
      });
    });
    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

function initNavigation() {
  const navBtns = document.querySelectorAll("[data-page]");
  const btnsDynamic = () => {
    document.querySelectorAll("[data-nav]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const page = btn.getAttribute("data-nav");
        if(page) {
          loadPage(page);
          window.history.pushState({page}, "", `#${page}`);
          closeMobileNav();
        }
      });
    });
  };
  
  const changePage = (page) => {
    loadPage(page);
    closeMobileNav();
  };
  
  navBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const page = btn.getAttribute("data-page");
      if(page) changePage(page);
    });
  });
  
  window.addEventListener("navigate", (e) => {
    if(e.detail && e.detail.page) changePage(e.detail.page);
  });
  
  const observer = new MutationObserver(() => {
    document.querySelectorAll("[data-nav]").forEach(btn => {
      if(!btn.hasListener) {
        btn.addEventListener("click", (e) => {
          const page = btn.getAttribute("data-nav");
          if(page) changePage(page);
        });
        btn.hasListener = true;
      }
    });
    attachGaleriModalListener();
    if(document.getElementById("cultureForm")) attachFormListener();
  });
  observer.observe(document.getElementById("app-container"), { childList: true, subtree: true });
  
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");
  if(menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
  function closeMobileNav() {
    if(navLinks && navLinks.classList.contains("show")) navLinks.classList.remove("show");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
  initNavigation();
  window.addEventListener("popstate", () => {
    const hash = window.location.hash.slice(1);
    if(hash && (hash === "home" || hash === "sejarah" || hash === "tarian" || hash === "kuliner" || hash === "pakaian" || hash === "galeri" || hash === "kontak")) {
      loadPage(hash);
    } else loadPage("home");
  });
});