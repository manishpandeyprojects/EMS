<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ems' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'z`/e+K;9<9_aXkD8v72#!F_~9[FWd]6Wf{e*-7B:ILJ3x-|P)>u[wA$*Wjz4T*U)' );
define( 'SECURE_AUTH_KEY',  'E~*%8M<H7olS5C/1-h-Dx~7nxy:-fKsO^Vc&5F<fg>~pVEJ(f=/C^|DSS&0p{-n#' );
define( 'LOGGED_IN_KEY',    '2nPV0Sq3AK!PSK#7ais>g2{-=uEQ7IEA(/FR^YfdFWlw>Cbd}>!?,O_wh{@ h3) ' );
define( 'NONCE_KEY',        'Y|a+Hu42Qq8+z[=Gjo%Dm|t(!(n6eU7zNqW.@cS~K7Mh{:mf2:UE~R,HJizL<,}/' );
define( 'AUTH_SALT',        'LwG%pe, Tvt[}/P{JHFPe2H$>phKBb<w%^7X|<2k%4*4@ lFr4`,c`k.utCmR8{R' );
define( 'SECURE_AUTH_SALT', 'I W3yuiAN>]fIw=sBnVJkZ:Y0o55K{^.]qh8?232t,c+k1(w)YY*(.QNf-6_<qw+' );
define( 'LOGGED_IN_SALT',   ' xW}#70,trBg6$5F_LHwCQs~i hXp~@]f8[SLBYq9[[z=tPt>SvffP_%z`4P<*J4' );
define( 'NONCE_SALT',       'B49td~p:T3>`mY!gZ=(z/!$)asXM8Zbp30kdpxx|Kcoyl:q{r0o8Y=G>Y}.{F$-,' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
