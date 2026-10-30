// shared header/footer + small helpers for the website pages (no tracking, no network calls)
(function () {
  var here = (location.pathname.split("/").pop() || "index.html");
  var L = [["index.html", "Home"], ["play.html", "Play"], ["launch.html", "Game modes"], ["lessons.html", "Weekly lessons"], ["parents.html", "For parents"]];
  var h = document.createElement("header"); h.className = "site";
  h.innerHTML = '<div class="wrap"><a class="brand" href="./">⭐ <span>Starlight Arena</span></a><button class="menu" aria-label="Menu" aria-expanded="false">☰</button><nav class="links">' +
    L.map(function (l) { return '<a href="' + (l[0] === "index.html" ? "./" : l[0]) + '"' + (l[0] === here ? ' aria-current="page"' : "") + ">" + l[1] + "</a>"; }).join("") + "</nav></div>";
  document.body.prepend(h);
  var b = h.querySelector(".menu"), n = h.querySelector("nav"); b.onclick = function () { var o = n.classList.toggle("open"); b.setAttribute("aria-expanded", o); };
  var f = document.createElement("footer");
  f.innerHTML = '<div class="wrap">Starlight Arena is a free practice game made for one family. No accounts, no ads, no tracking: progress stays in this browser. ' +
    'All questions are original AI-made practice, not for graded work. <a href="parents.html">Parent info</a></div>';
  document.body.appendChild(f);
  var a = document.createElement("div"); a.className = "ailabel"; a.setAttribute("role", "note"); a.textContent = "✨ AI-made practice, not for graded work"; document.body.appendChild(a);
})();
// load each archived week file in turn (each one sets window.WEEK), collecting them
window.loadWeeks = function (done) {
  var W = (window.WEEKS || []).slice(), out = [];
  (function next() { if (!W.length) return done(out); var w = W.shift(), s = document.createElement("script"); s.src = w.file;
    s.onload = function () { out.push({ meta: w, week: window.WEEK }); next(); }; s.onerror = function () { next(); }; document.head.appendChild(s); })();
};
window.esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
