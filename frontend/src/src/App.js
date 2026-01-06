import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home_page';
import AuthPage from './Login_page';
import AboutPage from './About_page';
import DestinationPage from './Destinations_page';
import PlaceDetailPage from './PlaceDetail_page_kataragama';

function App() {
    const [lang, setLang] = useState('en');

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
                <Route path="/Login_page" element={<AuthPage lang={lang} setLang={setLang} />} />
                <Route path="/About_page" element={<AboutPage lang={lang} setLang={setLang} />} />
                <Route path="/Destinations_page" element={<DestinationPage lang={lang} setLang={setLang} />} />
                <Route path="/PlaceDetail_page" element={<PlaceDetailPage lang={lang} setLang={setLang} />} />
            </Routes>
        </Router>
    );
}

export default App;
