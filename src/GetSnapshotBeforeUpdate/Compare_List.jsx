import React from 'react'

export default class List extends React.Component {
    state = {
        list: [],
        listRef: null,
        previousScrollHeight: null
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.list.length < nextProps.list.length) {
            prevState.previousScrollHeight = prevState.listRef.scrollHeight
        }
        if (prevState.list !== nextProps.list) {
            return {
                list: nextProps.list
            }
        }
        return null
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.previousScrollHeight !== null) {
            this.state.listRef.scrollTop += this.state.listRef.scrollHeight - this.state.previousScrollHeight
            this.setState({
                previousScrollHeight: null
            })
        }
    }
    
    setListRef = ref => this.setState({
        listRef: ref
    })

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
