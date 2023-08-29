import React, { useEffect, useState } from 'react'

const Child = () => {
    const [data, setData] = useState()
    useEffect(() => {
        console.log('Child useEffect')
    }, [])
    return <div>Child</div>
}

export default Child
