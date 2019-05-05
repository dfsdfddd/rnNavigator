import React,{Component} from 'react';
import {Button,StyleSheet,Text,View, TextInput} from 'react-native';

export default class page3 extends Component{
  render(){
    const {navigation} = this.props;
    const {state, setParams} = navigation;
    const {params} = state;
    const showText = params&&params.mode === 'edit'?'正在编辑':'编辑完成'
    return <View style={styles.container}>
      <Text>welcome to page3</Text>
      <Text style={styles.welcomes}>{showText}</Text>
      <Button
        title={'goback'}
        onPress={()=>{
          navigation.goBack();
        }}
      />
      <Button
        title={'跳转到page4'}
        onpress={()=>{
          navigation.navigate('Page4')
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text)=>{
          setParams({
            title: text
          })
        }}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth:1,
    marginTop:10,
    borderColor:'yellow'

  },
  container:  {
    flex:1,
  },
  welcomes: {
    fontSize: 20,
    textAlign: 'center',
    margin:10
  },
  
})