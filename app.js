/* ==========================================================================
   RadioPosition Web Application — Main JavaScript Controller Engine
   ========================================================================== */

// 1. Localization Dictionary (15 Languages)
const translations = {
  tr: {
    homeTitle: "Radyo", discoverTitle: "Keşfet", mapTitle: "Harita", favoritesTitle: "Favoriler", settingsTitle: "Ayarlar",
    heroBannerTitle: "Dünyanın Canlı Frekansları", heroBannerSub: "Kristal netliğinde kesintisiz radyo yayınları ve harita keşfi.",
    searchPlaceholder: "Radyo istasyonu veya etiket ara...", recommendedForYou: "Senin İçin Seçtiklerimiz ✨",
    featuredStations: "Öne Çıkan İstasyonlar 🔥", localRadios: "Ülke Radyoları 🌍", myFavorites: "Favorilerim 🔖",
    noFavoritesYet: "Henüz Kaydedilmiş İstasyon Yok", noFavoritesSubtitle: "Keşfet veya Radyo sekmesindeki kaydet simgesine dokunarak ekleyin.",
    privacyPolicy: "Gizlilik Politikası", termsOfUse: "Kullanım Koşulları"
  },
  en: {
    homeTitle: "Radio", discoverTitle: "Discover", mapTitle: "Map", favoritesTitle: "Favorites", settingsTitle: "Settings",
    heroBannerTitle: "Worldwide Live Frequencies", heroBannerSub: "Crystal clear radio streaming and map exploration.",
    searchPlaceholder: "Search station or tag...", recommendedForYou: "Picked For You ✨",
    featuredStations: "Featured Stations 🔥", localRadios: "Country Radios 🌍", myFavorites: "My Favorites 🔖",
    noFavoritesYet: "No Favorites Saved Yet", noFavoritesSubtitle: "Tap bookmark icon on stations to save them here.",
    privacyPolicy: "Privacy Policy", termsOfUse: "Terms of Use"
  },
  de: {
    homeTitle: "Radio", discoverTitle: "Entdecken", mapTitle: "Karte", favoritesTitle: "Favoriten", settingsTitle: "Einstellungen",
    heroBannerTitle: "Weltweite Live-Frequenzen", heroBannerSub: "Kristallklares Radio-Streaming und Kartenerkundung.",
    searchPlaceholder: "Sender oder Tag suchen...", recommendedForYou: "Für dich ausgewählt ✨",
    featuredStations: "Empfohlene Sender 🔥", localRadios: "Länderradios 🌍", myFavorites: "Meine Favoriten 🔖",
    noFavoritesYet: "Noch keine Favoriten gespeichert", noFavoritesSubtitle: "Tippe auf das Lesezeichen-Symbol, um Sender zu speichern.",
    privacyPolicy: "Datenschutz-Bestimmungen", termsOfUse: "Nutzungsbedingungen"
  },
  es: {
    homeTitle: "Radio", discoverTitle: "Descubrir", mapTitle: "Mapa", favoritesTitle: "Favoritos", settingsTitle: "Ajustes",
    heroBannerTitle: "Frecuencias en Vivo del Mundo", heroBannerSub: "Transmisión de radio nítida y exploración en mapa.",
    searchPlaceholder: "Buscar emisora o etiqueta...", recommendedForYou: "Recomendados Para Ti ✨",
    featuredStations: "Emisoras Destacadas 🔥", localRadios: "Radios del País 🌍", myFavorites: "Mis Favoritos 🔖",
    noFavoritesYet: "Aún no hay favoritos guardados", noFavoritesSubtitle: "Toca el icono de marcador en las emisoras para guardarlas.",
    privacyPolicy: "Política de Privacidad", termsOfUse: "Términos de Uso"
  },
  fr: {
    homeTitle: "Radio", discoverTitle: "Découvrir", mapTitle: "Carte", favoritesTitle: "Favoris", settingsTitle: "Paramètres",
    heroBannerTitle: "Fréquences en Direct du Monde", heroBannerSub: "Diffusion radio limpide et exploration sur carte.",
    searchPlaceholder: "Rechercher une station ou un tag...", recommendedForYou: "Sélectionné Pour Vous ✨",
    featuredStations: "Stations en Vedette 🔥", localRadios: "Radios du Pays 🌍", myFavorites: "Mes Favoris 🔖",
    noFavoritesYet: "Aucun favori enregistré", noFavoritesSubtitle: "Appuyez sur l'icône de marque-page pour sauvegarder.",
    privacyPolicy: "Politique de Confidentialité", termsOfUse: "Conditions d'Utilisation"
  },
  it: {
    homeTitle: "Radio", discoverTitle: "Esplora", mapTitle: "Mappa", favoritesTitle: "Preferiti", settingsTitle: "Impostazioni",
    heroBannerTitle: "Frequenze Live del Mondo", heroBannerSub: "Streaming radio cristallino ed esplorazione mappa.",
    searchPlaceholder: "Cerca stazione o tag...", recommendedForYou: "Scelti Per Te ✨",
    featuredStations: "Stazioni in Evidenza 🔥", localRadios: "Radio del Paese 🌍", myFavorites: "I Miei Preferiti 🔖",
    noFavoritesYet: "Nessun preferito salvato", noFavoritesSubtitle: "Tocca l'icona del segnalibro per salvare le stazioni.",
    privacyPolicy: "Informativa sulla Privacy", termsOfUse: "Termini di Utilizzo"
  },
  nl: {
    homeTitle: "Radio", discoverTitle: "Ontdekken", mapTitle: "Kaart", favoritesTitle: "Favorieten", settingsTitle: "Instellingen",
    heroBannerTitle: "Wereldwijde Live Frequenties", heroBannerSub: "Haarscherpe radiostreaming en kaartverkenning.",
    searchPlaceholder: "Zoek zender of tag...", recommendedForYou: "Voor Jou Geselecteerd ✨",
    featuredStations: "Ausgewählte Zenders 🔥", localRadios: "Landradio's 🌍", myFavorites: "Mijn Favorieten 🔖",
    noFavoritesYet: "Nog geen favorieten opgeslagen", noFavoritesSubtitle: "Tik op de bladwijzer om zenders op te slaan.",
    privacyPolicy: "Privacybeleid", termsOfUse: "Gebruiksvoorwaarden"
  },
  pl: {
    homeTitle: "Radio", discoverTitle: "Odkrywaj", mapTitle: "Mapa", favoritesTitle: "Ulubione", settingsTitle: "Ustawienia",
    heroBannerTitle: "Światowe Częstotliwości Na Żywo", heroBannerSub: "Krystalicznie czysty odbiór i mapa radiowa.",
    searchPlaceholder: "Szukaj stacji lub tagu...", recommendedForYou: "Wybrane Dla Ciebie ✨",
    featuredStations: "Polecane Stacje 🔥", localRadios: "Radia z Kraju 🌍", myFavorites: "Moje Ulubione 🔖",
    noFavoritesYet: "Brak zapisanych ulubionych", noFavoritesSubtitle: "Dotknij ikony zakładki, aby zapisać stacje.",
    privacyPolicy: "Polityka Prywatności", termsOfUse: "Warunki Korzystania"
  },
  pt: {
    homeTitle: "Rádio", discoverTitle: "Descobrir", mapTitle: "Mapa", favoritesTitle: "Favoritos", settingsTitle: "Definições",
    heroBannerTitle: "Frequências ao Vivo do Mundo", heroBannerSub: "Transmissão de rádio cristalina e mapa interativo.",
    searchPlaceholder: "Pesquisar estação ou tag...", recommendedForYou: "Recomendados Para Si ✨",
    featuredStations: "Estações em Destaque 🔥", localRadios: "Rádios do País 🌍", myFavorites: "Os Meus Favoritos 🔖",
    noFavoritesYet: "Nenhum favorito guardado", noFavoritesSubtitle: "Toque no ícone de marcador para guardar as estações.",
    privacyPolicy: "Política de Privacidade", termsOfUse: "Termos de Utilização"
  },
  ru: {
    homeTitle: "Радио", discoverTitle: "Обзор", mapTitle: "Карта", favoritesTitle: "Избранное", settingsTitle: "Настройки",
    heroBannerTitle: "Мировые Прямые Эфиры", heroBannerSub: "Кристально чистое радиовещание и интерактивная карта.",
    searchPlaceholder: "Поиск станции или тега...", recommendedForYou: "Выбрано Для Вас ✨",
    featuredStations: "Популярные Станции 🔥", localRadios: "Радио Страны 🌍", myFavorites: "Моё Избранное 🔖",
    noFavoritesYet: "Избранных станций пока нет", noFavoritesSubtitle: "Нажмите на значок закладки, чтобы сохранить станции.",
    privacyPolicy: "Политика Конфиденциальности", termsOfUse: "Условия Использования"
  },
  ar: {
    homeTitle: "راديو", discoverTitle: "استكشف", mapTitle: "الخريطة", favoritesTitle: "المفضلة", settingsTitle: "الإعدادات",
    heroBannerTitle: "ترددات مباشرة من العالم", heroBannerSub: "بث إذاعي عالي الجودة وخريطة تفاعلية.",
    searchPlaceholder: "ابحث عن محطة أو تصنيف...", recommendedForYou: "اخترنا لك ✨",
    featuredStations: "المحطات المميزة 🔥", localRadios: "إذاعات البلد 🌍", myFavorites: "المفضلة 🔖",
    noFavoritesYet: "لا توجد محطات مفضلة بعد", noFavoritesSubtitle: "اضغط على أيقونة الإشارة المرجعية لحفظ المحطات.",
    privacyPolicy: "سياسة الخصوصية", termsOfUse: "شروط الاستخدام"
  },
  hi: {
    homeTitle: "रेडियो", discoverTitle: "खोजें", mapTitle: "मानचित्र", favoritesTitle: "पसंदीदा", settingsTitle: "सेटिंग्स",
    heroBannerTitle: "दुनिया की लाइव आवृत्तियां", heroBannerSub: "क्रिस्टल क्लियर रेडियो स्ट्रीमिंग और मैप एक्सप्लोरेशन।",
    searchPlaceholder: "स्टेशन या टैग खोजें...", recommendedForYou: "आपके लिए चुनिंदा ✨",
    featuredStations: "प्रमुख स्टेशन 🔥", localRadios: "देश के रेडियो 🌍", myFavorites: "मेरे पसंदीदा 🔖",
    noFavoritesYet: "अभी तक कोई पसंदीदा नहीं जोड़ा गया", noFavoritesSubtitle: "स्टेशनों को सहेजने के लिए बुकमार्क आइकन पर टैप करें।",
    privacyPolicy: "गोपनीयता नीति", termsOfUse: "उपयोग की शर्तें"
  },
  ja: {
    homeTitle: "ラジオ", discoverTitle: "発見", mapTitle: "マップ", favoritesTitle: "お気に入り", settingsTitle: "設定",
    heroBannerTitle: "世界のライブ周波数", heroBannerSub: "高音質ラジオストリーミングとマップ検索。",
    searchPlaceholder: "局名やタグを検索...", recommendedForYou: "おすすめの局 ✨",
    featuredStations: "注目のラジオ局 🔥", localRadios: "国内のラジオ局 🌍", myFavorites: "お気に入り 🔖",
    noFavoritesYet: "お気に入りがまだありません", noFavoritesSubtitle: "ブックマークアイコンをタップして保存します。",
    privacyPolicy: "プライバシーポリシー", termsOfUse: "利用規約"
  },
  ko: {
    homeTitle: "라디오", discoverTitle: "탐색", mapTitle: "지도", favoritesTitle: "즐겨찾기", settingsTitle: "설정",
    heroBannerTitle: "전 세계 라이브 주파수", heroBannerSub: "선명한 라디오 스트리밍과 지도 탐색.",
    searchPlaceholder: "방송국 또는 태그 검색...", recommendedForYou: "추천 방송국 ✨",
    featuredStations: "인기 방송국 🔥", localRadios: "국가별 라디오 🌍", myFavorites: "내 즐겨찾기 🔖",
    noFavoritesYet: "저장된 즐겨찾기가 없습니다", noFavoritesSubtitle: "북마크 아이콘을 눌러 즐겨찾기에 추가하세요.",
    privacyPolicy: "개인정보 처리방침", termsOfUse: "이용약관"
  },
  zh: {
    homeTitle: "电台", discoverTitle: "探索", mapTitle: "地图", favoritesTitle: "收藏", settingsTitle: "设置",
    heroBannerTitle: "全球实时电台", heroBannerSub: "高清无损广播与地图探索。",
    searchPlaceholder: "搜索电台或标签...", recommendedForYou: "为您精选 ✨",
    featuredStations: "热门电台 🔥", localRadios: "国家电台 🌍", myFavorites: "我的收藏 🔖",
    noFavoritesYet: "暂无收藏电台", noFavoritesSubtitle: "点击书签图标即可将电台添加到收藏。",
    privacyPolicy: "隐私政策", termsOfUse: "使用条款"
  }
};

