import React, { Component } from 'react';
import SideDrawer  from './SideDrawer'
import AppBarHeader  from './AppBarHeader'
import { connect } from 'react-redux'
import '../css/App.css';
import '../css/mui.min.css';
import '../css/mui.main.css';
import '../js/mui.min.js';
import '../js/mui.main.js';
import { getCategoriesSuccess, getPost, getAllPosts, 
  addPost, removePost, addComment, 
  removeComentFromPost, fetchCategories
} from '../actions'


class App extends Component {
  
  componentDidMount(){
    this.props.getCategories();
  }

  render() {
    return (
      <div>
          // Side Menu or Side Drawer
          <SideDrawer categories={this.props.categories}></SideDrawer>

          // Header
          <AppBarHeader></AppBarHeader>

          // Main Content
          <div id="content-wrapper">
            <div className="mui--appbar-height"></div>
              <div className="mui-container-fluid">
                <h1>Brand.io</h1>
                <p>
                  Lorem ipsum lorem dolor sit amet, consectetur adipiscing elit. Mauris
                  sollicitudin volutpat molestie. Nullam id tempor nulla. Aenean sit amet
                  urna et elit pharetra consequat. Aliquam fringilla tortor vitae lectus
                  tempor, tempor bibendum nunc elementum. Etiam ultrices tristique diam,
                  vitae sodales metus bibendum id. Suspendisse blandit ligula eu fringilla
                  pretium. Mauris dictum gravida tortor eu lacinia. Donec purus purus,
                  ornare sit amet consectetur sed, dictum sitamet ex. Vivamus sit amet
                  imperdiet tellus. Quisque ultrices risus a massa laoreet, vitae tempus sem
                  congue. Maecenas nec eros ut lectus vehicula rutrum. Donec consequat
                  tincidunt arcu non faucibus. Duis elementum, ante venenatis lacinia
                  cursus, turpis massa congue magna, sed dapibus felis nibh sed tellus. Nam
                  consectetur non nibh vitae sodales. Pellentesque malesuada dolor nec mi
                  volutpat, eget vehicula eros ultrices.
                </p>
                <p>
                  Aenean vehicula tortor a tellus porttitor, id elementum est tincidunt.
                  Etiam varius odio tortor. Praesent vel pulvinar sapien. Praesent ac
                  sodales sem. Phasellus id ultrices massa. Sed id erat sit amet magna
                  accumsan vulputate eu at quam. Etiam feugiat semper imperdiet. Sed a sem
                  vitae massa condimentum vestibulum. In vehicula, quam vel aliquet aliquam,
                  enim elit placerat libero, at pretium nisi lorem in ex. Vestibulum lorem
                  augue, semper a efficitur in, dictum vitae libero. Donec velit est,
                  sollicitudin a volutpat quis, iaculis sit amet metus. Nulla at ante nec
                  dolor euismod mattis cursus eu nisl.
                </p>
                <p>
                  Quisque interdum facilisis consectetur. Nam eu purus purus. Curabitur in
                  ligula quam. Nam euismod ligula eu tellus pellentesque laoreet. Aliquam
                  erat volutpat. Curabitur eu bibendum velit. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus. Nunc efficitur
                  lorem sit amet quam porta pharetra. Cras ultricies pellentesque eros sit
                  amet semper.
                </p>
              </div>
          </div>

          // Footer
          <footer id="footer">
            <br />
            <div className="mui-container-fluid">
                 Theme by <a href="https://www.muicss.com">MUI</a>
            </div>
          </footer>
        </div>
        
    );
  }
}

function mapStateToProps ({post, comment, categories}) {

  return {
    post: post,
    comment: comment,
    categories: categories,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
