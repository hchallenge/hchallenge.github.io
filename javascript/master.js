$(function() {

  $('header').css({display:'none'});
  $('header').slideDown(1500);
  $('section').css({display:'none'});
  $('section').fadeIn(3000);
  $('footer').css({display:'none'});
  $('footer').fadeIn(3000);

  $('a').on('click',function (e) {
    e.preventDefault();
     $("body,html").animate({
       scrollTop: $( $(this).attr('href') ).offset().top},1800);
  });

$.getJSON("http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_submissions",function (data) {
  $.each(data,function(){
      $.each(this,function(key,value){

        if(value.id != null ){

          // $(".text").append("<div class='col-lg-6 col-md-6 col-sm-12 col-xs-12' ><div class='panel panel-danger shadow'><div class='panel-heading '><h3 class='text-center'>"+value.title+"</h3></div><div class='panel-body'><br><img class='img-responsive img-rounded images' src='"+value.image+"'><br><br> <br><p class='text-center'><span><i class='glyphicon glyphicon-user'></i> "+value.learner+" Learners    </span><span>&nbsp;<i class='glyphicon glyphicon-time'></i> "+value.hours+" hours</span></p><br><p class='text-center'>"+value.description+"</p><br><br><p class='text-center'><a class='btn btn-danger full' href='"+value.sign_up+"' target='_blank'>View Curriculum</a></p></div></div>");
          $(".text").append("<div class='clearfix'></div><div class='col-lg-12 col-md-6 col-sm-12 col-xs-12' ><div class='panel panel-danger shadow'><div class='panel-heading '><h3 class='text-center'>"+value.title+"</h3></div><div class='panel-body'><br><p class='text-center'><span><i class='glyphicon glyphicon-tasks'></i><b> Status </b>: "+value.compiler_status+"</span><span><br><br><i class='glyphicon glyphicon-compressed'></i> <b>Language used: </b>"+value.language+"</span></p><br><p class='text-center '> <b> View Source Code</b> <code><pre>"+value.source_code.replace(/</g,'&lt;')+"</pre></code></p><br><br></div></div><div class='clearfix'></div>");

        }
      });
  });

});

function show(ab){

  $.ajax({
      type:'GET',
      url:'https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths',
      dataType:'text',
      success:function (data) {
        var json = $.parseJSON(data);
        $.each(json,function(idx,obj1) {
          $.each(obj1,function(idx,obj) {
            var arr = obj.tags.toLowerCase();
            var abc = arr.replace(/, /g,",").split(",");

              console.log(abc);

             for(var i=0;i<abc.length;i++)
             {
                 if(abc[i] == ab)
                 {
                  $('.text').hide();
                  $(".show").empty().append("<div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'><div class='panel panel-danger'><div class='panel-heading phead'><h3 class='text-center'>"+obj.name+"</h3></div><div class='panel-body'><br><img class='img-responsive img-rounded images' src='"+obj.image+"'><br><br> <p class='text-center text-danger'><i class='glyphicon glyphicon-tags'></i>&nbsp;&nbsp;"+obj.tags+"</p><br><p class='text-center'><span><i class='glyphicon glyphicon-user'></i> "+obj.learner+" Learners    </span><span>&nbsp;<i class='glyphicon glyphicon-time'></i> "+obj.hours+" hours</span></p><br><p class='text-center'>"+obj.description+"</p><br><br><p class='text-center'><a class='btn btn-danger full' href='"+obj.sign_up+"' target='_blank'>View Curriculum</a></p></div></div>");

                  // $(".show").append("<div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'><div class='panel panel-primary'>'"+value.id+"'</div></div>");
                  // $('.show').append(obj.id);
                 }
             }
          });
        });
      }
     });
}

  $('#search').on('click',function(){

    var ab = $('input').val().toLowerCase();
    console.log(ab);
     show(ab);
  });

  $('#svalue').keypress(function(e){

    if(e.which == 13){
    var ab = $('input').val().toLowerCase();
    console.log(ab);
    show(ab);
  }
  });

});
