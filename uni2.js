// --- 1. LANGUAGE DATA AND STATE ---
const langData = {
    ar: {
        dir: 'rtl',
        appTitle: 'Uni-Map',
        tagline: 'جامعتك ... في خريطة واحدة',
        mapBtn: 'الخريطة',
        categoriesBtn: 'التصنيفات',
        searchPlaceholder: 'ابحث عن قاعة، مخبر...',
        settingsTitle: 'الإعدادات',
        languageTitle: 'اللغة',
        themeTitle: 'المظهر',
        aboutAppTitle: 'حول التطبيق',
        aboutUsTitle: 'حولنا',
        helpTitle: 'المساعدة والدعم',
        chatTitle: 'المساعد الذكي',
        chatWelcome: 'مرحباً! أنا مساعدك الذكي. اسألني عن أي مكان في الجامعة.',
        chatInput: 'اكتب سؤالك هنا...',
        backBtn: 'رجوع',
        favouriteitems: 'قائمتي المفضلة',
        locationType_Service: 'خدمة',
        locationType_Faculty: 'كلية',
        locationType_Lab: 'مختبر/قاعة',
        locationType_Admin: 'إدارة',
        searchEmpty: 'لا توجد نتائج مطابقة لبحثك.',
        searchTitle: 'نتائج البحث',
        locCardBtn: 'حسناً',
        locCardDetails: 'تفاصيل الموقع',
        chatTyping: 'يكتب...',
        // --- FILTER STRINGS ---
        filterAll: 'الكل',
        // --- CHATBOT CORE STRINGS ---
        chatFoundLocation: (name) => `بالتأكيد! وجدت الموقع ${name}. هل تود الانتقال إليه على الخريطة؟`,
        chatDirecting: (name) => `يتم الآن توجيهك إلى ${name}...`,
        chatGreeting: 'أهلاً بك! أنا مساعدك الذكي. يمكنك أن تسألني عن أي مكان في الجامعة.',
        chatFarewell: 'شكراً لاستخدامك Uni-Map! أتمنى لك يوماً سعيداً.',
        chatUnknown: 'عفواً، لم أفهم سؤالك. يرجى محاولة البحث باسم موقع محدد أو فئة (مثل "الكليات").',
        chatSorry: 'آسف، لم أجد هذا الموقع أو هذه المعلومة. حاول البحث باسم مبنى أو تصنيف محدد.',

        // --- CHATBOT INFO/DETAIL STRINGS ---
        chatHoursUnavailable: "لا تتوفر معلومات حول ساعات العمل حالياً.",
        chatHoursResponse: (name, hours) => `ساعات عمل ${name} هي: ${hours}`,
        chatContactNoPhone: "لا يوجد رقم هاتف متاح.",
        chatContactNoEmail: "لا يوجد بريد إلكتروني متاح.",
        chatContactUnavailable: (name) => `لا تتوفر معلومات الاتصال لـ ${name} حالياً.`,
        chatContactResponse: (name, phone, email) => `معلومات اتصال ${name}:<br>الهاتف: ${phone}<br>البريد الإلكتروني: ${email}`,
        chatDetailUnavailable: "لا تتوفر تفاصيل وصفية لهذا الموقع.",
        chatDetailResponse: (name, desc) => `${name}: ${desc}.`,
        chatCategoryTip: "يمكنك كتابة اسم موقع محدد لتوجيهك إليه.",
        chatCategoryHeader: (categoryName) => `إليك قائمة المواقع تحت تصنيف ${categoryName}:`,
        chatFeatureHelp: "يمكنني مساعدتك في العثور على أي موقع بالجامعة. اسألني عن اسم مبنى، أو نوع مبنى (مثل: 'قائمة الكليات')، أو حتى اسألني عن ساعات عمل أو معلومات اتصال موقع معين.",

        // --- CHATBOT QUICK REPLY STRINGS ---
        chatWelcomeImproved: 'مرحباً! أنا مساعدك الذكي. اسألني عن أي مكان في الجامعة (مثل: المكتبة، الإدارة...).',
        chatReply1: 'كلية العلوم',
        chatReply2: 'المكتبة المركزية',
        chatReply3: 'قاعة المحاضرات A',
        
        // --- NAVIGATION STRINGS ---
        navStart: 'موقعي الحالي',
        navError: 'عفواً، لا يمكن تحديد موقعك.',
        navRouteError: 'لم يتم العثور على مسار.',
        navCalculating: 'جاري حساب المسار...'
    },
    en: {
        dir: 'ltr',
        appTitle: 'Uni-Map',
        tagline: 'Your University... In One Map',
        mapBtn: 'Map',
        categoriesBtn: 'Categories',
        searchPlaceholder: 'Search for a room, lab...',
        settingsTitle: 'Settings',
        languageTitle: 'Language',
        themeTitle: 'Theme',
        aboutAppTitle: 'About App',
        aboutUsTitle: 'About Us',
        helpTitle: 'Help & Support',
        chatTitle: 'Smart Assistant',
        chatWelcome: 'Hello! I am your Smart Assistant. Ask me about any location on campus.',
        chatInput: 'Type your question here...',
        backBtn: 'Back',
        favouriteitems: 'Favourite list',
        locationType_Service: 'Service',
        locationType_Faculty: 'Faculty',
        locationType_Lab: 'Lab/Room',
        locationType_Admin: 'Administration',
        searchEmpty: 'No results found matching your query.',
        searchTitle: 'Search Results',
        locCardBtn: 'OK',
        locCardDetails: 'Location Details',
        chatTyping: 'is typing...',
        filterAll: 'All',
        // --- CHATBOT CORE STRINGS ---
        chatFoundLocation: (name) => `I found ${name}. Would you like to navigate to it on the map?`,
        chatDirecting: (name) => `Directing you to ${name} now...`,
        chatGreeting: 'Hello! I am your Smart Assistant. Ask me about any location on campus.',
        chatFarewell: 'Thank you for using Uni-Map! Have a great day.',
        chatUnknown: 'Sorry, I don\'t understand your question. Please try searching for a specific location name or category (like "Faculties").',
        chatSorry: 'Sorry, I could not find this location or information. Try searching for a specific building name or category.',

        // --- CHATBOT INFO/DETAIL STRINGS ---
        chatHoursUnavailable: "Operating hours information is currently unavailable.",
        chatHoursResponse: (name, hours) => `The operating hours for ${name} are: ${hours}`,
        chatContactNoPhone: "No phone number available.",
        chatContactNoEmail: "No email address available.",
        chatContactUnavailable: (name) => `Contact information for ${name} is not available.`,
        chatContactResponse: (name, phone, email) => `Contact info for ${name}:<br>Phone: ${phone}<br>Email: ${email}`,
        chatDetailUnavailable: "Descriptive details are not available for this location.",
        chatDetailResponse: (name, desc) => `${name}:\n${desc}.`,
        chatCategoryTip: "You can type a specific location name to be directed to it.",
        chatCategoryHeader: (categoryName) => `Here is the list of locations under the ${categoryName} category:`,
        chatFeatureHelp: "I can help you find any location on campus. Ask me for a building name, a building type (e.g., 'list of faculties'), or even for a location's opening hours or contact info.",

        // --- CHATBOT QUICK REPLY STRINGS ---
        chatWelcomeImproved: 'Hello! I am your smart assistant. Ask me about any location on campus (e.g., Library, Administration...).',
        chatReply1: 'Faculty of Science',
        chatReply2: 'Central Library',
        chatReply3: 'Lecture Hall A',
        
        // --- NAVIGATION STRINGS ---
        navStart: 'My Location',
        navError: 'Sorry, unable to get your location.',
        navRouteError: 'No route found.',
        navCalculating: 'Calculating route...'
    },
    fr: {
        dir: 'ltr',
        appTitle: 'Uni-Map',
        tagline: 'Votre université... sur une seule carte',
        mapBtn: 'Carte',
        categoriesBtn: 'Catégories',
        searchPlaceholder: 'Rechercher une salle, un labo...',
        settingsTitle: 'Paramètres',
        languageTitle: 'Langue',
        themeTitle: 'Thème',
        aboutAppTitle: 'À propos de l\'application',
        aboutUsTitle: 'À propos de nous',
        helpTitle: 'Aide et Support',
        chatTitle: 'Assistant Intelligent',
        chatWelcome: 'Bonjour! Je suis votre assistant intelligent. Demandez-moi n\'importe quel endroit sur le campus.',
        chatInput: 'Tapez votre question ici...',
        backBtn: 'Retour',
        favouriteitems: 'Liste des favoris',
        locationType_Service: 'Service',
        locationType_Faculty: 'Faculté',
        locationType_Lab: 'Laboratoire/Salle',
        locationType_Admin: 'Administration',
        searchEmpty: 'Aucun résultat trouvé correspondant à votre recherche.',
        searchTitle: 'Résultats de Recherche',
        locCardBtn: 'OK',
        locCardDetails: 'Détails de l\'emplacement',
        chatTyping: 'est en train d\'écrire...',
        filterAll: 'Tout',
        // --- CHATBOT CORE STRINGS ---
        chatFoundLocation: (name) => `J'ai trouvé ${name}. Voulez-vous y naviguer sur la carte ?`,
        chatDirecting: (name) => `Redirection vers ${name} maintenant...`,
        chatGreeting: 'Bonjour! Je suis votre assistant intelligent. Demandez-moi n\'importe quel endroit sur le campus.',
        chatFarewell: 'Merci d\'utiliser Uni-Map! Passez une bonne journée.',
        chatUnknown: 'Désolé, je ne comprends pas votre question. Veuillez essayer de rechercher un nom de lieu spécifique ou une catégorie (comme "Facultés").',
        chatSorry: 'Désolé, je n\'ai pas pu trouver cet emplacement ou cette information. Essayez de rechercher un nom de bâtiment ou une catégorie spécifique.',

        // --- CHATBOT INFO/DETAIL STRINGS ---
        chatHoursUnavailable: "Les informations sur les heures d'ouverture ne sont pas disponibles actuellement.",
        chatHoursResponse: (name, hours) => `Les horaires d'ouverture de ${name} sont : ${hours}`,
        chatContactNoPhone: "Aucun numéro de téléphone disponible.",
        chatContactNoEmail: "Aucune adresse e-mail disponible.",
        chatContactUnavailable: (name) => `Les informations de contact pour ${name} ne sont pas disponibles.`,
        chatContactResponse: (name, phone, email) => `Informations de contact pour ${name}:<br>Téléphone : ${phone}<br>E-mail : ${email}`,
        chatDetailUnavailable: "Les détails descriptifs ne sont pas disponibles pour cet emplacement.",
        chatDetailResponse: (name, desc) => `${name}:\n${desc}.`,
        chatCategoryTip: "Vous pouvez taper un nom de lieu spécifique pour y être dirigé.",
        chatCategoryHeader: (categoryName) => `Voici la liste des emplacements sous ${categoryName}:`,
        chatFeatureHelp: "Je peux vous aider à trouver n'importe quel endroit sur le campus. Demandez-moi le nom d'un bâtiment, un type de bâtiment (par exemple, 'liste des facultés'), ou même les heures d'ouverture ou les coordonnées d'un lieu spécifique.",

        // --- CHATBOT QUICK REPLY STRINGS ---
        chatWelcomeImproved: 'Bonjour ! Je suis votre assistant intelligent. Demandez-moi n\'importe quel emplacement sur le campus (ex: Bibliothèque, Administration...).',
        chatReply1: 'Faculté des Sciences',
        chatReply2: 'Bibliothèque Centrale',
        chatReply3: 'Salle de Conférence A',
        
        // --- NAVIGATION STRINGS ---
        navStart: 'Ma Position',
        navError: 'Désolé, impossible d\'obtenir votre position.',
        navRouteError: 'Aucun itinéraire trouvé.',
        navCalculating: 'Calcul de l\'itinéraire...'
    }
};

