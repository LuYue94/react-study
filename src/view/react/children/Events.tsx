import React, { useState } from 'react';
import { useCopyToClipboard } from 'react-use';

interface IProps {
    name: string;
}

const Events: React.FC<IProps> = (props) => {
    const { name } = props;

    const [count, setCount] = useState<number>(0);
    const [value, setValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [copyState, copyToClipboard] = useCopyToClipboard();

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        setCount(e.target.value.length);
    }

    function onFocus(e: React.ChangeEvent<HTMLInputElement>) {
        console.log('e :>> ', e);
        setIsFocus(true);
    }
    function onBlur(e: React.ChangeEvent<HTMLInputElement>) {
        console.log('e :>> ', e);
        setIsFocus(false);
    }
    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
        console.log('e :>> ', e);
        setValue('');
        setCount(0);
        setIsFocus(false);
    }

    return (
        <div>
            <p>prop name:{name}</p>
            <p>event onchange count:{count}</p>
            <p>{isFocus ? 'focus' : 'blur'}</p>
            <input value={value} onBlur={onBlur} onFocus={onFocus} onChange={onChange} id="input-example" />
            <button onClick={onClick}>clear</button>
            <button onClick={() => copyToClipboard(value)}>copy</button>
            {copyState.error ? (
                <p>Unable to copy value: {copyState.error.message}</p>
            ) : (
                copyState.value && <p>Copied {copyState.value}</p>
            )}
        </div>
    );
};

export default Events;
