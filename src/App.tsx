import { Route, Routes } from 'react-router-dom';

import KakaoLoginButton from './components/KakaoLoginButton';
import LoginForm from './components/LoginForm';
import AuthPage from './pages/AuthPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/main" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/api/users/kakao/callback" element={<KakaoLoginButton />} />
    </Routes>
  );
}
