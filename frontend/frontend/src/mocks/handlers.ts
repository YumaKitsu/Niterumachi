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
    rest.get(`https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=函館市&applicationId=123456`, (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    hotels: [
                        {
                          hotel: [
                            {
                              hotelBasicInfo: {
                                hotelNo: 39297,
                                hotelName: "函館天然温泉ルートイングランティア函館駅前",
                                hotelInformationUrl: "https://img.travel.rakuten.co.jp/image/tr/api/kw/JBe8h/?f_no=39297",
                                planListUrl: "https://img.travel.rakuten.co.jp/image/tr/api/kw/3VTwt/?f_no=39297&f_flg=PLAN",
                                dpPlanListUrl: "https://img.travel.rakuten.co.jp/image/tr/api/kw/IWrzP/?noTomariHotel=39297",
                                reviewUrl: "https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=39297",
                                hotelKanaName: "はこだててんねんおんせん　るーといん　ぐらんてぃあ　はこだてえきまえ",
                                hotelSpecial: "函館駅前！　展望天然温泉大浴場完備　　観光にビジネスに最適　　全室空気清浄機あり",
                                hotelMinCharge: 6900,
                                latitude: 150377.36,
                                longitude: 506634.29,
                                postalCode: "040-0063",
                                address1: "北海道",
                                address2: "函館市若松町21-3",
                                telephoneNo: "0138-21-4100",
                                faxNo: "0138-21-4101",
                                access: "ＪＲ　函館駅より徒歩２分／函館ＩＣより車で２０分／函館空港より車で２０分／函館港より車で２０分",
                                parkingInformation: "１０２台５００円（税込/１泊）■身障者用、大型車等は事前連絡を。近隣にバス専用Ｐ有（当ホテル所轄外）",
                                nearestStation: "函館",
                                hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/39297/39297.jpg",
                                hotelThumbnailUrl: "https://img.travel.rakuten.co.jp/HIMG/90/39297.jpg",
                                roomImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/39297/39297_kan.jpg",
                                roomThumbnailUrl: "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/39297.jpg",
                                hotelMapImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/39297/39297map.gif",
                                reviewCount: 2164,
                                reviewAverage: 4.35,
                                userReview: "駅に近くて大変良かったです。寝具が小さかったです。せめて３種類くらいあればと思いました。風呂は温泉で最高でした。　2022-06-28 20:05:22投稿"
                                }
                            }
                          ]
                        }
                    ]    
                })
        )
    }),

]