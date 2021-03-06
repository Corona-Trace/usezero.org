<template>
  <Layout>
    <div class="about">

      <ContentWithImage>
        <template v-slot:heading-tag></template>
        <template v-slot:heading>
          About TraceToZero
        </template>

        <template v-slot:body-text>
          <div>
            <p>We are a citizen made and citizen-led, not for profit solution to help stop the spread of
              COVID-19.</p>
            <p>The free TraceToZero app is a privacy-centric, real-time location based contact tracer
              that alerts you about possible contact with other TraceToZero users who have tested
              positive for coronavirus. Every answer and check in from participants has a direct effect
              on saving lives.</p>
          </div>
        </template>

        <template v-slot:image>
          <g-image
            src="~/assets/images/illustration-phone.png"
            height="640"
            width="640"
            alt="About TracetoZero"
            fit="contain"
            background="transparent"
            quality="100"
          />
        </template>
      </ContentWithImage>

      <section class="about-partners alternateBackground section">
        <div class="container">
          <div class="columns is-variable is-8-desktop">
            <div class="column about-partners__logos is-6-tablet is-6-desktop">
              <h3 class="about-partners__heading-tag heading-tag">OUR PARTNERS</h3>
              <div class="about-partners__logos-container">
                <div class="about-partners__logo-item">
                  <g-image
                    src="~/assets/images/logo-mayo.svg"
                    alt="Mayo Clinic Logo"
                  ></g-image>
                </div>
                <div class="about-partners__logo-item">
                  <g-image
                    src="~/assets/images/logo-mit.svg"
                    alt="MIT Logo"
                  ></g-image>
                </div>
              </div>
            </div>
            <div class="column about__partners-text is-6-tablet is-6-desktop">
              <div class="about-partners__heading">
                <h2 class="title section-title">Our Partners</h2>
              </div>
              <div class="about-partners__copy">
                <p>TracetoZero is partnering with trusted leaders in the worlds of science and health to
                  provide the public with the most secure and effective technology-enabled contact
                  tracing tool.</p>
                <p>In the spirit of full participation, the app connects to all other contact tracing
                  apps to make sure citizens and public health experts can gather as much information as
                  possible on exposure and spread.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="section about-resources">
        <div class="about-resources__heading">
          <h3 class="about-resources__heading-tag heading-tag">RESOURCES</h3>
          <h2 class="title section-title">Latest COVID-19 Data</h2>
        </div>
        <div class="about-resources__body columns">
          <div class="column is-3">
            <h4 class="title is-4">Maps</h4>
            <div class="about-resources__links">
              <a
                href="https://www.maps.arcgis.com/apps/Styler/index.html?appid=230e6ea74c064fcfa390721d29b05cfe&lat=42.50721&lon=-44.15075&zoom=2"
                target="_blank"
              >IHME Projected Peaks Dashboard</a>
              <a
                href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
                target="_blank"
              >Johns Hopkins University Dashboard</a>
              <a href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html">NY Times US Map</a>

            </div>
          </div>
          <div class="column is-3">
            <h4 class="title is-4">Statistics</h4>
            <div class="about-resources__links">
              <a
                href="https://nssac.bii.virginia.edu/covid-19/dashboard/"
                target="_blank"
              >University of Virginia Dashboard</a>

            </div>
          </div>
          <div class="column is-3">
            <h4 class="title is-4">Global</h4>
            <div class="about-resources__links">
              <a
                href="https://www.arcgis.com/apps/opsdashboard/index.html#/a9419e61cb6f4521a15baf78be309b35"
                target="_blank"
              >ArcGIS Global Dashboard</a>
              <a
                href="https://nextstrain.org/ncov"
                target="_blank"
              >Next Strain Transmission Visualization</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  </Layout>
</template>

<script>
import VLazyImage from 'v-lazy-image'
import ContentWithImage from '~/components/ContentWithImage.vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { renderImage } from '~/helpers/contentful'

export default {
  components: {
    VLazyImage,
    ContentWithImage
  },
  metaInfo: {
    title: 'About',
    description:
      'Learn more about TraceToZero, our mission, and our philosophy on privacy.'
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content)
    },
    renderOptimizedImage(src) {
      return renderImage({ src, fit: 'fill', w: 640, h: 640 })
    }
  },
  richTextToHTML(content) {
    return documentToHtmlString(content, {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          const imageSrc = 'https:' + node.data.target.fields.file.url
          const optimzedImage = this.renderOptimizedImage(imageSrc)
          return `<img src="${optimzedImage}" alt="${node.data.target.fields.title}" />`
        }
      }
    })
  }
}
</script>

<page-query>

</page-query>

<static-query>

</static-query>

<style lang="scss" scoped>
.section {
  padding-top: 4rem;
  padding-bottom: 4rem;

  @include from($tablet) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @include from($desktop) {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }
}

.about-partners {
  .columns {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;

    @include from($tablet) {
      flex-direction: row;
      text-align: left;
    }
  }

  &__heading-tag {
    @include heading_tag($gray-logo);
  }

  &__logos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__logos-container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    @include from($desktop) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__logo-item {
    margin: 1rem 0;
    padding: 3rem;
    height: 14rem;
    width: 14rem;
    border-radius: 50%;
    background-color: $white;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @include from($desktop) {
      margin: 0 1rem;
    }

    img {
      width: 100%;
      height: auto;
      margin: auto;
    }
  }
}

.about-resources {
  text-align: center;

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__heading-tag {
    @include heading_tag($trace-green);
  }

  &__body {
    margin-top: 2rem;
    justify-content: center;
  }

  &__links {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: underline;
      color: $gray-dark;
      margin: 0.125rem 0;

      &:hover {
        color: $gray-logo;
      }
    }
  }
}
</style>