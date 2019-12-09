import {Divider, Icon} from 'react-native-elements';
import {
  Picker,
  ScrollView,
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

import DateTimePicker from 'react-native-datepicker';
import OrderSummaryItem from '../components/OrderSummaryItem';

const data = [{}, {}];

export default class AddMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date_time: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.label, {alignSelf: 'center', paddingTop: 8}]}>
          Add/Edit Menu
        </Text>

        <View style={styles.header}>
          <Text style={styles.title}>Menu Item</Text>
          <Icon name="add" color="#4bc076" size={28} onPress={() => null} />
        </View>

        <View style={{flex: 1, padding: 16}}>
          <ScrollView>
            {data.map((item, index) => (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.label1}>Chicken 65 (6 pieces)</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 30,
                  }}>
                  <Icon
                    name="edit"
                    color="#4bc076"
                    size={20}
                    onPress={() => null}
                  />
                  <Icon
                    name="close"
                    color="red"
                    containerStyle={{marginLeft: 10}}
                    size={26}
                    onPress={() => null}
                  />
                </View>
              </View>
            ))}

            <Text style={[styles.label2, {marginTop: 30}]}>Dish Name</Text>
            <TextInput style={styles.input} placeholder={'write here...'} />

            <Text style={[styles.label2, {marginTop: 10}]}>Dish Type</Text>
            <View style={styles.input}>
              <Picker>
                <Picker.Item label="Chinese" value="java" />
                <Picker.Item label="Sea Foods" value="js" />
              </Picker>
            </View>

            <Text style={[styles.label2, {marginTop: 10}]}>Measurement</Text>
            <TextInput style={styles.input1} placeholder={'write here...'} />

            <Text style={[styles.label2, {marginTop: 10}]}>
              Measurement Type
            </Text>
            <View style={styles.saveItemContainer}>
              <View style={styles.input1}>
                <Picker>
                  <Picker.Item label="Chinese" value="java" />
                  <Picker.Item label="Sea Foods" value="js" />
                </Picker>
              </View>
              <TouchableOpacity onPress={() => null} style={styles.btn}>
                <Text style={styles.btnText}>Save Item</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.label1, {marginTop: 20}]}>
              Meals Rates & Timelines
            </Text>
            <Divider />

            <Text style={[styles.label2, {marginTop: 10}]}>
              Order Delivery Time
            </Text>
            <DateTimePicker
              style={styles.input1}
              date={this.state.date_time}
              customStyles={{borderWidth: 0}}
              mode="datetime"
              placeholder="Tap here"
              iconComponent={
                <Icon
                  name="calendar-clock"
                  color="gray"
                  size={20}
                  type="material-community"
                  iconStyle={{marginHorizontal: 5}}
                />
              }
              androidMode="spinner"
              placeholderTextColor={'rgb(217,217,217)'}
              // format="h:mm a DD-MM-YYYY"
              is24Hour={false}
              TouchableComponent={TouchableOpacity}
              minDate="2019-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={date => {
                this.setState({date_time: date});
              }}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderWidth: 0,
                  height: 40,
                },
              }}
            />

            <Text style={[styles.label2, {marginTop: 10}]}>Place Order By</Text>
            <DateTimePicker
              style={styles.input1}
              date={this.state.date_time}
              customStyles={{borderWidth: 0}}
              mode="datetime"
              placeholder="Tap here"
              iconComponent={
                <Icon
                  name="calendar-clock"
                  color="gray"
                  size={20}
                  type="material-community"
                  iconStyle={{marginHorizontal: 5}}
                />
              }
              androidMode="spinner"
              placeholderTextColor={'rgb(217,217,217)'}
              // format="h:mm a DD-MM-YYYY"
              is24Hour={false}
              TouchableComponent={TouchableOpacity}
              minDate="2019-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={date => {
                this.setState({date_time: date});
              }}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderWidth: 0,
                  height: 40,
                },
              }}
            />

            <Text style={[styles.label2, {marginTop: 20}]}>Available Meal</Text>
            <TextInput style={styles.input1} placeholder={'write here...'} />

            <Text style={[styles.label2, {marginTop: 20}]}>Rate Per Meal</Text>
            <TextInput style={styles.input1} placeholder={'write here...'} />

            <Text style={[styles.label2, {marginTop: 10}]}>Tags</Text>
            <TextInput style={styles.input} placeholder={'write here...'} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity onPress={() => null} style={styles.btn}>
                <Text style={styles.btnText}>Add Meal</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => null} style={styles.btn}>
                <Text style={styles.btnText}>Cancel Meal</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    width: wp(100),
    height: 45,
    backgroundColor: '#f3f3f3',
    borderTopWidth: 0.5,
    borderBottomWidth: 1,
    borderColor: '#999',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#4bc076',
    fontFamily: 'CircularStd-Book',
  },
  input: {
    width: wp(90),
    height: 40,
    borderWidth: 1,
    borderColor: '#494949',
    alignSelf: 'center',
    marginTop: 4,
  },
  input1: {
    height: 40,
    borderWidth: 1,
    borderColor: '#494949',
    marginTop: 4,
    width: wp(45),
    alignSelf: 'flex-start',
  },
  label: {
    color: '#494949',
    fontFamily: 'CircularStd-Book',
    paddingBottom: 10,
    fontSize: 22,
  },
  label1: {
    fontSize: 18,
    color: '#494949',
    fontFamily: 'CircularStd-Book',
    paddingBottom: 4,
  },
  label2: {
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    color: '#494949',
  },
  btn: {
    width: wp(40),
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#c7e9c7',
    marginTop: 4,
  },
  btnText: {
    fontSize: 14,
    fontFamily: 'CircularStd-Book',
    color: '#5fc05f',
  },
  saveItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
