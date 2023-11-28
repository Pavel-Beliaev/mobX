import React, {FC} from 'react';
import counter from '../store/counter'
import {observer} from "mobx-react-lite";

const Counter: FC = observer(() => {
    return (
        <div className='counter'>
            <div className='display'>Count: {counter.count}</div>
            <div className='display'>Computed: {counter.total}</div>
            <div className='btns'>
                <button className='btn' onClick={() => counter.decrement()}>-</button>
                <button className='btn' onClick={() => counter.reset()}>reset</button>
                <button className='btn' onClick={() => counter.increment()}>+</button>
            </div>
        </div>
    );
});

export default Counter;