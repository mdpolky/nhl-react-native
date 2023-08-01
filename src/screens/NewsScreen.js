import { useRef } from "react";
import { WebView } from "react-native-webview";

//Unable to find any news-related api calls, so we'll just iframe it in
export default function NewsScreen() {
  const inputRef = useRef(null);
  return (
    <WebView
      source={{ uri: "https://www.nhl.com/news/" }}
      ref={inputRef}
      onContentProcessDidTerminate={inputRef.current?.reload}
    />
  );
}
