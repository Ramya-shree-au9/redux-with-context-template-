import { IStoreDetails } from '../states/store.state';

export const Get_Shop_Details = '[GLOBAL] Get Store Shop Details';


export class GetShopDetailsAction {
    readonly type: string = Get_Shop_Details;
    readonly payload: IStoreDetails;
  
    
    constructor(payload: IStoreDetails) {
      this.payload = payload;
    }
  }

export type Actions = GetShopDetailsAction