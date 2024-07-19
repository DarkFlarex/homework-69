export interface TvShow {
    id: number;
    name: string;
}
export interface TvShowDisplay {
    id: number;
    name: string;
    summary: string;
    image: {
        medium: string
    };
}