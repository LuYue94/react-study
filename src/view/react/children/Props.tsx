import React from 'react';
import Counter from '../../../components/Counter';
import Parent from '../../../components/Parent';

const Props: React.FC = () => {
    return (
        <Parent>
            <Counter name="计数器1" start={1} step={1} />
            <Counter name="计数器2" start={2} step={3} />
            <Counter name="计数器3" start={3} step={2} />
        </Parent>
    );
};

export default Props;
