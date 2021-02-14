import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topHeader: {
    height: 40,
    width: '100%',
    backgroundColor: 'lightgrey',
  },
  b1: {
    backgroundColor: '#5588ee',
    flex: 1,
    width: '100%',
  },
  b2: {
    backgroundColor: 'blue',
    flex: 1,
    width: '100%',
  },
  box1: {
    backgroundColor: '#5588ee',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box2: {
    backgroundColor: 'blue',
    flex: 1,
    width: '100%',
  },
  description: {
    fontFamily: 'Avenir',
    fontSize: 30,
    marginBottom: 20,
  },
  innerBox: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  image: {
    marginTop: 30,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  heading: {
    fontSize: 16,
    marginLeft: 20,
    flex: 0.5,
    fontWeight: 'bold',
  },
  profile: {
    fontSize: 16,
    flex: 1,
    alignItems: 'flex-start',
  },
  menuItem: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});
