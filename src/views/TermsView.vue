<template>
  <div class="relative min-h-screen overflow-hidden">
    <div class="absolute top-10 right-10 w-80 h-80 bg-emerald/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-steel/50 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative px-8 md:px-16 lg:px-32 py-24 max-w-4xl">

      <section class="mb-12">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">Legal</p>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">Terms of Service</h1>
        <p class="text-silver text-sm">Last updated: May 21, 2026</p>
        <p class="text-silver text-sm mt-4 leading-relaxed max-w-2xl">
          These Terms of Service govern your use of awebofcode.com and the client portal operated by
          A Web of Code, LLC ("we," "us," or "our"). By accessing this site or using the client portal,
          you agree to these terms. If you do not agree, do not use this site.
        </p>
        <p class="text-silver/60 text-xs mt-4 italic">
          Note: These terms are intended to be reviewed by qualified legal counsel before reliance.
        </p>
      </section>

      <div class="space-y-10 text-silver text-sm leading-relaxed">

        <section aria-labelledby="services">
          <h2 id="services" class="text-ivory font-semibold text-xl mb-4">1. Services</h2>
          <p>A Web of Code provides custom web design and development services. All projects are
          custom-scoped and governed by a separate written agreement between you and A Web of Code.
          Nothing on this website constitutes an offer or guarantee of services at any particular
          price or timeline unless confirmed in a signed project agreement.</p>
        </section>

        <section aria-labelledby="client-portal">
          <h2 id="client-portal" class="text-ivory font-semibold text-xl mb-4">2. Client Portal</h2>
          <p class="mb-3">Access to the client portal is provided to current clients of A Web of Code. By using the portal you agree to:</p>
          <ul class="list-disc list-inside space-y-1">
            <li>Provide accurate information when creating your account.</li>
            <li>Keep your login credentials confidential. You are responsible for all activity under your account.</li>
            <li>Notify us immediately of any unauthorized access or suspected breach of your account.</li>
            <li>Use the portal solely for managing your own client account and services.</li>
          </ul>
          <p class="mt-3">We reserve the right to suspend or terminate portal access at our discretion, including for non-payment or violation of these terms.</p>
        </section>

        <section aria-labelledby="billing">
          <h2 id="billing" class="text-ivory font-semibold text-xl mb-4">3. Billing and Payments</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>Payments are processed securely through Stripe. By providing payment information, you authorize us to charge the applicable fees.</li>
            <li>Subscription fees are billed on the schedule shown in your plan. Failure to pay may result in suspension of services.</li>
            <li>All fees are stated in US dollars and are non-refundable unless otherwise specified in your project agreement.</li>
            <li>You may cancel a subscription through the billing portal at any time. Cancellation takes effect at the end of the current billing period.</li>
            <li>We reserve the right to change pricing with reasonable notice. Continued use of services after a price change constitutes acceptance.</li>
          </ul>
        </section>

        <section aria-labelledby="acceptable-use">
          <h2 id="acceptable-use" class="text-ivory font-semibold text-xl mb-4">4. Acceptable Use</h2>
          <p class="mb-3">You agree not to:</p>
          <ul class="list-disc list-inside space-y-1">
            <li>Use this site or portal for any unlawful purpose or in violation of any applicable laws.</li>
            <li>Attempt to gain unauthorized access to any part of our systems.</li>
            <li>Transmit malicious code, spam, or any content that infringes on the rights of others.</li>
            <li>Reproduce, duplicate, or copy any content from this site without express written permission.</li>
          </ul>
        </section>

        <section aria-labelledby="intellectual-property">
          <h2 id="intellectual-property" class="text-ivory font-semibold text-xl mb-4">5. Intellectual Property</h2>
          <p class="mb-3">All content on this website — including text, design, code, graphics, and trademarks — is owned by A Web of Code or its licensors and is protected by applicable intellectual property laws.</p>
          <p>Ownership of deliverables created for client projects is governed by the individual project agreement. Unless otherwise stated in writing, A Web of Code retains rights to display completed work in its portfolio.</p>
        </section>

        <section aria-labelledby="disclaimer">
          <h2 id="disclaimer" class="text-ivory font-semibold text-xl mb-4">6. Disclaimer of Warranties</h2>
          <p>This site and its content are provided "as is" without warranty of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses. Use of this site is at your own risk.</p>
        </section>

        <section aria-labelledby="liability">
          <h2 id="liability" class="text-ivory font-semibold text-xl mb-4">7. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, A Web of Code, LLC and its members shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of this site or our services. Our total liability to you for any claim shall not exceed the amounts paid by you to us in the three months preceding the claim.</p>
        </section>

        <section aria-labelledby="governing-law">
          <h2 id="governing-law" class="text-ivory font-semibold text-xl mb-4">8. Governing Law</h2>
          <p>These Terms are governed by the laws of the Commonwealth of Kentucky, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Kentucky.</p>
        </section>

        <section aria-labelledby="changes-terms">
          <h2 id="changes-terms" class="text-ivory font-semibold text-xl mb-4">9. Changes to These Terms</h2>
          <p>We may update these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the site or portal after changes constitutes acceptance of the revised terms.</p>
        </section>

        <section aria-labelledby="contact-terms">
          <h2 id="contact-terms" class="text-ivory font-semibold text-xl mb-4">10. Contact</h2>
          <p>Questions about these Terms? Reach us via the <RouterLink to="/contact" class="text-emerald hover:underline">contact form</RouterLink> or on <a href="https://www.linkedin.com/in/aprilsears" target="_blank" rel="noopener noreferrer" class="text-emerald hover:underline">LinkedIn</a>.</p>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
