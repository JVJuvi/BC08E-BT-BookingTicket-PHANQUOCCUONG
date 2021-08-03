import React, { Component } from 'react';
import {connect} from 'react-redux';
import { huyGheAction } from '../redux/actions/BookingTicketAction';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                 <div className="text-left">
                    <button className="gheDuocChon"></button> <span className="text-light" style={{fontSize: '20px'}}>Ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon"></button> <span className="text-light" style={{fontSize: '20px'}}>Ghế đang chọn</span>
                    <br />
                    <button className="ghe ml-0"></button> <span className="text-light" style={{fontSize: '20px'}}>Ghế chưa đặt</span>
                </div>
                <div>
                    <table className="table" border="2">
                        <thead>
                            <tr className="text-light" style={{fontSize: '24px'}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.mangGheDangDat.map(((ghe,index)=>{
                                return (
                                    <tr key={index} className="text-info">
                                        <td>{ghe.soGhe}</td>
                                        <td>{ghe.gia}</td>
                                        <td><button className="btn btn-danger" onClick={()=>{
                                            this.props.dispatch(huyGheAction(ghe.soGhe))
                                        }}>Huỷ</button></td>
                                    </tr>
                                )
                            }))}
                        </tbody>
                        <tfoot>
                            <tr className="text-info">
                                <td>Tổng tiền</td>
                                <td>
                                    {this.props.mangGheDangDat.reduce((tongTien,ghe,index) => {
                                        return tongTien += ghe.gia;
                                    },0)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangGheDangDat: state.BookingTicketReducer.mangGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe)
