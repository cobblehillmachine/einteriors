<?php get_header(); ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<div id="banner" class="container">
			<?php the_post_thumbnail('full'); ?>
			<div class="page-title">
				<?php the_title(); ?>
			</div>
		</div>
		<div id="main" class="container">
			<div class="mid-cont">
				<div id="about-info">
					<?php the_content(); ?>
				</div>
				<div id="about-img">
					<?php if( class_exists( 'kdMultipleFeaturedImages' ) ) {kd_mfi_the_featured_image( 'featured-image-2', 'page', 'full' );} ?>
				</div>
			</div>
		</div>
	<?php endwhile; ?>
<?php get_footer(); ?>