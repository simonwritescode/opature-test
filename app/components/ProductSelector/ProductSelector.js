import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Divider, Button } from 'react-native-elements'
import ImageCarousel from '../ImageCarousel/ImageCarousel'

import commonStyles from '../../styles/stylesheet'

import { selectProduct, deselectProduct } from '../../actions'

class ProductSelector extends Component {
  constructor (props) {
    super(props)

    this.products = [
      {key: 'bed 1', image: require('./images/bed.jpg'), cost: 200},
      {key: 'wardrobe 1', image: require('./images/wardrobe.jpg'), cost: 123},
      {key: 'table', image: require('./images/table.jpg'), cost: 79.95},
      {key: 'curtains 1', image: require('./images/curtains.jpg'), cost: 299.95},
      {key: 'curtains 2', image: require('./images/curtains2.jpg'), cost: 299.95},
      {key: 'curtains 3', image: require('./images/curtains3.jpg'), cost: 299.95},
      {key: 'dresser', image: require('./images/dresser.jpg'), cost: 299.95},
      {key: 'bed 2', image: require('./images/bed2.jpg'), cost: 455},
      {key: 'lamp 1', image: require('./images/lamp.png'), cost: 50}
    ]
  }

  shouldDisableBuyButton () {
    return this.props.selectedProducts.length === 0
  }

  get selectionCost () {
    if (!this.props.selectionCost) return '0.00'

    return parseFloat(Math.round(this.props.selectionCost * 100) / 100).toFixed(2)
  }

  get selectionCount () {
    if (!this.props.selectedProductCount) return 0

    return this.props.selectedProductCount
  }

  render () {
    return (
      <View>
        <Text style={commonStyles.sectionHeader}>Buy Products</Text>
        <ImageCarousel items={this.products} onSelection={selectProduct} onDeselection={deselectProduct} />
        <Divider style={commonStyles.divider} />
        <View style={commonStyles.selection}>
          <View style={commonStyles.selectionInfo}>
            <Text style={commonStyles.selectionCountText}>Product selections: {this.selectionCount}</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon type={'feather'} name={'shopping-cart'} color={'deepskyblue'} size={20} />
              <Text style={commonStyles.selectionPriceText}>&nbsp;£{this.selectionCost}</Text>
            </View>
          </View>
          <View style={commonStyles.selectionButtonBox}>
            <Button title='PROGRESS & BUY' disabled={this.shouldDisableBuyButton()} buttonStyle={commonStyles.selectionButton} textStyle={commonStyles.selectionButtonText} />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectionCost: state.productReducer.selectionCost,
    selectedProducts: state.productReducer.products,
    selectedProductCount: state.productReducer.selectedProductCount
  }
}

export default connect(mapStateToProps)(ProductSelector)
