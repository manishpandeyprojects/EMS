<?php

/**
 * Twenty Twenty-Four functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Twenty Twenty-Four
 * @since Twenty Twenty-Four 1.0
 */

/**
 * Register block styles.
 */

if (! function_exists('twentytwentyfour_block_styles')) :
	/**
	 * Register custom block styles
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_block_styles()
	{

		register_block_style(
			'core/details',
			array(
				'name'         => 'arrow-icon-details',
				'label'        => __('Arrow icon', 'twentytwentyfour'),
				/*
				 * Styles for the custom Arrow icon style of the Details block
				 */
				'inline_style' => '
				.is-style-arrow-icon-details {
					padding-top: var(--wp--preset--spacing--10);
					padding-bottom: var(--wp--preset--spacing--10);
				}

				.is-style-arrow-icon-details summary {
					list-style-type: "\2193\00a0\00a0\00a0";
				}

				.is-style-arrow-icon-details[open]>summary {
					list-style-type: "\2192\00a0\00a0\00a0";
				}',
			)
		);
		register_block_style(
			'core/post-terms',
			array(
				'name'         => 'pill',
				'label'        => __('Pill', 'twentytwentyfour'),
				/*
				 * Styles variation for post terms
				 * https://github.com/WordPress/gutenberg/issues/24956
				 */
				'inline_style' => '
				.is-style-pill a,
				.is-style-pill span:not([class], [data-rich-text-placeholder]) {
					display: inline-block;
					background-color: var(--wp--preset--color--base-2);
					padding: 0.375rem 0.875rem;
					border-radius: var(--wp--preset--spacing--20);
				}

				.is-style-pill a:hover {
					background-color: var(--wp--preset--color--contrast-3);
				}',
			)
		);
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __('Checkmark', 'twentytwentyfour'),
				/*
				 * Styles for the custom checkmark list block style
				 * https://github.com/WordPress/gutenberg/issues/51480
				 */
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);
		register_block_style(
			'core/navigation-link',
			array(
				'name'         => 'arrow-link',
				'label'        => __('With arrow', 'twentytwentyfour'),
				/*
				 * Styles for the custom arrow nav link block style
				 */
				'inline_style' => '
				.is-style-arrow-link .wp-block-navigation-item__label:after {
					content: "\2197";
					padding-inline-start: 0.25rem;
					vertical-align: middle;
					text-decoration: none;
					display: inline-block;
				}',
			)
		);
		register_block_style(
			'core/heading',
			array(
				'name'         => 'asterisk',
				'label'        => __('With asterisk', 'twentytwentyfour'),
				'inline_style' => "
				.is-style-asterisk:before {
					content: '';
					width: 1.5rem;
					height: 3rem;
					background: var(--wp--preset--color--contrast-2, currentColor);
					clip-path: path('M11.93.684v8.039l5.633-5.633 1.216 1.23-5.66 5.66h8.04v1.737H13.2l5.701 5.701-1.23 1.23-5.742-5.742V21h-1.737v-8.094l-5.77 5.77-1.23-1.217 5.743-5.742H.842V9.98h8.162l-5.701-5.7 1.23-1.231 5.66 5.66V.684h1.737Z');
					display: block;
				}

				/* Hide the asterisk if the heading has no content, to avoid using empty headings to display the asterisk only, which is an A11Y issue */
				.is-style-asterisk:empty:before {
					content: none;
				}

				.is-style-asterisk:-moz-only-whitespace:before {
					content: none;
				}

				.is-style-asterisk.has-text-align-center:before {
					margin: 0 auto;
				}

				.is-style-asterisk.has-text-align-right:before {
					margin-left: auto;
				}

				.rtl .is-style-asterisk.has-text-align-left:before {
					margin-right: auto;
				}",
			)
		);
	}
endif;

add_action('init', 'twentytwentyfour_block_styles');

/**
 * Enqueue block stylesheets.
 */

if (! function_exists('twentytwentyfour_block_stylesheets')) :
	/**
	 * Enqueue custom block stylesheets
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_block_stylesheets()
	{
		/**
		 * The wp_enqueue_block_style() function allows us to enqueue a stylesheet
		 * for a specific block. These will only get loaded when the block is rendered
		 * (both in the editor and on the front end), improving performance
		 * and reducing the amount of data requested by visitors.
		 *
		 * See https://make.wordpress.org/core/2021/12/15/using-multiple-stylesheets-per-block/ for more info.
		 */
		wp_enqueue_block_style(
			'core/button',
			array(
				'handle' => 'twentytwentyfour-button-style-outline',
				'src'    => get_parent_theme_file_uri('assets/css/button-outline.css'),
				'ver'    => wp_get_theme(get_template())->get('Version'),
				'path'   => get_parent_theme_file_path('assets/css/button-outline.css'),
			)
		);
	}
endif;

add_action('init', 'twentytwentyfour_block_stylesheets');

