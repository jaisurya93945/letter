console.log("HELP");
$(function(){
  $("#git_photo").on({ mouseenter: function(){
    $(this).attr('src','img/test2.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/test1.png');
  }
  });



  $("#bash_photo").on({ mouseenter: function(){
    $(this).attr('src','img/test2.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/test1.png');
  }
  });
  


  $("#github_photo").on({ mouseenter: function(){
    $(this).attr('src','img/test2.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/test1.png');
  }
  });
});
