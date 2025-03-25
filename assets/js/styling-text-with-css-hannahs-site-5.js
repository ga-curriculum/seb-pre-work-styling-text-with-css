describe('The hover pseudo-class on nav links', function () {
  it('should have a :hover pseudo-class applied to <a> inside <nav>', function () {
    const stylesheets = document.styleSheets;
    let hoverRuleFound = false;

    // Loop through all stylesheets
    for (let i = 0; i < stylesheets.length; i++) {
      try {
        const rules = stylesheets[i].cssRules || stylesheets[i].rules; // Get CSS rules

        // Loop through all CSS rules
        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j];

          // Check if the rule applies to 'nav a:hover'
          if (rule.selectorText && rule.selectorText.includes('nav a:hover')) {
            hoverRuleFound = true;
            break;
          }
        }
      } catch (error) {
        // Some stylesheets (like external ones) may be blocked due to CORS restrictions
        continue;
      }
    }

    if (!hoverRuleFound) {
      fail(
        'No :hover pseudo-class found for <a> inside <nav>. Ensure you have added a hover effect in your CSS using "nav a:hover {}."'
      );
    }

    expect(hoverRuleFound).toBe(true);
  });
});
