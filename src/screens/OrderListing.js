import {Container, Tab, TabHeading, Tabs, Text, View} from 'native-base';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import ArchiveList from '../components/OrderList';
import OrderList from '../components/OrderList';

export default class OrderListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    return (
      <Container>
        <View style={{height: 40, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.backArrowContainer}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.backArrow}
              source={require('../../assets/images/backArrow.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>I'm Blessed</Text>
        </View>
        <Tabs
          onChangeTab={() => this.setState({selected: !this.state.selected})}
          tabBarUnderlineStyle={{backgroundColor: '#4bc076', height: 2}}>
          <Tab
            activeTextStyle={{backgroundColor: '#4bc076'}}
            heading={
              <TabHeading style={{backgroundColor: '#f3f3f3', width: 100}}>
                <Text style={styles.tabText}>Active</Text>
              </TabHeading>
            }>
            <OrderList />
          </Tab>
          <Tab
            activeTextStyle={{backgroundColor: '#f3f3f3'}}
            heading={
              <TabHeading style={{backgroundColor: '#f3f3f3', width: 100}}>
                <Text style={styles.tabText}>Archive</Text>
              </TabHeading>
            }>
            <ArchiveList />
          </Tab>

          {/* Below tabs are for styling purpose */}
          {/* They are not being used in the functionality */}
          {/* <Tab
            disabled={true}
            heading={
              <TabHeading
                style={{backgroundColor: '#f3f3f3', width: 100}}></TabHeading>
            }></Tab>
          <Tab
            disabled={true}
            heading={
              <TabHeading
                style={{backgroundColor: '#f3f3f3', width: 100}}></TabHeading>
            }></Tab> */}
          {/* Above tabs are for styling purpose */}
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabText: {
    color: '#4bc076',
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  backArrowContainer: {
    marginLeft: 20,
    marginRight: 10,
  },
  headerText: {
    color: '#494949',
    fontFamily: 'CircularStd-Book',
    fontSize: 14,
  },
});
