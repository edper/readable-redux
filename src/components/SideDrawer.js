import React, {Component} from 'react'

class SideDrawer extends Component {
    
    render() {
        return (
        <div id="sidedrawer" className="mui--no-user-select">
            <div id="sidedrawer-brand" className="mui--appbar-line-height">
                <span>&nbsp;&nbsp;Select Categories</span>
            </div>
            <div className="mui-divider"></div>
            <ul>
                <li>
                    <strong>All</strong>
                </li>
                {   
                    this.props.categories.length > 0 &&   this.props.categories.map((category)=> {
                        <li key={category.name}>
                            <strong>{category.name}</strong>
                        </li>
                    }
                    )
                    
                }                    
            </ul>
        </div> 
        )
    }
}

export default SideDrawer;


