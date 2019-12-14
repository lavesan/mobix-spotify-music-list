export type SelectComponentProps = {
    options: SelectOption[];
    placeholder: string;
    onChange: any;
}

type SelectOption = {
    value: string;
    label: string;
}