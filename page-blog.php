<?php 
/*
	Template Name: Blog
*/
?>
<?php get_header(); ?>
	<article>
        <div class="container-fluid ea-container-max-width">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="page-header">Blogs</h1>
                </div>              
            </div>
            <?php // Display blog posts on any page @ https://m0n.co/l
            $temp = $wp_query; $wp_query= null;
            $wp_query = new WP_Query(); $wp_query->query('posts_per_page=5' . '&paged='.$paged);
            while ($wp_query->have_posts()) : $wp_query->the_post(); ?>

            <h2><a href="<?php the_permalink(); ?>" title="Read more"><?php the_title(); ?></a></h2>
            <?php the_excerpt(); ?>
            <a href="<?php the_permalink(); ?>" title="Read more">Read More</a>
            <?php endwhile; ?>

            <?php if ($paged > 1) { ?>

            <nav id="nav-posts">
                <div class="prev"><?php next_posts_link('&laquo; Previous Posts'); ?></div>
                <div class="next"><?php previous_posts_link('Newer Posts &raquo;'); ?></div>
            </nav>

            <?php } else { ?>

            <nav id="nav-posts">
                <div class="prev"><?php next_posts_link('&laquo; Previous Posts'); ?></div>
            </nav>

            <?php } ?>

            <?php wp_reset_postdata(); ?>
        </div>
	</article>

<?php get_footer(); ?>