import React, { Component } from "react";


import { AppService } from '../../services/app.services';
import { Context } from '../../redux/store.provider';
import * as globalActions from '../../redux/actions/global.actions';

export class LeftNav extends Component<any, any> {
  state:any = {
    popup: false,
    selectedCountryDialCode:'',
    phone:'',
    password:''
  };

  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    AppService.Instance.getStoreDetails('kibana')
      .then((response) => {
        if (response.status === 200) {
          const { dispatch } = this.context;
          console.log(response.data)
          dispatch(new globalActions.GetShopDetailsAction(response.data));
        }}
        )
        .catch((err) => {
          console.log(err)
        })
  }

  handleSubmit(e: any) {
    e.preventDefault(); 
    const { state } = this.context
    console.log(state)
    
    AppService.Instance.merchantLogin("+91",'9535940239','qwerty123')
      .then((response) => {
        if (response.status === 200){
          console.log('login successfully')
          console.log(response)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    
  }
  render() {
    // let popup = false;
    const { state } = this.context
    console.log(state)
    const ContryDial = () => {
      if (this.state.popup === false) {
        this.setState({ popup: true });
      } else this.setState({ popup: false });
    };

    
    return (
      <div className="left sidebar_body">
        <div className="icon">
          <img src={''} alt="logo" className="icon_urordr" />
        </div>
        <form className=" form formSpa" onSubmit={this.handleSubmit}>
          <div className="in_det ">
            <label className="meta inp_lab ">WHATSAPP NUMBER</label>
            <div className="phone_in">
              <input
                type="text"
                className="contry_code"
                placeholder="+91"
                onClick={ContryDial}
              />
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="inp_form"
                placeholder="9333333333"
              />
            </div>
          </div>
          <div className="in_det ">
            <label className="meta inp_lab ">PASSWORD</label>
            <input
              type="password"
              className="inp_form"
              placeholder="Enter your Password here"
            />
          </div>
          <div className="for_title">
            <span className="span_title">Forgot Password?</span>
          </div>
          <div className="for_title">
            <span className="span_title">
              By continuing you are agreeing with Urordr's <br />
              Term of Use and Privacy Policy
            </span>
          </div>
          <div className="for_title">
            <span className="span_title">
              Don't have an account yet?
              <br />
              <a href="/" className="titl_a">
                Sign up
              </a>
            </span>
          </div>
          <div className="for_but">
            <span className="span_title">
              <button type='submit' className="log_but"> Login</button>
            </span>
          </div>
        </form>
        {this.state.popup ? (
          <div className="popup_code">
            <span
              className="material-icons-outlined "
              id="cross_close"
              onClick={ContryDial}
            >
              close
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

LeftNav.contextType = Context
