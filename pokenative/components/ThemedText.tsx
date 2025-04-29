import {StyleSheet, Text, type TextProps} from 'react-native';

type Props = TextProps & {
    variant?: string,
    color?: string,
}

export function ThemedText ({variant, color, ...rest}: Props) {
    return <Text {...rest}/>
}

const styles = StyleSheet.create({
    body3: {
        fontSize: 10,
        lineHeight: 16
    }
})