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

const PlaceDetailPageSithulpawwa = ({ lang, setLang }) => {
    const t = (key) => (translations[lang] ? translations[lang][key] : null) || translations['en'][key] || key;
    const [userLocation, setUserLocation] = useState(null);
    const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63180.45!2d81.1872!3d6.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae60034a742911b%3A0x6b87e224610664e5!2sSithulpawwa!5e0!3m2!1sen!2slk!4v1714456789123!5m2!1sen!2slk");

    const handleUseMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                    const legacyEmbedUrl = `https://maps.google.com/maps?saddr=${latitude},${longitude}&daddr=Sithulpawwa+Rock+Temple,+Hambantota,+Sri+Lanka&output=embed`;
                    setMapUrl(legacyEmbedUrl);
                },
                (error) => {
                    alert('Could not retrieve your location');
                    console.error("Error getting location:", error);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const handleGetDirections = () => {
        const destination = "Sithulpawwa Rock Temple, Hambantota, Sri Lanka";

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const directionsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/Sithulpawwa+Rock+Temple,+Hambantota,+Sri+Lanka`;
                    window.open(directionsUrl, '_blank');
                },
                (error) => {
                    const directionsUrl = `https://www.google.com/maps/dir//Sithulpawwa+Rock+Temple,+Hambantota,+Sri+Lanka`;
                    window.open(directionsUrl, '_blank');
                }
            );
        } else {
            const directionsUrl = `https://www.google.com/maps/dir//Sithulpawwa+Rock+Temple,+Hambantota,+Sri+Lanka`;
            window.open(directionsUrl, '_blank');
        }
    };

    const handleNearbySearch = (category) => {
        const searchQuery = `${category} near Sithulpawwa Rock Temple, Hambantota, Sri Lanka`;
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

    const galleryImages = [
        "https://images.unsplash.com/photo-1590735213920-68192a487bc2?q=80&w=800",
        "https://images.unsplash.com/photo-1625484838491-912a20ce9519?q=80&w=800",
        "https://images.unsplash.com/photo-1616422891963-393282490b0c?q=80&w=800",
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
        "https://images.unsplash.com/photo-1544450181-11af58421ee1?q=80&w=800",
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 flex flex-col">
            {/* --- Navbar --- */}
            <nav className="relative bg-slate-900 w-full flex items-center justify-between px-10 py-6 z-50">
                <div className="text-2xl font-bold tracking-tighter text-white">
                    EXPLORE<span className="text-orange-400">SOUTH</span>
                </div>
                <div className="hidden md:flex space-x-8 font-bold text-lg text-white tracking-wide">
                    <Link to="/" className="hover:text-orange-400 transition"> Home </Link>
                    <Link to="/About_page" className="hover:text-orange-400 transition"> About </Link>
                    <Link to="/Destinations_page" className="text-orange-400 transition cursor-pointer">Destinations</Link>
                    <Link to="/Hotels_page" className="hover:text-orange-400 transition"> Hotels </Link>
                    <a href="#" className="hover:text-orange-400 transition">Restaurants</a>
                    <Link to="/Transport_page" className="hover:text-orange-400 transition"> Transport </Link>
                    <Link to="/Contact_page" className="hover:text-orange-400 transition"> Contact </Link>
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

                    <Link to="/Login_page" className="text-sm font-semibold text-white hover:text-orange-400 transition">Login</Link>
                    <Link to="/Login_page" className="bg-white text-blue-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-500 hover:text-white transition">
                        Register
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
                    <ChevronLeft size={20} className="mr-1" /> Back to Search
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
                            <Star size={16} fill="currentColor" className="mr-1" /> ANCIENT MONASTERY
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">Sithulpawwa Rock Temple</h1>

                        <div className="flex flex-wrap gap-6 mb-10 text-slate-600">
                            <div className="flex items-center"><MapPin size={18} className="mr-2 text-blue-600" /> Hambantota District, Sri Lanka</div>
                            <div className="flex items-center"><Star size={18} className="mr-2 text-orange-500" /> 4.7/5 (Ancient Buddhist Site)</div>
                        </div>

                        <hr className="border-slate-100 mb-8" />

                        {/* Overview Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Overview</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                An ancient Buddhist monastery dating back to the 2nd century B.C., set atop a rocky hill with stupas, caves, early Brahmi inscriptions, and serene panoramic views. It was historically a center for Buddhist education and meditation. This historic monastery deep in Hambantota features cave temples and rock paintings reflecting early Buddhist culture.
                            </p>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <InfoCard icon={<Calendar className="text-blue-600" />} title="Best Time" detail="7:00 - 10:00 AM (Nov-Apr)" />
                            <InfoCard icon={<Clock className="text-orange-600" />} title="Duration" detail="2-3 Hours" />
                            <InfoCard icon={<Ticket className="text-green-600" />} title="Entry Fee" detail="Donation-based" />
                        </div>

                        {/* Activities Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <Flame className="mr-2 text-orange-500" /> Fun Activities
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ActivityItem title="Cultural Tours" desc="Explore ancient ruins and meditation caves with early Buddhist inscriptions" />
                                <ActivityItem title="Photography" desc="Capture panoramic views over the dry zone landscape" />
                                <ActivityItem title="Hiking" desc="Moderate climb up rock steps to reach the temple complex" />
                                <ActivityItem title="Meditation" desc="Experience tranquility in historic meditation caves" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Booking/Sticky Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl shadow-slate-200/50">
                        <h4 className="text-xl font-bold mb-4">Plan Your Visit</h4>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">From Hambantota</span>
                                <span className="font-bold">~30 min</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Duration</span>
                                <span className="font-bold">2-3 Hours</span>
                            </div>
                        </div>
                        <button
                            onClick={handleGetDirections}
                            className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                        >
                            Get Directions
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-4">
                            Local guides available on site
                        </p>
                    </div>
                </div>
            </main>

            {/* --- Adobe Inspired Gallery Section --- */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                    <Camera className="mr-2 text-blue-600" /> Photo Gallery
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
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Getting There</h3>
                            <p className="text-slate-500">Find directions to Sithulpawwa Rock Temple</p>
                        </div>
                        <button
                            onClick={handleUseMyLocation}
                            className="mt-4 md:mt-0 flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                        >
                            <MapPin size={18} className="mr-2" />
                            Use My Location
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
                            title="Sithulpawwa Map"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* --- Transport Options Section --- */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="flex items-center mb-8">
                    <h3 className="text-3xl font-bold text-slate-900 mr-4">Transport Options</h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                        Updated Daily
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Public Transport */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition duration-300">
                        <h4 className="flex items-center text-xl font-bold text-slate-800 mb-6">
                            <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600">
                                <Bus size={20} />
                            </span>
                            Public Transport
                        </h4>

                        {/* Bus */}
                        <div className="mb-8 pl-4 border-l-2 border-slate-100">
                            <h5 className="font-bold text-lg text-slate-900 mb-1">Bus</h5>
                            <p className="text-slate-600 text-sm leading-relaxed mb-2">Regular buses run from Hambantota to Tissamaharama, then take a connecting bus or tuk-tuk to Sithulpawwa</p>
                            <p className="text-xs font-bold text-slate-500 bg-slate-50 inline-block px-2 py-1 rounded">
                                Route: Hambantota → Tissa → Sithulpawwa
                            </p>
                        </div>
                    </div>

                    {/* Private Transport */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition duration-300">
                        <h4 className="flex items-center text-xl font-bold text-slate-800 mb-6">
                            <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600">
                                <Car size={20} />
                            </span>
                            Private Transport
                        </h4>

                        {/* Private Transfer */}
                        <div className="mb-8 pl-4 border-l-2 border-slate-100">
                            <h5 className="font-bold text-lg text-slate-900 mb-1">Private Car/Van</h5>
                            <p className="text-slate-600 text-sm leading-relaxed mb-2">Recommended for comfortable access. Hire from Hambantota or Tissamaharama with driver</p>
                            <p className="text-xs font-bold text-slate-700">Est. Cost: LKR 3000-5000 from Hambantota</p>
                        </div>

                        {/* Tuktuk */}
                        <div className="pl-4 border-l-2 border-slate-100">
                            <h5 className="font-bold text-lg text-slate-900 mb-1">Tuk-Tuk</h5>
                            <p className="text-slate-600 text-sm leading-relaxed mb-2">Available from Tissamaharama for a scenic ride to the temple</p>
                            <p className="text-xs font-bold text-slate-700">Est. Cost: LKR 1500-2500</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Nearby Amenities Section --- */}
            <section className="max-w-7xl mx-auto px-6 mt-20 mb-20">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Explore Nearby</h3>
                    <p className="text-slate-500 text-lg">Discover essential amenities around Sithulpawwa</p>
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
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
                    <h2 className="text-5xl font-bold mb-8 text-orange-400">Stay Connected</h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                        Subscribe to discover more hidden gems and ancient wonders of Sri Lanka
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-3xl backdrop-blur-lg">
                        <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-6 py-4 outline-none font-bold placeholder:text-slate-500" />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest transition">
                            Subscribe
                        </button>
                    </div>
                    <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-2xl font-black">EXPLORE<span className="text-orange-400">SOUTH</span></div>
                        <div className="flex gap-10 text-slate-400 font-bold text-sm uppercase tracking-widest">
                            <span className="hover:text-white cursor-pointer transition">Home</span>
                            <span className="hover:text-white cursor-pointer transition">About</span>
                            <span className="hover:text-white cursor-pointer transition">Destinations</span>
                            <span className="hover:text-white cursor-pointer transition">Contact</span>
                        </div>
                    </div>
                    <p className="mt-12 text-slate-500 text-sm font-medium">
                        © 2026 EXPLORESOUTH. All rights reserved.
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

export default PlaceDetailPageSithulpawwa;
