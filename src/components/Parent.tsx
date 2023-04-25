import React, { useState } from 'react';

interface IProps {
    children: React.ReactElement[];
}

const Parent: React.FC<IProps> = (props) => {
    const [index, setIndex] = useState(0);

    function showChildrenIndex(children: React.ReactElement[], index: number) {
        return children.map(function (val: React.ReactElement, i: number) {
            if (val.props.name === 'child' + index) {
                return val;
            } else {
                return null;
            }
        });
    }
    function show(index: number, event: React.MouseEvent<HTMLButtonElement>) {
        console.log(index, event);
        setIndex(index);
    }
    return (
        <div>
            选择一个子元素显示：
            <button onClick={(e) => show(1, e)}>1</button>
            <button onClick={(e) => show(2, e)}>2</button>
            <button onClick={(e) => show(3, e)}>3</button>
            {showChildrenIndex(props.children, index)}
        </div>
    );
};

export default Parent;
