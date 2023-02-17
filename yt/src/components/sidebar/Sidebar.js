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
import { useDispatch } from 'react-redux';
import {log_out} from '../../redux/action/auth_action';

const Sidebar = ({sidebar, handleToggleSidebar}) => {

   const dispatch = useDispatch()
   const logOutHandler = ()=> {
      dispatch(log_out())
   }
    return (
        <nav className={sidebar ? 'sidebar open' : 'sidebar'}
         onClick={()=>handleToggleSidebar(false)} >
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

         <li onClick={logOutHandler}>
            <MdLogout size={23} />
            <span>로그아웃</span>
         </li>

         <hr />
            
        </nav>
    )
}

export default Sidebar;