<template>
  <section
    class="section content-with-image primary-section"
    :class="{ alternateBackgroundLight: alternateBackground }"
  >
    <div class="container-fluid is-gapless">
      <div
        class="columns"
        :class="{ rowReverse: imagePushed }"
      >
        <div class="column content-with-image__content is-6-tablet is-6-desktop">
          <h3 :class="'content-with-image__heading-tag-' + tagColor">
            <slot name="heading-tag"></slot>
          </h3>
          <h2 class="title section-title">
            <slot name="heading"></slot>
          </h2>
          <div class="content-with-image__body-text">
            <slot name="body-text"></slot>
          </div>
          <div class="content-with-image__link cta-link">
            <slot name="link"></slot>
            <b-icon
              size="is-small"
              icon="arrow-right"
              v-if="hasLinkSlot"
            ></b-icon>
          </div>
        </div>
        <div class="column content-with-image__image-container is-6-tablet is-6-desktop">
          <div
            class="content-with-image__image image is-square"
            :class="{ imageBoxShadow: imageBoxShadow }"
          >
            <slot name="image"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // Set to true if you want image to be pushed to the right
    imagePushed: Boolean,
    alternateBackground: Boolean,
    imageBoxShadow: Boolean
  },
  data: function() {
    return {}
  },
  computed: {
    hasLinkSlot() {
      return !!this.$slots.link
    },
    tagColor() {
      if (this.$attrs.index == 0) {
        return 'orange'
      } else if (this.$attrs.index == 1) {
        return 'red'
      } else if (this.$attrs.index == 2) {
        return 'gray'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  overflow: hidden;
  padding: 0;
}

.columns {
  align-items: stretch;
  display: flex;
  flex-direction: column-reverse;

  @include from($tablet) {
    padding-bottom: 0;
    flex-direction: row;
    align-items: stretch;
  }

  @include from($desktop) {
    align-items: stretch;
  }
}

.rowReverse {
  @include from($tablet) {
    flex-direction: row-reverse;
  }
}

.content-with-image {
  .title {
    margin-bottom: 0;
  }

  &__content {
    padding: 4rem 2rem;

    @include from($desktop) {
      padding: 8rem;
    }
  }

  &__body-text {
    padding-top: 4rem;
    padding-bottom: 1rem;

    p {
      margin-bottom: 1.5rem;
      @include set_type(1.2rem);
    }
  }

  &__link {
    a {
      font-size: 1.25rem;
      font-weight: bold;
      text-decoration: underline;
    }

    .icon {
      margin-left: 0.5rem;
      color: $blue;
    }
  }

  &__image-container {
    padding: 0;
    position: relative;

    @include from($desktop) {
      padding-bottom: 0;
    }
  }

  .imageBoxShadow {
    // @include box_shadow(3);
  }

  &__image {
    // border-radius: 6px;
    overflow: hidden;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      object-position: center;
      z-index: 20;
    }
  }

  .blob {
    position: absolute;
    z-index: 10;
    top: -3rem;
    left: -3rem;
  }

  &__heading-tag {
    &-red {
      @include heading_tag($red);
    }

    &-orange {
      @include heading_tag($orange);
    }

    &-gray {
      @include heading_tag($gray);
    }
  }
}
</style>
