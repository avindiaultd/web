/**
 * Avindia Portal - Universal UI & Content Bundle Component
 * Electric Accent Palette: #039CFF -> #8505FF
 */

const CSS_STYLES = `
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; }
    body { background: radial-gradient(circle at 10% 20%, rgba(3, 156, 255, 0.03) 0%, rgba(133, 5, 255, 0.03) 90%), #fafbfe; color: #1a202c; min-height: 100vh; display: flex; flex-direction: column; }
    
    .noscript-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #1a202c; z-index: 10000; display: flex; justify-content: center; align-items: center; padding: 20px; text-align: center; }
    .noscript-box { background: #ffffff; padding: 45px; border-radius: 24px; max-width: 450px; border-top: 4px solid #8505FF; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    .noscript-box h3 { font-size: 24px; color: #2d3748; margin-bottom: 12px; font-weight: 800; }
    .noscript-box p { color: #718096; font-size: 15px; line-height: 1.6; }

    .login-wrapper { display: flex; justify-content: center; align-items: center; height: 100vh; width: 100%; }
    .login-container { background: #ffffff; padding: 45px 40px; border-radius: 24px; box-shadow: 0 20px 40px rgba(133, 5, 255, 0.06); width: 100%; max-width: 420px; border: 1px solid rgba(133, 5, 255, 0.08); }
    .logo-space { width: 60px; height: 60px; margin: 0 auto 20px auto; border-radius: 16px; background: linear-gradient(135deg, #039CFF, #8505FF); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px; box-shadow: 0 8px 16px rgba(133, 5, 255, 0.2); }
    h2 { margin-bottom: 30px; text-align: center; font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #039CFF, #8505FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    
    .form-group { margin-bottom: 22px; }
    label { display: block; margin-bottom: 8px; color: #4a5568; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
    input, select { width: 100%; padding: 14px 16px; border: 2px solid #e2e8f0; border-radius: 12px; font-size: 16px; outline: none; color: #1a202c; transition: all 0.25s ease; background: #f8fafc; }
    input:focus, select:focus { border-color: #039CFF; background: #ffffff; box-shadow: 0 0 0 4px rgba(3, 156, 255, 0.1); }
    
    .btn-submit { width: 100%; padding: 14px; background: linear-gradient(135deg, #039CFF, #8505FF); border: none; border-radius: 12px; color: white; font-size: 16px; font-weight: 700; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 8px 20px rgba(133, 5, 255, 0.2); margin-top: 10px; }
    .btn-submit:hover { opacity: 0.95; transform: translateY(-1px); box-shadow: 0 12px 26px rgba(133, 5, 255, 0.3); }
    
    .navbar { background-color: #ffffff; padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 20px rgba(0,0,0,0.02); border-bottom: 1px solid #edf2f7; }
    .navbar h1 { font-size: 22px; font-weight: 800; background: linear-gradient(135deg, #039CFF, #8505FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .nav-links-container { display: flex; align-items: center; gap: 25px; }
    .text-link { color: #4a5568; text-decoration: none; font-weight: 600; font-size: 15px; transition: color 0.2s; }
    .text-link:hover { color: #8505FF; }
    .btn-logout { background-color: #fff5f5; color: #e53e3e; border: 1px solid #fed7d7; padding: 10px 20px; border-radius: 10px; cursor: pointer; font-weight: 600; }
    .btn-logout:hover { background-color: #e53e3e; color: white; }

    .container { flex: 1; padding: 40px; max-width: 1100px; margin: 0 auto; width: 100%; }
    .welcome-card { background: linear-gradient(135deg, #039CFF, #8505FF); color: white; padding: 45px; border-radius: 24px; margin-bottom: 35px; box-shadow: 0 12px 30px rgba(133, 5, 255, 0.18); position: relative; overflow: hidden; }
    .welcome-card h3 { 
    margin-bottom: 12px; 
    font-size: 34px; 
    font-weight: 800; 
    letter-spacing: -0.5px; 
    color: #ffffff !important; 
    -webkit-text-fill-color: #ffffff !important; 
}
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 25px; margin-bottom: 35px; }
    .card { background: white; padding: 25px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.01); position: relative; overflow: hidden; border: 1px solid #edf2f7; }
    .card::before { content: ""; position: absolute; left: 0; top: 0; height: 100%; width: 5px; background: linear-gradient(to bottom, #039CFF, #8505FF); }
    .card h3 { font-size: 12px; color: #718096; text-transform: uppercase; margin-bottom: 8px; font-weight: 700; }
    .card p { font-size: 20px; font-weight: 700; color: #2d3748; }
    
    .actions-panel { background: white; padding: 35px; border-radius: 20px; display: none; border: 1px solid #edf2f7; }
    .btn-action { display: inline-block; background: linear-gradient(135deg, #039CFF, #8505FF); color: white; text-decoration: none; padding: 14px 28px; border-radius: 12px; font-weight: 700; box-shadow: 0 6px 16px rgba(3, 156, 255, 0.25); }

    .team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; }
    .member-card { background: white; padding: 30px; border-radius: 20px; border: 1px solid #edf2f7; text-align: center; position: relative; overflow: hidden; }
    .member-card::before { content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 4px; background: linear-gradient(to right, #039CFF, #8505FF); }
    .avatar { width: 70px; height: 70px; margin: 0 auto 18px auto; border-radius: 50%; background: linear-gradient(135deg, rgba(3, 156, 255, 0.1), rgba(133, 5, 255, 0.1)); color: #8505FF; font-weight: 700; font-size: 22px; display: flex; align-items: center; justify-content: center; }
    .m-role { display: inline-block; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 15px; text-transform: uppercase; }
    .role-executive { background: linear-gradient(135deg, rgba(3, 156, 255, 0.1), rgba(133, 5, 255, 0.1)); color: #8505FF; }
    .role-staff { background-color: #f7fafc; color: #4a5568; }
    .m-meta { font-size: 13px; color: #718096; margin-bottom: 6px; text-align: left; display: flex; justify-content: space-between; }
    .m-meta span { font-weight: 600; color: #4a5568; word-break: break-all; }

    .error-box, .message-box { padding: 14px; border-radius: 12px; margin-bottom: 20px; font-size: 14px; display: none; text-align: center; font-weight: 500; }
    .error { background-color: #fff5f5; color: #c53030; border: 1px solid #fed7d7; }
    .success { background-color: #f0fff4; color: #38a169; border: 1px solid #c6f6d5; }
    .loading { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #f8fafc; display: flex; justify-content: center; align-items: center; z-index: 999; font-size: 18px; font-weight: 700; color: #718096; }
`;

