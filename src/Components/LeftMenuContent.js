import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
// // import { updateLeftScrollBarMargin, updateRightScrollBarMargin, updateBackgrounColor, updateSidemenuBodyWidth, updateContentBodyWidth, updateIconWidthMultiplier } from '../reducers/user';
// import { isBrowser, isMobile } from 'react-device-detect';

class LeftMenuContent extends Component {
    state = {
      
        };

    render() {
        
      const styles = {  
          LeftContent: {
              
          }
        }
    
        return (
            <div className="LeftContent" style={styles.LeftContent}>
               
                <ul>
                    Left Menu Content
                </ul>
                <ul>
                    Left Menu Content
                </ul>
                <ul>
                    Left Menu Content
                </ul>
                <ul>
                    Left Menu Content
                </ul>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
  });
  
  export default connect(mapStateToProps)(LeftMenuContent);