import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router titleStyle={styles.navBarTitle}>
      <Scene key='root' hideNavBar>
        <Scene key='auth' initial>
          <Scene key='login' component={LoginForm} title='Login' initial />
        </Scene>

        <Scene key='main' >
          <Scene rightTitle="Add" onRight={() => { Actions.employeeCreate() }} key="employeeList" component={EmployeeList} title='Employees' rightButtonTextStyle={{ left: 2 }} initial />
          <Scene key="employeeCreate" component={EmployeeCreate} title='Create Employee' />
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