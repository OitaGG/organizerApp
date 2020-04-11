import * as React from "react";
import {SmallCard} from "../../containers";
import { DropTarget } from 'react-dnd'
import './Card-List.less';

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
});

const CardList = ({items, connectDropTarget, hovered, item}) => {
    return (
        <div className="card-list">
            {items.map(el => <SmallCard key={el.id} title={el.title}>{el.description}</SmallCard>)};
        </div>
    )
};

export default DropTarget('CARD', {}, collect)(CardList)
