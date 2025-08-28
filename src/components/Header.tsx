import { Search, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">V2EX</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="搜索" 
                className="pl-10 w-64 bg-gray-50 border-0"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">首页</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">sparrowwht7</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">记事本</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Planet</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">设置</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">登出</a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;