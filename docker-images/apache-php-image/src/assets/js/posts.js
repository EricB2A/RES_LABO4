$("document").ready(function () {
  function getData() {
    $.ajax({
      url: "http://poubel.le:8080/api/posts/",
      context: document.body,
    }).done(function (data) {
      $("#post_title").text(data[0].title);
      $("#post_content").text(data[0].content);
    })
  }
  getData()
  setInterval(getData, 5000);
});
