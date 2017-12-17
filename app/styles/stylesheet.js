import { StyleSheet } from 'react-native'

var styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 15,
    paddingBottom: 10
  },
  background: {
    backgroundColor: '#222635'
  },
  divider: {
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15
  },
  projectInfoText: {
    marginLeft: 15,
    color: 'white',
    paddingTop: 5
  },
  projectInfoTextValue: {
    fontWeight: 'bold'
  },
  selectionInfo: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1
  },
  selectionCountText: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 2
  },
  selectionPriceText: {
    color: 'deepskyblue',
    fontWeight: 'bold',
    marginTop: 3
  },
  selectionButtonBox: {
    alignItems: 'flex-end'
  },
  selection: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  selectionButton: {
    borderRadius: 22,
    backgroundColor: 'deepskyblue',
    height: 38
  },
  selectionButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default styles
