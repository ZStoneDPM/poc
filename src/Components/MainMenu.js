import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import { updateShowLeftMenu, updateContentBodyWidth, updateSidemenuBodyWidth } from '../reducers/user';
import { Link } from "react-router-dom";
import {
  faBars,
  faCog,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { isBrowser } from "react-device-detect";

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
       showLeftMenu: this.props.user.showLeftMenu,
    };
  }

  toggleMenu = (value) => {
    if(value===true){ value = false } else { value = true}// toggle true/false
    this.setState({ showLeftMenu: value });
     this.props.dispatch(updateShowLeftMenu(value));

       //document.getEle was faster than dom restart so added timeout for update width
       setTimeout(() => {
        // let sideWidth = document.getElementById('side-menu').scrollWidth;
        let sideWidth = "";
        if(this.props.user.showLeftMenu === false){
          sideWidth = 0;
        } else {
          sideWidth = window.visualViewport.width * .3;
        }
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

  render() {
    const pageColors = {
      black: '#000', 
      white: '#FFFFFF', 
      offwhite: '#F7F7F7',
      greyblue: '#DFE3EE',
      blue: '#8B9DC3',
      darkblue: '#3B5998',
    };
    const iconStyle = { size: "3x", color: pageColors.darkblue };
    const styles = {
      MainMenuStyle: {
        height: "3em",
        backgroundColor: pageColors.greyblue,
        border: '1px solid #e7eaec',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 10,
        display: 'flex',
        opacity: 1,
        zIndex: 10,
        width: isBrowser ? window.innerWidth - this.props.user.sideMenuBodyWidth - 38: window.visualViewport.width -20,//minus padding //window.visualViewport.width,
        position: 'fixed',
        left: isBrowser ? this.props.user.sideMenuBodyWidth : 0,
        right: 0,
        top: 0,
        transition: 'all 0.3s ease-out',
      },
  };



    return (
      <div className="MainMenuStyle" style={styles.MainMenuStyle}>
       
          {/* {this.state.sideMenuWidth <= 60 && ( */}
            <div 
              className="icon" 
              onClick={() => this.toggleMenu()}
              >
              <FontAwesomeIcon
                icon={faBars}
                color={iconStyle.color}
                size={iconStyle.size}
                style={{ zIndex: 1000 }}
              />
            </div>
          {/* )} */}
          {this.state.sideMenuWidth > 60 && (
            <div
              //  to=''
              className="icon"
              onClick={() => this.toggleMenu()}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                color={iconStyle.color}
                size={iconStyle.size}
              />
              {/* </Link> */}
            </div>
          )}

          <Link className="icon" to="/notifications">
            <FontAwesomeIcon
              icon={faCog}
              color={iconStyle.color}
              size={iconStyle.size}
            />
          </Link>
        </div>

    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(MainMenu);

// /* eslint-disable react/jsx-boolean-value */
// import React, { Component, Fragment } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faSignInAlt, faCog, faChevronLeft, faChartLine, faLink, faBell, faQuestion, faPiggyBank, faUser, faSearch, faUsers, faCalculator, } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// // import { connect } from 'react-redux';
// // import { updateLeftScrollBarMargin, updateRightScrollBarMargin, updateBackgrounColor, updateSidemenuBodyWidth, updateContentBodyWidth, updateIconWidthMultiplier } from '../reducers/user';
// // import { isBrowser} from 'react-device-detect';
// //import './css/landingHeader.css';

// class MainMenu extends Component {
//   // eslint-disable-next-line no-undef
//   constructor(props) {
//     super(props);
//     this.state = {
//         // username: this.props.user.username || '',
//         // switchValue: this.props.user.switchValue || false, //username to switchValue
//         // sideMenuWidth: this.props.user.sideMenuWidth,
//         // scrollRightBarMargin: this.props.user.scrollRightBarMargin,
//         // scrollLeftBarMargin: this.props.user.scrollLeftBarMargin,
//     };
//   }
//   // checkMenuHeight(){
//   //   // var sideMenuWidth = this.state.sideMenuWidth;
//   //   var sideHeight = document.getElementById('side-menu').scrollHeight;

//   //   var scrollLeftBarMargin = (isBrowser) && (sideHeight > window.innerHeight) ? 18 :  0;

//   //   console.log('sm height: '+sideHeight);
//   //   console.log('sm iw: '+window.innerHeight);

//   //   this.setState({ scrollLeftBarMargin: scrollLeftBarMargin });
//   //   this.props.dispatch(updateLeftScrollBarMargin(scrollLeftBarMargin));
//   // }
//   // checkPageWidth(){
//   //   var sideHeight = document.getElementById('side-menu').scrollHeight;
//   //   var scrollRightBarMargin = (isBrowser) && (sideHeight > window.innerHeight) ? 18 :  0;
//   //   console.log('sm height: '+sideHeight);
//   //   console.log('sm iw: '+window.innerHeight);
//   //   this.setState({ scrollRightBarMargin: scrollRightBarMargin });
//   //   this.props.dispatch(updateRightScrollBarMargin(scrollRightBarMargin));
//   // }

//   // extendMenuView() {
//   //   this.checkMenuHeight();
//   //   const width = window.innerWidth;
//   //   let sideMenuWidthLarge = (width/100)*40;//set width to 40% screen
//   //   sideMenuWidthLarge = sideMenuWidthLarge > 300 ? 300 : sideMenuWidthLarge;//set maxwidth 300px
//   //   console.log(`SideMenuWidth: ${sideMenuWidthLarge}`)
//   //   if(width <= 680){
//   //     let sideMenuWidth = this.state.sideMenuWidth === 1 ? 60 : 1;// icon width?
//   //     let multiplier = sideMenuWidth === 1 ? 1 : sideMenuWidthLarge;
//   //     this.setState({ sideMenuWidth: sideMenuWidth, }
//   //       ,() => console.log(this.state.sideMenuWidth)
//   //        );
//   //        let contentBodyWidth = width - sideMenuWidth;
//   //        this.props.dispatch(updateSidemenuBodyWidth(sideMenuWidth));
//   //        this.props.dispatch(updateContentBodyWidth(contentBodyWidth));
//   //        this.props.dispatch(updateIconWidthMultiplier(multiplier));
//   //   }
//   //   else {// if screen larger than ^^ 680
//   //     const width = window.innerWidth;
//   //     let sideMenuWidth = (this.state.sideMenuWidth === sideMenuWidthLarge) ? 1 : sideMenuWidthLarge;
//   //     let multiplier = sideMenuWidth === 1 ? 2.5 : 6;
//   //     this.setState({ sideMenuWidth: sideMenuWidth }
//   //       ,() => console.log(`sideMWidth: ${this.state.sideMenuWidth}`)
//   //        );
//   //        let contentBodyWidth = width - sideMenuWidth;
//   //        this.props.dispatch(updateSidemenuBodyWidth(sideMenuWidth));
//   //        this.props.dispatch(updateContentBodyWidth(contentBodyWidth));
//   //        this.props.dispatch(updateIconWidthMultiplier(multiplier));
//   //   }

//   // }
//   // getLPadding(){
//   //   if(this.props.user.sideMenuWidth < 100){
//   //     return 10
//   //   }
//   //   else {
//   //     return 0
//   //   }
//   // }
//   // getRPadding(int){
//   //   if(this.props.user.sideMenuWidth < 100){
//   //     return int
//   //   }
//   //   else {
//   //     return 0
//   //   }
//   // }
//   // getLeftMargin(){
//   //   if(this.props.user.sideMenuWidth < 100){
//   //     return -200
//   //   }
//   //   else {
//   //     return 'inherit'
//   //   }
//   // }

//   // updateDimensions() {
//   //   this.setState({ width: update_width, height: update_height });
//   //   console.log('w: '+window.innerWidth);
//   // }
// // checkFunctions(){
// //   this.extendMenuView();
// //   this.checkMenuHeight();
// //   this.checkPageWidth();
// // }

// componentDidMount() {
//     // this.extendMenuView();
//     // this.checkMenuHeight();
//     // this.checkPageWidth();
//     //set pageColors
//     // const pageColors = {
//     //   black: '#000',
//     //   white: '#fff',
//     //   offwhite: '#f3f3f4',
//     //   green: '#1ab394',
//     //   darkgreen: '#17a084',
//     //   darkergreen: '#127e68',
//     //   orange: '#f8ac59',
//     //   darkorange: '#fbbe7b',
//     //   darkerorange: '#f8ac59',
//     //   blue: '#23c6c8',
//     //   darkblue: '#273a4a',
//     //   darkerblue: '#233645',
//     //   bluegray: '#a7b1c2'
//     // }
//     // var scrollRightBarMargin = isBrowser ? 18 :  0;

//     // this.setState({ backgroundColor: pageColors });

//     // this.props.dispatch(updateBackgrounColor(pageColors));
//     // window.addEventListener("resize", this.checkFunctions.bind(this));
//     // document.addEventListener('clicked', this.checkMenuHeight.bind(this));
//     // document.addEventListener("DOMContentLoaded", this.checkFunctions.bind(this));
//   }

//   render() {

//     const pageColors = {
//       // black: this.props.user.backgroundColor.black,
//       // white: this.props.user.backgroundColor.white,
//       // offwhite: this.props.user.backgroundColor.offwhite,
//       // green: this.props.user.backgroundColor.green,
//       // darkgreen: this.props.user.backgroundColor.darkgreen,
//       // darkergreen: this.props.user.backgroundColor.darkergreen,
//       // blue: this.props.user.backgroundColor.blue,
//       // darkblue: this.props.user.backgroundColor.darkblue,
//       // darkerblue: this.props.user.backgroundColor.darkerblue,
//       // orange: this.props.user.backgroundColor.orange,
//       // darkorange: this.props.user.backgroundColor.darkorange,
//       // darkerorange: this.props.user.backgroundColor.darkerorange,
//       // bluegray: this.props.user.backgroundColor.bluegray,
//     }

//     // const colors = {
//     //   black: '#000',
//     //   white: '#fff',
//     //   darkBlueLight: '#263949',
//     //   darkBlue: '#243747',
//     //   grey: 'rgb(103, 106, 108)',
//     //   greyDark: '#a7b1c2',
//     //   greyLight: '#f3f3f4',
//     //   green: '#1ab394',
//     //   greyLight2: 'rgba(0,0,0,0.8)',
//     //   greyLight3: 'rgba(0,0,0,0.5)',
//     //   blue: '#3967ff'
//     // }

//     const iconStyle = { size: '3x', color: pageColors.blue }
//     const sideMenuIconStyle = { size: '2x', color: pageColors.bluegray }
//       // const switchValue = this.props.user.switchValue;
//       // console.log('inlandingpageheader: '+JSON.stringify(this.state));
//       // const backgroundColor = this.props.user.backgroundColor;
//       // const headerHeight = 68;
//       const bodyHeight = window.innerHeight;// - headerHeight;

//       // const switchValue = this.props.user.switchValue;

//       const styles = {
//           viewBodyStyle: {
//             // backgroundColor: backgroundColor,
//           },
//           headerTextStyle: {
//               color: pageColors.white,
//               fontSize: 50,
//               height: bodyHeight,
//               textAlign: 'center',
//               lineHeight: 2
//           },
//           sideMenuStyle: {

//               height: bodyHeight,
//               textAlign: 'center',
//               // lineHeight: 10,
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               width: this.state.sideMenuWidth,
//               overflow: 'auto',
//               // backgroundColor: pageColors.darkblue,
//               zIndex: 1000,
//               // paddingRight: this.props.user.scrollLeftBarMargin,
//               transition: 'width 0.9s ease-out, padding-right 0.9s ease-out',
//           },
//           headerBox: {
//             // backgroundColor: pageColors.white,
//             border: '1px solid #e7eaec',
//             justifyContent: 'space-between',
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 2 },
//             shadowOpacity: 0.2,
//             elevation: 2,
//             // opacity: 0.8,
//             padding: 10,
//             display: 'flex',
//             position: 'fixed',
//             // left: this.state.sideMenuWidth + this.props.user.scrollLeftBarMargin,
//             transition: 'all 0.9s ease-out',
//             // right: this.props.user.scrollRightBarMargin,
//             top: 0,
//             opacity: 1,
//             zIndex: 10
//           },
//           leftMenu: {
//             lineHeight: 2,
//             padding: 6,
//             // borderBottom: '1px solid',
//             // borderColor: pageColors.bluegray,
//             width: this.state.sideMenuWidth - 12,//minus l&r padding
//             // justifyContent:
//             transition: 'all 0.9s ease-out',
//             maxHeight: '100%'
//           },
//           leftMenuSelected: {
//             lineHeight: 2,
//             padding: 6,
//             borderBottom: `1px solid ${pageColors.bluegray}`,
//             borderTop: `1px solid ${pageColors.bluegray}`,

//             width: this.state.sideMenuWidth - 12,//minus l&r padding
//             // justifyContent:
//             transition: 'all 0.9s ease-out 0s',
//             // backgroundColor: pageColors.darkerblue,
//             marginTop: -2,
//             marginBottom: -2,
//           },
//           leftMenuTextBox: {
//             fontSize: '1.5rem',
//             color: pageColors.bluegray,
//             textDecoration: 'none',
//             paddingRight: 5,
//             // marginLeft: this.getLeftMargin(),
//             transition: 'all 0.9s ease-out 0s',
//             overflow: 'hidden'
//           },
//           selectedMenuItem: {
//             fontSize: '1.5rem',
//             textDecoration: 'none',
//             paddingRight: 5,
//             // marginLeft: this.getLeftMargin(),
//             transition: 'all 0.9s ease-out 0s',
//             overflow: 'hidden',
//             color: pageColors.white,
//           },
//           leftMenuTextBoxLogo: {
//             fontSize: '2rem',
//             color: pageColors.white,//text color
//             // padding: 5,
//             lineHeight: 1.3,
//             // height: 180,
//             maxHeight: 180,
//             height: this.state.sideMenuWidth ,//padding 5x2 plus border ht of header 1px
//             transition: 'all 0.9s ease-out 0s',
//             overflow: 'hidden',
//             padding: '33 25',
//             backgroundSize: 'cover',
//             // backgroundColor: '#2f4050',
//            // backgroundImage:  `url(${logoBoxImage})`,
//           },
//           icon: {
//             display: 'flex',
//             color: pageColors.white,
//             fontSize: '1.5rem',
//             textDecoration: 'none',
//             justifyContent: 'space-between',
//             zIndex: 100

//           },
//           circle: {
//             width: 80,
//             height: 80,
//             borderRadius: '50%',
//             // backgroundColor: pageColors.white,
//             margin: 'auto',
//            //backgroundImage:  `url(${image})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             border: '1px solid #fff'
//           }
//         };
// return (
//   <Fragment>
//         <div id="header-content" style={styles.headerBox}>
//         { this.state.sideMenuWidth <= 60 &&
//         <div
//         //  to=''
//         className="icon"
//         onClick={() => this.extendMenuView()}
//         >
//         <FontAwesomeIcon
//             icon={faBars}
//             color={iconStyle.color}
//             size={iconStyle.size}
//             style={{zIndex:1000}}
//         />
//         {/* </Link> */}
//         </div>
//         }
//       { this.state.sideMenuWidth >60 &&
//          <div
//          //  to=''
//         className="icon"
//         onClick={() => this.extendMenuView()}
//         >
//         <FontAwesomeIcon
//             icon={faChevronLeft}
//             color={iconStyle.color}
//             size={iconStyle.size}
//         />
//          {/* </Link> */}
//          </div>
//         }

//         <Link
//          className="icon"
//          to='/notifications'
//         >
//         <FontAwesomeIcon
//             icon={faBell}
//             color={iconStyle.color}
//             size={iconStyle.size}
//             // style={{}}
//         />
//          </Link>

//       </div>
//       <div id="side-menu" style={styles.sideMenuStyle}>

//       <div  >

//           <Link
//             to='/'
//             // className="icon"
//             style={{textDecoration: 'none'}}
//           //onClick={() => console.log('SearchClicked')} //Actions.Search()
//           >

//             <div style={styles.leftMenuTextBoxLogo}>
//               {/* {this.props.user.sideMenuWidth < 100 &&
//                  <Fragment>IL</Fragment>
//               }
//               {this.props.user.sideMenuWidth > 100 && */}
//                   <Fragment>InvestLinkz
//      {/* {this.props.user.login !== '' && */}
//       <div>
//                     <div style={styles.circle}></div>
//                     <div style={{fontSize: 24}}>Zach Stone</div>
//       </div>
//       {/* } */}

//                   </Fragment>
//               {/* } */}
//               </div>

//             {/* <FontAwesomeIcon
//               icon={faChartLine}
//               color={sideMenuIconStyle.color}
//               size={sideMenuIconStyle.size}
//             /> */}
//           </Link>
//           </div>

//           <div style={window.location.pathname === '/saving' ? styles.leftMenuSelected : styles.leftMenu} >
//           <Link
//             to='/saving'
//             className="icon"
//             style={styles.icon}
//           //onClick={() => console.log('SearchClicked')} //Actions.Search()
//           >

//             <div style={window.location.pathname === '/saving' ? styles.selectedMenuItem : styles.leftMenuTextBox}>Saving</div>

//             <FontAwesomeIcon
//               icon={faPiggyBank}
//               color={window.location.pathname === '/saving' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//               size={sideMenuIconStyle.size}
//             />
//           </Link>
//           </div>

//         {/* <div style={window.location.pathname === '/search' ? styles.leftMenuSelected : styles.leftMenu} > */}
//           <Link
//             to='/search'
//             className="icon"
//             style={styles.icon}
//           //onClick={() => console.log('SearchClicked')} //Actions.Search()
//           >

//             <div style={window.location.pathname === '/search' ? styles.selectedMenuItem : styles.leftMenuTextBox}>Search</div>

//             <FontAwesomeIcon
//               icon={faSearch}
//               color={window.location.pathname === '/search' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//               size={sideMenuIconStyle.size}
//             />
//           </Link>
//           </div>

//           {this.props.user.login !== '' &&
//           <div>

//           <div style={window.location.pathname === '/myInvestments' ? styles.leftMenuSelected : styles.leftMenu} >
//           <Link
//             to='/myInvestments'
//             className="icon"
//             style={styles.icon}
//           //onClick={() => console.log('SearchClicked')} //Actions.Search()
//           >

//             <div style={window.location.pathname === '/myInvestments' ? styles.selectedMenuItem : styles.leftMenuTextBox}>My Investments</div>

//             <FontAwesomeIcon
//               icon={faChartLine}
//               color={window.location.pathname === '/myInvestments' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//               size={sideMenuIconStyle.size}
//               // style={{paddingRight: this.getRPadding(10)}}
//             />
//           </Link>
//           </div>

//       <div style={window.location.pathname === '/linkShare' ? styles.leftMenuSelected : styles.leftMenu} >
//           <Link
//             to='/linkShare'
//             className="icon"
//             style={styles.icon}
//           //onClick={() => console.log('SearchClicked')} //Actions.Search()
//           >

//             <div style={window.location.pathname === '/linkShare' ? styles.selectedMenuItem : styles.leftMenuTextBox}>Link/Share</div>

//             <FontAwesomeIcon
//               icon={faLink}
//               color={window.location.pathname === '/linkShare' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//               size={sideMenuIconStyle.size}
//             />
//           </Link>
//           </div>

//           <div style={window.location.pathname === '/members' ? styles.leftMenuSelected : styles.leftMenu} >
//           <Link
//             to='/members'
//             className="icon"
//             style={styles.icon}
//           //onClick={() => console.log('SearchClicked')} //Actions.Search()
//           >

//             <div style={window.location.pathname === '/members' ? styles.selectedMenuItem : styles.leftMenuTextBox}>Member/Groups</div>

//             <FontAwesomeIcon
//               icon={faUser}
//               color={window.location.pathname === '/members' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//               size={sideMenuIconStyle.size}
//             />
//           </Link>
//           </div>

//   </div> }

//           <div style={window.location.pathname === '/settings' ? styles.leftMenuSelected : styles.leftMenu} >
//           <Link
//             to='/settings'
//             className="icon"
//             style={styles.icon}
//           //onClick={() => console.log('SearchClicked')} //Actions.Search()
//           >

//             <div style={window.location.pathname === '/settings' ? styles.selectedMenuItem : styles.leftMenuTextBox}>Settings</div>

//             <FontAwesomeIcon
//               icon={faCog}
//               color={window.location.pathname === '/settings' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//               size={sideMenuIconStyle.size}
//             />
//           </Link>
//           </div>

//           <div style={window.location.pathname === '/faqs' ? styles.leftMenuSelected : styles.leftMenu} >
//           <Link
//             to='/faqs'
//             className="icon"
//             style={styles.icon}
//           //onClick={() => console.log('SearchClicked')} //Actions.Search()
//           >

//             <div style={window.location.pathname === '/faqs' ? styles.selectedMenuItem : styles.leftMenuTextBox}>FAQs</div>

//             <FontAwesomeIcon
//               icon={faQuestion}
//               color={window.location.pathname === '/faqs' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//               size={sideMenuIconStyle.size}
//               style={{paddingRight: this.getRPadding(8)}}
//             />
//           </Link>
//           </div>

//           <div style={window.location.pathname === '/login' ? styles.leftMenuSelected : styles.leftMenu} >
//           <Link
//             to='/login'
//             className="icon"
//             style={styles.icon}
//           //onClick={() => console.log('SearchClicked')} //Actions.Search()
//           >

//             <div style={window.location.pathname === '/login' ? styles.selectedMenuItem : styles.leftMenuTextBox}>Login</div>

//             <FontAwesomeIcon
//               icon={faSignInAlt}
//               color={window.location.pathname === '/login' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//               size={sideMenuIconStyle.size}
//             />
//           </Link>
//           </div>

//           {this.props.user.login === 'admin' &&
//           <div>

//       <div style={{ fontSize: 12, lineHeight: 1, color: '#fff', borderBottom: '1px solid #e8e8e8' }}>Admin</div>
//       <div style={window.location.pathname === '/editProjects' ? styles.leftMenuSelected : styles.leftMenu} >
//         <Link
//           to='/editProjects'
//           className="icon"
//           style={styles.icon}
//         //onClick={() => console.log('SearchClicked')} //Actions.Search()
//         >

//           <div style={window.location.pathname === '/editProjects' ? styles.selectedMenuItem : styles.leftMenuTextBox}>Edit Projects</div>

//           <FontAwesomeIcon
//             icon={faCalculator}
//             color={window.location.pathname === '/editProjects' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//             size={sideMenuIconStyle.size}
//             style={{ padding: 2 }}
//           />
//         </Link>
//       </div>

//       <div style={window.location.pathname === '/editUsers' ? styles.leftMenuSelected : styles.leftMenu} >
//         <Link
//           to='/editUsers'
//           className="icon"
//           style={styles.icon}
//         //onClick={() => console.log('SearchClicked')} //Actions.Search()
//         >

//           <div style={window.location.pathname === '/editUsers' ? styles.selectedMenuItem : styles.leftMenuTextBox}>Edit Users</div>

//           <FontAwesomeIcon
//             icon={faUsers}
//             color={window.location.pathname === '/editUsers' ? styles.selectedMenuItem : sideMenuIconStyle.color}
//             size={'1x'}
//             style={{ position: 'relative', padding: 9 }}
//           />
//         </Link>
//       </div>
//       </div>     }
//     </div>

//       </Fragment>
//       );
//   }
// }

// // const mapStateToProps = state => ({
// //   user: state.user,
// // });

// export default MainMenu;
// //export default Header;
