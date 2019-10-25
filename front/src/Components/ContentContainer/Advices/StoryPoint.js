import React from 'react';
import {VictoryChart, VictoryLine, VictoryTheme} from 'victory'

export default function StoryPoint() {
    return(
        <div className='Container-advise'>
            <h3 className='Advice-Header'>Динамика развития (по сторипоинтам)</h3>
            <div className='Container-advise-graphic'>
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryLine
                        height={400} width={400}
                        style={{
                            data: { stroke: "#02555D" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 7 }
                        ]}
                    />
                </VictoryChart>
            </div>
        </div>
    )
}
