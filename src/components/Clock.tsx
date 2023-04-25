import React, { useState } from 'react';

const Clock: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
};

export default Clock;
