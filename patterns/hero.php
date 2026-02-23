<?php
/**
 * Title: Hero Section
 * Slug: ogvanlife/hero
 * Categories: ogvanlife
 * Description: Full-width hero with headline, sub-headline, CTA buttons, KPI data strip, and animated cost breakdown bar chart.
 * Keywords: hero, headline, data, chart
 * Viewport Width: 1280
 */
?>
<!-- wp:html -->
<section class="ogvl-hero" aria-labelledby="ogvl-hero-headline">

  <!-- Engineering grid bg + radial glow are applied via CSS on .ogvl-hero -->

  <div class="ogvl-hero__inner">

    <!-- Doc breadcrumb -->
    <div class="ogvl-breadcrumb" aria-label="Document reference">
      <span class="ogvl-mono-label">DOC-001</span>
      <span class="ogvl-breadcrumb__sep" aria-hidden="true">—</span>
      <span class="ogvl-mono-label">OVERVIEW / HOMEPAGE</span>
      <div class="ogvl-breadcrumb__status" role="status" aria-label="Site status: live">
        <span class="ogvl-live-dot" aria-hidden="true"></span>
        <span class="ogvl-mono-label">LIVE</span>
      </div>
    </div>

    <!-- Pre-label -->
    <p class="ogvl-hero__pre-label">
      Mercedes Sprinter Van Conversion // Technical Reference
    </p>

    <!-- Main headline -->
    <h1 class="ogvl-hero__headline" id="ogvl-hero-headline">
      The math behind <em class="ogvl-hero__em">the build.</em>
    </h1>

    <!-- Sub-headline -->
    <p class="ogvl-hero__sub">
      Data-driven insights, rigorous testing, and no-fluff technical
      documentation for Mercedes Sprinter van conversions. Every number
      verified. Every system documented.
    </p>

    <!-- CTA buttons -->
    <div class="ogvl-hero__ctas">
      <a href="/build-guide/" class="ogvl-btn-primary">
        <span aria-hidden="true">→</span> EXPLORE BUILD GUIDE
      </a>
      <a href="/docs/system/electrical/" class="ogvl-btn-ghost">
        ELECTRICAL SYSTEMS <span aria-hidden="true">↗</span>
      </a>
    </div>

    <!-- KPI data strip -->
    <div class="ogvl-kpi-strip" role="region" aria-label="Key build metrics">

      <div class="ogvl-kpi-strip__item">
        <span class="ogvl-kpi-strip__icon" aria-hidden="true">⬡</span>
        <span class="ogvl-mono-label">BUILD COST</span>
        <span class="ogvl-kpi-strip__value">$32,850</span>
        <span class="ogvl-mono-label">FULL CONVERSION</span>
      </div>

      <div class="ogvl-kpi-strip__item">
        <span class="ogvl-kpi-strip__icon" aria-hidden="true">⚡</span>
        <span class="ogvl-mono-label">ELECTRICAL</span>
        <span class="ogvl-kpi-strip__value">45%</span>
        <span class="ogvl-mono-label">OF TOTAL COST</span>
      </div>

      <div class="ogvl-kpi-strip__item">
        <span class="ogvl-kpi-strip__icon" aria-hidden="true">◈</span>
        <span class="ogvl-mono-label">SOLAR CAPACITY</span>
        <span class="ogvl-kpi-strip__value">800W</span>
        <span class="ogvl-mono-label">ROOF ARRAY</span>
      </div>

      <div class="ogvl-kpi-strip__item">
        <span class="ogvl-kpi-strip__icon" aria-hidden="true">▣</span>
        <span class="ogvl-mono-label">BATTERY BANK</span>
        <span class="ogvl-kpi-strip__value">200Ah</span>
        <span class="ogvl-mono-label">LITHIUM LFP</span>
      </div>

    </div><!-- .ogvl-kpi-strip -->

    <!-- Cost breakdown bar chart -->
    <div class="ogvl-bar-chart" role="region" aria-label="Build cost breakdown">

      <div class="ogvl-bar-chart__header">
        <div class="ogvl-bar-chart__title">
          <span class="ogvl-bar-chart__arrow" aria-hidden="true">↗</span>
          <span class="ogvl-mono-label ogvl-mono-label--sand">COST BREAKDOWN</span>
          <span class="ogvl-bar-chart__sep" aria-hidden="true">|</span>
          <span class="ogvl-bar-chart__total">$32,850 TOTAL</span>
        </div>
        <span class="ogvl-mono-label">REV 2026-02</span>
      </div>

      <div class="ogvl-bar-chart__bars">

        <div class="ogvl-bar-chart__row">
          <span class="ogvl-bar-chart__label">ELECTRICAL</span>
          <div class="ogvl-bar-chart__track" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" aria-label="Electrical: 45%">
            <div class="ogvl-bar-chart__fill ogvl-bar-chart__fill--sand" data-bar data-target="45%"></div>
          </div>
          <span class="ogvl-bar-chart__pct">45%</span>
        </div>

        <div class="ogvl-bar-chart__row">
          <span class="ogvl-bar-chart__label">CABINETRY</span>
          <div class="ogvl-bar-chart__track" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" aria-label="Cabinetry: 30%">
            <div class="ogvl-bar-chart__fill ogvl-bar-chart__fill--steel-light" data-bar data-target="30%"></div>
          </div>
          <span class="ogvl-bar-chart__pct">30%</span>
        </div>

        <div class="ogvl-bar-chart__row">
          <span class="ogvl-bar-chart__label">INSULATION</span>
          <div class="ogvl-bar-chart__track" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" aria-label="Insulation: 15%">
            <div class="ogvl-bar-chart__fill ogvl-bar-chart__fill--steel" data-bar data-target="15%"></div>
          </div>
          <span class="ogvl-bar-chart__pct">15%</span>
        </div>

        <div class="ogvl-bar-chart__row">
          <span class="ogvl-bar-chart__label">PLUMBING</span>
          <div class="ogvl-bar-chart__track" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" aria-label="Plumbing: 5%">
            <div class="ogvl-bar-chart__fill ogvl-bar-chart__fill--steel-dark" data-bar data-target="5%"></div>
          </div>
          <span class="ogvl-bar-chart__pct">5%</span>
        </div>

        <div class="ogvl-bar-chart__row">
          <span class="ogvl-bar-chart__label">MISC</span>
          <div class="ogvl-bar-chart__track" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" aria-label="Misc: 5%">
            <div class="ogvl-bar-chart__fill ogvl-bar-chart__fill--border" data-bar data-target="5%"></div>
          </div>
          <span class="ogvl-bar-chart__pct">5%</span>
        </div>

      </div><!-- .ogvl-bar-chart__bars -->

      <p class="ogvl-bar-chart__note">
        BASED ON HIGH-ROOF 170&Prime; EXT SPRINTER 2500 &middot; ALL COSTS INCLUDE LABOR + MATERIALS
      </p>

    </div><!-- .ogvl-bar-chart -->

  </div><!-- .ogvl-hero__inner -->

  <!-- Scroll hint -->
  <div class="ogvl-scroll-hint" aria-hidden="true">
    <div class="ogvl-scroll-hint__line"></div>
    <span class="ogvl-mono-label">↓ SCROLL</span>
    <div class="ogvl-scroll-hint__line"></div>
  </div>

</section>
<!-- /wp:html -->
