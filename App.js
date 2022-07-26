import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import mobileAds from "react-native-google-mobile-ads";
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";

mobileAds()
  .initialize()
  .then((adapterStatuses) => {
    // Initialization complete!
    console.log("It worked!");
  });

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>POC - Admob & Expo</Text>
        <StatusBar style="light" />
      </View>
      <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
