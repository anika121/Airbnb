/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';

import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResults';
import HomeScreen from './src/screens/Home';

import feed from './assets/data/feed'

const post2 = feed[1];
const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
				{/* <HomeScreen /> */}
				{/* <Post post={post2} /> */}
				<SearchResultsScreen />
			</SafeAreaView>
        </>
    );
};

export default App;
