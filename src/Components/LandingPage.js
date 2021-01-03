import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateShowLeftMenu } from '../reducers/user';
import { isBrowser, isMobile } from 'react-device-detect';
import MainMenu from './MainMenu';
import MainContent from './MainContent';
import LeftMenuHeader from './LeftMenuHeader';
import LeftMenuContent from './LeftMenuContent';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // username: this.props.user.username || '',
        // switchValue: this.props.user.switchValue || false, //username to switchValue
        sideMenuWidth: this.props.user.sideMenuWidth,
        backgroundColor: {},
        showLeftMenu: this.props.user.showLeftMenu,
    };
  }

  checkPageWidth(){
    var sideHeight = document.getElementById('side-menu').scrollHeight;
    var sideWidth = document.getElementById('side-menu').scrollWidth;
    var mainHeight = document.getElementById('main-content').scrollHeight;
    var mainWidth = document.getElementById('main-content').scrollWidth;
    //var scrollRightBarMargin = (isBrowser) && (sideHeight > window.innerHeight) ? 18 :  0;
    console.log('sm height: '+sideHeight);
    console.log('sm scrollwidth: '+sideWidth);
    console.log('main height: '+mainHeight);
    console.log('main scrollwidth: '+mainWidth);
    //this.setState({ scrollRightBarMargin: scrollRightBarMargin });
    // this.props.dispatch(updateRightScrollBarMargin(scrollRightBarMargin));
  }

    toggleMenu = (value) => {
      if(value===true){ value = false } else { value = true}
      this.setState({ showLeftMenu: value });
       this.props.dispatch(updateShowLeftMenu(value));

    }

  componentDidMount() {
    this.checkPageWidth();
    //set pageColors to array
    const pageColors = { //fb colors
      black: '#000', 
      white: '#FFFFFF', 
      offwhite: '#F7F7F7',
      greyblue: '#DFE3EE',
      blue: '#8B9DC3',
      darkblue: '#3B5998',
    }
    
    this.setState({ backgroundColor: pageColors }
     // , () => { console.log(this.state.backgroundColor)}
      );

    // this.props.dispatch(updateBackgrounColor(pageColors));
    window.addEventListener("resize", this.checkPageWidth.bind(this));
    // document.addEventListener('clicked', this.checkMenuHeight.bind(this));
    // document.addEventListener("DOMContentLoaded", this.checkFunctions.bind(this));
  }

    // state = {
      
    //     };

    render() {
      const iconStyle = { size: "3x", color: this.state.backgroundColor.darkblue };
      const styles = {
        LeftContent: {
          backgroundColor: this.state.backgroundColor.blue,
          height: isBrowser ? '100vh' : 'none',
          width: isBrowser ? '30%' : 'none',
          minWidth: 200,
          position: isBrowser ? 'inherit' : 'absolute',
          right: isBrowser ? 'inherit' : '12px',
          left: isBrowser ? 'inherit' : '12px',
          bottom: isBrowser ? 'inherit' : '12px',
          top: isBrowser ? 'inherit' : '12px',
          padding: isBrowser ? 'inherit' : '25px',
          paddingTop: 0,
          display: this.props.user.showLeftMenu ? 'block' : 'none'
        },
        RightContent: {
          backgroundColor: this.state.backgroundColor.offwhite,
          height: '100vh',
          flex: isBrowser ? '1' : 'none',
          width: isMobile ? '100%' : 'inherit'
        },
        TopItems: {
          display: 'flex',
          flex: 1,
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
          paddingRight: 10
        }
      };
       
        return (
          <Fragment>
            <div className="LeftContent" style={styles.LeftContent} id="side-menu">
              <div className="TopItems" style={styles.TopItems} onClick={() => this.toggleMenu(this.props.user.showLeftMenu)}>
                <LeftMenuHeader />
                <FontAwesomeIcon
                  icon={faWindowClose}
                  color={iconStyle.color}
                  size={iconStyle.size}
                  style={{float: "right", top: '5px', postion: 'relative', cursor: 'pointer'}}
                />
              </div>
              <LeftMenuContent />
            </div>
            <div className="RightContent" style={styles.RightContent} id="main-content">
              <MainMenu />
              <MainContent />
            </div>
          </Fragment>
        );
    }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(LandingPage);
