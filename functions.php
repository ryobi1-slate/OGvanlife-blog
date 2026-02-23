<?php
/**
 * OG Van Life — functions.php
 *
 * Handles: asset enqueueing, theme support, navigation menus,
 * CPT registration, ACF JSON sync, and block pattern registration.
 */

defined( 'ABSPATH' ) || exit;

// ─── Theme Setup ────────────────────────────────────────────────────────────

add_action( 'after_setup_theme', function () {
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_editor_style( 'assets/css/theme.css' );
	add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ] );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );

	register_nav_menus( [
		'primary' => __( 'Primary Navigation', 'ogvanlife' ),
	] );
} );

// ─── Enqueue Assets ─────────────────────────────────────────────────────────

add_action( 'wp_enqueue_scripts', function () {
	// Google Fonts — Space Grotesk, Inter, JetBrains Mono
	wp_enqueue_style(
		'ogvanlife-fonts',
		'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap',
		[],
		null
	);

	// Preconnect hints (output via wp_head)
	add_action( 'wp_head', function () {
		echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
		echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
	}, 1 );

	// Main theme stylesheet
	wp_enqueue_style(
		'ogvanlife-theme',
		get_template_directory_uri() . '/assets/css/theme.css',
		[ 'ogvanlife-fonts' ],
		'1.0.0'
	);

	// JavaScript — all loaded in footer
	wp_enqueue_script(
		'ogvanlife-bar-chart',
		get_template_directory_uri() . '/assets/js/bar-chart.js',
		[],
		'1.0.0',
		true
	);

	wp_enqueue_script(
		'ogvanlife-mobile-menu',
		get_template_directory_uri() . '/assets/js/mobile-menu.js',
		[],
		'1.0.0',
		true
	);

	wp_enqueue_script(
		'ogvanlife-filter-tabs',
		get_template_directory_uri() . '/assets/js/filter-tabs.js',
		[],
		'1.0.0',
		true
	);
} );

// ─── CPT & ACF ──────────────────────────────────────────────────────────────

require_once get_template_directory() . '/inc/van-doc-cpt.php';

// ACF JSON sync — save field groups to acf-json/ for version control
add_filter( 'acf/settings/save_json', function () {
	return get_template_directory() . '/acf-json';
} );

add_filter( 'acf/settings/load_json', function ( $paths ) {
	$paths[] = get_template_directory() . '/acf-json';
	return $paths;
} );

// ─── Block Patterns ──────────────────────────────────────────────────────────

add_action( 'init', function () {
	register_block_pattern_category( 'ogvanlife', [
		'label' => __( 'OG Van Life', 'ogvanlife' ),
	] );
} );

// Patterns are auto-registered from the patterns/ directory by WordPress 6.0+
// (files with a <?php header comment declaring Title, Slug, etc.)

// ─── Excerpt Length ──────────────────────────────────────────────────────────

add_filter( 'excerpt_length', fn() => 30 );
add_filter( 'excerpt_more', fn() => '…' );

// ─── Security: remove version from assets ───────────────────────────────────

add_filter( 'style_loader_src',  fn( $src ) => remove_query_arg( 'ver', $src ) );
add_filter( 'script_loader_src', fn( $src ) => remove_query_arg( 'ver', $src ) );
