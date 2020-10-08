/**
 *  Redirect header navigation links to different translated versions of the current page
 */
$(document).ready(function () {
  $("body > header > div > nav > li > a").each(function () {
    var oldUrl = $(this).attr("href"); // Get current translation url
    var newUrl = `${oldUrl}/${location.pathname.split("/").slice(3).join("/")}`.replace('/zh/','/');
    $(this).attr("href", newUrl); // Set herf value
  });
});
