document.getElementById('custom-alert').style.display = 'flex';
document.addEventListener('DOMContentLoaded', () => {
    const STAGES = [
        { id: 0, name: "Stage 1: Fondations", requiredSkills: ["HTML5", "CSS3", "JS Base"] },
        { id: 1, name: "Stage 2: Intermédiaire", requiredSkills: ["Flexbox", "LocalStorage", "API Fetch"] },
        { id: 2, name: "Stage 3: Expert", requiredSkills: ["React", "Node.js", "MongoDB"] }
    ];

    const CATALOGUE = [
        { id: 1, name: "HTML5", price: 100, desc: "Sémantique Web." },
        { id: 2, name: "CSS3", price: 150, desc: "Design & Animations." },
        { id: 3, name: "JS Base", price: 200, desc: "Logique & DOM." },
        { id: 4, name: "Flexbox", price: 250, desc: "Layouts Modernes." },
        { id: 5, name: "LocalStorage", price: 300, desc: "Persistance locale." },
        { id: 6, name: "API Fetch", price: 400, desc: "Données distantes." },
        { id: 7, name: "React", price: 800, desc: "UI Components." },
        { id: 8, name: "Node.js", price: 750, desc: "Server JavaScript." },
        { id: 9, name: "MongoDB", price: 600, desc: "NoSQL Database." }
    ];

    let state = JSON.parse(localStorage.getItem('skillShop_final_V2')) || {
        credits: 1000, cart: [], acquired: [], theme: 'light', completedStages: []
    };

    const save = () => localStorage.setItem('skillShop_final_V2', JSON.stringify(state));

    const updateUI = () => {
        document.getElementById('credit-balance').innerText = Math.floor(state.credits);
        document.getElementById('cart-count').innerText = state.cart.length;
        document.getElementById('acquired-count').innerText = state.acquired.length;

        // CATALOGUE
        const list = document.getElementById('skills-list');
        list.innerHTML = '';
        CATALOGUE.filter(s => !state.acquired.includes(s.name)).forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.draggable = true;
            card.innerHTML = `
                <div style="flex:1"><strong>${skill.name}</strong><br><small>${skill.desc}</small><br>
                <span style="color:var(--primary); font-weight:800">${skill.price} C</span></div>
                <div class="action-buttons">
                    <button class="btn-add-cart" onclick="addToCart(${skill.id})">🛒</button>
                    <button class="btn-direct-buy" onclick="buyDirect(${skill.id})">ACHETER</button>
                </div>`;
            card.ondragstart = (e) => e.dataTransfer.setData('text', skill.id);
            list.appendChild(card);
        });

        // PROGRESSION & CELEBRATION
        document.getElementById('acquisition-diagram-container').innerHTML = STAGES.map(stage => {
            const has = stage.requiredSkills.filter(s => state.acquired.includes(s)).length;
            const pc = (has / stage.requiredSkills.length) * 100;
            if(pc === 100 && !state.completedStages.includes(stage.id)) {
                state.completedStages.push(stage.id);
                document.getElementById('stage-celebration').style.display = 'flex';
            }
            return `<div><small>${stage.name}</small><div class="progress-bar"><div class="progress-fill" style="width:${pc}%"></div></div></div>`;
        }).join('');

        // DESIGN DU PANIER
        const currentTotal = state.cart.reduce((s,i) => s + i.price, 0);
        document.getElementById('cart-list').innerHTML = state.cart.map((item, idx) => `
            <div class="cart-card">
                <div><strong>${item.name}</strong><br><small>${item.price} C</small></div>
                <button class="btn-remove" onclick="removeFromCart(${idx})">✖</button>
            </div>`).join('');
        
        document.getElementById('subtotal-val').innerText = currentTotal;
        document.getElementById('cart-total').innerText = currentTotal;

        // INVENTAIRE
        document.getElementById('acquired-skills-list').innerHTML = state.acquired.map(name => {
            const s = CATALOGUE.find(sk => sk.name === name);
            const ref = s ? Math.floor(s.price/2) : 0;
            return `<div class="main-border" style="margin-bottom:10px">✅ ${name}<br>
                    <button onclick="sellItem('${name}', ${ref})" style="color:red; background:none; border:none; cursor:pointer; font-size:0.8rem">Revendre (${ref}C)</button></div>`;
        }).join('');
        save();
    };

    // --- FONCTION VALIDER ACHAT ---
    document.getElementById('validate-purchase-btn').onclick = () => {
        const total = state.cart.reduce((s,i) => s + i.price, 0);
        if (state.cart.length === 0) return;

        if (state.credits >= total) {
            state.credits -= total;
            state.cart.forEach(item => state.acquired.push(item.name));
            state.cart = []; // On vide le panier après achat
            updateUI();
            alert("Achat groupé réussi ! Vos compétences sont dans l'inventaire.");
            document.getElementById('cart-panel').classList.remove('visible');
        } else {
            document.getElementById('custom-alert').style.display = 'flex';
        }
    };

    window.addToCart = (id) => {
        const item = CATALOGUE.find(s => s.id === id);
        if(!state.cart.find(c => c.id === id)) state.cart.push(item);
        updateUI();
    };

    window.buyDirect = (id) => {
        const s = CATALOGUE.find(sk => sk.id === id);
        if(state.credits >= s.price) {
            state.credits -= s.price;
            state.acquired.push(s.name);
            updateUI();
        } else document.getElementById('custom-alert').style.display = 'flex';
    };

    window.sellItem = (n, p) => { if(confirm(`Revendre ${n} ?`)) { state.credits += p; state.acquired = state.acquired.filter(s => s !== n); updateUI(); } };
    window.removeFromCart = (i) => { state.cart.splice(i,1); updateUI(); };

    // SHORTCUT C
    document.addEventListener('keydown', (e) => { if(e.key.toLowerCase()==='c'){ state.cart=[]; updateUI(); } });

    // PRODUCTION
    document.getElementById('production-form').onsubmit = (e) => {
        e.preventDefault();
        const btn = document.getElementById('btn-produce');
        const work = document.getElementById('worker-zone');
        btn.disabled = true; work.classList.remove('hidden');
        setTimeout(() => {
            state.credits += parseInt(document.getElementById('time-allocated').value) * 20;
            btn.disabled = false; work.classList.add('hidden');
            updateUI();
        }, 3000);
    };

    // UI CONTROL
    const pan = (id, s) => document.getElementById(id).classList.toggle('visible', s);
    document.getElementById('help-btn').onclick = () => pan('help-panel', true);
    document.getElementById('inventory-icon').onclick = () => pan('inventory-panel', true);
    document.getElementById('cart-icon').onclick = () => pan('cart-panel', true);
    document.querySelectorAll('.close-drawer-x, #close-guide-action').forEach(b => b.onclick = () => 
        document.querySelectorAll('.side-drawer').forEach(d => d.classList.remove('visible'))
    );
    document.getElementById('close-alert-btn').onclick = () => document.getElementById('custom-alert').style.display = 'none';

    document.getElementById('mode-toggle-btn').onclick = () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', state.theme);
        updateUI();
    };

    // DRAG & DROP
    const cI = document.getElementById('cart-icon');
    cI.ondragover = (e) => e.preventDefault();
    cI.ondrop = (e) => addToCart(parseInt(e.dataTransfer.getData('text')));

    updateUI();
});