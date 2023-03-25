import { Layout, Skeleton } from 'antd'
import React, { useEffect } from 'react'
import { get } from '../common/api'


export default function Search() {
    useEffect(() => {
        loadWines()
    }, [])

    const loadWines = async () => {
        await get('/api/v1/wine_bottles', {}, (data) => {
            console.log(data)
        }, (error) => {
            console.log(error)
        })
    }
    
    return (
        <Layout>
            Hello Wine
            <Skeleton />
        </Layout>
    )
} 
 