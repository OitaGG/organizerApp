import * as React from "react";
import {useState} from "react";
import {CaretDownOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons";
import classnames from 'classnames';
import './SmallCard.less';

type Props = {
    title: string,
    description: string,
    handleDrop: void,
    id: number,
    opacity: number
}

const SmallCard = ({title, children, opacity, handleDrop, id, rewriteCard, toggleNewCard}: Props) => {
    const [isOpen, toggleOpen] = useState(false);
    const toggleFlagOpen = (): void => {
        toggleOpen(prev => (!prev))
    };
    const rewriteCurrentCard = () => {
        rewriteCard({title: title, description: children, id: id});
        toggleNewCard();
    };
    return(
        <div className={classnames("small-card", isOpen ? 'open' : '')} style={{opacity: opacity}}>
            <div className="small-card__header">
                <div className="small-card__btn">
                    <DeleteOutlined
                        style={{fontSize: "20px"}}
                        onClick={() => handleDrop(id)}
                    />
                </div>
                <div className={classnames("small-card__title", isOpen ? "wrap" : "")}>
                    <span>{title}</span>
                </div>
                <div className="small-card__btn">
                    <EditOutlined
                        style={{fontSize: "20px"}}
                        onClick={() => rewriteCurrentCard()}/>
                    <CaretDownOutlined style={{fontSize:"20px"}}
                                       onClick={() => toggleFlagOpen()}/>
                </div>
            </div>
            <div className={classnames("small-card__content", isOpen ? '' : 'hidden')}>
                <div className="small-card__body">
                    <span>{children}</span>
                </div>
            </div>
        </div>
    )
};

export default SmallCard;