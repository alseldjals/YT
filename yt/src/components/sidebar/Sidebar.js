import React from 'react';
import './Sidebar.scss';

import {
    MdSubscriptions,
    MdLogout,
    MdHistory,
    MdAllInbox,
    MdHomeFilled,
    MdChat,
 } from 'react-icons/md';

const Sidebar = () => {
    return (
        <nav className='border border-danger sidebar'>
            <li>
               <MdHomeFilled size={23} />
               <span>홈</span>
            </li>
            <li>
               <MdSubscriptions size={23} />
               <span>구독</span>
            </li>

        <li>
            <MdAllInbox size={23} />
            <span>보관함</span>
         </li>

         <li>
            <MdHistory size={23} />
            <span>기록</span>
         </li>

         <li>
            <MdChat size={23} />
            <span>의견 보내기</span>
         </li>

         <hr />

         <li>
            <MdLogout size={23} />
            <span>로그아웃</span>
         </li>

         <hr />
            
        </nav>
    )
}

export default Sidebar;