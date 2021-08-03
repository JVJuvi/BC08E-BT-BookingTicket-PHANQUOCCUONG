import React, { Component } from 'react';
import {connect} from 'react-redux';
import { datGheAction } from '../redux/actions/BookingTicketAction';

class HangGhe extends Component {


    renderSoGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
            // ghế đã đăt
            let cssDaDat = '';
            let disabled = false;
            if(ghe.daDat){
                cssDaDat = 'gheDuocChon'
                disabled = true;
            }

            //ghế đang đặt
            let cssDangDat = '';
            let indexDangDat = this.props.mangGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if(indexDangDat !== -1){
                cssDaDat = 'gheDangChon';
            }
            return (
                <button disabled={disabled} className={`ghe ${cssDaDat} ${cssDangDat}`} onClick={()=>{
                    this.props.dispatch(datGheAction(ghe))
                }}>{ghe.soGhe}</button>
            )
        })
    }


    renderHang = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
            return (
                <button key={index} className="rowNumber">{ghe.soGhe}</button>
            )
        })
    }

    renderHangGhe = () => {
        if(this.props.soHangGhe === 0){
            return (
                <div style={{marginLeft: '13px'}}>
                    {this.props.hangGhe.hang} {this.renderHang()}
                </div>
            )
        }else{
            return (
                <div>
                    {this.props.hangGhe.hang} {this.renderSoGhe()}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="mt-4">
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        mangGheDangDat: state.BookingTicketReducer.mangGheDangDat
    }
}

export default connect(mapStateToProp)(HangGhe)
