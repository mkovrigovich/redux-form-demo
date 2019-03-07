export const LOAD_ADDRESS = 'LOAD_ADDRESS'

export const address = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ADDRESS:
      return {
        data: action.data
      }
    default:
      return state
  }
}

export const loadAddressData = data => ({ type: LOAD_ADDRESS, data })

export default address