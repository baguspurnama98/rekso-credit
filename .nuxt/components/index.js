export { default as LineChart } from '../..\\components\\LineChart.vue'
export { default as NavLink } from '../..\\components\\NavLink.vue'
export { default as BaseAccordion } from '../..\\components\\base\\Accordion.vue'
export { default as BaseButton } from '../..\\components\\base\\Button.vue'
export { default as BaseFooter } from '../..\\components\\base\\Footer.vue'
export { default as BaseNavbar } from '../..\\components\\base\\Navbar.vue'
export { default as BaseSection } from '../..\\components\\base\\Section.vue'
export { default as LandingBuyTradeImage } from '../..\\components\\landing\\BuyTradeImage.vue'
export { default as LandingCryptoStatistic } from '../..\\components\\landing\\CryptoStatistic.vue'
export { default as LandingExchange } from '../..\\components\\landing\\Exchange.vue'
export { default as LandingListItem } from '../..\\components\\landing\\ListItem.vue'
export { default as LandingPartnerImage } from '../..\\components\\landing\\PartnerImage.vue'
export { default as LandingStep } from '../..\\components\\landing\\Step.vue'
export { default as LandingTradingToolImage } from '../..\\components\\landing\\TradingToolImage.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
