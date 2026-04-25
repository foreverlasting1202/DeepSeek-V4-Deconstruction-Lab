(function () {
  "use strict";

  const DATA = window.DEEPSEEK_V4_TUTORIAL;
  if (!DATA) {
    document.body.innerHTML =
      '<div style="padding:40px;font-family:Inter,sans-serif;color:#f87171;">Failed to load lesson bundle. Run <code>npm run build</code>.</div>';
    return;
  }

  const STORAGE_KEY = "deepseek-v4-lab::v3";
  const SUPPORTED_LANGS = ["en", "zh"];
  const SUPPORTED_THEMES = ["dark", "light"];

  const store = loadStore();
  let lang = SUPPORTED_LANGS.includes(store.lang) ? store.lang : "en";
  let theme = SUPPORTED_THEMES.includes(store.theme) ? store.theme : "dark";
  let currentId = null;

  const interactiveSegments = DATA.segments.filter((s) => s.kind !== "gap");
  const lessons = DATA.lessons;
  const lessonById = Object.fromEntries(lessons.map((l) => [l.id, l]));
  const segmentById = Object.fromEntries(interactiveSegments.map((s) => [s.id, s]));

  currentId =
    (store.lastOpened && segmentById[store.lastOpened] ? store.lastOpened : null) ||
    (lessons[0] && lessons[0].id) ||
    (interactiveSegments[0] && interactiveSegments[0].id);

  const dom = {
    htmlRoot: document.getElementById("html-root"),
    body: document.body,
    sidebarBrand: document.getElementById("brand-title"),
    sidebarTagline: document.getElementById("brand-tagline"),
    stageNav: document.getElementById("stage-nav"),
    progressBar: document.getElementById("progress-bar"),
    progressLabel: document.getElementById("progress-label"),
    resetBtn: document.getElementById("reset-btn"),
    hero: document.getElementById("hero"),
    lesson: document.getElementById("lesson"),
    inspector: document.getElementById("inspector"),
    langToggle: document.getElementById("lang-toggle"),
    langToggleLabel: document.getElementById("lang-toggle-label"),
    themeToggle: document.getElementById("theme-toggle"),
    placeholderTitle: document.getElementById("placeholder-title"),
    placeholderSubtitle: document.getElementById("placeholder-subtitle"),
  };

  /* ──────────────────────── store ──────────────────────── */

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return { drafts: {}, completed: {}, lastOpened: null, mode: {}, lang: "en", theme: "dark" };
  }
  function saveStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {}
  }

  /* ──────────────────────── i18n helpers ──────────────────────── */

  function t(key, fallback) {
    const dict = (DATA.meta.ui_strings || {})[lang] || {};
    const fallbackDict = (DATA.meta.ui_strings || {}).en || {};
    return dict[key] !== undefined ? dict[key] : fallbackDict[key] !== undefined ? fallbackDict[key] : fallback !== undefined ? fallback : key;
  }

  function localized(obj, field) {
    if (!obj) return "";
    if (lang === "en") return obj[field] !== undefined ? obj[field] : "";
    const zh = (obj.i18n && obj.i18n.zh) || {};
    return zh[field] !== undefined ? zh[field] : obj[field] !== undefined ? obj[field] : "";
  }

  function localizedMeta(field) {
    if (lang === "en") return DATA.meta[field] || "";
    const zh = (DATA.meta.i18n && DATA.meta.i18n.zh) || {};
    return zh[field] !== undefined ? zh[field] : DATA.meta[field] || "";
  }

  function localizedList(obj, field) {
    const val = localized(obj, field);
    return Array.isArray(val) && val.length ? val : obj && Array.isArray(obj[field]) ? obj[field] : [];
  }

  function localizedBlank(blank, field) {
    if (lang === "en") return blank[field] !== undefined ? blank[field] : "";
    const zh = (blank.i18n && blank.i18n.zh) || {};
    return zh[field] !== undefined ? zh[field] : blank[field] !== undefined ? blank[field] : "";
  }

  function difficultyLabel(difficulty) {
    return t("difficulty." + difficulty, difficulty);
  }

  function setLang(newLang) {
    if (!SUPPORTED_LANGS.includes(newLang)) return;
    lang = newLang;
    store.lang = newLang;
    saveStore();
    applyLangToChrome();
    renderAll();
  }

  function applyLangToChrome() {
    dom.htmlRoot.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    dom.body.dataset.lang = lang;
    if (dom.langToggleLabel) dom.langToggleLabel.textContent = t("app.lang_toggle");
    if (dom.langToggle) dom.langToggle.setAttribute("title", t("app.lang_label"));
    if (dom.themeToggle) {
      const titleKey = theme === "dark" ? "app.theme_to_light" : "app.theme_to_dark";
      const label = t(titleKey, theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
      dom.themeToggle.setAttribute("title", label);
      dom.themeToggle.setAttribute("aria-label", label);
    }
  }

  /* ──────────────────────── theme ──────────────────────── */

  function setTheme(newTheme) {
    if (!SUPPORTED_THEMES.includes(newTheme)) return;
    theme = newTheme;
    store.theme = newTheme;
    saveStore();
    applyTheme();
    applyLangToChrome();
  }

  function applyTheme() {
    dom.htmlRoot.setAttribute("data-theme", theme);
    if (dom.themeToggle) {
      dom.themeToggle.setAttribute("aria-pressed", String(theme === "light"));
    }
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  /* ──────────────────────── chrome ──────────────────────── */

  function renderChrome() {
    const title = localizedMeta("title");
    dom.sidebarBrand.textContent = title;
    dom.sidebarTagline.textContent = localizedMeta("tagline");
    document.title = title;
    dom.placeholderTitle.textContent = t("app.placeholder_title");
    dom.placeholderSubtitle.textContent = t("app.placeholder_subtitle");
    dom.resetBtn.textContent = t("app.reset_button");
  }

  function renderHero() {
    const label = t("progress.completed_of");
    const renderStatLabel = (l) => {
      if (lang === "zh") {
        const zh = (DATA.meta.i18n && DATA.meta.i18n.zh && DATA.meta.i18n.zh.stats_labels) || {};
        return zh[l] || l;
      }
      return l;
    };
    dom.hero.innerHTML = `
      <div class="hero__eyebrow">${escapeHtml(localizedMeta("tagline"))}</div>
      <h1 class="hero__title">${escapeHtml(localizedMeta("title"))}</h1>
      <p class="hero__subtitle">${renderInline(localizedMeta("subtitle"))}</p>
      <p class="hero__lead">${renderInline(localizedMeta("lead"))}</p>
      ${
        localizedMeta("hero_note")
          ? `<div class="hero__note">${renderInline(localizedMeta("hero_note"))}</div>`
          : ""
      }
      <div class="hero__stats">
        ${(DATA.meta.stats || [])
          .map(
            (stat) =>
              `<div class="hero__stat"><b>${escapeHtml(stat.value)}</b><span>${escapeHtml(renderStatLabel(stat.label))}</span></div>`,
          )
          .join("")}
      </div>
    `;
  }

  function renderSidebar() {
    const byStage = new Map();
    DATA.meta.stages.forEach((stage) => byStage.set(stage.id, []));
    interactiveSegments.forEach((seg) => {
      if (!byStage.has(seg.stage)) byStage.set(seg.stage, []);
      byStage.get(seg.stage).push(seg);
    });

    dom.stageNav.innerHTML = "";
    DATA.meta.stages.forEach((stage) => {
      const segs = byStage.get(stage.id) || [];
      if (!segs.length) return;
      segs.sort((a, b) => {
        const ta = a.source_path;
        const tb = b.source_path;
        if (ta !== tb) return ta.localeCompare(tb);
        return a.line_start - b.line_start;
      });
      const lessonsInStage = segs.filter((s) => s.kind === "lesson").length;
      const block = document.createElement("div");
      block.className = "stage-block";
      block.innerHTML = `
        <div class="stage-block__header">
          <span>${escapeHtml(localized(stage, "title"))}</span>
          <span class="stage-block__count">${lessonsInStage}</span>
        </div>
      `;
      segs.forEach((seg) => {
        const link = document.createElement("div");
        link.className = "lesson-link lesson-link--" + seg.kind;
        link.dataset.id = seg.id;
        const status = lessonStatus(seg.id);
        if (status === "done") link.classList.add("is-done");
        else if (status === "attempted") link.classList.add("is-attempted");
        if (seg.id === currentId) link.classList.add("is-active");

        const num = seg.kind === "lesson"
          ? seg.session.toUpperCase()
          : `§${seg.id.startsWith("i") ? seg.id.slice(0, 3).toUpperCase() : "—"}`;
        const badge = seg.kind === "lesson" ? t("nav.lesson_badge") : t("nav.interlude_badge");
        link.innerHTML = `
          <span class="lesson-link__num">${escapeHtml(num)}</span>
          <span class="lesson-link__title">${escapeHtml(localized(seg, "title"))}</span>
          <span class="lesson-link__badge">${escapeHtml(badge)}</span>
        `;
        link.addEventListener("click", () => setCurrent(seg.id));
        block.appendChild(link);
      });
      dom.stageNav.appendChild(block);
    });
  }

  function lessonStatus(id) {
    if (store.completed[id]) return "done";
    if (store.drafts[id]) return "attempted";
    return "idle";
  }

  function updateProgress() {
    const total = lessons.length;
    const done = lessons.filter((l) => store.completed[l.id]).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    dom.progressBar.style.setProperty("--progress", pct + "%");
    const tpl = t("progress.completed_of");
    dom.progressLabel.textContent = tpl.replace("{done}", done).replace("{total}", total);
  }

  function setCurrent(id) {
    currentId = id;
    store.lastOpened = id;
    saveStore();
    renderMain();
    document.querySelectorAll(".lesson-link").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.id === id);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ──────────────────────── main / lesson / interlude ──────────────────────── */

  function renderMain() {
    const seg = segmentById[currentId];
    if (!seg) {
      dom.lesson.innerHTML = "";
      dom.inspector.innerHTML = "";
      return;
    }
    if (seg.kind === "interlude") {
      renderInterlude(seg);
      renderInspectorForInterlude(seg);
    } else {
      renderLesson(seg);
      renderInspectorForLesson(seg);
    }
  }

  function renderInterlude(seg) {
    dom.lesson.innerHTML = `
      <div class="lesson__head">
        <div class="lesson__eyebrow">${escapeHtml(t("nav.interlude_badge").toUpperCase())} · ${escapeHtml(seg.source_path)}:${seg.line_start}-${seg.line_end}</div>
        <h1 class="lesson__title">${escapeHtml(localized(seg, "title"))}</h1>
        <p class="lesson__tagline">${escapeHtml(localized(seg, "tagline") || "")}</p>
        <div class="chip-row">
          <span class="chip chip--track">${escapeHtml(seg.track || seg.source_path)}</span>
          <span class="chip chip--stage">${escapeHtml(stageTitle(seg.stage))}</span>
          <span class="chip chip--read">${escapeHtml(t("interlude.read_only"))}</span>
        </div>
      </div>
      <div class="summary">${renderInline(localized(seg, "summary"))}</div>

      <section class="panel">
        <header class="panel__head">
          <span class="panel__title">${escapeHtml(t("section.why_it_matters"))}</span>
        </header>
        <div class="panel__body">
          <ul class="bullet-list">
            ${localizedList(seg, "why_it_matters").map((item) => `<li>${renderInline(item)}</li>`).join("")}
          </ul>
        </div>
      </section>

      <section class="panel">
        <div class="tabs" role="tablist">
          <div class="tabs__item is-active" data-mode="reference">${escapeHtml(t("tabs.reference"))}</div>
        </div>
        <div class="panel__body panel__body--flush">
          <div style="padding:10px 18px;border-bottom:1px solid var(--border);color:var(--text-muted);font-family:var(--mono);font-size:12px;">
            ${escapeHtml(seg.source_path)}:${seg.line_start}-${seg.line_end}
          </div>
          <pre class="code-viewer">${highlightCode(seg.reference_code || "")}</pre>
        </div>
      </section>

      ${renderPrevNextNav(seg)}
    `;
  }

  function renderPrevNextNav(seg) {
    const all = interactiveSegments;
    const idx = all.findIndex((s) => s.id === seg.id);
    const prev = idx > 0 ? all[idx - 1] : null;
    const next = idx + 1 < all.length ? all[idx + 1] : null;
    return `
      <nav class="prev-next">
        ${
          prev
            ? `<button class="btn prev-next__btn" data-go="${escapeHtml(prev.id)}"><span>${escapeHtml(t("footer.prev"))}</span><b>${escapeHtml(localized(prev, "title"))}</b></button>`
            : "<span></span>"
        }
        ${
          next
            ? `<button class="btn prev-next__btn prev-next__btn--next" data-go="${escapeHtml(next.id)}"><span>${escapeHtml(t("footer.next"))}</span><b>${escapeHtml(localized(next, "title"))}</b></button>`
            : "<span></span>"
        }
      </nav>
    `;
  }

  function renderLesson(lessonInline) {
    const lesson = lessonById[lessonInline.id];
    if (!lesson) return;
    const draft = store.drafts[lesson.id] || {};
    const blanksDraft = draft.blanks || {};
    const freeDraft = draft.code || "";
    const mode = store.mode[lesson.id] || "puzzle";

    const difficultyClass = "chip--diff-" + (lesson.difficulty || "core").toLowerCase().replace(/[^a-z]/g, "");

    dom.lesson.innerHTML = `
      <div class="lesson__head">
        <div class="lesson__eyebrow">${lesson.session.toUpperCase()} · ${escapeHtml(lesson.source_path)}:${lesson.line_start}-${lesson.line_end}</div>
        <h1 class="lesson__title">${escapeHtml(localized(lesson, "title"))}</h1>
        <p class="lesson__tagline">${escapeHtml(localized(lesson, "tagline"))}</p>
        <div class="chip-row">
          <span class="chip chip--track">${escapeHtml(lesson.track)}</span>
          <span class="chip chip--stage">${escapeHtml(stageTitle(lesson.stage))}</span>
          <span class="chip ${difficultyClass}">${escapeHtml(difficultyLabel(lesson.difficulty))}</span>
          <span class="chip">${escapeHtml(lesson.estimated_time)}</span>
          <span class="chip">${lesson.blank_count} ${escapeHtml(t("nav.blanks_label"))}</span>
          ${(lesson.tags || []).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </div>
      <div class="summary">${renderInline(localized(lesson, "summary"))}</div>

      <section class="panel">
        <header class="panel__head">
          <span class="panel__title">${escapeHtml(t("hero.paper_anchor"))} · ${escapeHtml(lesson.paper_anchor.section)}</span>
          <span class="panel__title" style="color:var(--text-dim)">${escapeHtml(lesson.paper_anchor.figure || "")}</span>
        </header>
        <div class="panel__body">${renderInline(lesson.paper_anchor.summary)}</div>
      </section>

      <section class="panel">
        <header class="panel__head">
          <span class="panel__title">${escapeHtml(t("section.what_you_learn"))}</span>
        </header>
        <div class="panel__body">
          <ul class="bullet-list">
            ${localizedList(lesson, "what_you_learn").map((item) => `<li>${renderInline(item)}</li>`).join("")}
          </ul>
        </div>
      </section>

      <section class="panel">
        <header class="panel__head">
          <span class="panel__title">${escapeHtml(t("section.workshop_steps"))}</span>
          <span class="panel__title" style="color:var(--text-dim)">${lesson.blank_count} ${escapeHtml(t("nav.blanks_label"))}</span>
        </header>
        <div class="panel__body">
          <ol class="bullet-list">
            ${localizedList(lesson, "workshop_steps").map((item) => `<li>${renderInline(item)}</li>`).join("")}
          </ol>
          ${
            localizedList(lesson, "pitfalls").length
              ? `<div style="margin-top:12px">
                   <div class="panel__title" style="margin-bottom:6px">${escapeHtml(t("section.pitfalls"))}</div>
                   <ul class="bullet-list">${localizedList(lesson, "pitfalls").map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>
                 </div>`
              : ""
          }
        </div>
      </section>

      <section class="panel">
        <div class="tabs" role="tablist">
          <div class="tabs__item ${mode === "puzzle" ? "is-active" : ""}" data-mode="puzzle">${escapeHtml(t("tabs.puzzle"))}</div>
          <div class="tabs__item ${mode === "free" ? "is-active" : ""}" data-mode="free">${escapeHtml(t("tabs.free"))}</div>
          <div class="tabs__item ${mode === "solution" ? "is-active" : ""}" data-mode="solution">${escapeHtml(t("tabs.solution"))}</div>
          <div class="tabs__item ${mode === "reference" ? "is-active" : ""}" data-mode="reference">${escapeHtml(t("tabs.reference"))} (${escapeHtml(lesson.source_path)})</div>
        </div>

        <div class="panel__body panel__body--flush" data-pane="puzzle" style="${mode === "puzzle" ? "" : "display:none"}">
          <div class="puzzle">
            <div class="puzzle__toolbar" style="padding:10px 18px;border-bottom:1px solid var(--border);">
              <button class="btn" data-action="fill-starter" type="button">${escapeHtml(t("puzzle.reset"))}</button>
              <button class="btn" data-action="peek-solution" type="button">${escapeHtml(t("tabs.solution"))}</button>
              <span class="puzzle__meta">${lesson.workshop_loc} LOC · ${lesson.blank_count} ${escapeHtml(t("nav.blanks_label"))}</span>
            </div>
            <div id="puzzle-mount" class="puzzle__code"></div>
            <div class="puzzle__hint" style="padding:8px 18px;color:var(--text-muted);font-size:12px;">${escapeHtml(t("puzzle.instructions"))}</div>
          </div>
        </div>

        <div class="panel__body panel__body--flush" data-pane="free" style="${mode === "free" ? "" : "display:none"}">
          <textarea class="editor-area" id="free-editor" spellcheck="false">${escapeHtml(freeDraft || lesson.starter_runnable)}</textarea>
        </div>

        <div class="panel__body panel__body--flush" data-pane="solution" style="${mode === "solution" ? "" : "display:none"}">
          <pre class="code-viewer">${highlightCode(lesson.solution_runnable)}</pre>
        </div>

        <div class="panel__body panel__body--flush" data-pane="reference" style="${mode === "reference" ? "" : "display:none"}">
          <div style="padding:10px 18px;border-bottom:1px solid var(--border);color:var(--text-muted);font-family:var(--mono);font-size:12px;">
            ${escapeHtml(lesson.source_path)}:${lesson.line_start}-${lesson.line_end}
          </div>
          <pre class="code-viewer">${highlightCode(lesson.reference_code)}</pre>
        </div>
      </section>

      ${renderPrevNextNav(lesson)}
    `;

    const mount = document.getElementById("puzzle-mount");
    if (mount) renderPuzzle(mount, lesson, blanksDraft);

    const freeEditor = document.getElementById("free-editor");
    if (freeEditor) {
      freeEditor.addEventListener("input", () => {
        persistDraft(lesson.id, { code: freeEditor.value });
      });
    }

    dom.lesson.querySelectorAll(".tabs__item").forEach((tab) => {
      tab.addEventListener("click", () => {
        store.mode[lesson.id] = tab.dataset.mode;
        saveStore();
        renderMain();
      });
    });

    dom.lesson.querySelector('[data-action="fill-starter"]')?.addEventListener("click", () => {
      const defaults = {};
      lesson.blanks.forEach((b) => (defaults[b.id] = b.starter));
      persistDraft(lesson.id, { blanks: defaults });
      renderMain();
    });
    dom.lesson.querySelector('[data-action="peek-solution"]')?.addEventListener("click", () => {
      if (!confirm(t("app.solution_confirm"))) return;
      const answers = {};
      lesson.blanks.forEach((b) => (answers[b.id] = b.solution));
      persistDraft(lesson.id, { blanks: answers });
      renderMain();
    });
  }

  function attachPrevNextHandlers() {
    dom.lesson.querySelectorAll(".prev-next__btn[data-go]").forEach((btn) => {
      btn.addEventListener("click", () => setCurrent(btn.dataset.go));
    });
  }

  function stageTitle(stageId) {
    const stage = DATA.meta.stages.find((s) => s.id === stageId);
    return stage ? localized(stage, "title") : stageId;
  }

  /* ──────────────────────── puzzle rendering ──────────────────────── */

  function renderPuzzle(mount, lesson, draft) {
    const blankMap = {};
    lesson.blanks.forEach((b) => (blankMap[b.id] = b));
    const parts = splitTemplate(lesson.starter_code);
    mount.innerHTML = "";
    parts.forEach((part) => {
      if (part.type === "text") {
        const span = document.createElement("span");
        span.innerHTML = highlightCode(part.value);
        mount.appendChild(span);
      } else {
        const blank = blankMap[part.id];
        if (!blank) return;
        const wrapper = document.createElement("span");
        wrapper.className = "blank";
        wrapper.dataset.id = blank.id;
        const current = draft && draft[blank.id] !== undefined ? draft[blank.id] : blank.starter;
        const input = document.createElement("input");
        input.type = "text";
        input.className = "blank__input";
        input.spellcheck = false;
        input.autocomplete = "off";
        input.title = localizedBlank(blank, "hint");
        input.value = current;
        input.size = Math.max(3, Math.min(64, current.length || blank.starter.length || 6));
        input.addEventListener("input", () => {
          input.size = Math.max(3, Math.min(64, input.value.length || 4));
          persistBlank(lesson.id, blank.id, input.value);
          wrapper.classList.toggle("is-filled", input.value.trim() === blank.solution.trim());
        });
        const label = document.createElement("span");
        label.className = "blank__label";
        label.textContent = localizedBlank(blank, "label");
        wrapper.appendChild(label);
        wrapper.appendChild(input);
        if (input.value.trim() === blank.solution.trim()) wrapper.classList.add("is-filled");
        mount.appendChild(wrapper);
      }
    });
  }

  function splitTemplate(src) {
    const regex = /__B_([a-zA-Z0-9_]+)__/g;
    const parts = [];
    let last = 0;
    let m;
    while ((m = regex.exec(src)) !== null) {
      if (m.index > last) parts.push({ type: "text", value: src.slice(last, m.index) });
      parts.push({ type: "blank", id: m[1] });
      last = m.index + m[0].length;
    }
    if (last < src.length) parts.push({ type: "text", value: src.slice(last) });
    return parts;
  }

  function persistDraft(lessonId, patch) {
    const draft = store.drafts[lessonId] || {};
    Object.assign(draft, patch);
    store.drafts[lessonId] = draft;
    saveStore();
    const link = document.querySelector(`.lesson-link[data-id="${lessonId}"]`);
    if (link) {
      link.classList.add("is-attempted");
    }
  }

  function persistBlank(lessonId, blankId, value) {
    const draft = store.drafts[lessonId] || {};
    draft.blanks = draft.blanks || {};
    draft.blanks[blankId] = value;
    store.drafts[lessonId] = draft;
    saveStore();
  }

  /* ──────────────────────── inspector ──────────────────────── */

  function renderInspectorForInterlude(seg) {
    dom.inspector.innerHTML = `
      <div>
        <div class="inspector__title">${escapeHtml(t("tabs.narrative"))}</div>
        <div class="inspector__hint">${escapeHtml(t("interlude.hint"))}</div>
        <div class="inspector__hint" style="margin-top:8px;color:var(--text-muted);">
          <code>${escapeHtml(seg.source_path)}:${seg.line_start}-${seg.line_end}</code>
        </div>
      </div>
      <div>
        <div class="inspector__title">${escapeHtml(t("footer.source_atlas"))}</div>
        <div class="inspector__hint">${escapeHtml(t("footer.source_atlas_desc"))}</div>
      </div>
      <div>
        <div class="inspector__title">${escapeHtml(t("inspector.shell_hint"))}</div>
        <div class="npm-row">
          <code>npm install</code>
          <code>npm run dev</code>
          <code>npm run build</code>
          <code>npm test</code>
        </div>
      </div>
    `;
    attachPrevNextHandlers();
  }

  function renderInspectorForLesson(lesson) {
    const mode = store.mode[lesson.id] || "puzzle";
    const runnable = mode === "puzzle" || mode === "free";

    dom.inspector.innerHTML = `
      <div>
        <div class="inspector__title">${escapeHtml(t("inspector.title"))}</div>
        <div class="run-row">
          <button class="btn btn--primary" id="run-btn" ${runnable ? "" : "disabled"}>${escapeHtml(t("puzzle.run_tests"))}</button>
          <button class="btn" id="run-solution" type="button">${escapeHtml(t("puzzle.run_solution"))}</button>
        </div>
        <div class="inspector__hint" style="margin-top:8px;">
          ${escapeHtml(runnable ? t("inspector.description") : t("inspector.switch_to_runnable"))}
        </div>
      </div>
      <div id="status-mount"></div>
      <div id="results-mount" class="results"></div>
      <div>
        <div class="inspector__title">${escapeHtml(t("inspector.stdout"))}</div>
        <pre class="stdout" id="stdout-mount"><span style="color:var(--text-muted)">${escapeHtml(t("inspector.stdout_empty"))}</span></pre>
      </div>
      <div>
        <div class="inspector__title">${escapeHtml(t("inspector.shell_hint"))}</div>
        <div class="npm-row">
          <code>npm install</code>
          <code>npm run dev</code>
          <code>npm run build</code>
          <code>npm test</code>
        </div>
      </div>
    `;

    document.getElementById("run-btn").addEventListener("click", () => runTests(lesson, { useSolution: false }));
    document.getElementById("run-solution").addEventListener("click", () =>
      runTests(lesson, { useSolution: true }),
    );
    attachPrevNextHandlers();
  }

  async function runTests(lesson, { useSolution }) {
    const statusMount = document.getElementById("status-mount");
    const resultsMount = document.getElementById("results-mount");
    const stdoutMount = document.getElementById("stdout-mount");
    statusMount.innerHTML = `<div class="status-card is-running"><div class="status-card__headline"><span class="status-dot status-dot--running"></span>${escapeHtml(t("status.running"))}</div></div>`;
    resultsMount.innerHTML = "";
    stdoutMount.innerHTML = `<span style="color:var(--text-muted)">${escapeHtml(t("app.dev_server_connecting"))}</span>`;

    let payload;
    if (useSolution) {
      payload = { blanks: Object.fromEntries(lesson.blanks.map((b) => [b.id, b.solution])) };
    } else {
      const mode = store.mode[lesson.id] || "puzzle";
      if (mode === "free") {
        const editor = document.getElementById("free-editor");
        payload = { code: editor ? editor.value : lesson.starter_runnable };
      } else {
        const draft = (store.drafts[lesson.id] || {}).blanks || {};
        const blanks = {};
        lesson.blanks.forEach((b) => {
          blanks[b.id] = draft[b.id] !== undefined ? draft[b.id] : b.starter;
        });
        payload = { blanks };
      }
    }

    try {
      const response = await fetch(`/api/check?lesson=${encodeURIComponent(lesson.id)}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      applyResult(lesson, result);
    } catch (err) {
      statusMount.innerHTML = `<div class="status-card is-fail"><div class="status-card__headline"><span class="status-dot status-dot--fail"></span>${escapeHtml(t("app.dev_server_error"))}</div><div style="margin-top:4px;color:var(--text-muted);font-size:12px">${escapeHtml(String(err))}.</div></div>`;
    }
  }

  function applyResult(lesson, result) {
    const statusMount = document.getElementById("status-mount");
    const resultsMount = document.getElementById("results-mount");
    const stdoutMount = document.getElementById("stdout-mount");

    if (result.error) {
      statusMount.innerHTML = `
        <div class="status-card is-fail">
          <div class="status-card__headline"><span class="status-dot status-dot--fail"></span>${escapeHtml(result.error)}</div>
          <pre class="stdout" style="margin-top:10px;max-height:260px;">${escapeHtml(result.traceback || "")}</pre>
        </div>`;
      resultsMount.innerHTML = "";
      stdoutMount.textContent = result.stdout || "";
      return;
    }

    const summary = result.summary || { passed: 0, total: 0 };
    const ok = result.ok;
    if (ok) {
      store.completed[lesson.id] = true;
      saveStore();
      updateProgress();
      const link = document.querySelector(`.lesson-link[data-id="${lesson.id}"]`);
      if (link) {
        link.classList.remove("is-attempted");
        link.classList.add("is-done");
      }
    }

    statusMount.innerHTML = `
      <div class="status-card ${ok ? "is-pass" : "is-fail"}">
        <div class="status-card__headline">
          <span class="status-dot ${ok ? "status-dot--pass" : "status-dot--fail"}"></span>
          ${escapeHtml(ok ? t("inspector.all_pass") : t("inspector.some_fail"))}
          <span style="margin-left:auto;font-family:var(--mono);font-size:12px;color:var(--text-muted)">${summary.passed}/${summary.total}</span>
        </div>
        <div style="margin-top:4px;color:var(--text-muted);font-size:12px;">
          ${escapeHtml(lesson.source_path)}:${lesson.line_start}-${lesson.line_end} · ${result.duration_ms} ms
        </div>
      </div>
    `;

    resultsMount.innerHTML = (result.results || [])
      .map((check, index) => {
        const passed = !!check.passed;
        return `
          <div class="result ${passed ? "is-pass" : "is-fail"} ${passed ? "" : "is-open"}" data-idx="${index}">
            <div class="result__head">
              <span class="result__name">
                <span class="result__badge ${passed ? "pass" : "fail"}">${escapeHtml(passed ? t("inspector.pass") : t("inspector.fail"))}</span>
                ${escapeHtml(check.name)}
              </span>
              <span style="color:var(--text-muted);font-size:11px;">${passed ? "" : escapeHtml(t("inspector.show_diff"))}</span>
            </div>
            <div class="result__body">
              <div class="result__row diff--want"><b>${escapeHtml(t("inspector.expected"))}</b><span>${escapeHtml(check.expected ?? "")}</span></div>
              <div class="result__row diff--got"><b>${escapeHtml(t("inspector.actual"))}</b><span>${escapeHtml(check.actual ?? "")}</span></div>
            </div>
          </div>`;
      })
      .join("");

    resultsMount.querySelectorAll(".result").forEach((el) => {
      el.querySelector(".result__head").addEventListener("click", () => el.classList.toggle("is-open"));
    });

    stdoutMount.textContent = result.stdout || t("inspector.stdout_empty");
  }

  /* ──────────────────────── tiny helpers ──────────────────────── */

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderInline(text) {
    if (text == null) return "";
    const escaped = escapeHtml(text);
    return escaped.replace(/`([^`]+)`/g, (_, m) => `<code>${m}</code>`);
  }

  const PY_KEYWORDS = new Set([
    "False",
    "None",
    "True",
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "nonlocal",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield",
  ]);

  function highlightCode(source) {
    const tokens = [];
    const regex = /(#[^\n]*)|("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"\n]*"|'[^'\n]*')|(\b\d+(\.\d+)?\b)|(\b[A-Za-z_][A-Za-z0-9_]*\b)|([^A-Za-z0-9_"'#])/g;
    let lastIndex = 0;
    let m;
    while ((m = regex.exec(source)) !== null) {
      if (m.index > lastIndex) tokens.push({ t: "txt", v: source.slice(lastIndex, m.index) });
      if (m[1]) tokens.push({ t: "com", v: m[1] });
      else if (m[2]) tokens.push({ t: "str", v: m[2] });
      else if (m[3]) tokens.push({ t: "num", v: m[3] });
      else if (m[5]) tokens.push({ t: "id", v: m[5] });
      else tokens.push({ t: "txt", v: m[6] });
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < source.length) tokens.push({ t: "txt", v: source.slice(lastIndex) });

    return tokens
      .map((tok) => {
        if (tok.t === "com") return `<span class="tok-com">${escapeHtml(tok.v)}</span>`;
        if (tok.t === "str") return `<span class="tok-str">${escapeHtml(tok.v)}</span>`;
        if (tok.t === "num") return `<span class="tok-num">${escapeHtml(tok.v)}</span>`;
        if (tok.t === "id") {
          if (PY_KEYWORDS.has(tok.v)) return `<span class="tok-kw">${tok.v}</span>`;
          if (tok.v === "self") return `<span class="tok-kw">${tok.v}</span>`;
          return tok.v;
        }
        return escapeHtml(tok.v);
      })
      .join("");
  }

  /* ──────────────────────── main render entry ──────────────────────── */

  function renderAll() {
    renderChrome();
    renderHero();
    renderSidebar();
    renderMain();
    updateProgress();
  }

  function boot() {
    applyTheme();
    applyLangToChrome();
    renderAll();

    dom.resetBtn.addEventListener("click", () => {
      if (!confirm(t("app.reset_confirm"))) return;
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    });

    if (dom.langToggle) {
      dom.langToggle.addEventListener("click", () => {
        setLang(lang === "en" ? "zh" : "en");
      });
    }

    if (dom.themeToggle) {
      dom.themeToggle.addEventListener("click", toggleTheme);
    }

    document.addEventListener("keydown", (event) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (target instanceof HTMLElement) {
        const tag = target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable) return;
      }
      const key = event.key.toLowerCase();
      if (key === "t") {
        event.preventDefault();
        toggleTheme();
      } else if (key === "l") {
        event.preventDefault();
        setLang(lang === "en" ? "zh" : "en");
      }
    });
  }

  boot();
})();
