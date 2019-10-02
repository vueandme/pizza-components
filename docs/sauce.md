# And then there was Sauce

> Slots: renderless and high order components

Now that we saw the fist technique on how to reuse our code and repeat it as less as possible let's have a discussion about it:

- What was good?
- What was less good?
- What did you felt was missing or could have been better?

---

## I don't like mixins, and probably you should not to

> And I maintain a library with circa 1k lines in mixins, used across several components

### What?

## What?

# What?

( I just broke all the markdown rules with this 3 what )

---

<br>

> While in some precise cases they make sense they have some precise disadvantages:

- Collisions
- Lack of 'visibility'
- They are not 'time proof'

They enforce a 'jumping' developing experience where we are forced to jump across files, and files block, fragmenting our attention and mental resources.
So we go back to component factories? Copy-pasted code?

## No, we use slots

We saw the definition of renderless components, and high order components, and we also briefly saw slots in actions. Now let's move on an example:

`listMixin.js`: ( probably )

```javascript
import { ingredientData } from '@/api/data'

export default {
  data() {
    return {
      loading: false,
      list: []
    }
  },
  computed: {
    sorted() {
      return [...this.list].reverse()
    }
  },
  methods: {
    async loadData() {
      this.loading = true
      this.list = await ingredientData()
      this.loading = false
    }
  },
  created() {
    this.loadData()
  }
}
```

Let's rewrite this as a components that uses slots

```html
<template>
  <div>
    <!-- create a slot for the loading state  -->
    <slot name="loading" v-if="loading"> Loading </slot>
    <!-- default slot to which we bind what we want to expose to the children of this component -->
    <slot v-else="slot" :list="list"></slot>
  </div>
</template>

<script>
  export default {
    name: 'ListBehavior'
    data() {
      return {
        loading: false,
        list: []
      }
    },
    computed: {
      sorted() {
        return [...this.list].reverse()
      }
    },
    methods: {
      async loadData() {
        this.loading = true
        this.list = await ingredientData()
        this.loading = false
      }
    },
    created() {
      this.loadData()
    }
  }
</script>
```

And we will use this like this:

```html
<template>
  <ListBehavior>
    <template #default="{list, loadData}">
      <IngredientItem v-for="item in list" ...>
    </template>
    <template #loading>
      LOADING <!-- We like loading in CAPS  -->
    </template>
  </ListBehavior>
</template>
<script>
import ListBehavior from '...';
export default {
  components: {
    ListBehavior
  }
}
</script>
```

> The above component is a component that uses scoped slots to encapsulate the functionality of the mixin

The main differences from a mixin are:

- We can 'SEE" properties and methods in our template
- We can write reusable DOM and behavior
- The scoped properties are only available in the template 😟
- Added complexity for the page to build the components / component tree

## Renderless components / High order Components

The above component is not a renderless component, infant it renders a `div` around his children. If we want a component that do not add any markup
we can use two techniques:

### One slot in the template

```html
<template>
  <slot :someProp="someProp"></slot>
</template>
```

### Render function

```javascript
export default {
  render() {
    return this.$scopedSlots.default({
      someProp: this.someProp
    })
  }
}
```

For this practical example the two are exactly identical solutions, I personally prefer to use render function when there is no added markup.

### Why I would use a renderless component

- Data provider, Like 'ListBehavior'
- Extract and reuse ( same use cases as mixins )
- We want to enhance an existing component with some new behavior

### How should I test this

Testing here follow the same pattern, we want to be sure that the business logic is sound by testing critical computed properties and methods.

# The exercise

Take the blender and throw it out of the window! let's remake our `IngredientItem` `IngredientList` and `IngredientDropdown` by refactoring the mixin into a component that uses slot scopes.

- Don't forget to replicate all the functionality by using all the tools that we saw
- Don't forget the tests.

## Buddy refactor

Nico from the future is not very concerned about his ingredients supply, he wants you to implement the following:

- Every time the user hover on an item in the list call the api `maybeIsGettingThat(id)`
- Every time the user clicks and select on ingredient call the api `heIsGettingIt(id)`
- Every time the user clicks to 'deselect' an ingredient call the api `nopeHeIsNot(id)`

> this 'api' calls are mocked in `/api/monitoring.js` and can be imported from it

Let's head on and see some juicy [tips and tricks](/docs/composition)
