describe('Google Font Import and Body Font Styling', function () {
  it('should import the "Raleway" font from Google Fonts', function () {
    const link = document.querySelector('link[href*="fonts.googleapis.com"]');

    if (!link) {
      fail(
        'No Google Fonts import found. Make sure you have imported "Raleway" using @import or a <link> tag.'
      );
    } else {
      expect(link.href.includes('Raleway')).toBe(
        true,
        'The Google Fonts import should include "Raleway". Make sure you are importing the correct font.'
      );
    }
  });

  it('should set the body font to "Raleway", sans-serif', function () {
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);

    expect(computedStyle.fontFamily.includes('Raleway')).toBe(
      true,
      'The body should use "Raleway" as the font-family. Ensure you have applied "Raleway", sans-serif to the body.'
    );
  });
});
