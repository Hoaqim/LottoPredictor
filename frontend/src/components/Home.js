import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Coupon from './Coupon'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to="Coupon" className="btn btn-primary">Play now</Link>
            </div>
        )
    }
}
