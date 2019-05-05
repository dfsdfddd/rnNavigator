import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

// export default class HomeScreen extends React.Component { 
//   render() { 
//     const {navigation} = this.props
//     return ( 
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
//         <Text>Home Screen</Text> 
//         <Button
//           title={'go to page1'}
//           onpress={()=>{
//             navigation.navigate('page1',{name:'laizipage'})
//           }}
//         ></Button>
//       </View> 
//     ); 
//   } 
// } 

export default class HomeScreen extends React.Component {
  //在这里定义每个页面的导航属性
  static navigationOptions = {
      title: 'Home',
      headerBackTitle:'返回哈哈',//设置返回此页面的返回按钮文案，有长度限制
  }

  render() {
      const {navigation} = this.props;
      return <View style={styles.container}>
          <Text style={styles.text}>欢迎来到HomePage</Text>
          <Button
              title="Go To Page1"
              onPress={() => {
                  navigation.navigate('Page1', {name: '动态777的'});
              }}
          />
          <Button
              title="Go To Page2"
              onPress={() => {
                  navigation.navigate('Page2');
              }}
          />
          <Button
              title="Go To Page3"
              onPress={() => {
                  navigation.navigate('Page3',{ name: 'Devio' });
              }}
          />
          <Button
              title="Go To Page4"
              onPress={() => {
                  navigation.navigate('Page4');
              }}
          />
          <Button
              title="Go To BottomTabNavigatorBar"
              onPress={() => {
                  navigation.navigate('Bottom');
              }}
          />
          <Button
              title="Go To TopTabNavigatorBar"
              onPress={() => {
                  navigation.navigate('Top');
              }}
          />
          <Button
              title="Go To DrawerNav"
              onPress={() => {
                  navigation.navigate('DrawerNav');
              }}
          />
      </View>
  }
}

const styles = StyleSheet.create({
  colorred: {
    color:'green'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});