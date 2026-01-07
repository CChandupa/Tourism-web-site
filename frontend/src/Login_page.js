import React, { useState } from 'react';
import { Mail, Lock, Github, Chrome, ArrowRight, User, Phone, Globe, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from './translations';

const AuthPage = ({ lang, setLang }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLangOpen, setIsLangOpen] = useState(false);

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

    return (
        <div className="min-h-screen font-sans text-slate-900 bg-slate-50">
            {/* --- Navbar --- */}
            <nav className="absolute top-0 w-full flex items-center justify-between px-10 py-6 z-50">
                <div className="text-2xl font-bold tracking-tighter text-white">
                    EXPLORE<span className="text-orange-400">SOUTH</span>
                </div>
                <div className="hidden md:flex space-x-8 font-bold text-lg text-white tracking-wide">
                    <Link to="/" className="hover:text-orange-400 transition">{t('home')}</Link>
                    <Link to="/About_page" className="hover:text-orange-400 transition">{t('about')}</Link>
                    <Link to="/Destinations_page" className="hover:text-orange-400 transition">{t('destinations')}</Link>
                    <a href="#" className="hover:text-orange-400 transition">{t('hotels')}</a >
                    <a href="#" className="hover:text-orange-400 transition">{t('restaurants')}</a >
                    <a href="#" className="hover:text-orange-400 transition">{t('transport')}</a >
                    <a href="#" className="hover:text-orange-400 transition">{t('contact')}</a >
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
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl py-2 overflow-hidden">
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
            </nav>

            {/* --- Auth Section --- */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
                {/* --- Background Image with Overlay --- */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/sri_lanka_bg.png`}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm"></div>
                </div>

                {/* --- Main Container (Glassmorphism) --- */}
                <div className="relative z-10 bg-white/90 backdrop-blur-md w-full max-w-5xl h-[700px] flex rounded-[2.5rem] shadow-2xl overflow-hidden m-4 border border-white/20">

                    {/* --- Left Side: Aesthetic Image & Branding --- */}
                    <div className="hidden lg:flex w-1/2 relative bg-blue-900/20 backdrop-blur-sm border-r border-white/10">
                        <div className="relative z-10 p-12 flex flex-col justify-between text-white">
                            <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-orange-400 transition">
                                EXPLORE<span className="text-orange-400">SOUTH</span>
                            </Link>
                            <div>
                                <h2 className="text-4xl font-bold mb-4 leading-tight">
                                    {t('unlockAdventures')}
                                </h2>
                                <ul className="space-y-3 text-blue-50">
                                    <li className="flex items-center">
                                        <div className="bg-white/20 p-1 rounded-full mr-3">
                                            <ArrowRight size={14} className="text-orange-300" />
                                        </div>
                                        {t('saveSpots')}
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bg-white/20 p-1 rounded-full mr-3">
                                            <ArrowRight size={14} className="text-orange-300" />
                                        </div>
                                        {t('buildItineraries')}
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bg-white/20 p-1 rounded-full mr-3">
                                            <ArrowRight size={14} className="text-orange-300" />
                                        </div>
                                        {t('rateCafes')}
                                    </li>
                                </ul>
                            </div>
                            <p className="text-sm text-blue-100/70">
                                {t('travelResponsibly')}
                            </p>
                        </div>
                    </div>

                    {/* --- Right Side: Form --- */}
                    <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16 justify-center relative bg-white/40 backdrop-blur-sm">
                        <div className="max-w-md mx-auto w-full">
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                                {isLogin ? t('welcomeBack') : t('createAccount')}
                            </h3>
                            <p className="text-slate-500 mb-8">
                                {isLogin ? t('loginManage') : t('joinCommunity')}
                            </p>

                            {/* Form */}
                            <form className="space-y-4">
                                {!isLogin && (
                                    <div className="relative">
                                        <User className="absolute left-4 top-3.5 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder={t('fullName')}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                        />
                                    </div>
                                )}

                                <div className="relative">
                                    <Mail className="absolute left-4 top-3.5 text-slate-400" size={18} />
                                    <input
                                        type="email"
                                        placeholder={t('emailMobile')}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                    />
                                </div>

                                <div className="relative">
                                    <Lock className="absolute left-4 top-3.5 text-slate-400" size={18} />
                                    <input
                                        type="password"
                                        placeholder={t('passwordPlaceholder')}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                    />
                                </div>

                                {isLogin && (
                                    <div className="text-right">
                                        <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">{t('forgotPassword')}</a>
                                    </div>
                                )}

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 mt-2">
                                    {isLogin ? t('loginButton') : t('getStarted')}
                                </button>
                            </form>

                            {/* Social Logins */}
                            <div className="mt-8">
                                <div className="relative flex items-center justify-center mb-6">
                                    <div className="border-t border-slate-200 w-full"></div>
                                    <span className="bg-white px-4 text-sm text-slate-400 absolute">{t('orContinueWith')}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700">
                                        <Chrome className="mr-2 text-red-500" size={18} /> Google
                                    </button>
                                    <button className="flex items-center justify-center py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700">
                                        <Github className="mr-2 text-slate-900" size={18} /> Github
                                    </button>
                                </div>
                            </div>

                            {/* Toggle Login/Register */}
                            <p className="text-center mt-10 text-slate-600 text-sm">
                                {isLogin ? t('noAccount') : t('alreadyAccount')}{' '}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-blue-600 font-bold hover:underline"
                                >
                                    {isLogin ? t('signUp') : t('loginButton')}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Footer --- */}
            <footer className="bg-slate-900 text-slate-300 py-16 px-6 border-t border-slate-800">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="text-2xl font-bold tracking-tighter text-white mb-6">
                            EXPLORE<span className="text-orange-400">SOUTH</span>
                        </div>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            {t('footerDesc') || 'Your ultimate guide to exploring the southern coast of Sri Lanka. Discover hidden gems, pristine beaches, and authentic culture.'}
                        </p>
                        <div className="flex space-x-6">
                            <Facebook className="text-slate-400 hover:text-orange-400 cursor-pointer transition" size={20} />
                            <Instagram className="text-slate-400 hover:text-orange-400 cursor-pointer transition" size={20} />
                            <Twitter className="text-slate-400 hover:text-orange-400 cursor-pointer transition" size={20} />
                        </div>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">{t('explore')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-orange-400 transition">{t('destinations')}</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition">{t('hotelsStays')}</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition">{t('dining')}</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition">{t('events')}</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">{t('company')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-orange-400 transition">{t('aboutUs')}</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition">{t('contactUs')}</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition">{t('privacyPolicy')}</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition">{t('termsOfService')}</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">{t('contact')}</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="text-orange-400 mr-3 mt-1" size={18} />
                                <span>123 Galle Road,<br />Unawatuna, Sri Lanka</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="text-orange-400 mr-3" size={18} />
                                <span>+94 77 123 4567</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="text-orange-400 mr-3" size={18} />
                                <span>hello@downsouth.lk</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 mb-4 md:mb-0">{t('rightsReserved')}</p>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-900/20">
                        {t('planTrip')}
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default AuthPage;
