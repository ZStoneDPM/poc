import React, { Component, Fragment } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MainMenu from './MainMenu';
import MainContent from './MainContent';
import LeftMenuHeader from './LeftMenuHeader';
import LeftMenuContent from './LeftMenuContent';

class LandingPage extends Component {
    state = {
      
        };

    render() {
        const styles = {
            LeftContent: {
              backgroundColor: 'lightgrey',
              width: '30%',
              height: '100vh'
            },
            RightContent: {
              backgroundColor: 'lightblue',
              height: '100vh',
              flex: '1'
            }
          };
        return (
          <Fragment>
            <div className="LeftContent" style={styles.LeftContent}>
              <LeftMenuHeader />
              <LeftMenuContent />
            </div>
            <div className="RightContent" style={styles.RightContent}>
              <MainMenu />
              <MainContent />
            </div>
          </Fragment>
        );
    }
}

export default LandingPage;