let currentLang = localStorage.getItem('uniMap_lang') || 'ar';

// --- 2. BASIC DATABASE (LOCATION DATA) ---
window.locationsData = [
    {
        id: 'FST01',
        names: { ar: "كلية العلوم والتكنولوجيا 1", en: "Faculty of Science and Technology 1", fr: "Faculty de Science et Technologie 1" },
        type: 'locationType_Faculty',
        lat: 35.705045,
        lng: 0.582236,
        image: "deafult.jpg",
        description: { ar: "", en: "Faculty of Science and Technology, building 1.", fr: "Faculté des Sciences et de la Technologie, bâtiment 1." }
    },
    {
        id: 'FST02',
        names: { ar: "كلية العلوم والتكنولوجيا 2", en: "Faculty of Science and Technology 2", fr: "Faculty de science et technologie 2" },
        type: 'locationType_Faculty',
        lat: 35.705948,
        lng: 0.58051,
        image: "newST.jpeg",
        description: { ar: "", en: "Faculty of Science and Technology, building 2.", fr: "Faculté des Sciences et de la Technologie, bâtiment 2." }
    },
    {
        id: 'FSNV',
        names: { ar: "كلية علوم الطبيعة والحياة", en: "Faculty of Natural and Life Sciences", fr: "Faculty de science naturelle de la vie" },
        type: 'locationType_Faculty',
        lat: 35.70677465536976,
        lng: 0.5823945743693241,
        image: "IMG_4704.jpg",
        description: { ar: "", en: "Faculty of Natural and Life Sciences.", fr: "Faculté des Sciences de la Nature et de la Vie." }
    },
    {
        id: 'FLAW',
        names: { ar: "كلية الحقوق", en: "Faculty of Law", fr: "Faculty de droit" },
        type: 'locationType_Faculty',
        lat: 35.704982,
        lng: 0.580553,
        image: "default.jpg",
        description: { ar: "", en: "Faculty of Law.", fr: "Faculté de Droit." }
    },
    {
        id: 'FLE01',
        names: { ar: "كلية اللغات الأجنبية 1", en: "Faculty of Foreign Languages 1", fr: "Faculty de langue étrangère 1" },
        type: 'locationType_Faculty',
        lat: 35.705318,
        lng: 0.57683,
        image: "default.jpg",
        description: { ar: "", en: "Faculty of Foreign Languages, building 1.", fr: "Faculté des Langues Étrangères, bâtiment 1." }
    },
    {
        id: 'FLE02',
        names: { ar: "كلية اللغات الأجنبية 2", en: "Faculty of Foreign Languages 2", fr: "Faculty de langue Étrangère 2" },
        type: 'locationType_Faculty',
        lat: 35.706044,
        lng: 0.577453,
        image: "default.jpg",
        description: { ar: "", en: "Faculty of Foreign Languages, building 2.", fr: "Faculté des Langues Étrangères, bâtiment 2." }
    },
    {
        id: 'FCOM',
        names: { ar: "كلية التجارة", en: "Faculty of Commerce", fr: "Faculty de commerse" },
        type: 'locationType_Faculty',
        lat: 35.704743,
        lng: 0.578025,
        image: "default.jpg",
        description: { ar: "", en: "Faculty of Commerce.", fr: "Faculté de Commerce." }
    },
    {
        id: 'CLIB',
        names: { ar: "المكتبة المركزية (ثانية)", en: "Central Library (Second Entry)", fr: "Bibliothèque Centrale" },
        type: 'locationType_Service',
        lat: 35.705386,
        lng: 0.579608,
        image: "default.jpg",
        description: { ar: "", en: "Central Library location, second entry.", fr: "Emplacement de la Bibliothèque Centrale." }
    },
    {
        id: 'UREST',
        names: { ar: "المطعم الجامعي", en: "University Restaurant", fr: "Restaurant universitaire" },
        type: 'locationType_Service',
        lat: 35.703445,
        lng: 0.579226,
        image: "default.jpg",
        description: { ar: "", en: "University student restaurant.", fr: "Restaurant pour les étudiants de l'université." }
    },
    {
        id: 'FSOC',
        names: { ar: "كلية العلوم الاجتماعية", en: "Faculty of Social Sciences", fr: "Faculty de sociaux" },
        type: 'locationType_Faculty',
        lat: 35.705791,
        lng: 0.583965,
        image: "sosio.jpeg",
        description: { ar: "", en: "Faculty of Social Sciences.", fr: "Faculté des Sciences Sociales." }
    },
    {
        id: 'RECT',
        names: { ar: "رئاسة الجامعة", en: "University Rectorate", fr: "Rectorat de la université" },
        type: 'locationType_Admin',
        lat: 35.703769,
        lng: 0.57714,
        image: "default.jpg",
        description: { ar: "", en: "Main University Rectorate/Administration building.", fr: "Bâtiment principal du Rectorat de l'université." }
    }
];

