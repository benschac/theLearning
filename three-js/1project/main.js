const scene = new THREE.Scene(),
      light = new THREE.PointLight(0xffffff, 1),
      camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000),
      renderer = new THREE.WebGLRenderer();

      camera.position.z = 10;
      light.position.set(0, 0, 50);
      renderer.setSize(window.innerWidth, window.innerHeight);

      scene.add(light);

      document.querySelector('#container').appendChild(renderer.domElement);
