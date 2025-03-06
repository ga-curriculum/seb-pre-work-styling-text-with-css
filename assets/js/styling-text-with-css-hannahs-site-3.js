describe('Heading and span styling', function () {
  it('should style the <h1> with a font size of 2.5em', function () {
    const h1 = document.querySelector('h1');

    if (!h1) {
      fail(
        'No <h1> element found. Make sure you have added an <h1> to your HTML.'
      );
    } else {
      const computedStyle = window.getComputedStyle(h1);

      expect(computedStyle.fontSize).toBe(
        '2.5em',
        'The <h1> font size should be 2.5em.'
      );
    }
  });

  it('should style the <h2> with a font size of 1.8em', function () {
    const h2 = document.querySelector('h2');

    if (!h2) {
      fail(
        'No <h2> element found. Make sure you have added an <h2> to your HTML.'
      );
    } else {
      const computedStyle = window.getComputedStyle(h2);

      expect(computedStyle.fontSize).toBe(
        '1.8em',
        'The <h2> font size should be 1.8em.'
      );
    }
  });

  it('should style the <span> inside a paragraph with bold font and burnt orange color', function () {
    const span = document.querySelector('p span');

    if (!span) {
      fail(
        'No <span> found inside a paragraph. Make sure you have wrapped the correct text in a <span>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(span);

      expect(computedStyle.fontWeight).toBe(
        '700',
        'The <span> inside the paragraph should have bold text (font-weight: bold or 700).'
      );

      expect(computedStyle.color).toBe(
        'rgb(211, 84, 0)',
        'The <span> inside the paragraph should have the color #d35400 (burnt orange, rgb(211, 84, 0)).'
      );
    }
  });
});
