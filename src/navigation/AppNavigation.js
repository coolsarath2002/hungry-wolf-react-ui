import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AddMenu from '../screens/AddMenu';
import Home from '../screens/Home';
import {Icon} from 'react-native-elements';
import Login from '../screens/Login';
import MapSearch from '../screens/MapScrren';
import MyAccount from '../screens/MyAccount';
import OrderListing from '../screens/OrderListing';
import OrderReview from '../screens/OrderReview';
import OrderStatus from '../screens/OrderStatus';
import OrderSummary from '../screens/OrderSummary';
import React from 'react';
import SignUp from '../screens/Signup';
import SignupChef from '../screens/SignupChef';
import Welcome from '../screens/Welcome';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

const Tabs = createBottomTabNavigator({
  HomeTab: {
    screen: MyAccount,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'black',
        showLabel: false,
      },
      tabBarIcon: ({focused}) => (
        <Icon name="home" size={25} color={focused ? '#4bc076' : '#1e3149'} />
      ),
    },
  },
  SearchTab: {
    screen: MapSearch,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'black',
        showLabel: false,
      },
      tabBarIcon: ({focused}) => (
        <Icon name="search" size={25} color={focused ? '#4bc076' : '#1e3149'} />
      ),
    },
  },
  LoginTab: {
    screen: OrderStatus,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'black',
        showLabel: false,
      },
      tabBarIcon: ({focused}) => (
        <Icon
          name="restaurant"
          size={25}
          color={focused ? '#4bc076' : '#1e3149'}
        />
      ),
    },
  },
  ReviewTab: {
    screen: OrderReview,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'black',
        showLabel: false,
      },
      tabBarIcon: ({focused}) => (
        <Icon name="chat" size={25} color={focused ? '#4bc076' : '#1e3149'} />
      ),
    },
  },
  OrderTab: {
    screen: OrderSummary,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'black',
        showLabel: false,
      },
      tabBarIcon: ({focused}) => (
        <Icon name="menu" size={25} color={focused ? '#4bc076' : '#1e3149'} />
      ),
    },
  },
});

const Auth = createStackNavigator(
  {
    welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    signup: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    signupchef: {
      screen: SignupChef,
      navigationOptions: {
        header: null,
      },
    },
    orderlist: {
      screen: OrderListing,
      navigationOptions: {
        header: null,
      },
    },
    mapsearch: {
      screen: MapSearch,
      navigationOptions: {
        header: null,
      },
    },
    orderstatus: {
      screen: OrderStatus,
      navigationOptions: {
        header: null,
      },
    },
    review: {
      screen: OrderReview,
      navigationOptions: {
        header: null,
      },
    },
    addmenu: {
      screen: AddMenu,
      navigationOptions: {
        header: null,
      },
    },
    myaccount: {
      screen: Tabs,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'welcome',
  },
);

const App = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      App: App,
    },
    {initialRouteName: 'Auth'},
  ),
);