const countryFlags = {
  TR: "🇹🇷", US: "🇺🇸", DE: "🇩🇪", GB: "🇬🇧", FR: "🇫🇷", ES: "🇪🇸",
  IT: "🇮🇹", NL: "🇳🇱", PL: "🇵🇱", PT: "🇵🇹", RU: "🇷🇺", AR: "🇪🇬",
  IN: "🇮🇳", JP: "🇯🇵", KR: "🇰🇷", CN: "🇨🇳"
};

const countryCoords = {
  TR: [39.9334, 32.8597], US: [37.0902, -95.7129], DE: [51.1657, 10.4515], GB: [55.3781, -3.436],
  FR: [46.2276, 2.2137], ES: [40.4637, -3.7492], IT: [41.8719, 12.5674], NL: [52.1326, 5.2913],
  PL: [51.9194, 19.1451], PT: [39.3999, -8.2245], RU: [61.524, 105.3188], AR: [26.8206, 30.8025],
  IN: [20.5937, 78.9629], JP: [36.2048, 138.2529], KR: [35.9078, 127.7669], CN: [35.8617, 104.1954]
};

// 2. High-Availability Multi-Country Stations Database (Clean MP3 & HLS Streams)
const defaultStations = [
  // Turkey (TR)
  { id: '1', name: 'Power FM 100.0', streamUrl: 'https://listen.powerapp.com.tr/powerfm/128/chunks.m3u8', countryCode: 'TR', favicon: 'https://static.radio.net/images/broadcasts/0d/fb/1879/1/c300.png', tags: ['pop', 'hits'], lat: 41.0082, lng: 28.9784 },
  { id: '2', name: 'Süper FM', streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/SUPER_FM_SC', countryCode: 'TR', favicon: 'https://static.radio.net/images/broadcasts/0d/fb/1879/1/c300.png', tags: ['pop', 'turkish'], lat: 39.9334, lng: 32.8597 },
  { id: '3', name: 'Joy Türk', streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_TURK_SC', countryCode: 'TR', favicon: 'https://static.radio.net/images/broadcasts/0d/fb/1879/1/c300.png', tags: ['pop', 'turkish'], lat: 40.99, lng: 29.02 },
  { id: '4', name: 'Virgin Radio TR', streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIO_SC', countryCode: 'TR', favicon: 'https://static.radio.net/images/broadcasts/0d/fb/1879/1/c300.png', tags: ['rock', 'pop'], lat: 41.02, lng: 28.98 },
  
  // United Kingdom (GB)
  { id: '5', name: 'BBC Radio 1', streamUrl: 'https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one', countryCode: 'GB', favicon: 'https://static.radio.net/images/broadcasts/cb/1e/1841/1/c300.png', tags: ['pop', 'top40'], lat: 51.5074, lng: -0.1278 },
  { id: '6', name: 'Capital FM London', streamUrl: 'https://icecast.capitaldigital.co.uk/CapitalMP3', countryCode: 'GB', favicon: 'https://static.radio.net/images/broadcasts/cb/1e/1841/1/c300.png', tags: ['hits', 'pop'], lat: 51.515, lng: -0.13 },
  { id: '7', name: 'Heart FM UK', streamUrl: 'https://icecast.heart.co.uk/HeartLondonMP3', countryCode: 'GB', favicon: 'https://static.radio.net/images/broadcasts/cb/1e/1841/1/c300.png', tags: ['pop', 'rock'], lat: 51.52, lng: -0.11 },

  // USA (US)
  { id: '8', name: 'Z100 New York', streamUrl: 'https://stream.revma.ihrhls.com/zc1469', countryCode: 'US', favicon: 'https://static.radio.net/images/broadcasts/cb/1e/1841/1/c300.png', tags: ['pop', 'top40'], lat: 40.7128, lng: -74.006 },
  { id: '9', name: 'KIIS FM Los Angeles', streamUrl: 'https://stream.revma.ihrhls.com/zc185', countryCode: 'US', favicon: 'https://static.radio.net/images/broadcasts/cb/1e/1841/1/c300.png', tags: ['hits', 'pop'], lat: 34.0522, lng: -118.2437 },

  // Germany (DE)
  { id: '10', name: 'Antenne Bayern', streamUrl: 'https://stream.antenne.de/antenne', countryCode: 'DE', favicon: 'https://static.radio.net/images/broadcasts/96/8a/1630/1/c300.png', tags: ['pop', 'hits'], lat: 48.1351, lng: 11.582 },
  { id: '11', name: 'Radio Hamburg', streamUrl: 'https://stream.radiohamburg.de/rhh-live/mp3-192/stream.mp3', countryCode: 'DE', favicon: 'https://static.radio.net/images/broadcasts/96/8a/1630/1/c300.png', tags: ['pop', 'hits'], lat: 53.5511, lng: 9.9937 },
  { id: '12', name: '1LIVE WDR', streamUrl: 'https://wdr-1live-live.icecast.wdr.de/wdr/1live/live/mp3/128/stream.mp3', countryCode: 'DE', favicon: 'https://static.radio.net/images/broadcasts/96/8a/1630/1/c300.png', tags: ['pop', 'dance'], lat: 50.9375, lng: 6.9603 },

  // Spain (ES)
  { id: '13', name: 'Los 40 España', streamUrl: 'https://25633.live.streamtheworld.com/LOS40_SC', countryCode: 'ES', favicon: 'https://static.radio.net/images/broadcasts/1e/8a/1886/1/c300.png', tags: ['pop', 'latin'], lat: 40.4168, lng: -3.7038 },

  // France (FR)
  { id: '14', name: 'NRJ France', streamUrl: 'https://cdn.nrjaudio.fm/adwz1/fr/30001/mp3_128.mp3', countryCode: 'FR', favicon: 'https://static.radio.net/images/broadcasts/1e/8a/1886/1/c300.png', tags: ['dance', 'hits'], lat: 48.8566, lng: 2.3522 },
  { id: '15', name: 'Chérie FM', streamUrl: 'https://cdn.nrjaudio.fm/adwz1/fr/30015/mp3_128.mp3', countryCode: 'FR', favicon: 'https://static.radio.net/images/broadcasts/1e/8a/1886/1/c300.png', tags: ['pop', 'love'], lat: 48.86, lng: 2.34 },

  // Italy (IT)
  { id: '16', name: 'Radio Italia', streamUrl: 'https://stream.radioitalia.it/stream.mp3', countryCode: 'IT', favicon: 'https://static.radio.net/images/broadcasts/5f/0b/1954/1/c300.png', tags: ['pop', 'italian'], lat: 45.4642, lng: 9.19 },
  { id: '17', name: 'RTL 102.5 Milano', streamUrl: 'https://stream.rtl.it/live/rtl1025/mp3/128/stream.mp3', countryCode: 'IT', favicon: 'https://static.radio.net/images/broadcasts/5f/0b/1954/1/c300.png', tags: ['hits', 'pop'], lat: 45.47, lng: 9.20 }
];

// App Global State
let currentLang = 'tr';
let currentCountry = 'TR';
let currentTagFilter = 'ALL';
let currentStation = null;
let isPlaying = false;
let favorites = JSON.parse(localStorage.getItem('radio_favorites') || '[]');
let leafletMap = null;
let timerTimeout = null;
let timerInterval = null;
let timerTargetTime = null;
let activeTimerType = null;
let hlsPlayer = null;

// Audio Elements
const audio = document.getElementById('global-audio-player');
const visualizerCanvas = document.getElementById('visualizer-canvas');
let audioCtx = null;
let analyser = null;

// Fallback Logo Path
const FALLBACK_LOGO = 'assets/logo-removebg.png';

function getFaviconUrl(station) {
  if (!station || !station.favicon || station.favicon === 'null' || station.favicon === 'undefined' || typeof station.favicon !== 'string' || station.favicon.trim() === '') {
    return FALLBACK_LOGO;
  }
  return station.favicon;
}

function safeCreateIcons() {
  if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn('Lucide icon error:', e);
    }
  }
}

let allLoadedStations = [...defaultStations];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupLanguageAndCountry();
  setupThemeSystem();
  setupPlayer();
  setupTimers();
  setupModals();

  // Load full 59,000+ stations dataset asynchronously
  fetch('all_stations_flat.json')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        allLoadedStations = data;
      }
    })
    .catch(err => {
      console.warn('Could not load all_stations_flat.json, fallback to defaults:', err);
    })
    .finally(() => {
      renderHomeStations();
      renderDiscoverStations();
      renderFavorites();
      initMap();
    });

  // Search input handlers
  const homeSearchInput = document.getElementById('home-search-input');
  const discoverSearchInput = document.getElementById('discover-search-input');

  const handleSearch = (q) => {
    currentTagFilter = q ? q : 'ALL';
    if (homeSearchInput) homeSearchInput.value = q;
    if (discoverSearchInput) discoverSearchInput.value = q;
    renderDiscoverStations();
  };

  if (homeSearchInput) {
    homeSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      handleSearch(q);
      if (q) {
        document.querySelector('.nav-item[data-tab="discover"]')?.click();
      }
    });
  }

  if (discoverSearchInput) {
    discoverSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      handleSearch(q);
    });
  }

  // Tag Chips Handler
  document.querySelectorAll('#discover-tags-list .tag-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#discover-tags-list .tag-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTagFilter = btn.getAttribute('data-tag');
      renderDiscoverStations();
    });
  });
});

