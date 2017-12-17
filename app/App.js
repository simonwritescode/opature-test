import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Divider, Button } from 'react-native-elements'

import reducers from './reducers'

import { Toolbar } from './components/Toolbar/Toolbar'
import ProductSelector from './components/ProductSelector/ProductSelector'
import ServicesSelector from './components/ServicesSelector/ServicesSelector'

import styles from './styles/stylesheet'

const store = createStore(reducers)

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <Provider store={store}>
        <View style={styles.background}>
          <Toolbar />
          <ScrollView style={styles.content} contentInset={{bottom: 50}}>
            <Text style={styles.projectInfoText}>Project Name: <Text style={styles.projectInfoTextValue}>Rose</Text></Text>
            <Text style={styles.projectInfoText}>Space Type: <Text style={styles.projectInfoTextValue}>Bedroom</Text></Text>
            <ProductSelector />
            <Divider style={styles.divider} />
            <ServicesSelector />
            <Divider style={styles.divider} />
            <Text style={styles.sectionHeader}>Realise The Project</Text>
            <Button title='MANAGE YOUR TASK & BUDGET' buttonStyle={styles.selectionButton} textStyle={styles.selectionButtonText} />
          </ScrollView>
        </View>
      </Provider>
    )
  }
}
