import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import styles from './ImageCarousel.styles'

/*
  Generic Image carousel

  @props:
    - onSelection(data)   function - must return an action to dispatch when an item is selected
    - onDeselection(data) function - must return action to dispatch when an item is deselected
    - image          - items image for display
    - title string   - name of the item
    - data  object   - hidden data for the item, this will be passed to 
                               onSelection and onDeselection actions
                               so selections may be handled in other components
*/
class CarouselItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: false
    }
    this.onSelection = this.props.onSelection
    this.onDeselection = this.props.onDeselection
    this.image = require('./images/tick.png')
  }

  onPress = () => {
    // toggle the components internal selected state
    // this is used purely to decide which select/deselect function to call but could be better implemented
    // by subscribing to the redux store, as the parent xxxxSelector components do
    this.setState(prevState => {
      return { selected: !prevState.selected }
    })
    if (!this.state.selected) {
      return this.props.dispatch(this.onSelection(this.props.data))
    } else {
      return this.props.dispatch(this.onDeselection(this.props.data))
    }
  }

  render () {
    return (
      <View style={styles.listItem}>
        { this.state.selected &&
          <Image style={styles.selectedIcon} source={this.image} />
        }
        <TouchableOpacity onPress={this.onPress} >
          <Image style={styles.carouselItem} source={this.props.image} />
          <Text style={styles.itemText}>{this.props.title}</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>info</Text>
      </View>
    )
  }
}

export default connect()(CarouselItem)
