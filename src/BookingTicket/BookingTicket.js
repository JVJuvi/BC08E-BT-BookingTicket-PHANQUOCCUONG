import React, { Component } from 'react';
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe';
import dataTicket from '../data/danhSachGhe.json';
import HangGhe from './HangGhe';


export default class BookingTicket extends Component {

    renderHangGhe = () => {
        return dataTicket.map((hangGhe,index) => {
            return (
                <div key={index} style={{marginLeft: '20px'}}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index} />
                </div>
            )
        })
    }

    render() {
        return (
           <div className="bookingMovie">
               <div className="bookingMovieBlack">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-8">
                            <h1 className="text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN</h1>
                            <p className="text-light mb-0">Màn hình</p>
                            <div className="d-flex justify-content-center">
                                <div className="screen"></div>
                            </div>
                            <div className="text-left text-light mt-4">
                                {this.renderHangGhe()}
                            </div>
                        </div>
                        <div className="col-4">
                            <h1 className="text-light">Danh sách ghế bạn chọn</h1>
                            <ThongTinDatGhe />
                        </div>
                    </div>
                </div>
               </div>
           </div>
        )
    }
}
