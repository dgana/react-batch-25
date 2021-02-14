/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class Source extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'List',
      headerStyle: {backgroundColor: '#fff'},
      headerTitleStyle: {textAlign: 'center', flex: 1},
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };

  renderItem = data => (
    <TouchableOpacity onPress={() => alert(data.item.name)} style={styles.list}>
      <View style={styles.listItem1}>
        <Text style={styles.lightText}>Name :</Text>
        <Text style={styles.lightText}>Email :</Text>
        <Text style={styles.lightText}>Company :</Text>
      </View>
      <View style={styles.listItem2}>
        <Text style={styles.lightText}>{data.item.name}</Text>
        <Text style={styles.lightText}>{data.item.email}</Text>
        <Text style={styles.lightText}>{data.item.company.name}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    flexDirection: 'row',
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
  listItem1: {
    flex: 1,
  },
  listItem2: {
    flex: 2,
  },
});
