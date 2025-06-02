const SearchInput = () => {
  return (
    <div className="search-container">
      <div className="search-input">
        <div className="input-content">
          <div className="search-icon">
            search
          </div>
          <div className="placeholder-text">
            검색
          </div>
        </div>
      </div>
      <style jsx>{`
        .search-container {
          margin-top: 26px;
          min-height: 40px;
          width: 100%;
          color: #667085;
          white-space: nowrap;
        }
        .search-input {
          align-items: stretch;
          border-radius: 4px;
          border: 1px solid var(--Gray-200, #eaecf0);
          background-color: #f6f6f6;
          display: flex;
          min-height: 40px;
          width: 100%;
          overflow: hidden;
          justify-content: start;
        }
        .input-content {
          display: flex;
          min-width: 240px;
          width: 100%;
          padding: 8px 16px;
          align-items: center;
          gap: 12px;
          justify-content: start;
          height: 100%;
          flex: 1;
        }
        .search-icon {
          color: #667085;
          z-index: 10;
          align-self: stretch;
          margin: auto 0;
          font-family: Font Awesome 5 Free, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 900;
          text-align: center;
          width: 12px;
        }
        .placeholder-text {
          color: #667085;
          align-self: stretch;
          flex: 1;
          min-width: 240px;
          margin: auto 0;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default SearchInput;
