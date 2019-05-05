import React,{Component} from 'react';
import {Button,StyleSheet,Text,View} from 'react-native';

export default class page4 extends Component{
  render(){
    const {navigation} = this.props;
    return <View style={styles.container}>
      <Text>welcome to page4</Text>
      <Button
        title={'goback'}
        onPress={()=>{
          navigation.goBack();
        }}
      />
      <Button
        title={'open drawer'}
        onPress={()=>{
          navigation.openDrawer();
        }}
      />
      <Button
        title={'close drawer'}
        onPress={()=>{
          navigation.closeDrawer();
        }}
      />
      <Button
        title={'toggle drawer'}
        onPress={()=>{
          navigation.toggleDrawer();
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