import { IGlobalState } from './global.state';
import { AppService } from '../../services/app.services';

new AppService();

export let initialGlobalState: IGlobalState = AppService.Instance.getReduxState() || {
  storeDetails: null,
};