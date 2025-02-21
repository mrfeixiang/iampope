const scenes = {
  village: {
    description: "村庄陷于瘟疫，村民眼中满是绝望。",
    dialogue: "村民：吾皇，吾皇，疫情已到，村庄等着您！",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [
      { text: "执行隔离，保护村民", next: "quarantine", score: 10 },
      { text: "祈祷，求神庇护", next: "pray", score: 5 },
      { text: "救治，尽全力医治", next: "medicine", score: 8 }
    ],
    isEnd: false
  },
  quarantine: {
    description: "隔离生效，瘟疫减缓，但村民痛苦不堪。",
    dialogue: "村民：感谢您…但我们饿了，求您怜悯！",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [
      { text: "分发粮食，温暖人心", next: "food_aid", score: 8 },
      { text: "坚持隔离，守护生命", next: "strict_quarantine", score: 6 }
    ],
    isEnd: false
  },
  pray: {
    description: "教堂回荡祈祷声，村民眼中燃起希望。",
    dialogue: "村民：神明沉默…我们还能坚持吗？",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [
      { text: "组织祈祷，凝聚信仰", next: "big_prayer", score: 5 },
      { text: "立即隔离，拯救村民", next: "quarantine", score: 7 }
    ],
    isEnd: false
  },
  medicine: {
    description: "药品救了部分人，但资源耗尽，村民泪流。",
    dialogue: "村民：谢谢您…但我们还有希望吗？",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [
      { text: "寻求援助，续写希望", next: "external_aid", score: 9 },
      { text: "优先重症，尽力挽救", next: "priority_care", score: 7 }
    ],
    isEnd: false
  },
  food_aid: {
    description: "粮食带来笑容，村民感激，但瘟疫未退。",
    dialogue: "村民：您的仁慈让我们振作…但瘟疫仍在！",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [
      { text: "加强隔离，终结灾难", next: "end_success", score: 10 },
      { text: "祈求神恩，等待奇迹", next: "end_failure", score: 4 }
    ],
    isEnd: false
  },
  strict_quarantine: {
    description: "隔离成功，瘟疫受控，但村民经济艰难。",
    dialogue: "村民：您的决定救了我们…但生活苦难，请怜悯！",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [
      { text: "提供支持，重建希望", next: "end_success", score: 9 },
      { text: "继续隔离，忍耐至终", next: "end_failure", score: 6 }
    ],
    isEnd: false
  },
  big_prayer: {
    description: "信仰点燃希望，但瘟疫未减，村民焦急。",
    dialogue: "村民：您的祈祷让我们坚强…但瘟疫仍在！",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [
      { text: "执行隔离，保全生命", next: "quarantine", score: 8 },
      { text: "分发药品，救治伤痛", next: "medicine", score: 7 }
    ],
    isEnd: false
  },
  external_aid: {
    description: "援助到来，瘟疫退去，村民泪中带笑。",
    dialogue: "村民：感谢您，吾皇…村庄重获生机！",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [
      { text: "庆祝胜利，结束使命", next: "end_success", score: 10 },
      { text: "继续监控，守护和平", next: "end_success", score: 5 }
    ],
    isEnd: false
  },
  priority_care: {
    description: "重症获救，但资源枯竭，村民心痛。",
    dialogue: "村民：您的努力让我们感动…但瘟疫仍在威胁！",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [
      { text: "寻求援助，续写希望", next: "external_aid", score: 9 },
      { text: "祈求神恩，忍耐等待", next: "end_failure", score: 3 }
    ],
    isEnd: false
  },
  end_success: {
    description: "你带领村庄战胜瘟疫，村民泪流满面，感谢不尽。",
    dialogue: "村民：吾皇，您的仁慈拯救了我们…感谢您！",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [],
    isEnd: true,
    score: 0 // Final score determined by total
  },
  end_failure: {
    description: "瘟疫吞噬村庄，村民绝望，教会声望崩塌。",
    dialogue: "村民：吾皇…我们失败了，村庄毁于瘟疫！",
    background: "./assets/medieval_village.png",
    character: `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- 皇冠主体 -->
        <g fill="url(#crownGradient)" stroke="#000" stroke-width="2">
          <path d="M10,70 L20,30 L35,50 L50,25 L65,50 L80,30 L90,70 Z" />
        </g>
        <!-- 装饰性红色宝石 -->
        <g fill="#FF4500" stroke="#000" stroke-width="2">
          <circle cx="20" cy="70" r="4"/>
          <circle cx="50" cy="70" r="4"/>
          <circle cx="80" cy="70" r="4"/>
        </g>
      </svg>
    `,
    choices: [],
    isEnd: true,
    score: 0 // Final score determined by total
  }
};

