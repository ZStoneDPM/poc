export const PHONE_TOP_NOTCH = 'PHONE_TOP_NOTCH';
export const PHONE_TOP_NOTCH_CHECKED = 'PHONE_TOP_NOTCH_CHECKED';
export const CONTENT_BODY_WIDTH = 'CONTENT_BODY_WIDTH';
export const SIDEMENU_BODY_WIDTH = 'SIDEMENU_BODY_WIDTH';
export const TOGGLE_LEFT_MENU = 'TOGGLE_LEFT_MENU';

export const updatePhoneNotch = phoneNotch => ({
  type: PHONE_TOP_NOTCH,
  phoneNotch
});
export const updatePhoneNotchChecked = phoneNotchChecked => ({
  type: PHONE_TOP_NOTCH_CHECKED,
  phoneNotchChecked
});
export const updateContentBodyWidth = contentBodyWidth => ({
  type: CONTENT_BODY_WIDTH,
  contentBodyWidth
});
export const updateSidemenuBodyWidth = sideMenuBodyWidth => ({
  type: SIDEMENU_BODY_WIDTH,
  sideMenuBodyWidth
});
export const updateShowLeftMenu = showLeftMenu => ({
  type: TOGGLE_LEFT_MENU,
  showLeftMenu
});

const initialState = { 
  phoneNotch: 0,
  phoneNotchChecked: false,
  contentBodyWidth: '',
  sideMenuBodyWidth: '30%',
  showLeftMenu: false,
   };

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
  switch (action.type) {
    case PHONE_TOP_NOTCH:
      return {
        ...state,
        phoneNotch: action.phoneNotch,
        rehydrated: false
      };
    case PHONE_TOP_NOTCH_CHECKED:
      return {
        ...state,
        phoneNotchChecked: action.phoneNotchChecked,
        rehydrated: false
      };
      case CONTENT_BODY_WIDTH:
        return {
          ...state,
          contentBodyWidth: action.contentBodyWidth,
          rehydrated: false
        };
      case SIDEMENU_BODY_WIDTH:
        return {
          ...state,
          sideMenuBodyWidth: action.sideMenuBodyWidth,
          rehydrated: false
        };
        case TOGGLE_LEFT_MENU:
          return {
            ...state,
            showLeftMenu: action.showLeftMenu,
            rehydrated: false
          };
    default:
      return state;
  }
};
