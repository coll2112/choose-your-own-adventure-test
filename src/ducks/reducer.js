const intialState = {
  charName: '',
  shipName: ''
};

const CHAR_NAME = 'CHAR_NAME';
const SHIP_NAME = 'SHIP_NAME';

export const assignName = (name) => {
  return {
    type: CHAR_NAME,
    payload: name
  };
};

export const assignShipName = (ship) => {
  return {
    type: SHIP_NAME,
    payload: ship
  };
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case CHAR_NAME:
      return {
        ...state,
        charName: action.payload
      };
    case SHIP_NAME:
      return {
        ...state,
        shipName: action.payload
      };
    default:
      break;
  }
}
