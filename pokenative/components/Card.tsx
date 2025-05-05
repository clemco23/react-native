import { Shadows } from "@/constants/Shadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useTheme } from "@react-navigation/native";
import {View, type ViewProps, type ViewStyle } from "react-native";

type Props = ViewProps

export function Card ({style, ...rest}: Props) {
    const Colors = useThemeColors()
    return <View style={[style, styles, {backgroundColor: Colors.grayWhite}]} {...rest}/>
}

const styles = {
    borderRadius: 8,
    marginTop: 0.5,
    ...Shadows.dp2,
} satisfies ViewStyle