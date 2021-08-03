import { DAT_GHE, HUY_GHE } from '../types/BookingTicketType';

const stateDefault = {
    mangGheDangDat: [
        
    ]
}

const BookingTicketReducer = (state = stateDefault, action) => {
    switch(action.type){
        case DAT_GHE: {
            let mangCapNhat = [...state.mangGheDangDat];
            let index = mangCapNhat.findIndex(ghe => ghe.soGhe === action.ghe.soGhe);
            if(index !== -1){
                mangCapNhat.splice(index,1);
            }else{
                mangCapNhat.push(action.ghe);
            }
            state.mangGheDangDat = mangCapNhat;
            return {...state};
        }
        case HUY_GHE: {
            let mangCapNhat = [...state.mangGheDangDat];
            let index = mangCapNhat.findIndex(ghe => ghe.soGhe === action.soGhe);
            if(index !== -1){
                mangCapNhat.splice(index,1);
            }
            state.mangGheDangDat = mangCapNhat;
            return {...state};
        }
        default: return {...state};
    }
}
export default BookingTicketReducer;