// 3. Navigation Controller with Hash Routing & Leaflet Resize
function switchTab(tabName) {
  const allTabIds = ['home', 'discover', 'map', 'favorites', 'settings'];
  const targetTab = document.getElementById(`tab-${tabName}`);

  if (!targetTab) return;

  // 1. Force hide ALL tab sections in DOM strictly
  allTabIds.forEach(id => {
    const el = document.getElementById(`tab-${id}`);
    if (el) {
      el.classList.remove('active');
      el.style.cssText = 'display: none !important;';
    }
  });

  // 2. Also query any leftover .tab-content elements and hide them
  document.querySelectorAll('.tab-content').forEach(c => {
    if (c.id !== `tab-${tabName}`) {
      c.classList.remove('active');
      c.style.cssText = 'display: none !important;';
    }
  });

  // 3. Highlight active nav button
  document.querySelectorAll('.nav-item').forEach(b => {
    if (b.getAttribute('data-tab') === tabName) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  // 4. Display ONLY the target tab section
  targetTab.classList.add('active');
  targetTab.style.cssText = 'display: block !important;';

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (tabName === 'map') {
    if (!leafletMap) {
      initMap();
    }
    setTimeout(() => {
      if (leafletMap) leafletMap.invalidateSize();
    }, 150);
  }
}

function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = btn.getAttribute('data-tab');
      if (tabName) {
        window.location.hash = tabName;
        switchTab(tabName);
      }
    });
  });

  document.getElementById('brand-logo-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = 'home';
    switchTab('home');
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(`tab-${hash}`)) {
      switchTab(hash);
    }
  });

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(`tab-${initialHash}`)) {
    switchTab(initialHash);
  }
}

