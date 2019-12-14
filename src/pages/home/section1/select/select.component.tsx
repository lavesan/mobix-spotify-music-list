import React from 'react';
import Select from 'react-select'
import { SelectComponentProps } from './select.types';

export default ({ options, placeholder, onChange }: SelectComponentProps) => (
    <Select options={options} placeholder={placeholder} onChange={onChange} />
)