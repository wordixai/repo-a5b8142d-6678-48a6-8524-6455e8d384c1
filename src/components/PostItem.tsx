interface Post {
  id: number;
  title: string;
  author: string;
  avatar: string;
  node: string;
  time: string;
  replies: number;
  lastReply: string | null;
}

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="p-4 hover:bg-gray-50">
      <div className="flex gap-3">
        <img 
          src={post.avatar} 
          alt={post.author}
          className="w-10 h-10 rounded-full"
        />
        
        <div className="flex-1">
          <h3 className="text-gray-800 hover:text-blue-600 cursor-pointer mb-2">
            {post.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
              {post.node}
            </span>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.time}</span>
            {post.lastReply && (
              <>
                <span>•</span>
                <span>最后回复来自 {post.lastReply}</span>
              </>
            )}
          </div>
        </div>
        
        {post.replies > 0 && (
          <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm min-w-[2rem] text-center">
            {post.replies}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;