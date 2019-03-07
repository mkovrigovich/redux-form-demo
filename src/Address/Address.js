import React, { PureComponent } from 'react';
import { Form, Field } from 'redux-form'
import DescriptionComponent from './Description'
import './Address.css'

class Address extends PureComponent {
  onSomeLoad = () => {
    const { onLoadApiData } = this.props
    onLoadApiData()
  }

  render() {
    const { handleSubmit, submitting, reset, pristine,
      languages, name, loadFormData } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <h1>Address Form</h1>
        <h2>{name}</h2>
        <div>{languages.map((v, key) => <span key={key}>[{v}]</span>)}</div>
        <div className="addressRow">
          <div className="addressLabel">City</div>
          <div className="addressField">
            <Field
              name="city"
              component="input"
              type="text"
              placeholder="ex: Brest"
            />
          </div>
        </div>

        <div className="addressRow">
          <div className="addressLabel">Street</div>
          <div className="addressField">
            <Field
              name="street"
              component="input"
              type="text"
              placeholder="ex: Sobornaya"
            />
          </div>
        </div>

        <div className="addressRow">
          <div className="addressLabel">Description</div>
          <div className="addressField">
            <Field
              name="description"
              component={DescriptionComponent}
            />
          </div>
        </div>

        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>

        <button type="button" onClick={this.onSomeLoad}>Load IP Address</button>
        <button type="button" onClick={loadFormData}>Load Form Data</button>
      </Form>
    )
  }
}

export default Address