import axios,{AxiosResponse} from 'axios'
import { IGlobalState } from '../redux/states/global.state';


export class AppService{
    private static _instance: AppService;
    private url = process.env.REACT_APP_API_BASE_URI;

    constructor() {
      if (AppService._instance) {
        return AppService._instance;
      } else {
        AppService._instance = this;
      }
    }

    public static get Instance() {
        return this._instance;
      }

      saveReduxState(state: IGlobalState) {
        localStorage.setItem('rState', JSON.stringify(state));
      }
    
      getReduxState() {
        let rState = localStorage.getItem('rState');
    
        if (rState) return JSON.parse(rState);
        else return null;
      }


    merchantLogin(countryDialCode:string,phone:string,password:string): Promise<AxiosResponse> {
        return axios.post(
          `${this.url}/api/merchants/login`,
          {
            countryDialCode,
            phone,
            password,
            
          }
        );
      }

      getStoreDetails(storeId: string): Promise<AxiosResponse> {
        return axios.get(`${this.url}/api/stores/${storeId}`);
      }

      
}