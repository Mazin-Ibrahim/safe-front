<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <label for="">BY COMPANY</label>
        <select class="form-control" @change="getProductsByCompany($event)">
          <option value=""></option>
          <option
            v-for="company in companies"
            :key="company.id"
            :value="company.id"
            >{{ company.name }}</option
          >
        </select>
      </div>
      <div class="col-md-3">
        <label>BY MAIN CATEGORY</label>
        <select class="form-control" @change="getSubcategories($event)">
          <option value=""></option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
            >{{ category.name }}</option
          >
        </select>
      </div>
      <div class="col-md-3" v-if="subcategories.length > 0">
        <label>BY SUBCATEGORY</label>
        <select class="form-control" @change="getProductsBySubcategory($event)">
          <option value=""></option>
          <option
            v-for="category in subcategories"
            :key="category.id"
            :value="category.id"
            >{{ category.name }}</option
          >
        </select>
      </div>

      <div class="col-md-3" v-if="subcategories.length > 0">
        <label>BY SUBCATEGORY CHILDS</label>
        <select
          class="form-control"
          @change="getProductsBySubcategoryChild($event)"
        >
          <option value=""></option>
          <option
            v-for="category in subcategoryChilds.childs"
            :key="category.id"
            :value="category.id"
            >{{ category.name }}</option
          >
        </select>
      </div>
    </div>

    <div class="row" style="margin-top:7rem;">
      <div class="col-md-3" v-for="product in products" :key="product.id">
        <div class="card" style="width:18rem;padding:20px;">
          <img
            style=" border-radius:4px; width:200px; height:150px; object-fit:cover"
            :src="
              $store.getters.imagePath + 'storage/' + product.images[0].path
            "
            class="card-img-top"
            alt="image hear"
          />
          <div class="card-body">
            <h5 class="card-title">PRICE :{{ product.price }} $</h5>
            <p class="card-text">
              {{ product.name }}
            </p>
            <a href="#" class="btn btn-primary">Add card</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category_id: "",
      company_id: "",
      childsSubCategories: [],
    };
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },

    categories() {
      return this.$store.getters.allCategories;
    },

    subcategories() {
      return this.$store.getters.allSubcategories;
    },

    subcategoryChilds() {
      return this.$store.getters.allSubcategorychilds;
    },

    companies() {
      return this.$store.getters.allCompanies;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getCategories");
    this.$store.dispatch("getCompanies");
  },

  methods: {
    getSubcategories(event) {
      let category_id = event.target.value;
      let company_id = this.company_id;
      this.category_id = category_id;
      this.$store.dispatch("getSubcategories", category_id);
      this.$store.dispatch("getProducts", { category_id, company_id });
    },

    getProductsByCompany(event) {
      let category_id = this.category_id;
      let company_id = event.target.value;
      this.company_id = company_id;
      this.$store.dispatch("getProducts", { category_id, company_id });
    },

    getProductsBySubcategory(event) {
      let category_id = event.target.value;
      let company_id = this.company_id;
      this.category_id = category_id;
      this.$store.dispatch("getProducts", { category_id, company_id });
      this.$store.dispatch("getSubcategorychilds", category_id);
    },

    getProductsBySubcategoryChild(event) {
      let category_id = event.target.value;
      let company_id = this.company_id;
      this.category_id = category_id;
      this.$store.dispatch("getProducts", { category_id, company_id });
    },
  },
};
</script>

<style></style>
