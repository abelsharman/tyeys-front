export async function getServerSideProps(pageContext: any) {
  // category_slug
  // product_slug
  const { prefetch, axios, routeParams } = pageContext;
  const { category_slug, product_slug } = routeParams;

  let info = {};
  let isError = false;
  try {
    info = await prefetch(`product-${product_slug}`, () =>
     axios(`products/${category_slug}/${product_slug}/`).then((res: any) => res.data),
    );
  } catch (e) {
    isError = true;
  }

  return {
    category_slug,
    product_slug,
    info,
    isError,
  };

  return Promise.resolve();
}

export function getRawMetaInfo() {
  return {
    title:
      '<title>Главная страница</title>',
    description:
      '<meta name="description" content="Главная страница">',
  };
}