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
				<div id="contact-info">
					<?php the_content(); ?>
				</div>
			</div>
		</div>
		<div id="contact-form" class="container">
			<div class="mid-cont">
				<?php echo do_shortcode('[contact-form-7 id="27" title="Contact form 1"]'); ?>
			</div>
		</div>
	<?php endwhile; ?>
<?php get_footer(); ?>