// 4. Language & Country Setup — UNIFIED & GLOBALLY SYNCHRONIZED
function setupLanguageAndCountry() {
  const langSelect = document.getElementById('language-select');
  const headerCountrySelect = document.getElementById('country-select');
  const discoverCountrySelect = document.getElementById('discover-country-select');
  const settingsCountrySelect = document.getElementById('settings-country-select');

  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLanguage(currentLang);
  });

  const onCountryChange = (e) => {
    const selected = e.target.value;
    setGlobalCountry(selected);
  };

  if (headerCountrySelect) headerCountrySelect.addEventListener('change', onCountryChange);
  if (discoverCountrySelect) discoverCountrySelect.addEventListener('change', onCountryChange);
  if (settingsCountrySelect) settingsCountrySelect.addEventListener('change', onCountryChange);
}

function setGlobalCountry(countryCode) {
  currentCountry = countryCode;

  const headerCountrySelect = document.getElementById('country-select');
  const discoverCountrySelect = document.getElementById('discover-country-select');
  const settingsCountrySelect = document.getElementById('settings-country-select');

  const mainCountry = countryCode === 'ALL' ? 'TR' : countryCode;

  if (headerCountrySelect) headerCountrySelect.value = mainCountry;
  if (discoverCountrySelect) discoverCountrySelect.value = countryCode;
  if (settingsCountrySelect) settingsCountrySelect.value = mainCountry;

  renderHomeStations();
  renderDiscoverStations();

  if (leafletMap && countryCoords[mainCountry]) {
    leafletMap.setView(countryCoords[mainCountry], 5);
  }
}

