import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class EmailListForm extends React.Component {
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).
  state = {
    email: null
  }

  _handleChange = e => {
    console.log({
        [`${e.target.name}`]: e.target.value,
    })
    this.setState({
        [`${e.target.name}`]: e.target.value,
    })
  } 

  _handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`)

        if (result !== 'success') {
            throw msg
        }
        alert(msg)
      })
      .catch(err => {
          console.log('err', err)
          alert(err)
        })
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <h2>Together we can hold industry and environmental regulators accountable. Join us.
        </h2>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={ this._handleChange }
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    )
  }
}