import React, { useState, useEffect } from 'react';

interface IProps {
    name: string;
    start: number;
    step: number;
}

const Clock: React.FC<IProps> = (props) => {
    const { name, start, step } = props;
    const [counter, setCounter] = useState(start);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((per) => per + step);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <p>{name + ' : ' + counter}</p>
        </div>
    );
};

export default Clock;
