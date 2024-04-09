import { FALLBACK_IMAGE } from '../constants/constants';


/**
 * Scroll to bottom of the page
 */
export const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }

/**
 * Scroll to top of the page
 */
export const scrollToTop = () => {
  window.scrollTo(0, 0)
}
  

  
/**
 * Add a fallback picture if picture is not available
 * @param {*} event 
 */
export const handleImageError = (event) => {
    event.target.src = FALLBACK_IMAGE;
};
