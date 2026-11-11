import "../styles/MapSticker.css";

export function MapSticker({ className = "", variant = "default" }) {
  const variantClass = variant === "fill" ? "map-sticker--fill" : "";
  return (
    <span className={`map-sticker ${variantClass} ${className}`.trim()} aria-hidden="true">
      <span className="map-sticker__face">
        <img
          className="map-sticker__img"
          src={`${import.meta.env.BASE_URL}map/camMap ui.svg`}
          alt=""
          width="300"
          height="225"
          loading="lazy"
          decoding="async"
        />
      </span>
    </span>
  );
}

export default MapSticker;

