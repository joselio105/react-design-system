import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputTextRootProps {
    children: ReactNode
}

const InputTextRoot = ( { children }: InputTextRootProps) => {
    return (
        <div className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'>
            {children}        
        </div>
    )
}

export interface InputTextIconProps {
    children: ReactNode
}

const InputTextIcon = ( { children }:InputTextIconProps ) => {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

export interface InputTextPropsInput extends InputHTMLAttributes<HTMLInputElement> {}

const InputTextInput = ( { ...props } : InputTextPropsInput) => {
    return (
        <input 
            className="h-12 bg-transparent flex-1 text-gray-100 text-xs ring-0 placeholder:text-gray-400 outline-none"
            {...props}
        />
    )
}

InputTextRoot.displayName = 'InputText.Root';
InputTextIcon.displayName = 'InputText.Icon';
InputTextInput.displayName = 'InputText.Input';

export const InputText = {
    Root: InputTextRoot,
    Input: InputTextInput,
    Icon: InputTextIcon
}