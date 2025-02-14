const images = [
    'sheikh_images/img1.png',
    'sheikh_images/img2.png',
    'sheikh_images/img3.png',
    'sheikh_images/img4.png',
    'sheikh_images/img5.png',  
    'sheikh_images/img6.png', 
    'sheikh_images/img7.png', 
    'sheikh_images/img8.png', 
    'sheikh_images/img9.png', 
    'sheikh_images/img10.png', 
    'sheikh_images/img11.png', 
    'sheikh_images/img12.png', 
    'sheikh_images/img13.png', 
    'sheikh_images/img14.png', 
    'sheikh_images/img15.png', 
    'sheikh_images/img16.png', 
    'sheikh_images/img17.png',
    'sheikh_images/img18.png',
    'sheikh_images/img19.png',
    'sheikh_images/img20.png',
    'sheikh_images/img21.png',
    'sheikh_images/img22.png',
    'sheikh_images/img23.png',
    'sheikh_images/img24.png',
    'sheikh_images/img25.png',
    'sheikh_images/img26.png',
    'sheikh_images/img27.png',
    'sheikh_images/img28.png',
    'sheikh_images/img29.png',
    'sheikh_images/img30.png',
    'sheikh_images/img31.png',
    'sheikh_images/img32.png',
    'sheikh_images/img33.png',
    'sheikh_images/img34.png',
  ];
  
  function displayImage() {
    const img = new Image();
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
  
    img.onload = function () {
      const maxWidth = window.innerWidth * 0.6;
      const maxHeight = window.innerHeight * 0.6; 
      const aspectRatio = img.width / img.height;
  
      let newWidth = maxWidth;
      let newHeight = newWidth / aspectRatio;
  
      if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = newHeight * aspectRatio;
      }
  
      img.width = newWidth;
      img.height = newHeight;
  
      const x = Math.random() * (window.innerWidth - img.width);
      const y = Math.random() * (window.innerHeight - img.height);
  
      const randomTilt = Math.random() * 20 - 10; 
      img.style.transform = `rotate(${randomTilt}deg)`;
  
      img.style.position = 'absolute';
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
  
      document.body.appendChild(img);
  
      setTimeout(() => {
        img.remove();
      }, 60000);
    };
  }
  
  setInterval(displayImage, 500);  