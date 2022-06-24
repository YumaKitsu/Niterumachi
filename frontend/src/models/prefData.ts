export default interface PrefData {
    id?: number;
    prefecture: string;
    city: string;
    ward: string | null;
    total_population: number;
    those_under_15: number;
    those_between_15_and_64: number;
    those_over_65: number;
    kindergartens: number;
    elementary_schools: number;
    junior_high_schools: number;
    high_schools: number;
    hospitals: number;
    population_trends: number;
    move_in_ratio: number;
    move_out_ratio: number;
    primary_industry_ratio: number;
    secondary_industry_ratio: number;
    tertiary_industry_ratio: number;
    cluster?: number;
};

