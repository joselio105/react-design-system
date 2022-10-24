import { Meta, StoryObj } from '@storybook/react';
import { InputText, InputTextRootProps } from "./InputText";
import { Envelope } from "phosphor-react";

export default {
    title: "Components/InputText",
    component: InputText.Root,
    args: {
        children: [
            <InputText.Icon>
                <Envelope />
            </InputText.Icon>,
            <InputText.Input placeholder='Type your email address' />
            
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
        
    }
} as Meta<InputTextRootProps>;

export const Default : StoryObj<InputTextRootProps> = {
    args: {}
}

export const WithoutIcon : StoryObj<InputTextRootProps> = {
    args: {
        children: (
            <InputText.Input placeholder='Type your email address' />
        )
    }
}