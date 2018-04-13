import React, {Fragment} from 'react'


export default props => new Array(5).fill(null).map((k, i) => (
    <Fragment key={i}>
        <p>这是第{i}项</p>
        <p>{i} * {i} = {i * i}</p>
    </Fragment> 
))