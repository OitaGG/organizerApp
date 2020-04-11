import * as React from "react";
import {SmallCard as BaseSmallCard} from "../components";

const SmallCard = ({title, children}) => {
    return <BaseSmallCard title={title}>{children}</BaseSmallCard>
};

export default SmallCard;