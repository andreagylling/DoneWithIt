import { useEffect, useState } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const requestLocation = async () => {
    try {
      const { granted } = await Permissions.askAsync(Permissions.LOCATION);
      if (!granted) return;

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestLocation();
  }, []);

  return location;
};
