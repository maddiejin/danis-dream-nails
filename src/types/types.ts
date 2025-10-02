

export type Service = {
    name: string;
    description?: string;
    price: string;
}
export type Section = {
    title: string;
    services: Service[];
}
