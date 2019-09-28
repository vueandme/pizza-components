<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="doc"></div>
</template>

<script>
export default {
  computed: {
    doc() {
      const doc = this.$route.params.id || 'README'
      return require(`~/docs/${doc}.md`).default
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: 'docs'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/prism.css';

html.docs {
  font-size: 16px;
  background-color: #222;
  min-height: 100%;

  body {
    line-height: 1.85;
    color: #fafafa;
    font-family: 'Courier New';
    line-height: 1.45;
    margin: 6rem auto 1rem;
    max-width: 52rem;
    padding: 0.25rem;
  }

  pre,
  code {
    font-family: Menlo, Monaco, 'Courier New', monospace;
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  ol,
  ul {
    margin: 1rem;
    padding-left: 2.5rem;
  }

  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: scroll;
  }

  a,
  a:visited {
    color: #01ff70;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2ecc40;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  h2 {
    font-size: 2.827rem;
  }

  h3 {
    font-size: 1.999rem;
  }

  h4 {
    font-size: 1.414rem;
  }

  h5 {
    font-size: 1.121rem;
  }

  h6 {
    font-size: 0.88rem;
  }

  small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }
  pre {
    background-color: #333;
  }

  blockquote {
    border-left: 3px solid #01ff70;
    padding-left: 1rem;
  }
}

@media screen and (min-width: 32rem) and (max-width: 48rem) {
  html.docs {
    font-size: 14px;
  }
}
</style>
