import React from 'react';
import BitBucketGraph from "./Grafics/BitBucketGraph";
import Summary from "./Summary";

export default function Standart() {
    return (
        <div className={'ContentContainer'}>
            <div>
                <div className={'ContentContainer-StatisticPicker'}>
                    <h3 className={'ContentContainer-StatisticPicker-Link'}>за месяц</h3>
                    <h3 className={'ContentContainer-StatisticPicker-Link'}>все проекты</h3>
                </div>
                <div className={'ContentContainer-StatisticBars-Container'}>
                    <div className={'ContentContainer-StatisticBar-Card'}>
                        <BitBucketGraph/>
                        <div>
                            <p>статистика</p>
                            <p>статистика</p>
                            <p>статистика</p>
                        </div>
                    </div>
                    <div className={'ContentContainer-StatisticBar-Card'}>
                        <BitBucketGraph/>
                        <div>
                            <p>статистика</p>
                            <p>статистика</p>
                            <p>статистика</p>
                        </div>
                    </div>
                    <div className={'ContentContainer-StatisticBar-Card'}>
                        <BitBucketGraph/>
                        <div>
                            <p>статистика</p>
                            <p>статистика</p>
                            <p>статистика</p>
                        </div>
                    </div>
                </div>
            </div>
            <Summary/>
        </div>
    )
}