import React from 'react'
import {Empty} from 'antd'
import Button from '../Button'
const EmptyHolder = ({title, btnText}) => {
    return (
        <Empty
            className="empty-holder"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            imageStyle={{
                height: 60,
            }}
            description={
                <span style={{color: "#dfe6e9"}}>
                    {title}
                </span>
            }
        >
            <Button style={{color: "#dfe6e9"}}>{btnText}</Button>
        </Empty>
    )
}

export default EmptyHolder;
