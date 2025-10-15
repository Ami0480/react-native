import { Ionicons, MaterialIcons } from "@expo/vector-icons";

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  home: "home-outline",
  "people-circle": "people-outline",
};

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({ name, size = 24, color = "black" }) {
  console.log("Icon name:", name, "maps to:", MAPPING[name]);
  return <Ionicons name={MAPPING[name]} color={color} size={size} />;
}
