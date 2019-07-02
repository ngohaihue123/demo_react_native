import {createStackNavigator, createAppContainer} from 'react-navigation';
import SearchPage from "./src/components/SearchPage";
import ItemSearchResult from "./src/components/ItemSearchResult";

const MainNavigator = createStackNavigator({
    SearchPage: {screen: SearchPage},
    ItemSearchResult: {screen: ItemSearchResult},
}, {
        headerMode: 'none',
    });

const App = createAppContainer(MainNavigator);

export default App;