function updateLanguage(lang) {
  const dict = translations[lang] || translations.tr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  renderHomeStations();
}

// 5. Theme System
function setupThemeSystem() {
  const themeToggle = document.getElementById('theme-toggle-btn');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeToggle.innerHTML = isLight ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
    safeCreateIcons();
  });

  document.querySelectorAll('[data-accent-set]').forEach(btn => {
    btn.addEventListener('click', () => {
      const accent = btn.getAttribute('data-accent-set');
      document.body.setAttribute('data-accent', accent);
    });
  });
}

// 6. Audio Player Controller — WITH HLS.JS & ERROR HANDLERS
function setupPlayer() {
  const miniPlayBtn = document.getElementById('mini-play-btn');
  const fullPlayBtn = document.getElementById('full-play-btn');
  const miniFavBtn = document.getElementById('mini-fav-btn');

  miniPlayBtn.addEventListener('click', togglePlayPause);
  fullPlayBtn.addEventListener('click', togglePlayPause);

  miniFavBtn.addEventListener('click', () => {
    if (currentStation) toggleFavorite(currentStation);
  });

  audio.addEventListener('playing', () => {
    isPlaying = true;
    updatePlayerUI();
  });

  audio.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayerUI();
  });

  audio.addEventListener('error', (e) => {
    console.warn('Audio stream error event:', e);
    isPlaying = false;
    updatePlayerUI();
  });
}

