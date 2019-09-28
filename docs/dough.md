# First it was the dough

> Reuse with mixins

Did you notice something while working on `IngridientDropdown` ? isn't that very similar to `IngridientList` ? don't we have some duplicated methods / computed ?
I guess we do! The first approach that we are going to explore to DRY up our codebase is by using mixins, let's lay down soome rules / best practices.

## Mixins do's

- Prepend computed and methods with `$_`
- Keep it self contained

## Mixin don'ts

- 'Use' a computed, method or data property from the component
- Use another mixin
- Write huge mixins

## What is a mixin

A mixin is an object that when imported in a component gets merged on top of it, adding: methods, computed properties, data object, lifecycle hooks and watchers.
We can think of a mixin as a component without a template.

An example

`myMiixin.js`:

```javascript
export default {
  data() {
    return {
      $_mixinData: 1
    }
  },
  computed: {
    $_mixinComputed() {
      return this.$_mixinData + 1
    }
  },
  methods: {
    $_increment() {
      this.$_mixinData += 1
    }
  },
  mounted() {
    console.log(this.$_mixinData)
  }
}
```

`myComponent.vue`

```html
<template>
  <div>
    <button @click="$_increment">+</button>
    {{ $_mixinData }} | {{ $_mixinComputed }}
  </div>
</template>
<script>
  import myMiixin from './myMiixin.js'
  export default {
    mixins: [myMiixin]
  }
</script>
```

## Some rules

- If there is an attribute declared in both the mixin and the component (collision) the component overrides the mixin
- Mixins are merged left to right, this means that if there are collision between mixins the last one 'wins'
- `data`, `computed`, `methods`, `watch` are merged
- Lifecycle hooks are all executed, mixins first, component later

> Questions?

## The Exercise

It's time to refactor `IngredientList` and `IngredientDropdown` to use a mixin that encapsulate:

- Api `call`
- Sorting of the items
- Any other common prop or data or computed

### Testing

Anything that provides a shared behaviour should be extensively tested, so let's not forget to unit test for our new mixin

> When you feel confortable push to git

## Buddy refactor

Nico from the future is never satisfied, he wants you to:

- remove the sorting on the List and let the sortind be dictated by API
- add a loading spinner while the API call is being processed on both lists

> Don't forget the tests!

No pizza can be called pizza without a sauce! Let's move on [sauce](/docs/sauce)
