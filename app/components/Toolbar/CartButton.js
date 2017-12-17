import React, { Component } from 'react'
import { Badge, Icon } from 'react-native-elements'
import { View } from 'react-native'
import { connect } from 'react-redux'

import styles from './Toolbar.styles'

class CartButton extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  get selectedProductCount () {
    if (!this.props.selectedProductCount) return 0

    return this.props.selectedProductCount
  }

  render () {
    return (
      <View style={styles.toolbarCartButton}>
        <Icon type={'feather'} name={'shopping-cart'} color={'white'} />
        {this.selectedProductCount > 0 &&
          <Badge containerStyle={{width: 20, position: 'absolute', right: 10, top: -35, backgroundColor: 'deepskyblue'}} textStyle={{fontWeight: 'bold'}} value={this.selectedProductCount} />
        }
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedProductCount: state.productReducer.selectedProductCount
  }
}

export default connect(mapStateToProps)(CartButton)
