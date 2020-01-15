import { Movie } from './movie';

export class Order{
    id: number;
    email: string;
    name: string;
    address: string;
    card: number;
    total_price: number;
    movies: Movie[]
}