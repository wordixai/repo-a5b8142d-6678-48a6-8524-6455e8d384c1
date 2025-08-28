import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PostList from '../components/PostList';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="max-w-6xl mx-auto px-4 flex-1">
        <Navigation />
        <div className="flex gap-6 mt-4">
          <div className="flex-1">
            <PostList />
          </div>
          <div className="w-80">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;