// import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class LeftMenuHeader extends Component {
    state = {
      
        };

    render() {
    
      const styles = {  
      LeftMainMenu: {
        fontSize: 35,
        color: 'darkblue',
      }
     };
        return (
            <div className="LeftMainMenu" style={styles.LeftMainMenu}>
            Menu
          </div>
        );
    }
}


export default LeftMenuHeader;