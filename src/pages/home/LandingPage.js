import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateShowLeftMenu, updateContentBodyWidth, updateSidemenuBodyWidth } from '../../redux/user';
import { isBrowser } from 'react-device-detect';
import MainMenu from '../right-content/MainMenu';
import MainContent from '../right-content/MainContent';
import LeftMenuHeader from '../left-menu/LeftMenuHeader';
import LeftMenuContent from '../left-menu/LeftMenuContent';

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
    const sideHeight = document.getElementById('side-menu').scrollHeight;
    const sideWidth = document.getElementById('side-menu').scrollWidth;
    const mainHeight = document.getElementById('main-content').scrollHeight;
    const mainWidth = document.getElementById('main-content').offsetWidth;
    //const scrollRightBarMargin = (isBrowser) && (sideHeight > window.innerHeight) ? 18 :  0;
    console.log('sm height: '+sideHeight);
    console.log('sm scrollwidth: '+sideWidth);
    console.log('main height: '+mainHeight);
    console.log('main scrollwidth: '+mainWidth);
    this.props.dispatch(updateContentBodyWidth(mainWidth));
    this.props.dispatch(updateSidemenuBodyWidth(sideWidth));
  }

  toggleMenu = (value) => {
    if(value===true){ value = false } else { value = true}// toggle true/false
    this.setState({ showLeftMenu: value });
     this.props.dispatch(updateShowLeftMenu(value));

       //document.getEle was faster than dom restart so added timeout for update width
       setTimeout(() => {
        const sideWidth = document.getElementById('side-menu').scrollWidth;
        this.props.dispatch(updateSidemenuBodyWidth(sideWidth));
        console.log('new width: '+this.props.user.contentBodyWidth);
       }, 50);

     //document.getEle was faster than dom restart so added timeout for update width
     setTimeout(() => {
      const mainWidth = document.getElementById('main-content').offsetWidth;
      this.props.dispatch(updateContentBodyWidth(mainWidth));
      console.log('new width: '+this.props.user.contentBodyWidth);
     }, 50);
     
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
    document.addEventListener('clicked', this.checkPageWidth.bind(this));
    document.addEventListener("DOMContentLoaded", this.checkPageWidth.bind(this));
  }

    // state = {
      
    //     };

    render() {
      const iconStyle = { size: "3x", color: this.state.backgroundColor.darkblue };
      const styles = {
        LeftContent: {
          backgroundColor: this.state.backgroundColor.blue,
          height: isBrowser ? '100vh' : 'none',
          width: isBrowser && this.props.user.showLeftMenu ? '30%' : 'none',
          minWidth: 200,
          right: isBrowser ? 'inherit' : '12px',
          left: isBrowser ? 'inherit' : '12px',
          bottom: isBrowser ? 'inherit' : '12px',
          top: isBrowser ? 'inherit' : '12px',
          // padding: isBrowser ? 'inherit' : '25px',
          paddingTop: 0,
          display: this.props.user.showLeftMenu ? 'block' : 'none',
          // opacity: this.props.user.showLeftMenu ? 1 : 0.2,
          zIndex: 100,
          position: isBrowser ? 'fixed' : 'fixed',
          transition: 'all 0.3s ease-out opacity 0.3s ease-out',
          
        },
        RightContent: {
          backgroundColor: this.state.backgroundColor.offwhite,
          // height: '100vh',
          flex: isBrowser ? '1' : 'none',
          width: isBrowser ? this.props.user.contentBodyWidth - 50: '',//minus padding
          overflow: 'hidden',
          paddingTop: 50, //menu height
          paddingLeft: isBrowser ? this.props.user.sideMenuBodyWidth : 'inherit', // left menu width
          transition: 'all 0.3s ease-out',
        },
        TopItems: {
          display: 'flex',
          flex: 1,
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
          paddingRight: 10,
          transition: 'all 0.3s ease-out',
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
