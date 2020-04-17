import * as React from "react";
import './SmallCard.less'
import {CaretDownOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons";
import classnames from 'classnames'
class SmallCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleIsOpen = () => {
            this.setState(state => {
                return {isOpen: !state.isOpen}
            })
        }
    }
    
    render() {
        const {isOpen} = this.state;
        const {title, children, opacity, handleDrop, id} = this.props;
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
                                            onClick={this.toggleIsOpen}/>
                    </div>
                </div>
                <div className={classnames("small-card__content", isOpen ? '' : 'hidden')}>
                    <div className="small-card__body">
                        <span>{children}</span>
                    </div>
                </div>
            </div>
        )
    }
    
};

export default SmallCard;