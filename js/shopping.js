$(function(){
    var s2=$(".section-2");
    var s3=$(".section-3");
    var s4=$(".section-4");
    var s5=$(".section-5");
    var s6=$(".section-6");
    var s7=$(".section-7");
    var s8=$(".section-8");
    $(".section").each(function(){
        $(this).data("flag",false);
    })
    $("#dowebok").fullpage({
        controlArrowColor: '#000',
        verticalCentered: false,
        afterLoad:function(anchorLink,index){
            if(index==2 && !s2.data('flag')){
                s2.data("flag",true);
                s2.find(".search1").animate({opacity:1,marginLeft:"-100px"},1000,function(){
                    $(this).animate({width:"148px",bottom:"450px",marginLeft:"100px"},1000);
                    s2.find(".word2").fadeIn(800);
                    s2.find(".word1").hide();
                    s2.find(".goods").animate({height:"218px"},1000);
                    $(".next").fadeIn();
                })
            }
        },
        onLeave:function(index,nextIndex,dricetion){
            if(nextIndex==3&&dricetion=="down"&& !s3.data('flag')){
                s3.data("flag",true);
                s2.find(".cover").show();
                s2.find(".safo").show().animate({bottom:-$(window).height()+190,width:207,marginLeft:-247},1000,function(){
                    s3.find(".color2").animate({opacity:1},800);
                    s3.find(".btn2").animate({opacity:1},800);
                    $(".next").fadeIn();
                })
            }
            if(nextIndex==4&&dricetion=="down"&& !s4.data('flag')){
                s4.data("flag",true);
                s2.find(".safo").hide();
                s3.find(".italic").show().animate({bottom:-$(window).height()+80,left:220},1000,function(){
                    s3.find(".italic").hide();
                    s4.find(".italic").show();
                    //$(this).animate({left:"3000px"},800,'easeInBack');
                    s4.find(".cart").animate({left:"200%"},800,'easeInBack',function(){
                        s4.find("#word1").hide();
                        s4.find("#word2").fadeIn(800);
                        s4.find(".card").fadeIn(800);
                        s4.find(".word").delay(800).fadeIn(600);
                        $(".next").fadeIn();
                    });
                });
            }
            if(nextIndex==5&&dricetion=="down"&& !s5.data('flag')){
                s5.data("flag",true);
                s5.find(".safo").show().animate({bottom:"90px"},1000);
                s5.find(".order").animate({marginBottom:40},1000);
                s5.find(".hand").animate({bottom:0},1000,function(){
                    s5.find(".m2").show();
                    $(".next").fadeIn();
                });
            }
            if(nextIndex==6&&dricetion=="down"&& !s6.data('flag')){
                s6.data("flag",true);
                s5.find(".safo").hide();
                s6.find(".safo").show().animate({bottom:500,marginLeft:-280,width:100,height:100},800);
                s6.find(".box").animate({marginLeft:-280},880,function(){
                    s6.find(".safo").hide();
                    s6.find(".car").animate({marginLeft:-280},800);
                    s6.find(".box").animate({bottom:30},800,function(){
                        s6.find(".address").show();
                        s6.animate({backgroundPositionX:"100%"},1200,function(){
                            s6.find(".word").fadeIn(800);
                            s6.find(".man").animate({height:305},800,function(){
                                s6.find(".please").fadeIn(400);
                                s6.find(".woman").animate({height:294},400);
                                $(".next").fadeIn();
                            });
                        });
                    });
                })
            }

            if(nextIndex==7&&dricetion=="down"&& !s7.data('flag')){
                s7.data("flag",true);
                s7.find(".star").delay(700).animate({width:96 },1000);
                s7.find(".good").delay(700).animate({marginLeft:-280,opacity:1},1000,function(){
                    $(".next").fadeIn();
                });
            }
            if(nextIndex==8&&dricetion=="down"&& !s8.data('flag')){
                s8.data("flag",true);
                $(window).mousemove(function(event){
                    var x=event.pageX;
                    var y=event.pageY;
                    if(y<$(window).height()-449){
                        y=$(window).height()-449;
                    }
                    s8.find(".hand").css({left:x-50,top:y+30});
                })
                s8.find(".again").click(function(event){
                    s2.data("flag",false);
                    s3.data("flag",false);
                    s4.data("flag",false);
                    s5.data("flag",false);
                    s6.data("flag",false);
                    s7.data("flag",false);
                    $.fn.fullpage.moveTo(1);
                    $("*").not("#dowebok,.section,body,html").attr("style","");

                })
            }
        }

    })
    $(".next").click(function(){
        $.fn.fullpage.moveSectionDown();
        $(this).fadeOut();
        $(".section").each(function(){
            $(this).data("flag",false);
        })
    })

})
