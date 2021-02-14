import createReducer from '../helpers/createReducer';
import {NavigationActions} from 'react-navigation';
import {AppNavigator} from '../../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut');
