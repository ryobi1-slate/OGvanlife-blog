<?php
/**
 * Title: Article Grid
 * Slug: ogvanlife/article-grid
 * Categories: ogvanlife
 * Description: Responsive 3-column grid of Van Doc spec-sheet cards with category filter pills, ACF fields, and inline SVG schematics.
 * Keywords: articles, grid, docs, cards
 * Viewport Width: 1280
 */

// Schematic SVGs keyed by doc_tag value
function ogvl_get_schematic( string $tag ): string {
	$schematics = [
		'ELECTRICAL' => '<svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" opacity="0.7">
			<rect x="4" y="10" width="32" height="20" rx="1" stroke="#C8B28A" stroke-width="1"/>
			<line x1="4" y1="16" x2="36" y2="16" stroke="#C8B28A" stroke-width="0.7" opacity="0.5"/>
			<line x1="4" y1="22" x2="36" y2="22" stroke="#C8B28A" stroke-width="0.7" opacity="0.5"/>
			<line x1="13" y1="10" x2="13" y2="30" stroke="#C8B28A" stroke-width="0.7" opacity="0.5"/>
			<line x1="22" y1="10" x2="22" y2="30" stroke="#C8B28A" stroke-width="0.7" opacity="0.5"/>
			<text x="20" y="40" font-size="7" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">SOLAR</text>
			<line x1="36" y1="20" x2="68" y2="20" stroke="#C8B28A" stroke-width="1" stroke-dasharray="3 2"/>
			<rect x="68" y="10" width="24" height="20" rx="1" stroke="#6E747A" stroke-width="1"/>
			<text x="80" y="22" font-size="6" fill="#C8B28A" font-family="JetBrains Mono,monospace" text-anchor="middle">MPPT</text>
			<line x1="92" y1="20" x2="116" y2="20" stroke="#C8B28A" stroke-width="1" stroke-dasharray="3 2"/>
			<rect x="116" y="8" width="28" height="24" rx="1" stroke="#C8B28A" stroke-width="1.2"/>
			<rect x="119" y="12" width="6" height="15" rx="0.5" fill="#C8B28A" opacity="0.3"/>
			<rect x="127" y="12" width="6" height="15" rx="0.5" fill="#C8B28A" opacity="0.5"/>
			<rect x="135" y="12" width="6" height="15" rx="0.5" fill="#C8B28A" opacity="0.7"/>
			<text x="130" y="42" font-size="7" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">LiFePO4</text>
			<line x1="144" y1="20" x2="166" y2="20" stroke="#C8B28A" stroke-width="1" stroke-dasharray="3 2"/>
			<polygon points="166,10 190,20 166,30" stroke="#6E747A" stroke-width="1" fill="none"/>
			<text x="183" y="42" font-size="7" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">INV</text>
			<text x="53" y="15" font-size="7" fill="#C8B28A" font-family="JetBrains Mono,monospace" text-anchor="middle">↑ 40A</text>
			<text x="104" y="15" font-size="7" fill="#C8B28A" font-family="JetBrains Mono,monospace" text-anchor="middle">↓ 12V</text>
		</svg>',

		'SAFETY' => '<svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" opacity="0.7">
			<path d="M100 6 L128 16 L128 38 Q128 54 100 64 Q72 54 72 38 L72 16 Z" stroke="#B23A2A" stroke-width="1.2" fill="none"/>
			<path d="M100 14 L120 22 L120 38 Q120 50 100 58 Q80 50 80 38 L80 22 Z" stroke="#B23A2A" stroke-width="0.7" fill="rgba(178,58,42,0.08)"/>
			<line x1="100" y1="28" x2="100" y2="44" stroke="#B23A2A" stroke-width="2" stroke-linecap="round"/>
			<circle cx="100" cy="50" r="1.5" fill="#B23A2A"/>
			<text x="58" y="24" font-size="7" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="end">LOAD:</text>
			<text x="58" y="34" font-size="7" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="end">CRASH:</text>
			<text x="58" y="44" font-size="7" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="end">TEMP:</text>
			<text x="142" y="24" font-size="7" fill="#C8B28A" font-family="JetBrains Mono,monospace">20G</text>
			<text x="142" y="34" font-size="7" fill="#C8B28A" font-family="JetBrains Mono,monospace">35G</text>
			<text x="142" y="44" font-size="7" fill="#C8B28A" font-family="JetBrains Mono,monospace">-40&#176;C</text>
		</svg>',

		'INSULATION' => '<svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" opacity="0.7">
			<rect x="20" y="10" width="8" height="50" rx="0.5" fill="#C8B28A" opacity="0.7" stroke="#C8B28A" stroke-width="0.5"/>
			<text x="24" y="68" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">SKIN</text>
			<rect x="28" y="10" width="20" height="50" rx="0.5" fill="none" stroke="#6E747A" stroke-width="0.7" stroke-dasharray="2 1.5"/>
			<text x="38" y="68" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">THIN</text>
			<rect x="48" y="10" width="36" height="50" rx="0.5" fill="rgba(200,178,138,0.12)" stroke="#C8B28A" stroke-width="1"/>
			<line x1="48" y1="10" x2="84" y2="46" stroke="#C8B28A" stroke-width="0.5" opacity="0.3"/>
			<line x1="54" y1="10" x2="84" y2="40" stroke="#C8B28A" stroke-width="0.5" opacity="0.3"/>
			<line x1="60" y1="10" x2="84" y2="34" stroke="#C8B28A" stroke-width="0.5" opacity="0.3"/>
			<line x1="66" y1="10" x2="84" y2="28" stroke="#C8B28A" stroke-width="0.5" opacity="0.3"/>
			<line x1="72" y1="10" x2="84" y2="22" stroke="#C8B28A" stroke-width="0.5" opacity="0.3"/>
			<line x1="78" y1="10" x2="84" y2="16" stroke="#C8B28A" stroke-width="0.5" opacity="0.3"/>
			<text x="66" y="68" font-size="6" fill="#C8B28A" font-family="JetBrains Mono,monospace" text-anchor="middle">POLY-ISO</text>
			<rect x="84" y="10" width="6" height="50" fill="none" stroke="#6E747A" stroke-width="0.5" stroke-dasharray="1 1"/>
			<text x="87" y="68" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">VB</text>
			<rect x="90" y="10" width="10" height="50" fill="#333840" stroke="#6E747A" stroke-width="0.7"/>
			<text x="95" y="68" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">PLY</text>
			<line x1="110" y1="35" x2="140" y2="35" stroke="#6E747A" stroke-width="0.7"/>
			<text x="142" y="32" font-size="7" fill="#C8B28A" font-family="JetBrains Mono,monospace">R-24</text>
			<text x="142" y="42" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace">COMBINED</text>
		</svg>',

		'PLUMBING' => '<svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" opacity="0.7">
			<rect x="10" y="18" width="28" height="34" rx="2" stroke="#C8B28A" stroke-width="1"/>
			<rect x="14" y="22" width="20" height="26" rx="1" fill="rgba(200,178,138,0.15)"/>
			<text x="24" y="14" font-size="7" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">FRESH</text>
			<text x="24" y="58" font-size="7" fill="#C8B28A" font-family="JetBrains Mono,monospace" text-anchor="middle">30 GAL</text>
			<line x1="38" y1="35" x2="58" y2="35" stroke="#6E747A" stroke-width="1.5"/>
			<rect x="58" y="28" width="20" height="14" rx="2" stroke="#C8B28A" stroke-width="1"/>
			<text x="68" y="36" font-size="6" fill="#C8B28A" font-family="JetBrains Mono,monospace" text-anchor="middle">PUMP</text>
			<text x="68" y="50" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">55PSI</text>
			<line x1="78" y1="35" x2="110" y2="35" stroke="#6E747A" stroke-width="1.5"/>
			<circle cx="94" cy="35" r="7" stroke="#6E747A" stroke-width="0.8" fill="none"/>
			<text x="94" y="53" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">FILTER</text>
			<path d="M110 35 L118 35 L118 28 L122 28" stroke="#C8B28A" stroke-width="1.2" fill="none"/>
			<path d="M122 24 Q126 24 126 28 Q126 32 122 32" stroke="#C8B28A" stroke-width="1" fill="none"/>
			<rect x="140" y="18" width="28" height="34" rx="2" stroke="#6E747A" stroke-width="1"/>
			<text x="154" y="14" font-size="7" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">GREY</text>
			<text x="154" y="58" font-size="7" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">15 GAL</text>
			<line x1="128" y1="35" x2="140" y2="35" stroke="#6E747A" stroke-width="1" stroke-dasharray="2 1.5"/>
		</svg>',

		'SYSTEM' => '<svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" opacity="0.7">
			<rect x="40" y="15" width="120" height="40" rx="3" stroke="#C8B28A" stroke-width="1.2" fill="none"/>
			<rect x="40" y="15" width="32" height="40" rx="2" stroke="#6E747A" stroke-width="0.8" fill="none"/>
			<rect x="52" y="20" width="18" height="10" rx="1" stroke="#C8B28A" stroke-width="0.7" fill="rgba(200,178,138,0.1)"/>
			<rect x="52" y="38" width="18" height="10" rx="1" stroke="#C8B28A" stroke-width="0.7" fill="rgba(200,178,138,0.1)"/>
			<line x1="80" y1="15" x2="80" y2="55" stroke="#333840" stroke-width="1.5"/>
			<line x1="130" y1="15" x2="130" y2="55" stroke="#333840" stroke-width="1"/>
			<line x1="80" y1="35" x2="160" y2="35" stroke="#333840" stroke-width="0.8"/>
			<text x="60" y="36" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">CAB</text>
			<text x="105" y="26" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">STORAGE</text>
			<text x="145" y="26" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">GALLEY</text>
			<text x="105" y="47" font-size="6" fill="#C8B28A" font-family="JetBrains Mono,monospace" text-anchor="middle">GARAGE</text>
			<text x="145" y="47" font-size="6" fill="#6E747A" font-family="JetBrains Mono,monospace" text-anchor="middle">BED</text>
			<rect x="36" y="20" width="6" height="14" rx="1" fill="#333840" stroke="#6E747A" stroke-width="0.7"/>
			<rect x="36" y="36" width="6" height="14" rx="1" fill="#333840" stroke="#6E747A" stroke-width="0.7"/>
			<rect x="158" y="20" width="6" height="14" rx="1" fill="#333840" stroke="#6E747A" stroke-width="0.7"/>
			<rect x="158" y="36" width="6" height="14" rx="1" fill="#333840" stroke="#6E747A" stroke-width="0.7"/>
		</svg>',
	];

	return $schematics[ $tag ] ?? $schematics['SYSTEM'];
}
?>
<!-- wp:html -->
<section class="ogvl-article-grid-section" aria-labelledby="ogvl-articles-heading">
  <div class="ogvl-article-grid-section__inner">

    <!-- Section header -->
    <div class="ogvl-section-header">
      <div>
        <p class="ogvl-section-pre-label">— TECHNICAL DEEP DIVES</p>
        <h2 class="ogvl-section-heading" id="ogvl-articles-heading">Latest Documentation</h2>
      </div>
      <a href="/docs/" class="ogvl-view-all">
        VIEW ALL DOCS <span aria-hidden="true">↗</span>
      </a>
    </div>

    <!-- Filter pills -->
    <div class="ogvl-filter-pills" role="group" aria-label="Filter articles by system">
      <?php
      $filters = [ 'ALL', 'ELECTRICAL', 'SAFETY', 'INSULATION', 'PLUMBING', 'SYSTEM' ];
      foreach ( $filters as $i => $f ) :
      ?>
        <button
          class="ogvl-filter-pill<?php echo $i === 0 ? ' ogvl-filter-pill--active' : ''; ?>"
          data-filter="<?php echo esc_attr( $f ); ?>"
          aria-pressed="<?php echo $i === 0 ? 'true' : 'false'; ?>"
        ><?php echo esc_html( $f ); ?></button>
      <?php endforeach; ?>
    </div>

    <!-- Article grid -->
    <div class="ogvl-article-grid" role="list">
      <?php
      $query = new WP_Query( [
        'post_type'      => 'van_doc',
        'posts_per_page' => 6,
        'orderby'        => 'menu_order date',
        'order'          => 'DESC',
        'post_status'    => 'publish',
      ] );

      if ( $query->have_posts() ) :
        while ( $query->have_posts() ) :
          $query->the_post();

          $doc_id   = get_field( 'doc_id' )       ?: '—';
          $tag      = get_field( 'doc_tag' )       ?: 'SYSTEM';
          $read     = get_field( 'read_time' )     ?: '—';
          $svg      = get_field( 'schematic_svg' );
          $schematic = $svg ? wp_kses_post( $svg ) : ogvl_get_schematic( $tag );

          $specs = [];
          for ( $s = 1; $s <= 3; $s++ ) {
            $label = get_field( "spec_{$s}_label" );
            $value = get_field( "spec_{$s}_value" );
            if ( $label && $value ) {
              $specs[] = [ 'label' => $label, 'value' => $value ];
            }
          }

          $updated = get_the_modified_date( 'Y-m' );
          ?>

          <article
            class="article-card"
            role="listitem"
            data-tag="<?php echo esc_attr( $tag ); ?>"
          >
            <!-- Card header -->
            <div class="article-card__header">
              <span class="category-tag"><?php echo esc_html( $tag ); ?></span>
              <span class="ogvl-mono-label"><?php echo esc_html( $doc_id ); ?></span>
            </div>

            <!-- Schematic -->
            <div class="article-card__schematic" aria-hidden="true">
              <?php echo $schematic; ?>
            </div>

            <!-- Body -->
            <div class="article-card__body">
              <h3 class="article-card__title">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
              </h3>
              <p class="article-card__desc"><?php echo esc_html( get_the_excerpt() ); ?></p>

              <!-- Technical specs -->
              <?php if ( $specs ) : ?>
                <dl class="article-card__specs">
                  <?php foreach ( $specs as $spec ) : ?>
                    <div class="article-card__spec-row">
                      <dt><?php echo esc_html( $spec['label'] ); ?></dt>
                      <dd><?php echo esc_html( $spec['value'] ); ?></dd>
                    </div>
                  <?php endforeach; ?>
                </dl>
              <?php endif; ?>
            </div>

            <!-- Card footer -->
            <div class="article-card__footer">
              <span class="ogvl-mono-label">UPD <?php echo esc_html( $updated ); ?></span>
              <a href="<?php the_permalink(); ?>" class="article-card__read-link" aria-label="Read: <?php the_title_attribute(); ?>">
                <?php echo esc_html( $read ); ?> READ
                <span aria-hidden="true" class="article-card__arrow">→</span>
              </a>
            </div>
          </article>

        <?php endwhile;
        wp_reset_postdata();
      else : ?>

        <!-- No posts fallback -->
        <p class="ogvl-no-posts">
          No documentation published yet.
          <a href="<?php echo esc_url( admin_url( 'post-new.php?post_type=van_doc' ) ); ?>">Add your first doc →</a>
        </p>

      <?php endif; ?>
    </div><!-- .ogvl-article-grid -->

    <!-- Load more -->
    <div class="ogvl-load-more">
      <a href="/docs/" class="ogvl-btn-ghost">LOAD MORE DOCUMENTATION</a>
    </div>

  </div>
</section>
<!-- /wp:html -->
