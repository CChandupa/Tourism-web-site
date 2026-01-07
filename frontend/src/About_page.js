import React, { useState } from 'react';
import { Target, Compass, HelpCircle, Mail, Phone, MapPin, CheckCircle2, Globe, Facebook, Instagram, Twitter, Palmtree } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from './translations';

const AboutPage = ({ lang, setLang }) => {
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
        <div className="bg-white min-h-screen font-sans selection:bg-orange-100">
            {/* --- Navbar --- */}
            <nav className="absolute top-0 w-full flex items-center justify-between px-10 py-6 z-50">
                <div className="text-2xl font-bold tracking-tighter text-white">
                    EXPLORE<span className="text-orange-400">SOUTH</span>
                </div>
                <div className="hidden md:flex space-x-8 font-bold text-lg text-white tracking-wide">
                    <Link to="/" className="hover:text-orange-400 transition">{t('home')}</Link>
                    <Link to="/About_page" className="text-orange-400 transition">{t('about')}</Link>
                    <Link to="/Destinations_page" className="hover:text-orange-400 transition cursor-pointer">{t('destinations')}</Link>
                    <a href="#" className="hover:text-orange-400 transition">{t('hotels')}</a>
                    <a href="#" className="hover:text-orange-400 transition">{t('restaurants')}</a>
                    <a href="#" className="hover:text-orange-400 transition">{t('transport')}</a>
                    <a href="#" className="hover:text-orange-400 transition">{t('contact')}</a>
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

            {/* --- Page Header --- */}
            <div className="bg-slate-900 py-48 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1500&q=80"
                        className="w-full h-full object-cover"
                        alt="Southern Coastline"
                    />
                </div>
                <div className="absolute inset-0 bg-blue-900/40"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        {t('ourMission')}
                    </h1>
                    <p className="text-blue-100/90 text-xl max-w-3xl mx-auto leading-relaxed">
                        {t('missionDesc')}
                    </p>
                </div>
            </div>

            {/* --- Section 1: What We Offer --- */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1490261322003-8be94f09d8d6?auto=format&fit=crop&w=800&q=80"
                            className="rounded-[3rem] shadow-2xl z-10 relative"
                            alt="Local Heritage"
                        />
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-400 rounded-full -z-0"></div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center">
                            <Target className="text-orange-500 mr-3" size={36} /> {t('whatWeOffer')}
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            {t('offerDesc')}
                        </p>
                        <ul className="space-y-4">
                            {[t('verifiedNumbers'), t('realTimeTransport'), t('curatedLists'), t('directBooking')].map((item) => (
                                <li key={item} className="flex items-center text-slate-700 font-medium">
                                    <CheckCircle2 className="text-green-500 mr-3" size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- Section: Local Culture --- */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                        <div className="w-full lg:w-1/2 relative z-10">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 border-l-4 border-orange-500 pl-6 leading-tight">
                                {t('localCultureTitle')}
                            </h2>
                            <p className="text-slate-300 text-xl leading-relaxed mb-12">
                                {t('localCultureDesc')}
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="bg-white/10 p-4 rounded-2xl h-fit">
                                        <Compass className="text-orange-400" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xl font-bold mb-2">{t('tradition1')}</h4>
                                        <p className="text-slate-400">{t('tradition1Desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="bg-white/10 p-4 rounded-2xl h-fit">
                                        <Target className="text-blue-400" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xl font-bold mb-2">{t('tradition2')}</h4>
                                        <p className="text-slate-400">{t('tradition2Desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="bg-white/10 p-4 rounded-2xl h-fit">
                                        <Palmtree className="text-green-400" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xl font-bold mb-2">{t('tradition3')}</h4>
                                        <p className="text-slate-400">{t('tradition3Desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
                            <div className="space-y-4 pt-12">
                                <img
                                    src="https://images.unsplash.com/photo-1544074816-1681284d7237?auto=format&fit=crop&w=800&q=80"
                                    className="w-full h-64 object-cover rounded-[2rem] shadow-xl hover:scale-105 transition duration-500"
                                    alt="Traditional Stilt Fishing"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80"
                                    className="w-full h-80 object-cover rounded-[2rem] shadow-xl hover:scale-105 transition duration-500"
                                    alt="Traditional Sri Lankan Mask"
                                />
                            </div>
                            <div className="space-y-4">
                                <img
                                    src="https://images.unsplash.com/photo-1590595359216-56608518384f?auto=format&fit=crop&w=800&q=80"
                                    className="w-full h-80 object-cover rounded-[2rem] shadow-xl hover:scale-105 transition duration-500"
                                    alt="Sri Lankan Rice and Curry"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=800&q=80"
                                    className="w-full h-64 object-cover rounded-[2rem] shadow-xl hover:scale-105 transition duration-500"
                                    alt="Cultural Dance Performance"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Why Down South? --- */}
            <section className="bg-blue-50 py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-16">{t('whyChooseUs')}</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                                <Compass className="text-blue-600" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('diverseLandscapes')}</h3>
                            <p className="text-slate-500 leading-relaxed">{t('diverseDesc')}</p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                                <Target className="text-orange-600" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('surfWildlife')}</h3>
                            <p className="text-slate-500 leading-relaxed">{t('surfDesc')}</p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                                <HelpCircle className="text-green-600" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('authenticVibe')}</h3>
                            <p className="text-slate-500 leading-relaxed">{t('vibeDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 3: How To Use --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-20">{t('howToUse')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { step: '01', title: t('explore'), desc: t('exploreDesc') },
                        { step: '02', title: t('plan'), desc: t('planDesc') },
                        { step: '03', title: t('save'), desc: t('saveDesc') },
                        { step: '04', title: t('go'), desc: t('goDesc') }
                    ].map((item, index) => (
                        <div key={index} className="relative p-10 border border-slate-100 rounded-[2rem] bg-white text-center hover:border-blue-200 transition-colors">
                            <span className="text-8xl font-black text-slate-50 absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">{item.step}</span>
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h4>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-slate-900 py-24 px-6 text-white rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
                    <div>
                        <h2 className="text-5xl font-bold mb-8 text-orange-400">{t('getInTouch')}</h2>
                        <p className="text-slate-400 mb-12 text-xl leading-relaxed">
                            {t('contactDesc')}
                        </p>
                        <div className="space-y-8">
                            <div className="flex items-center group cursor-pointer">
                                <div className="bg-slate-800 p-5 rounded-[1.5rem] mr-6 group-hover:bg-blue-600 transition-all">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-bold mb-1">{t('emailUs')}</p>
                                    <p className="text-xl font-semibold">hello@exploresouth.lk</p>
                                </div>
                            </div>
                            <div className="flex items-center group cursor-pointer">
                                <div className="bg-slate-800 p-5 rounded-[1.5rem] mr-6 group-hover:bg-blue-600 transition-all">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-bold mb-1">{t('callUs')}</p>
                                    <p className="text-xl font-semibold">+94 91 123 4567</p>
                                </div>
                            </div>
                            <div className="flex items-center group cursor-pointer">
                                <div className="bg-slate-800 p-5 rounded-[1.5rem] mr-6 group-hover:bg-blue-600 transition-all">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-bold mb-1">{t('ourOffice')}</p>
                                    <p className="text-xl font-semibold">Dutch Hospital, Galle Fort, Sri Lanka</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex space-x-6">
                            <Facebook className="text-slate-500 hover:text-orange-400 transition-colors cursor-pointer" size={24} />
                            <Instagram className="text-slate-500 hover:text-orange-400 transition-colors cursor-pointer" size={24} />
                            <Twitter className="text-slate-500 hover:text-orange-400 transition-colors cursor-pointer" size={24} />
                        </div>
                    </div>

                    <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-md">
                        <h3 className="text-3xl font-bold mb-8">{t('sendMessage')}</h3>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-2">{t('fullName')}</label>
                                <input type="text" className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl py-5 px-8 outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-2">{t('emailMobile')}</label>
                                <input type="email" className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl py-5 px-8 outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-2">{t('messageLabel') || 'Message'}</label>
                                <textarea rows="4" className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl py-5 px-8 outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
                            </div>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-5 rounded-2xl transition-all shadow-[0_10px_30px_-10px_rgba(249,115,22,0.5)] transform hover:-translate-y-1">
                                {t('sendButton') || 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-slate-800 text-center text-slate-500">
                    <p>{t('rightsReserved')}</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;
