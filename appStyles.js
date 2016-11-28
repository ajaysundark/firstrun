import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  navStyles: {
  	backgroundColor: 'mistyrose'
  },
  backgroundImage: {
		flex: 1,
		width: null,
		height: null
  },
  picsRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'mistyrose',
  },
  twoColumnsContainer: {
	flexDirection: 'row',
	borderRadius: 20,
	marginTop: 10
  },
  singlePic: {
    flex: 1,
    borderRadius: 20,
    marginTop: 20,
  },
  headerBlock: {
    backgroundColor: 'coral',
    marginBottom: 3,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333'
  },
  closeEntity: {
  	color: 'red',
  	textAlign: 'right',
  	fontSize: 30,
    fontWeight: '900'
  }

})

module.exports = styles