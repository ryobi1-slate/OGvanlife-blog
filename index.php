<?php
/**
 * OG Van Life: index.php (fallback)
 *
 * Used only when no more specific template matches.
 *
 * @package ogvanlife
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<main class="ogvl-single" role="main" id="main-content">
  <div class="ogvl-single__inner">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <h2 class="ogvl-single__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
      <div class="ogvl-single__body entry-content"><?php the_excerpt(); ?></div>
    <?php endwhile; else : ?>
      <p class="ogvl-no-posts">Nothing found.</p>
    <?php endif; ?>
  </div>
</main>
<?php get_footer();
