function updatTime() {
  let phoenixElement = document.querySelector("#phoenix");
  let phoenixDateElement = phoenixElement.querySelector(".date");
  let phoenixTimeElement = phoenixElement.querySelector(".time");
  let phoenixTime = moment().tz("America/Phoenix");

  phoenixDateElement.innerHTML = phoenixTime.format("MMMM Do YYYY");
  phoenixTimeElement.innerHTML = phoenixTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let denverElement = document.querySelector("#denver");
  let denverDateElement = denverElement.querySelector(".date");
  let denverTimeElement = denverElement.querySelector(".time");
  let denverTime = moment().tz("America/denver");

  denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
  denverTimeElement.innerHTML = denverTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updatTime;
setInterval(updatTime, 1000);
