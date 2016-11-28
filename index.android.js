/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet, 
  Navigator,
  Text
} from 'react-native'

import Home from './Home'
import Entity from './Entity'
import styles from './appStyles'

export default class firstrun extends Component {

  _renderScene(route, navigator) {
    var globalNavProps  = { navigator }

    switch(route.rt) {
      case "Home":
        return (
            <Home {...globalNavProps} />
          )

      case "Entity":
        return (
            <Entity 
              {...globalNavProps} 
              element={route.element}
            />
          )

      case "Temp":
        return (
            <Text>{`a temp route..`}</Text>
          )

      default: 
        return (
            <Home {...globalNavProps} />
          )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{rt: "Home"}}
        ref="appNavigator"
        style={styles.navStyles} 
        renderScene={ this._renderScene }
        configureScene={ (route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight,
          gestures: route.gestures
        }) }
      />
    );
  }
}

AppRegistry.registerComponent('firstrun', () => firstrun);
