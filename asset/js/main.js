// Set the date we're counting down to
var countDownDate = new Date("Jan 21, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
  document.getElementById("time-sale").innerHTML =` 
  <div class="countdown"><span class="number">${days}</span><span>Ngày</span></div> 
  <div class="countdown"><span class="number">${hours}</span><span>Giờ</span></div>  
  <div class="countdown"><span class="number">${minutes}</span><span>Phút</span></div>   
  <div class="countdown"><span class="number">${seconds}</span><span>Giây</span></div> `;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-sale").innerHTML = "Thời gian không thể đếm ngược";
  }
}, 1000);
// 

$(document).ready(function(){
    // Scroll btn
    $("#scrollBtn").click(function(event) {
        $form = $("#sec_9").offset();
        $('html,body').animate({scrollTop: $form.top},1800);
    });


    // form dang ky
    $("#order-product").submit(function(e) {         
      // value form
      e.preventDefault();
      var name = $("#name").val();
      var phone = $("#phone").val();
      var address = $("#address").val();
      var product = $("#product").val();
      var amount = $("#amount").val();
      // var sale  = $("#sale").val();
      if( name == '' || phone == ''  || address=='' || product=='' || amount==''){
        Swal.fire({
          title: 'Vui lòng nhập đủ thông tin !',
          icon: 'error',
          confirmButtonText: 'Đóng'
          })
      }else{
        // message telegram
        var message = `Khách mua hàng: Tên: ${name}       Số điện thoại: ${phone}      Địa chỉ: ${address}   Sản phẩm ${product}     Số lượng ${amount}`;
        $.ajax({
          type: "GET",
          url: 'https://api.telegram.org/bot5864499658:AAE_0a2FpjXbPOaFsRMZ8szfV63o1MKdO6A/sendMessage?chat_id=-817591137&text=' + message,
          data: '', // serializes the form's elements.     
            success: function(data)
            {
                if(data.ok==true){
                    Swal.fire(
                        'Gửi Thành Công!',
                        'Cảm ơn bạn đã đăng ký!',
                        'success'
                      )
                } else{
                    Swal.fire({
                        title: 'Gửi thất bại!',
                        text: 'Vui lòng thử lại sau!',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                      })
                }
            }            
        })
      }          
    });

    // notify
    var notifys = new Array (
      {
          url : './images/5.jpg',
          name : 'Hà Tuấn Anh',
          time : '2 phút trước'
      }, 
      {
          url : './images/2.jpg',
          name : 'Nguyễn Cường',
          time : '6 phút trước'
      }, 
      {
          url : './images/4.jpg',
          name : 'Kim Xuyến',
          time : '8 phút trước'
      }, 
      {
          url : './images/3.jpg',
          name : 'My Linh',
          time : '1 phút trước'
      },
      {
          url : './images/1.jpg',
          name : 'Hồng Ngọc',
          time : '3 phút trước'
      },
      {
        url : './images/2.jpg',
        name : 'Thanh Lâm',
        time : '15 phút trước'
    }, 
  );
  persion();
  function persion(){
      notifys.forEach(async function(element, index) {
          index = index + 1;
          setTimeout(function() {
              $(".img_notify").attr('src',element.url);
              $(".name_per").html(element.name);
              $(".time_per").html(element.time);
              $(".notify").css('opacity',1);
              $(".notify").css('bottom','10px');
              setTimeout(function() {
                  $(".notify").css('opacity',0);
                  $(".notify").css('bottom','-162px');
              },4000);
              if(index >= 6) {
                  persion();
              }
          },index*10000);
       });
  }


});

// JavaScript Document chong f12 + chuot phai + Ctrl U
// var message="NoRightClicking"; function defeatIE() {if (document.all) {(message);return false;}} function defeatNS(e) {if (document.layers||(document.getElementById&&!document.all)) { if (e.which==2||e.which==3) {(message);return false;}}} if (document.layers) {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=defeatNS;} else{document.onmouseup=defeatNS;document.oncontextmenu=defeatIE;} document.oncontextmenu=new Function("return false");

// shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="https://net5s.vn/"}),shortcut.add("F12",function(){top.location.href="https://net5s.vn/"}),shortcut.add("Ctrl+Shift+I",function(){top.location.href="https://net5s.vn/"}),shortcut.add("Ctrl+S",function(){top.location.href="https://net5s.vn/"}),shortcut.add("Ctrl+Shift+C",function(){top.location.href="https://net5s.vn/"});