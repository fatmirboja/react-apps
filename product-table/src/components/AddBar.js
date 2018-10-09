import React, { Component } from 'react'

class AddBar extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='new product'/>
                <button>add</button>
            </form>
        )
    }

}

export default AddBar