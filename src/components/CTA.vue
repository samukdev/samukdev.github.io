<template>
<div
  class="parent-container"
  @click="copyToClipboard()"
>
  <div id="copyTarget" ref="copyTarget" v-show="false"></div>
  <div class="main-content">
    <div class="flex items-center text-uppercase" style="letter-spacing: 1px; font-size: 0.85rem;">
      <q-icon
        name="mail"
        size="1.5rem"
        class="q-mr-md"
      />
      {{ email }}
    </div>
  </div>

  <div
    class="overlay-content rounded-borders"
  >
      <div
        class="flex items-center text-uppercase"
        style="letter-spacing: 2px; font-size: 0.85rem;"
      >
        <q-icon
          name="content_copy"
          size="1.5rem"
          class="q-mr-sm"
        />
        {{ $t('CTA.label') }}
      </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    email: 'samuelbs98@gmail.com',
  }),

  methods: {
    async copyToClipboard() {
      await navigator.clipboard.writeText(this.email);

      this.$q.notify({
        message: this.$t('CTA.notify'),
        icon: 'mail',
        color: 'primary',
        timeout: 1250,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .parent-container {
    position: relative;
    font-size: 1.2rem;
    max-width: 400px;

    &:hover {
      .overlay-content {
        opacity: 1;
      }
    }
  }

  .parent-container:hover {
    cursor: pointer;
  }

  .main-content {
    padding: 1rem 1rem;
    font-weight: 500;
    border-radius: 0.5ex;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: $primary;
    border: 2px solid $primary;
  }
  .overlay-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    font-weight: 500;
    opacity: 0;
    transition: opacity .25s ease-out;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: $grey-1;
    background: $primary-gradient;
  }
</style>
