import * as React from "react";
import './SmallCard.less'
import {CaretDownOutlined, EditOutlined} from "@ant-design/icons";
import {useState} from "react";
import classnames from 'classnames'
const SmallCard = ({title, children}) => {
    const [isOpen, toggleIsOpen] = useState(false);
    return(
        <div className={classnames("small-card", isOpen ? 'open' : '')}>
            <div className="small-card__header">
                <div className="small-card__title">
                    <span>{title}</span>
                </div>
                <div className="small-card__btn">
                    <EditOutlined style={{fontSize: "20px"}}/>
                    <CaretDownOutlined style={{fontSize:"20px"}} onClick={() => toggleIsOpen(!isOpen)}/>
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