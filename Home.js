import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';

import ViewContainer from './app/components/ViewContainer/ViewContainer'
import StatusBarBackground from './app/components/StatusBarBackground/StatusBarBackground'
import FitImage from 'react-native-fit-image';
import styles from './appStyles'

const entities = [
  {name: "ajay", id: 0, url:"http://lorempixel.com/200/200/city/ajay"},
  {name: "ambuj", id: 1, url:"http://lorempixel.com/200/200/city/ambuj"},
  {name: "niranjan", id: 2, url:"http://lorempixel.com/200/200/city/niranjan"},
  {name: "aditya", id: 3, url:"http://lorempixel.com/200/200/city/aditya"},
  {name: "patrick", id: 4, url:"http://lorempixel.com/200/200/city/patrick"}
]

class Home extends Component {

  constructor(props) {
    super (props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2 })
    this.state = {
      crowsDS: ds.cloneWithRows(entities)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: 'mistyrose'}}/>
        <View style={styles.headerBlock}>
          <Text style={styles.header}>{`WebCrows`}</Text>
        </View>
        <ListView
          style={{marginTop: 5, marginBottom: 5}}
          dataSource={this.state.crowsDS}
          renderRow={(entity) => { return this._renderRow(entity) }} />
      </ViewContainer>
    );
  }

  _renderRow(entity) {
    return (
      <TouchableOpacity onPress={(event) => this._navigateToThisEvent(entity)}>
        <FitImage 
          source={{uri: entity.url}} 
          style={styles.twoColumnsContainer}
          originalWidth={200} 
          originalHeight={200}
        />
      </TouchableOpacity>
    )
  }

  _navigateToThisEvent(entity) {
    this.props.navigator.push({
      rt: "Entity",
      element: entity,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    })
  }
}

module.exports = Home