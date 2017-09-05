<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package EAA
 */

get_header();?>
	<?php
		if ( has_post_thumbnail() ) {
			$thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID), 'full' );
			$relative_url = parse_url($thumbnail[0])[path];
		?>
		<div class="ea-not-front-banner" style="background-image: url(<?php echo $relative_url ?>); background-position-y: 50%;">
			<div class="ea-overlay">
				<div class="ea-overlay-text" style="opacity: 1;">
				<?php $overlay = get_post_custom_values('banner-overlay-text', $post->ID);
				  if(is_array($overlay))
				  {
					echo "<h2>" . $overlay[0] . "</h2>";
				  }
				?>
				</div>
			</div>
	</div>

	<main id="main" class="site-main">
		<?php	
		}
		while ( have_posts() ) : the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

	</main><!-- #main -->
<?php
get_footer();
