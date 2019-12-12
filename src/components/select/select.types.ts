export type SelectComponentProps = {
    options: SelectOption[];
    placeholder: string;
}

type SelectOption = {
    value: string;
    label: string;
}