import { Layout, Skeleton, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { get } from '../common/api'
import WineCard from './WineCard'


export default function Search() {
    const [wineBottles, setWineBottles] = useState([])

    useEffect(() => {
        loadWines()
    }, [])

    const loadWines = async () => {
        await get('/api/v1/wine_bottles', {}, (data) => {
            setWineBottles(data)
        }, (error) => {
            console.log(error)
        })
    }
    
    const wineList = wineBottles.map((wineBottle) => (
        <WineCard key={wineBottle.id} wineBottle={wineBottle} />
    ))

    return (
        <Layout>
            Hello Wine
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: "1em"}}>
                {wineList}
            </div>
        </Layout>
    )
} 
 