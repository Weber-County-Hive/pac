/* Hive library standard: call-number block at the bottom of every page, page tools
   (call number, jump menu, copy link, share) and a Top button.
   Add a page to "pages" and every page's list and next/previous update.
   Reads the one shared shelf list in the Hive library (hive-shelves.js),
   so a call number from any Hive repo works in this page's search. */
var HBX = {
  "prefix": "PC",
  "repoName": "PAC docket",
  "pages": [
    {
      "callNumber": "PC 000.01",
      "slug": "index",
      "name": "PAC docket: every case file"
    },
    {
      "callNumber": "PC 100.01",
      "slug": "central-utah-gop-house-pac",
      "name": "Central Utah GOP House PAC: Two Rosters, One Address"
    },
    {
      "callNumber": "PC 100.02",
      "slug": "checks-and-balances-pac",
      "name": "Checks & Balances PAC: Three Primary Challenges, One Cause"
    },
    {
      "callNumber": "PC 100.03",
      "slug": "cmv-pac",
      "name": "CMV PAC: Count My Vote's Signature-Gathering Spending"
    },
    {
      "callNumber": "PC 100.04",
      "slug": "uinpac",
      "name": "UINPAC: The Democratic-Aligned Counterpart"
    },
    {
      "callNumber": "PC 100.05",
      "slug": "chris-mcconnehey-hd38",
      "name": "Chris McConnehey (HD-38): A Fuller Story in His Own Reports"
    },
    {
      "callNumber": "PC 100.06",
      "slug": "house-speaker-leadership-pac",
      "name": "House Speaker Leadership PAC: One Signature, Six Figures"
    },
    {
      "callNumber": "PC 100.07",
      "slug": "uhrec-pac",
      "name": "UHREC: $4.29 Million, One Signature Authority"
    },
    {
      "callNumber": "PC 100.08",
      "slug": "h3-pac",
      "name": "H3 PAC: Dissolved, But Not Before Funding the Attack Ads"
    },
    {
      "callNumber": "PC 100.09",
      "slug": "nupac",
      "name": "NUPAC: The Fourth PAC, the Same Treasurer"
    },
    {
      "callNumber": "PC 100.10",
      "slug": "lincoln-hill-pac-case",
      "name": "Lincoln Hill PAC: Dissolved in 2023, $627,000 Since"
    },
    {
      "callNumber": "PC 100.11",
      "slug": "lincoln-hill-partners-pac-case",
      "name": "Lincoln Hill Partners PAC: +496% the Year It Dissolved"
    },
    {
      "callNumber": "PC 100.12",
      "slug": "lincoln-hill-men-behind",
      "name": "The Men Behind Lincoln Hill"
    },
    {
      "callNumber": "PC 100.13",
      "slug": "education-first-utah",
      "name": "Education First Utah: Same Executives, Two Names"
    },
    {
      "callNumber": "PC 100.14",
      "slug": "our-schools-now",
      "name": "Our Schools Now: The Tax-Increase Campaign"
    },
    {
      "callNumber": "PC 100.15",
      "slug": "weber-hive-doers-network",
      "name": "Doers Network: The Endorsement List"
    },
    {
      "callNumber": "PC 100.16",
      "slug": "adams-leadership-pac",
      "name": "Adams Leadership PAC: $1.22 Million Out"
    },
    {
      "callNumber": "PC 100.17",
      "slug": "utah-republican-senate-campaign-committee",
      "name": "Utah Republican Senate Campaign Committee: $3.46 Million Out"
    },
    {
      "callNumber": "PC 100.18",
      "slug": "who-decides-part-1-campaign-money",
      "name": "Who Decides, Part 1: Campaign Money and the Caucus PACs"
    }
  ],
  "shelves": {
    "000": "Start here",
    "100": "Case files (PAC-01 and up)"
  },
  "toolsAfter": [
    "header.masthead",
    "div.band",
    "body > header"
  ],
  "headings": "body:not(:has(nav.jump,.jump)) main h2, body:not(:has(nav.jump,.jump)) .wrap > h2",
  "searchBox": "#caseSearch"
};
(function () {
  var C = HBX, P = C.prefix;
  var LIST_URL = "https://weber-county-hive.github.io/-weber-county-hive-index/hive-shelves.js";
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var list = C.pages.slice().sort(function (a, b) { return a.callNumber.localeCompare(b.callNumber, undefined, { numeric: true }); });
  var file = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";
  var i = list.findIndex(function (p) { return p.slug === file; }); if (i < 0) i = 0;
  var me = list[i], prev = list[i - 1], next = list[i + 1];
  var shelfOf = function (p) { return p.callNumber.split(" ")[1].split(".")[0]; };
  function ready(fn) {
    if (window.HIVE_SHELVES) return fn();
    var s = document.createElement("script"); s.src = LIST_URL + "?v=1"; s.onload = fn; s.onerror = fn; document.head.appendChild(s);
  }
  function localSearch(v) {
    var box = document.querySelector(C.searchBox || "#__none");
    if (box) { box.value = v; box.dispatchEvent(new Event("input", { bubbles: true })); box.scrollIntoView({ behavior: "smooth", block: "center" }); return "Showing matches in the list above."; }
    if (window.find && window.find(v, false, false, true)) { return "Found <b>" + esc(v) + "</b> on this page; it's highlighted above."; }
    var hit = list.filter(function (p) { return p.name.toLowerCase().indexOf(String(v).toLowerCase()) > -1; })[0];
    if (hit) { location.href = hit.slug + ".html"; return ""; }
    return "Nothing on this page matches <b>" + esc(v) + "</b>. Try another word.";
  }
  var box = document.getElementById("hbx-shelf");
  if (box) {
    var link = function (p, dir) {
      if (!p) return dir === "prev"
        ? '<a class="hbx-nav-btn" href="https://weber-county-hive.github.io/-weber-county-hive-index/index.html">← <b>HL 000.00</b> The Hive library (every repo)</a>'
        : '<span class="hbx-nav-btn hbx-off">End of shelf →</span>';
      return '<a class="hbx-nav-btn" href="' + p.slug + '.html">' + (dir === "prev" ? "← " : "") + "<b>" + p.callNumber + "</b> " + esc(p.name) + (dir === "next" ? " →" : "") + "</a>";
    };
    var rows = "";
    Object.keys(C.shelves).forEach(function (no) {
      var items = list.filter(function (p) { return shelfOf(p) === no; });
      if (!items.length) return;
      rows += '<li class="hbx-shelf-head">' + P + " " + no + " · " + esc(C.shelves[no]) + "</li>";
      items.forEach(function (p) {
        rows += '<li><a href="' + p.slug + '.html"><span class="hbx-cn">' + p.callNumber + "</span> " + esc(p.name) + (p === me ? " <em>(you are here)</em>" : "") + "</a></li>";
      });
    });
    box.innerHTML =
      '<div class="hbx-cn-big">Call number <b>' + me.callNumber + "</b> · Shelf " + P + " " + shelfOf(me) + " · " + esc(C.shelves[shelfOf(me)]) + "</div>" +
      '<div class="hbx-nav">' + link(prev, "prev") + link(next, "next") + "</div>" +
      '<details class="hbx-list"><summary>See every page on this shelf, by call number</summary><ol>' + rows + "</ol></details>" +
      '<form class="hbx-find" id="hbx-find" role="search"><label for="hbx-q">Look up a call number, name or topic</label>' +
      '<div><input id="hbx-q" type="search" placeholder="e.g. ' + esc(me.callNumber) + ', GV 100.01 or a name"><button type="submit">Search</button></div></form>' +
      '<div class="hbx-search" id="hbx-find-out">Names and topics search this page.</div>';
    ready(function () {
      if (!window.HIVE_SHELVES) return;
      document.getElementById("hbx-find-out").innerHTML = "Names and topics search this page. Call numbers from every shelf work here: " +
        window.HIVE_SHELVES.map(function (s) { return '<a href="' + s.url + '"><b>' + s.prefix + "</b> = " + esc(s.name) + "</a>"; }).join(" · ") + ".";
    });
    var go = function (v) {
      var out = document.getElementById("hbx-find-out");
      var m = String(v).trim().toUpperCase().match(/^([A-Z]{1,5})\s*(\d{3}(?:\.\d{1,2})?)$/);
      if (m && m[1] === P) {
        var hit = list.filter(function (p) { return p.callNumber.indexOf(m[1] + " " + m[2]) === 0; })[0];
        if (hit) { if (hit !== me) location.href = hit.slug + ".html"; else window.scrollTo({ top: 0, behavior: "smooth" }); return; }
        out.innerHTML = "No " + esc(C.repoName) + " page has call number <b>" + esc(m[1] + " " + m[2]) + "</b>."; return;
      }
      if (m) {
        var sh = (window.HIVE_SHELVES || []).filter(function (s) { return s.prefix === m[1]; })[0];
        if (sh) { location.href = sh.url + "?q=" + encodeURIComponent(m[1] + " " + m[2]); return; }
        out.innerHTML = "Call number <b>" + esc(m[1] + " " + m[2]) + "</b>: that shelf doesn't have call numbers yet. Try a name or topic instead."; return;
      }
      var r = localSearch(v); if (r) out.innerHTML = r;
    };
    document.getElementById("hbx-find").addEventListener("submit", function (e) { e.preventDefault(); go(document.getElementById("hbx-q").value); });
    var qp = new URLSearchParams(location.search).get("q");
    if (qp) { document.getElementById("hbx-q").value = qp; ready(function () { go(qp); }); }
  }
  /* Page tools under the page's header */
  var anchor = null; [].concat(C.toolsAfter).some(function (sel) { anchor = document.querySelector(sel); return !!anchor; });
  if (anchor) {
    var heads = [].slice.call(document.querySelectorAll(C.headings || "main h2")).filter(function (h) { return h.textContent.trim(); });
    var used = {};
    var jl = heads.map(function (h) {
      if (!h.id) {
        var id = "s-" + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
        while (used[id] || document.getElementById(id)) id += "-x";
        h.id = id;
      }
      used[h.id] = 1;
      return '<li><a href="#' + h.id + '">' + esc(h.textContent.trim().replace(/\s+/g, " ")) + "</a></li>";
    }).join("");
    var url = location.href.split("#")[0].split("?")[0];
    var tools = document.createElement("div");
    tools.className = "hbx-tools";
    tools.innerHTML =
      '<a class="hbx-tool hbx-cnchip" href="#hbx-shelf" title="Jump to the call number and search">Call number <b>' + me.callNumber + "</b> ↓</a>" +
      (jl ? '<details class="hbx-jump"><summary>Jump to a section</summary><ol>' + jl + "</ol></details>" : "") +
      '<button type="button" class="hbx-tool" id="hbx-copy">Copy link</button>' +
      '<a class="hbx-tool" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '">Share on Facebook</a>';
    anchor.parentNode.insertBefore(tools, anchor.nextSibling);
    var cb = document.getElementById("hbx-copy");
    cb.addEventListener("click", function () {
      var done = function () { cb.textContent = "Link copied ✓"; setTimeout(function () { cb.textContent = "Copy link"; }, 2500); };
      try { navigator.clipboard.writeText(url).then(done, function () { window.prompt("Copy this link:", url); }); }
      catch (e) { window.prompt("Copy this link:", url); }
    });
    tools.querySelectorAll(".hbx-jump a").forEach(function (a) { a.addEventListener("click", function () { tools.querySelector(".hbx-jump").open = false; }); });
  }
  var top = document.createElement("a");
  top.href = "#"; top.className = "hbx-totop"; top.textContent = "↑ Top"; top.setAttribute("aria-label", "Back to top of page");
  top.addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(top);
  var showTop = function () { top.style.display = window.scrollY > 900 ? "block" : "none"; };
  window.addEventListener("scroll", showTop, { passive: true }); showTop();
})();
