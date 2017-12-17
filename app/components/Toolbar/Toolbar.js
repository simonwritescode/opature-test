import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import BackButton from './BackButton'
import CartButton from './CartButton'

import styles from './Toolbar.styles'

export class Toolbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'Complete & Realise'
    }
  }

  render () {
    return (
      <View style={styles.toolbar}>
        <BackButton />
        <Text style={styles.toolbarTitle}>{this.state.title}</Text>
        <CartButton />
      </View>
    )
  }
}
