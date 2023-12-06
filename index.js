/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import ToDo from './src/ToDo'

AppRegistry.registerComponent(appName, () => ToDo)
