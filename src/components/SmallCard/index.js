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

const SmallCard = (props: Props) => {
    const {title, children, opacity, handleDrop, id} = props;
    const [isOpen, toggleOpen] = useState(false);
    const toggleFlagOpen = (): void => {
        toggleOpen(prev => (!prev))
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
                <div className="small-card__title">
                    <span>{title}</span>
                </div>
                <div className="small-card__btn">
                    <EditOutlined style={{fontSize: "20px"}}/>
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