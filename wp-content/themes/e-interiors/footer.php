<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
?>

	
		<!-- </div> -->
		<div id="footer">
			<div class="mid-cont">
				<?php get_sidebar(); ?>
				<div id="social">
					<a id="facebook" class="social-icon" target="_blank" href="#"></a>
					<a id="pinterest" class="social-icon" target="_blank" href="#"></a>
				</div>
				<div id="copyright">&copy; 2013 E Interiors, all rights reserved</div>
			</div>
		</div>
<?php wp_footer(); ?>

</body>
</html>