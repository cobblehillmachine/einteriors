<?php get_header(); ?>

<div class="container">
	<!-- <div class="mid-cont"> -->
		<div id="carousel">
			<!-- <div class="mid-cont">
				<div id="buttons">
					<a href="#" id="prev" class="control"></a>
					<div id="play" class="control"></div>
					<a href="#" id="next" class="control"></a>
				</div>
			</div>
	
			<div class="clear"></div> -->

			<div id="slides"> 
				<div class="slides-cont">
					<?php while ( have_posts() ) : the_post(); ?>
						<?php the_content(); ?>
					<?php endwhile; ?>
				</div>
			</div>

		</div>
	<!-- </div> -->
</div>


<?php get_footer(); ?>