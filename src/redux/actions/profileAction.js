import { GLOBALTYPES, DeleteData } from "./globalTypes";
import { imageUpload } from '../../utils/imageUpload'
import { getDataAPI, patchDataAPI } from "../../utils/fetchData";

export const PROFILE_TYPES = {
    LOADING: "LOADING",
    GET_USER: 'GET_USER',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW'
}
export const getProfileUsers = ({ users, id, auth }) => async (dispatch) => {
    if (users.every(user => user._id !== id))
        try {
            dispatch({ type: PROFILE_TYPES.LOADING, payload: true })
            const res = await getDataAPI(`/user/${id}`, auth.token)
            dispatch({
                type: PROFILE_TYPES.GET_USER,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: { error: err.response.data.msg }
            })
        }
}
export const updateProfileUser = ({ userData, avatar, auth }) => async (dispatch) => {
    if (!userData.fullname)
        return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Please add your full name." } })
    if (userData.fullname.length > 25)
        return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Your full name too long." } })
    try {
        let media;
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

        if (avatar) media = await imageUpload([avatar])
        console.log(media)
        const res = await patchDataAPI("user", {
            ...userData,
            avatar: avatar ? media[0].url : auth.user.avatar
        }, auth.token)
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                ...auth,
                user: {
                    ...auth.user, ...userData,
                    avatar: avatar ? media[0].url : auth.user.avatar,
                }
            }
        })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
    console.log({ userData, avatar })
}
export const follow = ({ users, user, auth }) => async (dispatch) => {
    let newUser;
    if (users.every(item => item._id !== user._id)) {
        newUser = { ...user, followers: [...user.followers, auth.user] }
    } else {
        users.forEach(item => {
            if (item._id === user._id) {
                newUser = { ...item, followers: [...item.followers, auth.user] }
            }
        })
    }
    dispatch({ type: PROFILE_TYPES.FOLLOW, payload: newUser })
    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: { ...auth.user, following: [...auth.user.following, newUser] }
        }
    })
    try {
        const res = await patchDataAPI(`user/${user._id}/follow`, null, auth.token)
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}
export const unfollow = ({ users, user, auth }) => async (dispatch) => {
    let newUser;
    if (users.every(item => item._id !== user._id)) {
        newUser = { ...user, followers: [...user.followers, auth.user] }
    } else {
        users.forEach(item => {
            if (item._id === user._id) {
                newUser = { ...item, followers: [...item.followers, auth.user] }
            }
        })
    }
    dispatch({ type: PROFILE_TYPES.UNFOLLOW, payload: newUser })
    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: {
                ...auth.user,
                following: DeleteData(auth.user.following, newUser._id)
            }
        }
    })
    try {
        const res = await patchDataAPI(`user/${user._id}/follow`, null, auth.token)
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}