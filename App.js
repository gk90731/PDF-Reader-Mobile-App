import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import PDFReader from 'rn-pdf-reader-js'
import NavigationBar from 'react-native-navbar';


const titleConfig = {
  title: 'PDF Reader',
  tintColor : 'white'
};
const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
  tintColor : 'white'
};
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,height:70}}>
      <View>
      <NavigationBar
        style={styles.navigation}
        title={titleConfig}
        rightButton={rightButtonConfig}
      />
      </View>
      <PDFReader
        source={{
          uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
        }}
      />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  navigation: {
    backgroundColor:"dodgerblue",
    paddingRight:25
  },
  statusBar: {
    
  }
});