import React from 'react';
import {VictoryPie, VictoryLabel} from 'victory';

export default function PullRequests() {
    return(
        <div className='Container-advise'>
            <h3 className='Advice-Header'>Соотношение Pull Requests (принятые/отклоненные)</h3>
            <div className='Container-advise-graphic'>
                <VictoryPie
                    height={400} width={400}
                    style={{ labels: { fill: "black", fontSize: 20, fontWeight: "bold" }}}
                        colorScale={["green", "tomato" ]}
                    data={[
                        { x: "Успешные", y: 95 },
                        { x: "Отклоненные", y: 5 },
                    ]}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}

                />
        </div>
        </div>
    )
}
