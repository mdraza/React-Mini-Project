import React, {memo} from 'react'

const MemoCompProp = (props) => {
    console.log('Re-render');
    return (
        <div>
            <h2>{props.data}</h2>
        </div>
    )
}

export default memo(MemoCompProp)
