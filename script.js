const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let snowflakes = [];
const snowflakeCount = 400; 


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Snowflake class
class Snowflake {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 4 + 1; 
        this.speed = Math.random() * 1 + 0.5; 
        this.wind = Math.random() * 0.5 - 0.25; 
    }

    update() {
        this.y += this.speed;
        this.x += this.wind;

   
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }

    
        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
    }
}


for (let i = 0; i < snowflakeCount; i++) {
    snowflakes.push(new Snowflake());
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
    });
    requestAnimationFrame(animate);
}


animate();


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navItems.classList.toggle('active');
});

const textElement = document.getElementById('typing-text');
const fullText = "Lumoscale: Tech & Digital Solutions for Modern Businesses";
let charIndex = 0;
let typingDelay = 100; 

function type() {

  if (charIndex < fullText.length) {
    textElement.textContent = fullText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
      textElement.style.borderRight = "none" 
  }
}

document.addEventListener("DOMContentLoaded", function() {
  type();
});

const contactbtn= document.querySelecto(".contact-btn")
const a =document.createElement("a")

contactbtn.addEventListener("click", () => {
  a.href = "https://api.whatsapp.com/send/?phone=918919053970&text&type=phone_number&app_absent=0";
  a.target = "_blank";
  a.click()
  a.remove();
  
});