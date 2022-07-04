import { act, screen, waitFor } from "@testing-library/react";
import { render } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Results from "../Results";
import SearchField from "../../components/SearchField";

describe("Results", () => {
  const history = createMemoryHistory();

  test('renders "検索結果が見つかりませんでした" as text  if the results are not found', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Results />
      </Router>
    );
    expect(
      screen.getByText("検索結果が見つかりませんでした")
    ).toBeInTheDocument();
  });

  test('renders "情報を見る" as test if the results are found ', async () => {
    render(
      <Router location={history.location} navigator={history}>
        <SearchField />
        <Results />
      </Router>
    );
    const prefSelectForm = screen.getByRole("button", {
      name: "出身の都道府県",
    });
    await waitFor(() => userEvent.click(prefSelectForm));
    const prefOptionElement = await screen.findByRole("option", {
      name: "北海道",
    });

    await userEvent.click(prefOptionElement);

    // Select the origin current form
    const selectElement = await screen.findByRole("button", {
      name: "出身の市区町村",
    });
    await waitFor(() => userEvent.click(selectElement));
    const cityOptionElement = await screen.findByRole("option", {
      name: "函館市",
    });

    await waitFor(() => userEvent.click(cityOptionElement));

    // Select the current prefecture form
    const currentPrefSelectForm = await screen.findByRole("button", {
      name: "現在お住みの都道府県",
    });
    await waitFor(() => userEvent.click(currentPrefSelectForm));
    const currentPrefOptionElement = await screen.findByRole("option", {
      name: "東京都",
    });
    await waitFor(() => userEvent.click(currentPrefOptionElement));

    const buttonElement = await screen.findByRole("button", { name: "探す" });
    await waitFor(() => userEvent.click(buttonElement));

    const linkElement = await screen.findByText("情報を見る");
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Modal if we get the results', async () => {
    render(
        <Router location={history.location} navigator={history}>
          <SearchField />
          <Results />
        </Router>
      );
      const prefSelectForm = screen.getByRole("button", {
        name: "出身の都道府県",
      });
      await waitFor(() => userEvent.click(prefSelectForm));
      const prefOptionElement = await screen.findByRole("option", {
        name: "北海道",
      });
  
      await userEvent.click(prefOptionElement);
  
      // Select the origin current form
      const selectElement = await screen.findByRole("button", {
        name: "出身の市区町村",
      });
      await waitFor(() => userEvent.click(selectElement));
      const cityOptionElement = await screen.findByRole("option", {
        name: "函館市",
      });
  
      await waitFor(() => userEvent.click(cityOptionElement));
  
      // Select the current prefecture form
      const currentPrefSelectForm = await screen.findByRole("button", {
        name: "現在お住みの都道府県",
      });
      await waitFor(() => userEvent.click(currentPrefSelectForm));
      const currentPrefOptionElement = await screen.findByRole("option", {
        name: "東京都",
      });
      await waitFor(() => userEvent.click(currentPrefOptionElement));
  
      const buttonElement = await screen.findByRole("button", { name: "探す" });
      await waitFor(() => userEvent.click(buttonElement));
  
      const linkElement = await screen.findByText("情報を見る");
      await waitFor(() => userEvent.click(linkElement))

      const modalText = await screen.findByText('総人口', {exact: false})
      expect(modalText).toBeInTheDocument()
  })
});
