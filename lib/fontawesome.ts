import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHeart, faShoppingCart, faUser, faShoppingBag, faXmark, faStar, faSignOut,faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';

// Ngăn không cho Font Awesome tự động thêm CSS
config.autoAddCss = false;

// Thêm các icon bạn muốn sử dụng vào thư viện
library.add(faSearch, faHeart, faShoppingCart,faUser,faShoppingBag,faXmark,faStar,faSignOut,faArrowRight, faArrowLeft);
