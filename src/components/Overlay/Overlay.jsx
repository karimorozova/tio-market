import { createPortal } from 'react-dom';

const OVERLAY_ROOT = document.querySelector('#overlay-root');

const Overlay = ({ children }) => {
  return createPortal(children, OVERLAY_ROOT);
};

export default Overlay;
