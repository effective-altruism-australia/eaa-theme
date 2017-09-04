<?php
/**
 * The template for displaying the front-page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package EAA
 */

get_header(); 
    get_template_part( 'template-parts/content', 'frontbanner' );?>
	<div class="main-container container-fluid">
		<div id="primary" class="content-area">
			<main id="main" class="site-main">

				<?php
				while ( have_posts() ) : the_post();

					get_template_part( 'template-parts/content', 'page' );

					// If comments are open or we have at least one comment, load up the comment template.
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;

				endwhile; // End of the loop.
				?>

			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- container -->
<?php
get_footer();
