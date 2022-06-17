export function Down({ isShow, onClickToggle }) {
  return (
    <svg
      onClick={onClickToggle}
      style={isShow ? { transform: 'rotateX(180deg)' } : { transform: 'rotateX(0deg)' }}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="13px"
      height="13px"
      viewBox="0 0 255 255"
      xmlSpace="preserve">
      <g>
        <g id="arrow-drop-down">
          <polygon points="0,63.75 127.5,191.25 255,63.75" />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}
