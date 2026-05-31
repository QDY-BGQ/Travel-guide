const travelData = {
    beijing: {
        name: "北京",
        food: [
            { name: "北京烤鸭", desc: "世界闻名的京城美食，皮脆肉嫩" },
            { name: "炸酱面", desc: "传统北京面食，酱香浓郁" },
            { name: "糖葫芦", desc: "酸甜可口的传统小吃" }
        ],
        stay: [
            { name: "北京饭店", desc: "百年历史的五星级酒店" },
            { name: "胡同民宿", desc: "体验老北京四合院文化" },
            { name: "王府井希尔顿", desc: "位于市中心的豪华酒店" }
        ],
        transport: [
            { name: "地铁", desc: "便捷的城市轨道交通网络" },
            { name: "共享单车", desc: "短途出行的好选择" },
            { name: "出租车", desc: "全天候服务" }
        ],
        tour: [
            { name: "故宫博物院", desc: "世界上最大的宫殿建筑群" },
            { name: "八达岭长城", desc: "不到长城非好汉" },
            { name: "天坛公园", desc: "古代皇帝祭天的地方" }
        ],
        shop: [
            { name: "王府井步行街", desc: "著名的购物商业街" },
            { name: "前门大街", desc: "传统与现代结合的商业街" },
            { name: "秀水街", desc: "特色商品市场" }
        ],
        entertainment: [
            { name: "京剧表演", desc: "中国国粹艺术" },
            { name: "德云社相声", desc: "传统相声表演" },
            { name: "三里屯酒吧街", desc: "时尚夜生活" }
        ]
    },
    shanghai: {
        name: "上海",
        food: [
            { name: "小笼包", desc: "皮薄馅大，汤汁鲜美" },
            { name: "生煎包", desc: "底部金黄酥脆" },
            { name: "本帮红烧肉", desc: "浓油赤酱，甜而不腻" }
        ],
        stay: [
            { name: "外滩半岛酒店", desc: "顶级豪华酒店" },
            { name: "陆家嘴四季酒店", desc: "俯瞰浦江两岸美景" },
            { name: "弄堂民宿", desc: "体验上海石库门文化" }
        ],
        transport: [
            { name: "磁悬浮列车", desc: "世界最快的商业运行列车" },
            { name: "地铁", desc: "四通八达的地铁网络" },
            { name: "轮渡", desc: "横渡黄浦江的特色交通" }
        ],
        tour: [
            { name: "外滩", desc: "万国建筑博览群" },
            { name: "东方明珠", desc: "上海地标建筑" },
            { name: "豫园", desc: "江南古典园林" }
        ],
        shop: [
            { name: "南京路步行街", desc: "中华商业第一街" },
            { name: "淮海路", desc: "高端购物街区" },
            { name: "田子坊", desc: "创意小店聚集地" }
        ],
        entertainment: [
            { name: "上海迪士尼乐园", desc: "梦幻主题乐园" },
            { name: "百乐门", desc: "经典歌舞表演" },
            { name: "新天地", desc: "时尚休闲街区" }
        ]
    },
    hangzhou: {
        name: "杭州",
        food: [
            { name: "西湖醋鱼", desc: "酸甜可口的杭州名菜" },
            { name: "东坡肉", desc: "肥而不腻，入口即化" },
            { name: "龙井虾仁", desc: "清香鲜美的特色菜" }
        ],
        stay: [
            { name: "西湖国宾馆", desc: "园林式国宾级酒店" },
            { name: "龙井茶园民宿", desc: "亲近自然的茶园住宿" },
            { name: "西溪湿地度假村", desc: "生态度假胜地" }
        ],
        transport: [
            { name: "西湖游船", desc: "泛舟湖上的最佳体验" },
            { name: "公共自行车", desc: "环湖骑行" },
            { name: "网约车", desc: "便捷出行" }
        ],
        tour: [
            { name: "西湖", desc: "世界文化遗产" },
            { name: "灵隐寺", desc: "千年古刹" },
            { name: "西溪湿地", desc: "城市湿地" }
        ],
        shop: [
            { name: "河坊街", desc: "历史文化街区" },
            { name: "杭州丝绸市场", desc: "丝绸制品聚集地" },
            { name: "西湖龙井茶园", desc: "购买正宗龙井茶" }
        ],
        entertainment: [
            { name: "印象西湖", desc: "大型山水实景演出" },
            { name: "宋城千古情", desc: "主题公园演出" },
            { name: "龙井采茶", desc: "体验采茶乐趣" }
        ]
    },
    chengdu: {
        name: "成都",
        food: [
            { name: "麻辣火锅", desc: "成都美食代表" },
            { name: "麻婆豆腐", desc: "麻辣鲜香" },
            { name: "担担面", desc: "成都特色面食" }
        ],
        stay: [
            { name: "香格里拉酒店", desc: "五星级豪华酒店" },
            { name: "宽窄巷子民宿", desc: "老成都院落体验" },
            { name: "青城山度假酒店", desc: "山林间的度假胜地" }
        ],
        transport: [
            { name: "地铁", desc: "城市快速轨道交通" },
            { name: "共享单车", desc: "漫游成都" },
            { name: "出租车", desc: "便捷出行" }
        ],
        tour: [
            { name: "大熊猫繁育研究基地", desc: "近距离看大熊猫" },
            { name: "武侯祠", desc: "三国文化圣地" },
            { name: "都江堰", desc: "千年水利工程" }
        ],
        shop: [
            { name: "春熙路", desc: "繁华商业街" },
            { name: "锦里古街", desc: "传统工艺和特产" },
            { name: "宽窄巷子", desc: "特色小店" }
        ],
        entertainment: [
            { name: "川剧变脸", desc: "传统戏曲绝活" },
            { name: "鹤鸣茶社", desc: "老成都茶馆文化" },
            { name: "九眼桥酒吧街", desc: "夜生活聚集地" }
        ]
    },
    xian: {
        name: "西安",
        food: [
            { name: "肉夹馍", desc: "中式汉堡" },
            { name: "羊肉泡馍", desc: "西安特色美食" },
            { name: "biangbiang面", desc: "宽面劲道" }
        ],
        stay: [
            { name: "索菲特人民大厦", desc: "五星级酒店" },
            { name: "回民街民宿", desc: "体验回民文化" },
            { name: "曲江新区酒店", desc: "现代豪华住宿" }
        ],
        transport: [
            { name: "地铁", desc: "便捷的城市交通" },
            { name: "古城墙自行车", desc: "骑行古城墙" },
            { name: "出租车", desc: "方便出行" }
        ],
        tour: [
            { name: "兵马俑", desc: "世界第八奇迹" },
            { name: "西安城墙", desc: "保存最完整的古城墙" },
            { name: "大雁塔", desc: "唐代古塔" }
        ],
        shop: [
            { name: "回民街", desc: "特色小吃和纪念品" },
            { name: "书院门", desc: "文房四宝和古玩" },
            { name: "赛格国际购物中心", desc: "现代购物广场" }
        ],
        entertainment: [
            { name: "长恨歌", desc: "大型实景历史舞剧" },
            { name: "秦腔表演", desc: "传统戏曲" },
            { name: "大唐不夜城", desc: "唐代文化主题街区" }
        ]
    },
    sanya: {
        name: "三亚",
        food: [
            { name: "海鲜大餐", desc: "新鲜美味的海产品" },
            { name: "椰子鸡", desc: "清甜可口" },
            { name: "海南粉", desc: "海南特色米粉" }
        ],
        stay: [
            { name: "亚特兰蒂斯酒店", desc: "七星级度假酒店" },
            { name: "亚龙湾万豪", desc: "海滨度假酒店" },
            { name: "海边民宿", desc: "亲近大海的体验" }
        ],
        transport: [
            { name: "出租车", desc: "主要出行方式" },
            { name: "网约车", desc: "便捷叫车" },
            { name: "景区观光车", desc: "方便游览" }
        ],
        tour: [
            { name: "亚龙湾", desc: "天下第一湾" },
            { name: "天涯海角", desc: "著名景点" },
            { name: "蜈支洲岛", desc: "热带海岛风情" }
        ],
        shop: [
            { name: "第一市场", desc: "海鲜和热带水果" },
            { name: "免税店", desc: "购物天堂" },
            { name: "步行街", desc: "纪念品和特产" }
        ],
        entertainment: [
            { name: "潜水", desc: "探索海底世界" },
            { name: "海上娱乐项目", desc: "快艇、摩托艇等" },
            { name: "温泉SPA", desc: "放松身心" }
        ]
    }
};

