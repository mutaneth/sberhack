import React from 'react';
import {VictoryBar, VictoryChart, Bar} from 'victory';
export default function Defect() {
    const defects = {
        IFT: 6,
        PSI: 4,
        PROM: 0
    };
    return(
        <div className='Container-advise'>
            <h3 className='Advice-Header'>Дефекты на стендах</h3>
            <div className='Container-advise-graphic'>
                <VictoryChart height={400} width={400}
                              domainPadding={{ x: 50, y: [0, 100] }}
                              scale={{ x: "Ошибки" }}
                >
                    <VictoryBar
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        data={[
                            { x: 'PROM', y: 2 },
                            { x: 'PSI', y: 1 },
                            { x: 'IFT', y: 3 },
                        ]}
                    />
                </VictoryChart>
            </div>
        </div>
    );
}
