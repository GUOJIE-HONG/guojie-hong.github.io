(() => {
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  // Hero route: draw GJ01 → current station, then blink the next-station lamp.
  const route = document.querySelector(".route");
  if (route && motionOK) route.classList.add("is-run");

  // Minimap: the train marker rides to the station of the section in view.
  const nav = document.querySelector(".minimap");
  if (!nav) return;

  const links = [...nav.querySelectorAll("a[data-stop]")];
  const train = nav.querySelector(".minimap__train");
  const nowLabel = nav.querySelector("[data-now]");
  const toggle = nav.querySelector(".minimap__toggle");
  let current = null;

  const placeTrain = () => {
    const active = links.find((a) => a.dataset.stop === current);
    if (!active || !train || train.offsetParent === null) return;
    const dot = active.querySelector(".minimap__dot").getBoundingClientRect();
    const box = nav.getBoundingClientRect();
    const x = dot.left + dot.width / 2 - box.left - train.offsetWidth / 2;
    train.style.setProperty("--train-x", `${Math.round(x)}px`);
  };

  const setCurrent = (id) => {
    if (id === current) return;
    current = id;
    links.forEach((a) => {
      if (a.dataset.stop === id) {
        a.setAttribute("aria-current", "true");
        nowLabel.textContent = a.querySelector(".minimap__label").textContent;
      } else {
        a.removeAttribute("aria-current");
      }
    });
    placeTrain();
  };

  const sections = [...document.querySelectorAll("[data-section]")];
  const atBottom = () =>
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

  const observer = new IntersectionObserver(
    (entries) => {
      if (atBottom()) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(entry.target.dataset.section);
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((section) => observer.observe(section));

  // The last station is short; it may never reach the observer's band.
  window.addEventListener(
    "scroll",
    () => {
      if (atBottom()) setCurrent("GJ05");
    },
    { passive: true }
  );

  setCurrent("top");
  window.addEventListener("resize", placeTrain);
  document.fonts?.ready.then(placeTrain);

  // Small screens: the route list opens from the toggle.
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  links.forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });
})();
