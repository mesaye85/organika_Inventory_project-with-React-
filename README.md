# Organika

A small React grocery storefront: a product catalog with quantity pickers, a to-do page, and placeholder home and cart pages.

## Context

I built this in September 2020 while learning React in a class; the commit messages ("assinment 2", "session 4", "review") follow the sessions. Despite the repo name, it has no inventory management.

## Stack

- React 16.13, Create React App (react-scripts 3.4.3)
- react-router-dom 5.2
- Bootstrap 3.4.1 from npm (the markup uses Bootstrap 4 class names), Font Awesome 4 icons
- reactstrap 8.6 is installed but not used

## Running it

```
npm install
npm install --no-save font-awesome@4.7.0
NODE_OPTIONS=--openssl-legacy-provider npm start
```

The second line is needed because `src/components/navBar.jsx` imports Font Awesome, which was never added to `package.json`. The OpenSSL flag is needed on Node 17 and later because react-scripts 3.x uses webpack 4. With both, it compiles on Node 22 (checked October 2026). Open http://localhost:3000/catalog; the home route shows only the navbar and footer (see below).

## Status

Archived. Not maintained.

## Known gaps

- `package.json` is missing `font-awesome`, so a clean install fails to build.
- `src/App.js` line 26 passes `Home` to `exact` instead of `component`, so `/` renders no page content. The brand link goes to `/home` (`src/components/navBar.jsx` line 15), which has no route. The cart badge is a hardcoded `16` (line 54).
- `src/components/item.jsx` lines 25-28 write the `QuantitiyPicker` props as child text, so `minimum` and `onValueChange` never arrive. Clicking + throws a TypeError and the item total never updates. `QuantitiyPicker.jsx` line 26 also reads `this.state.Quantity` (capital Q).
- Each item shows the heading "Products" instead of its title, and every image has `alt="Product"` (`item.jsx` lines 18-19).
- `src/components/catalog.jsx` collects `item.catagory` (line 76) instead of `item.category`, so the category filter renders empty boxes. `getCatagoryClass` returns the string `"catClass"` instead of the variable (line 53), and `setState` is called inside the loop (line 78).
- `src/components/todo.jsx`: the Add button has no `onClick` (line 20), so `addTodo` never runs. List items have no `key`.
- Product data is a hardcoded array in `src/services/itemService.js`, and two products share `img-15.jpg`. Nothing persists, and the cart page is a placeholder.
- Bootstrap 3 is installed but the components use Bootstrap 4 classes (`navbar-expand-lg`, `nav-item`, `mr-auto`, `btn-outline-success`), so much of that styling doesn't apply. `src/components/item.css` styles global `h5`/`h6` (light yellow on white) and other components' classes.
- `public/images` has 57 files; the product data uses 7. `public/Nike Shoes.jpeg` is unused too.
- `src/App.test.js` is the default CRA test and fails. The page title is still "React App".
- The 2020 dependency tree reports a couple of hundred `npm audit` advisories. Fine for local viewing, not for deployment.

## What I'd do differently now

- Get one page working end to end, with a test, before adding the next one.
- Keep data behind a small API from the start, even a JSON file served locally.
- Fix lint warnings and console errors as I go; most of these bugs show up there.
