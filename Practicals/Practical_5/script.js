$(document).ready(function () {
  $("#prepend").click(() => $("#insertBox").prepend("Start "));
  $("#append").click(() => $("#insertBox").append(" End"));
  $("#before").click(() => $("#insertBox").before("Above"));
  $("#after").click(() => $("#insertBox").after("Below"));

  $("#addClass").click(() => $("#classBox").addClass("highlight"));
  $("#removeClass").click(() => $("#classBox").removeClass("highlight"));
  $("#toggleClass").click(() => $("#classBox").toggleClass("highlight"));

  $("#mouseBox")
    .mouseenter(() => $(this).text("Mouse Enter"))
    .mouseleave(() => $(this).text("Mouse Leave"))
    .click(() => $(this).text("Clicked"))
    .contextmenu((e) => {
      e.preventDefault();
      $(this).text("Right Click");
    })
    .dblclick(() => $(this).text("Double Click"));

  $("#keyboardBox")
    .keydown(() => $(this).css("color", "red"))
    .keyup(() => $(this).css("color", "black"))
    .keypress(() => $(this).css("background", "#f0f0f0"));

  $("#formBox input")
    .focus(() => $(this).css("background", "#fff3cd"))
    .blur(() => $(this).css("background", "white"))
    .change(() => $(this).css("border", "1px solid blue"))
    .select(() => $(this).css("background", "#e9ecef"));

  $("#formBox").submit((e) => {
    e.preventDefault();
    alert("Form Submitted!");
  });

  $("#replace").click(() => {
    $("#updateBox").replaceWith('<p id="updateBox">Replaced Text</p>');
  });
  $("#remove").click(() => $("#updateBox").remove());

  $("#styleBtn").click(() => {
    $("#cssBox").css({
      color: "blue",
      "font-size": "18px",
      background: "#f0f0f0",
    });
  });

  $("#getBtn").click(() => {
    alert(
      "Text: " +
        $("#cssBox").text() +
        "\n" +
        "HTML: " +
        $("#cssBox").html() +
        "\n" +
        "Link: " +
        $("#linkTest").attr("href") +
        "\n" +
        "Input: " +
        $("#inputTest").val()
    );
  });

  $("#setBtn").click(() => {
    $("#cssBox")
      .text("New Text")
      .html("New <strong>HTML</strong>")
      .css("color", "green");
    $("#linkTest").attr("href", "https://jquery.com");
    $("#inputTest").val("New Value");
  });
});
