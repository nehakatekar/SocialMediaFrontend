import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Toast from './Toast'

function Notify() {
    const { alert } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            {/* {alert.loading && <h1>Loading..</h1>} */}


            {
                alert.error &&
                <Toast msg={{ title: 'Error', body: alert.error }}
                    handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
                    bgColor="bg-danger" />
            }

            {
                alert.success &&
                <Toast msg={{ title: 'Success', body: alert.success }}
                    handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
                    bgColor="bg-success" />
            }
        </div>
    )
}

export default Notify
