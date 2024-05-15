import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const setCurSongId = (songId) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    songId
})

export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag
})

export const playAlbum = (flag) => ({
    type: actionTypes.SET_ALBUM,
    flag
})
export const setPlaylist = (songs) => ({
    type: actionTypes.PLAYLIST,
    songs
})

export const loading = (flag) => ({
    type: actionTypes.LOADING,
    flag
})
// export const fetchDetailPlaylist = (playlistId) => async (dispatch) => {
//     try {
//         const response = await apis.apiGetDetailPlaylist(playlistId)
//         if (response?.data.err === 0) {
//             dispatch({
//                 type: actionTypes.PLAYLIST,
//                 songs: response.data?.data?.songs?.items
//             })
            
//         }
//     } catch (error) {
//         dispatch({
//             type: actionTypes.PLAYLIST,
//             songs: null
//         })
//     }

// }

