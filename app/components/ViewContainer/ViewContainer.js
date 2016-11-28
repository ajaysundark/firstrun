'use strict'

import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

class ViewContainer extends Component {
	render() {
		return (
				<View style={styles.viewContainer}>
					{this.props.children}
				</View>
			)
	}	
}

module.exports = ViewContainer