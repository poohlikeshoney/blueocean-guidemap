import banner_img from "../img/bg.png";

export function MainBeanner() {
  return (
    <div
      className="main-bg"
      style={{ backgroundImage: `url(${banner_img})` }}
    ></div>
  );
}
