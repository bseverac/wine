import { Empty, Layout, Skeleton, Slider, Space } from 'antd'
import { t } from 'i18next'
import React, { useEffect, useMemo, useState } from 'react'
import { get } from '../common/api'
import WineCard from './WineCard'

const DEFAULT_PRICE_RANGE = [10, 50]
const MIN_PRICE = 0
const MAX_PRICE = 200

export default function Search() {
    const [wineBottles, setWineBottles] = useState([])

    useEffect(() => {
        loadWines(DEFAULT_PRICE_RANGE)
    }, [])

    const loadWines = (range) => {
        get('/api/v1/wine_bottles', { min_price: range[0], max_price: range[1] }, (data) => {
            setWineBottles(data)
        }, (error) => {
            console.log(error)
        })
    }

    const wineBottleList = wineBottles.map((wineBottle) => (
        <WineCard key={wineBottle.id} wineBottle={wineBottle} />
    ))

    const result = wineBottles.length != 0 ? wineBottleList : <Empty style={{margin: 'auto'}} />

    const onSliderChange = (value) => {
        loadWines(value)
    }

    return (
        <Layout style={{textAlign: 'center'}}>
            <h1>{t("Search.title")}</h1>
            <Slider style={{marginBottom: "3em"}}
                    defaultValue={DEFAULT_PRICE_RANGE} 
                    range min={MIN_PRICE} max={MAX_PRICE}
                    onAfterChange={onSliderChange}
                    tooltip={{ open: true, placement: 'bottom', formatter:(value)=> value + '€'}} 
                    />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: "1em" }}>
                {result}
            </div>
        </Layout>
    )
}
