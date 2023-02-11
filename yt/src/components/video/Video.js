/* eslint-disable react/style-prop-object */
import React from 'react';
import './Video.scss';
import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className='video'>
            <div className='video__top'>
            <img src='https://i.ytimg.com/vi/hJYr4oLnu8w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiB7yEo_LYooD4Y9viObyf1YFh-Q' alt='' />
            <span>16:53</span>
            </div>

            <div className='video__title'>
            초콜릿은 그냥 사먹자🍫 | 부석순 | 초콜릿 공장 | 레전드 | 워크맨2
            </div>
            
            <div className='video__details'>
                <span>
                    <AiFillEye/> 94만회 • 
                </span>
            <span> 1일 전</span>
            </div>
            <div className='video__channel'>
                <img src= 'https://yt3.ggpht.com/ihi8LdmSNfcp96-gaHBE1Av3-PLotF9rOhUxTy_pY-CeHYCAkDzE1ktxfe4gbhtYR0CIYjUPba0=s68-c-k-c0x00ffffff-no-rj' alt=''/>
                <p>워크맨-Workman</p>
            </div>
        </div>
          
       
    )
}

export default Video;