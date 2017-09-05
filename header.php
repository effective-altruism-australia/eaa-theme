<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package EAA
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<header id="navbar" class="navbar navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<a href="#" class="navbar-left logo">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/ea_au_logo.png">
				</a>
			<!-- .navbar-toggle is used as the toggle for collapsed navbar content -->
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
					<span class="sr-only"><?php _e('Toggle navigation','eaa') ?> </span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div> <!-- navbar-header -->

				<!-- Bootstrap navigation -->
				<nav id="site-navigation" class="main-navigation navbar-right">
					<?php	bootstrap_nav()	?>
				</nav><!-- #site-navigation -->

		</div><!-- .container-fluid -->
	</header><!-- #masthead -->
