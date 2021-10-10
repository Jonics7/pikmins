export type FieldType = 'string' | 'number' | 'date' | 'struct';

export interface Field {
    id: string;
    type: FieldType;
    description?: string;
}

export interface Dataset {
    urn: string;
    title: string;
    tags?: string[];
    price?: number;
    rows?: number;
    fields: Field[];
}

export interface Output {
    datasets: DatasetMods[];
}

export interface DatasetMods {
    urn: string;
    filters: Filter[];
    newFields: NewField[];
}

export interface Filter {
    fieldId: string;
    type: 'range';
    min: number;
    max: number;
}

export interface NewField {
    id: string;
    type: FieldType;
    action: string;
    item1: string;
    item2: string;
}
