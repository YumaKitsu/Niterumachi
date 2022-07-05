import { screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { render } from "../../utils/test-utils";
import { server } from "../../mocks/server";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Accommodations from "../Accommodations";

describe("Accommodations", () => {
  const history = createMemoryHistory();

  test('renders the fetched data', async () => {

    render(
      <Router location={history.location} navigator={history}>
        <Accommodations />
      </Router>
    );
    expect(await screen.findByText("函館天然温泉ルートイングランティア函館駅前", {exact: false})).toBeTruthy()
  });

  test('renders "宿泊施設が見つかりませんでした" as text if the accommodation results not found', async () => {
  
    server.use(
      rest.get('https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=函館市&applicationId=123456', (req, res, ctx) => {
        return res(ctx.json({ hotels: [] }))
      })
    )

    render(
      <Router location={history.location} navigator={history}>
        <Accommodations />
      </Router>
    );

    expect(await screen.findByText('宿泊施設が見つかりませんでした')).toBeTruthy()

  })
   

});
