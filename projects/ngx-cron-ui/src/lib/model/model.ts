export interface NgxCronUiConfig {
    option?: {};
    isSetDefaultValue?: boolean;
    isBaseFrequencyNewLine?: boolean;
    useTime?: boolean;
}

export interface NgxCronUiFrequency {
    baseFrequency: number;
    minutes: Array<number>;
    hours: Array<number>;
    daysOfMonth: Array<number>;
    daysOfWeek: Array<number>;
    months: Array<number>;
}

export interface NgxCronUiSelectType {
    value: number;
    type?: OptionType;
    label: string | number;
}

export enum OptionType {
    minute,
    hour,
    day,
    week,
    month,
    year
}