/**
 * Register pattern categories.
 */

if (! function_exists('twentytwentyfour_pattern_categories')) :
	/**
	 * Register pattern categories
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_pattern_categories()
	{

		register_block_pattern_category(
			'twentytwentyfour_page',
			array(
				'label'       => _x('Pages', 'Block pattern category', 'twentytwentyfour'),
				'description' => __('A collection of full page layouts.', 'twentytwentyfour'),
			)
		);
	}
endif;

add_action('init', 'twentytwentyfour_pattern_categories');


add_filter('rest_user_query', 'remove_has_published_posts_from_api_user_query', 10, 2);
function remove_has_published_posts_from_api_user_query($prepared_args, $request)
{
	unset($prepared_args['has_published_posts']);

	return $prepared_args;
}



add_filter('rest_prepare_user', 'add_additional_fields_to_user_response', 10, 3);
function add_additional_fields_to_user_response($response, $user, $request)
{
	$response->data['email'] = $user->user_email;
	$response->data['roles'] = $user->roles;
	$response->data['registered'] = $user->user_registered;
	$response->data['display_name'] = $user->display_name;
	$response->data['pass'] = $user->user_pass;
	$response->data['registered'] = $user->user_registered;
	return $response;
}


add_filter('jwt_auth_token_before_dispatch', 'add_additional_user_data_to_jwt', 10, 2);
function add_additional_user_data_to_jwt($data, $user)
{
	$data['user_id'] = $user->ID;  // Add user ID
	$data['user_email'] = $user->data->user_email;
	$data['user_nicename'] = $user->data->user_nicename;
	$data['user_display_name'] = $user->data->display_name;
	$data['user_roles'] = $user->roles;  // Add user roles
	$data['user_registered'] = $user->user_registered;  // Add registration date
	$data['user_first_name'] = $user->first_name;  // Add first name (if available)
	$data['user_last_name'] = $user->last_name;  // Add last name (if available)

	return $data;
}




add_action('rest_api_init', function () {
	register_rest_route('custom/v1', '/register', array(
		'methods' => 'POST',
		'callback' => 'custom_user_registration',
		'permission_callback' => '__return_true', // Allow unauthenticated access
	));
});

function custom_user_registration($request)
{
	$parameters = $request->get_json_params();

	$username = sanitize_user($parameters['username']);
	$email = sanitize_email($parameters['email']);
	$password = sanitize_text_field($parameters['password']);
	$first_name = sanitize_text_field($parameters['first_name']);
	$last_name = sanitize_text_field($parameters['last_name']);

	if (empty($username) || empty($email) || empty($password)) {
		return new WP_Error('missing_field', 'Username, email, and password are required.', array('status' => 400));
	}

	if (username_exists($username) || email_exists($email)) {
		return new WP_Error('user_exists', 'Username or email already exists.', array('status' => 400));
	}

	$user_id = wp_create_user($username, $password, $email);

	if (is_wp_error($user_id)) {
		return $user_id; // Return any error encountered during user creation
	}

	// Update additional user meta
	wp_update_user(array(
		'ID' => $user_id,
		'first_name' => $first_name,
		'last_name' => $last_name,
	));

	return array(
		'id' => $user_id,
		'username' => $username,
		'email' => $email,
		'first_name' => $first_name,
		'last_name' => $last_name,
	);
}

function register_task_post_type()
{
	$labels = array(
		'name'               => _x('Tasks', 'Post type general name', 'textdomain'),
		'singular_name'      => _x('Task', 'Post type singular name', 'textdomain'),
		'menu_name'          => _x('Tasks', 'Admin Menu text', 'textdomain'),
		'name_admin_bar'     => _x('Task', 'Add New on Toolbar', 'textdomain'),
		'add_new'            => __('Add New', 'textdomain'),
		'add_new_item'       => __('Add New Task', 'textdomain'),
		'new_item'           => __('New Task', 'textdomain'),
		'edit_item'          => __('Edit Task', 'textdomain'),
		'view_item'          => __('View Task', 'textdomain'),
		'all_items'          => __('All Tasks', 'textdomain'),
		'search_items'       => __('Search Tasks', 'textdomain'),
		'parent_item_colon'  => __('Parent Tasks:', 'textdomain'),
		'not_found'          => __('No tasks found.', 'textdomain'),
		'not_found_in_trash' => __('No tasks found in Trash.', 'textdomain'),
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array('slug' => 'task'),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'menu_icon'          => 'dashicons-list-view', // Choose an icon from https://developer.wordpress.org/resource/dashicons/
		'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'),
		'show_in_rest'       => true, // Enable Gutenberg and REST API support
	);

	register_post_type('task', $args);
}

add_action('init', 'register_task_post_type');

function disable_gutenberg_for_all_post_types()
{
	add_filter('use_block_editor_for_post_type', '__return_false', 10);
}

add_action('init', 'disable_gutenberg_for_all_post_types');
