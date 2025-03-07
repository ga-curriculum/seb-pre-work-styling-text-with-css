describe('The .nav a styling', function () {
  it('should have links inside .nav (including nested) with no underline, white text, and bold font weight', function () {
    const navLinks = document.querySelectorAll('.nav a, nav a'); // Selects all <a> inside .nav, even if nested

    if (navLinks.length === 0) {
      fail(
        'No <a> elements found inside the .nav container. Ensure your navigation links are inside the .nav element, even if inside a <ul>.'
      );
      return;
    }

    navLinks.forEach((link) => {
      const computedStyle = window.getComputedStyle(link);

      // Check for text-decoration (Some browsers may return 'none solid rgb(x,x,x)')
      const textDecoration =
        computedStyle.textDecoration || computedStyle.textDecorationLine;

      expect(textDecoration.includes('none')).toBe(
        true,
        'The links inside .nav should have text-decoration set to none (no underline).'
      );

      // Normalize color for case sensitivity issues
      expect(computedStyle.color.replace(/\s/g, '')).toBe(
        'rgb(255,255,255)',
        'The links inside .nav should have color #ffffff (rgb(255, 255, 255)).'
      );

      // Handle font-weight inconsistencies
      const fontWeight = computedStyle.fontWeight;
      const numericFontWeight = parseInt(fontWeight, 10);

      expect(numericFontWeight).toBeGreaterThanOrEqual(
        600, // Some browsers interpret "bold" as 600 instead of 700
        'The links inside .nav should have bold text (font-weight of at least 600).'
      );
    });
  });
});
