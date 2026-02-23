<?php
/**
 * OG Van Life — Custom Post Type: van_doc
 *
 * Registers the Van Documentation CPT and its taxonomy.
 * ACF field groups are defined in acf-json/ and synced automatically.
 *
 * @package ogvanlife
 */

defined( 'ABSPATH' ) || exit;

// ─── Register CPT ────────────────────────────────────────────────────────────

add_action( 'init', function () {
	$labels = [
		'name'                  => _x( 'Van Docs', 'post type general name', 'ogvanlife' ),
		'singular_name'         => _x( 'Van Doc', 'post type singular name', 'ogvanlife' ),
		'menu_name'             => _x( 'Van Docs', 'admin menu', 'ogvanlife' ),
		'name_admin_bar'        => _x( 'Van Doc', 'add new on admin bar', 'ogvanlife' ),
		'add_new'               => _x( 'Add New', 'van doc', 'ogvanlife' ),
		'add_new_item'          => __( 'Add New Van Doc', 'ogvanlife' ),
		'new_item'              => __( 'New Van Doc', 'ogvanlife' ),
		'edit_item'             => __( 'Edit Van Doc', 'ogvanlife' ),
		'view_item'             => __( 'View Van Doc', 'ogvanlife' ),
		'all_items'             => __( 'All Van Docs', 'ogvanlife' ),
		'search_items'          => __( 'Search Van Docs', 'ogvanlife' ),
		'not_found'             => __( 'No Van Docs found.', 'ogvanlife' ),
		'not_found_in_trash'    => __( 'No Van Docs found in Trash.', 'ogvanlife' ),
	];

	register_post_type( 'van_doc', [
		'labels'             => $labels,
		'description'        => __( 'Technical documentation articles for Sprinter van builds.', 'ogvanlife' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_nav_menus'  => true,
		'show_in_rest'       => true,
		'query_var'          => true,
		'rewrite'            => [ 'slug' => 'docs', 'with_front' => false ],
		'capability_type'    => 'post',
		'has_archive'        => 'docs',
		'hierarchical'       => false,
		'menu_position'      => 5,
		'menu_icon'          => 'dashicons-book-alt',
		'supports'           => [ 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'custom-fields' ],
	] );
} );

// ─── Register doc_system Taxonomy ────────────────────────────────────────────

add_action( 'init', function () {
	$labels = [
		'name'              => _x( 'Systems', 'taxonomy general name', 'ogvanlife' ),
		'singular_name'     => _x( 'System', 'taxonomy singular name', 'ogvanlife' ),
		'search_items'      => __( 'Search Systems', 'ogvanlife' ),
		'all_items'         => __( 'All Systems', 'ogvanlife' ),
		'edit_item'         => __( 'Edit System', 'ogvanlife' ),
		'update_item'       => __( 'Update System', 'ogvanlife' ),
		'add_new_item'      => __( 'Add New System', 'ogvanlife' ),
		'new_item_name'     => __( 'New System Name', 'ogvanlife' ),
		'menu_name'         => __( 'Systems', 'ogvanlife' ),
	];

	register_taxonomy( 'doc_system', [ 'van_doc' ], [
		'labels'            => $labels,
		'hierarchical'      => false,
		'public'            => true,
		'show_in_rest'      => true,
		'rewrite'           => [ 'slug' => 'docs/system' ],
	] );
} );

// ─── Flush rewrite rules on activation ───────────────────────────────────────

register_activation_hook( __FILE__, function () {
	// CPT registration runs on 'init', so trigger it first
	do_action( 'init' );
	flush_rewrite_rules();
} );
