import { createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator,createDrawerNavigator,DrawerItems,createSwitchNavigator } from "react-navigation"; 
import React from 'react'; // 这里必须引入react， 因为 react-native 依赖 React
import {Button,Platform,ScrollView,SafeAreaView} from 'react-native';
import HomeScreen from '../page/homePage';
import Page1 from '../page/page1';
import page2 from '../page/page2';
import page3 from '../page/page3';
import page4 from '../page/page4';
import page5 from '../page/page5';
import login from '../page/login';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Page1: {
    screen: Page1,
  },
})
const AuthStack = createStackNavigator({
  Login: {
    screen: login
  },
})
export default createSwitchNavigator({
  Auth:AuthStack,
  App:AppStack
},{
  initialRouteName:'Auth'
})

const DrawerNav = createDrawerNavigator({
  Page4: {
    screen: page4,
    navigationOptions:{
      drawerLabel:'Page4',
      drawerIcon:({tintColor})=>{
        return <MaterialIcons
          name={'drafts'}
          size={24}
          style={{color:tintColor}}
        />
      }
    }
  },
  Page5: {
    screen: page5,
    navigationOptions:{
      drawerLabel:'Page5',
      drawerIcon:({tintColor})=>{
        return <MaterialIcons
          name={'move-to-inbox'}
          size={24}
          style={{color:tintColor}}
        />
      }
    }
  }
},{
  initialRouteName:'Page4',
  contentOptions:{
    activeTintColor:'#e91e63'
  },
  contentComponent:(props)=>(
    <ScrollView
      style={{backgroundColor:'#789', flex:1}}
    >
      <SafeAreaView 
        forceInset={{top:'always', horizontal:'never'}}
      >
        <DrawerItems {...props}/>
      </SafeAreaView>
    </ScrollView>
  )


})

const AppMateriaTopNavigator = createMaterialTopTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel:'vue'
    }
  },
  Page2: {
    screen: page2,
    navigationOptions: {
      tabBarLabel:'react'
    }
  },
  Page3: {
    screen: page3,
    navigationOptions: {
      tabBarLabel:'ios'
    }
  },
  Page4: {
    screen: page4,
    navigationOptions: {
      tabBarLabel:'android'
    }
  },
  Page5: {
    screen: page5,
    navigationOptions: {
      tabBarLabel:'react-native'
    }
  }
},{
  tabBarOptions:{
    tabStyle:{
      minWidth: 50
    },
    upperCaseLabel: false,//是否为大写，默认为true
    scrollEnabled:true,//是否支持选项卡滚动，默认false
    indicatorStyle:{// 设置标签指示器的样式
      height:2,
      backgroundColor:'green'
    },
    labelStyle:{//设置文字样式
      fontSize:13,
      marginTop:6,
      marginBottom:6
    }
  }
})

const AppBottomTabNavigator = createBottomTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel:'首页',
      tabBarIcon:({tintColor, focused})=>(
        <Icon
          name={'ios-home'}
          size={26}
          style={{color:tintColor}}
        />
      )
    }
  },
  Page2: {
    screen: page2,
    navigationOptions: {
      tabBarLabel:'菜单',
      tabBarIcon:({tintColor, focused})=>(
        <Icon
          name={'ios-add'}
          size={26}
          style={{color:tintColor}}
        />
      )
    }
  },
  Page3: {
    screen: page3,
    navigationOptions: {
      tabBarLabel:'地址',
      tabBarIcon:({tintColor, focused})=>(
        <Icon
          name={'ios-alert'}
          size={26}
          style={{color:tintColor}}
        />
      )
    }
  },
  Page4: {
    screen: page4,
    navigationOptions: {
      tabBarLabel:'我的',
      tabBarIcon:({tintColor, focused})=>(
        <Icon
          name={'ios-apps'}
          size={26}
          style={{color:tintColor}}
        />
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' :'#fff'
  }
})

export const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.name}页面名`//动态设置navigationOptions
    })
  },
  Page2: {
    screen: page2,
    navigationOptions:{
      title: 'this is page2'
    }
  },
  Page3: {
    screen: page3,
    navigationOptions: (props) => {//在这里定义每个页面的导航属性，动态配置
        const {navigation} = props;
        const {state, setParams} = navigation;
        const {params} = state;
        return {
            title: params.title ? params.title : 'This is Page3',
            headerRight: (
                <Button
                    title={params.mode === 'edit' ? '保存' : '编辑'}
                    onPress={() =>
                        setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
                />
            ),
        }
    }
  },
  Page4: {
    screen: page4,
    navigationOptions:{
      title:'this is page4'
    }
  },
  Bottom:{
    screen: AppBottomTabNavigator,
    navigationOptions:{
      title:'BottomTabNavigator'
    }
  },
  Top:{
    screen: AppMateriaTopNavigator,
    navigationOptions:{
      title:'TopTabNavigator'
    }
  },
  DrawerNav:{
    screen:DrawerNav,
    navigationOptions:{
      title:'DrawerNav'
    }
  }
});