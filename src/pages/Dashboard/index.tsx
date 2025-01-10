
import WelcomeHeader from './components/WelcomeHeader';
import CurrentProgress from './components/CurrentProgress';
import RecommendedTopics from './components/RecommendedTopics';
import AchievementsWidget from './components/AchievementsWidget';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <WelcomeHeader />
      <CurrentProgress />
      <RecommendedTopics />
      <AchievementsWidget />
    </div>
  );
};

export default Dashboard;