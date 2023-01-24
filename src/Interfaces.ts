export interface ProductsInformations {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

export type ProductsShowcase = ProductsInformations[];