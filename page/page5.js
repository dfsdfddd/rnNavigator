import React,{Component} from 'react';
import {Button,StyleSheet,Text,View} from 'react-native';

export default class page5 extends Component{
  render(){
    const {navigation} = this.props;
    return <View style={styles.container}>
      <Text>welcome to page5</Text>
      <Button
        title={'goback'}
        onPress={()=>{
          navigation.goBack();
        }}
      />
      <Button
        title={'跳转到page4'}
        onpress={()=>{
          navigation.navigate('page4')
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