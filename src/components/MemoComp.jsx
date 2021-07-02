import React, {useState} from 'react'
import MemoCompProp from './MemoCompProp'

const MemoComp = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(10)

    const clickCounter = () => {
        setCount(prevState => prevState + 1)
    }
    const clickData = () => {
        setData(prevState => prevState + 5)
    }

    return (
        <div>
            <h1>{count}</h1>
            <MemoCompProp data={data} />
            <button onClick={clickCounter}>Click Me</button>
            <button onClick={clickData}>Click Me</button>
        </div>
    )
}

export default MemoComp
