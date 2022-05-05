function btn(){
  var click=document.getElementById("click");
  var touch=document.getElementById("touch");

  if(click.checked==true){
      document.getElementById("proscore").innerHTML =
      "<table><tr>"+
      "<td><p id='videoDiv'style='margin-left: 100px;'><video id='video' width='400' height='260' controls><source src='exp_vid.mp4'></video></p></td>"+
      "<td><p id='videoDiv'style='margin-left: 330px;'><video id='video' width='400' height='260' controls><source src='stu_vid.mp4'></video></p></td>"+
      "</tr></table>"+
      "<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'><h2 class='abc'><b class='poq'>Completeness Score:</h2></b><br><h5 style='margin-top:-22px;font-weight: 600;'>Activity completed by Student in comparison with Expert</h5>"+

      "<div class='pie' style='--p:97;--b:16px;--c:purple;'>97%</div></div>" +

      "<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'><h2 class='abc'><b class='poq'>Proficiency Score:</h2></b><br><h5 style='margin-top:-22px;font-weight: 600;'>Entire Activity Accuracy score of the student compared to the Expert</h5>" +
      "<div class='pie' style='--p:92.83;--b:16px;--c:green;'>92.83%</div></div><br><br><br><br>"
      +
            "<br><br><h1 style='margin-left:30px;font-size:38px;'><b class='poq'>Accuracy score of Body points, Scoring out of 100%</h1></b>" +
            "<p id='solpara' class='col-lg-10 col-md-10 col-sm-12 col-xs-12'>All 17 Key Body points wise Accuracy score of the student are presented in this section.Score value close to 100% represents posture of the student closer to the ideal, whereas  50% represents marked deviation from the ideal."+
            "<img src='ltAnkle.jpg' id='firstimg' />"+
              "<div class='review' style='margin-top:180px;'>" +
            "<div class='review__items'><img src='ltAnkle.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>50%</center></h1></div>" +
            "<div class='review__items'><img src='rtAnkle.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>50%</center></h1></div>" +
            "<div class='review__items'><img src='ltEar.jpeg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>75%</center></h1></div>" +
            "<div class='review__items'><img src='rtEar.jpeg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>65%</center></h1></div>" +
            "<div class='review__items'><img src='ltElbow.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>67%</center></h1></div>" +
            "<div class='review__items'><img src='rtElbow.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>75%</center></h1></div>" +
            "<div class='review__items'><img src='ltEye.png' style='height: 149px;'/><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>65%</center></h1></div>" +
            "<div class='review__items'><img src='rtEye.png' style='height: 149px;'/><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>70%</center></h1></div>" +
            "<div class='review__items'><img src='ltHip.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>75%</center></h1></div>" +
            "<div class='review__items'><img src='rtHip.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>65%</center></h1></div>" +
            "<div class='review__items'><img src='rtWrist.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>70%</center></h1></div>" +
            "<div class='review__items'><img src='ltKnee.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>64%</center></h1></div>" +
            "<div class='review__items'><img src='rtKnee.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>65%</center></h1></div>" +
            "<div class='review__items'><img src='ltShoulder.jpeg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>74%</center></h1></div>" +
            "<div class='review__items'><img src='rtShoulder.jpeg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>75%</center></h1></div>" +
            "<div class='review__items'><img src='ltWrist.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>65%</center></h1></div>" +
            "<div class='review__items'><img src='nose.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>70%</center></h1></div>" +

            "<div class='review__button'>" +
            "<button id='prev' style='width: 200px; height: 40px;' onclick='previousReview()'>PREV</button>" +
            "<button id='next' style= 'width:200px;height: 40px'; onclick='nextReview()'>NEXT</button></div></div>" +
            "<br><br><br>" +


            "<h1 style='margin-left:30px;font-size:45px;'><b class='poq'>Improvement Areas</h1></b><h1>" +
            "<p id='solpara' class='col-lg-10 col-md-10 col-sm-12 col-xs-12'>Score close to 50% represents high deviation between student and Trainer. In this section, those Key Body points with high deviation score are present to help the student to correct and improve the posture."+
            "<center><table style='width:75%; margin-left:300px;'> <tr><td><img class='def' style='width:150px' src='ltElbow.jpg'></td><td><img class='def' style='width:150px; height:135px ;' src='ltAnkle.jpg'></td></tr><tr><td><h1>67%</h1></td><td><h1>50%</td></h1></tr>" +
            "<tr><td><img class='def' style='width:150px' src='ltKnee.jpg'></td><td><img class='def' style='width:150px; height:135px ;' src='rtAnkle.jpg'></td></tr><tr><td><h1>67%</td></h1><td><h1>50%</td></h1></tr></center></table>"


          document.getElementById("proscoree").innerHTML =
            "<br><h1 style='margin-left:30px;font-size:40px;'><b class='poq'>Displaying Frames with weakest performances</h1></b><br><span>" +
            "<div class='col-lg-4 col-md-4 col-sm-6 col-xs-12'><b style='font-size:30px;'>SET1</b><br><img class='improvem' style='border-style:solid' src='expert151ONE.jpeg'><img class='improvem' style='border-style:solid' src='student141ONE.jpeg'><br><b>Expert&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student</b></div>" +
            "<div class='col-lg-4 col-md-4 col-sm-6 col-xs-12'><b style='font-size:30px;'>SET2</b><br><img class='improvem' style='border-style:solid' src='expert38TWO.jpeg'><img class='improvem' style='border-style:solid' src='student22TWO.jpeg'><br><b>Expert&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student</b></div>" +
            "<div class='col-lg-4 col-md-4 col-sm-6 col-xs-12'><b style='font-size:30px;'>SET3</b><br><img class='improvem' style='border-style:solid' src='expert87Three.jpeg'><img class='improvem' style='border-style:solid' src='student72Three.jpeg'><br><b>Expert&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student</b></div>"
          console.log('hello assigned');

  }
  else if(touch.checked==true){
      document.getElementById("proscore").innerHTML =
      "<table><tr>"+
      "<td><p id='videoDiv'style='margin-left: 100px;'><video id='video' width='400' height='260' controls><source src='Exp_vid_pushup.mp4'></video></p></td>"+
      "<td><p id='videoDiv'style='margin-left: 330px;'><video id='video' width='400' height='260' controls><source src='Stu_vid_pushup.mp4'></video></p></td>"+
      "</tr></table>"+
      "<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'><h2 class='abc'><b class='poq'>Completeness Score:</h2></b><br><h5 style='margin-top:-22px;font-weight: 600;'>Activity completed by Student in comparison with Expert</h5>" +

      "<div class='pie' style='--p:99;--b:10px;--c:purple;'>99%</div></div>" +

      "<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'><h2 class='abc'><b class='poq'>Proficiency Score:</h2></b><br><h5 style='margin-top:-22px;font-weight: 600;'>Entire Activity Accuracy score of the student compared to the Expert</h5>" +
      "<div class='pie' style='--p:83.26;--b:10px;--c:green;'>83.26%</div></div><br><br><br><br>"

      +
      "<br><br><h2 style='margin-left:30px;font-size:38px;'><b class='poq'>Accuracy score of Body points, Scoring out of 100%</h2></b>" +
      "<p id='solpara' class='col-lg-10 col-md-10 col-sm-12 col-xs-12'>All 17 Key Body points wise Accuracy score of the student are presented in this section.Score value close to 100% represents posture of the student closer to the ideal, whereas  50% represents marked deviation from the ideal. "+
      "<img src='ltAnkle.jpg' id='firstimg' />"+
      "<div class='review' style='margin-top:180px;'>" +
      "<div class='review__items'><img src='ltAnkle.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>75%</center></h1></div>" +
      "<div class='review__items'><img src='rtAnkle.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>50%</center></h1></div>" +
      "<div class='review__items'><img src='ltEar.jpeg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>50%</center></h1></div>" +
      "<div class='review__items'><img src='rtEar.jpeg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>53%</center></h1></div>" +
      "<div class='review__items'><img src='ltElbow.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>64%</center></h1></div>" +
      "<div class='review__items'><img src='rtElbow.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>68%</center></h1></div>" +
      "<div class='review__items'><img src='ltEye.png' style='height: 149px;'/><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>53%</center></h1></div>" +
      "<div class='review__items'><img src='rtEye.png' style='height: 149px;'/><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>54%</center></h1></div>" +
      "<div class='review__items'><img src='ltHip.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>78</center></h1></div>" +
      "<div class='review__items'><img src='rtHip.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>76%</center></h1></div>" +
      "<div class='review__items'><img src='rtWrist.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>60%</center></h1></div>" +
      "<div class='review__items'><img src='ltKnee.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>80</center></h1></div>" +
      "<div class='review__items'><img src='rtKnee.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>71%</center></h1></div>" +
      "<div class='review__items'><img src='ltShoulder.jpeg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>63%</center></h1></div>" +
      "<div class='review__items'><img src='rtShoulder.jpeg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>57%</center></h1></div>" +
      "<div class='review__items'><img src='ltWrist.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>59%</center></h1></div>" +
      "<div class='review__items'><img src='nose.jpg' /><h1><center><b>Accuracy Score:</b></center></h1><h1 style='font-size: 50px;'><center>56%</center></h1></div>" +

      "<div class='review__button'>" +
      "<button id='prev' style='width: 200px; height: 40px;' onclick='previousReview()'>PREV</button>" +
      "<button id='next' style= 'width:200px;height: 40px'; onclick='nextReview()'>NEXT</button></div></div>" +
      "<br><br><br>" +


      "<h1 style='margin-left:30px;font-size:45px;'><b class='poq'>Improvement Areas</h1></b><h1>" +
      "<p style='font-size:17px;' id='solpara' class='col-lg-10 col-md-10 col-sm-12 col-xs-12'>Score close to 50% represents high deviation between student and Trainer. In this section, those Key Body points with high deviation score are present to help the student to correct and improve the posture."+
      "<center><table style='width:75%; margin-left:300px;'> <tr><td><img class='def' style='width:150px' src='ltEye.png'></td><td><img class='def' style='width:150px; height:135px ;' src='rtEar.jpeg'></td></tr><tr><td><h1>53%</h1></td><td><h1>53%</td></h1></tr>" +
      "<tr><td><img class='def' style='width:150px' src='rtAnkle.jpg'></td><td><img class='def' style='width:150px; height:135px ;' src='ltEar.jpeg'></td></tr><tr><td><h1>50%</td></h1><td><h1>50%</td></h1></tr></center></table>"

    document.getElementById("proscoree").innerHTML =
      "<br><h1 style='margin-left:30px;font-size:40px;'><b class='poq'>Displaying Frames with weakest performances</h1></b><br><span>" +
      "<div class='col-lg-4 col-md-4 col-sm-6 col-xs-12'><b style='font-size:30px;'>SET1</b><br><img class='improvem' style='border-style:solid' src='expert151ONE.jpeg'><img class='improvem' style='border-style:solid' src='student141ONE.jpeg'><br><b>Expert&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student</b> </div>" +
      "<div class='col-lg-4 col-md-4 col-sm-6 col-xs-12'><b style='font-size:30px;'>SET2</b><br><img class='improvem' style='border-style:solid' src='expert151ONE.jpeg'><img class='improvem' style='border-style:solid' src='student141ONE.jpeg'><br><b>Expert&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student</b> </div>" +
      "<div class='col-lg-4 col-md-4 col-sm-6 col-xs-12'><b style='font-size:30px;'>SET3</b><br><img class='improvem' style='border-style:solid' src='expert151ONE.jpeg'><img class='improvem' style='border-style:solid' src='student141ONE.jpeg'><br><b>Expert&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student</b></div>"
    console.log('yolo assigned');
  }
  else{
  alert("not checked");
  }
}


let rev = 0;
    carousel(rev);

    function previousReview() {
      rev = rev - 1;
      carousel(rev);
      document.getElementById("firstimg").style.display="none";
    }

    function nextReview() {
      rev = rev + 1;
      carousel(rev);
      document.getElementById("firstimg").style.display="none";
    }

    function carousel(review) {
      let reviews = document.getElementsByClassName("review__items");

      if (review >= reviews.length) {
        review = 0;
        rev = 0;
      }
      if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
      }
      for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
      }
      reviews[review].style.display = "block";
    }