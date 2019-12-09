import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helpers/Responsive';

import {ListItem} from 'react-native-elements';

const list = [
  {
    title: 'Chicken Meals',
    orderNo: 'Order : 12345-35',
    date: '2019-09-22 09:30:09',
    avatar: 'https://placeimg.com/200/200/any',
    status: 'Delivered',
  },
  {
    title: 'Kimchi Pickled Eggs',
    orderNo: 'Order : 12345-35',
    date: '2019-09-22 09:30:09',
    avatar: 'https://placeimg.com/200/200/tech',
    status: 'Delivered',
  },
  {
    title: 'Soye Ginger Souce',
    orderNo: 'Order : 12345-35',
    date: '2019-09-22 09:30:09',
    avatar: 'https://placeimg.com/200/200/nature',
    status: 'In Progress',
  },
  {
    title: 'Roasted Bok Choy',
    orderNo: 'Order : 12345-35',
    date: '2019-09-22 09:30:09',
    avatar: 'https://placeimg.com/200/200/any/grayscale',
    status: 'Delivered',
  },
  {
    title: 'Kimchi Pickled Eggs',
    orderNo: 'Order : 12345-35',
    date: '2019-09-22 09:30:09',
    avatar: 'https://placeimg.com/200/200/tech',
    status: 'In Progress',
  },
  {
    title: 'Chicken Meals',
    orderNo: 'Order : 12345-35',
    date: '2019-09-22 09:30:09',
    avatar: 'https://placeimg.com/200/200/any',
    status: 'Delivered',
  },
  {
    title: 'Kimchi Pickled Eggs',
    orderNo: 'Order : 12345-35',
    date: '2019-09-22 09:30:09',
    avatar: 'https://placeimg.com/200/200/tech',
    status: 'Delivered',
  },
  {
    title: 'Soye Ginger Souce',
    orderNo: 'Order : 12345-35',
    date: '2019-09-22 09:30:09',
    avatar: 'https://placeimg.com/200/200/nature',
    status: 'In Progress',
  },
  {
    title: 'Roasted Bok Choy',
    orderNo: 'Order : 12345-35',
    date: '2019-09-22 09:30:09',
    avatar: 'https://placeimg.com/200/200/any/grayscale',
    status: 'Delivered',
  },
];

export default class ArchiveList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        {list.map((item, i) => (
          <ListItem
            key={i}
            leftElement={
              <Image
                source={{uri: item.avatar}}
                style={{width: 70, height: 55, borderRadius: 5}}
              />
            }
            rightElement={
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('orderlist')}
                style={[
                  styles.btn,
                  {
                    backgroundColor:
                      item.status == 'Delivered' ? '#4bc076' : '#fff2af',
                  },
                ]}>
                <Text
                  style={[
                    styles.btnText,
                    {color: item.status == 'Delivered' ? '#fff' : '#caa700'},
                  ]}>
                  {item.status}
                </Text>
              </TouchableOpacity>
            }
            title={
              <View>
                <Text style={styles.description}>{item.orderNo}</Text>
                <Text style={styles.heading}>{item.title}</Text>
                <Text style={styles.description}>{item.date}</Text>
              </View>
            }
            bottomDivider
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: '#494949',
    fontFamily: 'CircularStd-Book',
    fontSize: 14,
  },
  description: {
    color: '#c0c0c0',
    fontFamily: 'CircularStd-Book',
    fontSize: 12,
  },
  btn: {
    width: wp(23),
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 20,
  },
  btnText: {
    fontSize: 12,
    fontFamily: 'CircularStd-Book',
  },
});
