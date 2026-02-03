console.log("HELP");
$(function(){
  $("#git_photo").on({ mouseenter: function(){
    $(this).attr('src','img/test2.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/Fondhi_open.png');
  }
  });



  $("#bash_photo").on({ mouseenter: function(){
    $(this).attr('src','img/test2.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/smol_closed.png');
  }
  });
  


  $("#github_photo").on({ mouseenter: function(){
    $(this).attr('src','img/test2.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/kuth_closed.png');
  }
  });
});