const cityNames = {
    beijing: "北京",
    shanghai: "上海",
    hangzhou: "杭州",
    chengdu: "成都",
    xian: "西安",
    sanya: "三亚",
    other: "其他城市"
};

const categoryIcons = {
    food: '🍜',
    stay: '🏨',
    transport: '🚗',
    tour: '🏛️',
    shop: '🛍️',
    entertainment: '🎭'
};

let userGuides = [];

function loadUserGuides() {
    const saved = localStorage.getItem('userTravelGuides');
    if (saved) {
        userGuides = JSON.parse(saved);
    } else {
        userGuides = [
            {
                id: 1,
                author: "旅行达人小王",
                city: "chengdu",
                category: "food",
                itemName: "陈麻婆豆腐总店",
                itemDesc: "正宗的麻婆豆腐，麻辣鲜香，豆腐嫩滑，配上米饭简直绝了！一定要去总店尝尝，就在青华路。",
                date: "2024-01-15"
            },
            {
                id: 2,
                author: "背包客小李",
                city: "hangzhou",
                category: "tour",
                itemName: "九溪十八涧徒步",
                itemDesc: "强烈推荐九溪徒步路线，沿途风景绝美，溪水潺潺，茶园飘香，是放松身心的好地方。",
                date: "2024-01-20"
            },
            {
                id: 3,
                author: "美食家阿强",
                city: "xian",
                category: "food",
                itemName: "老孙家羊肉泡馍",
                itemDesc: "西安最正宗的羊肉泡馍，汤鲜味美，馍煮得恰到好处，一定要配上糖蒜吃！",
                date: "2024-02-01"
            }
        ];
        saveUserGuides();
    }
    renderUserGuides();
}

function saveUserGuides() {
    localStorage.setItem('userTravelGuides', JSON.stringify(userGuides));
}

function renderUserGuides() {
    const list = document.getElementById('userGuidesList');
    if (!list) return;
    
    if (userGuides.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#666;padding:20px;">还没有用户投稿，快来分享你的旅游攻略吧！</p>';
        return;
    }
    
    list.innerHTML = userGuides.map(guide => `
        <div class="guide-item-card">
            <div class="guide-item-header">
                <span class="guide-icon">${categoryIcons[guide.category]}</span>
                <span class="guide-city">${cityNames[guide.city]}</span>
            </div>
            <h4>${guide.itemName}</h4>
            <p>${guide.itemDesc}</p>
            <div class="guide-item-footer">
                <span class="guide-author">✍️ ${guide.author}</span>
                <span class="guide-date">📅 ${guide.date}</span>
            </div>
        </div>
    `).join('');
}

function submitGuide(e) {
    e.preventDefault();
    
    const author = document.getElementById('authorName').value.trim();
    const city = document.getElementById('citySelect').value;
    const category = document.getElementById('categorySelect').value;
    const itemName = document.getElementById('itemName').value.trim();
    const itemDesc = document.getElementById('itemDesc').value.trim();
    
    if (!author || !city || !category || !itemName || !itemDesc) {
        showToast('请填写所有必填项');
        return;
    }
    
    const newGuide = {
        id: Date.now(),
        author: author,
        city: city,
        category: category,
        itemName: itemName,
        itemDesc: itemDesc,
        date: new Date().toISOString().split('T')[0]
    };
    
    userGuides.unshift(newGuide);
    saveUserGuides();
    renderUserGuides();
    
    document.getElementById('submitForm').reset();
    showToast('投稿成功！感谢分享您的旅游攻略');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', () => {
        const destination = card.dataset.destination;
        showDestinationGuide(destination);
    });
});

document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        showCategoryGuide(category);
    });
});

document.querySelector('.btn-primary').addEventListener('click', () => {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('submitForm').addEventListener('submit', submitGuide);

function showDestinationGuide(destination) {
    const data = travelData[destination];
    let html = `<h2 style="color: #c9302c; margin-bottom: 1.5rem; text-align: center;">${data.name}旅游攻略</h2>`;
    
    const categories = [
        { key: 'food', title: '🍜 吃 - 当地特色美食', icon: '🍜' },
        { key: 'stay', title: '🏨 住 - 酒店民宿', icon: '🏨' },
        { key: 'transport', title: '🚗 行 - 交通出行', icon: '🚗' },
        { key: 'tour', title: '🏛️ 游 - 景点观光', icon: '🏛️' },
        { key: 'shop', title: '🛍️ 购 - 特产购物', icon: '🛍️' },
        { key: 'entertainment', title: '🎭 娱 - 休闲娱乐', icon: '🎭' }
    ];
    
    categories.forEach(cat => {
        html += `<div class="guide-section">
            <h3>${cat.title}</h3>`;
        data[cat.key].forEach(item => {
            html += `<div class="guide-item">
                <div class="guide-item-icon">${cat.icon}</div>
                <div>
                    <strong>${item.name}</strong>
                    <p style="color: #666; margin: 0.3rem 0 0 0;">${item.desc}</p>
                </div>
            </div>`;
        });
        
        const userContributions = userGuides.filter(g => g.city === destination && g.category === cat.key);
        if (userContributions.length > 0) {
            html += `<div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed #ccc;">
                <h4 style="color: #27ae60; margin-bottom: 0.5rem;">💡 用户推荐</h4>`;
            userContributions.forEach(guide => {
                html += `<div class="guide-item user-guide">
                    <div class="guide-item-icon">✨</div>
                    <div>
                        <strong>${guide.itemName}</strong>
                        <p style="color: #666; margin: 0.3rem 0 0 0;">${guide.itemDesc}</p>
                        <p style="font-size: 0.8rem; color: #888;">—— ${guide.author}</p>
                    </div>
                </div>`;
            });
            html += '</div>';
        }
        
        html += '</div>';
    });
    
    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function showCategoryGuide(category) {
    const catTitles = {
        food: '🍜 吃 - 各地美食精选',
        stay: '🏨 住 - 特色住宿推荐',
        transport: '🚗 行 - 交通出行指南',
        tour: '🏛️ 游 - 必游景点推荐',
        shop: '🛍️ 购 - 特产购物攻略',
        entertainment: '🎭 娱 - 娱乐项目推荐'
    };
    
    let html = `<h2 style="color: #c9302c; margin-bottom: 1.5rem; text-align: center;">${catTitles[category]}</h2>`;
    
    Object.keys(travelData).forEach(destKey => {
        const dest = travelData[destKey];
        html += `<div class="guide-section">
            <h3>${dest.name}</h3>`;
        dest[category].forEach(item => {
            html += `<div class="guide-item">
                <div class="guide-item-icon">📍</div>
                <div>
                    <strong>${item.name}</strong>
                    <p style="color: #666; margin: 0.3rem 0 0 0;">${item.desc}</p>
                </div>
            </div>`;
        });
        
        const userContributions = userGuides.filter(g => g.category === category && g.city === destKey);
        if (userContributions.length > 0) {
            html += `<div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed #ccc;">
                <h4 style="color: #27ae60; margin-bottom: 0.5rem;">💡 用户推荐</h4>`;
            userContributions.forEach(guide => {
                html += `<div class="guide-item user-guide">
                    <div class="guide-item-icon">✨</div>
                    <div>
                        <strong>${guide.itemName}</strong>
                        <p style="color: #666; margin: 0.3rem 0 0 0;">${guide.itemDesc}</p>
                        <p style="font-size: 0.8rem; color: #888;">—— ${guide.author}</p>
                    </div>
                </div>`;
            });
            html += '</div>';
        }
        
        html += '</div>';
    });
    
    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

let currentUser = null;
let favorites = [];

function initAuth() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserDisplay();
        loadFavorites();
    }
}

function updateUserDisplay() {
    const loginBtn = document.getElementById('loginBtn');
    const userDisplay = document.getElementById('userDisplay');
    
    if (currentUser) {
        loginBtn.style.display = 'none';
        userDisplay.style.display = 'inline';
        userDisplay.innerHTML = `${currentUser.nickname} <button onclick="logout()" class="btn-logout">退出</button>`;
    } else {
        loginBtn.style.display = 'inline';
        userDisplay.style.display = 'none';
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserDisplay();
    loadFavorites();
    showToast('已退出登录');
}

const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const backToLoginBtn = document.getElementById('backToLoginBtn');
const closeLoginBtn = document.querySelector('.close-login');
const closeRegisterBtn = document.querySelector('.close-register');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

registerBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
});

backToLoginBtn.addEventListener('click', () => {
    registerModal.style.display = 'none';
    loginModal.style.display = 'block';
});

closeLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

closeRegisterBtn.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserDisplay();
        loadFavorites();
        loginModal.style.display = 'none';
        showToast('登录成功！');
        document.getElementById('loginForm').reset();
    } else {
        showToast('用户名或密码错误');
    }
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value;
    const nickname = document.getElementById('regNickname').value.trim();
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.username === username)) {
        showToast('用户名已存在');
        return;
    }
    
    const newUser = {
        id: Date.now(),
        username: username,
        password: password,
        nickname: nickname
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserDisplay();
    registerModal.style.display = 'none';
    showToast('注册成功！');
    document.getElementById('registerForm').reset();
});

function loadFavorites() {
    if (!currentUser) {
        const favoritesList = document.getElementById('favoritesList');
        favoritesList.innerHTML = '<p class="empty-message" style="text-align:center;color:#666;padding:40px;">登录后可查看你的收藏</p>';
        return;
    }
    
    const allFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    favorites = allFavorites[currentUser.id] || [];
    
    renderFavorites();
}

function renderFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p class="empty-message" style="text-align:center;color:#666;padding:40px;">还没有收藏任何攻略</p>';
        return;
    }
    
    favoritesList.innerHTML = favorites.map(fav => `
        <div class="favorite-card">
            <div class="favorite-header">
                <span class="guide-icon">${categoryIcons[fav.category]}</span>
                <span class="guide-city">${cityNames[fav.city]}</span>
            </div>
            <h4>${fav.itemName}</h4>
            <p>${fav.itemDesc}</p>
            <div class="favorite-footer">
                <span class="guide-author">✍️ ${fav.author}</span>
                <button onclick="removeFavorite(${fav.id})" class="btn-delete">删除</button>
            </div>
        </div>
    `).join('');
}

function addFavorite(guide) {
    if (!currentUser) {
        showToast('请先登录');
        return;
    }
    
    const allFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    const userFavorites = allFavorites[currentUser.id] || [];
    
    if (userFavorites.find(f => f.id === guide.id)) {
        showToast('已经收藏过了');
        return;
    }
    
    userFavorites.push(guide);
    allFavorites[currentUser.id] = userFavorites;
    localStorage.setItem('favorites', JSON.stringify(allFavorites));
    
    favorites = userFavorites;
    renderFavorites();
    renderCommunityGuides();
    showToast('收藏成功！');
}

function removeFavorite(guideId) {
    const allFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    const userFavorites = allFavorites[currentUser.id] || [];
    
    const index = userFavorites.findIndex(f => f.id === guideId);
    if (index > -1) {
        userFavorites.splice(index, 1);
        allFavorites[currentUser.id] = userFavorites;
        localStorage.setItem('favorites', JSON.stringify(allFavorites));
        
        favorites = userFavorites;
        renderFavorites();
        renderCommunityGuides();
        showToast('已删除收藏');
    }
}

function loadCommunityGuides() {
    renderCommunityGuides();
}

function renderCommunityGuides() {
    const communityGuidesList = document.getElementById('communityGuidesList');
    
    if (userGuides.length === 0) {
        communityGuidesList.innerHTML = '<p class="empty-message" style="text-align:center;color:#666;padding:40px;">还没有用户投稿</p>';
        return;
    }
    
    const allFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    const userFavorites = currentUser ? (allFavorites[currentUser.id] || []) : [];
    
    communityGuidesList.innerHTML = userGuides.map(guide => {
        const isFavorited = userFavorites.find(f => f.id === guide.id);
        return `
            <div class="community-card">
                <div class="community-header">
                    <span class="guide-icon">${categoryIcons[guide.category]}</span>
                    <span class="guide-city">${cityNames[guide.city]}</span>
                </div>
                <h4>${guide.itemName}</h4>
                <p>${guide.itemDesc}</p>
                <div class="community-footer">
                    <span class="guide-author">✍️ ${guide.author}</span>
                    <span class="guide-date">📅 ${guide.date}</span>
                    <button onclick="addFavorite(${JSON.stringify(guide).replace(/"/g, '&quot;')})" 
                            class="btn-favorite ${isFavorited ? 'favorited' : ''}"
                            ${isFavorited ? 'disabled' : ''}>
                        ${isFavorited ? '已收藏' : '收藏'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    loadUserGuides();
    initAuth();
    loadCommunityGuides();
});
