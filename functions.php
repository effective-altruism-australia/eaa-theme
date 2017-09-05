<?php
/**
 * EAA functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package EAA
 */

if ( ! function_exists( 'eaa_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function eaa_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on EAA, use a find and replace
		 * to change 'eaa' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'eaa', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'primary', 'eaa' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'eaa_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'eaa_setup' );

// Prevent wordpress from modifying page markup
remove_filter( 'the_content', 'wpautop' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function eaa_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'eaa_content_width', 640 );
}
add_action( 'after_setup_theme', 'eaa_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function eaa_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'eaa' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'eaa' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'eaa_widgets_init' );

function get_pagename()
{
	$pagename = get_query_var('pagename');  
	if ( !$pagename && $id > 0 ) {  
		// If a static page is set as the front page, $pagename will not be set. Retrieve it from the queried object  
		$post = $wp_query->get_queried_object();  
		$pagename = $post->post_name;  
	}
	return $pagename;
}

/**
 * Enqueue styles
 */
function eaa_styles() {
	wp_enqueue_style( 'slick', get_template_directory_uri() . '/css/slick.css');
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css');
	wp_enqueue_style( 'bootstrap-theme', get_template_directory_uri() . '/css/bootstrap-theme.min.css');
	wp_enqueue_style( 'eaa-style', get_stylesheet_uri() );
	wp_enqueue_style( 'navigation', get_template_directory_uri() . '/css/navigation/navigation.css');
	wp_enqueue_style( 'ea-faq', get_template_directory_uri() . '/css/faq.css');

	// Apply fading navigation if there is no featured image.
	if (has_post_thumbnail() || is_front_page()) {
		wp_enqueue_style( 'navigation-fade', get_template_directory_uri() . '/css/navigation/navigation-fade.css');
	}
}

/**
 * Enqueue scripts
 */
function eaa_scripts() {
	wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery'));
	wp_enqueue_script( 'slick-js', get_template_directory_uri() . '/js/slick.min.js', array('jquery'));
	wp_enqueue_script( 'navigation', get_template_directory_uri() . '/js/navigation.js', array('jquery'));

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Include page-specific scripts
	switch(get_pagename()) // post_name is the post slug which is more consistent for matching to here
	{
		case 'videos':
			wp_enqueue_script('video', get_template_directory_uri() . '/js/video/video.js', array('jquery'));
			break;
	}
}

add_action( 'wp_enqueue_scripts', 'eaa_styles' );
add_action( 'wp_enqueue_scripts', 'eaa_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load custom WordPress nav walker.
 */
 require get_template_directory() . '/inc/wp-bootstrap-navwalker.php';

 // Bootstrap navigation
function bootstrap_nav()
{
	wp_nav_menu( array(
			'theme_location' => 'menu-1',
			'menu_id'        => 'primary-menu',
			'depth'             => 2,
			'container'         => 'div',
			'container_class'   => 'collapse navbar-collapse',
			'container_id'      => 'navbar-collapse',
            'menu_class'        => 'nav navbar-nav',
            'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
            'walker'            => new wp_bootstrap_navwalker())
    );
}

/**
 * Filter the excerpt "read more" string.
 *
 * @param string $more "Read more" excerpt string.
 * @return string (Maybe) modified "read more" excerpt string.
 */
function wpdocs_excerpt_more( $more ) {
    return '';
}
// Remove elipse after blog posts.
add_filter( 'excerpt_more', 'wpdocs_excerpt_more' );

