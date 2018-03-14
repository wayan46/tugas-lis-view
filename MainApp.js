/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
import React, { Component } from 'react';
import {
StyleSheet,
View,
ListView,
Image,
Text,
} from 'react-native';
import data from './sales.json';
const basketIcon = require('./images/Undiksha.png');

class MainApp extends Component {
constructor(props) {
super(props);
var ds = new ListView.DataSource({
rowHasChanged: (r1, r2) => r1 !== r2
});
this.state = {
dataSource: ds.cloneWithRows(data),
};
}
renderRow(record) {
// Defined on step 8
}
render() {
// Defined on step 7
}
}
export default MainApp;


render() {
return (
<View style={styles.mainContainer}>
<Text style={styles.title}>Sales</Text>
<ListView
dataSource={this.state.dataSource}
renderRow={this.renderRow}/>
</View>
);
}


renderRow(record) {
return (
<View style={styles.row}>
<View style={styles.iconContainer}>
<Image source={basketIcon} style={styles.icon} />
</View>
<View style={styles.info}>
<Text style={styles.items}>{record.items} Items</Text>
<Text style={styles.address}>{record.address}</Text>
</View>
<View style={styles.total}>
<Text style={styles.date}>{record.date}</Text>
<Text style={styles.price}>${record.total}</Text>
</View>
</View>
);
}



const styles = StyleSheet.create({
mainContainer: {
flex: 1,
backgroundColor: '#fff',
},
title: {
backgroundColor: '#0f1b29',
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
padding: 10,
paddingTop: 40,
textAlign: 'center',
},
row: {
borderColor: '#f1f1f1',
borderBottomWidth: 1,
flexDirection: 'row',
marginLeft: 10,
marginRight: 10,
paddingTop: 20,
paddingBottom: 20,
},
});



iconContainer: {
alignItems: 'center',
backgroundColor: '#feb401',
borderColor: '#feaf12',
borderRadius: 25,
borderWidth: 1,
justifyContent: 'center',
height: 50,
width: 50,
},
icon: {
tintColor: '#fff',
height: 22,
width: 22,
},


info: {
flex: 1,
paddingLeft: 25,
paddingRight: 25,
},
items: {
fontWeight: 'bold',
fontSize: 16,
marginBottom: 5,
},
address: {
color: '#ccc',
fontSize: 14,
},
total: {
width: 80,
},
date: {
fontSize: 12,
marginBottom: 5,
},
price: {
color: '#1cad61',
fontSize: 25,
fontWeight: 'bold',
},