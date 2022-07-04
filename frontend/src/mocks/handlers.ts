import createMixins from '@mui/material/styles/createMixins';
import { rest } from 'msw';

export const handlers = [
    rest.get('http://127.0.0.1:8000/api/results', (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    results: [
                        {
                            id: 11,
                            prefecture: "北海道",
                            city: "函館市",
                            ward: null,
                            total_population: 265979,
                            those_under_15: 27131,
                            those_between_15_and_64: 152154,
                            those_over_65: 85931,
                            kindergartens: 23,
                            elementary_schools: 48,
                            junior_high_schools: 32,
                            high_schools: 15,
                            hospitals: 29,
                            population_trends: -4.71,
                            move_in_ratio: 3.38,
                            move_out_ratio: 3.72,
                            primary_industry_ratio: 3.53,
                            secondary_industry_ratio: 16.64,
                            tertiary_industry_ratio: 73.84,
                            cluster: 3
                        }
                    ]
                })
        )
    }),
    rest.get('http://127.0.0.1:8000/api/results/:pref/:cluster', (req, res, ctx) => {
        const prefecture = req.url.searchParams.get('pref')
        const cluster = req.url.searchParams.get('cluster')
        return res(
            ctx.json({prefecture}),
            ctx.json(
                {
                    results: [
                        {
                            id: 11,
                            prefecture: "北海道",
                            city: "函館市",
                            ward: null,
                            total_population: 265979,
                            those_under_15: 27131,
                            those_between_15_and_64: 152154,
                            those_over_65: 85931,
                            kindergartens: 23,
                            elementary_schools: 48,
                            junior_high_schools: 32,
                            high_schools: 15,
                            hospitals: 29,
                            population_trends: -4.71,
                            move_in_ratio: 3.38,
                            move_out_ratio: 3.72,
                            primary_industry_ratio: 3.53,
                            secondary_industry_ratio: 16.64,
                            tertiary_industry_ratio: 73.84,
                            cluster: 3
                        }
                    ]
                })
        )
    }),
    rest.get('http://127.0.0.1:8000/api/results/:city', (req, res, ctx) => {
        const cluster = req.url.searchParams.get('city')
        return res(
            ctx.json(
                {
                    results: [
                        {
                            id: 11,
                            prefecture: "北海道",
                            city: "函館市",
                            ward: null,
                            total_population: 265979,
                            those_under_15: 27131,
                            those_between_15_and_64: 152154,
                            those_over_65: 85931,
                            kindergartens: 23,
                            elementary_schools: 48,
                            junior_high_schools: 32,
                            high_schools: 15,
                            hospitals: 29,
                            population_trends: -4.71,
                            move_in_ratio: 3.38,
                            move_out_ratio: 3.72,
                            primary_industry_ratio: 3.53,
                            secondary_industry_ratio: 16.64,
                            tertiary_industry_ratio: 73.84,
                            cluster: 3
                        },

                    
                    ]
                })
        )
    }),

]