import { Visual } from "@raber/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

export const VButton = Visual.Comp(({
    variant,
    text
}) => {

    // 每次组件渲染额时候，上报一次 UI 配置
    // 每次组件渲染时，从 context 读取 props 配置，然后渲染组件，
    // 不从 props 注入，采用截获的方式

    // 构思文案，子组件：

    // 子组件必须有一个唯一的 key，用于区分不同的子组件

    const styles = useStyle();


    const vVariant = useEnum('variant', 
    {
        key: 'variant',
        default: variant,
        uiConfig: {
            type: 'select',
            options: [
                { label: 'Solid', value: 'solid' },
                { label: 'Outline', value: 'outline' },
                { label: 'Ghost', value: 'ghost' },
                { label: 'Unstyled', value: 'unstyled' },
                { label: 'Link', value: 'link' },
            ]
        },
        title: '按钮类型'
    });

    const vText = useText('Text', {
        key: 'text',
        default: text,
        uiConfig: {
            type: 'input',
            placeholder: '请输入文本'
        },
        title: '内部文本'
        });

    return <Button variant={variant}>{vText}</Button>;
}, {
    category: 'Etherum',
    name: 'VButton',
    description: 'A simple button',
});