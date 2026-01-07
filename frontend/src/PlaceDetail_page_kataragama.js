import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Calendar, Clock, Ticket, MapPin,
    Camera, Flame, Star, ChevronLeft, Share2, Heart,
    Globe, Menu, Bus, Car, Train, ExternalLink,
    Hotel, Coffee, Utensils, Wine, Compass
} from 'lucide-react';
import { translations } from './translations';

const PlaceDetailPage = ({ lang, setLang }) => {
    const t = (key) => (translations[lang] ? translations[lang][key] : null) || translations['en'][key] || key;
    const [userLocation, setUserLocation] = useState(null);
    const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.086968032!2d81.3332!3d6.4135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae60034a742911b%3A0x6b87e224610664e5!2sKataragama!5e0!3m2!1sen!2slk!4v1714456789123!5m2!1sen!2slk");

    const handleUseMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                    // Update the map to show directions from user's location
                    const legacyEmbedUrl = `https://maps.google.com/maps?saddr=${latitude},${longitude}&daddr=Kataragama,+Sri+Lanka&output=embed`;
                    setMapUrl(legacyEmbedUrl);
                },
                (error) => {
                    alert(t('locationError'));
                    console.error("Error getting location:", error);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const handleGetDirections = () => {
        const destination = "Kataragama, Sri Lanka";

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // Open Google Maps with directions showing all available routes
                    const directionsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/Kataragama,+Sri+Lanka`;
                    window.open(directionsUrl, '_blank');
                },
                (error) => {
                    // If geolocation fails, open Google Maps directions without origin
                    const directionsUrl = `https://www.google.com/maps/dir//Kataragama,+Sri+Lanka`;
                    window.open(directionsUrl, '_blank');
                }
            );
        } else {
            // If geolocation not supported, open Google Maps directions without origin
            const directionsUrl = `https://www.google.com/maps/dir//Kataragama,+Sri+Lanka`;
            window.open(directionsUrl, '_blank');
        }
    };


    const handleNearbySearch = (category) => {
        const searchQuery = `${category} near Kataragama, Sri Lanka`;
        const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;
        window.open(mapsUrl, '_blank');
    };

    const [isLangOpen, setIsLangOpen] = useState(false);

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

    // Adobe Stock / High-quality image placeholders
    const galleryImages = [
        "https://www.shutterstock.com/shutterstock/photos/2349314117/display_1500/stock-photo-kataragama-sri-lanka-january-maha-devale-shrine-at-kataragama-sri-lanka-2349314117.jpg",
        "https://c7.alamy.com/comp/G3PCTK/sri-lanka-kataragama-maha-devale-temple-evening-puja-coming-towards-G3PCTK.jpg",
        "https://www.nurphoto.com/photo/12524417/picture/photo",
        "https://thumbs.dreamstime.com/z/vegetable-market-stall-sri-lanka-kiri-vehera-ancient-stupa-situated-near-ruhunu-maha-kataragama-devalaya-temple-251334526.jpg?ct=jpeg",
        "https://thumbs.dreamstime.com/z/kataragama-sri-lanka-february-kiri-vehera-ancient-stupa-situated-near-ruhunu-maha-kataragama-devalaya-temple-kataragama-106784582.jpg?ct=jpeg",
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 flex flex-col">
            {/* --- Navbar --- */}
            <nav className="relative bg-slate-900 w-full flex items-center justify-between px-10 py-6 z-50">
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

            {/* --- Action Bar --- */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/Destinations_page" className="flex items-center text-slate-600 hover:text-blue-600 font-medium">
                    <ChevronLeft size={20} className="mr-1" /> {t('backToSearch')}
                </Link>
                <div className="flex gap-4">
                    <button className="p-2 hover:bg-slate-100 rounded-full"><Share2 size={20} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-full"><Heart size={20} /></button>
                </div>
            </div>



            {/* --- Main Content --- */}
            <main className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Details */}
                <div className="lg:col-span-2">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center text-orange-600 font-bold text-sm tracking-widest mb-2">
                            <Star size={16} fill="currentColor" className="mr-1" /> {t('topRatedSpiritual')}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">{t('kataragamaTitle')}</h1>

                        <div className="flex flex-wrap gap-6 mb-10 text-slate-600">
                            <div className="flex items-center"><MapPin size={18} className="mr-2 text-blue-600" /> {t('locationKataragama')}</div>
                            <div className="flex items-center"><Star size={18} className="mr-2 text-orange-500" /> {t('kataragamaReviews')}</div>
                        </div>

                        <hr className="border-slate-100 mb-8" />

                        {/* Overview Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">{t('overviewTitle')}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {t('kataragamaOverview')}
                            </p>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <InfoCard icon={<Calendar className="text-blue-600" />} title={t('bestTime')} detail={t('festivalSeason')} />
                            <InfoCard icon={<Clock className="text-orange-600" />} title={t('dailyRituals')} detail={t('pujaTime')} />
                            <InfoCard icon={<Ticket className="text-green-600" />} title={t('entryFee')} detail={t('freeCharge')} />
                        </div>

                        {/* Activities Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <Flame className="mr-2 text-orange-500" /> {t('funActivities')}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ActivityItem title={t('religiousRituals')} desc={t('religiousRitualsDesc')} />
                                <ActivityItem title={t('fireWalking')} desc={t('fireWalkingDesc')} />
                                <ActivityItem title={t('culturalTours')} desc={t('culturalToursDesc')} />
                                <ActivityItem title={t('peraheraViewing')} desc={t('peraheraViewingDesc')} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Booking/Sticky Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl shadow-slate-200/50">
                        <h4 className="text-xl font-bold mb-4">{t('planYourVisit')}</h4>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">{t('transportFrom')}</span>
                                <span className="font-bold">~1.5 hrs</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">{t('tourDuration')}</span>
                                <span className="font-bold">{t('halfDay')}</span>
                            </div>
                        </div>
                        <button
                            onClick={handleGetDirections}
                            className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                        >
                            {t('getDirections')}
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-4">
                            {t('localGuides')}
                        </p>
                    </div>
                </div>
            </main>

            {/* --- Adobe Inspired Gallery Section --- */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                    <Camera className="mr-2 text-blue-600" /> {t('photoGallery')}
                </h3>
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {galleryImages.map((src, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="rounded-2xl overflow-hidden cursor-zoom-in shadow-md"
                        >
                            <img src={src} alt={`Gallery ${idx}`} className="w-full h-auto object-cover" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- Map Section --- */}
            <section className="max-w-7xl mx-auto px-6 mt-20 mb-20">
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('gettingThere')}</h3>
                            <p className="text-slate-500">{t('directionsFrom')}</p>
                        </div>
                        <button
                            onClick={handleUseMyLocation}
                            className="mt-4 md:mt-0 flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                        >
                            <MapPin size={18} className="mr-2" />
                            {t('useMyLocation')}
                        </button>
                    </div>

                    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 bg-slate-200 relative">
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kataragama Map"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* --- Transport Options Section --- */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="flex items-center mb-8">
                    <h3 className="text-3xl font-bold text-slate-900 mr-4">{t('transportOptionsTitle')}</h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                        {t('updatedDaily')}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Public Transport */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition duration-300">
                        <h4 className="flex items-center text-xl font-bold text-slate-800 mb-6">
                            <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600">
                                <Bus size={20} />
                            </span>
                            {t('publicTransport')}
                        </h4>

                        {/* Bus */}
                        <div className="mb-8 pl-4 border-l-2 border-slate-100">
                            <h5 className="font-bold text-lg text-slate-900 mb-1">{t('busOption')}</h5>
                            <p className="text-slate-600 text-sm leading-relaxed mb-2">{t('busDesc')}</p>
                            <p className="text-xs font-bold text-slate-500 bg-slate-50 inline-block px-2 py-1 rounded">
                                {t('busRouteInfo')}
                            </p>
                            <a href="http://www.ntc.gov.lk/" target="_blank" rel="noopener noreferrer" className="block mt-2 text-xs text-blue-600 hover:underline flex items-center">
                                {t('busLinkText')} <ExternalLink size={12} className="ml-1" />
                            </a>
                        </div>

                        {/* Train */}
                        <div className="pl-4 border-l-2 border-slate-100">
                            <h5 className="font-bold text-lg text-slate-900 mb-1 flex items-center">
                                {t('trainOption')} <Train size={16} className="ml-2 text-slate-400" />
                            </h5>
                            <p className="text-slate-600 text-sm leading-relaxed mb-2">{t('trainDesc')}</p>
                            <p className="text-xs text-orange-500 font-medium italic mb-2">
                                {t('trainNote')}
                            </p>
                            <a href="https://seatreservation.railway.gov.lk/mtktwebslr/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center">
                                {t('trainLinkText')} <ExternalLink size={12} className="ml-1" />
                            </a>
                        </div>
                    </div>

                    {/* Private Transport */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition duration-300">
                        <h4 className="flex items-center text-xl font-bold text-slate-800 mb-6">
                            <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600">
                                <Car size={20} />
                            </span>
                            {t('privateTransport')}
                        </h4>

                        {/* Private Transfer */}
                        <div className="mb-8 pl-4 border-l-2 border-slate-100">
                            <h5 className="font-bold text-lg text-slate-900 mb-1">{t('privateTransferOption')}</h5>
                            <p className="text-slate-600 text-sm leading-relaxed mb-2">{t('privateTransferDesc')}</p>
                            <div className="flex gap-2 mb-2">
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{t('privateProviders')}</span>
                            </div>
                            <a href="https://lakpura.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center">
                                {t('privateLinkText')} <ExternalLink size={12} className="ml-1" />
                            </a>
                        </div>

                        {/* Local Taxi */}
                        <div className="mb-8 pl-4 border-l-2 border-slate-100">
                            <h5 className="font-bold text-lg text-slate-900 mb-1">{t('localTaxiOption')}</h5>
                            <p className="text-slate-600 text-sm leading-relaxed mb-2">{t('localTaxiDesc')}</p>
                            <p className="text-xs font-bold text-slate-700">{t('taxiRates')}</p>
                        </div>

                        {/* Tuktuk */}
                        <div className="pl-4 border-l-2 border-slate-100">
                            <h5 className="font-bold text-lg text-slate-900 mb-1">{t('tuktukOption')}</h5>
                            <p className="text-slate-600 text-sm leading-relaxed mb-2">{t('tuktukDesc')}</p>
                            <a href="https://tuktukrental.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center">
                                {t('tuktukLinkText')} <ExternalLink size={12} className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Nearby Amenities Section --- */}
            <section className="max-w-7xl mx-auto px-6 mt-20 mb-20">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Explore Nearby</h3>
                    <p className="text-slate-500 text-lg">Discover essential amenities around Kataragama</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Hotels Button */}
                    <motion.button
                        onClick={() => handleNearbySearch('hotels')}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition">
                                <Hotel size={32} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Nearby Hotels</h4>
                            <p className="text-blue-100 text-sm">Find comfortable stays</p>
                        </div>
                    </motion.button>

                    {/* Restaurants Button */}
                    <motion.button
                        onClick={() => handleNearbySearch('restaurants')}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition">
                                <Utensils size={32} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Nearby Restaurants</h4>
                            <p className="text-orange-100 text-sm">Explore local cuisine</p>
                        </div>
                    </motion.button>

                    {/* Cafes Button */}
                    <motion.button
                        onClick={() => handleNearbySearch('cafes')}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition">
                                <Coffee size={32} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Nearby Cafes</h4>
                            <p className="text-amber-100 text-sm">Relax with coffee</p>
                        </div>
                    </motion.button>

                    {/* Bars Button */}
                    <motion.button
                        onClick={() => handleNearbySearch('bars')}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition">
                                <Wine size={32} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Nearby Bars</h4>
                            <p className="text-purple-100 text-sm">Unwind & socialize</p>
                        </div>
                    </motion.button>
                </div>

                {/* Website Navigation Button */}
                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Link
                        to="/"
                        className="group relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-10 py-5 rounded-full shadow-2xl overflow-hidden border-2 border-transparent hover:border-blue-400 transition-all duration-300"
                        >
                            {/* Animated gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

                            {/* Glassmorphism overlay */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="relative z-10 flex items-center gap-4">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                                >
                                    <Compass size={24} className="text-white" />
                                </motion.div>

                                <div className="text-left">
                                    <div className="text-lg font-black tracking-tight group-hover:text-blue-300 transition-colors">
                                        Check Our Website
                                    </div>
                                    <div className="text-xs text-slate-300 font-medium">
                                        Hotels • Restaurants • Cafes • Bars
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="ml-2"
                                >
                                    <ExternalLink size={20} className="text-blue-300" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-slate-900 py-24 px-6 text-white text-center rounded-t-[5rem] mt-auto">
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

/* Helper Components */
const InfoCard = ({ icon, title, detail }) => (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <div className="mb-3">{icon}</div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{title}</div>
        <div className="text-slate-800 font-bold">{detail}</div>
    </div>
);

const ActivityItem = ({ title, desc }) => (
    <div className="p-5 border border-slate-100 rounded-2xl hover:bg-orange-50/30 transition">
        <h5 className="font-bold text-slate-900 mb-1">{title}</h5>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
);

export default PlaceDetailPage;
