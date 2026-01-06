import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, ChevronRight, Home, Globe, Instagram, Facebook, Twitter, Mail, Phone, Palmtree, Compass, Utensils, ChevronDown, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from './translations';

const DestinationsPage = ({ lang, setLang }) => {
    const [activeLocation, setActiveLocation] = useState('all');
    const [activeType, setActiveType] = useState('all');
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const t = (key) => (translations[lang] ? translations[lang][key] : null) || translations['en'][key] || key;

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'si', label: 'Sinhala' },
        { code: 'ta', label: 'Tamil' },
        { code: 'ru', label: 'Russian' },
        { code: 'de', label: 'German' },
        { code: 'fr', label: 'French' },
        { code: 'zh', label: 'Chinese' },
        { code: 'jp', label: 'Japanese' }
    ];

    const destinations = [
        // --- HAMBANTOTA ---
        { id: 1, nameKey: "dest_name_1", locationKey: "hambantota", typeKey: "heritageSpiritual", descKey: "dest_desc_1", image: "https://images.unsplash.com/photo-1544450181-11af58421ee1?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 120 },
        { id: 2, nameKey: "dest_name_2", locationKey: "hambantota", typeKey: "heritageSpiritual", descKey: "dest_desc_2", image: "https://images.unsplash.com/photo-1544253303-31f0e47ced8b?auto=format&fit=crop&w=800&q=80", rating: 4.5, reviews: 85 },
        { id: 3, nameKey: "dest_name_3", locationKey: "hambantota", typeKey: "heritageSpiritual", descKey: "dest_desc_3", image: "https://images.unsplash.com/photo-1588143242683-0937a0628373?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 210 },
        { id: 4, nameKey: "dest_name_4", locationKey: "hambantota", typeKey: "heritageSpiritual", descKey: "dest_desc_4", image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?auto=format&fit=crop&w=800&q=80", rating: 4.6, reviews: 134 },
        { id: 5, nameKey: "dest_name_5", locationKey: "hambantota", typeKey: "heritageSpiritual", descKey: "dest_desc_5", image: "https://images.unsplash.com/photo-1514222139-1bc06059fd7a?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 420 },
        { id: 6, nameKey: "dest_name_6", locationKey: "hambantota", typeKey: "heritageSpiritual", descKey: "dest_desc_6", image: "https://images.unsplash.com/photo-1590418606746-018840fb9cd0?auto=format&fit=crop&w=800&q=80", rating: 4.9, reviews: 2150 },
        { id: 7, nameKey: "dest_name_7", locationKey: "hambantota", typeKey: "heritageSpiritual", descKey: "dest_desc_7", image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 110 },
        { id: 8, nameKey: "dest_name_8", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_8", image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80", rating: 4.6, reviews: 320 },
        { id: 9, nameKey: "dest_name_9", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_9", image: "https://images.unsplash.com/photo-1580661448043-34e85764d84f?auto=format&fit=crop&w=800&q=80", rating: 4.9, reviews: 5800, isTrending: true },
        { id: 10, nameKey: "dest_name_10", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_10", image: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 540 },
        { id: 11, nameKey: "dest_name_11", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_11", image: "https://images.unsplash.com/photo-1516423311021-396df83bf714?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 920 },
        { id: 12, nameKey: "dest_name_12", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_12", image: "https://images.unsplash.com/photo-1534188733413-401f80ed7e86?auto=format&fit=crop&w=800&q=80", rating: 4.9, reviews: 3100 },
        { id: 13, nameKey: "dest_name_13", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_13", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 180 },
        { id: 14, nameKey: "dest_name_14", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_14", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 750 },
        { id: 15, nameKey: "dest_name_15", locationKey: "hambantota", typeKey: "coastalGems", descKey: "dest_desc_15", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80", rating: 4.6, reviews: 620 },
        { id: 16, nameKey: "dest_name_16", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_16", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 240 },
        { id: 17, nameKey: "dest_name_17", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_17", image: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 156 },
        { id: 18, nameKey: "dest_name_18", locationKey: "hambantota", typeKey: "coastalGems", descKey: "dest_desc_18", image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 430 },
        { id: 19, nameKey: "dest_name_19", locationKey: "hambantota", typeKey: "coastalGems", descKey: "dest_desc_19", image: "https://images.unsplash.com/photo-1544450181-11af58421ee1?auto=format&fit=crop&w=800&q=80", rating: 4.5, reviews: 95 },
        { id: 20, nameKey: "dest_name_20", locationKey: "hambantota", typeKey: "natureRelaxation", descKey: "dest_desc_20", image: "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&w=800&q=80", rating: 4.6, reviews: 180 },
        { id: 21, nameKey: "dest_name_21", locationKey: "hambantota", typeKey: "culturalModern", descKey: "dest_desc_21", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 210 },
        { id: 22, nameKey: "dest_name_22", locationKey: "hambantota", typeKey: "culturalModern", descKey: "dest_desc_22", image: "https://images.unsplash.com/photo-1590595359216-56608518384f?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 150 },

        // --- MATARA ---
        { id: 23, nameKey: "dest_name_23", locationKey: "matara", typeKey: "heritageSpiritual", descKey: "dest_desc_23", image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 320 },
        { id: 24, nameKey: "dest_name_24", locationKey: "matara", typeKey: "heritageSpiritual", descKey: "dest_desc_24", image: "https://images.unsplash.com/photo-1514222139-1bc06059fd7a?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 410 },
        { id: 25, nameKey: "dest_name_25", locationKey: "matara", typeKey: "heritageSpiritual", descKey: "dest_desc_25", image: "https://images.unsplash.com/photo-1544450181-11af58421ee1?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 890 },
        { id: 26, nameKey: "dest_name_26", locationKey: "matara", typeKey: "heritageSpiritual", descKey: "dest_desc_26", image: "https://images.unsplash.com/photo-1588143242683-0937a0628373?auto=format&fit=crop&w=800&q=80", rating: 4.6, reviews: 230 },
        { id: 27, nameKey: "dest_name_27", locationKey: "matara", typeKey: "heritageSpiritual", descKey: "dest_desc_27", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 560 },
        { id: 28, nameKey: "dest_name_28", locationKey: "matara", typeKey: "heritageSpiritual", descKey: "dest_desc_28", image: "https://images.unsplash.com/photo-1544074816-1681284d7237?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 440 },
        { id: 29, nameKey: "dest_name_29", locationKey: "matara", typeKey: "natureRelaxation", descKey: "dest_desc_29", image: "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 130 },
        { id: 30, nameKey: "dest_name_30", locationKey: "matara", typeKey: "natureRelaxation", descKey: "dest_desc_30", image: "https://images.unsplash.com/photo-1534188733413-401f80ed7e86?auto=format&fit=crop&w=800&q=80", rating: 4.5, reviews: 210 },
        { id: 31, nameKey: "dest_name_31", locationKey: "matara", typeKey: "coastalGems", descKey: "dest_desc_31", image: "https://images.unsplash.com/photo-1586902197503-e71026292412?auto=format&fit=crop&w=800&q=80", rating: 4.9, reviews: 820, isTrending: true },
        { id: 32, nameKey: "dest_name_32", locationKey: "matara", typeKey: "coastalGems", descKey: "dest_desc_32", image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80", rating: 4.9, reviews: 4500, isTrending: true },
        { id: 33, nameKey: "dest_name_33", locationKey: "matara", typeKey: "coastalGems", descKey: "dest_desc_33", image: "https://images.unsplash.com/photo-1537519646099-ee30c3d90248?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 1200, isTrending: true },
        { id: 34, nameKey: "dest_name_34", locationKey: "matara", typeKey: "coastalGems", descKey: "dest_desc_34", image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 3100 },

        // --- GALLE ---
        { id: 35, nameKey: "dest_name_35", locationKey: "galle", typeKey: "heritageSpiritual", descKey: "dest_desc_35", image: "https://images.unsplash.com/photo-1588143242683-0937a0628373?auto=format&fit=crop&w=800&q=80", rating: 4.9, reviews: 6200, isTrending: true },
        { id: 36, nameKey: "dest_name_36", locationKey: "galle", typeKey: "heritageSpiritual", descKey: "dest_desc_36", image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 560 },
        { id: 37, nameKey: "dest_name_37", locationKey: "galle", typeKey: "heritageSpiritual", descKey: "dest_desc_37", image: "https://images.unsplash.com/photo-1590595359216-56608518384f?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 180 },
        { id: 38, nameKey: "dest_name_38", locationKey: "galle", typeKey: "natureRelaxation", descKey: "dest_desc_38", image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80", rating: 4.6, reviews: 120 },
        { id: 39, nameKey: "dest_name_39", locationKey: "galle", typeKey: "natureRelaxation", descKey: "dest_desc_39", image: "https://images.unsplash.com/photo-1544253303-31f0e47ced8b?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 950 },
        { id: 40, nameKey: "dest_name_40", locationKey: "galle", typeKey: "natureRelaxation", descKey: "dest_desc_40", image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 310 },
        { id: 41, nameKey: "dest_name_41", locationKey: "galle", typeKey: "natureRelaxation", descKey: "dest_desc_41", image: "https://images.unsplash.com/photo-1544074816-1681284d7237?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 420 },
        { id: 42, nameKey: "dest_name_42", locationKey: "galle", typeKey: "coastalGems", descKey: "dest_desc_42", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 2400 },
        { id: 43, nameKey: "dest_name_43", locationKey: "galle", typeKey: "coastalGems", descKey: "dest_desc_43", image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80", rating: 4.9, reviews: 3800, isTrending: true },
        { id: 44, nameKey: "dest_name_44", locationKey: "galle", typeKey: "coastalGems", descKey: "dest_desc_44", image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80", rating: 4.7, reviews: 620 },
        { id: 45, nameKey: "dest_name_45", locationKey: "galle", typeKey: "coastalGems", descKey: "dest_desc_45", image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=800&q=80", rating: 4.8, reviews: 1540 }
    ];

    const locations = ["all", "galle", "matara", "hambantota"];
    const types = ["all", "heritageSpiritual", "natureRelaxation", "coastalGems", "culturalModern"];

    const filteredDestinations = destinations.filter(dest =>
        (activeLocation === 'all' || dest.locationKey === activeLocation) &&
        (activeType === 'all' || dest.typeKey === activeType) &&
        (t(dest.nameKey).toLowerCase().includes(searchQuery.toLowerCase()) || t(dest.descKey).toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* --- Navbar --- */}
            <nav className="absolute top-0 w-full flex items-center justify-between px-10 py-6 z-50">
                <div className="text-2xl font-bold tracking-tighter text-white">
                    EXPLORE<span className="text-orange-400">SOUTH</span>
                </div>
                <div className="hidden md:flex space-x-8 font-bold text-lg text-white tracking-wide">
                    <Link to="/" className="hover:text-orange-400 transition"> {t('home')} </Link>
                    <Link to="/About_page" className="hover:text-orange-400 transition"> {t('about')} </Link>
                    <Link to="/Destinations_page" className="text-orange-400 transition cursor-pointer">{t('destinations')}</Link>
                    <Link to="/Hotels_page" className="hover:text-orange-400 transition"> {t('hotels')} </Link>
                    <a href="#" className="hover:text-orange-400 transition">{t('restaurants')}</a>
                    <Link to="/Transport_page" className="hover:text-orange-400 transition"> {t('transport')} </Link>
                    <Link to="/Contact_page" className="hover:text-orange-400 transition"> {t('contact')} </Link>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Language Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center text-white hover:text-orange-400 transition"
                        >
                            <Globe size={20} className="mr-1" />
                            <span className="uppercase font-bold text-sm">{lang}</span>
                        </button>

                        {isLangOpen && (
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl py-2 overflow-hidden z-50">
                                {languages.map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => {
                                            setLang(l.code);
                                            setIsLangOpen(false);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 font-medium"
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/Login_page" className="text-sm font-semibold text-white hover:text-orange-400 transition">{t('login')}</Link>
                    <Link to="/Login_page" className="bg-white text-blue-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-500 hover:text-white transition">
                        {t('register')}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white p-2">
                    <Menu size={32} />
                </button>
            </nav>

            {/* --- Hero Section --- */}
            <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1920&q=80"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Hero"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50"></div>

                <div className="relative z-10 text-center px-6 mt-20">
                    <div className="text-orange-400 font-black uppercase tracking-[0.3em] text-sm mb-4">{t('discoverMagic')}</div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase">
                        {t('ourDestinations').split(' ')[0]} <span className="text-orange-400">{t('ourDestinations').split(' ')[1]}</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        {t('destHeroDesc')}
                    </p>
                </div>
            </div>

            {/* --- Breadcrumb (Overlay style) --- */}
            <div className="relative z-10 -mt-12 max-w-7xl mx-auto px-6">
                <div className="bg-white/80 backdrop-blur-md inline-flex items-center px-6 py-3 rounded-2xl shadow-xl text-sm border border-white/50">
                    <Link to="/" className="flex items-center text-slate-500 hover:text-orange-500 transition font-bold">
                        <Home size={16} className="mr-2" /> {t('home')}
                    </Link>
                    <ChevronRight size={16} className="mx-2 text-slate-300" />
                    <span className="text-orange-600 font-black uppercase tracking-widest">{t('destinations')}</span>
                </div>
            </div>

            {/* --- Sticky Filter & Search Bar --- */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 py-6 transition-all shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center">

                    {/* Search Input */}
                    <div className="relative flex-1 w-full group">
                        <Search className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={22} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={t('searchHint')}
                            className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-800 text-lg shadow-inner"
                        />
                    </div>

                    {/* Location Picker */}
                    <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar scroll-smooth">
                        {locations.map(loc => (
                            <button
                                key={loc}
                                onClick={() => setActiveLocation(loc)}
                                className={`px-8 py-3.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeLocation === loc ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/40 scale-105' : 'bg-white border-2 border-slate-100 text-slate-600 hover:border-blue-300 hover:text-blue-600'
                                    }`}
                            >
                                {t(loc)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Type Filters --- */}
            <div className="max-w-7xl mx-auto px-6 py-8 flex items-center gap-4 border-b border-slate-200">
                <div className="bg-slate-200/50 p-2.5 rounded-xl">
                    <Filter size={20} className="text-slate-500" />
                </div>
                <div className="flex flex-wrap gap-2">
                    {types.map(type => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${activeType === type ? 'text-blue-700 bg-blue-100 shadow-sm' : 'text-slate-500 hover:bg-slate-200/60'
                                }`}
                        >
                            {t(type)}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Destinations Grid --- */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex justify-between items-center mb-10">
                    <p className="text-slate-500 font-medium">
                        {t('showing')} <span className="text-slate-900 font-extrabold">{filteredDestinations.length}</span> {t('amazingPlaces')}
                    </p>
                    <div className="flex items-center text-blue-600 font-extrabold cursor-pointer hover:bg-blue-50 px-4 py-2 rounded-xl transition">
                        {t('interactiveMap')} <MapPin size={20} className="ml-2" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredDestinations.map(dest => (
                        <div key={dest.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-slate-100">
                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <img src={dest.image} alt={t(dest.nameKey)} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                {dest.isTrending && (
                                    <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter shadow-lg shadow-red-500/40">
                                        {t('trendingLabel')}
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full shadow-lg cursor-pointer hover:bg-orange-500 transition-colors duration-300">
                                    <Star size={18} className="text-white" />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-blue-500 mb-3">
                                    <MapPin size={12} className="mr-1.5" /> {t(dest.locationKey)} <span className="mx-2 text-slate-300">•</span> {t(dest.typeKey)}
                                </div>
                                <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition">
                                    {t(dest.nameKey)}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                                    {t(dest.descKey)}
                                </p>

                                {/* Rating & CTA */}
                                <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                                    <div className="flex items-center">
                                        <span className="bg-blue-600 text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg mr-3 shadow-lg shadow-blue-500/20">{dest.rating}</span>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter">{t('excellent')}</span>
                                            <span className="text-[10px] text-slate-400">{dest.reviews} {t('reviewsLabel')}</span>
                                        </div>
                                    </div>
                                    <Link to={dest.id === 6 ? "/PlaceDetail_page" : "#"} className="flex items-center text-blue-600 font-black text-xs uppercase tracking-widest hover:text-orange-500 transition">
                                        {t('explore')} <ChevronRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Footer --- */}
            <footer className="bg-slate-900 py-24 px-6 text-white text-center rounded-t-[5rem]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold mb-8 text-orange-400">{t('newsletterTitle')}</h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                        {t('newsletterDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-3xl backdrop-blur-lg">
                        <input type="email" placeholder={t('emailPlaceholder')} className="flex-1 bg-transparent px-6 py-4 outline-none font-bold placeholder:text-slate-500" />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest transition">
                            {t('subscribe')}
                        </button>
                    </div>
                    <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-2xl font-black">EXPLORE<span className="text-orange-400">SOUTH</span></div>
                        <div className="flex gap-10 text-slate-400 font-bold text-sm uppercase tracking-widest">
                            <span className="hover:text-white cursor-pointer transition">{t('home')}</span>
                            <span className="hover:text-white cursor-pointer transition">{t('about')}</span>
                            <span className="hover:text-white cursor-pointer transition">{t('destinations')}</span>
                            <span className="hover:text-white cursor-pointer transition">{t('contact')}</span>
                        </div>
                    </div>
                    <p className="mt-12 text-slate-500 text-sm font-medium">
                        {t('rightsReserved')}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default DestinationsPage;
