import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Divider, Button } from 'react-native-elements'
import ImageCarousel from '../ImageCarousel/ImageCarousel'

import commonStyles from '../../styles/stylesheet'

import { selectService, deselectService } from '../../actions'

class ServicesSelector extends Component {
  constructor (props) {
    super(props)

    this.services = [
      {key: 'Home\nComfort', image: require('./images/homecomfort.jpg')},
      {key: 'Ironhead', image: require('./images/ironhead.jpg')},
      {key: 'Switch', image: require('./images/switch.jpg')},
      {key: 'HomeBase', image: require('./images/homebase.jpg')},
      {key: 'Three', image: require('./images/three.jpg')}
    ]
  }

  shouldDisableBuyButton () {
    return this.props.selectedServices.length === 0
  }

  get selectionCount () {
    if (!this.props.selectedServiceCount) return 0

    return this.props.selectedServiceCount
  }

  render () {
    return (
      <View>
        <Text style={commonStyles.sectionHeader}>Buy Services</Text>
        <ImageCarousel items={this.services} onSelection={selectService} onDeselection={deselectService} />
        <Divider style={commonStyles.divider} />
        <View style={commonStyles.selection}>
          <View style={commonStyles.selectionInfo}>
            <Text style={commonStyles.selectionCountText}>Services selected: {this.selectionCount}</Text>
            <Text style={commonStyles.selectionCountText}>Quotes received: 0</Text>
          </View>
          <View style={commonStyles.selectionButtonBox}>
            <Button title='GET QUOTATIONS' disabled={this.shouldDisableBuyButton()} buttonStyle={commonStyles.selectionButton} textStyle={commonStyles.selectionButtonText} />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.servicesReducer.services)
  return {
    selectedServiceCount: state.servicesReducer.services.length,
    selectedServices: state.servicesReducer.services
  }
}

export default connect(mapStateToProps)(ServicesSelector)
