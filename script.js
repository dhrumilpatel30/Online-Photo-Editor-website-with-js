
//defining variables for the elements in html
let choose_img_Btn = document.querySelector(".choose_img button");
let choose_Input = document.querySelector(".choose_img input");
let imgSrc = document.querySelector(".view_img img");

let reset = document.querySelector("#reset");
let save = document.querySelector("#save");

// defiining initial values
let brightness = 100,
  contrast = 100,
  saturate = 100,
  invert = 0,
  blur1 = 0,
  grayscale = 0,
  rotate = 0,
  flip_x = 1,
  flip_y = 1,
  from_t = 0,
  from_b = 0,
  from_l = 0,
  from_r = 0;


let img_w_f, img_h_f, int_img;


//code for upload image button
choose_img_Btn.addEventListener("click", () => choose_Input.click());
choose_Input.addEventListener("change", () => {
  let file = choose_Input.files[0];
  if (!file) return;
  imgSrc.src = URL.createObjectURL(file);
  int_img = imgSrc.src;
  img_w_f = imgSrc.naturalWidth / 100;
  img_h_f = imgSrc.naturalHeight / 100;
  imgSrc.addEventListener("load", () => {
    document.querySelector(".container-fluid").classList.remove("disabled");
  });
});


//code for Try image option
// $(".try").click(
//   () => {
//     $(".view_img").children("img").attr("src", "images/brewer_pub_london-wallpaper-1920x1080.jpg")
//     document.querySelector(".container-fluid").classList.remove("disabled");
//   }
// )
//code for save image button


save.addEventListener("click", () => {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  if (rotate % 180 == 0) {
    canvas.width = imgSrc.naturalWidth;
    canvas.height = imgSrc.naturalHeight;
  }
  else {
    canvas.width = imgSrc.naturalHeight;
    canvas.height = imgSrc.naturalWidth;
  }

  ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px)`;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(rotate * Math.PI / 180);
  ctx.scale(flip_x, flip_y);
  if (rotate % 180 == 0) {
    ctx.drawImage(
      imgSrc,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
  }
  else {
    ctx.drawImage(
      imgSrc,
      -canvas.height / 2,
      -canvas.width / 2,
      canvas.height,
      canvas.width
    );
  }
  const link = document.createElement("a");
  link.download = "you_image_edited.jpg";
  link.href = canvas.toDataURL();
  link.click();
});



//code for reset button
reset.addEventListener("click", () => {
  brightness = "100";
  saturate = "100";
  contrast = "100";
  invert = "0";
  blur1 = "0";
  grayscale = 0;
  rotate = 0;
  flip_x = 1;
  flip_y = 1;
  from_t = 0;
  from_l = 0;
  from_r = 0;
  from_b = 0;

  //reseting lable text
  $(".brightness").children(".value").text(brightness + "%");
  $(".saturation").children(".value").text(saturate + "%");
  $(".contrast").children(".value").text(contrast + "%");
  $(".grayscale").children(".value").text(grayscale + "%");
  $(".invert").children(".value").text(invert + "%");
  $(".blur").children(".value").text(blur1 + "%");
  //reseting sliders
  $(".brightness").children("input").val(brightness);
  $(".saturation").children("input").val(saturate);
  $(".contrast").children("input").val(contrast);
  $(".grayscale").children("input").val(grayscale);
  $(".invert").children("input").val(invert);
  $(".blur").children("input").val(blur1);
  imgSrc.style.transform = `rotate(${rotate}deg) scale(${flip_x}, ${flip_y})`;
  imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  cropimg();
});

//code for filters


//brightness
$(".brightness").children("input").click(
  () => {
    brightness = $(".brightness").children("input").val();
    $(".brightness").children(".value").text(brightness + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//saturation
$(".saturation").children("input").click(
  () => {
    saturate = $(".saturation").children("input").val();
    $(".saturation").children(".value").text(saturate + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//contrast
$(".contrast").children("input").click(
  () => {
    contrast = $(".contrast").children("input").val();
    $(".contrast").children(".value").text(contrast + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//grayscale
$(".grayscale").children("input").click(
  () => {
    grayscale = $(".grayscale").children("input").val();
    $(".grayscale").children(".value").text(grayscale + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//invert
$(".invert").children("input").click(
  () => {
    invert = $(".invert").children("input").val();
    $(".invert").children(".value").text(invert + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//blur
$(".blur").children("input").click(
  () => {
    blur1 = $(".blur").children("input").val();
    $(".blur").children(".value").text(blur1 + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//rotate buttons
$("#rotate_left").click(
  () => {
    rotate -= 90;
    imgSrc.style.transform = `rotate(${rotate}deg) scale(${flip_x}, ${flip_y})`;
  });

$("#rotate_right").click(
  () => {
    rotate += 90;
    imgSrc.style.transform = `rotate(${rotate}deg) scale(${flip_x}, ${flip_y})`;
  });

$("#flip_x").click(
  () => {
    flip_x = flip_x * (-1);
    imgSrc.style.transform = `rotate(${rotate}deg) scale(${flip_x}, ${flip_y})`;
  });

$("#flip_y").click(
  () => {
    flip_y = flip_y * (-1);
    imgSrc.style.transform = `rotate(${rotate}deg) scale(${flip_x}, ${flip_y})`;
  });
