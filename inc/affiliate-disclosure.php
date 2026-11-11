<?php
/**
 * OG Van Life: Affiliate disclosure
 *
 * The disclosure wording lives here and nowhere else. Edit
 * ogvl_affiliate_disclosure_text() once and every flagged post updates.
 * A van_doc shows it, prepended to the content via the_content, only when
 * its ACF true/false field "has_affiliate_links" is on.
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
 * Build the disclosure block markup for a post, or '' when the post is
 * not flagged. Does not depend on any template.
 */
function ogvl_get_affiliate_disclosure_html( int $post_id ): string {
	if ( ! function_exists( 'get_field' ) || ! get_field( 'has_affiliate_links', $post_id ) ) {
		return '';
	}

	return sprintf(
		'<aside class="ogvl-disclosure" role="note" aria-label="Affiliate disclosure"><p class="ogvl-disclosure__label">AFFILIATE DISCLOSURE</p><p class="ogvl-disclosure__body">%s <a href="%s">Full disclosure</a></p></aside>',
		esc_html( ogvl_affiliate_disclosure_text() ),
		esc_url( ogvl_affiliate_disclosure_url() )
	);
}

/**
 * Prepend the disclosure to the content of flagged van_doc posts.
 * Front end, singular, main loop only, so excerpts, feeds, REST
 * responses and secondary queries are untouched.
 */
add_filter( 'the_content', function ( string $content ): string {
	if ( is_admin() || ! is_singular( 'van_doc' ) || ! in_the_loop() || ! is_main_query() ) {
		return $content;
	}

	return ogvl_get_affiliate_disclosure_html( (int) get_the_ID() ) . $content;
} );
