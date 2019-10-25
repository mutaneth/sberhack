import React from 'react';
import { Image, List } from 'semantic-ui-react';
import lamp from '../../images/Bitmap 3.png'
import listItem from '../../images/Oval.png';

export default function Summary() {
    return (
        <div className={'ContentContainer-StatisticSummary-Container'}>
            <h1>Итог: вообще четка, но есть парочка советов...</h1>
            <div className={'ContentContainer-StatisticSummary-List'}>
                <img style={{marginRight: '3vh'}} src={lamp} alt={'lamp'}/>
            <List selection verticalAlign='middle'>
                <List.Item>
                    <Image src={listItem} />
                    <List.Content>
                        <h3>то да се</h3>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image src={listItem} />
                    <List.Content>
                        <h3>то да се</h3>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image src={listItem} />
                    <List.Content>
                        <h3>то да се</h3>
                    </List.Content>
                </List.Item>
            </List>
            </div>
        </div>
    )
}