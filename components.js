// NBE Hukuk — Ortak Header, Footer, Sticky Bar
// Bu dosyayı değiştirdiğinizde tüm sayfalar otomatik güncellenir.

const SITE = {
    email: 'bilgi@nbehukuk.com',
    phone: '+905325889997',
    phoneDisplay: '0532 588 99 97',
    address: 'İstanbul / Bostancı',
    slogan: 'Aequitas et Concordia',
    year: new Date().getFullYear()
};

function renderHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    el.innerHTML = `
    <div class="header-inner">
        <a href="index.html" class="logo" aria-label="NBE Hukuk Ana Sayfa">
            <img src="img/logo-nbe.png" alt="NBE Hukuk & Danışmanlık" height="52" style="height:52px;width:auto">
        </a>
        <nav class="main-nav" id="mainNav" aria-label="Ana menü">
            <div class="nav-dropdown">
                <a href="index.html#hizmetler">Hukuki Faaliyetler</a>
                <div class="dropdown-menu">
                    <a href="aile-hukuku.html">Aile Hukuku</a>
                    <a href="is-hukuku.html">İş Hukuku</a>
                    <a href="ik-destek.html">İK Destek Hizmetleri</a>
                    <a href="ticaret-hukuku.html">Ticaret Hukuku</a>
                    <a href="borclar-hukuku.html">Borçlar Hukuku</a>
                </div>
            </div>
            <a href="bilirkisilik.html">Bilirkişilik</a>
            <a href="danismanlik.html">Genel Danışmanlık</a>
            <a href="hakkimda.html">Hakkımda</a>
            <a href="blog.html">Blog</a>
            <a href="mailto:${SITE.email}" class="nav-cta">Bize Ulaşın</a>
        </nav>
        <button class="menu-toggle" id="menuToggle" aria-label="Menüyü aç">
            <span></span><span></span><span></span>
        </button>
    </div>`;

    // Scroll effect
    const header = el;
    const updateScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    updateScroll();
    window.addEventListener('scroll', updateScroll);

    // Mobile menu
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('mainNav').classList.toggle('open');
    });
    document.getElementById('mainNav').querySelectorAll('a').forEach(l => {
        l.addEventListener('click', () => document.getElementById('mainNav').classList.remove('open'));
    });
}

function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
    <div class="footer-inner">
        <div class="footer-brand">
            <div class="logo-text">NBE Hukuk<span>Danışmanlık</span></div>
            <em style="font-style:italic;color:rgba(255,255,255,.45);font-size:12px;letter-spacing:1.5px;display:block;margin-bottom:10px">${SITE.slogan}</em>
            <p>Güvenilir, sürdürülebilir ve sonuç odaklı yaklaşımımızla, her adımda yanınızdayız.</p>
        </div>
        <div class="footer-col">
            <h4>Hizmetlerimiz</h4>
            <a href="is-hukuku.html">İş Hukuku</a>
            <a href="ticaret-hukuku.html">Ticaret Hukuku</a>
            <a href="aile-hukuku.html">Aile Hukuku</a>
            <a href="borclar-hukuku.html">Borçlar Hukuku</a>
            <a href="ik-destek.html">İK Destek</a>
        </div>
        <div class="footer-col">
            <h4>Kurumsal</h4>
            <a href="bilirkisilik.html">Bilirkişilik</a>
            <a href="danismanlik.html">Genel Danışmanlık</a>
            <a href="hakkimda.html">Hakkımda</a>
            <a href="blog.html">Hukuki Bilgiler</a>
            <a href="is-hukuku-bilgi-bankasi.html">İHBB</a>
            <a href="aile-hukuku-bilgi-bankasi.html">AHBB</a>
            <a href="ticaret-hukuku-bilgi-bankasi.html">THBB</a>
            <a href="borclar-hukuku-bilgi-bankasi.html">BHBB</a>
        </div>
        <div class="footer-col">
            <h4>İletişim</h4>
            <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                <a href="mailto:${SITE.email}">${SITE.email}</a>
            </div>
            <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.4 1 .7 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.36 1.86.64 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a>
            </div>
            <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ${SITE.address}
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <span>&copy; ${SITE.year} NBE Hukuk & Danışmanlık. Tüm hakları saklıdır.</span>
        <span>Av. Nurgül Bayraktar Erışık</span>
    </div>`;
}

function renderStickyBar() {
    const el = document.getElementById('sticky-bar');
    if (!el) return;
    el.innerHTML = `
        <a href="tel:${SITE.phone}" class="sticky-btn sticky-call">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.4 1 .7 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.36 1.86.64 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Ara
        </a>
        <a href="mailto:${SITE.email}" class="sticky-btn sticky-mail">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>E-posta
        </a>`;
}

// Otomatik render
document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    renderStickyBar();
});
