const { Router } = require("express");
const router = Router();
const axios = require("axios");

const parseData = (item) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: "$",
    amount: parseInt(item.price),
    decimals: parseFloat((item.price % 1).toFixed(2)),
  },
  city: item.address.city_name,
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
});

const author = {
  name: "JOEL",
  lastname: "CRESPO",
};

router.get("/items", async (req, res) => {
  const { search } = req.query;
  try {
    let items = [];
    let categories = [];
    if (search) {
      const {
        data: { results, filters },
      } = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
      );
      if (results.length > 4) items = results.splice(0, 4);
      items = items.map((item) => parseData(item));
      const categoryFilters = filters.find((item) => (item.id = "category"));
      categories = categoryFilters
        ? categoryFilters.values[0]?.path_from_root
        : [];
    }
    res.status(200).send({ author, categories, items });
  } catch (e) {
    res.status(500).send({
      title: "Error",
      message: "Ha ocurrido un error en el servidor",
      error: e,
    });
  }
});

router.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    const {
      data: { plain_text },
    } = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
    const {
      data: { name },
    } = await axios.get(
      `https://api.mercadolibre.com/catalog_domains/${data.domain_id}`
    );
    const item = {
      id: data.id,
      title: data.title,
      price: {
        currency: "$",
        amount: parseInt(data.price),
        decimals: parseFloat((data.price % 1).toFixed(2)),
      },
      city: data.seller_address.city.name,
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: plain_text,
      category: name,
    };
    res.status(200).send({ item, author });
  } catch (e) {
    res.status(500).send({
      title: "Error",
      message: "Ha ocurrido un error en el servidor",
      error: e,
    });
  }
});

module.exports = router;
