const initialState = {
  pageType: 'atcovet',
  domain: null,
  currentUrl: '',
}

const actionTypes = {
  PROJECT_DATA: 'PROJECT_DATA',
}

const project = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.PROJECT_DATA:
      return Object.assign({}, state, {
        pageType: action.payload.pageType,
        domain: action.payload.domain,
        currentUrl: action.payload.currentUrl,
      })
    default:
      return state
  }
}

export default project