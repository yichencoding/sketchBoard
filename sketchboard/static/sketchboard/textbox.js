//////////////////////////////////////////////////////
//////////////////TEXT BOX////////////////////////////
//////////////////////////////////////////////////////
  function init(boxes) {
    $(boxes).each(function() {
      console.log("color of this: "+this.fields.color);
      $("#mainboard").append("<div class='editor' id='"+this.pk+"'></div>");
      var fullName = "div#"+this.pk;
      ////////////////////////////////////////////////////////

      $(fullName).css("background-color", this.fields.color);
       //$( fullName).append( "<button class='deletebox' id='box"+this.pk+"'> testdelete </button>" );
      $(fullName).froalaEditor({
        key: 'FE3G3E2E1uB5A2A1C3A5F1D4E1H4A11hD9B6E2E4E3F2H3B7C10D5B4F3E2==',
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['alert','delete', 'bold','color', 'italic', 'underline', 'strikeThrough', '-', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '-', 'undo', 'redo'],//'insertImage', 'insertLink', 'insertFile','insertVideo' , 'insertImage',
        // imageEditButtons: ['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'],
        toolbarVisibleWithoutSelection: true,
        placeholderText: 'I\'m your textbox :-)',
        height: 100,
        width: 200,
        quickInsertTags:['']
      });
      console.log("created! id: "+this.pk);
      dragElement(document.getElementById((this.pk)));
    

      $(fullName).on('froalaEditor.focus', function (e, editor) {
        $(".tools").attr("data-active", false);
        $("#textbox").attr("data-active", true);
        $("#defaultCanvas0").css("z-index", "-1");  
        $.ajax({
          url: "/sketchboard/send_disable",
          type: "POST",
          traditional: true,
          data: { id : $(fullName).attr('id'),
          socket_id: socketId,
          csrfmiddlewaretoken: getCSRFToken() },
          dataType : "json",
        });
      
      //$( fullName).append( "<button class='deletebox' id='box"+this.id+"'> delete </button>" );
      $(".deletebox").click(function(){
  var currBoxId = this.id.slice(3);
  $("#defaultCanvas0").css("z-index", "-1");  
  $.ajax({
    url: "/sketchboard/delete_box",
    type: "POST",
    traditional: true,
    data: { 
      boxId :currBoxId,
      canvasId :canvas_id,
    socket_id: socketId,
    csrfmiddlewaretoken: getCSRFToken() },
    dataType : "json",
  });
});

      });

      $(fullName).on('froalaEditor.blur', function (e, editor) {
        var contents=editor.html.get();
        $.ajax({
          url: "/sketchboard/send_content",
          type: "POST",
          traditional: true,
          data: { id: $(fullName).attr('id'),
          //id : this.id,
                content: contents,
                socket_id: socketId,
                csrfmiddlewaretoken: getCSRFToken(),
                
                 },
          dataType : "json",
        });
      });
            //// Change attribute!//////
      $(fullName).css({'top':this.fields.top});
      $(fullName).css({'left':this.fields.left});
      $(fullName).froalaEditor('html.set', this.fields.content);
      });
  }





///////////////////////////////////////////////
///////////////// delete box //////////////////
///////////////////////////////////////////////
$(".deletebox").click(function(){
  var currBoxId = this.id.slice(3);
  $("#defaultCanvas0").css("z-index", "-1");  
  $.ajax({
    url: "/sketchboard/delete_box",
    type: "POST",
    traditional: true,
    data: { 
      boxId :currBoxId,
      canvasId :canvas_id,
    socket_id: socketId,
    csrfmiddlewaretoken: getCSRFToken() },
    dataType : "json",
  });
});

  ///////////////////////////////////////////
  //////////////invite still use ???/////////////////
  document.addEventListener("DOMContentLoaded", function() {

    $("button#invite").click(function(){
    $.ajax({
      url: "/sketchboard/invite",
      type: "POST",
      traditional: true,
      data: { 
      canvasId :canvas_id,
      userEmail: "yczheng95@gmail.com",
      csrfmiddlewaretoken: getCSRFToken() },
      dataType : "json",
    });
    });


///////////////////////////////////////////////
///////////////// add box /////////////////////
///////////////////////////////////////////////
  $("div#addbox").click(function(){
    readyForNote = 0;
    $(".tools").attr("data-active", false);
    $("#textbox").attr("data-active", true);
    $(".toolBoxWrapper").css("background-color", "#fff");
    $("#textboxWrapper").css("background-color", "#9EA7FC");
    $("#defaultCanvas0").css("z-index", "-1"); 
    $(".editor").css("z-index", "0");
    $(".main").css("cursor", "text");
    $(".palette").css("display", "none");
    $(".bg-palette").css("display", "none");
    $.ajax({
      url: "/sketchboard/add_box",
      type: "POST",
      traditional: true,
      data: { 
        type:'box',
        canvasId :canvas_id,
      socket_id: socketId,
      csrfmiddlewaretoken: getCSRFToken() },
      dataType : "json",
    });
  });

    

  $("div#addnote").click(function(){
  $(".tools").attr("data-active", false);
  $("#postit").attr("data-active", true);
  $(".toolBoxWrapper").css("background-color", "#fff");
  $("#postitWrapper").css("background-color", "#9EA7FC");
  $("#defaultCanvas0").css("z-index", "-1"); 
  $(".editor").css("z-index", "0");
  $(".main").css("cursor", "text");
  $(".palette").css("display", "none");
  $(".bg-palette").css("display", "block");
  readyForNote = 1;

});


$("div.each-color.p-2").click(function(){
  if (readyForNote == 1) {

  
  var colorName = "#"+this.id;
  var colorHex = $(colorName).css("background-color");

    $.ajax({
    url: "/sketchboard/add_box",
    type: "POST",
    traditional: true,
    data: { 
      color:colorHex,
      type:'note',
      canvasId :canvas_id,
    socket_id: socketId,
    csrfmiddlewaretoken: getCSRFToken() },
    dataType : "json",
  });

    }
    readyForNote = 0;
});

function getCSRFToken() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      if (cookies[i].startsWith("csrftoken=")) {
          return cookies[i].substring("csrftoken=".length, cookies[i].length);
      }
  }
  return "unknown";
}

});
