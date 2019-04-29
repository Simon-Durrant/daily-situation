var name = prompt("What's your name, quest seeker?")
alert("You've just woken up and you are very hungry. A dragon stands above you and asks 'Would you like any toast " + name + "?' and hands you a piece of bread.");
var toast = prompt("Would you like toast?");
var alive = true;


if (toast.toUpperCase(toast) === "YES") {
  alive = false;
  document.write("<p>'Toast it is then " + name + "' says the dragon and crisps you up right there where you lay... You are dead. Here Lies " + name + ".</p>");

} else {

  alert("'I guess you want to get up first then'" + name + "?");

  var rise = prompt("Do you want to get up yet?");

  if (rise.toUpperCase(rise) === "YES") {
    alert("You get up and move to the breakfast bar. 'Are you ready for your toast now " + name + "?' says the dragon.");
    var eat = prompt("Do you want the dragon to make your toast for you?");

  } else {

    document.write("<p>'That's it " + name + "! Why do you even have me stay over. You only want me for one thing.' The dragon looks hungry for a Full English and you're the main feature on their plate. You are dead. Here Lies " + name + ".</p>");
    alive = false;
  }
  if (eat.toUpperCase(eat) === "YES") {
    document.write("<p>The dragon lets out an almighty flame straight at the bread you are still holding. You are dead. Here Lies " + name + ".</p>");
    ave = false;
  } else {
    document.write("<p>'Why am I even here " + name + "?!' The dragon looks really peeved with you and crisps you up right where you lay. You are dead. Here Lies " + name + ".</p>");
    alive = false;
  }
}
