import React from 'react';
import {Button,StyleSheet,Text,View} from 'react-native';

export default class Page1 extends React.Component{
  render(){
    const {navigation} = this.props;
   return <View style={styles.container}>
      <Text>welcome to Page1</Text>
      <Button
        title={'goback'}
        onPress={()=>{
          navigation.goBack();
        }}
      ></Button>
      <Button
        title={'logout'}
        onPress={()=>{
          navigation.navigate('Auth');
        }}
      ></Button>
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