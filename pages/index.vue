<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full sm:pb-52 sm:pt-10 pb-40">
      <BaseSection>
        <div class="col-span-12 lg:col-span-7 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-2 sm:text-left">
          <span
            data-aos="fade-right"
            data-aos-once="true"
            class="sm:text-base text-gradient font-semibold uppercase text-xs"
            >Terdepan, Terpercaya, Tumbuh Bersama Anda</span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-6xl xl:text-6xl font-bold sm:leading-tight leading-10 capitalize sm:pr-8 xl:pr-10"
          >
            KCP Jakarta <br /><span class="text-header-gradient">Graha Rekso</span><br /><span
              class="text-3xl sm:text-6xl"
              >Area Pulogadung</span
            >
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph sm:text-sm text-xs">
            Mandiri Digital, Tiada Henti Membangun Negeri
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-row space-x-4"
          >
            <a href="/super_promo">
              <BaseButton
                class="bg-gradient-to-r from-[#befc5a] to-[#57ee00] text-black sm:text-xl text-sm font-bold sm:px-8 px-4  py-4 text-center rounded-full"
              >
                Super Promo
              </BaseButton></a
            >
            <a href="#tabelData">
              <BaseButton
                class="max-w-full py-4 text-sm sm:text-xl px-8 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
              >
                Mulai
              </BaseButton></a
            >
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-5 ">
          <div class="w-full">
            <img data-aos="fade-up" data-aos-once="true" :src="require('~/assets/img/hero2.png')" class="-mt-4" alt="" />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-1.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <!--  Credit Information -->
    <section
      id="tabelData"
      class="max-w-screen-xl sm:mx-auto sm:px-6 lg:px-0 py-5 rounded-[2.25rem] sm:rounded-xl bg-white transform lg:-translate-y-12"
    >
      <div class="w-full justify-center sm:px-5 px-2">
        <!-- <TableData /> -->
        <div>
          <h2 class="sm:text-4xl text-2xl text-center font-semibold pb-10">
            Syarat Pengajuan<span class="text-header-gradient"> Kredit</span>
          </h2>
        </div>
        <CreditInfo />
      </div>
    </section>

    <!-- Kredit Calculator section -->
    <!-- <section class="w-full my-10 py-20">
      <BaseSection>
        <LandingBuyTradeImage class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
            Simulasi dan Perhitungan <br class="hidden sm:block" />Kredit
          </h2>
          <p class="paragraph">
            Hitung dan simulasikan kredit nasabah disini. Suku bunga yang digunakan merupakan suku bunga terbaru.
          </p>
          <div class="space-y-6 lg:pr-12">
            <LandingExchange name="Loan Amount" value="0" :exchange-selected="currencySelected" />
            <LandingExchange name="Interest Rate" value="0" :exchange-selected="cryptoSelected" />
            <LandingExchange name="Long Term" value="0" :exchange-selected="cryptoSelected" />
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">Hitung</BaseButton>
          </div>
        </div>
        <LandingBuyTradeImage data-aos="fade-left" class="hidden sm:block" />
      </BaseSection>
    </section> -->

    <!-- Promo section -->
    <!-- <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">Industry-leading security from day one</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="Safety, security and compliance">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the
                cybersecurity audits conducted by the New York Department of Financial Services.
                <span class="underline">Learn more</span> about our commitment to security.
              </p>
            </LandingListItem>
            <LandingListItem title="Hardware security keys">
              <p class="text-sm text-gray-700 leading-relaxed">
                With NEFA you can secure your account with a hardware security key via WebAuthn.
              </p>
            </LandingListItem>
            <LandingListItem title="SOC Certifications">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is <span class="underline">SOC 1 Type 2</span> and
                <span class="underline">SOC 2 Type 2</span> compliant. We are the world’s first cryptocurrency exchange
                and custodian to complete these exams.
              </p>
            </LandingListItem>
          </ul>
        </div>
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/industry-leading-security.webp')" class="w-full" alt="" />
          </div>
        </div>
      </div>
    </section> -->

    <!-- Partners section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-10 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">Fun Digital Banking World</h3>
        <p data-aos="flip-down" class="paragraph">
          Nikmati Produk Financial Super App Livin' by Mandiri dan Wholesale Digital Super Platform Kopra by Mandiri
        </p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage v-for="img in ['livin-logo.png', 'kopra-logo.png']" :key="img" :img="img" />
        </div>
      </div>
    </section>

    <!-- Livin section -->
    <section class="w-full my-36">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/livin.png')" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 class="text-4xl font-semibold">
            Living a Lively Life With <span class="text-header-gradient">Livin' by Mandiri</span>
          </h2>
          <p class="paragraph">
            Nikmati gampangnya buka rekening online, transaksi, dan integrasi segala kebutuhan finansial kamu hanya
            dengan <b>Livin' by Mandiri</b>
          </p>
          <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Tinggal Selfie Tabungan Jadi" />
            <LandingListItem title="Quick Pick Transaksi Favorit" />
            <LandingListItem title="Cek Saldo & Top Up Otomatis e-wallet" />
            <LandingListItem title="Tarik Tunai Tanpa Kartu" />
            <LandingListItem title="Satu Akun untuk Semua" />
            <LandingListItem title="Smart Reminder, e-statement, e-billing" />
            <LandingListItem title="Cashless dengan QRIS" />
            <LandingListItem title="Goal Saving & Deposito" />
          </ul>
          <div class="flex flex-col sm:flex-row">
            <!-- <a
              href="https://livin.page.link/?utm_medium=12518&utm_source=cab1389521014&utm_campaign=dl&apn=id.bmri.livin&isi=1555414743&ibi=id.bmri.livin&link=https%3A//livin.page.link/referral?p%3Ddl%26c%3Dcab1389521014%26cabang%3D12518"
              target="_blank"
            >
              <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium"
                >Bergabung</BaseButton
              >
            </a> -->
            <a href="https://bankmandiri.co.id/en/livin" target="_blank">
              <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
                Selengkapnya
              </BaseButton>
            </a>
          </div>
          <!-- <div>
            <div class="w-1/3">
              <a href="https://play.google.com/store/apps/details?id=id.bmri.livin&hl=in&gl=US">
                <img :src="require('~/assets/img/playstore.png')" class="w-[95%] mb-5" alt="" />
              </a>
              <a href="https://apps.apple.com/id/app/new-livin-by-mandiri/id1555414743?l=id">
                <img :src="require('~/assets/img/appstore.png')" class="w-[95%]" alt="" />
              </a>
            </div>
          </div> -->
        </div>
      </BaseSection>
    </section>
    <!-- Getting started section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Sahabat Terbaik dalam
          <span class="text-header-gradient"> Hal Finansial</span>
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>
    <!-- Kopra section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">
            Super Platform <span class="text-header-gradient sm:text-4xl text-3xl"><br />Kopra by Mandiri</span>
          </h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Wholesale Digital Super Platform</h4>
            <p class="paragraph text-sm xl:text-base">
              Konsep layanan digital single access yang menjadi pusat aktivitas informasi dan transaksi finansial bagi
              ekosistem bisnis para pelaku usaha di segmen wholesale dan value chainnya secara end to end (hulu ke
              hilir).
            </p>
          </div>
          <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Foreign Exhange & Cash Management" />
            <LandingListItem title="Trade & Bank Guarantee" />
            <LandingListItem title="Virtual Account" />
            <LandingListItem title="Value Chain" />
            <LandingListItem title="Online Custody" />
            <LandingListItem title="Single Sign On" />
            <LandingListItem title="Virtual Assistant" />
            <LandingListItem title="Limit Management" />
            <LandingListItem title="Financial Dashboard" />
            <LandingListItem title="Onboarding Supplier" />
            <LandingListItem title="Remittance Tracking" />
          </ul>
          <!-- <div class="space-y-2">
            <h4 class="text-lg font-medium">A Range of Powerful Apis</h4>
            <p class="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and
              HTTP APIs. Connect to our WebSocket for real-time data streaming.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Customer Support</h4>
            <p class="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers
              for partners.
            </p>
          </div> -->
          <div class="flex flex-col sm:flex-row">
            <a href="https://bankmandiri.co.id/en/kopra-by-mandiri" target="_blank">
              <BaseButton
                class="mt-5 w-full sm:max-w-[250px] p-3 bg-inherit text-gradient border border-[#0c66ee] text-base"
                >Selengkapnya</BaseButton
              >
            </a>

            <!-- <BaseButton class="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full">
              Learn More
            </BaseButton> -->
          </div>
        </div>
        <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" />
      </div>
    </section>

    <!-- FAQ section -->
    <!-- <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/faq.webp')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section> -->

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      steps: [
        {
          img: 'sign-up.png',
          title: 'Pengalaman Banking Komprehensif',
          description:
            'Tanpa harus pergi ke kantor cabang. Semua layanan perbankan yang kamu perlu kini ada di genggaman!',
        },
        {
          img: 'fund.png',
          title: 'Layanan Finansial Lengkap',
          description:
            'Nggak perlu gonta-ganti! Semua kebutuhan finansial kamu kini bisa terpenuhi lewat satu aplikasi.',
        },
        {
          img: 'buy-crypto.png',
          title: 'Ekosistem Terbuka',
          description:
            'Livin by Mandiri terintegrasi dengan ekosistem digital favorit kamu. Lebih fleksibel, lebih praktis!',
        },
      ],
    }
  },
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}

.cover-gradient {
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.04) -6.01%,
    rgba(12, 211, 255, 0.04) 36.87%,
    rgba(47, 124, 240, 0.04) 78.04%,
    rgba(14, 101, 232, 0.04) 103.77%
  );
}
.cover-gradient-2 {
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.1) -6.01%,
    rgba(12, 211, 255, 0.1) 36.87%,
    rgba(47, 124, 240, 0.1) 78.04%,
    rgba(14, 101, 232, 0.1) 103.77%
  );
}
</style>
