import type { ViewStyle } from 'react-native';
import { Card } from '@/components/Card';
import { ThemedText } from '@/components/ThemedText';
// import { View } from 'react-native';

type Props = {
    style?: ViewStyle,
    id: number,
    name: string
}

export function PokemonCard ({style, id, name}: Props) {
    return <Card style={style}>
        <ThemedText variant="caption" color="grayMedium">#{id.toString().padStart(3, '0')}</ThemedText>
    </Card>
}