let currentScene = "village";
let score = 0;

function updateScore(value) {
  score += value;
  // 得分在游戏过程中隐藏
}

function loadScene(sceneKey) {
  const scene = scenes[sceneKey];
  const gameDiv = document.getElementById("game");
  const sceneBackground = document.getElementById("scene-background");
  const characterDiv = document.getElementById("character");
  const dialogueDiv = document.getElementById("dialogue");
  const choicesDiv = document.getElementById("choices");
  const endButton = document.getElementById("end-button");

  // 设置背景图
  sceneBackground.style.backgroundImage = `url('${scene.background}')`;
  sceneBackground.style.backgroundSize = "cover";
  sceneBackground.style.backgroundPosition = "center";
  sceneBackground.style.backgroundRepeat = "no-repeat";

  // 设置角色图片
  characterDiv.innerHTML = scene.character;

  // 设置对话框
  dialogueDiv.innerHTML = `
    <svg width="400" height="150" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <!-- 对话框背景（灰色） -->
      <rect x="0" y="0" width="400" height="150" fill="#B0B0B0" stroke="#666" stroke-width="2" rx="15" ry="15"/>
      
      <!-- 文本 -->
      <text x="200" y="75" text-anchor="middle" alignment-baseline="middle" font-size="16" fill="#000">
        ${scene.dialogue}
      </text>
    </svg>
  `;

  // 设置选择按钮
  choicesDiv.innerHTML = "";
  if (scene.isEnd) {
    // 隐藏“挑战结束！”按钮
    endButton.style.display = "none";
    choicesDiv.innerHTML = `
      <svg width="400" height="150" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" class="final-score">
        <!-- 最终得分背景（灰色） -->
        <rect x="0" y="0" width="400" height="150" fill="#B0B0B0" stroke="#666" stroke-width="2" rx="15" ry="15"/>
        
        <!-- 文本（显示最终得分） -->
        <text x="200" y="75" text-anchor="middle" alignment-baseline="middle" font-size="16" fill="#000">
          游戏结束！您的最终经验值为：${score} 分
        </text>
      </svg>
    `;
  } else {
    // 隐藏“挑战结束！”按钮
    endButton.style.display = "none";
    scene.choices.forEach(choice => {
      const button = document.createElement("button");
      button.innerHTML = `
        <svg width="180" height="50" viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg">
          <!-- 按钮背景（灰色） -->
          <rect x="0" y="0" width="180" height="50" fill="#B0B0B0" stroke="#666" stroke-width="2" rx="10" ry="10"/>
          
          <!-- 文本 -->
          <text x="90" y="25" text-anchor="middle" alignment-baseline="middle" font-size="14" fill="#000">
            ${choice.text}
          </text>
        </svg>
      `;
      button.style.width = "180px";
      button.style.height = "50px";
      button.style.border = "none";
      button.style.cursor = "pointer";
      button.style.margin = "5px";
      button.style.pointerEvents = "auto";
      button.onclick = () => {
        if (choice.score) {
          updateScore(choice.score);
        }
        loadScene(choice.next);
      };
      choicesDiv.appendChild(button);
    });
  }

  // 如果是结束场景，显示“挑战结束！”按钮
  if (scene.isEnd) {
    endButton.style.display = "block";
    endButton.onclick = () => {
      // 可以添加重置游戏或关闭的逻辑
      alert("挑战结束！感谢您的参与！");
      // 例如，重置游戏
      currentScene = "village";
      score = 0;
      loadScene(currentScene);
    };
  }
}

window.onload = () => {
  loadScene(currentScene);
};