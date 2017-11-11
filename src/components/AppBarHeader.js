import React, {Component} from 'react'

class AppBarHeader extends Component {
      
    render() {

    return (
        <header id="header">
            <div class="mui-appbar mui--appbar-line-height">
                <div class="mui-container-fluid">
                    <a class="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
                    <a class="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a> <span class="mui--text-title">Readable</span>
                    <span class="mui--text-title mui--visible-xs-inline-block">Brand.io</span>
                </div>
            </div>
        </header>
     )
    }
}

export default AppBarHeader;


