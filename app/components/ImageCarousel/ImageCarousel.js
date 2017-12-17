import React, { Component } from 'react'
import { FlatList } from 'react-native'

import styles from './ImageCarousel.styles'
import CarouselItem from './CarouselItem'

export default class ImageCarousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: props.items
    }
    console.log('ImageCarousel props:')
    console.log(props)
  }

  renderItem = ({item}) => {
    return (<CarouselItem
              data={item}
              title={item.key}
              image={item.image}
              onSelection={this.props.onSelection}
              onDeselection={this.props.onDeselection}
            />)
  }

  render () {
    return (
      <FlatList style={styles.list} data={this.state.items} horizontal renderItem={this.renderItem} />
    )
  }
}
