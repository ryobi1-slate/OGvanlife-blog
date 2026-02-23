<?php
/**
 * Title: Engineering Principles
 * Slug: ogvanlife/engineering-principles
 * Categories: ogvanlife
 * Description: Two-column section explaining the documentation philosophy, with a NEC 690 safety callout.
 * Keywords: about, principles, philosophy
 * Viewport Width: 1280
 */
?>
<!-- wp:html -->
<section class="ogvl-principles" aria-labelledby="ogvl-principles-heading">
  <div class="ogvl-principles__inner">

    <!-- Left column -->
    <div class="ogvl-principles__left">
      <p class="ogvl-section-pre-label">— WHY THIS EXISTS</p>
      <h2 class="ogvl-principles__heading" id="ogvl-principles-heading">
        Vanlife documentation should read like an engineering manual,
        not a travel blog.
      </h2>
      <p class="ogvl-principles__body">
        Most van build content is aspirational, not actionable. It shows
        the sunset, not the wiring diagram. It shows the finished kitchen,
        not the load calculations that made it safe.
      </p>
      <p class="ogvl-principles__body">
        OG Van Life exists to fill the documentation gap. Everything
        published here is based on a real 2022 Sprinter 2500 build with
        real data, real costs, and real failure modes.
      </p>

      <!-- Safety callout -->
      <div class="ogvl-safety-callout" role="alert">
        <p class="ogvl-safety-callout__label">&#9888; SAFETY NOTE</p>
        <p class="ogvl-safety-callout__body">
          Electrical work in vehicles carries fire risk. All wiring
          documentation references NEC 690 and ABYC E-11. Consult a
          licensed electrician before energizing any high-current system.
        </p>
      </div>
    </div>

    <!-- Right column: principles list -->
    <div class="ogvl-principles__right">

      <div class="ogvl-principle">
        <span class="ogvl-principle__num">01</span>
        <div class="ogvl-principle__content">
          <h3 class="ogvl-principle__title">Every number cited</h3>
          <p class="ogvl-principle__body">
            No estimations without source data. Every measurement is from
            real-world testing on a production vehicle, not manufacturer specs.
          </p>
        </div>
      </div>

      <div class="ogvl-principle">
        <span class="ogvl-principle__num">02</span>
        <div class="ogvl-principle__content">
          <h3 class="ogvl-principle__title">Engineering drawings, not mood boards</h3>
          <p class="ogvl-principle__body">
            Dimensional accuracy and tolerances matter. Documentation uses
            proper technical illustration: cross-sections, exploded views,
            wiring schematics.
          </p>
        </div>
      </div>

      <div class="ogvl-principle">
        <span class="ogvl-principle__num">03</span>
        <div class="ogvl-principle__content">
          <h3 class="ogvl-principle__title">Failure modes documented</h3>
          <p class="ogvl-principle__body">
            We document what went wrong and why. Every system failure,
            incorrect assumption, and revised decision is part of the
            public record.
          </p>
        </div>
      </div>

    </div><!-- .ogvl-principles__right -->

  </div>
</section>
<!-- /wp:html -->
