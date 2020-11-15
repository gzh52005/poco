import React from 'react'
import Api from '../../api/goods'

function Topic(){

    
    useEffect(() => {
        Api.topic().then(res=>{
            console.log(res);
        })
        return () => {
            cleanup
        }
    }, [input])

}

export default Topic;