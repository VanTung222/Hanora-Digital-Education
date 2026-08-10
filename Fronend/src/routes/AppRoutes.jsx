import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { SolutionsPage } from '../pages/SolutionsPage';
import { TechnologyPage } from '../pages/TechnologyPage';
import { AchievementsPage } from '../pages/AchievementsPage';
import { TeamPage } from '../pages/TeamPage';
import { NewsPage } from '../pages/NewsPage';
import { ContactPage } from '../pages/ContactPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
export default AppRoutes;
