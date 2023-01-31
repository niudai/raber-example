import { Visual } from "@raber/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

export const VButton = Visual.Comp(({
    variant
}) => {
    const vVariant = useEnum('Variant', ['solid', 'outline', 'ghost', 'unstyled', 'link'], {
        default: variant
    });

    const vText = useText('Text', {
        default: text,
        title: '内部文本'
        });

    return <Button variant={variant}>{vText}</Button>;
}, {
    category: 'Etherum',
    name: 'VButton',
    description: 'A simple button',
});