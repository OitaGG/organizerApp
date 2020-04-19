// @flow
import * as React from 'react';
import classNames from 'classnames';
import './Block.less';

type Props = {
    className: String,
    children: React.Node
}

const Block = ({children, className} : Props) => {
    return (
        <div className={classNames('block', className)}>{children}</div>
    );
};

export default Block;