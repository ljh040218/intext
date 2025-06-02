import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ imageUrl, title, count, titleColor = '#000', isSpecialCard = false, navigateTo }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <article className="category-card" onClick={handleCardClick}>
      <div className="card-content">
        <div className="card-border">
          <img
            src={imageUrl}
            className="category-image"
            alt={title}
          />
          <div className="card-info">
            <h3 className="category-title">{title}</h3>
            <p className="category-count">({count})</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .category-card {
          border-radius: 8px;
          flex: 1;
          cursor: ${navigateTo ? 'pointer' : 'default'};
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .category-card:hover {
          transform: ${navigateTo ? 'translateY(-2px)' : 'none'};
          box-shadow: ${navigateTo ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'};
        }
        .card-content {
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 1);
        }
        .card-border {
          border-radius: 8px;
          border: 1px solid var(--Border, #d9d0e3);
          display: flex;
          padding-bottom: 17px;
          flex-direction: column;
          align-items: stretch;
        }
        .category-image {
          aspect-ratio: 1.26;
          object-fit: contain;
          object-position: center;
          width: 177px;
          border-radius: 8px 8px 0px 0px;
        }
        .card-info {
          ${isSpecialCard ? 'align-self: start;' : ''}
          display: flex;
          margin-top: 10px;
          ${isSpecialCard ? 'margin-left: 16px;' : 'padding: 0 16px 0 16px;'}
          flex-direction: column;
          align-items: start;
        }
        .category-title {
          color: ${titleColor};
          font-family: ${titleColor === '#2d0c57' ? 'Roboto' : 'Pretendard Variable'}, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: ${titleColor === '#2d0c57' ? '700' : '600'};
          margin: 0;
        }
        .category-count {
          color: #9586a8;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 400;
          margin: 14px 0 0 0;
        }
      `}</style>
    </article>
  );
};

export default CategoryCard;