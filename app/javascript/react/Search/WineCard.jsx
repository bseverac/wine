import { Badge, Card, Rate, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'


export default function WineCard({wineBottle}) {
    
    return (
        <div style={{ width: "200px" }}>
            <Badge.Ribbon text={wineBottle.price + '€'}>
                <Card
                    hoverable
                    cover={<Skeleton.Image className="skeleton-image"/>}
                >
                    <Meta title={wineBottle.name}/>
                    <Rate disabled defaultValue={wineBottle.rate} />
                </Card>
            </Badge.Ribbon>
        </div>
    )
} 
 