Sketchspace is a web app where you make collages together with friends. Search for photos, drop them onto a shared canvas along with some shapes, cut the photos into those shapes, and draw on it at the same time as everyone else. A canvas is a room that is either private (solo) or shared (collaboration), and strokes and elements are streamed to everyone on the canvas in real time.

The frontend is built with React, MobX and Konva, with photo search through the Unsplash API. The backend uses Node.js, Express, socket.io and MongoDB.

![Sketchspace gallery](../media/projects/09_sketchspace/demo_gallery.png)

![Sketchspace collaboration](../media/projects/09_sketchspace/demo_collab.png)

## Main Functionality Demonstration

<video src="../media/projects/09_sketchspace/Sketchspace%20demo.mp4" controls playsinline></video>

## Group Cooperation
Group member: Maryam Khan, Thuy An NGUYEN, Yuewei He, Yue Zhu

I am mainly responsible for the Sketchspace back-end, TypeScript service on Node.js and Express, which handles realtime collaboration over WebSockets, REST API for canvas and user resource management, MongoDB persistence, Docker-based deployment and VPS hosting on Hetzner.


## Code Repo

Frontend: https://github.com/chaimi760970774/Sketchspace

Backend: https://github.com/yukistillalive/sketchspace-server

## More Details

<div class="media-grid">
  <img src="../media/projects/09_sketchspace/demo_brush.png" alt="Sketchspace brush" />
  <img src="../media/projects/09_sketchspace/demo_mask.png" alt="Sketchspace mask" />
  <img src="../media/projects/09_sketchspace/demo_image_1.png" alt="Sketchspace image 1" />
  <img src="../media/projects/09_sketchspace/demo_image_2.png" alt="Sketchspace image 2" />
  <img src="../media/projects/09_sketchspace/demo_invite.png" alt="Sketchspace invite" />
  <img src="../media/projects/09_sketchspace/demo_profile.png" alt="Sketchspace profile" />
</div>