function initShell(noscriptMessage) {
    const styleEl = document.createElement('style');
    styleEl.textContent = CSS_STYLES;
    document.head.appendChild(styleEl);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
        <div class="noscript-overlay">
            <div class="noscript-box">
                <h3>Security Clearance Required</h3>
                <p>${noscriptMessage}</p>
            </div>
        </div>
    `;
    document.body.appendChild(noscript);
}

export function renderLogin() {
    initShell("JavaScript execution verification failed. Access denied to portal node algorithms.");
    document.body.innerHTML += `
        <div class="login-wrapper">
            <div class="login-container">
                <div class="logo-space">A</div>
                <h2>Team Login</h2>
                <div id="error-box" class="error-box error"></div>
                <form id="login-form">
                    <div class="form-group">
                        <label>Member UID</label>
                        <input type="text" id="uid" required maxlength="10" minlength="10" placeholder="Enter 10-digit UID">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" id="password" required placeholder="••••••••">
                    </div>
                    <button type="submit" class="btn-submit">Sign In</button>
                </form>
            </div>
        </div>
    `;
}

export function renderDashboard() {
    initShell("Environment violation. Dashboard tree modules masked safely.");
    document.body.innerHTML += `
        <div id="loading-screen" class="loading">Authenticating Session Securely...</div>
        <nav class="navbar">
            <h1>Avindia Portal</h1>
            <div class="nav-links-container">
                <a href="index.html" class="text-link">View Team Directory</a>
                <button id="logout-btn" class="btn-logout">Logout</button>
            </div>
        </nav>
        <div class="container">
            <div class="welcome-card">
                <h3>Hi, <span id="member-name">User</span>!</h3>
                <p>Welcome to your personal corporate command overview panel.</p>
            </div>
            <div class="grid">
                <div class="card"><h3>Your Custom UID</h3><p id="profile-uid">--------</p></div>
                <div class="card"><h3>Registered Email</h3><p id="profile-email">--------</p></div>
                <div class="card"><h3>System Role</h3><p id="profile-role">--------</p></div>
            </div>
            <div id="admin-panel" class="actions-panel">
                <h3>Administrative Panel Access Granted</h3>
                <p style="color:#718096; margin-bottom:25px; font-size:15px;">You have database access authorization permissions to configure new node profiles securely.</p>
                <a href="auth/add-member.html" class="btn-action">+ Register New Team Member</a>
            </div>
        </div>
    `;
}

export function renderAddMember() {
    initShell("Database compilation error. Write streams denied when scripts are missing.");
    document.body.innerHTML += `
        <div id="loading-screen" class="loading">Validating Local Credentials...</div>
        <div class="login-wrapper">
            <div class="login-container" id="main-content" style="display:none; max-width:500px;">
                <h2>Register Profile</h2>
                <div id="message-box" class="message-box"></div>
                <form id="member-form">
                    <div class="form-group"><label>Custom 10-Digit UID</label><input type="text" id="uid" required maxlength="10" minlength="10" pattern="[A-Za-z0-9]{10}" placeholder="e.g., 191U822W82"></div>
                    <div class="form-group"><label>Full Name</label><input type="text" id="name" required placeholder="John Doe"></div>
                    <div class="form-group"><label>Email Identifier</label><input type="email" id="email" required placeholder="team@company.com"></div>
                    <div class="form-group"><label>System Access Password</label><input type="password" id="password" required minlength="6" placeholder="••••••••"></div>
                    <div class="form-group">
                        <label>Assign Position Title</label>
                        <select id="role">
                            <option value="Team Member">Team Member</option>
                            <option value="Manager">Manager</option>
                            <option value="Managing Director">Managing Director</option>
                            <option value="CEO">CEO</option>
                            <option value="Owner/Founder">Owner/Founder</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" class="btn-submit">Provision Member Record</button>
                </form>
                <a href="../dashboard.html" class="text-link" style="display:block; text-align:center; margin-top:20px;">← Cancel and Return</a>
            </div>
        </div>
    `;
}

export function renderTeam() {
    initShell("Ecosystem membership data directory paths remain fully encrypted.");
    document.body.innerHTML += `
        <div id="loading-screen" class="loading">Loading System Directory Ecosystem...</div>
        <nav class="navbar">
            <h1>Avindia Portal</h1>
            <div class="nav-links-container">
                <a href="dashboard.html" class="text-link">Dashboard</a>
                <button id="logout-btn" class="btn-logout">Logout</button>
            </div>
        </nav>
        <div class="container">
            <div style="margin-bottom:35px; display:flex; justify-content:space-between; align-items:center;">
                <h2 style="background:none; -webkit-text-fill-color:initial; color:#2d3748; text-align:left; margin:0;">Team Directory Tree</h2>
                <div id="count-badge" style="background:rgba(133,5,255,0.08); color:#8505FF; font-weight:700; padding:6px 14px; border-radius:20px; font-size:14px;">0 Active Members</div>
            </div>
            <div class="team-grid" id="directory-grid"></div>
        </div>
    `;
}

export async function hashPassword(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
