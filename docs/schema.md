# The Grand Pizza Making Schema

> Components classification

If there is one key concept here is:

---

## Single responsability

this should be kept in mind _all the time_ while working on a component structure

---

## Smart components

> Smart components contain business logic, they are usually complex components and integrate several dumb components

### When

We use smart components to implement a piece of business logic and to coordinate and display several dumb components

### Why

We want Business logic to be contained in one single place, following the single responsability principle.

### How

Smart components do not contain much UI / styles, mostly they aggregate and conditionally represent dumb components.

### Example

```html
<template>
  <div class="AnalogClock">
    <AnalogNumber :value="hour" />
    <AnalogNumber :value="minutes" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        minute: '00',
        hour: '00'
      }
    },
    mounted() {
      this.calcualteTime()
    },
    methods: {
      ...
    }
  }
</script>
```

## Dumb components

> Dumb components do not have any business logic, their purpose is to encapsulate a concept or UI piece and render it.

### When

D.C. are what should be the majority of the compoennts that we design, buttons, list, list elements are all candidate to be dumb components

### Why

Once again we want to enforce single responsability pattern as much as possible, delegating the responsability for a piece of ui to a single component

### How

Business logic is banned, D.C. emit events in response to a user action and display a customisable ( or not ) UI portion.

### Example

```html
<template>
  <div class="AnalogNumber">
    <div class="Left">
      {{left}}
    </div>
    <div class="Right">
      {{right}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: '00'
      }
    },
    computed: {
      left() {
        return this.value.split('')[0]
      },
      right() {
        return this.value.split('')[1]
      }
    }
  }
</script>
```

## Renderless component

> A renderless component do not render any markup on his own, but it directly render his children or instantiate some kind of logic

### When

Renderless componments are commonnly used to provide shared functionality, or to wrap third party libraries.

### Why

When there is a need to add some functionality to an existing component or reuse said functionality, and there is no need to provide additional markup

### How

The component has no template and in 99% of the cases no css, it uses a render function to render his default slot

### Example

```js
export default {
  render() {
    return this.$slots.default({})
  },
  mounted() {
    this.recordComponentLoad()
  }
}
```

## High order components

> H.O.C. are a way to promote reusability and cleaner code the aim is to take a component and return a new component with added functionality
> Normaly they are defined like this

```javascript
const hoc = component => {
  return Vue.component('enhancedComponent', {
    render(h) {
      return h(component)
    }
}
```

But this is an adaptation on how things are done in react, in vue when we want to achieve the same functiionalty we use slots and scoped slots

```javascript
export default {
  name: 'MyCoolHoc',
  render() {
    return this.$slots.default({
      doSomething: this.doSomething
    })
  },
  methods: {
    doSomething() {}
  }
}
```

Does this look familiar? Yes it does because it's very similar to a renderless component, as a matter of fact an HOC is always a renderless component.

How to use the above component? Like this:

```html
<template>
  <div>
    <MyCoolHoc>
      <template #default="{doSomething}">
        <button @click="doSomething">SOMETHING</button>
      </template>
    </MyCoolHoc>
  </div>
</template>
```

## The exercise

> But now enough basic theory! Time to flex our fingers and crack our nuckles

Nico from the future has already prepared his request, by using what we have learned about **Smart** and **Dumb** components we need to create an ingredient list.
You can find a template for the two components in the folder: `componets/IngredientItem` and `componets/IngredientList` the components are loaded <a href="/schema" target="_blank"> here </a>

### The list should include

- Picture of the ingredient
- Name
- Clicking on an item should 'select it'

## Buddy refactor:

No code is shippend to production without a refactor or two... and now is time to **switch** push your code to git with your name as a branch name, pick a partner and let him/her do the refactor for you while you do the refactor for him/her, no talking between the two are allowed!

- Some ingredients need to be highlited, so they need to be set double the size
- Now we also need a new component `IngridientDropdown`

> We just let someone else refactor our code without any single test. SHAME! No worries, time to see how to quickly and efficently test our components

Let's head to [Tasting your components](/docs/tasting)
