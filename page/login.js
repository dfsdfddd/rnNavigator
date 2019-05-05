import React,{Component} from 'react';
import {Button,StyleSheet,Text,View} from 'react-native';

export default class login extends Component{
  render(){
    const {navigation} = this.props;
    return <View style={styles.container}>
      <Text style={styles.welcomes}>welcome to login</Text>
      <Button
        title={'Login'}
        onPress={()=>{
          navigation.navigate('App');
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