(() => {
  const hiddenParentId = "hidden-easter-eggs";
  const trigger = "pig";
  let attempts = 0;

  const configurePiggySearch = () => {
    const ninja = document.querySelector("ninja-keys");

    if (!ninja || !Array.isArray(ninja.data) || ninja.dataset.piggySearchConfigured) {
      return false;
    }

    const piggyAction = ninja.data.find(
      (action) => action.section === "Secrets" && action.id?.startsWith("secrets-"),
    );

    if (!piggyAction) {
      return false;
    }

    const searchablePiggyAction = {
      ...piggyAction,
      title: trigger,
      description: "",
      keywords: trigger,
      parent: hiddenParentId,
    };

    const removePiggyAction = () => {
      if (ninja.data.some((action) => action.id === searchablePiggyAction.id)) {
        ninja.data = ninja.data.filter((action) => action.id !== searchablePiggyAction.id);
      }
    };

    const updatePiggyAction = (search) => {
      const shouldShow = search.trim().toLowerCase() === trigger;
      const isPresent = ninja.data.some((action) => action.id === searchablePiggyAction.id);

      if (shouldShow && !isPresent) {
        ninja.data = [...ninja.data, searchablePiggyAction];
      } else if (!shouldShow && isPresent) {
        removePiggyAction();
      }
    };

    ninja.dataset.piggySearchConfigured = "true";
    ninja.addEventListener("change", (event) => updatePiggyAction(event.detail.search));
    removePiggyAction();

    return true;
  };

  const timer = window.setInterval(() => {
    attempts += 1;

    if (configurePiggySearch() || attempts >= 100) {
      window.clearInterval(timer);
    }
  }, 50);
})();
