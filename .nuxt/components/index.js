export { default as LineChart } from '../..\\components\\LineChart.vue'
export { default as NavLink } from '../..\\components\\NavLink.vue'
export { default as PromoCarousel } from '../..\\components\\PromoCarousel.vue'
export { default as TableData } from '../..\\components\\TableData.vue'
export { default as BaseAccordion } from '../..\\components\\base\\Accordion.vue'
export { default as BaseButton } from '../..\\components\\base\\Button.vue'
export { default as BaseButtonPengajuan } from '../..\\components\\base\\ButtonPengajuan.vue'
export { default as BaseCorrectIcon } from '../..\\components\\base\\CorrectIcon.vue'
export { default as BaseFooter } from '../..\\components\\base\\Footer.vue'
export { default as BaseNavbar } from '../..\\components\\base\\Navbar.vue'
export { default as BaseSection } from '../..\\components\\base\\Section.vue'
export { default as CreditInfo } from '../..\\components\\credit\\CreditInfo.vue'
export { default as LandingBuyTradeImage } from '../..\\components\\landing\\BuyTradeImage.vue'
export { default as LandingCryptoStatistic } from '../..\\components\\landing\\CryptoStatistic.vue'
export { default as LandingExchange } from '../..\\components\\landing\\Exchange.vue'
export { default as LandingListItem } from '../..\\components\\landing\\ListItem.vue'
export { default as LandingPartnerImage } from '../..\\components\\landing\\PartnerImage.vue'
export { default as LandingStep } from '../..\\components\\landing\\Step.vue'
export { default as LandingTradingToolImage } from '../..\\components\\landing\\TradingToolImage.vue'
export { default as CreditCcContentCC } from '../..\\components\\credit\\cc\\ContentCC.vue'
export { default as CreditInvestasiContentInvestasi } from '../..\\components\\credit\\investasi\\ContentInvestasi.vue'
export { default as CreditInvestasiInfo } from '../..\\components\\credit\\investasi\\Info.vue'
export { default as CreditInvestasiTableInvest } from '../..\\components\\credit\\investasi\\TableInvest.vue'
export { default as CreditKmkContentKMK } from '../..\\components\\credit\\kmk\\ContentKMK.vue'
export { default as CreditKmkInfo } from '../..\\components\\credit\\kmk\\Info.vue'
export { default as CreditKmkTableKMK } from '../..\\components\\credit\\kmk\\TableKMK.vue'
export { default as CreditKprContentKPR } from '../..\\components\\credit\\kpr\\ContentKPR.vue'
export { default as CreditKprInfo } from '../..\\components\\credit\\kpr\\Info.vue'
export { default as CreditKprTableKPR } from '../..\\components\\credit\\kpr\\TableKPR.vue'
export { default as CreditKsmContentKSM } from '../..\\components\\credit\\ksm\\ContentKSM.vue'
export { default as CreditKsmInfo } from '../..\\components\\credit\\ksm\\Info.vue'
export { default as CreditKsmTableKSM } from '../..\\components\\credit\\ksm\\TableKSM.vue'
export { default as CreditKumContentKUM } from '../..\\components\\credit\\kum\\ContentKUM.vue'
export { default as CreditKumInfo } from '../..\\components\\credit\\kum\\Info.vue'
export { default as CreditKumTableKUM } from '../..\\components\\credit\\kum\\TableKUM.vue'
export { default as CreditKurContentKUR } from '../..\\components\\credit\\kur\\ContentKUR.vue'
export { default as CreditKurInfo } from '../..\\components\\credit\\kur\\Info.vue'
export { default as CreditKurTableKUR } from '../..\\components\\credit\\kur\\TableKUR.vue'
export { default as CreditMultigunaContentMultiguna } from '../..\\components\\credit\\multiguna\\ContentMultiguna.vue'
export { default as CreditMultigunaInfo } from '../..\\components\\credit\\multiguna\\Info.vue'
export { default as CreditMultigunaTableMultiguna } from '../..\\components\\credit\\multiguna\\TableMultiguna.vue'

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