// --- 3. DOM ELEMENT REFERENCES & State ---
let map;
let locationCardTimeout;
let markers = {};
let favoriteLocations = JSON.parse(localStorage.getItem('uniMap_favorites')) || [];
let activeLocationId = null;
let currentRouteLayer = null; // Store the route line
let currentUserMarker = null; // Store the user's location pin

const views = {
    home: document.getElementById('home-view'),
    map: document.getElementById('map-view'),
    chat: document.getElementById('chatbot-view'),
    aboutApp: document.getElementById('about-app-view'),
    aboutUs: document.getElementById('about-us-view'),
    help: document.getElementById('help-view')
};
const chatContainer = document.getElementById('chatContainer');
const chatInput = document.getElementById('chatInput');
const settingsList = document.getElementById('settingsList');
const languageOptions = document.getElementById('languageOptions');
const searchResultsList = document.getElementById('searchResultsList');
const frame = document.querySelector('.phone-frame');
const themeToggleCheckbox = document.getElementById('themeToggle');

// --- 4. CORE NAVIGATION & OVERLAY FUNCTIONS ---
function navTo(target) {
    Object.values(views).forEach(v => {
        v.classList.add('hidden-down');
        v.classList.remove('hidden-up');
    });
    document.getElementById('statusBar').classList.remove('white-text');
    views.map.classList.remove('overlay-active');
    closeOverlays();
    closeLocationCard();
    closeDirectionCard(); // NEW: Close direction card on nav

    if (target === 'home') {
        views.home.classList.remove('hidden-down');
    } else if (target === 'map') {
        views.map.classList.remove('hidden-down');
        if (!map) initMap(); 
        if (map) map.invalidateSize();
    } else if (target === 'chat') {
        views.chat.classList.remove('hidden-down');
        document.getElementById('statusBar').classList.add('white-text');
    } else if (target === 'aboutApp') {
        views.aboutApp.classList.remove('hidden-down');
        document.getElementById('statusBar').classList.add('white-text');
    } else if (target === 'aboutUs') {
        views.aboutUs.classList.remove('hidden-down');
        document.getElementById('statusBar').classList.add('white-text');
    } else if (target === 'help') {
        views.help.classList.remove('hidden-down');
        document.getElementById('statusBar').classList.add('white-text');
    }
}
function openOverlay(overlayId) {
    closeOverlays();
    closeLocationCard();
    closeDirectionCard(); // NEW
    
    const overlay = document.getElementById(overlayId + 'Overlay');
    if (overlay) {
        overlay.classList.add('open');
        views.map.classList.add('overlay-active');
        if (overlayId === 'settings') {
            settingsList.classList.remove('hidden-left');
            languageOptions.classList.add('hidden-right');
        }
        if (overlayId === 'search') {
            handleSearch(document.getElementById('mapSearch').value);
        }
        if (overlayId === 'favorites') {
            renderFavoritesList();
        }
    }
}
function closeOverlays() {
    document.querySelectorAll('.overlay-panel').forEach(overlay => {
        overlay.classList.remove('open');
    });
    views.map.classList.remove('overlay-active');
}
function renderFavoritesList() {
    const listContainer = document.getElementById('favoritesList');
    const lang = langData[currentLang];
    listContainer.innerHTML = ''; 

    if (favoriteLocations.length === 0) {
        listContainer.innerHTML = `<div class="empty-state">${lang.searchEmpty}</div>`;
        return;
    }
    const favoriteData = window.locationsData.filter(loc => favoriteLocations.includes(loc.id));
    favoriteData.forEach(location => {
        const item = document.createElement('div');
        item.className = 'search-result-item favorite-item';
        item.setAttribute('data-loc-id', location.id);
        item.innerHTML = `
            <div class="result-info">
                <div class="result-title">${getLocalizedLocationName(location)}</div>
                <div class="result-meta">${getLocalizedLocationType(location)}</div>
            </div>
            <i class="fa-solid fa-star favorited-star"></i>
        `;
        item.onclick = () => {
            openLocationCard(location);
            closeOverlays();
        };
        listContainer.appendChild(item);
    });
}

