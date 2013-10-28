<?php get_header(); ?>

	<div id="shop-cont" class="gallery-cont container">
		<div class="mid-cont">
			<?php while ( have_posts() ) : the_post(); ?>
				<div id="shop-title"><?php the_content(); ?></div>
			<?php endwhile; wp_reset_postdata(); ?>
			
			<div id="shop-categories" class="container">
				<div id="cat-cont">
					<?php global $ancestor;	$childcats = get_categories(array('child_of' => 3 , 'order' => 'DESC')); ?>
						<?php foreach ($childcats as $childcat) {
					  		if (cat_is_ancestor_of($ancestor, $childcat->cat_ID) == false){ ?>					
						    	<div id="<?php echo strtolower(str_replace(' ','-',$childcat->cat_name)); ?>" class="cat-item futura-cond-med for-desktop"><?php echo $childcat->cat_name; ?></div>
						
						<?php }}  echo '<div id="view-all" class="cat-item">VIEW ALL</div>'; ?>
				</div>
			</div>
							
			<?php query_posts(array('post_type' => 'Products',  'orderby' => 'rand')); ?>
			<div id="products-cont">
				<?php while ( have_posts() ) : the_post(); ?>			
					<div id="<?php echo strtolower(str_replace(' ','-',get_the_title())); ?>" class="product <?php foreach((get_the_category()) as $category) {echo strtolower(str_replace(' ','-',$category->cat_name)); } ?>">
						<?php the_post_thumbnail('project-thumb'); ?>
						<div class="project-title"><div class="cont"><span><?php the_title(); ?></span></div></div>
					</div>			
				<?php endwhile; wp_reset_postdata(); ?>
			</div>
			<?php while ( have_posts() ) : the_post(); ?>
		
					<div class="product-overlay <?php echo strtolower(str_replace(' ','-',get_the_title())); ?>">
						<div id="close" onclick="closeOverlay();"></div>
						<?php the_post_thumbnail('project-big'); ?>
						<div class="info-cont">
							<div class="product-title"><?php the_title(); ?></div>
							<div class="info">email or call for pricing and availability</div>
							<a class="button" href="mailto:info@einteriors.us?subject=Inquiry about <?php the_title(); ?>">contact us</a>
						</div>
					</div>
				
			<?php endwhile; wp_reset_postdata(); ?>
		</div>
	</div>
	<div class="overlay"></div>
<?php get_footer(); ?>