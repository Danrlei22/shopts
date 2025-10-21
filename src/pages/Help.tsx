import Simplelayout from "../components/Layout/SimpleLayout";

const Help: React.FC = () => {
  return (
    <Simplelayout>
      <section className="section-container">
        <h1>ShopTS Help Center</h1>

        <div className="section-body">
          <p>
            We're here to help you navigate and understand the functionality of
            our demo store.
          </p>
          <br />

          <h2>How to Buy and Browse</h2>
          <h3>1 - Add to Cart</h3>
          <p>
            Click the "Buy" button (or cart icon) on the products you wish to
            purchase. The item will be instantly added to your shopping cart.
          </p>
          <h3>2 - View Cart</h3>
          <p>
            The cart icon in the top navigation bar displays the total number of
            items. Click it to review your order, adjust quantities, or remove
            products.
          </p>
          <h3>3 - Search Products</h3>
          <p>
            Use the search bar at the top to find specific items by name or
            category.
          </p>
          <h3>4 - Apply Filters</h3>
          <p>
            (If applicable, for filters/categories) Use the sidebar or top menu
            to filter products by category, price, or special offers.
          </p>
          <h3>5 - Complete Purchase</h3>
          <p>
            From the cart, click "Proceed to Checkout" to simulate the purchase
            process and calculate the order total.
          </p>

          <h2>About ShopTS (important!)</h2>
          <h3>6 - Real Transactions</h3>
          <p>
            <strong>
              ShopTS is a demonstration and portfolio application.
            </strong>{" "}
            No real financial transactions will be processed. All prices and
            products are simulated.
          </p>
          <h3>7 - Usage Data</h3>
          <p>
            Items added to the cart and your usage states are stored only
            locally in your browser. If you clear your browser data, the cart
            will be emptied.
          </p>
          <h3>8 - Technical Questions</h3>
          <p>
            For questions regarding the project's technologies and architecture,
            please reach out via our Contact page.
          </p>
        </div>
      </section>
    </Simplelayout>
  );
};

export default Help;
