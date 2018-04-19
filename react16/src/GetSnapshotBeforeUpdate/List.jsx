import React from 'react'

export default class List extends React.Component {
    listRef = null
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.list.length < this.props.list.length) {
            return this.listRef.scrollHeight
        }
        return null
    } 
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            this.listRef.scrollTop += this.listRef.scrollHeight - snapshot
        }
    } 
    
    setListRef = ref => (this.listRef = ref)

    render() {
        return (
            <ul ref={this.setListRef} style={{ height: 200, overflowY: 'scroll' }}>
                {this.props.list.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
        )
    }
}
