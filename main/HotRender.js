import React from 'react'
import { hot } from 'react-hot-loader'
import UI from '../components/UI/UI.js'
// import BeachHut from './BeachHut.js'

const HotRender = (props) => (
  <div>
    <UI 
      locale={props.locale}
      order={props.order}
      products={props.products}
    />
  </div>
)

export default hot(module)(HotRender)