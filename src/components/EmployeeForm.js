import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Nome"
            placeholder="Insira o seu nome."
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Telefone"
            placeholder="(11)11111-11111"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Domingo" value="Domingo" />
            <Picker.Item label="Segunda" value="Segunda" />
            <Picker.Item label="Terça" value="Terça" />
            <Picker.Item label="Quarta" value="Quarta" />
            <Picker.Item label="Quinta" value="Quinta" />
            <Picker.Item label="Sexta" value="Sexta" />
            <Picker.Item label="Sábado" value="Sábado" />
          </Picker>
        </CardSection>
      </View>
    )
  }
};


const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1,
    alignSelf: 'center',
  }
}

const mapStateToProps = (state) => {
  console.log(state.EmployeeForm);
  const { name, phone, shift } = state.EmployeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);