import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {


        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'>Sponsor</div>
                <div className='sidebar__title'>Important</div>
		<div className='sidebar__link'>
		<a href='/about'>Điểm Hẹn Bình Dương</a>
		<a href='/cogaituoi25'>Giới thiệu về các Quán Ăn Uống Bình Dương</a>
		<a href='http://diemhenbinhduong.com'>Những địa điểm hẹn hò tại Bình Dương</a>
		<a href='/payments'>How to pay? Thanh toán</a>
		</div>
            </div>
        );
    }
}

export default SideBar
