import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

//Unable to find any news-related api calls, so we'll just iframe it in
export default function NewsScreen() {
  return <WebView source={{ uri: "https://www.nhl.com/news/" }} />;
}
