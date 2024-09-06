// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostresList from './components/PostresComponent';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostresList />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