// --- 5. SETTINGS NAVIGATION & LANGUAGE HANDLERS ---
function handleSettingsNav(targetViewId) {
    closeOverlays();
    setTimeout(() => {
        navTo(targetViewId);
    }, 350);
}
function openLanguageOptions() {
    settingsList.classList.add('hidden-left');
    languageOptions.classList.remove('hidden-right');
    const lang = langData[currentLang];
    document.querySelector('#languageOptions .chat-back-btn').innerHTML =
        `<i class="fa-solid fa-arrow-right"></i> ${lang.backBtn}`;
}
function closeLanguageOptions() {
    languageOptions.classList.add('hidden-right');
    settingsList.classList.remove('hidden-left');
}
function setLanguage(langKey) {
    if (!langData[langKey]) return;
    currentLang = langKey;
    localStorage.setItem('uniMap_lang', langKey);
    document.documentElement.setAttribute('lang', langKey);
    document.documentElement.setAttribute('dir', langData[langKey].dir);
    updateUIText();
    const inputDir = langData[langKey].dir === 'rtl' ? 'rtl' : 'ltr';
    if (document.getElementById('chatInput')) document.getElementById('chatInput').style.direction = inputDir;
    if (document.getElementById('mapSearch')) document.getElementById('mapSearch').style.direction = inputDir;

    if (map) {
        clearMarkers();
        addMarkersToMap(window.locationsData);
    }

    updateFilterTranslations();
    updateChatQuickReplies();
}
function updateUIText() {
    const lang = langData[currentLang];
    // Home View
    document.querySelector('.app-title').innerText = lang.appTitle;
    document.querySelector('.tagline').innerText = lang.tagline;
    const mapButtonSpan = document.querySelector('.btn-main.btn-teal span');
    const chatButtonSpan = document.querySelector('.btn-main.btn-gold span');

    if (mapButtonSpan) mapButtonSpan.innerText = lang.mapBtn;
    if (chatButtonSpan) chatButtonSpan.innerText = lang.chatTitle;

    // Map View
    const mapSearch = document.getElementById('mapSearch');
    if (mapSearch) mapSearch.placeholder = lang.searchPlaceholder;

    // Search & Panels
    const searchPanelTitle = document.querySelector('#searchOverlay .panel-title');
    const searchPanelEmptyState = document.querySelector('#searchOverlay .empty-state');
    if (searchPanelTitle) searchPanelTitle.innerText = lang.searchTitle;
    if (searchPanelEmptyState) searchPanelEmptyState.innerText = lang.searchEmpty;

    const settingsTitle = document.querySelector('#settingsOverlay .panel-big-title');
    if (settingsTitle) settingsTitle.innerText = lang.settingsTitle;

    const listItems = document.getElementById('settingsList').querySelectorAll('li > span');
    if (listItems[0]) listItems[0].innerText = lang.languageTitle;
    if (listItems[1]) listItems[1].innerText = lang.aboutAppTitle;
    if (listItems[2]) listItems[2].innerText = lang.aboutUsTitle;
    if (listItems[3]) listItems[3].innerText = lang.helpTitle;

    const langPanelTitle = document.querySelector('#languageOptions .panel-big-title');
    const langPanelBackBtn = document.querySelector('#languageOptions .chat-back-btn');
    if (langPanelTitle) langPanelTitle.innerText = lang.languageTitle;
    if (langPanelBackBtn) langPanelBackBtn.innerHTML = `<i class="fa-solid fa-arrow-right"></i> ${lang.backBtn}`;

    // Chatbot View
    const chatViewTitle = document.querySelector('#chatbot-view .chat-title');
    const chatViewInput = document.getElementById('chatInput');
    if (chatViewTitle) chatViewTitle.innerText = lang.chatTitle;
    if (chatViewInput) chatViewInput.placeholder = lang.chatInput;

    // Info Views
    if (document.querySelector('#about-app-view .chat-title')) document.querySelector('#about-app-view .chat-title').innerText = lang.aboutAppTitle;
    if (document.querySelector('#about-us-view .chat-title')) document.querySelector('#about-us-view .chat-title').innerText = lang.aboutUsTitle;
    if (document.querySelector('#help-view .chat-title')) document.querySelector('#help-view .chat-title').innerText = lang.helpTitle;

    // Location Card
    const locCardButton = document.querySelector('#locationCard .btn-navigate');
    if (locCardButton) locCardButton.innerHTML = `<i class="fa-solid fa-check"></i> ${lang.locCardBtn}`;

    // Favorites
    const favoritesPanelTitle = document.querySelector('#favoritesOverlay .panel-big-title');
    if (favoritesPanelTitle) favoritesPanelTitle.innerText = lang.favouriteitems;

    // Welcome Message
    const welcomeMsg = document.querySelector('#chatContainer .msg.text-bot');
    if (welcomeMsg) welcomeMsg.innerText = lang.chatWelcome;
    
    // NEW: Navigation Card Text
    if(document.getElementById('dirFromInput')) document.getElementById('dirFromInput').value = lang.navStart;
}

