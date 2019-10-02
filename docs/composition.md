# A practical guide on Ingredients composition

> Component composition tips and tricks

## Nesting slots

It's probably not the most gorgeous technique nor the most straightforward but it can come in handy to reduce the amount of code in the codebase. But vue allows to pass a slot inside another slot, to be clear let's see an example

`father`:

```html
<template>
  <Child>
    <template #default>
      <slot name="child-slot" />
    </template>
  </Child>
  <slot>
</template>
```

`child`

```html
<template>
  <slot></slot>
</template>
```

`usage`

```html
<template>
  <Father>
    <template #child-slot>
      Inside the child
    </template>
    <template #default>
      Inside the father
    </template>
  </Father>
</template>
```

### Why would you do this

The pattern here is that you may want to wrap a 'smaller' reusable component in another reusable component and need a way to populate the slots of it.
Ie: a `Card` component becoming a `FormCard`

## Mixin factories

> What?

Yap, a mixin need to be an object true, but nobody is stopping us to programmatically construct that object, syntax goes as follow

`mixinFactory`

```javascript
export default mixinFactory = (rootEndpoint)  => ({
  computed () {
    myApiURL () {
      return `${rootEndpoint}/api/something/something_else`;
    }
  }
})
```

`consumer`

```javascript
import mixinFactory from '..'

export default {
  mixins: [mixinFactory('localhost')],
  created() {
    //  don't do this, this is just an example
    this.callApi(this.myApiUrl)
  }
}
```

## Components as logical units

> The title is lame, I know

We tend to see Components as ui pieces, or at best tiny pieces of business logic created to satisfy a ui need.
While all of this is true, Components should be seen more as the smallest complete container to satisfy a need.

### Example

Let's imagine a table component, that allow the users to do data entry. on the column level they can choose the type of the data and this change how the whole column process the input: show different piece of ui, alter the internal and external representation.

By respecting the single responsibility principle we end up having a smart component called ie: `SmartCell` ( yay for the naming) that is responsible to coordinate the ui elements based on the column type and the data representation.

We write our components and everything works great, now we need to augment the functionality to export the data of the table and save it to the API. A first approach would be to read all the data cell by cell, build up a dictionary row by row and aggregate the dictionaries in an array to represent the table. As it often happens the API data model does not match completely the model that is convenient for UI needs, so we need to map those objects.

A first possible approach would be to aggregate the data 'raw' and then map it on save, but then again, every cell has a dynamic type and each type has different rules of parsing to be accepted by API:

This approach would be:

- Iterate trough the data and build the array of dictionaries
- Iterate again trough the data and convert prop by prop by respecting the types rules.

Downsides:

- We are iterating two times on a possibly big collection
- We are violating the single responsibility principle by working with the column types on two different area of our code
-

#### The crazy approach

- `SmartCell` already knows how to transform a user input to the UI model
- `SmartCell` already knows how to transform the API data to the UI model
- `SmartCell` **should also know how to transform UI model to API model!**

We can then just iterate on our SmartCell (with refs) and build our dictionary in one single pass.

> Questions?

# The exercise

There is no exercise here! It was a truck load of theory and volatile stuff that hopefully will stick a little bit!
Let's head on to the next [chapter](/docs/calzone)
