import React from "react";
import "./canvas.scss";

export default function Canvas() {
  // Grabbing the canvas element by getElementsById
  const canvas = document.getElementsByClassName(".canvas-container__canvas");

  // save the canvas element in a constant and create 2 dimensional rendering with context
  const ctx = canvas.getContext("2d");

  // setting the canvas width
  canvas.width = window.innerWidth;
  // setting the canvas height
  canvas.height = window.innerHeight;

  // declaring a particle array variable
  let particleArray;

  // creating constructor function that will populate the canvas with particles
  // x and y set position of the particle, directionX and directionY set the speed of the particle on that axis, size is the size of the particle and color is the color of the particle
  function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  // Adding draw method to particle prototype
  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  // Adding an update method to the particle prototype and also adding an if statement to determine if the particle has reached the end of the screen, if it has, the particle will change direction.
  Particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = this.directionX;
    }

    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = this.directionY;
    }

    // update function has to update particle decision by adding it's x and y values to it's x and y coordinates
    this.x += this.directionX;
    this.y += this.directionY;

    // Drawing a particle at it's x and y axis by calling this.draw
    this.draw();
  };

  // Creating many particles in an array and declaring values fore each one, which will have random sizes and speed in the function init
  function init() {
    particleArray = [];

    // Using a for loop through 100 items to create the randomized particles

    for (let i = 0; i < 100; i++) {
      // size will be a random number between 0 and 20
      let size = Math.random() * 20;
      // position x will be random between 0 and canvas width
      let x = Math.random() * (window.innerWidth - size * 2);
      // position x will be random between 0 and canvas height
      let y = Math.random() * (window.innerHeight - size * 2);
      // speed of particles on x axis will be between .2 and -.2
      let directionX = Math.random() * 0.4 - 0.2;
      // speed of particles on y axis will be between .2 and -.2
      let directionY = Math.random() * 0.4 - 0.2;
      // color of particles
      let color = "white";

      // pushing the particles into the particle array
      particleArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
  }

  // animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
  }
  init();
  animate();
  return (
    <div className="canvas-container">
      <canvas id="canvas1" className="canvas-container__canvas"></canvas>
    </div>
  );
}
