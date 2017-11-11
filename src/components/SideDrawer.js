import React, {Component} from 'react'

class SideDrawer extends Component {

      
    render() {

    return (
        <div id="sidedrawer" class="mui--no-user-select">
            <div id="sidedrawer-brand" class="mui--appbar-line-height">
                <span>&nbsp;&nbsp;Select Categories</span>
            </div>
            <div class="mui-divider"></div>
            <ul>
                <li>
                    <strong>All</strong>
                </li>
                <li>
                    <strong>React</strong>
                    <ul>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                    </ul>
                </li>
                <li>
                    <strong>Redux</strong>
                </li>
                <li>
                    <strong>Udacity</strong>
                </li>
            </ul>
        </div> 
        )
    }
}

export default SideDrawer;


