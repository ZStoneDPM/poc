import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';
import useAsync from 'redux-persist/lib/storage';
import Routing from './Router';

class App extends Component {
  constructor(props) {
    super(props);
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      myKey: null,
    };
  }
  async getKey() {
    try {
      const value = await useAsync.value('@MySuperStore:key');
      this.setState({ myKey: value });
    } catch (error) {
      console.log(`Error retrieving data ${error}`);
    }
  }

  async resetKey() {
    try {
      await useAsync.removeItem('@MySuperStore:key');
      const value = await useAsync.initialValue('@MySuperStore:key');
      this.setState({ myKey: value });
    } catch (error) {
      console.log(`Error resetting data ${error}`);
    }
  }

async saveKey(value) {
  try {
    await useAsync.setData('@MySuperStore:key', value);
  } catch (error) {
    console.log(`Error saving data ${error}`);
  }
}

// eslint-disable-next-line no-undef
renderLoading = () => (
  <div style={styles.container}>
      <Spinner animation="grow" variant="success" />
  </div>
);

  render() {
    return (
      <Provider store={store} className="App">
      <PersistGate loading={this.renderLoading()} persistor={persistor}>
        <div style={styles.root} >  
          <Routing />
        </div>
      </PersistGate>
    </Provider>
    );
    };
  } 
  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'row',
      // position: 'absolute',
      // left: 0,
      // right: 0,
      // top: 0,
      // bottom: 0,
      overflow: 'auto',
      scrollBehavior: 'smooth',
      transition: 'all 0.9s ease-out 0s',
      // backgroundImage: `url(${backgroundImage})`,
      // backgroundSize: 'cover',
      // backgroundColor: 'aqua',
      // backgroundPosition: 'center',
      // zIndex: -1000,
    }
  };

export default App;
