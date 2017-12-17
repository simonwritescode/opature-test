import React, { Component } from 'react'
import { Icon } from 'react-native-elements'
import {
  Text,
  View
} from 'react-native'

import styles from './Toolbar.styles'

export default class CartButton extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={styles.toolbarBackButton}>
        <Icon type={'ionicon'} name={'ios-arrow-back'} color={'white'} iconStyle={{top: 2}} />
        <Text style={styles.toolbarBackButtonText}>&nbsp;Back</Text>
      </View>
    )
  }
}
