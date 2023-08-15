// eslint-disable-next-line react/prop-types
export function LightBtn({ src, alt }) {
  return (
    <button className="light-btn">
      <img src={src} alt={alt} />
      Download App
    </button>
  );
}
