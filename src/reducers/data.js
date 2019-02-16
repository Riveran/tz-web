const initialState = {
  hello: 'neuro'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'neuro':
      return { ...state, ...payload }

    default:
      return state
  }
}