function playStation(station) {
  currentStation = station;
  const url = station.streamUrl;

  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Clean up existing HLS player if active
  if (hlsPlayer) {
    hlsPlayer.destroy();
    hlsPlayer = null;
  }

  // 1. Play via HLS.js if URL is .m3u8 and HLS.js is supported
  if (url.includes('.m3u8') && typeof Hls !== 'undefined' && Hls.isSupported()) {
    hlsPlayer = new Hls({
      enableWorker: true,
      lowLatencyMode: true
    });
    hlsPlayer.loadSource(url);
    hlsPlayer.attachMedia(audio);
    hlsPlayer.on(Hls.Events.MANIFEST_PARSED, () => {
      audio.play().then(() => {
        isPlaying = true;
        updatePlayerUI();
      }).catch(err => {
        console.warn('HLS Autoplay prevented:', err);
        isPlaying = false;
        updatePlayerUI();
      });
    });
    hlsPlayer.on(Hls.Events.ERROR, (event, data) => {
      if (data.fatal) {
        console.warn('Fatal HLS error:', data);
        isPlaying = false;
        updatePlayerUI();
      }
    });
  } 
  // 2. Play via native browser HLS (Safari iOS/macOS)
  else if (url.includes('.m3u8') && audio.canPlayType('application/vnd.apple.mpegurl')) {
    audio.src = url;
    audio.play().then(() => {
      isPlaying = true;
      updatePlayerUI();
    }).catch(err => {
      console.warn('Native HLS play error:', err);
      isPlaying = false;
      updatePlayerUI();
    });
  } 
  // 3. Play standard MP3 / AAC direct streams
  else {
    audio.src = url;
    audio.play().then(() => {
      isPlaying = true;
      updatePlayerUI();
    }).catch(err => {
      console.warn('Direct stream play error:', err);
      isPlaying = false;
      updatePlayerUI();
    });
  }

  updatePlayerUI();
  setupAudioVisualizer();
}

function togglePlayPause() {
  if (!currentStation) {
    playStation(defaultStations[0]);
    return;
  }

  if (audio.paused) {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayerUI();
    }).catch(e => {
      console.warn('Toggle play error:', e);
      isPlaying = false;
      updatePlayerUI();
    });
  } else {
    audio.pause();
    isPlaying = false;
    updatePlayerUI();
  }
}

function updatePlayerUI() {
  const miniPlayerBar = document.getElementById('mini-player');
  if (!currentStation) {
    if (miniPlayerBar) miniPlayerBar.style.display = 'none';
    return;
  }
  if (miniPlayerBar) miniPlayerBar.style.display = 'block';

  const titleEl = document.getElementById('mini-player-title');
  const thumbEl = document.getElementById('mini-player-thumb');
  const fullTitle = document.getElementById('full-player-title');
  const fullArt = document.getElementById('full-player-art');
  const waveIndicator = document.getElementById('mini-live-wave');

  titleEl.textContent = currentStation.name;
  fullTitle.textContent = currentStation.name;

  const imgSrc = getFaviconUrl(currentStation);
  thumbEl.src = imgSrc;
  thumbEl.onerror = function() { this.src = FALLBACK_LOGO; };

  fullArt.src = imgSrc;
  fullArt.onerror = function() { this.src = FALLBACK_LOGO; };

  const iconName = isPlaying ? 'pause' : 'play';
  document.getElementById('mini-play-btn').innerHTML = `<i data-lucide="${iconName}"></i>`;
  document.getElementById('full-play-btn').innerHTML = `<i data-lucide="${iconName}" style="width: 28px; height: 28px; margin-left: 2px;"></i>`;
  waveIndicator.style.display = isPlaying ? 'flex' : 'none';

  safeCreateIcons();
}

function setupAudioVisualizer() {
  if (!visualizerCanvas || audioCtx) return;

  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 64;

    const ctx = visualizerCanvas.getContext('2d');
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function draw() {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);

      const barWidth = (visualizerCanvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * visualizerCanvas.height;
        ctx.fillStyle = '#FF5A36';
        ctx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 2;
      }
    }
    draw();
  } catch (e) {
    console.log('Visualizer fallback enabled');
  }
}

