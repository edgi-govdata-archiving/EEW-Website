import React from 'react';
import PropTypes from 'prop-types';
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

  constructor(props) {
    super(props);
    if (this.props.language && this.props.language == 'spanish') {
      this.message =
        'Juntos podemos hacer responsables a los reguladores de la industria y el medio ambiente.';
      this.join_us = 'Únete a nosotros.';
      this.subscribe =
        'Suscríbase a nuestra lista de email / correo electronico';
      this.email_msg = 'Email / correo electronico';
    } else {
      this.message =
        'Together we can hold industry and environmental regulators accountable.';
      this.join_us = 'Join us.';
      this.subscribe = 'Subscribe to our mailing list';
      this.email_msg = 'Email address';
    }
  }

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
          {this.message}
          <br />
          {this.join_us}
        </h2>
        <FormWrapper>
          <AddressBox
            aria-label={this.email_msg}
            type="email"
            name="email"
            placeholder={this.email_msg}
            onChange={this._handleChange}
          />
          <button className={styles.button} type="submit">
            {this.subscribe}
          </button>
        </FormWrapper>
      </form>
    );
  }
}

EmailListForm.propTypes = {
  language: PropTypes.string,
};
