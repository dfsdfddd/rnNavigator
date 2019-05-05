import React,{Component} from 'react';
import {Button,StyleSheet,Text,View} from 'react-native';

export default class page2 extends Component{
  static navigationOptions = {
    headerBackTitle:'返回page2',//设置返回此页面的返回按钮文案，有长度限制
}
  render(){
    const {navigation} = this.props;
    return <View style={styles.container}>
      <Text>welcome to page2</Text>
      <Button
        title={'goback'}
        onPress={()=>{
          console.log(navigation);
          navigation.goBack();
        }}
      />
      <Button
        title={'跳转到page4'}
        onPress={()=>{
          console.log(navigation);
          navigation.navigate('Page4')
        }}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container:  {
    flex:1,
  },
  welcomes: {
    fontSize: 20,
    textAlign: 'center',
    margin:10
  },
  
})