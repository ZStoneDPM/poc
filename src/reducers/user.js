export const PHONE_TOP_NOTCH = 'PHONE_TOP_NOTCH';
export const PHONE_TOP_NOTCH_CHECKED = 'PHONE_TOP_NOTCH_CHECKED';

export const updatePhoneNotch = phoneNotch => ({
  type: PHONE_TOP_NOTCH,
  phoneNotch
});
export const updatePhoneNotchChecked = phoneNotchChecked => ({
  type: PHONE_TOP_NOTCH_CHECKED,
  phoneNotchChecked
});

const initialState = { 
  phoneNotch: 0,
  phoneNotchChecked: false,
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
    default:
      return state;
  }
};
