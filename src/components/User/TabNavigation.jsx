"use client";
function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <nav className="tab-navigation">
      <button
        className={`tab-btn ${activeTab === 'direct' ? 'active' : 'inactive'}`}
        onClick={() => setActiveTab('direct')}
      >
        직접 작성
      </button>
      <button
        className={`tab-btn ${activeTab === 'recent' ? 'active' : 'inactive'}`}
        onClick={() => setActiveTab('recent')}
      >
        최근 사용
      </button>
    </nav>
  );
}

export default TabNavigation;