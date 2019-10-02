# History of a Calzone

> Exploiting provide / inject

# Intro

Provide inject is a niche api of Vue.js that allows to do the following:

- A **Father** component `provides` some functionality ( data, method )
- A **Child** component `injects` that **Father** functionality no matter how deep is the component in the components tree

Limitations:

- The data is not reactive ( by design )
- Father and child need to be in the same components tree (they can't be siblings)

In general is discouraged to use this functionality, but it opens path for reusability and customization when carefully exploited.
A pattern that I have been using recently is to reverse the flow by using provide inject:

# WHAT? 👀

Yap reversing the flow: Child components feeding data to a Parent component, WITHOUT events AND with reactivity baked in 👀 **Blasphemy**.
To untangle this twisted concept let me pull in ( a piece of ) the code for the store-locator component of storefront-ui (full code [here](https://github.com/DivanteLtd/storefront-ui/tree/master/packages/vue/src/components/organisms/SfStoreLocator))

## Store locator

```javascript
export default {
  name: "SfStoreLocator",
  provide() {
    const locatorData = {};
    Object.defineProperty(locatorData, "userPosition", { // this could be rewritten with the observable API
      enumerable: true,
      get: () => this.userPosition
    });
    return {
      registerStore: this.registerStore,
      removeStore: this.removeStore,
      centerOn: this.centerOn,
      getGeoDistance: this.getGeoDistance,
      locatorData
    };
  },
  props: {
    ...
  },
   data() {
    return {
      userPosition: null,
      stores: []
    };
  },
   methods: {
    latLngEquality(a, b) {
      return a.latlng[0] === b.latlng[0] && a.latlng[1] === b.latlng[1];
    },
    registerStore(store) {
      if (!this.stores.some(s => this.latLngEquality(store, s))) {
        this.stores = [...this.stores, store];
      }
    },
    removeStore(store) {
      this.stores = this.stores.filter(s => !this.latLngEquality(s, store));
    },
    locateUser() {
      this.$refs.map.mapObject.locate({ timeout: 20000 });
    },
    locationFound(location) {
      this.userPosition = { ...location.latlng };
      ...
    },
    getGeoDistance(start, end) {
     ...
    }
  }
};
```

## Store

```javascript
export default {
  name: "SfStore",
  inject: [
    "registerStore",
    "removeStore",
    "centerOn",
    "locatorData",
    "getGeoDistance"
  ],
  props: {
   ...
  },
  computed: {
    distance() {
      if (this.locatorData && this.locatorData.userPosition) {
        const dictLatLng = {
          lat: this.latlng[0],
          lng: this.latlng[1]
        };
        return this.getGeoDistance(this.locatorData.userPosition, dictLatLng);
      }
      return null;
    }
  },
  created() {
    if (this.registerStore) {
      this.registerStore(this.$props);
    }
  },
  beforeDestroy() {
    if (this.removeStore) {
      this.removeStore(this.$props);
    }
  }
};
```

## Description

What is happening here is that the owner of the data is `store`, whenever a `Store` component is added in the subtree of `StoreLocator` it add a store object to the list of stores and reads a reactive property called userLocation ( because `StoreLocator` is the _owner_ of the map data )

Whenever a new store object is added a `Store` component a new pin appear on the map [let's see it in action](https://storybook.storefrontui.io/?path=/story/organisms-storelocator--basic)

# The Exercise

Nico from the future wants a new component: `PizzaMaker` this components acts as follow:

- Every time an `IngredientItem` is `selected` the picture of the ingredient is displayed (only one of type)
- Clicking on the picture remove the Ingredient from the list
- An Ingredient is selected as long as it is displayed on the `PizzaMaker`

Try to implement this with the pattern that we just learned

> Don't forget to push it to GIT

## Buddy Refactor

Of course the client changed his mind, he now wants unlimited copies of the ingredients, and clicking on the picture of the ingredient add one more of the same item
