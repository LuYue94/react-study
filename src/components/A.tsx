import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

console.log('PropTypes :>> ', PropTypes);

interface IProps {
    name: string;
}

const A: React.FC<IProps> = (props) => {
    const { name } = props;

    const [count, setCount] = useState<number>(0);
    const [value, setValue] = useState<string>('');

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        setCount(e.target.value.length);
    }

    return (
        <div>
            {name}
            {count}
            <input value={value} onChange={onChange} id="input-example" />
        </div>
    );
};
export default A;
