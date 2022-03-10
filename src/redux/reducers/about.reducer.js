const about = (state = '', action) => {

  if (action.type === 'SET_ABOUT_INFO') {
    return action.payload;
  }

  return state;
}

export default about;