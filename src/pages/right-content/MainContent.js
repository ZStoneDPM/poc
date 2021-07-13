import React, { Component } from "react";
import { connect } from "react-redux";
import { isBrowser } from 'react-device-detect';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import reactNativeImage from "../../Assets/statejs.png";


class MainContent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     contentBodyWidth: this.props.user.contentBodyWidth,
  //   };
  // }

  render() {
    const styles = {
      MainContent: {
        maxWidth: isBrowser ? window.visualViewport.width - this.props.user.sideMenuBodyWidth - 20 : window.visualViewport.width ,
        transition: 'all 0.3s ease-out',
      },
      Paragraph: {
        maxWidth: window.visualViewport.width - 50,//minus padding both sides
        padding: 25,
        transition: 'all 0.3s ease-out',
      },
      images: {
        height: "auto",
        width: isBrowser ? ((window.visualViewport.width * .5) - (this.props.user.sideMenuBodyWidth * .25)) : '100%',//minus padding
        // maxWidth: isBrowser ? 640 - this.props.user.sideMenuBodyWidth : window.visualViewport.width,//window.innerWidth,
        padding: isBrowser ? 10 : 'inherit',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        transition: 'all 0.3s ease-out',
      },
      centeredTextAndImage: {
        display: 'grid',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: isBrowser ? 'inherit' : '.75rem',
        transition: 'all 0.3s ease-out',
      }
    };
    return (
      <div className="MainContent" style={styles.MainContent}>
        <div className="Paragraph" style={styles.Paragraph}>
          <p>
            This demo app is intended for sharing app potential ideas and POC
            'proof of concept' in using affordable, lower cost cross-platform
            solutions of mobile media.
          </p>
    
          <p>
            Instead of using Java or Swift to build cross-platform mobile apps
            react-native offers a great solution. Build just once in
            Javascript/jsx and compile for both popular mobile platforms.
          </p>
          <b>
            <p>Android:</p>
          </b>
          The official language for Android development is <ins>Java</ins>(often
          Kotlin for Android). Large parts of Android are written in Java and
          its APIs are designed to be called primarily from Java. It is possible
          to develop C and C++ app using the Android Native Development Kit
          (NDK), however it isn't something that Google promotes.
          <b>
            <p>IOS:</p>
          </b>
          <p>
            <ins>Swift</ins>(also Objective-C for iOS) is a powerful and
            intuitive programming language for macOS, iOS, watchOS, tvOS and
            beyond. Writing Swift code is interactive and fun, the syntax is
            concise yet expressive, and Swift includes modern features
            developers love.
          </p>
          <p>What are the cons to programming in Java or/AND Swift?</p>
          <ul>
            <li>higher cost two programming teams</li>
            <li>
              two versions of ui, because native functions work differently
            </li>
            <li>faster development times</li>
            <li>easier bug fixes and testing</li>
          </ul>
          <p>
            Why react native is bad? A bigger problem with React Native is the
            fact, that it does not fully support all native features available
            within iOS and Android. ... Especially when it comes to navigation
            components for screen transitions, React Native really lacks
            supporting the native look and feel of iOS and Android apps.Jan 4,
            2018
          </p>
          <p>
            In past experience, building a beautiful app for Android in React
            Native and attempting to build for IOS lead to thousands of errors.
            Companies like AirBnB moved away from 100% React Native for this
            reason.
          </p>
          <p>
            Since then, there have been new ways to get the results you want
            without the errors. https://github.com/necolas/react-native-web is a
            library which allows React Native code to be run in React.
          </p>
          <p>
            Other methods are using React Native's webview to pass information
            back and forth between React Native and React.
          </p>
          <section>
            <p>
              Here's an external blog that also speaks of pros and cons of React
              Native for mobile developmnent
            </p>

            <a href="https://www.polidea.com/blog/react-native-vs-native-app-developmentpros-and-cons-for-business/">
              Polidea - React Native - Pros and Cons
            </a>
          </section>
          <p></p>
        
          </div>

<div style={styles.centeredTextAndImage}>
          <em>
            Mobile development frameworks popularity. Source:
            <a href="https://2018.stateofjs.com/mobile-and-desktop/overview/">
             
            </a>
            <a
              href="https://2019.stateofjs.com/mobile-desktop/"
              alt="Mobile Develpement Popularity"
              target="_blank"
              rel="noreferrer"
            >
              State of JS 2019.
            </a>
          </em>
          <img src={reactNativeImage} alt="image1" style={styles.images} />
          </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

// export default MainContent;
export default connect(mapStateToProps)(MainContent);