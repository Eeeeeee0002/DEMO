// ----- Hero: generate micro-dots on patch disc -----
(function renderHeroDots(){
  const host = document.getElementById("dots");
  if (!host) return;
  // 17 concentric rings inside radius ~ 140
  const cx = 260, cy = 310, R = 140;
  const svgNS = "http://www.w3.org/2000/svg";
  const nodes = [];
  for (let r = 14; r <= R; r += 14) {
    const count = Math.max(8, Math.round((2 * Math.PI * r) / 14));
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      const d = document.createElementNS(svgNS, "circle");
      d.setAttribute("cx", x.toFixed(1));
      d.setAttribute("cy", y.toFixed(1));
      d.setAttribute("r", "1.6");
      nodes.push(d);
    }
  }
  nodes.forEach(n => host.appendChild(n));
})();

// ----- Science: draw needles piercing skin layers -----
(function renderSciNeedles(){
  const host = document.getElementById("sneedles");
  if (!host) return;
  const svgNS = "http://www.w3.org/2000/svg";
  for (let i = 0; i < 24; i++) {
    const x = 100 + i * 13;
    const y1 = 140;            // tip
    const y2 = 210 + (i % 3) * 10; // base inside dermis
    const poly = document.createElementNS(svgNS, "polygon");
    poly.setAttribute("points", `${x-3},${y1} ${x+3},${y1} ${x},${y2}`);
    poly.setAttribute("fill", "#14332A");
    poly.setAttribute("opacity", "0.9");
    host.appendChild(poly);
    // absorption dot
    const c = document.createElementNS(svgNS, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y2 + 6);
    c.setAttribute("r", "2.5");
    c.setAttribute("fill", "#C8A25C");
    c.setAttribute("opacity", "0.85");
    host.appendChild(c);
  }
})();

// ----- Before/after: denser dot clouds -----
(function renderBAAfter(){
  const svgNS = "http://www.w3.org/2000/svg";
  const seeds = [[17, 0.88], [41, 0.85]];
  ["denseDots", "denseDots2"].forEach((id, idx) => {
    const host = document.getElementById(id);
    if (!host) return;
    const [n, op] = seeds[idx];
    let s = id.length; // deterministic pseudo-random
    const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    for (let i = 0; i < 110; i++) {
      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", (20 + rnd() * 260).toFixed(1));
      c.setAttribute("cy", (20 + rnd() * 160).toFixed(1));
      c.setAttribute("r", (0.7 + rnd() * 0.6).toFixed(2));
      c.setAttribute("opacity", op);
      host.appendChild(c);
    }
  });
})();

// ----- Phone mask -----
(function phoneMask(){
  const input = document.querySelector('input[type="tel"]');
  if (!input) return;
  const format = (v) => {
    let d = v.replace(/\D/g, "");
    if (d.startsWith("8")) d = "7" + d.slice(1);
    if (!d.startsWith("7")) d = "7" + d;
    d = d.slice(0, 11);
    const p = ["+7"];
    if (d.length > 1) p.push(" (", d.slice(1, 4));
    if (d.length >= 4) p.push(") ", d.slice(4, 7));
    if (d.length >= 7) p.push("-", d.slice(7, 9));
    if (d.length >= 9) p.push("-", d.slice(9, 11));
    return p.join("");
  };
  input.addEventListener("input", () => { input.value = format(input.value); });
  input.addEventListener("focus", () => { if (!input.value) input.value = "+7 ("; });
});

// ----- Plan buttons set select -----
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-plan]");
  if (!a) return;
  const sel = document.querySelector('select[name="plan"]');
  if (!sel) return;
  const plan = a.getAttribute("data-plan");
  const opt = Array.from(sel.options).find(o => o.textContent.trim().startsWith(plan));
  if (opt) sel.value = opt.value;
});

// ----- Form submit -----
(function formHandler(){
  const form = document.getElementById("orderForm");
  if (!form) return;
  const success = form.querySelector(".form__success");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.replace(/\D/g, "");
    const agree = form.agree.checked;
    if (name.length < 2) { form.name.focus(); return; }
    if (phone.length < 11) { form.phone.focus(); return; }
    if (!agree) { form.agree.focus(); return; }
    // Persist to localStorage as a demo queue
    try {
      const q = JSON.parse(localStorage.getItem("follica_orders") || "[]");
      q.push({ name, phone, plan: form.plan.value, ts: new Date().toISOString() });
      localStorage.setItem("follica_orders", JSON.stringify(q));
    } catch (_) { /* ignore */ }
    form.querySelectorAll("input, select, button").forEach(el => el.setAttribute("disabled", "true"));
    if (success) success.hidden = false;
  });
})();

// ----- Reveal-on-scroll -----
(function reveal(){
  const targets = document.querySelectorAll(".head, .pcard, .ing, .plan, .ba, .rev__grid blockquote, .steps li, .badge, .science__grid > div");
  targets.forEach(t => t.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) {
    targets.forEach(t => t.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => io.observe(t));
})();
