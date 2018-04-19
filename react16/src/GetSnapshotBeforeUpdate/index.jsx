import React from 'react'
import List from './List'
// import List from './Compare_List'

let key = 0
const getKey = () => key++

export default class GetSnapshotBeforeUpdate extends React.Component {
    state = {
        list: []
    }
    componentDidMount() {
        this.addList(10)
    }
    addList = n => {
        if (typeof n !== 'number') {
            n = 1
        }
        const list = [...this.state.list]
        for (let i = 0; i < n; i++) {
            list.push(getKey())
        }
        this.setState({
            list
        })
    }
    render() {
        return (
            <div>
                <List list={this.state.list}/>
                <button onClick={this.addList}>点我增加列表</button>
            </div>
        )
    }
}