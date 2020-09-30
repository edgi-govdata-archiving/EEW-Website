import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import styles from './EmailListForm.module.css';

const FormWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const AddressBox = styled.input`
  min-width: 200px;
  display: block;
  color: #2a2a2a;
`;

export default class EmailListForm extends React.Component {
  // Code adapted from: https://github.com/benjaminhoffman/gatsby-plugin-mailchimp/blob/master/examples/src/pages/index.js
  state = {
    email: null,
  };

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  };

  _handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        alert(msg);
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <h2>
          Together we can hold industry and environmental regulators
          accountable.
          <br />
          Join us.
        </h2>
        <FormWrapper>
          <AddressBox
            type="email"
            name="email"
            placeholder="Email address"
            onChange={this._handleChange}
          />
          <button className={styles.button} type="submit">
            Subscribe to our mailing list
          </button>
        </FormWrapper>
      </form>
    );
  }
}
