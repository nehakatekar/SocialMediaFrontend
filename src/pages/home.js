import React from 'react'
import Status from '../components/home/Status'
import Posts from '../components/home/Posts'
import { useSelector } from 'react-redux'
const Home = () => {

    const { homePosts}=useSelector(state=>state)
    return (
        <div className='home row mx-0'>
            <div className='col-md-8'>
                <Status />
                {
                    (homePosts.result === 0 && homePosts.posts.length === 0)
                        ? <h2 className="text-center">No Post</h2>
                        : <Posts />
                }
            </div>
        </div>
    )
}
export default Home