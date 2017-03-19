# FlowField
## [Runme.doitnowplease](https://rawgit.com/GustneGustav/Rasmus-er-sej-og-flot/master/mini-ex6%20-%20Generativ%20morskab/index.html "FlowField")
Inspired by Daniel Shiffman, i have created a generative program, that utilises the path of particles through a flowfield, to draw lines.
The program unfolds over time, thereby continually generating and reiterating the visual appearance of the particles' path through the flowfield.
![First picture](https://rawgit.com/GustneGustav/Rasmus-er-sej-og-flot/master/mini-ex6%20-%20Generativ%20morskab/Pictures%20of%20Mini-ex6/Bootiful.PNG)
![Continual of the first picture](https://rawgit.com/GustneGustav/Rasmus-er-sej-og-flot/master/mini-ex6%20-%20Generativ%20morskab/Pictures%20of%20Mini-ex6/deeper.PNG)
![Second attempt, after a minute or two](https://rawgit.com/GustneGustav/Rasmus-er-sej-og-flot/master/mini-ex6%20-%20Generativ%20morskab/Pictures%20of%20Mini-ex6/more%20deeper.PNG)
# Rules of the program
The program is based upon several rules, to achieve a sense of randomized generativity and autonomity
#### Perlin noise
Firstly in my sketch i made a bunch of columns and rows, that moves according to Perlin Noise, by creating vectors based on this.
#### Particles
I made another file called particle.js located in libraries, that has a ton a rules, dictating the particles' beviour.
The particles have velocity, acceleration, maxspeed, collisions with the flowfield made by the "Perlin noise" that makes them move along the path of least resistance, collision values with the edges of the canvas etc.
# Generative art theory
My program exemplifies the notion of generative art, as it is functionally autonomous, and without control of the user, it creates a "work of art". It's procedurally generated, and unfolds over time, and the experience is always unique, as the user cedes control to the machine, and the machine's output is never the same.
