<?php
/**
 * OG Van Life: static pages (about, disclosure, etc.)
 *
 * @package ogvanlife
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<main class="ogvl-single" role="main" id="main-content">
  <div class="ogvl-single__inner">
    <?php while ( have_posts() ) : the_post(); ?>
      <header class="ogvl-single__header">
        <h1 class="ogvl-single__title"><?php the_title(); ?></h1>
      </header>
      <div class="ogvl-single__body entry-content">
        <?php the_content(); ?>
      </div>
    <?php endwhile; ?>
  </div>
</main>
<?php get_footer();
