<?php get_header(); ?>
<?php query_posts(array('post_type' => 'Projects',  'orderby' => 'rand')); ?>
	<div id="projects-cont" class="gallery-cont container">
		<div class="mid-cont">
			
				<?php while ( have_posts() ) : the_post(); ?>
					<?php $post_image_id = get_post_thumbnail_id($post_to_use->ID);
							if ($post_image_id) {
								$thumbnail = wp_get_attachment_image_src( $post_image_id, 'project-big', false);
								if ($thumbnail) (string)$thumbnail = $thumbnail[0];
					} ?>
				
					<a class="project" rel="lightbox" href="<?php echo $thumbnail; ?>">
						<?php the_post_thumbnail('project-thumb'); ?>
						<div class="project-title"><div class="cont"><span><?php the_title(); ?></span></div></div>
					</a>
				
			<?php endwhile; wp_reset_postdata(); ?>
		</div>
	</div>
<?php get_footer(); ?>