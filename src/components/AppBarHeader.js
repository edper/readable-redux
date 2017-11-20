import React, {Component} from 'react'

class AppBarHeader extends Component {
      
    render() {

    return (
        <header id="header">
            <div className="mui-appbar mui--appbar-line-height">
                <div className="mui-container-fluid">
                    <a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
                    <a className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a> <span className="mui--text-title">Readable</span>
                    <span className="mui--text-title mui--visible-xs-inline-block">Brand.io</span>
                </div>
            </div>
        </header>
     )
    }
}

export default AppBarHeader;


