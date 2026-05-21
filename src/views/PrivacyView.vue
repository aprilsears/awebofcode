<template>
  <div class="relative min-h-screen overflow-hidden">
    <div class="absolute top-10 right-10 w-80 h-80 bg-emerald/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-steel/50 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative px-8 md:px-16 lg:px-32 py-24 max-w-4xl">

      <section class="mb-12">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">Legal</p>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">Privacy Policy</h1>
        <p class="text-silver text-sm">Last updated: May 21, 2026</p>
        <p class="text-silver text-sm mt-4 leading-relaxed max-w-2xl">
          This Privacy Policy describes how A Web of Code ("we," "us," or "our") collects, uses,
          and shares information when you visit awebofcode.com or use our client portal.
          Please read it carefully. By using this site you agree to the practices described here.
        </p>
        <p class="text-silver/60 text-xs mt-4 italic">
          Note: This policy is provided as an accurate description of our data practices and is
          intended to be reviewed by qualified legal counsel before reliance.
        </p>
      </section>

      <div class="space-y-10 text-silver text-sm leading-relaxed">

        <section aria-labelledby="info-collected">
          <h2 id="info-collected" class="text-ivory font-semibold text-xl mb-4">1. Information We Collect</h2>

          <h3 class="text-ivory font-medium mb-2">Information you provide directly</h3>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li><strong class="text-ivory">Contact form</strong> — your name, email address, service interest, and project description, submitted via Formspree.</li>
            <li><strong class="text-ivory">Client account</strong> — your email address and password when you register or log in to the client portal, stored via Supabase.</li>
            <li><strong class="text-ivory">Billing information</strong> — payment card details and billing address entered during checkout. These are processed directly by Stripe; we never see or store your full card number.</li>
          </ul>

          <h3 class="text-ivory font-medium mb-2">Information collected automatically</h3>
          <ul class="list-disc list-inside space-y-1">
            <li><strong class="text-ivory">Usage data</strong> — pages visited, time on site, referral source, and browser/device type, collected via Google Analytics and Vercel Analytics.</li>
            <li><strong class="text-ivory">Performance data</strong> — Core Web Vitals and page load metrics collected via Vercel Speed Insights.</li>
            <li><strong class="text-ivory">IP address</strong> — collected by Google Analytics, Vercel, and Supabase as part of standard server logging.</li>
            <li><strong class="text-ivory">Cookies</strong> — see Section 5 below.</li>
          </ul>
        </section>

        <section aria-labelledby="how-we-use">
          <h2 id="how-we-use" class="text-ivory font-semibold text-xl mb-4">2. How We Use Your Information</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>To respond to contact form submissions and discuss your project.</li>
            <li>To provide and manage access to the client portal.</li>
            <li>To process payments and manage your subscription via Stripe.</li>
            <li>To understand how visitors use the site and improve performance.</li>
            <li>To maintain the security and integrity of our systems.</li>
          </ul>
          <p class="mt-3">We do not sell your personal information to third parties.</p>
        </section>

        <section aria-labelledby="third-parties">
          <h2 id="third-parties" class="text-ivory font-semibold text-xl mb-4">3. Third-Party Services</h2>
          <p class="mb-3">We use the following third-party services that may receive your data:</p>
          <div class="space-y-3">
            <div class="bg-steel/30 rounded-xl px-5 py-4 border border-silver/10">
              <p class="text-ivory font-medium">Google Analytics (Google LLC)</p>
              <p class="mt-1">Collects usage data and sets cookies to measure site traffic. Google may use this data in accordance with its own privacy policy. You can opt out via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" class="text-emerald hover:underline">Google's opt-out browser add-on</a>.</p>
            </div>
            <div class="bg-steel/30 rounded-xl px-5 py-4 border border-silver/10">
              <p class="text-ivory font-medium">Formspree (Formspree, Inc.)</p>
              <p class="mt-1">Receives and forwards contact form submissions. Your name, email, and message are transmitted to Formspree's servers and forwarded to us.</p>
            </div>
            <div class="bg-steel/30 rounded-xl px-5 py-4 border border-silver/10">
              <p class="text-ivory font-medium">Supabase (Supabase Inc.)</p>
              <p class="mt-1">Provides authentication and database services for the client portal. Your email, hashed password, and account data are stored on Supabase's infrastructure.</p>
            </div>
            <div class="bg-steel/30 rounded-xl px-5 py-4 border border-silver/10">
              <p class="text-ivory font-medium">Stripe (Stripe, Inc.)</p>
              <p class="mt-1">Processes all payments and manages subscriptions. Stripe collects and stores payment card information directly; we only receive transaction status and subscription data.</p>
            </div>
            <div class="bg-steel/30 rounded-xl px-5 py-4 border border-silver/10">
              <p class="text-ivory font-medium">Vercel (Vercel Inc.)</p>
              <p class="mt-1">Hosts this website and collects standard server logs, analytics, and performance data.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="data-sharing">
          <h2 id="data-sharing" class="text-ivory font-semibold text-xl mb-4">4. Data Sharing</h2>
          <p>We do not sell, rent, or trade your personal information. We share data only:</p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li>With the third-party service providers listed above, as necessary to operate the site.</li>
            <li>If required by law, court order, or to protect the rights and safety of our users or the public.</li>
          </ul>
        </section>

        <section aria-labelledby="cookies">
          <h2 id="cookies" class="text-ivory font-semibold text-xl mb-4">5. Cookies</h2>
          <p class="mb-3">This site uses cookies — small text files stored on your device. We use:</p>
          <ul class="list-disc list-inside space-y-1">
            <li><strong class="text-ivory">Analytics cookies</strong> — set by Google Analytics to distinguish users and sessions.</li>
            <li><strong class="text-ivory">Authentication cookies</strong> — set by Supabase to maintain your login session in the client portal.</li>
            <li><strong class="text-ivory">Preference cookies</strong> — set by us to remember your cookie notice acknowledgment.</li>
          </ul>
          <p class="mt-3">You can disable cookies in your browser settings. Disabling analytics cookies will not affect site functionality; disabling authentication cookies will prevent login to the client portal.</p>
        </section>

        <section aria-labelledby="retention">
          <h2 id="retention" class="text-ivory font-semibold text-xl mb-4">6. Data Retention</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>Contact form submissions are retained for as long as needed to respond to your inquiry.</li>
            <li>Client account data is retained for the duration of the client relationship and for a reasonable period afterward for legal and business record-keeping purposes.</li>
            <li>Analytics data is retained per Google Analytics' default retention settings (26 months).</li>
            <li>Payment records are retained as required by applicable law and Stripe's data retention policies.</li>
          </ul>
        </section>

        <section aria-labelledby="your-rights">
          <h2 id="your-rights" class="text-ivory font-semibold text-xl mb-4">7. Your Rights</h2>
          <p class="mb-3">Depending on your state of residence, you may have the right to:</p>
          <ul class="list-disc list-inside space-y-1">
            <li>Know what personal information we have collected about you.</li>
            <li>Request deletion of your personal information.</li>
            <li>Correct inaccurate personal information.</li>
            <li>Opt out of analytics data collection (see Google's opt-out tool above).</li>
          </ul>
          <p class="mt-3">
            To exercise any of these rights, contact us at
            <a href="https://www.linkedin.com/in/aprilsears" target="_blank" rel="noopener noreferrer" class="text-emerald hover:underline">LinkedIn</a>
            or via the <RouterLink to="/contact" class="text-emerald hover:underline">contact form</RouterLink>.
            We will respond within 30 days.
          </p>
        </section>

        <section aria-labelledby="childrens-privacy">
          <h2 id="childrens-privacy" class="text-ivory font-semibold text-xl mb-4">8. Children's Privacy</h2>
          <p>This site is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.</p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" class="text-ivory font-semibold text-xl mb-4">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the site after changes constitutes acceptance of the revised policy.</p>
        </section>

        <section aria-labelledby="contact-privacy">
          <h2 id="contact-privacy" class="text-ivory font-semibold text-xl mb-4">10. Contact</h2>
          <p>Questions about this Privacy Policy? Reach us via the <RouterLink to="/contact" class="text-emerald hover:underline">contact form</RouterLink> or on <a href="https://www.linkedin.com/in/aprilsears" target="_blank" rel="noopener noreferrer" class="text-emerald hover:underline">LinkedIn</a>.</p>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
