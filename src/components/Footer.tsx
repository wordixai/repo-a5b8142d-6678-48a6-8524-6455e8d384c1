import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top Navigation */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
          <a href="#" className="hover:text-gray-800">关于</a>
          <a href="#" className="hover:text-gray-800">帮助文档</a>
          <a href="#" className="hover:text-gray-800">自助推广系统</a>
          <a href="#" className="hover:text-gray-800">博客</a>
          <a href="#" className="hover:text-gray-800">API</a>
          <a href="#" className="hover:text-gray-800">FAQ</a>
          <a href="#" className="hover:text-gray-800">实用小工具</a>
          <span className="text-gray-400">2584 人在线</span>
          <span className="text-gray-400">最高记录 6679</span>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-gray-500">Select Language</span>
          </div>
          <div className="ml-auto">
            <img 
              src="https://www.digitalocean.com/assets/media/logos-badges/png/DO_Logo_Horizontal_Blue-3db19536.png" 
              alt="DigitalOcean" 
              className="h-6 opacity-60"
            />
          </div>
        </div>

        {/* Community Description */}
        <div className="text-gray-500 text-sm mb-4">
          <p className="mb-2">创意工作者们的社区</p>
          <p className="italic">World is powered by solitude</p>
        </div>

        {/* Version and Development Info */}
        <div className="text-xs text-gray-400 space-y-1">
          <div className="flex flex-wrap items-center gap-4">
            <span>VERSION: 3.9.8.5 · 81ms</span>
            <span>UTC 15:26</span>
            <span>PVG 23:26</span>
            <span>LAX 08:26</span>
            <span>JFK 11:26</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Developed with</span>
            <a href="#" className="text-blue-500 hover:text-blue-700">CodeLauncher</a>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-red-400">♥</span>
            <span>Do have faith in what you're doing.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;