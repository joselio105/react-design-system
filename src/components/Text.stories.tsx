import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from "./Text";

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: "Loren ipsum.",
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>;

export const Small : StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Medium : StoryObj<TextProps> = {}

export const Large : StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const Custom : StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with p tag</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}