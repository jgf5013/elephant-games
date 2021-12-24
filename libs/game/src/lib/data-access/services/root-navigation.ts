import { createNavigationContainerRef } from '@react-navigation/native';

type RootStackParamList = {
    Home: undefined;
    Quiz: undefined;
    Settings: undefined;
    Complete: undefined
};

const navigationRef = createNavigationContainerRef<RootStackParamList>();

const navigate = (name, params={}): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export { navigationRef, navigate };