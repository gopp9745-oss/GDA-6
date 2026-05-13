# ГДА 6 - Browser 3D Game (Parody of GTA 5)

A simple browser-based 3D game with multiplayer functionality using Three.js and Socket.io.

## Features

- Open city with streets, buildings, trees, and grass
- Third-person character control (WASD move, mouse look)
- Cars to drive (E to enter/exit, WS gas/brake, AD turn)
- Random walking NPCs
- Basic multiplayer (players visible as colored capsules with guns, cars as boxes with wheels)
- Optional: Custom 3D model for player hero with animations

## Custom Model Setup

To use a custom 3D model for the main character:
1. Place your GLTF/GLB model file as `public/models/hero.glb`
2. If the model has animations, the first animation will auto-play
3. Gun is attached as a separate object; adjust position in code if needed
4. If model fails to load, falls back to capsule with gun

## Local Run

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

3. Open browser to `http://localhost:3000`

For multiplayer testing, open multiple tabs or use different browsers/devices.

## Deploy to onrender.com

1. Create account on onrender.com
2. Connect your GitHub repo
3. Use the following render.yaml in root:

```yaml
services:
  - type: web
    name: gda6
    runtime: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
```

4. Deploy from GitHub
5. The server will listen on the provided PORT, client accessible via the onrender URL.