// --- 6. MAP & LOCATION CARD LOGIC ---
const categoryStyles = {
    locationType_Service: { icon: 'fa-handshake-angle', colorClass: 'pin-teal' },
    locationType_Faculty: { icon: 'fa-building-columns', colorClass: 'pin-gold' },
    locationType_Admin: { icon: 'fa-sitemap', colorClass: 'pin-purple' },
    locationType_Lab: { icon: 'fa-flask', colorClass: 'pin-red' }
};
function getLocalizedLocationName(location) {
    return location.names[currentLang] || location.names.en;
}
function getLocalizedLocationType(location) {
    const typeKey = location.type;
    return langData[currentLang][typeKey] || langData.en[typeKey];
}
function initMap() {
    if (document.getElementById('mapContainer')) {
        const initialCenter = [35.70677104599164, 0.5788356576095794];
        map = L.map('mapContainer', {
            center: initialCenter,
            zoom: 18,
            minZoom: 16,
            maxZoom: 19,
            zoomControl: false,
            attributionControl: false
        });
        
        // Esri World Imagery (Satellite Layer)
        L.tileLayer(
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri...',
                maxZoom: 19,
                minZoom: 16
            }
        ).addTo(map);
        
        addMarkersToMap(window.locationsData);
    }
}
function clearMarkers() {
    Object.values(markers).forEach(marker => {
        map.removeLayer(marker);
    });
    markers = {};
}
function addMarkersToMap(locations) {
    locations.forEach(location => {
        const style = categoryStyles[location.type] || categoryStyles.locationType_Service;
        const markerIcon = L.divIcon({
            className: `custom-marker ${style.colorClass}`,
            html: `
                <div class="pin-head">
                    <i class="fa-solid ${style.icon}"></i>
                </div>
                <div class="pin-shadow"></div>
            `,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });
        const marker = L.marker([location.lat, location.lng], {
            icon: markerIcon
        }).addTo(map);
        marker.uniMapLocation = location;
        marker.on('click', function (e) {
            openLocationCard(e.target.uniMapLocation);
        });
        markers[location.id] = marker;
    });
}
function zoomMap(delta) {
    if (map) {
        map.zoomIn(delta);
    }
}
function openLocationCard(location) {
    clearTimeout(locationCardTimeout);
    closeDirectionCard(); // Close direction card if opening location
    
    const card = document.getElementById('locationCard');
    activeLocationId = location.id;

    document.getElementById('locImage').innerHTML =
        `<img src="../pictures/${location.image}" alt="${getLocalizedLocationName(location)}" style="width: 100%; height: 100%; object-fit: cover;">`;

    document.getElementById('locTitle').innerText = getLocalizedLocationName(location);

    const currentLang = document.documentElement.lang || 'ar';
    const descriptionText = location.description[currentLang] || location.description['ar'];
    document.getElementById('locDesc').innerText = descriptionText;

    const isFavorite = favoriteLocations.includes(location.id);
    const btnFavorite = document.getElementById('btnFavorite');
    btnFavorite.classList.toggle('favorited', isFavorite);
    btnFavorite.querySelector('i').className = isFavorite ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark';

    btnFavorite.onclick = () => toggleFavorite(location.id);

    if (map) {
        map.panTo([location.lat, location.lng]);
    }
    card.classList.add('active');
}
function closeLocationCard() {
    const card = document.getElementById('locationCard');
    card.classList.remove('active');
    activeLocationId = null;
}
function handleSearch(query) {
    const lang = langData[currentLang];
    searchResultsList.innerHTML = '';
    if (!query || query.trim() === '') {
        displaySearchResults(window.locationsData, lang);
        return;
    }
    const normalizedQuery = query.toLowerCase().trim();
    const results = window.locationsData.filter(location => {
        const localizedName = getLocalizedLocationName(location).toLowerCase();
        const englishName = location.names.en.toLowerCase();
        const locationType = getLocalizedLocationType(location).toLowerCase();
        return localizedName.includes(normalizedQuery) ||
            englishName.includes(normalizedQuery) ||
            location.id.toLowerCase().includes(normalizedQuery) ||
            locationType.includes(normalizedQuery);
    });
    displaySearchResults(results, lang);
}
function displaySearchResults(results, lang) {
    if (results.length === 0) {
        searchResultsList.innerHTML = `<div class="empty-state">${lang.searchEmpty}</div>`;
        return;
    }
    results.forEach(location => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.setAttribute('data-loc-id', location.id);
        item.innerHTML = `
            <div class="result-info">
                <div class="result-title">${getLocalizedLocationName(location)}</div>
                <div class="result-meta">${getLocalizedLocationType(location)}</div>
            </div>
            <i class="fa-solid fa-location-arrow"></i>
        `;
        item.onclick = () => {
            openLocationCard(location);
            closeOverlays();
        };
        searchResultsList.appendChild(item);
    });
}
function toggleFavorite(locationId) {
    const idToToggle = locationId || activeLocationId;
    if (!idToToggle) return;
    const index = favoriteLocations.indexOf(idToToggle);
    const isFavorited = index !== -1;
    const btnFavorite = document.getElementById('btnFavorite');
    if (isFavorited) {
        favoriteLocations.splice(index, 1);
        btnFavorite.classList.remove('favorited');
        btnFavorite.querySelector('i').className = 'fa-regular fa-bookmark';
    } else {
        favoriteLocations.push(idToToggle);
        btnFavorite.classList.add('favorited');
        btnFavorite.querySelector('i').className = 'fa-solid fa-bookmark';
    }
    localStorage.setItem('uniMap_favorites', JSON.stringify(favoriteLocations));
}

