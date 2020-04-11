import * as React from "react";
import {SmallCard as BaseSmallCard} from "../components";
import {useDrag} from "react-dnd";

const SmallCard = ({title, children}) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: 'CARD' },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    return <BaseSmallCard drag={drag} isDragging={isDragging} title={title}>{children}</BaseSmallCard>;
};


export default SmallCard;