import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Domingo' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Nome"
            placeholder="Insira o seu nome."
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value: value })}
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1,
    alignSelf: 'center',
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