// --- 7. NAVIGATION / DIRECTIONS LOGIC (NEW) ---

function toggleDirectionCard() {
    const card = document.getElementById('directionCard');
    const lang = langData[currentLang];
    
    // If opening
    if (card.classList.contains('hidden')) {
        closeOverlays();
        closeLocationCard();
        card.classList.remove('hidden');
        populateDestinations();
        // Reset inputs
        document.getElementById('dirFromInput').value = lang.navStart;
        document.getElementById('dirToInput').value = '';
    } else {
        closeDirectionCard();
    }
}

function closeDirectionCard() {
    const card = document.getElementById('directionCard');
    if (card) card.classList.add('hidden');
    clearRoute(); // Optional: Clear route when closing card
}

function populateDestinations() {
    const list = document.getElementById('destinationsList');
    list.innerHTML = ''; // Clear existing
    window.locationsData.forEach(loc => {
        const option = document.createElement('option');
        option.value = getLocalizedLocationName(loc);
        list.appendChild(option);
    });
}

function startNavigation() {
    const lang = langData[currentLang];
    
    // Get values from inputs
    const startInputVal = document.getElementById('dirFromInput').value;
    const endInputVal = document.getElementById('dirToInput').value;
    
    // 1. Validate Destination
    const destinationLoc = window.locationsData.find(loc => getLocalizedLocationName(loc) === endInputVal);
    if (!destinationLoc) {
        alert(lang.navRouteError + ' (Destination not found)');
        return;
    }

    // 2. Determine Start Point
    // Check if input matches the "My Location" string in current language, or English, or is empty
    const isGPS = startInputVal === lang.navStart || 
                  startInputVal === 'My Location' || 
                  startInputVal === 'Ma Position' ||
                  startInputVal.trim() === '';

    if (isGPS) {
        // --- CASE A: USE GPS ---
        if (!navigator.geolocation) {
            alert(lang.navError);
            return;
        }

        // Show loading spinner on button
        const btn = document.querySelector('.btn-start-nav');
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Success: Get User Coords
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                
                // Call helper to draw route
                executeRouteDraw(userLat, userLng, destinationLoc.lat, destinationLoc.lng, true);
                btn.innerHTML = originalText;
            },
            (error) => {
                console.warn("GPS Access Denied or Error");
                alert(lang.navError);
                btn.innerHTML = originalText;
            }
        );

    } else {
        // --- CASE B: USE ANOTHER BUILDING ---
        const startLoc = window.locationsData.find(loc => getLocalizedLocationName(loc) === startInputVal);
        
        if (!startLoc) {
            alert("Start location not found. Please select a valid building from the list.");
            return;
        }

        // Call helper to draw route
        // Passing 'false' for isUserLocation because it's a building
        executeRouteDraw(startLoc.lat, startLoc.lng, destinationLoc.lat, destinationLoc.lng, false);
    }
}

function clearRoute() {
    if (currentRouteLayer) {
        map.removeLayer(currentRouteLayer);
        currentRouteLayer = null;
    }
    if (currentUserMarker) {
        map.removeLayer(currentUserMarker);
        currentUserMarker = null;
    }
}

// --- 8. CHATBOT LOGIC ---
let isProcessing = false;

