describe('The .nav a styling', function () {
  it('should have links inside .nav with no underline, white text, and bold font weight', function () {
    const navLinks = document.querySelectorAll('.nav a');

    if (navLinks.length === 0) {
      fail(
        'No <a> elements found inside a .nav container. Ensure you have added links inside a .nav element.'
      );
    } else {
      navLinks.forEach((link) => {
        const computedStyle = window.getComputedStyle(link);

        expect(computedStyle.textDecoration).toBe(
          'none',
          'The links inside .nav should have text-decoration set to none (no underline).'
        );

        expect(computedStyle.color).toBe(
          'rgb(255, 255, 255)',
          'The links inside .nav should have color #ffffff (rgb(255, 255, 255)).'
        );

        expect(computedStyle.fontWeight).toBe(
          '700',
          'The links inside .nav should have bold text (font-weight: bold or 700).'
        );
      });
    }
  });
});
