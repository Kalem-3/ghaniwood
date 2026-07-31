# GhaniWood – GitHub Pages paketi

Bu klasör GitHub Pages'e doğrudan yüklenebilir. Ana sayfa `index.html` dosyasıdır.

## Yayına alma

1. GitHub'da yeni bir repository oluşturun veya mevcut repository içeriğini temizleyin.
2. Bu ZIP'in içindeki dosyaları repository'nin kök dizinine yükleyin. `index.html` başka bir klasörün içinde kalmamalıdır.
3. **Settings → Pages → Build and deployment → Deploy from a branch** seçin.
4. Branch olarak `main`, klasör olarak `/ (root)` seçin ve kaydedin.

## Yayın öncesi kontrol edilmesi gereken bilgiler

Aşağıdaki bilgiler mevcut eski siteden taşındı:

- İşletme sahibi: Ahmad Ghani
- Adres: Mülheimer Straße 47, 47058 Duisburg
- Telefon/WhatsApp: +90 530 458 93 83
- E-posta: kaplanbugra.turkey@gmail.com
- Form servisi: Web3Forms; mevcut erişim anahtarı korunmuştur.

Bu bilgiler değişecekse `index.html`, `impressum.html`, `datenschutz.html` ve `js/script.js` dosyalarında arama yaparak topluca değiştirin.

## Yapay zekâ görsellerini değiştirme

Geçici görseller `assets/images/` klasöründedir ve sitede açık biçimde **KI-Konzeptbild / AI concept image / Yapay zekâ konsept görseli** olarak işaretlenir.

Gerçek fotoğraflar geldiğinde aynı dosya adlarıyla WebP görseller koyarsanız HTML değiştirmeniz gerekmez:

- `hero-kitchen.webp`
- `kitchen-installation.webp`
- `wardrobe-assembly.webp`
- `custom-kitchen.webp`
- `custom-shelving.webp`
- `furniture-restoration.webp`
- `wood-flooring.webp`
- `about-craft.webp`
- `og-ghaniwood.webp`

Gerçek görseller eklendiğinde `index.html` içindeki `concept-badge` etiketleri ve proje açıklamasındaki yapay zekâ bildirimi kaldırılmalıdır.

## Alan adı

`robots.txt` ve `sitemap.xml` içinde `https://ghaniwood.de` kullanılmıştır. GitHub Pages adresiyle devam edilecekse bu iki dosyadaki alan adını kendi GitHub Pages URL'nizle değiştirin.

## Hukuki not

Impressum ve Datenschutzerklärung mevcut bilgiler ve sitenin teknik yapısına göre düzenlenmiştir; hukuki danışmanlık değildir. Vergi, şirket ve mesleki zorunlu bilgilerin uzman tarafından kontrol edilmesi gerekir.
