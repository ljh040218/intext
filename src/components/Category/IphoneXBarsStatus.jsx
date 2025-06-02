import container from "./Container.svg";

export const IphoneXBarsStatus = () => {
  return (
    <div className="iphone-status">
      <div className="action">
        <div className="time">9:41</div>
      </div>

      <div className="container">
        <img
          className="status-icons"
          alt="Status icons"
          src={container}
        />
      </div>
    </div>
  );
};