// Versi JavaScript sederhana untuk SynapseTools

const app = document.getElementById('app');

// Splash Screen

function showSplashScreen() {

  app.innerHTML = `

    <div style="

      background: #0A0A1A;

      height: 100vh;

      display: flex;

      flex-direction: column;

      justify-content: center;

      align-items: center;

      color: white;

      font-family: Arial, sans-serif;

    ">

      <div style="

        width: 120px;

        height: 120px;

        background: linear-gradient(135deg, cyan, blue);

        border-radius: 24px;

        display: flex;

        justify-content: center;

        align-items: center;

        box-shadow: 0 0 20px cyan;

        margin-bottom: 40px;

      ">

        <span style="font-size: 60px;">🚀</span>

      </div>

      

      <h1 style="

        font-size: 36px;

        color: cyan;

        text-shadow: 0 0 15px cyan;

        margin-bottom: 30px;

        font-family: monospace;

      ">VxzProjects</h1>

      

      <div style="

        width: 200px;

        height: 8px;

        background: #333;

        border-radius: 10px;

        overflow: hidden;

        margin-bottom: 20px;

      ">

        <div id="loadingBar" style="

          width: 0%;

          height: 100%;

          background: cyan;

          transition: width 3s;

        "></div>

      </div>

      

      <p style="color: #888;">Loading Synapse Tools...</p>

    </div>

  `;

  

  // Animate loading bar

  setTimeout(() => {

    document.getElementById('loadingBar').style.width = '100%';

  }, 100);

  

  // Go to main screen after 3 seconds

  setTimeout(showMainScreen, 3000);

}

// Main Screen

function showMainScreen() {

  app.innerHTML = `

    <div style="

      background: #0A0A1A;

      min-height: 100vh;

      color: white;

      font-family: Arial, sans-serif;

    ">

      <!-- Header -->

      <div style="

        padding: 20px;

        text-align: center;

        background: linear-gradient(to bottom, rgba(0, 212, 255, 0.1), transparent);

      ">

        <h1 style="

          font-size: 32px;

          color: cyan;

          text-shadow: 0 0 10px cyan;

          margin: 0;

          font-family: monospace;

        ">SYNAPSE TOOLS</h1>

        <p style="color: #888; margin-top: 5px;">Gaming Performance Optimizer</p>

      </div>

      

      <!-- Features -->

      <div style="padding: 16px;">

        ${generateFeatureCard(0, '🎮 Optimize Sensitivity', 'Meringankan drag input', 'cyan')}

        ${generateFeatureCard(1, '👆 Gesture Smooth', 'Membuat swipe lebih halus', 'purple')}

        ${generateFeatureCard(2, '📊 FPS Monitor', 'Real-time frame rate', 'green')}

        ${generateFeatureCard(3, '🎯 Croshir', 'Membuat aim lebih presisi', 'orange')}

      </div>

      

      <!-- Support Section -->

      <div style="

        margin: 16px;

        padding: 20px;

        background: rgba(255, 255, 255, 0.05);

        border-radius: 16px;

        text-align: center;

      ">

        <h3 style="color: cyan; margin-bottom: 16px;">Support & Community</h3>

        <div style="display: flex; justify-content: space-around;">

          ${generateSupportButton('WhatsApp', '🟢', '#25D366')}

          ${generateSupportButton('YouTube', '🔴', '#FF0000')}

          ${generateSupportButton('Telegram', '🔵', '#0088CC')}

          ${generateSupportButton('GitHub', '⚪', '#FFFFFF')}

        </div>

      </div>

      

      <!-- Footer -->

      <div style="

        padding: 20px;

        text-align: center;

        background: linear-gradient(to top, rgba(0, 212, 255, 0.1), transparent);

        color: #666;

        font-size: 12px;

      ">

        <p>Created By VxzProjects © 2025</p>

      </div>

    </div>

  `;

}

function generateFeatureCard(id, title, description, color) {

  return `

    <div id="feature-${id}" style="

      background: rgba(${color === 'cyan' ? '0, 212, 255' : 

                       color === 'purple' ? '128, 0, 128' :

                       color === 'green' ? '0, 128, 0' : '255, 165, 0'}, 0.1);

      border: 2px solid rgba(${color === 'cyan' ? '0, 212, 255' : 

                              color === 'purple' ? '128, 0, 128' :

                              color === 'green' ? '0, 128, 0' : '255, 165, 0'}, 0.3);

      border-radius: 16px;

      padding: 16px;

      margin-bottom: 16px;

      display: flex;

      justify-content: space-between;

      align-items: center;

    ">

      <div>

        <h3 style="margin: 0; color: white;">${title}</h3>

        <p style="margin: 5px 0 0 0; color: #aaa;">${description}</p>

      </div>

      <label style="position: relative; display: inline-block; width: 50px; height: 24px;">

        <input type="checkbox" onchange="toggleFeature(${id}, this.checked)" style="opacity: 0; width: 0; height: 0;">

        <span style="

          position: absolute;

          cursor: pointer;

          top: 0;

          left: 0;

          right: 0;

          bottom: 0;

          background-color: #333;

          transition: .4s;

          border-radius: 24px;

        "></span>

        <span style="

          position: absolute;

          content: "";

          height: 16px;

          width: 16px;

          left: 4px;

          bottom: 4px;

          background-color: white;

          transition: .4s;

          border-radius: 50%;

        "></span>

      </label>

    </div>

  `;

}

function generateSupportButton(name, icon, color) {

  return `

    <div style="text-align: center;">

      <div style="

        width: 50px;

        height: 50px;

        background: ${color}20;

        border-radius: 50%;

        display: flex;

        justify-content: center;

        align-items: center;

        font-size: 24px;

        border: 2px solid ${color}60;

        margin-bottom: 5px;

      ">${icon}</div>

      <small style="color: #aaa;">${name}</small>

    </div>

  `;

}

function toggleFeature(id, enabled) {

  const feature = document.getElementById(`feature-${id}`);

  if (enabled) {

    feature.style.boxShadow = `0 0 15px ${['cyan', 'purple', 'green', 'orange'][id]}`;

    alert(`${['Optimize Sensitivity', 'Gesture Smooth', 'FPS Monitor', 'Croshir'][id]} diaktifkan!`);

  } else {

    feature.style.boxShadow = 'none';

  }

}

// Start the app

showSplashScreen();