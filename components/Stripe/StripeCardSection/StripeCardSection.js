import React, { Component } from 'react'
import {CardElement} from 'react-stripe-elements';

class StripeCardSection extends React.Component {
  render() {
    return (
		<CardElement style={{base: {fontSize: '18px'}}} />
    );
  }
};

export default StripeCardSection;