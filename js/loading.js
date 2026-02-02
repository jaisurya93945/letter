console.log("HELP");
$(function(){
  $("#git_photo").on({ mouseenter: function(){
    $(this).attr('src','img/Fon_op.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/fon_cls.png');
  }
  });



  $("#bash_photo").on({ mouseenter: function(){
    $(this).attr('src','img/bash00.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/bash22.png');
  }
  });
  


  $("#github_photo").on({ mouseenter: function(){
    $(this).attr('src','img/github00.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/github22.png');
  }
  });
});
