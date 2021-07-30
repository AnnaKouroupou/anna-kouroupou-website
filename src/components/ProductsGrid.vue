<template>
    <div class="products small">
        <div :class="{ product: true }" v-for="item in products" :key="item.node.id">
            <g-link :to="item.node.path" class="product-link">
            <g-image
                :src="item.node.photos[0]"
                :alt="item.node.title"
                class="thumbnail"
            />
            <div class="product-details">
            <h3 class="product-title">{{ item.node.title }}</h3>
            <div class="categories">
                <span class="category" v-for="(item, index) in item.node.categories" :key="index">{{ item }}</span>
            </div>
            </div>
            </g-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        small: {
          type: Boolean,
          default: false
        }
    }
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
}
.product {
  grid-column: auto / span 3;
  text-align: center;
}
.product-link {
  text-decoration: none;
}
.thumbnail {
  background-color: #F3F3F3;
  /* padding: 1rem; */
  height: 560px;
  object-fit: cover;
  transition: all 0.15s ease;
  /* box-shadow: 0 0 40px -20px rgba(0,0,0,0.25); */
}
.products.small .thumbnail {
  height: 400px;
}
.product-details {
  margin-top: 1rem; 
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-title {
  text-align: start;
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 0 2rem 0 0;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
.product:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}

@media (min-width: 920px) {
  .product {
    grid-column: auto / span 1;
  }
  /* .product:nth-child(3n+1) {
    grid-column: auto / span 2;
  } */
  .product.wide {
    grid-column: auto / span 2;
  }
}

</style>
