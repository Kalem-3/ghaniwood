/* ============================================
   GhaniWood – JavaScript
   ============================================ */

// ── Translations ──────────────────────────────
const i18n = {
  en: {
    // Nav
    nav_home:     "Home",
    nav_about:    "About",
    nav_services: "Services",
    nav_gallery:  "Gallery",
    nav_contact:  "Contact",
    // Hero
    hero_sub:  "Professional Carpentry in Germany",
    hero_desc: "Custom furniture, professional assembly, and premium woodwork — delivered with precision and passion.",
    hero_btn1: "Our Services",
    hero_btn2: "Get in Touch",
    // About
    about_tag:   "About Us",
    about_title: "Craftsmanship You Can Trust",
    about_badge: "Years of Experience",
    about_p1:    "GhaniWood is a professional carpentry and furniture assembly service based in Germany. We bring decades of hands-on experience to every project — from flat-pack assembly to bespoke custom woodwork.",
    about_p2:    "Every job is treated with the same care and attention to detail, whether it's a single shelf or a complete kitchen installation. We take pride in our work and guarantee your satisfaction.",
    about_li1:   "Punctual, clean, and reliable",
    about_li2:   "Years of experience in German households",
    about_li3:   "Certified and fully insured",
    about_btn:   "Contact Us",
    // Services
    services_tag:   "What We Do",
    services_title: "Our Services",
    services_sub:   "From flat-pack furniture to custom builds — we handle every aspect of carpentry and assembly.",
    s1_title: "Furniture Assembly",
    s1_desc:  "Professional assembly of all furniture brands — fast, clean, and done right the first time.",
    s2_title: "IKEA Assembly",
    s2_desc:  "Specialist in IKEA flat-pack furniture. We assemble any IKEA product quickly and correctly.",
    s3_title: "Custom Woodwork",
    s3_desc:  "Bespoke shelving, wardrobes, and furniture made to measure for your exact needs.",
    s4_title: "Kitchen Installation",
    s4_desc:  "Full kitchen installation including cabinets, worktops, and finishing details.",
    s5_title: "Interior Fitting",
    s5_desc:  "Doors, skirting boards, flooring, and all interior carpentry fitted professionally.",
    s6_title: "Repair & Restoration",
    s6_desc:  "Broken furniture? We repair, restore, and refurbish to bring your pieces back to life.",
    // Gallery
    gallery_tag:   "Portfolio",
    gallery_title: "Our Work",
    gallery_sub:   "A selection of completed projects — each one finished to the highest standard.",
    gallery_note:  "Add your own project photos to the images/ folder to display them here.",
    // Contact
    contact_tag:            "Get in Touch",
    contact_title:          "Contact Us",
    contact_sub:            "Have a project in mind? Reach out for a free consultation and quote.",
    contact_location_label: "Location",
    contact_phone_label:    "Phone",
    contact_whatsapp:       "Message on WhatsApp",
    // Form
    form_name:       "Full Name",
    form_name_ph:    "Your name",
    form_email:      "Email Address",
    form_email_ph:   "your@email.com",
    form_subject:    "Subject",
    form_subject_ph: "How can we help?",
    form_message:    "Message",
    form_message_ph: "Describe your project...",
    form_send:       "Send Message",
    form_success:    "✓ Thank you! We'll get back to you soon.",
    // Footer
    footer_rights:  "All rights reserved.",
    footer_tagline: "Crafted with passion, built to last.",
  },

  de: {
    nav_home:     "Startseite",
    nav_about:    "Über uns",
    nav_services: "Leistungen",
    nav_gallery:  "Galerie",
    nav_contact:  "Kontakt",
    hero_sub:  "Professioneller Tischler in Deutschland",
    hero_desc: "Individuelle Möbel, professionelle Montage und erstklassige Holzarbeiten — mit Präzision und Leidenschaft.",
    hero_btn1: "Unsere Leistungen",
    hero_btn2: "Kontakt aufnehmen",
    about_tag:   "Über uns",
    about_title: "Handwerk, dem Sie vertrauen können",
    about_badge: "Jahre Erfahrung",
    about_p1:    "GhaniWood ist ein professioneller Schreiner- und Möbelmontagedienst in Deutschland. Wir bringen jahrelange praktische Erfahrung in jedes Projekt ein — von der Flat-Pack-Montage bis zur maßgefertigten Holzarbeit.",
    about_p2:    "Jede Arbeit wird mit der gleichen Sorgfalt und Liebe zum Detail behandelt, ob ein einzelnes Regal oder eine komplette Kücheninstallation. Wir sind stolz auf unsere Arbeit und garantieren Ihre Zufriedenheit.",
    about_li1:   "Pünktlich, sauber und zuverlässig",
    about_li2:   "Langjährige Erfahrung in deutschen Haushalten",
    about_li3:   "Zertifiziert und vollständig versichert",
    about_btn:   "Kontaktieren Sie uns",
    services_tag:   "Was wir tun",
    services_title: "Unsere Leistungen",
    services_sub:   "Von Möbeln zum Zusammenbauen bis zu Sonderanfertigungen — wir übernehmen alle Aspekte der Tischlerei und Montage.",
    s1_title: "Möbelmontage",
    s1_desc:  "Professionelle Montage aller Möbelmarken — schnell, sauber und beim ersten Mal richtig.",
    s2_title: "IKEA-Montage",
    s2_desc:  "Spezialist für IKEA-Möbel. Wir montieren jedes IKEA-Produkt schnell und korrekt.",
    s3_title: "Maßanfertigungen",
    s3_desc:  "Individuelle Regale, Schränke und Möbel nach Maß für Ihre genauen Bedürfnisse.",
    s4_title: "Kücheninstallation",
    s4_desc:  "Komplette Kücheninstallation inkl. Schränke, Arbeitsflächen und Finishing-Details.",
    s5_title: "Innenausbau",
    s5_desc:  "Türen, Sockelleisten, Bodenbeläge und alle Innenarbeiten professionell verlegt.",
    s6_title: "Reparatur & Restaurierung",
    s6_desc:  "Kaputte Möbel? Wir reparieren, restaurieren und erneuern Ihre Stücke.",
    gallery_tag:   "Portfolio",
    gallery_title: "Unsere Arbeiten",
    gallery_sub:   "Eine Auswahl abgeschlossener Projekte — jedes auf höchstem Niveau fertiggestellt.",
    gallery_note:  "Fügen Sie Ihre eigenen Projektfotos in den Ordner images/ ein, um sie hier anzuzeigen.",
    contact_tag:            "Kontakt",
    contact_title:          "Kontaktieren Sie uns",
    contact_sub:            "Haben Sie ein Projekt? Schreiben Sie uns für eine kostenlose Beratung.",
    contact_location_label: "Standort",
    contact_phone_label:    "Telefon",
    contact_whatsapp:       "WhatsApp schreiben",
    form_name:       "Vollständiger Name",
    form_name_ph:    "Ihr Name",
    form_email:      "E-Mail-Adresse",
    form_email_ph:   "ihre@email.de",
    form_subject:    "Betreff",
    form_subject_ph: "Wie können wir helfen?",
    form_message:    "Nachricht",
    form_message_ph: "Beschreiben Sie Ihr Projekt...",
    form_send:       "Nachricht senden",
    form_success:    "✓ Danke! Wir melden uns bald bei Ihnen.",
    footer_rights:  "Alle Rechte vorbehalten.",
    footer_tagline: "Mit Leidenschaft gefertigt, für die Ewigkeit gebaut.",
  },

  tr: {
    nav_home:     "Ana Sayfa",
    nav_about:    "Hakkımızda",
    nav_services: "Hizmetler",
    nav_gallery:  "Galeri",
    nav_contact:  "İletişim",
    hero_sub:  "Almanya'da Profesyonel Marangozluk",
    hero_desc: "Özel mobilya, profesyonel montaj ve üstün kaliteli ahşap işleri — titizlik ve tutkuyla.",
    hero_btn1: "Hizmetlerimiz",
    hero_btn2: "İletişime Geç",
    about_tag:   "Hakkımızda",
    about_title: "Güvenebileceğiniz Ustalık",
    about_badge: "Yıllık Deneyim",
    about_p1:    "GhaniWood, Almanya merkezli profesyonel bir marangozluk ve mobilya montaj hizmetidir. Flat-pack montajından özel ahşap işlerine kadar her projede onlarca yıllık deneyimi bir araya getiriyoruz.",
    about_p2:    "Tek bir raf olsun, eksiksiz bir mutfak kurulumu olsun, her işe aynı özen ve titizlikle yaklaşıyoruz. İşimizin kalitesiyle gurur duyuyor, memnuniyetinizi garanti ediyoruz.",
    about_li1:   "Dakik, temiz ve güvenilir",
    about_li2:   "Almanya'da yıllara yayılan ev deneyimi",
    about_li3:   "Sertifikalı ve tam sigortalı",
    about_btn:   "Bizimle İletişime Geç",
    services_tag:   "Ne Yapıyoruz",
    services_title: "Hizmetlerimiz",
    services_sub:   "Hazır mobilyadan özel üretime — marangozluk ve montajın her aşamasında yanınızdayız.",
    s1_title: "Mobilya Montajı",
    s1_desc:  "Tüm mobilya markalarının profesyonel montajı — hızlı, temiz ve ilk seferinde doğru.",
    s2_title: "IKEA Montajı",
    s2_desc:  "IKEA mobilya uzmanıyız. Her IKEA ürününü hızlı ve eksiksiz monte ediyoruz.",
    s3_title: "Özel Ahşap İşleri",
    s3_desc:  "İhtiyaçlarınıza özel ölçüde raf, dolap ve mobilya üretimi.",
    s4_title: "Mutfak Kurulumu",
    s4_desc:  "Dolap, tezgah ve tüm detaylarıyla eksiksiz mutfak kurulumu.",
    s5_title: "İç Mekan Düzenleme",
    s5_desc:  "Kapı, süpürgelik, zemin döşeme ve tüm iç mekan marangozluk işleri.",
    s6_title: "Tamir & Restorasyon",
    s6_desc:  "Kırık mobilyanız mı var? Tamir ediyor, restore ediyor, yeniliyoruz.",
    gallery_tag:   "Portföy",
    gallery_title: "Çalışmalarımız",
    gallery_sub:   "Tamamlanmış projelerden bir seçki — her biri en yüksek standartta bitirilmiş.",
    gallery_note:  "Kendi proje fotoğraflarınızı images/ klasörüne ekleyerek burada görüntüleyebilirsiniz.",
    contact_tag:            "İletişim",
    contact_title:          "Bize Ulaşın",
    contact_sub:            "Bir projeniz mi var? Ücretsiz danışmanlık için hemen yazın.",
    contact_location_label: "Konum",
    contact_phone_label:    "Telefon",
    contact_whatsapp:       "WhatsApp'tan Yazın",
    form_name:       "Ad Soyad",
    form_name_ph:    "Adınız",
    form_email:      "E-posta Adresi",
    form_email_ph:   "siz@email.com",
    form_subject:    "Konu",
    form_subject_ph: "Nasıl yardımcı olabiliriz?",
    form_message:    "Mesaj",
    form_message_ph: "Projenizi açıklayın...",
    form_send:       "Mesaj Gönder",
    form_success:    "✓ Teşekkürler! En kısa sürede size döneceğiz.",
    footer_rights:  "Tüm hakları saklıdır.",
    footer_tagline: "Tutkuyla yapılmış, ömür boyu dayanıklı.",
  },
};

// ── Language switcher ──────────────────────────
let currentLang = localStorage.getItem("ghaniwood_lang") || "en";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("ghaniwood_lang", lang);
  const t = i18n[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

// ── Navbar scroll effect ───────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

// ── Hamburger menu ─────────────────────────────
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ── Scroll reveal ──────────────────────────────
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el    = entry.target;
        const delay = el.style.getPropertyValue("--delay") || "0s";
        setTimeout(() => {
          el.classList.add("visible");
        }, parseFloat(delay) * 1000);
        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ── Contact form (demo) ────────────────────────
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const success = document.getElementById("formSuccess");
  success.style.display = "block";
  e.target.reset();
  setTimeout(() => { success.style.display = "none"; }, 5000);
});

// ── Init ───────────────────────────────────────
applyLanguage(currentLang);
