import { StyleSheet } from 'react-native'

const itemSize = 80
const iconSize = 30

export default StyleSheet.create({
  selectedIcon: {
    position: 'absolute',
    top: -(iconSize / 2),
    left: itemSize / 2 - iconSize / 2,
    width: iconSize,
    height: iconSize,
    zIndex: 99999
  },
  list: {
    paddingTop: iconSize / 2,
    paddingBottom: 10
  },
  listItem: {
    marginRight: 5,
    marginLeft: 5
  },
  itemText: {
    textAlign: 'center',
    color: 'white'
  },
  infoText: {
    textAlign: 'center',
    color: 'deepskyblue',
    fontWeight: 'bold'
  },
  carouselItem: {
    height: itemSize,
    width: itemSize
  }
})
