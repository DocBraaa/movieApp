import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import Search from '../components/search/Search'
import FilmDetail from '../components/filmDetail/FilmDetail';
import Cover from '../components/cover/Cover';
import Trends from '../components/trends/Trends'
import {
  createMaterialBottomTabNavigator
} from "react-navigation-material-bottom-tabs";

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détails'
    }
  },
  Cover: {
    screen: Cover,
    navigationOptions: {
      header: null
    }
  }
})

const TrendsStackNavigator = createStackNavigator({
  Trends: {
    screen: Trends,
    navigationOptions: {
      title: 'Populaire'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détails'
    },
  },
})



// const TabNavigator = createBottomTabNavigator({
//   Trends: Trends,
// });



export default createAppContainer(createMaterialBottomTabNavigator({
  Populaire: TrendsStackNavigator,
  Recherche: SearchStackNavigator,

}, {
    // initialRouteName: Populaire,
    showIcon: true,
    activeColor: '#E06C75',
    inactiveColor: '#282C34',
    barStyle: {
      backgroundColor: '#FBC02E'
    }
}));