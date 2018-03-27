import React from 'react'
import { hot } from 'react-hot-loader'
import UI from '../components/UI/UI.js'
import BeachHut from './BeachHut.js'

const HotRender = () => (
  <div>
    <UI 
		locale={ BeachHut.locale }
		order={ BeachHut.order }
		products={ BeachHut.products }
    />
  </div>
)

export default HotRender