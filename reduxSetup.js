const INITIAL_STATE = { face: "" }
const faceChanger = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HAPPY':
      return { ...state, face: "(✿◠‿◠)" }
    case 'SAD':
      return { ...state, face: "o(╥﹏╥)o" }
    case 'ANGRY':
      return { ...state, face: "ಠ益ಠ" }
    case 'CONFUSED':
      return { ...state, face: "(@_@)" }
    default:
      return state
  }
}

const store = Redux.createStore(faceChanger);