export type FieldType = 'string' | 'number' | 'date' | 'struct';

export interface Field {
    id: string;
    type: FieldType;
    description?: string;
}

export interface Dataset {
    title: string;
    tags?: string[];
    price?: number;
    rows?: number;
    fields: Field[];
}
