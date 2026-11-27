        const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
        const toast = m => { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(t._); t._ = setTimeout(() => t.classList.remove('on'), 2200) };
        const modal = h => { $('#mb').innerHTML = h; $('#ov').classList.add('on') }; const close = () => $('#ov').classList.remove('on');
        $('#ov').onclick = e => { if (e.target.id == 'ov') close() }; document.onkeydown = e => e.key == 'Escape' && close();
        const tabs = [['home', '◐', 'Home'], ['market', '◫', 'Market'], ['notices', '▦', 'Notices'], ['clubs', '◈', 'Clubs'], ['team', '♡', 'Teams'], ['lost', '◎', 'Lost']];
        const nav = $('#nav'); tabs.forEach(([id, ic, l]) => { const b = document.createElement('button'); b.dataset.id = id; b.innerHTML = `<span>${ic}</span><span>${l}</span>`; b.setAttribute('aria-label', l); b.onclick = () => go(id); nav.append(b) });
        function go(id) { $$('.view').forEach(v => v.classList.toggle('on', v.id == id)); $$('nav button').forEach(b => b.classList.toggle('on', b.dataset.id == id)); scrollTo({ top: 0 }); requestAnimationFrame(moveInd) }
        function moveInd() { const b = $('nav button.on'); if (!b) return; const i = $('#ind'); i.style.width = b.offsetWidth + 'px'; i.style.transform = `translateX(${b.offsetLeft}px)` }
        addEventListener('resize', moveInd);

        /* DATA */
        const items = [
            { n: 'Mini Drafter', e: '📐', p: 350, c: 'Like new', b: 'Mechanical', y: 1, s: 'Aarav · Mech 2nd yr' },
            { n: 'Lab Coat (M)', e: '🥼', p: 150, c: 'Good', b: 'CSE', y: 1, s: 'Riya · CSE 2nd yr' },
            { n: 'Engg. Graphics Set', e: '📏', p: 220, c: 'Good', b: 'ECE', y: 1, s: 'Kabir · ECE 3rd yr' },
            { n: 'Arduino Uno Kit', e: '🔌', p: 600, c: 'Like new', b: 'ECE', y: 2, s: 'Meera · ECE 3rd yr' },
            { n: 'DSA Cormen Book', e: '📘', p: 400, c: 'Fair', b: 'CSE', y: 2, s: 'Nikhil · CSE 4th yr' },
            { n: 'Scientific Calc 991EX', e: '🧮', p: 700, c: 'Like new', b: 'IT', y: 1, s: 'Sana · IT 2nd yr' },
            { n: 'Cycle (Hero 21-gear)', e: '🚲', p: 3800, c: 'Good', b: 'IT', y: 3, s: 'Dev · IT 4th yr' },
            { n: 'Thermodynamics Notes', e: '🔥', p: 80, c: 'Good', b: 'Mechanical', y: 3, s: 'Ishan · Mech 4th yr' }];
        const notices = [
            { t: 'Mid-Sem Dates', c: 'Exam', d: 'Mid-semester exams run 21–28 Oct. Datesheet released by the Examination Cell. Admit cards are available from department offices from 18 Oct.', a: 'datesheet_midsem.pdf' },
            { t: 'HackOrbit 24h', c: 'Hackathon', d: 'Inter-college 24-hour hackathon in the Main Auditorium. Teams of 2–4. Registration closes 15 Oct. Prizes worth ₹1,00,000.', a: 'hackorbit_brief.pdf' },
            { t: 'Cricket Cup', c: 'Sports', d: 'Inter-year knockout cricket starts 12 Oct at the main ground. Submit squads of 12 to the Sports Office.', a: 'fixtures.pdf' },
            { t: 'Fresh Fest', c: 'Cultural', d: 'Cultural night for first-years on 19 Oct. Auditions for dance, music and stand-up are open at the Student Activity Centre.', a: 'fest_rules.pdf' },
            { t: 'Fee Deadline', c: 'Exam', d: 'Last date to pay semester fees without fine is 14 Oct. A late fee of ₹500 applies afterwards.', a: 'fee_circular.pdf' },
            { t: 'Code Sprint', c: 'Hackathon', d: 'Weekly competitive coding sprint every Saturday at 4 PM in Lab 3. Open to all branches.', a: 'sprint_rules.pdf' },
            { t: '5K Marathon', c: 'Sports', d: 'Campus 5K run on 25 Oct, 6:30 AM at Gate 1. T-shirts for all finishers.', a: 'route_map.pdf' },
            { t: 'Lab Viva', c: 'Exam', d: 'Practical viva for 2nd-year ECE and IT begins 16 Oct. Bring your lab file and ID card.', a: 'viva_slots.pdf' },
            { t: 'Open Mic', c: 'Cultural', d: 'Open mic night at the Amphitheatre on 15 Oct, 7 PM. Sign up with the Cultural Council.', a: 'lineup.pdf' },
            { t: 'Football Trials', c: 'Sports', d: 'College football team trials on 13 Oct, 5 PM at the north turf. Bring your own boots.', a: 'trial_form.pdf' },
            { t: 'Dev Night', c: 'Hackathon', d: 'Overnight build session by GDSC with mentors from alumni. Pizza and Wi-Fi provided.', a: 'devnight.pdf' },
            { t: 'Theatre Call', c: 'Cultural', d: 'Dramatics Society needs actors and backstage crew for the winter play. Auditions 11 Oct.', a: 'audition_sides.pdf' }];
        const events = [
            { d: 10, m: 'Oct', n: 'Robotics Club Auditions', o: 'Robotics Society', t: 'Audition · 5 PM, Lab 2' },
            { d: 12, m: 'Oct', n: 'Design Jam: Poster Sprint', o: 'Design Collective', t: 'Workshop · 3 PM, Studio' },
            { d: 15, m: 'Oct', n: 'Open Mic Night', o: 'Cultural Council', t: 'Event · 7 PM, Amphitheatre' },
            { d: 15, m: 'Oct', n: 'Web Dev Bootcamp', o: 'GDSC', t: 'Workshop · 11 AM, Lab 5' },
            { d: 18, m: 'Oct', n: 'PR Team Interviews', o: 'Fest Committee', t: 'Interview · 4 PM, Block B' }];
        const roles = ['Designer · Design Collective', 'Web Dev · GDSC', 'PR Lead · Fest Committee', 'Video Editor · Media Cell'];
        let found = [
            { n: 'Black Wallet', e: '👛', loc: 'Library, 2nd-floor reading desk', q: 'What is the colour of the card in the first slot?', a: 'blue', by: 'Found by Pooja' },
            { n: 'AirPods Case', e: '🎧', loc: 'Canteen, table near the window', q: 'What sticker is on the back of the case?', a: 'cat', by: 'Found by Arjun' },
            { n: 'ID Card (CSE)', e: '🪪', loc: 'Block C, ground-floor corridor', q: 'What is the last 3 digits of the roll number?', a: '472', by: 'Found by Lakshmi' }];
        let lostList = [{ n: 'Casio Watch', w: 'Sports Complex', t: 'Today' }];
        const reminded = new Set(), state = { yr: 0, br: 'All', view: 'filter', day: null };

        /* HOME */
        function home() {
            const tk = ['New drafter listed in CSE', 'Robotics club posted an audition', 'HackOrbit registrations open', 'Wallet found near Library', 'Mid-sem datesheet released'];
            $('#home').innerHTML = `<div class="row" style="justify-content:space-between;margin-bottom:8px"><div><p class="sub" style="margin:0 0 4px">Good evening</p><h1 style="font-size:34px">Hey, Shiva Nagar</h1></div><div class="av">SN</div></div>
<div class="stats"><div class="card stat"><b>12</b><div>New listings</div></div><div class="card stat"><b>4</b><div>Open notices</div></div><div class="card stat"><b>2</b><div>Reminders set</div></div></div>
<div class="card" style="padding:8px 26px"><div class="tick"><div>${[...tk, ...tk].map(x => `<span>${x}</span>`).join('')}</div></div></div>
<h3 class="d" style="margin:44px 0 0;font-size:18px;color:var(--mu);font-weight:500">Jump in</h3><div class="quick">${tabs.slice(1).map(([id, ic, l]) => `<button onclick="go('${id}')"><span class="d" style="font-size:20px">${ic}</span><div style="margin-top:16px">${{ market: 'Marketplace', notices: 'Notice Board', clubs: 'Clubs & Societies', team: 'Team Finder', lost: 'Lost & Found' }[id]}</div><small>${{ market: '8 items nearby', notices: '7 new', clubs: '5 upcoming events', team: 'Find a teammate', lost: '3 found items' }[id]}</small></button>`).join('')}</div>`
        }

        /* MARKET */
        function market() {
            const brs = ['All', 'CSE', 'ECE', 'IT', 'Mechanical'];
            let list = items.filter(i => state.view == 'all1' ? i.y == 1 : (!state.yr || i.y == state.yr) && (state.br == 'All' || i.b == state.br));
            $('#market').innerHTML = `<h2>Marketplace</h2><p class="sub">Buy and sell with students on your campus.</p>
<div class="seg"><button class="${state.view != 'all1' ? 'on' : ''}" onclick="state.view='filter';market()">Filter</button><button class="${state.view == 'all1' ? 'on' : ''}" onclick="state.view='all1';market()">1st-year essentials</button></div>
${state.view == 'all1' ? '<p class="sub">Drafters, lab coats and graphics sets for first-years.</p>' : `<div class="row" style="margin-bottom:8px">${[0, 1, 2, 3, 4].map(y => `<button class="chip ${state.yr == y ? 'on' : ''}" onclick="state.yr=${y};market()">${y ? ['', '1st', '2nd', '3rd', '4th'][y] + ' Year' : 'All years'}</button>`).join('')}</div><div class="row">${brs.map(b => `<button class="chip ${state.br == b ? 'on' : ''}" onclick="state.br='${b}';market()">${b}</button>`).join('')}</div>`}
<div class="grid">${list.map((i, k) => `<div class="card item"><div class="ph">${i.e}</div><div class="bd"><div class="row" style="justify-content:space-between"><b>${i.n}</b><span class="price">₹${i.p}</span></div><div class="row" style="margin:8px 0"><span class="tag">${i.c}</span><span class="tag">${i.b}</span><span class="tag">Yr ${i.y}</span></div><p style="color:var(--mu);font-size:13px;margin-bottom:12px">${i.s}</p><button class="btn" style="width:100%" onclick="chat(${items.indexOf(i)})">Chat with seller</button></div></div>`).join('') || '<p class="sub">No items match. Try another year or branch.</p>'}</div>`
        }
        function chat(i) { const it = items[i]; modal(`<h3 style="font-size:22px">${it.e} ${it.n}</h3><p class="sub">Chat with ${it.s.split(' · ')[0]}</p><div class="card" style="padding:12px;background:var(--in);margin-bottom:12px"><p style="color:var(--mu)">Hi! Is the ${it.n.toLowerCase()} still available?</p></div><input id="msg" placeholder="Write a message"><div class="row"><button class="btn" onclick="close();toast('Message sent')">Send</button><button class="btn g" onclick="close()">Cancel</button></div>`) }

        /* NOTICES */
        let order = null;
        const shuf = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0;[a[i], a[j]] = [a[j], a[i]] } return a };
        function nb(re) {
            if (!order || re) { let bg = 0; order = shuf(notices.map((n, i) => i)).map(i => { const r = Math.random(); let c = r < .4 ? '' : r < .65 ? 'w' : r < .85 ? 't' : (bg++ < 2 ? 'big' : 'w'); if (Math.random() < .2) c += ' inv'; return [i, c] }) }
            $('#notices').innerHTML = `<div class="row" style="justify-content:space-between;align-items:flex-start"><div><h2>Notice board</h2><p class="sub">Tap a card for the full notice.</p></div><button class="btn g" onclick="nb(1)">Shuffle</button></div><div class="bento">${order.map(([i, c]) => `<button class="nt ${c}" onclick="notice(${i})"><span class="tag">${notices[i].c}</span><h3 class="d">${notices[i].t}</h3></button>`).join('')}</div>`
        }
        function notice(i) { const n = notices[i]; modal(`<span class="tag">${n.c}</span><h2 style="margin-top:12px">${n.t}</h2><p style="color:var(--mu);margin:8px 0 18px">${n.d}</p><div class="card row" style="padding:12px;justify-content:space-between"><span>📎 ${n.a}</span><button class="btn g" onclick="toast('Download started')">Download</button></div><button class="btn" style="margin-top:16px" onclick="close()">Close</button>`) }

        /* CLUBS */
        function clubs() {
            const days = [10, 11, 12, 13, 14, 15, 16], ns = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
            const ev = events.filter(e => state.day == null || e.d == state.day);
            $('#clubs').innerHTML = `<h2>Clubs & societies</h2><p class="sub">Events, auditions and open roles — October.</p>
<div class="cal">${days.map((d, i) => `<button class="${state.day == d ? 'on' : ''}" onclick="state.day=state.day==${d}?null:${d};clubs()">${ns[i]}<b>${d}</b>${events.some(e => e.d == d) ? '<i></i>' : ''}</button>`).join('')}</div>
${ev.map(e => { const k = e.n; return `<div class="card ev"><div class="row" style="flex-wrap:nowrap;gap:14px"><div class="dt"><b>${e.d}</b><small>${e.m}</small></div><div><b>${e.n}</b><div style="color:var(--mu);font-size:13px">${e.o} — ${e.t}</div></div></div><button class="btn g ${reminded.has(k) ? 'on' : ''}" onclick="rem('${k}')">${reminded.has(k) ? 'Reminder set' : 'Remind me'}</button></div>` }).join('') || '<p class="sub">No events that day. Pick another date.</p>'}
<h3 style="margin:24px 0 10px;font-size:20px">Open roles</h3><div class="row">${roles.map(r => `<button class="chip" onclick="toast('Application started: ${r.split(' · ')[0]}')">${r}</button>`).join('')}</div>`
        }
        function rem(k) { reminded.has(k) ? reminded.delete(k) : (reminded.add(k), toast('We will remind you')); clubs() }

        /* TEAM */
        const peers = [
            { n: 'Ananya Rao', b: 'CSE', y: '3rd Year', f: ['Web Dev', 'UI Engineering', 'Product'], l: 'ananya.dev' },
            { n: 'Vihaan Shah', b: 'ECE', y: '2nd Year', f: ['Embedded', 'Arduino', 'PCB Design'], l: 'vihaan.io' },
            { n: 'Tanya Bose', b: 'IT', y: '4th Year', f: ['UI/UX', 'Flutter', 'Branding'], l: 'tanyabose.design' },
            { n: 'Rohan Iyer', b: 'CSE', y: '2nd Year', f: ['Machine Learning', 'PyTorch', 'APIs'], l: 'rohan.ai' },
            { n: 'Sara Khan', b: 'Mechanical', y: '3rd Year', f: ['CAD', 'IoT', 'MATLAB'], l: 'sara.build' }];
        function portrait(i) {
            const c = document.createElement('canvas'); c.width = 480; c.height = 600; const x = c.getContext('2d');
            const L = [62, 46, 74, 54, 68][i % 5], g = x.createLinearGradient(0, 0, 480, 600); g.addColorStop(0, `hsl(0 0% ${L}%)`); g.addColorStop(1, `hsl(0 0% ${L - 40}%)`); x.fillStyle = g; x.fillRect(0, 0, 480, 600);
            const e = (cx, cy, rx, ry, f) => { x.fillStyle = f; x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.fill() };
            const sk = `hsl(0 0% ${80 - i * 4}%)`, hr = `hsl(0 0% ${9 + i * 5}%)`;
            if (i % 2 == 0) e(240, 310, 120, 160, hr);
            e(240, 690, 235, 215, `hsl(0 0% ${24 + i * 3}%)`); x.fillStyle = sk; x.fillRect(205, 330, 70, 90);
            e(240, 265, 90, 112, sk); e(240, 190, 96, 66, hr);
            e(205, 278, 8, 5, '#111'); e(275, 278, 8, 5, '#111'); x.strokeStyle = '#222'; x.lineWidth = 4; x.beginPath(); x.arc(240, 310, 22, .2, 2.9); x.stroke();
            const v = x.createRadialGradient(240, 300, 140, 240, 300, 430); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.6)'); x.fillStyle = v; x.fillRect(0, 0, 480, 600);
            return c.toDataURL('image/jpeg', .9)
        }
        const photo = i => peers[i].img || (peers[i].img = portrait(i));
        let pi = 0, matches = [];
        const ico = { x: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>', h: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg>' };
        const pcard = (p, i, nx) => `<div class="card sw ${nx ? 'nx' : ''}" ${nx ? '' : 'id="sw"'}><img src="${photo(i)}" alt="Photo of ${p.n}"><span class="st r">TEAM UP</span><span class="st l">SKIP</span><div class="info"><div><h2 class="d">${p.n}</h2><div class="meta">${p.y}, ${p.b}</div></div><div class="row">${p.f.map(k => `<span class="tag" style="color:var(--tx)">${k}</span>`).join('')}</div><div class="meta">Portfolio: ${p.l}</div></div></div>`;
        function team() {
            const p = peers[pi], n = peers[pi + 1];
            $('#team').innerHTML = `<h2>Team finder</h2><p class="sub">Drag the card or use the buttons. ${matches.length} matches so far.</p>
${p ? `<div class="deck">${n ? pcard(n, pi + 1, 1) : ''}${pcard(p, pi, 0)}</div><div class="acts"><div><button aria-label="Skip" onclick="swipe(-1)">${ico.x}</button>Skip</div><div><button class="y" aria-label="Team up" onclick="swipe(1)">${ico.h}</button>Team up</div></div>` : `<div class="card" style="padding:32px;text-align:center;max-width:360px;margin:auto"><h3>You're all caught up</h3><p class="sub">Matched with ${matches.map(m => m.n).join(', ') || 'nobody yet'}.</p><button class="btn" onclick="pi=0;matches=[];team()">Start over</button></div>`}`; bindSwipe()
        }
        function swipe(d) { const el = $('#sw'); if (!el) return; el.style.transform = `translateX(${d * 420}px) rotate(${d * 18}deg)`; el.style.opacity = 0; const p = peers[pi], i = pi; setTimeout(() => { pi++; if (d > 0) { matches.push(p); team(); modal(`<div style="text-align:center"><img src="${photo(i)}" alt="" style="width:120px;height:150px;border-radius:24px;object-fit:cover;margin-bottom:12px"><h2>It's a match</h2><p class="sub">You and ${p.n} want to team up. Say hi and plan your squad.</p><button class="btn" onclick="close()">Send hello</button></div>`) } else team() }, 300) }
        function bindSwipe() {
            const el = $('#sw'); if (!el) return; let x0 = null, dx = 0;
            el.onpointerdown = e => { x0 = e.clientX; el.style.transition = 'none'; el.setPointerCapture(e.pointerId) };
            el.onpointermove = e => { if (x0 == null) return; dx = e.clientX - x0; el.style.transform = `translateX(${dx}px) rotate(${dx / 15}deg)`; $('.st.r', el).style.opacity = Math.max(0, dx / 100); $('.st.l', el).style.opacity = Math.max(0, -dx / 100) };
            el.onpointerup = () => { if (x0 == null) return; x0 = null; el.style.transition = ''; if (Math.abs(dx) > 100) { const d = dx > 0 ? 1 : -1; dx = 0; swipe(d) } else { dx = 0; el.style.transform = ''; $$('.st', el).forEach(k => k.style.opacity = 0) } }
        }

        /* LOST */
        let ltab = 'found';
        function lost() {
            setTimeout(prev); $('#lost').innerHTML = `<h2>Lost & found</h2><p class="sub">Exact locations stay hidden until you prove the item is yours.</p>
<div class="seg"><button class="${ltab == 'lost' ? 'on' : ''}" onclick="ltab='lost';lost()">Report lost</button><button class="${ltab == 'found' ? 'on' : ''}" onclick="ltab='found';lost()">Found item registry</button></div>
${ltab == 'lost' ? `<div class="card" style="padding:20px;max-width:480px"><label>Item name</label><input id="ln" placeholder="e.g. Blue water bottle"><label>Last seen near</label><input id="lw" placeholder="e.g. Block A canteen"><label>Photo of the item</label><div class="pbox" id="lp"></div><div class="row" style="margin-bottom:16px"><button class="btn g" onclick="$('#cam').click()">Take photo</button><button class="btn g" onclick="$('#gal').click()">Choose from gallery</button></div><input type="file" id="cam" accept="image/*" capture="environment" hidden onchange="pickPhoto(this)"><input type="file" id="gal" accept="image/*" hidden onchange="pickPhoto(this)"><button class="btn" onclick="addLost()">Post report</button></div>
${lostList.map(l => `<div class="card ev" style="margin-top:10px"><div class="row" style="flex-wrap:nowrap;gap:14px">${l.ph ? `<img src="${l.ph}" alt="Photo of ${l.n}" style="width:56px;height:56px;border-radius:12px;object-fit:cover;flex:none">` : ''}<div><b>${l.n}</b><div style="color:var(--mu);font-size:13px">Last seen: ${l.w} — ${l.t}</div></div></div><span class="tag">Searching</span></div>`).join('')}`
                    : `<div class="grid">${found.map((f, i) => `<div class="card item"><div class="ph">${f.e}</div><div class="bd"><b>${f.n}</b><p style="color:var(--mu);font-size:13px">${f.by}</p><p style="margin:10px 0;font-size:13px">Found at: <span class="blur">${f.loc}</span></p>${f.ok ? `<p style="font-size:13px">✓ Verified. Collect from: <b>${f.loc}</b></p>` : `<button class="btn" style="width:100%" onclick="claim(${i})">This is mine</button>`}</div></div>`).join('')}</div>`}`
        }
        let lostPhoto = null;
        function pickPhoto(inp) { const f = inp.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { const im = new Image(); im.onload = () => { const k = Math.min(1, 800 / Math.max(im.width, im.height)), c = document.createElement('canvas'); c.width = im.width * k; c.height = im.height * k; c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); lostPhoto = c.toDataURL('image/jpeg', .8); prev(); toast('Photo added') }; im.onerror = () => toast('Could not read that image. Try another photo.'); im.src = r.result }; r.readAsDataURL(f); inp.value = '' }
        function prev() { const p = $('#lp'); if (!p) return; p.innerHTML = lostPhoto ? `<img src="${lostPhoto}" alt="Item photo preview"><button class="btn g" onclick="lostPhoto=null;prev()">Remove</button>` : '<span>No photo yet. A clear photo helps people recognise your item.</span>' }
        function addLost() { const n = $('#ln').value.trim(), w = $('#lw').value.trim(); if (!n || !w) return toast('Add the item name and location'); lostList.unshift({ n, w, t: 'Just now', ph: lostPhoto }); lostPhoto = null; toast('Report posted'); lost() }
        function claim(i) { const f = found[i]; modal(`<h3 style="font-size:22px">Verify ownership</h3><p class="sub">Answer the finder's question to see the exact location.</p><div class="card" style="padding:14px;background:var(--in);margin-bottom:12px">${f.q}</div><input id="ans" placeholder="Your answer"><p id="err" style="color:var(--mu);font-size:13px;min-height:20px"></p><div class="row"><button class="btn" onclick="check(${i})">Verify</button><button class="btn g" onclick="close()">Cancel</button></div>`) }
        function check(i) { const v = $('#ans').value.trim().toLowerCase(); if (v == found[i].a) { found[i].ok = 1; close(); toast('Verified — location unlocked'); lost() } else { $('#err').textContent = 'That answer does not match. Check your item and try again.' } }

        function setTheme(t) { document.documentElement.dataset.theme = t; try { localStorage.setItem('co-theme', t) } catch (e) { } }
        let t0 = null; try { t0 = localStorage.getItem('co-theme') } catch (e) { }
        setTheme(t0 || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
        $('#theme').onclick = () => setTheme(document.documentElement.dataset.theme == 'light' ? 'dark' : 'light');
        home(); market(); nb(); clubs(); team(); lost(); go('home');