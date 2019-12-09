import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helpers/Responsive';

import {ListItem} from 'react-native-elements';

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', width: wp(100), padding: 20}}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.backArrow}
              source={require('../../assets/images/backArrow.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={[styles.title, {fontSize: 16}]}>My Account</Text>
        </View>

        <Image
          style={styles.logo}
          source={require('../../assets/images/item59.png')}
        />
        <Text style={[styles.title, {marginTop: -10}]}>David Petersz</Text>
        <Text style={[styles.description, {fontSize: 16}]}>Wolf</Text>

        <View style={styles.header}>
          <View style={styles.subHeader}>
            <Text style={styles.title}>67</Text>
            <Text style={styles.description}>ORDERS</Text>
          </View>

          <View style={styles.subHeader}>
            <Text style={styles.title}>193,79</Text>
            <Text style={styles.description}>POINTS</Text>
          </View>

          <View style={styles.subHeader}>
            <Text style={styles.title}>11</Text>
            <Text style={styles.description}>CHEF RATING</Text>
          </View>
        </View>

        <Text style={styles.label}>Payment Method</Text>

        <View style={{width: wp(100)}}>
          <ListItem
            leftElement={
              <Image
                source={require('../../assets/icons/cardIcon.png')}
                style={{width: 40, height: 40, borderRadius: 5}}
                resizeMode="contain"
              />
            }
            rightElement={
              <TouchableOpacity onPress={() => null}>
                <Image
                  source={require('../../assets/icons/menuDots.png')}
                  style={{width: 20, height: 20, borderRadius: 5}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            }
            title={
              <View>
                <Text style={[styles.title, {fontSize: 16}]}>
                  Master Card Ending **12
                </Text>
                <Text style={[styles.description, {fontSize: 14}]}>
                  Added on Dec 12, 2016
                </Text>
              </View>
            }
            bottomDivider
          />

          <Text style={styles.label}>Rewards</Text>
          <View style={styles.rewardContainer}>
            <Image
              source={require('../../assets/icons/like.png')}
              style={[styles.rewardIcon, {width: 40, height: 40}]}
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/icons/badge.png')}
              style={styles.rewardIcon}
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/icons/medal.png')}
              style={styles.rewardIcon}
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/icons/crown.png')}
              style={styles.rewardIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: 80,
  },
  backArrow: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  title: {
    fontSize: 20,
    color: '#494949',
    fontFamily: 'CircularStd-Book',
  },
  logo: {
    width: wp(40),
    height: wp(40),
    marginTop: 20,
  },
  description: {
    color: '#c0c0c0',
    fontSize: 12,
    fontFamily: 'CircularStd-Book',
  },
  header: {
    width: wp(100),
    paddingVertical: 16,
    backgroundColor: '#f3f3f3',
    borderTopWidth: 0.5,
    borderBottomWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subHeader: {
    alignItems: 'center',
  },
  label: {
    color: '#494949',
    fontFamily: 'CircularStd-Book',
    alignSelf: 'flex-start',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 24,
  },
  rewardContainer: {
    width: wp(100),
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rewardIcon: {
    width: 50,
    height: 50,
  },
});
