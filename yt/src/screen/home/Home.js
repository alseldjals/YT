import React, { useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Categories from '../../components/categories/Categories';
import { getPopularVideos } from '../../redux/action/video_action';
import Video from '../../components/video/Video';

const Home = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPopularVideos())
    },[dispatch])
    
    return (
        <Container>
            <Categories />
            <Row>
                {[...new Array(20)].map(() => (
                    <Col lg={3} md={4}>
                        <Video />
                    </Col>
                ))}

            </Row>
        </Container>
    )
}

export default Home;