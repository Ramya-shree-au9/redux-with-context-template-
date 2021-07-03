
import * as globalActions from '../actions/global.actions';

import { IGlobalState } from '../states/global.state';
import { AppService } from '../../services/app.services';

const globalReducer = (
  state: IGlobalState,
  action: globalActions.Actions
): IGlobalState => {
  let prevState = { ...state },
    currentState: IGlobalState = {
      storeDetails: null,
   
    };

    console.log(prevState)
  switch (action.type) {
    case globalActions.Get_Shop_Details:
      currentState = {
        storeDetails: action.payload,
        
      };
      saveCurrentState(currentState);
      return logReduxState(state, currentState,action);
    
      
    default:
      return state;

    }
}
const saveCurrentState = (currentState: IGlobalState) => {
    AppService.Instance.saveReduxState(currentState);
  };

const logReduxState = (
  prevState: IGlobalState,
  currentState: IGlobalState,
  action: globalActions.Actions
) => {
  return currentState;
};


export default globalReducer;