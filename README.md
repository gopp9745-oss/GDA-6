# ГДА 6 - Browser 3D Game (Parody of GTA 5)

A simple browser-based 3D game with multiplayer functionality using Three.js and Socket.io.

## Features

- Main menu: Choose Single Player or Multiplayer (enter nickname for multiplayer)
- Open city with streets, detailed buildings with windows/doors, trees, and grass
- Third-person character control (WASD move, mouse look, RMB+drag rotate camera, Q/E camera rotate)
- Cars to drive (E to enter/exit, WS gas/brake, AD turn) with windows
- Random walking NPCs and police (blue, chase based on wanted level)
- Shooting: Left click to kill NPCs, increases wanted level
- Collision with buildings
- Multiplayer with chat (players visible as models with guns, position sync)
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