<?php
/**
 * OG Van Life: Affiliate disclosure
 *
 * The disclosure wording lives here and nowhere else. Edit
 * ogvl_affiliate_disclosure_text() once and every flagged post updates.
 * A van_doc shows it only when its ACF true/false field
 * "has_affiliate_links" is on.
 *
 * @package ogvanlife
 */

defined( 'ABSPATH' ) || exit;

/**
 * The one place the disclosure wording is defined.
 */
function ogvl_affiliate_disclosure_text(): string {
	return 'Some links below are affiliate links. If you buy through them, OG Vanlife earns a commission at no cost to you. Parts are chosen on the engineering first. If the right part has no affiliate program, it gets recommended anyway.';
}

/**
 * Path of the full disclosure page (WordPress Page, slug "disclosure").
 */
function ogvl_affiliate_disclosure_url(): string {
	return home_url( '/disclosure/' );
}

/**
 * Echo the disclosure block when the current post is flagged.
 * Call inside the loop, above the post content.
 */
function ogvl_render_affiliate_disclosure( ?int $post_id = null ): void {
	$post_id = $post_id ?: get_the_ID();

	if ( ! $post_id || ! function_exists( 'get_field' ) || ! get_field( 'has_affiliate_links', $post_id ) ) {
		return;
	}
	?>
	<aside class="ogvl-disclosure" role="note" aria-label="Affiliate disclosure">
		<p class="ogvl-disclosure__label">AFFILIATE DISCLOSURE</p>
		<p class="ogvl-disclosure__body">
			<?php echo esc_html( ogvl_affiliate_disclosure_text() ); ?>
			<a href="<?php echo esc_url( ogvl_affiliate_disclosure_url() ); ?>">Full disclosure</a>
		</p>
	</aside>
	<?php
}