// 7. Render Stations — RESPECT UNIFIED GLOBAL COUNTRY STATE
function renderHomeStations() {
  const recGrid = document.getElementById('recommended-stations-grid');
  const featGrid = document.getElementById('featured-stations-grid');
  const localGrid = document.getElementById('local-stations-grid');
  const localTitle = document.getElementById('local-radios-title');

  if (!recGrid || !featGrid || !localGrid) return;

  recGrid.innerHTML = '';
  featGrid.innerHTML = '';
  localGrid.innerHTML = '';

  const mainCountry = currentCountry === 'ALL' ? 'TR' : currentCountry;
  const countryStations = allLoadedStations.filter(s => s.countryCode === mainCountry);
  const displayStations = countryStations.length > 0 ? countryStations : allLoadedStations;

  const flagEmoji = countryFlags[mainCountry] || '🌍';
  const dict = translations[currentLang] || translations.tr;
  if (localTitle) {
    localTitle.innerHTML = `<i data-lucide="globe" style="color: #3B82F6;"></i> <span>${dict.localRadios || 'Ülke Radyoları'} (${mainCountry} ${flagEmoji})</span>`;
  }

  // Recommended: top 8 default/popular stations
  allLoadedStations.slice(0, 8).forEach(s => recGrid.appendChild(createStationCard(s)));
  // Featured: top 8 for current selected country
  displayStations.slice(0, 8).forEach(s => featGrid.appendChild(createStationCard(s)));
  // Local: display all stations for current country
  displayStations.forEach(s => localGrid.appendChild(createStationCard(s)));

  safeCreateIcons();
}

function renderDiscoverStations() {
  const grid = document.getElementById('discover-stations-grid');
  if (!grid) return;
  grid.innerHTML = '';

  let list = allLoadedStations;

  // 1. Filter by country if specific country selected
  if (currentCountry !== 'ALL') {
    const matched = list.filter(s => s.countryCode === currentCountry);
    if (matched.length > 0) list = matched;
  }

  // 2. Filter by genre tag or search query
  if (currentTagFilter !== 'ALL') {
    const tag = currentTagFilter.toLowerCase();
    list = list.filter(s => (s.tags && s.tags.some(t => t.toLowerCase().includes(tag))) || s.name.toLowerCase().includes(tag));
  }

  // Display top matching stations (up to 300 items) for maximum UI performance
  list.slice(0, 300).forEach(s => grid.appendChild(createStationCard(s)));
  safeCreateIcons();
}

function createStationCard(station) {
  const isFav = favorites.some(f => f.id === station.id);
  const card = document.createElement('div');
  card.className = 'station-card';

  const imgSrc = getFaviconUrl(station);
  const tagList = Array.isArray(station.tags) ? station.tags.join(' • ') : 'Radio';

  card.innerHTML = `
    <div class="card-top">
      <div class="station-img-wrapper">
        <img src="${imgSrc}" alt="${station.name}" onerror="this.onerror=null; this.src='${FALLBACK_LOGO}';">
      </div>
      <div class="station-info">
        <div class="station-name">${station.name}</div>
        <div class="station-meta">${tagList}</div>
      </div>
      <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${station.id}">
        <i data-lucide="bookmark"></i>
      </button>
    </div>
    <div class="card-actions">
      <span style="font-size: 11px; font-weight: 700; color: var(--text-muted);">${station.countryCode} • 128k</span>
      <button class="play-station-btn">
        <i data-lucide="play" style="width: 14px; height: 14px;"></i> Dinle
      </button>
    </div>
  `;

  card.querySelector('.play-station-btn').addEventListener('click', () => playStation(station));
  card.querySelector('.fav-btn').addEventListener('click', () => toggleFavorite(station));

  return card;
}

// 8. Favorites Controller
function toggleFavorite(station) {
  const index = favorites.findIndex(f => f.id === station.id);
  if (index >= 0) {
    favorites.splice(index, 1);
  } else {
    favorites.push(station);
  }

  localStorage.setItem('radio_favorites', JSON.stringify(favorites));
  renderFavorites();
  renderHomeStations();
  renderDiscoverStations();
}

function renderFavorites() {
  const grid = document.getElementById('favorites-stations-grid');
  const noFavsView = document.getElementById('no-favorites-view');

  if (!grid) return;
  grid.innerHTML = '';
  if (favorites.length === 0) {
    if (noFavsView) noFavsView.style.display = 'block';
  } else {
    if (noFavsView) noFavsView.style.display = 'none';
    favorites.forEach(s => grid.appendChild(createStationCard(s)));
  }
}

// 9. Leaflet World Map
function initMap() {
  const mapEl = document.getElementById('map-container');
  if (!mapEl) return;

  if (!leafletMap) {
    leafletMap = L.map('map-container').setView([39.9334, 32.8597], 3);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap & CartoDB'
    }).addTo(leafletMap);
  }

  // Plot stations with coordinates
  const mappedStations = allLoadedStations.filter(s => s.lat && s.lng);
  mappedStations.slice(0, 300).forEach(s => {
    const marker = L.marker([s.lat, s.lng]).addTo(leafletMap);
    marker.bindPopup(`<b>${s.name}</b><br><span style="font-size:11px;color:#888;">${s.countryCode}</span><br><button onclick="playStationById('${s.id}')" style="margin-top:6px; padding:4px 10px; background:#FF5A36; color:#fff; border:none; border-radius:6px; cursor:pointer;">Dinle</button>`);
  });
}

