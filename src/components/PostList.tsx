import PostItem from './PostItem';

const posts = [
  {
    id: 1,
    title: '长沙大厂外包 offer 是否值得去?',
    author: 'maigebaoer',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
    node: 'itechnology',
    time: '1 分钟前',
    replies: 1,
    lastReply: 'maigebaoer'
  },
  {
    id: 2,
    title: '如何能找到靠谱的程序员呢',
    author: 'wupher',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    node: 'Ranglage',
    time: '3 分钟前',
    replies: 135,
    lastReply: 'wupher'
  },
  {
    id: 3,
    title: '招聘测试工程师 (TypeScript/自动化 & 性能压测)',
    author: 'yohjisakamoto',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    node: '酷工作',
    time: '14 分钟前',
    replies: 0,
    lastReply: null
  },
  {
    id: 4,
    title: '[闲聊] 朋友们，你们工作几年？跳槽几次了？',
    author: 'summertree',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    node: '职场话题',
    time: '20 分钟前',
    replies: 37,
    lastReply: 'summertree'
  },
  {
    id: 5,
    title: '求职啊，大佬们，十年 Java 求个自包项目公司，不要搞外包了，牛马要攻奴牛了',
    author: 'NickX',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
    node: '求职',
    time: '23 分钟前',
    replies: 9,
    lastReply: 'NickX'
  },
  {
    id: 6,
    title: '远程工作，可能并没有想象的那么好',
    author: 'SpontaLeo',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face',
    node: '职场话题',
    time: '1 小时 4 分钟前',
    replies: 22,
    lastReply: 'SpontaLeo'
  },
  {
    id: 7,
    title: 'n*15 965 到月薪 (n+8)*15 995，都是双休，选哪个？',
    author: 'zidy',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616c9de7e15?w=40&h=40&fit=crop&crop=face',
    node: '职场话题',
    time: '1 小时 17 分钟前',
    replies: 31,
    lastReply: 'zidy'
  },
  {
    id: 8,
    title: '回老当教师一年总结',
    author: 'felixlong',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=40&h=40&fit=crop&crop=face',
    node: '职场话题',
    time: '1 小时 40 分钟前',
    replies: 60,
    lastReply: 'felixlong'
  },
  {
    id: 9,
    title: '工作三年，目前有个速港汇 ai 专业一年课程的机会，去还是不去？',
    author: 'Ulduar',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face',
    node: '职场话题',
    time: '2 小时 28 分钟前',
    replies: 24,
    lastReply: 'Ulduar'
  }
];

const PostList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex gap-4 text-sm text-gray-600">
          <button className="hover:text-gray-800">酷工作</button>
          <button className="hover:text-gray-800">求职</button>
          <button className="hover:text-gray-800">职场话题</button>
          <button className="hover:text-gray-800">创业组队</button>
          <button className="hover:text-gray-800">外包</button>
        </div>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>发表我的简历</span>
          <span>发布招聘信息</span>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;