/**
 * AV INDIA — Team Directory Layout Rendering Engine
 * Handles explicit database sync routines, dynamic styles compilation & WhatsApp view layout adapters.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const PAGE_STYLES = `
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; }
    body { background-color: #f8fafc; color: #1a202c; min-height: 100vh; display: flex; flex-direction: column; }
    
    /* Navbar Elements */
    .navbar { background-color: #ffffff; padding: 18px 20px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 20px rgba(0,0,0,0.02); border-bottom: 1px solid #edf2f7; position: relative; }
    .navbar h1 { font-size: 14px; font-weight: 300; background: linear-gradient(135deg, #039CFF, #8505FF); margin-left: 100px; padding: 5px 10px; border-radius: 20px; color: #fff; }
    .navbar img { position: absolute; left: 0; width: 150px; margin-left: -10px; }
    .nav-links-container { display: flex; align-items: center; gap: 15px; z-index: 10; }
    .text-link { color: #4a5568; text-decoration: none; font-weight: 600; font-size: 14px; transition: color 0.2s; }
    .text-link:hover { color: #8505FF; }
    .btn-logout { background-color: #fff5f5; color: #e53e3e; border: 1px solid #fed7d7; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 13px; }

    /* Container & Layout */
    .container { flex: 1; padding: 20px; max-width: 1100px; margin: 0 auto; width: 100%; }
    .header-row { margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; }
    .count-badge { background: rgba(0, 201, 24, 0.08); color: #00C918; font-weight: 700; padding: 6px 14px; border-radius: 20px; font-size: 13px; display: inline-block; }

    /* Modern Custom Marquee Scroller Component */
    .marquee-container { background: #ffffff; border: 1px solid #edf2f7; padding: 10px 16px; border-radius: 12px; margin-bottom: 25px; display: flex; align-items: center; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.01); }
    .marquee-label { background: linear-gradient(135deg, #039CFF, #8505FF); color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; margin-right: 15px; white-space: nowrap; letter-spacing: 0.5px; }
    .marquee-wrapper { width: 100%; overflow: hidden; display: flex; }
    .marquee-text { display: inline-block; white-space: nowrap; font-size: 13px; font-weight: 600; color: #4a5568; padding-left: 100%; animation: marqueeRun 25s linear infinite; }
    .marquee-text:hover { animation-play-state: paused; cursor: pointer; }
    .marquee-text span { margin-right: 50px; color: #718096; }
    .marquee-text strong { color: #8505FF; }

    @keyframes marqueeRun {
        0% { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-100%, 0, 0); }
    }

    /* Clickable Team Grid Cards */
    .team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .member-card { background: white; padding: 25px; border-radius: 16px; border: 1px solid #edf2f7; text-align: center; position: relative; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.01); text-decoration: none; display: block; color: inherit; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
    .member-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(133, 5, 255, 0.04); border-color: rgba(133, 5, 255, 0.15); }
    .member-card::before { content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 4px; background: linear-gradient(to right, #039CFF, #8505FF); }
    
    /* Profile Image / Avatars */
    .avatar-container { width: 65px; height: 65px; margin: 0 auto 15px auto; position: relative; }
    .avatar { width: 100%; height: 100%; border-radius: 50%; background: linear-gradient(135deg, rgba(3, 156, 255, 0.1), rgba(133, 5, 255, 0.1)); color: #8505FF; font-weight: 700; font-size: 22px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
    
    .m-name { font-weight: 700; font-size: 18px; color: #2d3748; margin-bottom: 4px; }
    .m-role { display: inline-block; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px; }
    .role-executive { background: linear-gradient(135deg, rgba(3, 156, 255, 0.1), rgba(133, 5, 255, 0.1)); color: #8505FF; }
    .role-staff { background-color: #f7fafc; color: #4a5568; }
    
    .m-meta { font-size: 13px; color: #718096; margin-bottom: 6px; text-align: left; display: flex; justify-content: space-between; }
    .m-meta span { font-weight: 600; color: #4a5568; word-break: break-all; }
    .loading { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #f8fafc; display: flex; justify-content: center; align-items: center; z-index: 999; font-size: 16px; font-weight: 700; color: #718096; }

    /* 📱 WHATSAPP MOBILE LIST STYLES */
    @media (max-width: 600px) {
        body { background-color: #ffffff; }
        .navbar { padding: 14px 16px; }
        .container { padding: 0; }
        .header-row { padding: 16px 16px 5px 16px; margin-bottom: 0; display: flex; justify-content: flex-end; }
        .marquee-container { margin: 5px 16px 15px 16px; padding: 8px 12px; border-radius: 8px; }
        .team-grid { display: flex; flex-direction: column; gap: 0; }
        
        .member-card { display: flex; align-items: center; text-align: left; background: #ffffff; padding: 12px 16px; border: none; border-radius: 0; box-shadow: none; border-bottom: 1px solid #f2f4f7; transform: none !important; }
        .member-card:active { background-color: #f7fafc; }
        .member-card::before { display: none; }
        
        .avatar-container { width: 52px; height: 52px; min-width: 52px; min-height: 52px; margin: 0 14px 0 0; }
        .avatar { font-size: 18px; }
        .card-body-wrap { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .wa-row-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; }
        .m-name { font-size: 16px; margin-bottom: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 70%; }
        .m-role { font-size: 10px; padding: 2px 8px; margin-bottom: 0; border-radius: 4px; }
        .wa-row-bottom { display: flex; flex-direction: column; gap: 1px; }
        .m-meta { font-size: 13px; color: #667781; margin-bottom: 0; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .m-meta span { font-weight: 400; color: #667781; }
        .m-meta::before { content: attr(data-label) ": "; font-weight: 500; color: #3b4a54; }
    }
`;

export function renderTeamPage() {
    // 1. Inject Style Sheets Into Document Head
    const styleTag = document.createElement("style");
    styleTag.textContent = PAGE_STYLES;
    document.head.appendChild(styleTag);

    // 2. Build Core Interface Document Shell Structure
    document.body.innerHTML += `
        <nav class="navbar">
            <h1>TEAM</h1>
            <img src="https://i.ibb.co/23F9LkLK/20260624-123227.png">
            <div class="nav-links-container">
                <a href="dashboard.html" class="text-link">Dashboard</a>
                <button id="logout-btn" class="btn-logout">Logout</button>
            </div>
        </nav>

        <div class="container">
            <div class="header-row">
                <div id="count-badge" class="count-badge">0 Active Members</div>
            </div>

            <div class="marquee-container">
                <div class="marquee-label">Updates</div>
                <div class="marquee-wrapper">
                    <div class="marquee-text" id="marquee-ticker">
                        <strong>Notice:</strong> Welcome to the new Av India automated workspace directory interface. <span>•</span> 
                        <strong>System status:</strong> Database structures synced cleanly <span>•</span> 
                        <strong>Feature Update:</strong> Select any team card element below to evaluate target metrics inside individual dashboard paths.
                    </div>
                </div>
            </div>

            <div class="team-grid" id="directory-grid"></div>
        </div>
    `;

    // 3. Setup Routing Actions & Database Observers
    const localUID = localStorage.getItem("session_uid");
    
    if (!localUID) {
        window.location.href = "auth/login.html";
        return;
    }

    const firebaseConfig = { databaseURL: "https://github-website1-default-rtdb.firebaseio.com" };
    const database = getDatabase(initializeApp(firebaseConfig));
    const directoryGrid = document.getElementById('directory-grid');
    const countBadge = document.getElementById('count-badge');

    get(ref(database, 'avindia/auth/members')).then((snapshot) => {
        if (snapshot.exists()) {
            let entriesHTML = "";
            let counter = 0;
            
            snapshot.forEach((childSnapshot) => {
                const profile = childSnapshot.val();
                counter++;
                const initialLetter = profile.name ? profile.name.charAt(0).toUpperCase() : 'M';
                const isExec = ["Owner/Founder", "CEO", "Managing Director", "Admin", "Manager"].includes(profile.role);
                
                // Fallback rendering check evaluating user custom avatars
                const avatarContent = (profile.profilePic && profile.profilePic.trim() !== "") 
                    ? `<img src="${profile.profilePic}" alt="${profile.name}" onerror="this.parentElement.innerHTML='${initialLetter}'">`
                    : initialLetter;
                
                // Construct dynamic target view route wrappers
                entriesHTML += `
                    <a href="./view?uid=${profile.uid}" class="member-card">
                        <div class="avatar-container">
                            <div class="avatar">${avatarContent}</div>
                        </div>
                        <div class="card-body-wrap">
                            <div class="wa-row-top">
                                <div class="m-name">${profile.name}</div>
                                <div class="m-role ${isExec ? 'role-executive' : 'role-staff'}">${profile.role}</div>
                            </div>
                            <div class="wa-row-bottom">
                                <div class="m-meta" data-label="UID"><span>${profile.uid}</span></div>
                                <div class="m-meta" data-label="Email"><span>${profile.email}</span></div>
                            </div>
                        </div>
                    </a>
                `;
            });
            
            if (directoryGrid) directoryGrid.innerHTML = entriesHTML;
            if (countBadge) countBadge.textContent = `${counter} Active Members`;
        }
        
        const loader = document.getElementById('loading-screen');
        if (loader) loader.style.display = 'none';

    }).catch((err) => {
        console.error("Directory component sync initialization failed:", err);
        const loader = document.getElementById('loading-screen');
        if (loader) loader.style.display = 'none';
    });

    // 4. Bind Logout Button Click Event Listener
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = "auth/login.html";
        });
    }
}
