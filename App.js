import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import { Constants } from 'expo';
import NavigationBar from 'react-native-navbar';
// import PDFView from 'react-native-view-pdf/lib/index';
// import PDFView from 'react-native-view-pdf';
// import Pdf from 'react-native-pdf';
// import PDFReader from 'rn-pdf-reader-js'


const titleConfig = {
  title: 'PDF Reader',
  tintColor : 'white'
};
const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
  tintColor : 'white'
};
const resources = {
  file: Platform.OS === 'ios' ? 'test-pdf.pdf' : '/sdcard/Download/test-pdf.pdf',
  url: 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    let yourPDFURI = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true};
    const resourceType = 'url';
    return ( 
    <View style={{flex:1,paddingTop: 25}}>
        <WebView
          bounces={false}
          scrollEnabled={false} 
          source={{ uri: 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf' }} />
      </View>
     );
  }
}
 
export default App;

const styles = StyleSheet.create({
  navigation: {
    backgroundColor:"dodgerblue",
    paddingRight:25,
    marginTop:20
  },
  statusBar: {
    
  }
});
