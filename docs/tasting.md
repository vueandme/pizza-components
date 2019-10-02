# Taste it then add salt and pepper

> Testing our components

Testing is

- Expensive
- Boring
- Slow

> Right?

Now close your eyes and think of the last time that you added salt to your food without sampling it, was it good? Did you trash that oversalted salad or ran to grab some salt from the cupboard? Yes you probably did.

> An updated definition

Testing is:

- Necessary

Especially in a component world where anything is made by a lot of smaller building blocks, one malfunctioning brick may create a lot of headaches.

## What

In general we want to test all our **smart** component and in an ideal world all of our **dumb** components, when the world is not ideal I find useful to apply insurances company technique:

> Evaluate how likely an accident is going to happen and multiply that for the damage that it does

Which translate in the software world in:

> How much this component is used multiplied how much is complex / how core is the functionality expressed

## How

In general we want to isolate key aspects of our component, mock anything `around` and test punctually

### Smart Components

We want to test:

- Methods
- Complex computed properties
- Presence / absence of key components
- Async functions `then` and `catch` ( result and error handling )

We do _not_ want to test:

- Vue, Vuex, Vue-router, third party libraries
- Inner workings of child elements
- Template, dom

### Dumb Components

We want to test:

- Events
- Presence of key dom elements
- Presence of meaningfully classes
- Response to props

Last three we can solve in one go with snapshot testing.

We do _not_ want to test:

- Vue, Vuex, Vue-router, third party libraries
- Inner workings of child elements
- Computed / data

### Tips

- If you find relaying a lot on `mount` instead of `shallowMount` ( in a pure unit test ) this is a test-smell that something in the component architecture could be reworked for the better
- Remember to add a `name` to your component and prefer to use `find({name: 'MyComponentName'})` or with [refs](https://vue-test-utils.vuejs.org/api/selectors.html)

## The exercise

Time to add unit testing to our `[IngredientItem, IngredientList, IngredientDropdown]` components! Let's do the first together!

> Remember to... Ask questions!

As usual when you are done push all your code to git under your named branch!

## Buddy refactor

Let's shake up our components with a breeze of change!

- Change the props names of `IngredientItem`
- Change `IngredientList` and `IngredientDropdown` to reverse the order of the list
- Refactor the test accordingly

How easy / hard was to refactor the tests?

Time to put our code on the rack and let it DRY in the sun with the help of [mixins](/docs/dough)
