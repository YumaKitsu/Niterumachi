import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchField from "../SearchField";
import { test } from '@jest/globals';
import { render } from '../../utils/test-utils'
import { createMemoryHistory } from 'history'
import { Router } from "react-router-dom";




describe("Search Field", () => {
  test("disables button if the select forms are NOT selected", () => {
    render(<SearchField />);
    const button = screen.getByRole("button", { name: "探す" });
    expect(button).toBeDisabled();
  });

  test('displays "都道府県を選んで下さい" if origin-prefecture is NOT selected', async () => {
    const user = userEvent.setup();
    render(<SearchField />);

    const selectElement = await screen.findByRole("button", {
      name: "出身の市区町村",
    });
    await waitFor(() => user.click(selectElement))

    const optionElement = await screen.findByRole("option");
    expect(optionElement).toHaveTextContent("都道府県を選んで下さい");
  });

  test('displays "北海道" in the form if we select "北海道"', async () => {
    const user = userEvent.setup()

    render(<SearchField />)
    const prefSelectForm = screen.getByRole('button', {name: '出身の都道府県'})
    await waitFor(() => user.click(prefSelectForm))

    const prefOptionElement = await screen.findByRole('option', {name: '北海道'})
    await waitFor(() => user.click(prefOptionElement))
    const prefSelectedForm = await screen.findByRole('button', {name: '出身の都道府県'})
    expect(prefSelectedForm).toHaveTextContent('北海道')
  })



  test('displays city names if the origin-prefecture selected', async () => {

    render(<SearchField />)
    const prefSelectForm = screen.getByRole('button', {name: '出身の都道府県'})
    await waitFor(() => userEvent.click(prefSelectForm))

    // Setting the value of the pref-origin field to "北海道"
    const prefOptionElement = await screen.findByRole('option', {name: '北海道'})
    await waitFor(() => userEvent.click(prefOptionElement))

    const selectElement = await screen.findByRole("button", {
      name: "出身の市区町村",
    });
    await waitFor(() => userEvent.click(selectElement))

    const optionElement = await screen.findByRole("option");
    expect(optionElement).toHaveTextContent("函館市")
    
    })

    test("enables button if all the select forms are selected", async () => {

      const history = createMemoryHistory();
      
      render(
        <Router location={history.location} navigator={history}>
          <SearchField />
        </Router>
      );
  
      // Select the origin prefecture form
      const prefSelectForm = screen.getByRole("button", {
        name: "出身の都道府県",
      });
      await waitFor(() => userEvent.click(prefSelectForm));
      const prefOptionElement = await screen.findByRole("option", {
        name: "北海道",
      });
      await waitFor(() => userEvent.click(prefOptionElement)) 
  
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
  
      const button = await screen.findByRole("button", { name: "探す" });
      expect(button).toBeEnabled()
    });

});