window.playStationById = function(id) {
  const s = allLoadedStations.find(x => x.id === id);
  if (s) playStation(s);
};

// 10. Timers Engine
function setupTimers() {
  const timerModal = document.getElementById('timer-modal');
  const closeTimerBtn = document.getElementById('close-timer-modal-btn');
  const cancelBtn = document.getElementById('cancel-active-timer-btn');

  document.getElementById('mini-timer-btn').addEventListener('click', () => openTimerModal('sleep'));
  document.getElementById('full-timer-sleep-btn').addEventListener('click', () => openTimerModal('sleep'));
  document.getElementById('full-timer-alarm-btn').addEventListener('click', () => openTimerModal('alarm'));

  closeTimerBtn.addEventListener('click', () => timerModal.classList.remove('active'));

  document.querySelectorAll('.timer-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = parseInt(btn.getAttribute('data-mins'));
      startTimer(mins);
      timerModal.classList.remove('active');
    });
  });

  document.getElementById('set-custom-timer-btn').addEventListener('click', () => {
    const input = document.getElementById('custom-minutes-input');
    const mins = parseInt(input.value);
    if (mins > 0) {
      startTimer(mins);
      timerModal.classList.remove('active');
    }
  });

  cancelBtn.addEventListener('click', cancelTimer);
}

function openTimerModal(type) {
  activeTimerType = type;
  document.getElementById('timer-modal-title').textContent = type === 'sleep' ? 'Uyku Zamanlayıcısı Kur 🌙' : 'Alarm Kur ⏰';
  document.getElementById('timer-modal').classList.add('active');
}

function startTimer(minutes) {
  cancelTimer();
  timerTargetTime = Date.now() + minutes * 60 * 1000;

  timerInterval = setInterval(updateTimerBanner, 1000);
  timerTimeout = setTimeout(() => {
    if (activeTimerType === 'sleep') {
      audio.pause();
    } else {
      audio.play();
    }
    cancelTimer();
  }, minutes * 60 * 1000);

  updateTimerBanner();
}

function updateTimerBanner() {
  const banner = document.getElementById('active-timer-banner');
  const timeText = document.getElementById('active-timer-time');

  if (!timerTargetTime) {
    banner.style.display = 'none';
    return;
  }

  banner.style.display = 'flex';
  const remaining = Math.max(0, Math.floor((timerTargetTime - Date.now()) / 1000));
  const m = Math.floor(remaining / 60).toString().padStart(2, '0');
  const s = (remaining % 60).toString().padStart(2, '0');
  timeText.textContent = `Kalan Süre: ${m}:${s}`;
}

function cancelTimer() {
  if (timerTimeout) clearTimeout(timerTimeout);
  if (timerInterval) clearInterval(timerInterval);
  timerTimeout = null;
  timerInterval = null;
  timerTargetTime = null;
  document.getElementById('active-timer-banner').style.display = 'none';
}

// 11. Modals Setup
function setupModals() {
  const playerModal = document.getElementById('player-modal');
  const rateModal = document.getElementById('rate-app-modal');

  document.getElementById('expand-player-btn')?.addEventListener('click', () => playerModal?.classList.add('active'));
  document.getElementById('close-player-modal-btn')?.addEventListener('click', () => playerModal?.classList.remove('active'));

  document.getElementById('close-rate-modal-btn')?.addEventListener('click', () => {
    rateModal?.classList.remove('active');
  });

  document.querySelectorAll('.rate-action-btn, .rate-store-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.setItem('radio_position_rated', 'true');
      rateModal?.classList.remove('active');
    });
  });

  setupRatingPrompt();
  setupSmartAppBanner();
}

// 12. Rating Prompt (3rd Visit)
function setupRatingPrompt() {
  let visits = parseInt(localStorage.getItem('radio_position_visits') || '0', 10) + 1;
  localStorage.setItem('radio_position_visits', visits);

  const hasRated = localStorage.getItem('radio_position_rated');
  if (visits >= 3 && !hasRated) {
    setTimeout(() => {
      const rateModal = document.getElementById('rate-app-modal');
      if (rateModal) rateModal.classList.add('active');
    }, 2000);
  }
}

// 13. Smart Mobile App Banner Controller
function setupSmartAppBanner() {
  const banner = document.getElementById('smart-app-banner');
  const openBtn = document.getElementById('smart-banner-open-btn');
  const closeBtn = document.getElementById('close-smart-banner');

  if (!banner || !openBtn) return;

  if (sessionStorage.getItem('smart_banner_closed') === 'true') {
    banner.style.display = 'none';
    return;
  }

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

  if (isAndroid) {
    openBtn.href = 'https://play.google.com/store/apps/details?id=com.sk.radio_position';
  } else if (isIOS) {
    openBtn.href = 'https://apps.apple.com/us/app/radio-position/id6796070312';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      banner.style.display = 'none';
      sessionStorage.setItem('smart_banner_closed', 'true');
    });
  }
}
