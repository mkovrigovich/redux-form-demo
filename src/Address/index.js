import { compose } from 'redux'
import { connect } from 'react-redux'
import Address from './Address'
import { reduxForm, initialize } from 'redux-form'
import _ from 'lodash'

const ADDRESS_FORM = 'addressForm'

export default compose(
  connect(
    (state, ownProps) => ({
      initialValues: {
        city: '',
        street: '',
        description: ''
      },
      languages: _.get(state, 'languages'),
      name: _.get(state, 'name', ''),
    }),
    (dispatch, ownProps) => ({
      onLoadApiData: async (format = 'json') => {
        const response = await fetch(`https://api.ipify.org/?format=${format}`)
        const payload = await response.json()
        dispatch({
          type: 'SET_NAME',
          payload: payload.ip
        })
      },
      loadFormData: async (/* params */) => {
        dispatch(initialize(ADDRESS_FORM, {city: 'test', street: 'test', description: 'test' }))
      }
      // onSubmit: data => {}
    }),
  ),
  reduxForm({
    form: ADDRESS_FORM,
    // enableReinitialize: true,
    onSubmit: async (data, dispatch) => {
      try {
        // save data
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        const json = await response.json()
        // dispatch status message etc
        console.log(json)
      } catch (e) {
        console.log(e)
      }
    }
  })
)(Address)