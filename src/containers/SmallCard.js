//@flow
import * as React from "react";
import { useImperativeHandle, useRef } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import {SmallCard as BaseSmallCard} from "../components";
import {connect} from "react-redux";
import {toggleNewCardActionCreator, rewriteCurrentCard} from "../store/newCard/actions";
import {changeCurrentWeekAction} from "../store/timeManagment/actions";

export const ItemTypes = {
    CARD: 'CARD',
};

type Props = {
    title: string,
    children: React.Node,
    isDragging: boolean,
    connectDragSource: void,
    connectDropTarget: void,
    id: number,
    handleDrop: void
}

const SmallCard = React.forwardRef(
    ({ title, children, isDragging, connectDragSource, connectDropTarget, id, handleDrop, toggleNewCardActionCreator, rewriteCurrentCard}, ref) => {
        const elementRef = useRef(null);
        connectDragSource(elementRef);
        connectDropTarget(elementRef);
        const opacity = isDragging ? 0 : 1;
        useImperativeHandle(ref, () => ({
            getNode: () => elementRef.current,
        }));
        return (
            <div ref={elementRef}>
                <BaseSmallCard rewriteCard={rewriteCurrentCard} toggleNewCard={toggleNewCardActionCreator} opacity={opacity} title={title} handleDrop={handleDrop} id={id}>{children}</BaseSmallCard>
            </div>
        )
    },
);
const mapStateToProps = () => ({

});

const mapDispatchToProps = {
    toggleNewCardActionCreator: toggleNewCardActionCreator,
    rewriteCurrentCard: rewriteCurrentCard,
};


export default connect(mapStateToProps, mapDispatchToProps)(DropTarget(
    ItemTypes.CARD,
    {
        hover(props, monitor, component) {
            if (!component) {
                return null
            }
            const node = component.getNode();
            if (!node) {
                return null
            }
            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = node.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            props.moveCard(dragIndex, hoverIndex);
            monitor.getItem().index = hoverIndex
        },
    },
    (connect) => ({
        connectDropTarget: connect.dropTarget(),
    }),
)(
    DragSource(
        ItemTypes.CARD,
        {
            beginDrag: (props) => ({
                id: props.id,
                index: props.index,
            })
        },
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    )(SmallCard),
));
