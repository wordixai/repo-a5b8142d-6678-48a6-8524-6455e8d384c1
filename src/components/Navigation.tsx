const Navigation = () => {
  const tabs = [
    { name: '技术', active: false },
    { name: '创意', active: false },
    { name: '好玩', active: false },
    { name: 'Apple', active: false },
    { name: '酷工作', active: true },
    { name: '交易', active: false },
    { name: '城市', active: false },
    { name: '问与答', active: false },
    { name: '最热', active: false },
    { name: '全部', active: false },
    { name: 'R2', active: false },
    { name: 'VXNA', active: false },
    { name: '节点', active: false },
    { name: '关注', active: false },
    { name: '🌟', active: false }
  ];

  return (
    <nav className="bg-white rounded-lg shadow-sm mt-4">
      <div className="flex items-center gap-1 p-3 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-3 py-1.5 text-sm rounded whitespace-nowrap ${
              tab.active 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;