<?php
/**
 * Build the sidebars.
 *
 * @package GeneratePress
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'generate_construct_sidebars' ) ) {
	add_action( 'generate_sidebars', 'generate_construct_sidebars' );
	/**
	 * Construct the sidebars.
	 *
	 * @since 0.1
	 */
	function generate_construct_sidebars() {
		// Get the layout.
		$layout = generate_get_layout();

		// When to show the right sidebar.
		$rs = array( 'right-sidebar', 'both-sidebars', 'both-right', 'both-left' );

		// When to show the left sidebar.
		$ls = array( 'left-sidebar', 'both-sidebars', 'both-right', 'both-left' );

		// If left sidebar, show it.
		if ( in_array( $layout, $ls ) ) {
			get_sidebar( 'left' );
		}

		// If right sidebar, show it.
		if ( in_array( $layout, $rs ) ) {
			get_sidebar();
		}
	}
}