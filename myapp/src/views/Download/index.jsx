// 下载
import React from 'react'
import { withAuth } from '../../utils/hoc'

function Download() {
    return (
        <div>Download</div>
    )
}
Download = withAuth(Download)

export default Download;