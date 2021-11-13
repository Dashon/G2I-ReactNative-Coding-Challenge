import React from "react";
import { Scene, Router } from "react-native-router-flux";
import { GamePlayScreen, HomeScreen, ResultsScreen, SettingsScreen } from "./screens";
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main" hideNavBar={true}>
        <Scene key="home" component={HomeScreen} initial />
        <Scene key="gameSettings" component={SettingsScreen}  />
        <Scene key="gamePlay" component={GamePlayScreen} />
        <Scene key="gameOver" component={ResultsScreen} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;