<?php
/**
 * OG Van Life: front page
 *
 * Renders the homepage patterns in patterns/ in order.
 *
 * @package ogvanlife
 */

defined( 'ABSPATH' ) || exit;

get_header();

foreach ( [ 'hero', 'stats-band', 'engineering-principles', 'article-grid' ] as $ogvl_pattern ) {
	echo do_blocks( '<!-- wp:pattern {"slug":"ogvanlife/' . $ogvl_pattern . '"} /-->' ); // phpcs:ignore WordPress.Security.EscapeOutput
}

get_footer();
