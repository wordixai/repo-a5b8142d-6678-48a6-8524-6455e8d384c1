import { Image, PenTool } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Sidebar = () => {
  return (
    <div className="space-y-4">
      {/* User Profile Card */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=48&h=48&fit=crop&crop=face" />
              <AvatarFallback>SW</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">sparrowwht7</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-medium">0</div>
              <div className="text-xs text-gray-500">节点收藏</div>
            </div>
            <div>
              <div className="text-lg font-medium">0</div>
              <div className="text-xs text-gray-500">主题收藏</div>
            </div>
            <div>
              <div className="text-lg font-medium">0</div>
              <div className="text-xs text-gray-500">特别关注</div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between text-sm">
            <span>0 未读提醒</span>
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-xs">80</Badge>
              <Badge variant="secondary" className="text-xs">65</Badge>
              <Badge variant="destructive" className="text-xs rounded-full w-5 h-5 p-0 flex items-center justify-center">?</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions Card */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Image className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-600">图片库</span>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <PenTool className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-600">创作新主题</span>
          </div>
        </CardContent>
      </Card>

      {/* Daily Records Card */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <span className="text-orange-500">⭐</span>
            <h3 className="font-medium text-sm">领取今日的登录奖励</h3>
          </div>
        </CardHeader>
      </Card>

      {/* NAS Advertisement */}
      <Card className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <CardContent className="p-4 text-center">
          <h4 className="text-lg font-bold mb-2">高家千里，也能轻松 NAS</h4>
          <div className="mb-4">
            <div className="text-2xl font-bold mb-1">NAS 外网访问+分享，</div>
            <div className="text-2xl font-bold">一步搞定！</div>
          </div>
          <div className="text-sm opacity-90 mb-4">
            <p>旅行、出差、回老家，也能安全访问</p>
            <p>家中 NAS。免公网 IP，跨平台支持，</p>
            <p>稳定、流畅、全加密...就来看呗！</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;