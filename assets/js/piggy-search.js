(() => {
  const hiddenParentId = "hidden-easter-eggs";
  let attempts = 0;

  const configurePiggySearch = () => {
    const ninja = document.querySelector("ninja-keys");

    if (!ninja || !Array.isArray(ninja.data)) {
      return false;
    }

    const piggyAction = ninja.data.find(
      (action) => action.section === "Secrets" && action.id?.startsWith("secrets-"),
    );

    if (!piggyAction) {
      return false;
    }

    ninja.data = ninja.data.map((action) =>
      action === piggyAction
        ? {
            ...action,
            title: "Piggy's Secret Corner",
            keywords: "pig piggy panda 猪 猪猪 彩蛋",
            parent: hiddenParentId,
          }
        : action,
    );

    return true;
  };

  const timer = window.setInterval(() => {
    attempts += 1;

    if (configurePiggySearch() || attempts >= 100) {
      window.clearInterval(timer);
    }
  }, 50);
})();
