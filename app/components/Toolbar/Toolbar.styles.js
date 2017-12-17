import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  toolbar: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarBackButton: {
    width: 70,
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  toolbarBackButtonText: {
    color: '#fff'
  },
  toolbarTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1
  },
  toolbarCartButton: {
    width: 70,
  }
})
