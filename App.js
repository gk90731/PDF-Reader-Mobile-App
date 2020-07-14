import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import NavigationBar from 'react-native-navbar';

const titleConfig = {
  title: 'Hello, world',
};
const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    return ( 
      <View style={styles.container}>
      {/* <Text>Helo Worljgh</Text> */}
      <StatusBar style="auto" />
      <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
      />
      </View>
     );
  }
}
 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"dodgerblue"
  },
});
