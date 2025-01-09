import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useAuthStore } from './store/authStore';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AuthGuard from './components/AuthGuard';

import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import Projects from './pages/Projects';
import Community from './pages/Community';
import Build from './pages/Build';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AIChat from './components/AIChat';

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [setUser]);

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <AuthGuard>
              <div className="flex h-screen bg-background">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar />
                  <main className="flex-1 overflow-y-auto p-6">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/learning" element={<Learning />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/community" element={<Community />} />
                      <Route path="/build" element={<Build />} />
                      <Route path="/leaderboard" element={<Leaderboard />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>
                  <AIChat />
                </div>
              </div>
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;