function normalizeText(text) {
    if (!text) return '';
    let normalized = text.toLowerCase();
    normalized = normalized.replace(/[\u0623\u0622\u0625]/g, "\u0627"); 
    normalized = normalized.replace(/\u0649/g, "\u064A"); 
    normalized = normalized.replace(/\u0629/g, "\u0647"); 
    normalized = normalized.replace(/\u063A/g, "\u0639"); 
    normalized = normalized.replace(/[\u064B-\u0652\u0640]/g, "");
    normalized = normalized.replace(/\s+/g, ' ').trim();
    return normalized;
}

function addChatBubble(text, type, isTyping = false) {
    if (!chatContainer) return;

    const div = document.createElement('div');
    div.className = `msg ${type}`;
    if (isTyping) {
        div.innerHTML = `<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>`;
    } else {
        div.innerHTML = text;
    }
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return div;
}

function navigateToLocation(loc) {
    navTo('map');
    setTimeout(() => {
        if (map) {
            map.flyTo([loc.lat, loc.lng], 19, {
                duration: 1.5,
                easeLinearity: 0.5
            });
            openLocationCard(loc);
        }
    }, 450);
}

function sendQuickReply(question) {
    if (!chatInput) return;
    document.getElementById('chatInput').value = question;
    sendMessage();
}

function getCategoryTypeFromText(normalizedText) {
    if (normalizedText.includes('service') || normalizedText.includes('services') || normalizedText.includes('خدمه') || normalizedText.includes('خدمات')) return 'locationType_Service';
    if (normalizedText.includes('faculty') || normalizedText.includes('faculties') || normalizedText.includes('كليه') || normalizedText.includes('كليات') || normalizedText.includes('faculté') || normalizedText.includes('facultes')) return 'locationType_Faculty';
    if (normalizedText.includes('admin') || normalizedText.includes('administration') || normalizedText.includes('إداره') || normalizedText.includes('اداره')) return 'locationType_Admin';
    if (normalizedText.includes('lab') || normalizedText.includes('laboratories') || normalizedText.includes('room') || normalizedText.includes('labs') || normalizedText.includes('مختبر') || normalizedText.includes('مختبرات') || normalizedText.includes('قاعه') || normalizedText.includes('قاعات') || normalizedText.includes('laboratoire') || normalizedText.includes('labo') || normalizedText.includes('salle')) return 'locationType_Lab';

    return null;
}

function findBestLocationMatch(query) {
    let bestMatch = null;
    let highestScore = 0;
    const normalizedQuery = normalizeText(query);

    for (const loc of window.locationsData) {
        const names = [
            normalizeText(loc.names[currentLang]),
            normalizeText(loc.names.en),
            loc.id.toLowerCase()
        ];
        let score = 0;

        if (names.some(name => name === normalizedQuery)) {
            bestMatch = loc;
            highestScore = 100;
            break; 
        }

        let maxMatchLength = 0;
        names.forEach(name => {
            if (normalizedQuery.includes(name) && name.length > 3) {
                maxMatchLength = Math.max(maxMatchLength, name.length);
            }
            else if (name.includes(normalizedQuery) && normalizedQuery.length > 3) {
                maxMatchLength = Math.max(maxMatchLength, normalizedQuery.length);
            }
        });

        if (maxMatchLength > 0) {
            const denominator = Math.max(normalizedQuery.length, maxMatchLength);
            score = Math.floor((maxMatchLength / denominator) * 75);
            if (normalizedQuery.length > 10 && maxMatchLength > 8) {
                score += 15; 
            }
        }
        else if (names.some(name => name.split(' ').some(part => normalizedQuery.includes(part) && part.length > 2))) {
            score = 10;
        }

        if (score > highestScore) {
            highestScore = score;
            bestMatch = loc;
        }
        else if (score === highestScore && bestMatch) {
            const currentMatchName = normalizeText(bestMatch.names[currentLang] || bestMatch.names.en);
            const newMatchName = names[0];
            if (newMatchName.length > currentMatchName.length) {
                bestMatch = loc;
            }
        }
    } 

    if (highestScore >= 30) {
        return bestMatch;
    }
    return null;
}

function sendMessage() {
    if (!chatInput || !chatContainer) return;
    if (isProcessing) return;

    const text = chatInput.value.trim();
    if (!text) return;

    addChatBubble(text, 'user');
    chatInput.value = '';
    isProcessing = true;

    const lang = langData[currentLang];
    const normalizedText = normalizeText(text);
    const typingIndicator = addChatBubble('', 'text-bot', true);
    let thinkingTime = Math.floor(Math.random() * 700) + 800; 

    setTimeout(() => {
        let botResponse = '';
        let foundLocation = findBestLocationMatch(normalizedText);
        typingIndicator.remove();

        if (foundLocation) {
            const locName = getLocalizedLocationName(foundLocation);
            const locType = getLocalizedLocationType(foundLocation);

            if (normalizedText.includes('what is') || normalizedText.includes('c\'est quoi') || normalizedText.includes('ما هو') || normalizedText.includes('tell me about')) {
                const desc = foundLocation.description[currentLang] || foundLocation.description.en || lang.chatDetailUnavailable;
                botResponse = lang.chatDetailResponse(locName, desc);
                addChatBubble(botResponse, 'text-bot');
                isProcessing = false;
            } else {
                const successMsg = `${lang.chatFoundLocation(locName)} ${lang.chatDirecting(locName)}`;
                addChatBubble(successMsg, 'text-bot');
                navigateToLocation(foundLocation);
                isProcessing = false;
            }
            return;
        }

        const categoryType = getCategoryTypeFromText(normalizedText);
        const categoryQueryKeywords = ['where are', 'où sont', 'أين', 'جميع', 'list of', 'types', 'categories'];
        const isCategoryQuery = categoryType && (
            categoryQueryKeywords.some(keyword => normalizedText.includes(normalizeText(keyword)))
            || normalizedText.split(' ').length < 2
        );

        if (isCategoryQuery) {
            const categoryName = lang[categoryType];
            const matchingLocations = window.locationsData.filter(loc => loc.type === categoryType);

            if (matchingLocations.length > 0) {
                const namesList = matchingLocations.map(loc => `* ${getLocalizedLocationName(loc)}`).join('<br>');
                botResponse = `${lang.chatCategoryHeader(categoryName)}<br><br>${namesList}<br><br><span style="font-size:0.9em;">${lang.chatCategoryTip}</span>`;
            } else {
                botResponse = lang.chatUnknown;
            }
            addChatBubble(botResponse, 'text-bot');
            isProcessing = false;
            return;

        } else if (normalizedText.includes('مرحبا') || normalizedText.includes('اهلا') || normalizedText.includes('hello') || normalizedText.includes('bonjour') || normalizedText.includes('hi')) {
            botResponse = lang.chatGreeting;
            addChatBubble(botResponse, 'text-bot');
            isProcessing = false;
            return;
        } else if (normalizedText.includes('شكرا') || normalizedText.includes('مع السلامة') || normalizedText.includes('thank you') || normalizedText.includes('merci') || normalizedText.includes('bye')) {
            botResponse = lang.chatFarewell;
            addChatBubble(botResponse, 'text-bot');
            isProcessing = false;
            return;
        } else {
            botResponse = lang.chatSorry;
            addChatBubble(botResponse, 'text-bot');
            isProcessing = false;
            return;
        }

    }, thinkingTime);
}

