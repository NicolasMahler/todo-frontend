import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from './Category';

class CategoryWrapper extends Component {
    render() {
        return (
            <div className={this.props.visible === 'all' || this.props.visible === this.props.category.id ? "categoryWrapper__visible" : "categoryWrapper__invisible"}> 
            <Category id={this.props.category.id} name={this.props.category.name} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryWrapper);