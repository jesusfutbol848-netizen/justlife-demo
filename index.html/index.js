// ==================== DATA STORE ====================
const DEMO_USERS = [
    { id: 1, name: 'Carlos Garcia', email: 'usuario@justlife.com', phone: '555-0101', password: '1234', points: 350, streak: 5, visits: 12, joinDate: '2024-01-15' },
    { id: 2, name: 'Maria Lopez', email: 'maria@justlife.com', phone: '555-0102', password: '1234', points: 520, streak: 8, visits: 20, joinDate: '2024-02-01' },
    { id: 3, name: 'Pedro Martinez', email: 'pedro@justlife.com', phone: '555-0103', password: '1234', points: 180, streak: 3, visits: 8, joinDate: '2024-03-10' },
    { id: 4, name: 'Ana Torres', email: 'ana@justlife.com', phone: '555-0104', password: '1234', points: 750, streak: 12, visits: 30, joinDate: '2024-01-05' },
    { id: 5, name: 'Luis Hernandez', email: 'luis@justlife.com', phone: '555-0105', password: '1234', points: 90, streak: 1, visits: 4, joinDate: '2024-04-20' },
];

const DEMO_INSTRUCTORS = [
    { id: 1, name: 'Coach Ana Lopez', email: 'instructor@justlife.com', password: '1234' },
];

const ROUTINES_DB = {
    push: {
        name: 'Push Day - Pecho y Triceps',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=250&fit=crop',
        exercises: [
            { name: 'Press de Banca', sets: '4 x 10', detail: 'Barra, 80kg' },
            { name: 'Press Inclinado con Mancuernas', sets: '3 x 12', detail: 'Mancuernas 30kg' },
            { name: 'Cruces en Polea', sets: '3 x 15', detail: 'Polea alta' },
            { name: 'Extension de Triceps en Polea', sets: '4 x 12', detail: 'Cuerda' },
            { name: 'Press Frances', sets: '3 x 10', detail: 'Barra Z' },
        ],
        videos: [
            { title: 'Press de Banca - Forma Correcta', url: 'https://www.youtube.com/embed/rT7DgCr-3pg' },
            { title: 'Ejercicios de Pecho Completos', url: 'https://www.youtube.com/embed/8iPEnn-ltC8' },
            { title: 'Rutina de Triceps Efectiva', url: 'https://www.youtube.com/embed/ykJmrZ5v0Oo' },
        ]
    },
    pull: {
        name: 'Pull Day - Espalda y Biceps',
        image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=400&h=250&fit=crop',
        exercises: [
            { name: 'Dominadas', sets: '4 x 8', detail: 'Peso corporal + 10kg' },
            { name: 'Remo con Barra', sets: '4 x 10', detail: '70kg' },
            { name: 'Jalón en Polea', sets: '3 x 12', detail: 'Pronación' },
            { name: 'Curl de Bíceps con Barra', sets: '4 x 10', detail: 'Barra Z 30kg' },
            { name: 'Curl Martillo', sets: '3 x 12', detail: 'Mancuernas 15kg' },
        ],
        videos: [
            { title: 'Dominadas - Técnica Perfecta', url: 'https://www.youtube.com/embed/eGo4IYlbE5g' },
            { title: 'Ejercicios de Espalda Completos', url: 'https://www.youtube.com/embed/roCP6wCXPqo' },
            { title: 'Rutina de Bíceps Efectiva', url: 'https://www.youtube.com/embed/kwGmVj0Wnp4' },
        ]
    },
    legs: {
        name: 'Leg Day - Piernas',
        image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=250&fit=crop',
        exercises: [
            { name: 'Sentadilla', sets: '5 x 8', detail: 'Barra 100kg' },
            { name: 'Prensa de Piernas', sets: '4 x 12', detail: '200kg' },
            { name: 'Curl Femoral', sets: '4 x 12', detail: 'Máquina' },
            { name: 'Extensiones de Cuádriceps', sets: '3 x 15', detail: 'Máquina' },
            { name: 'Elevación de Talones', sets: '4 x 20', detail: 'Máquina' },
        ],
        videos: [
            { title: 'Sentadilla - Forma Correcta', url: 'https://www.youtube.com/embed/bEv6CCg2BC8' },
            { title: 'Rutina Completa de Piernas', url: 'https://www.youtube.com/embed/IZxyjW7MPJQ' },
        ]
    },
    fullbody: {
        name: 'Full Body - Cuerpo Completo',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop',
        exercises: [
            { name: 'Sentadilla', sets: '4 x 10', detail: '80kg' },
            { name: 'Press de Banca', sets: '4 x 10', detail: '60kg' },
            { name: 'Remo con Barra', sets: '4 x 10', detail: '60kg' },
            { name: 'Press Militar', sets: '3 x 12', detail: '30kg' },
            { name: 'Peso Muerto', sets: '3 x 8', detail: '100kg' },
        ],
        videos: [
            { title: 'Full Body Workout en Casa', url: 'https://www.youtube.com/embed/UBMk30rjy0o' },
            { title: 'Rutina Full Body para Principiantes', url: 'https://www.youtube.com/embed/PjGhHfmFQ6c' },
        ]
    },
    cardio: {
        name: 'Cardio y Resistencia',
        image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=250&fit=crop',
        exercises: [
            { name: 'Cinta de Correr', sets: '20 min', detail: 'Intervalos HIIT' },
            { name: 'Bicicleta Estática', sets: '15 min', detail: 'Intensidad alta' },
            { name: 'Battle Ropes', sets: '4 x 30 seg', detail: 'Descanso 30 seg' },
            { name: 'Burpees', sets: '4 x 15', detail: 'Sin descanso' },
            { name: 'Remador', sets: '10 min', detail: '500m sprints' },
        ],
        videos: [
            { title: 'HIIT Cardio Workout 20 Min', url: 'https://www.youtube.com/embed/ml6cT4AZdqI' },
            { title: 'Cardio en el Gimnasio', url: 'https://www.youtube.com/embed/2pLT-pegU6M' },
        ]
    },
    arms: {
        name: 'Brazos y Abdomen',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=250&fit=crop',
        exercises: [
            { name: 'Curl de Bíceps', sets: '4 x 12', detail: 'Mancuernas 15kg' },
            { name: 'Extensiones de Triceps', sets: '4 x 12', detail: 'Mancuernas 20kg' },
            { name: 'Curl Martillo', sets: '3 x 12', detail: 'Mancuernas 12kg' },
            { name: 'Crunch en Máquina', sets: '4 x 20', detail: 'Máquina' },
            { name: 'Plancha', sets: '4 x 45 seg', detail: 'Descanso 15 seg' },
        ],
        videos: [
            { title: 'Rutina de Bíceps y Triceps', url: 'https://www.youtube.com/embed/ykJmrZ5v0Oo' },
            { title: 'Abdomen en el Gimnasio', url: 'https://www.youtube.com/embed/XxWcirHIwVo' },
        ]
    }
};

const REWARDS_CATALOG = [
    { id: 'puntos-50', name: '50 Puntos Extra', icon: 'fas fa-coins', description: 'Puntos de bonificacion', cost: 0 },
    { id: 'puntos-100', name: '100 Puntos Extra', icon: 'fas fa-coins', description: 'Puntos de bonificacion', cost: 0 },
    { id: 'clase-gratis', name: 'Clase Personalizada', icon: 'fas fa-dumbbell', description: '1 sesion con entrenador personal', cost: 200 },
    { id: 'suplemento', name: 'Suplemento Gratis', icon: 'fas fa-blender', description: 'Proteina o creatina', cost: 350 },
    { id: 'camiseta', name: 'Camiseta JustLife', icon: 'fas fa-tshirt', description: 'Camiseta exclusiva del gym', cost: 500 },
];

const MILESTONE_REWARDS = [
    { visits: 5, name: '5 Visitas', icon: 'fas fa-fire', description: 'Primera racha de 5 dias', cost: 100 },
    { visits: 10, name: '10 Visitas', icon: 'fas fa-fire-alt', description: 'Racha de 10 dias', cost: 250 },
    { visits: 15, name: '15 Visitas', icon: 'fas fa-medal', description: 'Miembro dedicado', cost: 400 },
    { visits: 20, name: '20 Visitas', icon: 'fas fa-crown', description: 'Miembro VIP', cost: 600 },
    { visits: 30, name: '30 Visitas', icon: 'fas fa-gem', description: 'Leyenda del gym', cost: 1000 },
];

// ==================== APP STATE ====================
let state = {
    currentUser: null,
    currentRole: null,
    users: JSON.parse(localStorage.getItem('justlife_users')) || [...DEMO_USERS],
    routines: JSON.parse(localStorage.getItem('justlife_routines')) || {},
    checkins: JSON.parse(localStorage.getItem('justlife_checkins')) || [],
    rewardsHistory: JSON.parse(localStorage.getItem('justlife_rewards')) || [],
    checkinTimers: {},
};

// Pre-assign some routines for demo users
if (!localStorage.getItem('justlife_routines')) {
    state.routines = {
        1: [
            { type: 'push', day: 'lunes', difficulty: 'intermedio' },
            { type: 'pull', day: 'miercoles', difficulty: 'intermedio' },
            { type: 'legs', day: 'viernes', difficulty: 'intermedio' },
        ],
        2: [
            { type: 'fullbody', day: 'lunes', difficulty: 'principiante' },
            { type: 'cardio', day: 'martes', difficulty: 'principiante' },
            { type: 'arms', day: 'jueves', difficulty: 'principiante' },
        ],
        3: [
            { type: 'push', day: 'martes', difficulty: 'principiante' },
            { type: 'legs', day: 'jueves', difficulty: 'principiante' },
        ],
    };
}

// Pre-populate some checkins for demo
if (!localStorage.getItem('justlife_checkins')) {
    const today = new Date();
    state.checkins = [
        { userId: 1, date: formatDate(today), entry: '08:15', exit: '09:05', duration: '50 min' },
        { userId: 2, date: formatDate(today), entry: '07:30', exit: '08:30', duration: '60 min' },
        { userId: 3, date: formatDate(today), entry: '10:00', exit: null, duration: null },
        { userId: 4, date: formatDate(today), entry: '06:45', exit: '07:40', duration: '55 min' },
        { userId: 5, date: formatDate(today), entry: '09:20', exit: null, duration: null },
    ];
}

// ==================== UTILITY FUNCTIONS ====================
function saveState() {
    localStorage.setItem('justlife_users', JSON.stringify(state.users));
    localStorage.setItem('justlife_routines', JSON.stringify(state.routines));
    localStorage.setItem('justlife_checkins', JSON.stringify(state.checkins));
    localStorage.setItem('justlife_rewards', JSON.stringify(state.rewardsHistory));
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function formatTime(date) {
    return date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function formatDateDisplay(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

// ==================== NAVIGATION ====================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function showUserTab(tabId) {
    document.querySelectorAll('#user-dashboard .tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById('user-' + tabId).classList.add('active');

    document.querySelectorAll('#user-dashboard .sidebar li').forEach(li => li.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (tabId === 'routines') renderUserRoutines();
    if (tabId === 'checkin') renderCheckinHistory();
    if (tabId === 'rewards') renderUserRewards();
}

function showInstructorTab(tabId) {
    document.querySelectorAll('#instructor-dashboard .tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById('instructor-' + tabId).classList.add('active');

    document.querySelectorAll('#instructor-dashboard .sidebar li').forEach(li => li.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (tabId === 'users') { renderUsersTable(); populateUserSelects(); }
    if (tabId === 'assign') { renderAssignedTable(); populateUserSelects(); }
    if (tabId === 'attendance') renderAttendanceTable();
    if (tabId === 'manage-rewards') { renderRewardsHistory(); populateUserSelects(); }
}

// ==================== AUTH ====================
function handleUserLogin(e) {
    e.preventDefault();
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    const user = state.users.find(u => u.email === email && u.password === password);
    if (user) {
        state.currentUser = user;
        state.currentRole = 'user';
        showPage('user-dashboard');
        renderUserDashboard();
        showToast('Bienvenido, ' + user.name.split(' ')[0] + '!');
    } else {
        alert('Credenciales incorrectas. Prueba: usuario@justlife.com / 1234');
    }
}

function handleInstructorLogin(e) {
    e.preventDefault();
    const email = document.getElementById('instructor-email').value;
    const password = document.getElementById('instructor-password').value;

    const instructor = DEMO_INSTRUCTORS.find(i => i.email === email && i.password === password);
    if (instructor) {
        state.currentUser = instructor;
        state.currentRole = 'instructor';
        showPage('instructor-dashboard');
        renderInstructorDashboard();
        showToast('Bienvenido, ' + instructor.name + '!');
    } else {
        alert('Credenciales incorrectas. Prueba: instructor@justlife.com / 1234');
    }
}

function logout() {
    state.currentUser = null;
    state.currentRole = null;
    document.getElementById('user-login-form').reset();
    document.getElementById('instructor-login-form').reset();
    showPage('landing');
}

// ==================== USER DASHBOARD ====================
function renderUserDashboard() {
    const user = state.currentUser;
    if (!user) return;

    document.getElementById('user-name-display').textContent = user.name;
    document.getElementById('welcome-user-name').textContent = user.name.split(' ')[0];
    document.getElementById('stat-visits').textContent = user.visits;
    document.getElementById('stat-hours').textContent = Math.floor(user.visits * 1.2) + 'h';
    document.getElementById('stat-points').textContent = user.points;
    document.getElementById('stat-streak').textContent = user.streak;

    const userRoutines = state.routines[user.id] || [];
    if (userRoutines.length > 0) {
        const firstRoutine = ROUTINES_DB[userRoutines[0].type];
        document.getElementById('next-routine-name').textContent = firstRoutine.name;
        document.getElementById('next-routine-desc').textContent = `${firstRoutine.exercises.length} ejercicios - ~${firstRoutine.exercises.length * 10} min`;
        document.getElementById('next-routine-diff').textContent = userRoutines[0].difficulty.charAt(0).toUpperCase() + userRoutines[0].difficulty.slice(1);
    }

    startClock();
    checkTodayCheckin();
}

function renderUserRoutines() {
    const user = state.currentUser;
    const userRoutines = state.routines[user.id] || [];
    const container = document.getElementById('user-routines-list');
    const detail = document.getElementById('routine-detail');

    container.classList.remove('hidden');
    detail.classList.add('hidden');

    if (userRoutines.length === 0) {
        container.innerHTML = '<p style="color: var(--gray-light); text-align: center; padding: 2rem;">No tienes rutinas asignadas aun.</p>';
        return;
    }

    container.innerHTML = userRoutines.map((r, i) => {
        const routine = ROUTINES_DB[r.type];
        return `
            <div class="routine-card" onclick="openRoutineDetail('${r.type}', ${i})">
                <img src="${routine.image}" alt="${routine.name}">
                <div class="routine-card-body">
                    <h4>${routine.name}</h4>
                    <p>${routine.exercises.length} ejercicios</p>
                </div>
                <div class="routine-card-footer">
                    <span>${r.day.charAt(0).toUpperCase() + r.day.slice(1)}</span>
                    <span class="difficulty-badge">${r.difficulty}</span>
                </div>
            </div>
        `;
    }).join('');
}

function openRoutineDetail(type, index) {
    const routine = ROUTINES_DB[type];
    document.getElementById('user-routines-list').classList.add('hidden');
    const detail = document.getElementById('routine-detail');
    detail.classList.remove('hidden');

    document.getElementById('detail-routine-title').textContent = routine.name;
    document.getElementById('detail-routine-desc').textContent = `${routine.exercises.length} ejercicios - Nivel ${state.routines[state.currentUser.id][index].difficulty}`;

    document.getElementById('detail-exercises').innerHTML = routine.exercises.map((ex, i) => `
        <div class="exercise-item">
            <div class="exercise-number">${i + 1}</div>
            <div class="exercise-info">
                <h5>${ex.name}</h5>
                <span>${ex.sets} - ${ex.detail}</span>
            </div>
        </div>
    `).join('');

    document.getElementById('detail-videos-grid').innerHTML = routine.videos.map(v => `
        <div class="video-card">
            <iframe src="${v.url}" title="${v.title}" allowfullscreen></iframe>
            <div class="video-title">${v.title}</div>
        </div>
    `).join('');
}

function closeRoutineDetail() {
    document.getElementById('user-routines-list').classList.remove('hidden');
    document.getElementById('routine-detail').classList.add('hidden');
}

// ==================== CHECK-IN SYSTEM ====================
let clockInterval = null;

function startClock() {
    if (clockInterval) clearInterval(clockInterval);
    function updateClock() {
        document.getElementById('current-time').textContent = formatTime(new Date());
    }
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
}

function checkTodayCheckin() {
    const user = state.currentUser;
    const today = formatDate(new Date());
    const todayCheckin = state.checkins.find(c => c.userId === user.id && c.date === today && !c.exit);

    const btn = document.getElementById('checkin-btn');
    const status = document.getElementById('checkin-status');

    if (todayCheckin) {
        btn.innerHTML = '<i class="fas fa-door-closed"></i> Registrar Salida';
        btn.classList.add('checked-in');
        status.textContent = `Entrada registrada a las ${todayCheckin.entry}`;
        status.classList.add('checked-in');
    } else {
        btn.innerHTML = '<i class="fas fa-door-open"></i> Registrar Entrada';
        btn.classList.remove('checked-in');
        status.textContent = 'No has registrado tu entrada hoy';
        status.classList.remove('checked-in');
    }
}

function handleCheckIn() {
    const user = state.currentUser;
    const today = formatDate(new Date());
    const now = new Date();
    const timeStr = formatTime(now).substring(0, 5);

    const todayCheckin = state.checkins.find(c => c.userId === user.id && c.date === today && !c.exit);

    if (todayCheckin) {
        todayCheckin.exit = timeStr;
        const entryParts = todayCheckin.entry.split(':');
        const exitParts = timeStr.split(':');
        const mins = (parseInt(exitParts[0]) * 60 + parseInt(exitParts[1])) - (parseInt(entryParts[0]) * 60 + parseInt(entryParts[1]));
        todayCheckin.duration = mins >= 60 ? `${Math.floor(mins/60)}h ${mins%60}min` : `${mins} min`;

        user.visits += 1;
        user.points += Math.floor(mins / 10) * 5;

        if (mins >= 30) {
            user.streak += 1;
        }

        saveState();
        showToast(`Salida registrada. Duracion: ${todayCheckin.duration}`);
    } else {
        state.checkins.push({
            userId: user.id,
            date: today,
            entry: timeStr,
            exit: null,
            duration: null
        });
        saveState();
        showToast('Entrada registrada a las ' + timeStr);
    }

    checkTodayCheckin();
    renderCheckinHistory();
    renderUserDashboard();
}

function renderCheckinHistory() {
    const user = state.currentUser;
    const userCheckins = state.checkins
        .filter(c => c.userId === user.id && c.exit)
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 7);

    const container = document.getElementById('checkin-history-list');
    container.innerHTML = userCheckins.map(c => `
        <div class="history-item">
            <span class="date">${formatDateDisplay(c.date)}</span>
            <span>${c.entry} - ${c.exit}</span>
            <span class="duration">${c.duration}</span>
        </div>
    `).join('') || '<p style="color: var(--gray-light);">Sin registros recientes</p>';
}

// ==================== REWARDS ====================
function renderUserRewards() {
    const user = state.currentUser;
    document.getElementById('user-points-display').textContent = user.points;

    const container = document.getElementById('rewards-list');
    const allRewards = [...MILESTONE_REWARDS, ...REWARDS_CATALOG.filter(r => r.cost > 0)];

    container.innerHTML = allRewards.map(r => {
        const isUnlocked = user.points >= r.cost || user.visits >= (r.visits || 999);
        return `
            <div class="reward-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <i class="fas ${r.icon} reward-icon"></i>
                <h4>${r.name}</h4>
                <p>${r.description}</p>
                <span class="reward-cost ${isUnlocked ? 'affordable' : ''}">
                    ${r.visits ? `${r.visits} visitas` : `${r.cost} puntos`}
                </span>
            </div>
        `;
    }).join('');
}

// ==================== INSTRUCTOR DASHBOARD ====================
function renderInstructorDashboard() {
    document.getElementById('instructor-name-display').textContent = state.currentUser.name;
    document.getElementById('inst-stat-users').textContent = state.users.length;

    let totalRoutines = 0;
    Object.values(state.routines).forEach(r => totalRoutines += r.length);
    document.getElementById('inst-stat-routines').textContent = totalRoutines;

    const today = formatDate(new Date());
    const todayCount = state.checkins.filter(c => c.date === today).length;
    document.getElementById('inst-stat-today').textContent = todayCount;
    document.getElementById('inst-stat-rewards').textContent = state.rewardsHistory.length;
}

function renderUsersTable() {
    const tbody = document.getElementById('users-table-body');
    tbody.innerHTML = state.users.map(u => `
        <tr>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.phone}</td>
            <td>${u.points}</td>
            <td>${formatDateDisplay(u.joinDate)}</td>
        </tr>
    `).join('');
}

function handleAddUser(e) {
    e.preventDefault();
    const newUser = {
        id: Date.now(),
        name: document.getElementById('new-user-name').value,
        email: document.getElementById('new-user-email').value,
        phone: document.getElementById('new-user-phone').value,
        password: document.getElementById('new-user-password').value,
        points: 0,
        streak: 0,
        visits: 0,
        joinDate: formatDate(new Date()),
    };

    state.users.push(newUser);
    saveState();
    e.target.reset();
    renderUsersTable();
    populateUserSelects();
    showToast('Usuario "' + newUser.name + '" registrado exitosamente');
}

function renderAssignedTable() {
    const tbody = document.getElementById('assigned-table-body');
    let rows = '';

    Object.entries(state.routines).forEach(([userId, routines]) => {
        const user = state.users.find(u => u.id === parseInt(userId));
        if (!user) return;

        routines.forEach((r, index) => {
            const routine = ROUTINES_DB[r.type];
            rows += `
                <tr>
                    <td>${user.name}</td>
                    <td>${routine.name}</td>
                    <td>${r.day.charAt(0).toUpperCase() + r.day.slice(1)}</td>
                    <td><span class="difficulty-badge">${r.difficulty}</span></td>
                    <td><button class="delete-btn" onclick="removeRoutine(${userId}, ${index})"><i class="fas fa-trash"></i></button></td>
                </tr>
            `;
        });
    });

    tbody.innerHTML = rows || '<tr><td colspan="5" style="text-align:center; color: var(--gray-light);">Sin rutinas asignadas</td></tr>';
}

function handleAssignRoutine(e) {
    e.preventDefault();
    const userId = document.getElementById('assign-user').value;
    const routineType = document.getElementById('assign-routine-type').value;
    const day = document.getElementById('assign-day').value;
    const difficulty = document.getElementById('assign-difficulty').value;

    if (!state.routines[userId]) {
        state.routines[userId] = [];
    }

    state.routines[userId].push({ type: routineType, day, difficulty });
    saveState();
    e.target.reset();
    renderAssignedTable();
    showToast('Rutina asignada exitosamente');
}

function removeRoutine(userId, index) {
    if (confirm('Eliminar esta rutina?')) {
        state.routines[userId].splice(index, 1);
        if (state.routines[userId].length === 0) delete state.routines[userId];
        saveState();
        renderAssignedTable();
        showToast('Rutina eliminada');
    }
}

function renderAttendanceTable() {
    const today = formatDate(new Date());
    const todayCheckins = state.checkins.filter(c => c.date === today);

    const tbody = document.getElementById('attendance-table-body');
    tbody.innerHTML = todayCheckins.map(c => {
        const user = state.users.find(u => u.id === c.userId);
        if (!user) return '';
        return `
            <tr>
                <td>${user.name}</td>
                <td>${c.entry}</td>
                <td>${c.exit || '--:--'}</td>
                <td>${c.duration || 'En curso...'}</td>
                <td><span class="status-badge ${c.exit ? 'active' : 'in-gym'}">${c.exit ? 'Completado' : 'En el gym'}</span></td>
            </tr>
        `;
    }).join('') || '<tr><td colspan="5" style="text-align:center; color: var(--gray-light);">Sin registros hoy</td></tr>';

    const inGym = todayCheckins.filter(c => !c.exit).length;
    document.getElementById('people-now').textContent = inGym;

    const completed = todayCheckins.filter(c => c.duration);
    if (completed.length > 0) {
        const totalMins = completed.reduce((sum, c) => {
            const parts = c.duration.match(/(\d+)h?\s*(\d+)?/);
            if (parts) return sum + (parseInt(parts[1]) * 60) + (parseInt(parts[2] || 0));
            return sum;
        }, 0);
        document.getElementById('avg-time-today').textContent = Math.round(totalMins / completed.length) + ' min';
    }
}

function renderRewardsHistory() {
    const tbody = document.getElementById('rewards-history-body');
    tbody.innerHTML = state.rewardsHistory.map(r => {
        const user = state.users.find(u => u.id === r.userId);
        return `
            <tr>
                <td>${user ? user.name : 'N/A'}</td>
                <td>${r.rewardName}</td>
                <td>${r.reason}</td>
                <td>${formatDateDisplay(r.date)}</td>
            </tr>
        `;
    }).join('') || '<tr><td colspan="4" style="text-align:center; color: var(--gray-light);">Sin recompensas otorgadas</td></tr>';
}

function handleGiveReward(e) {
    e.preventDefault();
    const userId = parseInt(document.getElementById('reward-user').value);
    const rewardType = document.getElementById('reward-type').value;
    const reason = document.getElementById('reward-reason').value || 'Sin motivo especificado';

    const reward = REWARDS_CATALOG.find(r => r.id === rewardType);
    if (!reward) return;

    const user = state.users.find(u => u.id === userId);
    if (!user) return;

    if (rewardType === 'puntos-50') user.points += 50;
    else if (rewardType === 'puntos-100') user.points += 100;

    state.rewardsHistory.push({
        userId,
        rewardName: reward.name,
        reason,
        date: formatDate(new Date()),
    });

    saveState();
    e.target.reset();
    renderRewardsHistory();
    showToast(`Recompensa "${reward.name}" otorgada a ${user.name}`);
}

function populateUserSelects() {
    const userOptions = state.users.map(u => `<option value="${u.id}">${u.name}</option>`).join('');
    const defaultOption = '<option value="">Seleccionar usuario...</option>';

    ['assign-user', 'reward-user'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = defaultOption + userOptions;
    });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    showPage('landing');
});
