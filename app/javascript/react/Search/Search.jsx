import { Empty, Layout, Skeleton, Slider, Space } from 'antd'
import { t } from 'i18next'
import React, { useEffect, useMemo, useState } from 'react'
import { get } from '../common/api'
import WineCard from './WineCard'

export default function Search() {
    const [wineBottles, setWineBottles] = useState([])

    useEffect(() => {
        loadWines(10, 50)
    }, [])

    const loadWines = (min, max) => {
        get('/api/v1/wine_bottles', { min_price: min, max_price: max }, (data) => {
            setWineBottles(data)
        }, (error) => {
            console.log(error)
        })
    }

    const wineList = wineBottles.length != 0 ? wineBottles.map((wineBottle) => (
        <WineCard key={wineBottle.id} wineBottle={wineBottle} />
    )) : <Empty style={{margin: 'auto'}} />

    const onSliderChange = (value) => {
        loadWines(value[0], value[1])
    }

    return (
        <Layout style={{textAlign: 'center'}}>
            <h1>{t("Search.title")}</h1>
            <Slider style={{marginBottom: "3em"}}
                    defaultValue={[10, 50]} 
                    range min={0} max={200}
                    onAfterChange={onSliderChange}
                    tooltip={{ open: true, placement: 'bottom', formatter:(value)=> value + '€'}} 
                    />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: "1em" }}>
                {wineList}
            </div>
        </Layout>
    )
}
