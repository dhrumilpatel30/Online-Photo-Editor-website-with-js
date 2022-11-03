
//defining variables for the elements in html
let choose_img_Btn = document.querySelector(".choose_img button");
let choose_Input = document.querySelector(".choose_img input");
let imgSrc = document.querySelector(".view_img img");


// let slider = document.querySelector(".slider input");
// let filter_name = document.querySelector(".filter_info .name");
// let slider_value = document.querySelector(".filter_info .value");
// let rotate_btns = document.querySelectorAll(".icons_room1 button");
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
  flip_y = 1;

//code for upload image button
choose_img_Btn.addEventListener("click", () => choose_Input.click());
choose_Input.addEventListener("change", () => {
  let file = choose_Input.files[0];
  if (!file) return;
  imgSrc.src = URL.createObjectURL(file);
  imgSrc.addEventListener("load", () => {
    document.querySelector(".container-fluid").classList.remove("disabled");
  });
});

//code for Try image option
$(".try").click(
  () => {
    $(".view_img").children("img").attr("src", "images/brewer_pub_london-wallpaper-1920x1080.jpg")
    document.querySelector(".container-fluid").classList.remove("disabled");
  }
)
//code for save image button
save.addEventListener("click", () => {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = imgSrc.naturalWidth;
  canvas.height = imgSrc.naturalHeight;
  ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(flip_x, flip_y);
  ctx.drawImage(
    imgSrc,
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );
  const link = document.createElement("a");
  link.download = "you_image_edited.jpg";
  link.href = canvas.toDataURL();
  link.click();
});

//code for reset button
reset.addEventListener("click", () => {
  brightness = "100";
  $(".Brightness").children(".value").text(brightness + "%");
  saturate = "100";
  contrast = "100";
  invert = "0";
  blur1 = "0";
  rotate = 0;
  flip_x = 1;
  flip_y = 1;
  imgSrc.style.transform = `rotate(${rotate}deg) scale(${flip_x}, ${flip_y})`;
  imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`;
});

//code for filters


//brightness
$(".Brightness").children("input").change(
  () => {
    brightness = $(".Brightness").children("input").val();
    $(".Brightness").children(".value").text(brightness + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//saturation
$(".saturation").children("input").change(
  () => {
    saturate = $(".saturation").children("input").val();
    $(".saturation").children(".value").text(saturate + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//contrast
$(".contrast").children("input").change(
  () => {
    contrast = $(".contrast").children("input").val();
    $(".contrast").children(".value").text(contrast + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//grayscale
$(".grayscale").children("input").change(
  () => {
    grayscale = $(".grayscale").children("input").val();
    $(".grayscale").children(".value").text(grayscale + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//invert
$(".invert").children("input").change(
  () => {
    invert = $(".invert").children("input").val();
    $(".invert").children(".value").text(invert + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);

//blur
$(".blur").children("input").change(
  () => {
    blur = $(".blur").children("input").val();
    $(".blur").children(".value").text(blur + "%");
    imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur1}px) grayscale(${grayscale / 100})`;
  }
);


