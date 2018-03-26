import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router titleStyle={styles.navBarTitle}>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Login' initial />
        </Scene>

        <Scene key='main'>
          <Scene rightTitle="Add" onRight={() => { console.log('Button') }} key="employeeList" component={EmployeeList} title='Employees' rightButtonTextStyle={{ paddingRight: 1, left: 2 }} />
        </Scene>
      </Scene>
    </Router>
  )
};

const styles = {
  navBarTitle: {
    alignSelf: 'center',
    textAlign: 'center',
  }
}

export default RouterComponent;