import Screen1 from './Screen1';
import Screen2 from './Screen2';

import {Navigation} from 'react-native-navigation';

Navigation.registerComponent(`rnntest.Screen1`, () => Screen1);
Navigation.registerComponent(`rnntest.Screen2`, () => Screen2);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'rnntest.Screen1',
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
          },
          statusBar: {
            visible: false,
          },
        },
      },
    },
  });
});