// --- 9. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('uniMap_theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
    initMap();
    setLanguage(currentLang);
    const filterBtn = document.getElementById('filterToggleBtn');
    if (filterBtn) {
        filterBtn.onclick = toggleFilterDrawer;
    }
    if (chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                sendMessage();
            }
        });
    }
    updateFilterTranslations();
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

function toggleTheme() {
    frame.classList.toggle('dark-theme');
    if (frame.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        frame.classList.add('dark-theme');
        if (themeToggleCheckbox) {
            themeToggleCheckbox.checked = true;
        }
    } else {
        if (themeToggleCheckbox) {
            themeToggleCheckbox.checked = false;
        }
    }
}

if (themeToggleCheckbox) {
    themeToggleCheckbox.addEventListener('change', toggleTheme);
}
loadThemePreference();

function toggleFilterDrawer() {
    const drawer = document.getElementById('filterDrawer');
    const btn = document.getElementById('filterToggleBtn');
    if (drawer && btn) {
        drawer.classList.toggle('open');
        btn.classList.toggle('active');
    }
}
function filterMap(categoryType, btnElement) {
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => chip.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    clearMarkers();
    if (categoryType === 'all') {
        addMarkersToMap(window.locationsData);
    } else {
        const filteredData = window.locationsData.filter(location =>
            location.type === categoryType
        );
        addMarkersToMap(filteredData);
    }
}
function updateFilterTranslations() {
    const chips = document.querySelectorAll('#filterDrawer .filter-chip');
    const lang = langData[currentLang];
    const chipKeys = ['filterAll', 'locationType_Faculty', 'locationType_Service', 'locationType_Admin', 'locationType_Lab'];

    chips.forEach((chip, index) => {
        const key = chipKeys[index];
        const translation = lang[key];
        if (translation) {
            const iconElement = chip.querySelector('i');
            const iconHTML = iconElement ? iconElement.outerHTML : '';
            chip.innerHTML = `${iconHTML} ${translation}`;
        }
    });
}
function updateChatQuickReplies() {
    const welcomeMsg = document.querySelector('.msg.text-bot[data-lang-key="chatWelcomeImproved"]');
    if (welcomeMsg) {
        welcomeMsg.textContent = langData[currentLang].chatWelcomeImproved;
    }
    const quickReplyButtons = document.querySelectorAll('.quick-reply-btn');
    const lang = langData[currentLang];

    quickReplyButtons.forEach(button => {
        const key = button.getAttribute('data-lang-key');
        if (key && lang[key]) {
            button.textContent = lang[key];
        }
    });
}
function executeRouteDraw(startLat, startLng, destLat, destLng, isUserLocation) {
    const osrmUrl = `https://router.project-osrm.org/route/v1/foot/${startLng},${startLat};${destLng},${destLat}?overview=full&geometries=geojson`;

    fetch(osrmUrl)
        .then(response => response.json())
        .then(data => {
            if (data.code === 'Ok') {
                // 1. Clean up old layers
                clearRoute();
                closeDirectionCard();

                // 2. Draw the Route Line (Cyan)
                currentRouteLayer = L.geoJSON(data.routes[0].geometry, {
                    style: {
                        color: '#3a86ff', // Cyan color
                        weight: 6,
                        opacity: 0.8,
                        dashArray: '10, 10', // Walking style
                        lineCap: 'round'
                    }
                }).addTo(map);

                // 3. Draw the Start Marker
                // If it is the User (GPS), use a User Icon. 
                // If it is a Building, use a regular Pin.
                let iconHtml = '';
                if (isUserLocation) {
                    iconHtml = '<div class="pin-head" style="background:#2196F3; border:2px solid white"><i class="fa-solid fa-user"></i></div><div class="pin-shadow"></div>';
                } else {
                    iconHtml = '<div class="pin-head" style="background:#4CAF50; border:2px solid white"><i class="fa-solid fa-play"></i></div><div class="pin-shadow"></div>';
                }

                currentUserMarker = L.marker([startLat, startLng], {
                    icon: L.divIcon({
                        className: 'custom-marker',
                        html: iconHtml,
                        iconSize: [30, 42],
                        iconAnchor: [15, 42]
                    })
                }).addTo(map);

                // 4. Zoom to show the whole path
                map.fitBounds(currentRouteLayer.getBounds(), { padding: [50, 50] });

            } else {
                alert("No route found.");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Could not connect to routing service.");
        });
}