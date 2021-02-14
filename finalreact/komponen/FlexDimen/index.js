import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDimen extends Component {
  render() {
    return (
      //Try removing the 'flex:1' on the parent View.
      //the parent will not have dimension, so the children can't expand.
      //what if you add 'height:300' instead of 'flex:1'?
      <View>
        <View style={{height: 200}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
          <View
            style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <View style={{flex: 1, flexDirection: 'column-reverse'}}>
          <View
            style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}
