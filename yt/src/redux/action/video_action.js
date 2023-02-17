import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actiontype"
import request from '../../api'
export const getPopularVideos = () => async dispatch => {
    try {

        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const {data} = request.get('/videos',{
            params: {
                part:" id, snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, topicDetails",
                chart: 'mostPopular',
                regionCode:'IN',
                maxResults: 20,
                pageToken: '',

            }
        })

        dispatch ({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
            }
        })
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload: error.message,
        })
    }
}