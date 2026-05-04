/* ============================================
   GhaniWood – JavaScript
   ============================================ */

// ── Translations ──────────────────────────────
const i18n = {
  en: {
    nav_home:         "Home",
    nav_about:        "About",
    nav_services:     "Services",
    nav_gallery:      "Gallery",
    nav_testimonials: "Reviews",
    nav_contact:      "Contact",
    hero_sub:  "Carpentry & Furniture Assembly across NRW",
    hero_desc: "From IKEA, XXXLutz and Mimax to fully custom woodwork — GhaniWood delivers expert carpentry to your home in Duisburg, Düsseldorf, Köln and throughout NRW.",
    hero_btn1: "View Our Services",
    hero_btn2: "Get a Free Quote",
    about_tag:   "About GhaniWood",
    about_title: "Precision Craftsmanship, Guaranteed Satisfaction",
    about_badge: "Years of Experience",
    about_p1:    "GhaniWood is a professional carpentry and furniture assembly service based in Duisburg, serving all of North Rhine-Westphalia. With over 10 years of hands-on experience, we handle everything from flat-pack assembly to fully custom-built woodwork — always on time, always clean.",
    about_p2:    "We treat every job — whether a single shelf or a complete kitchen fit-out — with the same level of care and professionalism. Our work is backed by a satisfaction guarantee: if it is not perfect, we make it right.",
    about_li1:   "On time, every time — we respect your schedule",
    about_li2:   "Tidy work site — we clean up completely when finished",
    about_li3:   "Fully insured — your home and furniture are protected",
    about_btn:   "Request a Free Quote",
    services_tag:   "What We Offer",
    services_title: "Our Services",
    services_sub:   "From flat-pack assembly to full kitchen installations and bespoke woodwork — we cover every aspect of carpentry and fitting across NRW.",
    s1_title: "Furniture Assembly",
    s1_desc:  "Professional assembly of all furniture brands, any size, any style. Fast turnaround, zero hassle — we bring the tools, you enjoy the result.",
    s2_title: "Flat-Pack Brands",
    s2_desc:  "Specialists in IKEA, XXXLutz, Mimax, Roller, Höffner and all other major brands. We build every piece correctly, including wall fixings and packaging removal.",
    s3_title: "Custom Woodwork",
    s3_desc:  "Made-to-measure shelving, wardrobes, desks and cabinets crafted to your exact space and specifications. No catalogue — your vision, our craftsmanship.",
    s4_title: "Kitchen Installation",
    s4_desc:  "Full kitchen fit-out from delivery to finish — cabinets, worktops, appliance integration and final adjustments. One team, zero complications.",
    s5_title: "Interior Fitting",
    s5_desc:  "Doors, skirting boards, laminate and parquet flooring, and all interior carpentry work carried out to a professional standard.",
    s6_title: "Repair & Restoration",
    s6_desc:  "Wobbly chairs, cracked table tops, broken drawers — we repair and restore your furniture so it looks and feels like new.",
    gallery_tag:   "Our Portfolio",
    gallery_title: "Completed Projects",
    gallery_sub:   "A selection of our recent work across Duisburg, Düsseldorf, Köln and the wider NRW region.",
    testimonials_tag:   "Customer Reviews",
    testimonials_title: "What Our Clients Say",
    testimonials_sub:   "Honest feedback from homeowners and businesses across NRW who trusted GhaniWood.",
    review1_text:     "Complete kitchen installation — cabinets, worktop, everything. Finished on the agreed day, not a single scratch. The finish is immaculate. Could not recommend more highly.",
    review1_name:     "Klaus M.",
    review1_location: "Duisburg",
    review2_text:     "I had 14 boxes of XXXLutz furniture for my new apartment. Everything assembled in one day, wall fixings included, packaging taken away. Absolutely outstanding service.",
    review2_name:     "Sarah K.",
    review2_location: "Düsseldorf",
    review3_text:     "A floor-to-ceiling custom bookcase built exactly as I imagined — perfect fit, solid wood, flawless finish. The price was very fair. Already planning my next project with them.",
    review3_name:     "Ahmed B.",
    review3_location: "Köln",
    review4_text:     "Our dining table had a crack and was badly wobbly. GhaniWood had it repaired and solid again within a couple of hours. Friendly, affordable, and genuinely skilled. Thank you!",
    review4_name:     "Petra W.",
    review4_location: "Essen",
    review_cta_text:    "Happy with our work? We would love to hear from you.",
    review_cta_btn:     "Share via WhatsApp",
    review_contact_btn: "Write a Review",
    contact_tag:            "Get in Touch",
    contact_title:          "Contact GhaniWood",
    contact_sub:            "Tell us about your project — we will get back to you with a free, no-obligation quote, usually within a few hours.",
    contact_location_label: "Base Location",
    contact_phone_label:    "Phone / WhatsApp",
    contact_whatsapp:       "Message on WhatsApp",
    areas_label:            "Areas We Cover",
    form_name:       "Full Name",
    form_name_ph:    "Your full name",
    form_email:      "Email Address",
    form_email_ph:   "your@email.com",
    form_phone:      "Phone Number (optional)",
    form_phone_ph:   "+49 or +90 ...",
    form_subject:    "Subject",
    form_subject_ph: "e.g. Kitchen assembly, IKEA furniture, Custom shelving...",
    form_message:    "Project Details",
    form_message_ph: "Describe your project — number of items, brand, city, any special requirements...",
    form_send:       "Send Message",
    form_success:    "Message sent! We will be in touch shortly — usually within a few hours.",
    form_error:      "Something went wrong. Please contact us via WhatsApp or email directly.",
    footer_rights:  "All rights reserved.",
    footer_tagline: "Built with care. Finished to last.",
  },

  de: {
    nav_home:         "Startseite",
    nav_about:        "Über uns",
    nav_services:     "Leistungen",
    nav_gallery:      "Galerie",
    nav_testimonials: "Bewertungen",
    nav_contact:      "Kontakt",
    hero_sub:  "Ihr Tischler & Möbelmonteur in ganz NRW",
    hero_desc: "Von IKEA, XXXLutz und Mimax bis hin zu maßgefertigten Holzarbeiten — GhaniWood kommt zu Ihnen nach Duisburg, Düsseldorf, Köln und überall in NRW.",
    hero_btn1: "Leistungen ansehen",
    hero_btn2: "Kostenloses Angebot",
    about_tag:   "Über GhaniWood",
    about_title: "Präzision & Verlässlichkeit — aus einer Hand",
    about_badge: "Jahre Erfahrung",
    about_p1:    "GhaniWood ist ein professioneller Schreiner- und Möbelmontagedienst mit Sitz in Duisburg. Wir sind für Privat- und Gewerbekunden in ganz Nordrhein-Westfalen tätig. Mit über 10 Jahren Erfahrung übernehmen wir alles — von der Flat-Pack-Montage bis zur maßgefertigten Tischlerarbeit.",
    about_p2:    "Ob ein einzelnes Regal oder eine komplette Kücheninstallation — jede Arbeit erledigen wir mit der gleichen Sorgfalt und Professionalität. Wir hinterlassen Ihre Wohnung genauso ordentlich, wie wir sie vorgefunden haben. Unsere Arbeit ist garantiert: Wenn etwas nicht stimmt, korrigieren wir es.",
    about_li1:   "Pünktlich — wir halten uns an vereinbarte Termine",
    about_li2:   "Sauber — Verpackungen werden entsorgt, Böden geschützt",
    about_li3:   "Versichert — Ihr Zuhause und Ihre Möbel sind geschützt",
    about_btn:   "Kostenloses Angebot anfordern",
    services_tag:   "Unsere Leistungen",
    services_title: "Was wir für Sie tun",
    services_sub:   "Von Flat-Pack-Montage bis zur Kücheninstallation und Maßanfertigung — alles aus einer Hand, in ganz NRW.",
    s1_title: "Möbelmontage",
    s1_desc:  "Professionelle Montage aller Möbelmarken — jede Größe, jeder Stil. Schnell, sauber und beim ersten Mal richtig. Wir bringen alles mit, was wir brauchen.",
    s2_title: "Flat-Pack-Marken",
    s2_desc:  "Spezialist für IKEA, XXXLutz, Mimax, Roller, Höffner und alle anderen großen Marken. Inkl. Wandmontage und Entsorgung der Verpackungen — alles aus einer Hand.",
    s3_title: "Maßanfertigungen",
    s3_desc:  "Regale, Schränke, Schreibtische und Einbaumöbel nach Maß — exakt auf Ihren Raum und Ihre Wünsche abgestimmt. Kein Katalog, sondern Ihre individuelle Lösung.",
    s4_title: "Kücheninstallation",
    s4_desc:  "Komplette Kücheninstallation aus einer Hand — Schränke, Arbeitsplatte, Geräteintegration und Feinabstimmung. Ein Team, keine Komplikationen.",
    s5_title: "Innenausbau",
    s5_desc:  "Türen, Sockelleisten, Laminat- und Parkettböden und alle weiteren Innenausbauarbeiten — professionell und sauber ausgeführt.",
    s6_title: "Reparatur & Restaurierung",
    s6_desc:  "Wackelnde Stühle, gerissene Tischplatten, klemmende Schubladen — wir reparieren und restaurieren Ihre Möbel so, dass sie wie neu wirken.",
    gallery_tag:   "Portfolio",
    gallery_title: "Abgeschlossene Projekte",
    gallery_sub:   "Eine Auswahl unserer aktuellen Arbeiten in Duisburg, Düsseldorf, Köln und der gesamten NRW-Region.",
    testimonials_tag:   "Kundenstimmen",
    testimonials_title: "Das sagen unsere Kunden",
    testimonials_sub:   "Ehrliche Bewertungen von Privatkunden und Unternehmen aus ganz NRW, die GhaniWood vertraut haben.",
    review1_text:     "Komplette Küchenmontage — Schränke, Arbeitsplatte, alles. Fertig am vereinbarten Tag, kein einziger Kratzer. Das Ergebnis ist makellos. Absolute Weiterempfehlung!",
    review1_name:     "Klaus M.",
    review1_location: "Duisburg",
    review2_text:     "Ich hatte 14 Kartons XXXLutz-Möbel für mein neues Apartment. Alles an einem Tag montiert, Wandbefestigungen inklusive, Verpackungen mitgenommen. Absolut herausragender Service.",
    review2_name:     "Sarah K.",
    review2_location: "Düsseldorf",
    review3_text:     "Ein bodenlanges Maßregal, genau wie ich es mir vorgestellt hatte — perfekte Passform, massives Holz, makellose Verarbeitung. Der Preis war sehr fair. Ich plane schon das nächste Projekt.",
    review3_name:     "Ahmed B.",
    review3_location: "Köln",
    review4_text:     "Unser Esstisch hatte einen Riss und wackelte stark. GhaniWood hat ihn innerhalb weniger Stunden repariert — wieder stabil und wie neu. Freundlich, fair im Preis und wirklich handwerklich begabt.",
    review4_name:     "Petra W.",
    review4_location: "Essen",
    review_cta_text:    "Zufrieden mit unserer Arbeit? Wir freuen uns über Ihr Feedback.",
    review_cta_btn:     "Bewertung per WhatsApp",
    review_contact_btn: "Bewertung schreiben",
    contact_tag:            "Kontakt aufnehmen",
    contact_title:          "GhaniWood kontaktieren",
    contact_sub:            "Beschreiben Sie uns Ihr Projekt — wir melden uns mit einem kostenlosen und unverbindlichen Angebot, in der Regel innerhalb weniger Stunden.",
    contact_location_label: "Standort",
    contact_phone_label:    "Telefon / WhatsApp",
    contact_whatsapp:       "WhatsApp-Nachricht schreiben",
    areas_label:            "Unser Einsatzgebiet",
    form_name:       "Vollständiger Name",
    form_name_ph:    "Ihr vollständiger Name",
    form_email:      "E-Mail-Adresse",
    form_email_ph:   "ihre@email.de",
    form_phone:      "Telefonnummer (optional)",
    form_phone_ph:   "+49 oder +90 ...",
    form_subject:    "Betreff",
    form_subject_ph: "z. B. Küchenmontage, IKEA-Möbel, Maßregal ...",
    form_message:    "Projektbeschreibung",
    form_message_ph: "Beschreiben Sie Ihr Projekt — Anzahl der Teile, Marke, Stadt, besondere Anforderungen ...",
    form_send:       "Nachricht senden",
    form_success:    "Nachricht gesendet! Wir melden uns in Kürze — in der Regel innerhalb weniger Stunden.",
    form_error:      "Ein Fehler ist aufgetreten. Bitte kontaktieren Sie uns direkt per WhatsApp oder E-Mail.",
    footer_rights:  "Alle Rechte vorbehalten.",
    footer_tagline: "Mit Sorgfalt gebaut. Für die Ewigkeit gemacht.",
  },

  tr: {
    nav_home:         "Ana Sayfa",
    nav_about:        "Hakkımızda",
    nav_services:     "Hizmetler",
    nav_gallery:      "Galeri",
    nav_testimonials: "Yorumlar",
    nav_contact:      "İletişim",
    hero_sub:  "NRW Genelinde Marangozluk & Mobilya Montajı",
    hero_desc: "IKEA, XXXLutz ve Mimax'tan özel ahşap işlerine kadar — GhaniWood, Duisburg, Düsseldorf, Köln ve tüm NRW'de evinize profesyonel marangozluğu taşıyor.",
    hero_btn1: "Hizmetleri Gör",
    hero_btn2: "Ücretsiz Teklif Al",
    about_tag:   "GhaniWood Hakkında",
    about_title: "Titiz İşçilik, Garantili Memnuniyet",
    about_badge: "Yıllık Deneyim",
    about_p1:    "GhaniWood, Duisburg merkezli profesyonel bir marangozluk ve mobilya montaj hizmetidir. 10 yılı aşkın deneyimimizle Kuzey Ren-Vestfalya genelinde hem bireysel hem de kurumsal müşterilere hizmet veriyoruz. Flat-pack montajından tamamen özel ahşap işlerine kadar her şeyi üstleniyoruz.",
    about_p2:    "Tek bir raf da olsa, komple bir mutfak kurulumu da olsa — her işi aynı özen ve profesyonellikle yapıyoruz. İşimiz bittiğinde evinizi bulduğumuz gibi bırakıyoruz. Tüm işlerimizde memnuniyet garantisi veriyoruz.",
    about_li1:   "Dakik — randevularınıza her zaman uyuyoruz",
    about_li2:   "Temiz — ambalajlar kaldırılır, zeminler korunur",
    about_li3:   "Sigortalı — eviniz ve mobilyalarınız güvende",
    about_btn:   "Ücretsiz Teklif İste",
    services_tag:   "Hizmetlerimiz",
    services_title: "Sizin İçin Neler Yapıyoruz",
    services_sub:   "Flat-pack montajından mutfak kurulumuna, özel ahşap işlerinden tamire — tüm hizmetler NRW genelinde tek elden.",
    s1_title: "Mobilya Montajı",
    s1_desc:  "Her marka ve her ölçüde mobilyanın profesyonel montajı. Hızlı, temiz ve ilk seferinde doğru. Gerekli tüm aletleri biz getiriyoruz.",
    s2_title: "Flat-Pack Markaları",
    s2_desc:  "IKEA, XXXLutz, Mimax, Roller, Höffner ve diğer tüm büyük markalarda uzman montaj. Duvar montajı ve ambalaj kaldırma dahil — hepsi tek elden.",
    s3_title: "Özel Ahşap İşleri",
    s3_desc:  "Mekânınıza ve zevkinize özel ölçüde raf, dolap, çalışma masası ve ankastre mobilya. Katalogdan değil, sizin hayalinizden üretiyoruz.",
    s4_title: "Mutfak Kurulumu",
    s4_desc:  "Teslimattan bitişe kadar eksiksiz mutfak kurulumu — dolap, tezgah, cihaz entegrasyonu ve son ayarlar. Tek ekip, sıfır komplikasyon.",
    s5_title: "İç Mekan Düzenleme",
    s5_desc:  "Kapı, süpürgelik, laminat ve parke zemin döşeme ve tüm iç mekan marangozluk işleri — profesyonel ve titiz bir şekilde.",
    s6_title: "Tamir & Restorasyon",
    s6_desc:  "Sallanan sandalye, çatlak masa, sıkışan çekmece — mobilyalarınızı tamir edip sıfır gibi görünmesini sağlıyoruz.",
    gallery_tag:   "Portföy",
    gallery_title: "Tamamlanan Projeler",
    gallery_sub:   "Duisburg, Düsseldorf, Köln ve NRW genelindeki son çalışmalarımızdan bir seçki.",
    testimonials_tag:   "Müşteri Yorumları",
    testimonials_title: "Müşterilerimiz Ne Diyor",
    testimonials_sub:   "GhaniWood'a güvenen NRW'deki ev sahiplerinden ve işletmelerden dürüst geri bildirimler.",
    review1_text:     "Mutfak kurulumunun tamamı — dolap, tezgah, her şey. Belirlenen günde bitti, tek bir çizik yok. Sonuç kusursuz. Kesinlikle tavsiye ederim!",
    review1_name:     "Klaus M.",
    review1_location: "Duisburg",
    review2_text:     "Yeni dairem için 14 koli XXXLutz mobilyam vardı. Hepsi tek günde monte edildi, duvar montajları dahil, ambalajlar da götürüldü. Olağanüstü bir hizmet.",
    review2_name:     "Sarah K.",
    review2_location: "Düsseldorf",
    review3_text:     "Yerden tavana özel kitaplık, tam hayal ettiğim gibi — mükemmel uyum, masif ahşap, kusursuz işçilik. Fiyat çok makul. Bir sonraki projem için zaten planlarım var.",
    review3_name:     "Ahmed B.",
    review3_location: "Köln",
    review4_text:     "Yemek masamız çatlamış ve çok sallıyordu. Birkaç saat içinde tamir edip sapasağlam yaptılar, sıfır gibi görünüyor. Güler yüzlü, makul fiyatlı ve gerçekten usta işi.",
    review4_name:     "Petra W.",
    review4_location: "Essen",
    review_cta_text:    "Hizmetimizden memnun kaldınız mı? Yorumunuzu bekliyoruz.",
    review_cta_btn:     "WhatsApp ile Yorum Yaz",
    review_contact_btn: "Yorum Bırak",
    contact_tag:            "İletişime Geçin",
    contact_title:          "GhaniWood ile İletişim",
    contact_sub:            "Projenizi anlatın — genellikle birkaç saat içinde ücretsiz ve bağlayıcı olmayan teklifimizle size dönüyoruz.",
    contact_location_label: "Merkez Konum",
    contact_phone_label:    "Telefon / WhatsApp",
    contact_whatsapp:       "WhatsApp'tan Yazın",
    areas_label:            "Hizmet Bölgelerimiz",
    form_name:       "Ad Soyad",
    form_name_ph:    "Tam adınız",
    form_email:      "E-posta Adresi",
    form_email_ph:   "siz@email.com",
    form_phone:      "Telefon Numarası (isteğe bağlı)",
    form_phone_ph:   "+49 veya +90 ...",
    form_subject:    "Konu",
    form_subject_ph: "Ör. Mutfak montajı, IKEA mobilya, Özel raf ...",
    form_message:    "Proje Detayları",
    form_message_ph: "Projenizi anlatın — parça sayısı, marka, şehir, özel istekler ...",
    form_send:       "Mesaj Gönder",
    form_success:    "Mesajınız iletildi! Kısa süre içinde — genellikle birkaç saat içinde — size döneceğiz.",
    form_error:      "Bir hata oluştu. Lütfen WhatsApp veya e-posta ile doğrudan ulaşın.",
    footer_rights:  "Tüm hakları saklıdır.",
    footer_tagline: "Özenle yapılmış. Ömür boyu dayanıklı.",
  },
};

// ── Language switcher ──────────────────────────
let currentLang = localStorage.getItem("ghaniwood_lang") || "de";

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

// ── Contact form – Formspree ───────────────────
document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();
  const form      = e.target;
  const submitBtn = document.getElementById("submitBtn");
  const success   = document.getElementById("formSuccess");
  const error     = document.getElementById("formError");
  const t         = i18n[currentLang];

  success.style.display = "none";
  error.style.display   = "none";
  submitBtn.disabled    = true;
  submitBtn.textContent = "...";

  try {
    const res  = await fetch(form.action, {
      method:  "POST",
      body:    new FormData(form),
      headers: { "Accept": "application/json" },
    });
    const data = await res.json();

    if (data.result === "success") {
      success.style.display = "block";
      form.reset();
    } else {
      error.style.display = "block";
    }
  } catch {
    error.style.display = "block";
  } finally {
    submitBtn.disabled    = false;
    submitBtn.textContent = t.form_send;
    setTimeout(() => {
      success.style.display = "none";
      error.style.display   = "none";
    }, 6000);
  }
});

// ── Init ───────────────────────────────────────
applyLanguage(currentLang);
