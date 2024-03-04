const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./IMAGES/male0001.png
        ./IMAGES/male0002.png
        ./IMAGES/male0003.png
        ./IMAGES/male0004.png
        ./IMAGES/male0005.png
        ./IMAGES/male0006.png
        ./IMAGES/male0007.png
        ./IMAGES/male0008.png
        ./IMAGES/male0009.png
        ./IMAGES/male0010.png
        ./IMAGES/male0011.png
        ./IMAGES/male0012.png
        ./IMAGES/male0013.png
        ./IMAGES/male0014.png
        ./IMAGES/male0015.png
        ./IMAGES/male0016.png
        ./IMAGES/male0017.png
        ./IMAGES/male0018.png
        ./IMAGES/male0019.png
        ./IMAGES/male0020.png
        ./IMAGES/male0021.png
        ./IMAGES/male0022.png
        ./IMAGES/male0023.png
        ./IMAGES/male0024.png
        ./IMAGES/male0025.png
        ./IMAGES/male0026.png
        ./IMAGES/male0027.png
        ./IMAGES/male0028.png
        ./IMAGES/male0029.png
        ./IMAGES/male0030.png
        ./IMAGES/male0031.png
        ./IMAGES/male0032.png
        ./IMAGES/male0033.png
        ./IMAGES/male0034.png
        ./IMAGES/male0035.png
        ./IMAGES/male0036.png
        ./IMAGES/male0037.png
        ./IMAGES/male0038.png
        ./IMAGES/male0039.png
        ./IMAGES/male0040.png
        ./IMAGES/male0041.png
        ./IMAGES/male0042.png
        ./IMAGES/male0043.png
        ./IMAGES/male0044.png
        ./IMAGES/male0045.png
        ./IMAGES/male0046.png
        ./IMAGES/male0047.png
        ./IMAGES/male0048.png
        ./IMAGES/male0049.png
        ./IMAGES/male0050.png
        ./IMAGES/male0051.png
        ./IMAGES/male0052.png
        ./IMAGES/male0053.png
        ./IMAGES/male0054.png
        ./IMAGES/male0055.png
        ./IMAGES/male0056.png
        ./IMAGES/male0057.png
        ./IMAGES/male0058.png
        ./IMAGES/male0059.png
        ./IMAGES/male0060.png
        ./IMAGES/male0061.png
        ./IMAGES/male0062.png
        ./IMAGES/male0063.png
        ./IMAGES/male0064.png
        ./IMAGES/male0065.png
        ./IMAGES/male0066.png
        ./IMAGES/male0067.png
        ./IMAGES/male0068.png
        ./IMAGES/male0069.png
        ./IMAGES/male0070.png
        ./IMAGES/male0071.png
        ./IMAGES/male0072.png
        ./IMAGES/male0073.png
        ./IMAGES/male0074.png
        ./IMAGES/male0075.png
        ./IMAGES/male0076.png
        ./IMAGES/male0077.png
        ./IMAGES/male0078.png
        ./IMAGES/male0079.png
        ./IMAGES/male0080.png
        ./IMAGES/male0081.png
        ./IMAGES/male0082.png
        ./IMAGES/male0083.png
        ./IMAGES/male0084.png
        ./IMAGES/male0085.png
        ./IMAGES/male0086.png
        ./IMAGES/male0087.png
        ./IMAGES/male0088.png
        ./IMAGES/male0089.png
        ./IMAGES/male0090.png
        ./IMAGES/male0091.png
        ./IMAGES/male0092.png
        ./IMAGES/male0093.png
        ./IMAGES/male0094.png
        ./IMAGES/male0095.png
        ./IMAGES/male0096.png
        ./IMAGES/male0097.png
        ./IMAGES/male0098.png
        ./IMAGES/male0099.png
        ./IMAGES/male0100.png
        ./IMAGES/male0101.png
        ./IMAGES/male0102.png
        ./IMAGES/male0103.png
        ./IMAGES/male0104.png
        ./IMAGES/male0105.png
        ./IMAGES/male0106.png
        ./IMAGES/male0107.png
        ./IMAGES/male0108.png
        ./IMAGES/male0109.png
        ./IMAGES/male0110.png
        ./IMAGES/male0111.png
        ./IMAGES/male0112.png
        ./IMAGES/male0113.png
        ./IMAGES/male0114.png
        ./IMAGES/male0115.png
        ./IMAGES/male0116.png
        ./IMAGES/male0117.png
        ./IMAGES/male0118.png
        ./IMAGES/male0119.png
        ./IMAGES/male0120.png
        ./IMAGES/male0121.png
        ./IMAGES/male0122.png
        ./IMAGES/male0123.png
        ./IMAGES/male0124.png
        ./IMAGES/male0125.png
        ./IMAGES/male0126.png
        ./IMAGES/male0127.png
        ./IMAGES/male0128.png
        ./IMAGES/male0129.png
        ./IMAGES/male0130.png
        ./IMAGES/male0131.png
        ./IMAGES/male0132.png
        ./IMAGES/male0133.png
        ./IMAGES/male0134.png
        ./IMAGES/male0135.png
        ./IMAGES/male0136.png
        ./IMAGES/male0137.png
        ./IMAGES/male0138.png
        ./IMAGES/male0139.png
        ./IMAGES/male0140.png
        ./IMAGES/male0141.png
        ./IMAGES/male0142.png
        ./IMAGES/male0143.png
        ./IMAGES/male0144.png
        ./IMAGES/male0145.png
        ./IMAGES/male0146.png
        ./IMAGES/male0147.png
        ./IMAGES/male0148.png
        ./IMAGES/male0149.png
        ./IMAGES/male0150.png
        ./IMAGES/male0151.png
        ./IMAGES/male0152.png
        ./IMAGES/male0153.png
        ./IMAGES/male0154.png
        ./IMAGES/male0155.png
        ./IMAGES/male0156.png
        ./IMAGES/male0157.png
        ./IMAGES/male0158.png
        ./IMAGES/male0159.png
        ./IMAGES/male0160.png
        ./IMAGES/male0161.png
        ./IMAGES/male0162.png
        ./IMAGES/male0163.png
        ./IMAGES/male0164.png
        ./IMAGES/male0165.png
        ./IMAGES/male0166.png
        ./IMAGES/male0167.png
        ./IMAGES/male0168.png
        ./IMAGES/male0169.png
        ./IMAGES/male0170.png
        ./IMAGES/male0171.png
        ./IMAGES/male0172.png
        ./IMAGES/male0173.png
        ./IMAGES/male0174.png
        ./IMAGES/male0175.png
        ./IMAGES/male0176.png
        ./IMAGES/male0177.png
        ./IMAGES/male0178.png
        ./IMAGES/male0179.png
        ./IMAGES/male0180.png
        ./IMAGES/male0181.png
        ./IMAGES/male0182.png
        ./IMAGES/male0183.png
        ./IMAGES/male0184.png
        ./IMAGES/male0185.png
        ./IMAGES/male0186.png
        ./IMAGES/male0187.png
        ./IMAGES/male0188.png
        ./IMAGES/male0189.png
        ./IMAGES/male0190.png
        ./IMAGES/male0191.png
        ./IMAGES/male0192.png
        ./IMAGES/male0193.png
        ./IMAGES/male0194.png
        ./IMAGES/male0195.png
        ./IMAGES/male0196.png
        ./IMAGES/male0197.png
        ./IMAGES/male0198.png
        ./IMAGES/male0199.png
        ./IMAGES/male0200.png
        ./IMAGES/male0201.png
        ./IMAGES/male0202.png
        ./IMAGES/male0203.png
        ./IMAGES/male0204.png
        ./IMAGES/male0205.png
        ./IMAGES/male0206.png
        ./IMAGES/male0207.png
        ./IMAGES/male0208.png
        ./IMAGES/male0209.png
        ./IMAGES/male0210.png
        ./IMAGES/male0211.png
        ./IMAGES/male0212.png
        ./IMAGES/male0213.png
        ./IMAGES/male0214.png
        ./IMAGES/male0215.png
        ./IMAGES/male0216.png
        ./IMAGES/male0217.png
        ./IMAGES/male0218.png
        ./IMAGES/male0219.png
        ./IMAGES/male0220.png
        ./IMAGES/male0221.png
        ./IMAGES/male0222.png
        ./IMAGES/male0223.png
        ./IMAGES/male0224.png
        ./IMAGES/male0225.png
        ./IMAGES/male0226.png
        ./IMAGES/male0227.png
        ./IMAGES/male0228.png
        ./IMAGES/male0229.png
        ./IMAGES/male0230.png
        ./IMAGES/male0231.png
        ./IMAGES/male0232.png
        ./IMAGES/male0233.png
        ./IMAGES/male0234.png
        ./IMAGES/male0235.png
        ./IMAGES/male0236.png
        ./IMAGES/male0237.png
        ./IMAGES/male0238.png
        ./IMAGES/male0239.png
        ./IMAGES/male0240.png
        ./IMAGES/male0241.png
        ./IMAGES/male0242.png
        ./IMAGES/male0243.png
        ./IMAGES/male0244.png
        ./IMAGES/male0245.png
        ./IMAGES/male0246.png
        ./IMAGES/male0247.png
        ./IMAGES/male0248.png
        ./IMAGES/male0249.png
        ./IMAGES/male0250.png
        ./IMAGES/male0251.png
        ./IMAGES/male0252.png
        ./IMAGES/male0253.png
        ./IMAGES/male0254.png
        ./IMAGES/male0255.png
        ./IMAGES/male0256.png
        ./IMAGES/male0257.png
        ./IMAGES/male0258.png
        ./IMAGES/male0259.png
        ./IMAGES/male0260.png
        ./IMAGES/male0261.png
        ./IMAGES/male0262.png
        ./IMAGES/male0263.png
        ./IMAGES/male0264.png
        ./IMAGES/male0265.png
        ./IMAGES/male0266.png
        ./IMAGES/male0267.png
        ./IMAGES/male0268.png
        ./IMAGES/male0269.png
        ./IMAGES/male0270.png
        ./IMAGES/male0271.png
        ./IMAGES/male0272.png
        ./IMAGES/male0273.png
        ./IMAGES/male0274.png
        ./IMAGES/male0275.png
        ./IMAGES/male0276.png
        ./IMAGES/male0277.png
        ./IMAGES/male0278.png
        ./IMAGES/male0279.png
        ./IMAGES/male0280.png
        ./IMAGES/male0281.png
        ./IMAGES/male0282.png
        ./IMAGES/male0283.png
        ./IMAGES/male0284.png
        ./IMAGES/male0285.png
        ./IMAGES/male0286.png
        ./IMAGES/male0287.png
        ./IMAGES/male0288.png
        ./IMAGES/male0289.png
        ./IMAGES/male0290.png
        ./IMAGES/male0291.png
        ./IMAGES/male0292.png
        ./IMAGES/male0293.png
        ./IMAGES/male0294.png
        ./IMAGES/male0295.png
        ./IMAGES/male0296.png
        ./IMAGES/male0297.png
        ./IMAGES/male0298.png
        ./IMAGES/male0299.png
        ./IMAGES/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page1>canvas`,
    start: `top top`,   //   check
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page1>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,  //  start & end alter
  end: `600% top`,
});




gsap.to("#page1", {
    scrollTrigger: {
        trigger: "#page1",
        start: "top top",
        end: "bottom top",
        markers: true,
        pin: true,
        scroller: "main"
    }
})

gsap.to("#page2", {
    scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: "bottom top",
        markers: true,
        pin: true,
        scroller: "main"
    }
})

gsap.to("#page3", {
    scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        end: "bottom top",
        markers: true,
        pin: true,
        scroller: "main"
    }
})

gsap.to("#page4", {
    scrollTrigger: {
        trigger: "#page4",
        start: "top top",
        end: "bottom top",
        markers: true,
        pin: true,
        scroller: "main"
    }
})