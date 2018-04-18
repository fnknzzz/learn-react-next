import React from 'react'

export default class List extends React.Component {
    listRef = null
    previousScrollHeight = null
    componentWillUpdate(nextProps, nextState) {
        if (this.props.list.length < nextProps.list.length) {
            this.previousScrollHeight = this.listRef.scrollHeight
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.previousScrollHeight !== null) {
            this.listRef.scrollTop += this.listRef.scrollHeight - this.previousScrollHeight
            this.previousScrollHeight = null
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
