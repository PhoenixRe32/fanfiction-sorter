function sortByFavs(f, e) {
  const favregex = /Favs: [0-9]+/;
  return sortBy(f, e, favregex);
}
function sortByFoll(f, e) {
  const folregex = /Follows: [0-9]+/;
  return sortBy(f, e, folregex);
}
function sortBy(f, e, regex) {
  const d = Number((f.html.match(regex) || ["invalid: -1"])[0].split(': ')[1]);
  const g = Number((e.html.match(regex) || ["invalid: -1"])[0].split(': ')[1]);
  return (d < g) ? - 1 : 1;
}

stories_init(st_array, '.mystories');
  st_array.sort(sortByReviews);
  storylist_draw('st_inside', st_array, 1, 1, 0);

stories_init(fs_array, '.favstories'); fs_array.sort(sortByFoll); storylist_draw('fs_inside', fs_array, 1, 1, 1);
stories_init(fs_array, '.mystories'); fs_array.sort(sortByFoll); storylist_draw('fs_inside', fs_array, 1, 1, 0);
stories_init(st_array, '.mystories'); st_array.sort(sortByFoll); storylist_draw('st_inside', st_array, 1, 1, 0);

stories_init(fs_array, '.favstories'); fs_array.sort(sortByFavs); storylist_draw('fs_inside', fs_array, 1, 1, 1);
stories_init(fs_array, '.mystories'); fs_array.sort(sortByFavs); storylist_draw('fs_inside', fs_array, 1, 1, 0);


function storylist_draw(g, b, e, f, d) {
  var a = storylist_render(b, e, f, d);
  if (a.length <= 0) {
    return 0;
  }
  $('#' + g).html(a);
}

fs_array = [
  {
    html: "<div class=\"z-list favstories\" style=\"min-height:77px;border-bottom:1px #cdcdcd solid;\" data-category=\"Tales of Symphonia\" data-storyid=\"3076540\" data-title=\"I hate Mithos\" data-wordcount=\"201\" data-datesubmit=\"1154313612\" data-dateupdate=\"1154313612\" data-ratingtimes=\"5\" data-chapters=\"1\" data-statusid=\"2\"><a class=\"stitle\" href=\"/s/3076540/1/I-hate-Mithos\"><img class=\"lazy cimage \" style=\"clear:left;float:left;margin-right:3px;padding:2px;border:1px solid #ccc;-moz-border-radius:2px;-webkit-border-radius:2px;\" src=\"//ff74.b-cdn.net/static/images/d_60_90.jpg\" data-original=\"//ff74.b-cdn.net/image/1841474/75/\" width=\"50\" height=\"66\">I hate Mithos</a>  by <a href=\"/u/535034/Cerby\">Cerby</a>  <a class=\"reviews\" href=\"/r/3076540/\">reviews</a>\n\t<div class=\"z-indent z-padtop\">A drabble. Takes place during I fell in a video game, just some thoughts on a particular scene in Ozette. Fans should be able to tell where and when... Could be seen as a spoiler, but I don't think so.<div class=\"z-padtop2 xgray\">Tales of Symphonia - Rated: K+ - English - Chapters: 1 - Words: 201 - Reviews: 5 - Favs: 2 - Published: <span data-xutime=\"1154313612\">Jul 31, 2006</span> - Complete</div></div></div>",
    title: "I hate Mithos",
    titlelower: "i hate mithos",
    category: "tales of symphonia",
    storyid: 3076540,
    datesubmit: 1154313612,
    datesubmittext: "Jul 31, 2006",
    dateupdate: 1154313612,
    dateupdatetext: "Jul 31, 2006",
    ratingtimes: 5,
    chapters: 1,
    wordcount: 201,
    statusid: 2
  }
]