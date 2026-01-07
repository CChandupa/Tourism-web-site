import React, { useState } from 'react';
import { Search, MapPin, Hotel, Utensils, Car, Star, Navigation, Quote, User, Facebook, Instagram, Twitter, Phone, Mail, Palmtree, Globe } from 'lucide-react';
import { translations } from './translations';
import { Link } from 'react-router-dom';

const HomePage = ({ lang, setLang }) => {
  const [searchQuery, setSearchQuery] = useState("");
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
    <div className="min-h-screen font-sans text-slate-900">
      {/* --- Navbar --- */}
      <nav className="absolute top-0 w-full flex items-center justify-between px-10 py-6 z-50">
        <div className="text-2xl font-bold tracking-tighter text-white">
          EXPLORE<span className="text-orange-400">SOUTH</span>
        </div>
        <div className="hidden md:flex space-x-10 font-bold text-xl text-white tracking-widest uppercase">
          <Link to="/" className="hover:text-orange-400 transition cursor-pointer">{t('home')}</Link>
          <Link to="/About_page" className="hover:text-orange-400 transition cursor-pointer">{t('about')}</Link>
          <Link to="/Destinations_page" className="hover:text-orange-400 transition cursor-pointer">{t('destinations')}</Link>
          <a className="hover:text-orange-400 transition cursor-pointer">{t('hotels')}</a>
          <a className="hover:text-orange-400 transition cursor-pointer">{t('restaurants')}</a>
          <a className="hover:text-orange-400 transition cursor-pointer">{t('transport')}</a>
          <a className="hover:text-orange-400 transition cursor-pointer">{t('contact')}</a>
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

      {/* --- Hero Section --- */}
      <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586902197503-e71026292412?auto=format&fit=crop&w=1920&q=80"
            alt="Mirissa Beach Sri Lanka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-white/90 mb-10 drop-shadow-md">
            {t('heroSubtitle')}
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center max-w-3xl mx-auto">
            <div className="flex items-center px-4 py-2 w-full">
              <Search className="text-slate-400 mr-2" size={20} />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className="w-full outline-none text-slate-700"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl md:rounded-full font-bold transition w-full md:w-auto">
              {t('searchButton')}
            </button>
          </div>
        </div>
      </div>

      {/* --- Quick Links Section --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryCard
            icon={<MapPin size={24} />}
            title={t('topPlaces')}
            desc={t('topPlacesDesc')}
          />
          <CategoryCard
            icon={<Hotel size={24} />}
            title={t('hotelsStays')}
            desc={t('hotelsDesc')}
          />
          <CategoryCard
            icon={<Utensils size={24} />}
            title={t('restaurants')}
            desc={t('restaurantsDesc')}
          />
          <CategoryCard
            icon={<Car size={24} />}
            title={t('transport')}
            desc={t('transportDesc')}
          />
        </div>
      </div>

      {/* --- Featured Destinations --- */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">{t('featuredDestinations')}</h2>
              <p className="text-slate-500">{t('featuredSubtitle')}</p>
            </div>
            <button className="text-blue-600 font-bold hover:underline">{t('viewAll')}</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <DestinationCard
              image={`${process.env.PUBLIC_URL}/assets/galle_fort.png`}
              title={t('galleFort')}
              tag={t('historic')}
              locationLabel={t('locationTag')}
            />
            <DestinationCard
              image={`${process.env.PUBLIC_URL}/assets/mirissa_beach.png`}
              title={t('mirissaBeach')}
              tag={t('surfing')}
              locationLabel={t('locationTag')}
            />
            <DestinationCard
              image={`${process.env.PUBLIC_URL}/assets/unawatuna_beach.png`}
              title={t('unawatuna')}
              tag={t('snorkeling')}
              locationLabel={t('locationTag')}
            />
          </div>
        </div>
      </section>

      {/* --- Traveler Stories Section --- */}
      <section className="bg-blue-600 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('travelerStories')}</h2>
            <p className="text-blue-100/80 text-lg">{t('storiesSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              location="UK"
              text={t('sarahText')}
            />
            <TestimonialCard
              name="David Chen"
              location="Singapore"
              text={t('davidText')}
            />
            <TestimonialCard
              name="Amara Perera"
              location="Australia"
              text={t('amaraText')}
            />
          </div>
        </div>
      </section>

      {/* --- Call To Action --- */}
      <section className="py-20 px-6 text-center">
        <div className="bg-blue-900 rounded-[3rem] p-12 md:p-24 text-white max-w-7xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('readyToStart')}</h2>
            <p className="text-blue-200 mb-10 text-lg max-w-2xl mx-auto">
              {t('ctaSubtitle')}
            </p>
            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all shadow-xl">
              {t('planTrip')}
            </button>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold tracking-tighter text-white mb-6">
              EXPLORE<span className="text-orange-400">SOUTH</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t('footerDesc')}
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

/* --- Helper Components --- */

const CategoryCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-start p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-xl transition-all duration-300 bg-white cursor-pointer group">
    <div className="bg-blue-50 text-blue-600 p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TestimonialCard = ({ name, location, text }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full hover:-translate-y-2 transition-transform duration-300">
    <div>
      <div className="flex space-x-1 text-yellow-400 mb-6">
        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
      </div>
      <p className="text-slate-600 italic font-medium leading-relaxed mb-8">"{text}"</p>
    </div>

    <div className="flex items-center">
      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4 text-slate-500">
        <User size={24} />
      </div>
      <div>
        <h4 className="font-bold text-slate-900">{name}</h4>
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{location}</span>
      </div>
      <Quote size={40} className="ml-auto text-blue-200 rotate-180" fill="currentColor" />
    </div>
  </div>
);

const DestinationCard = ({ image, title, tag, locationLabel }) => (
  <div className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all">
    <div className="relative h-64 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-800 uppercase tracking-widest">
        {tag}
      </span>
    </div>
    <div className="p-6 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <div className="flex items-center text-slate-500 text-sm mt-1">
          <Navigation size={14} className="mr-1" /> {locationLabel}
        </div>
      </div>
      <div className="bg-slate-100 p-3 rounded-full group-hover:bg-blue-600 group-hover:text-white transition">
        <Star size={18} fill="currentColor" className="text-orange-400 group-hover:text-white" />
      </div>
    </div>
  </div>
);

export default HomePage;