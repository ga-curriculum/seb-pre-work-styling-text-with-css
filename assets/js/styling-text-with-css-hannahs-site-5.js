describe('The hover effect on nav links', function () {
  it('should change the text color of <a> inside <nav> on hover', function (done) {
    const navLink = document.querySelector('nav a');

    if (!navLink) {
      fail(
        'No <a> elements found inside a <nav>. Make sure you have added links inside the <nav> element.'
      );
      done();
      return;
    }

    // Get the default color before hover
    const defaultColor = window.getComputedStyle(navLink).color;

    // Simulate hover effect
    navLink.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

    setTimeout(() => {
      const hoverColor = window.getComputedStyle(navLink).color;

      if (hoverColor === defaultColor) {
        fail(
          'The <a> links inside <nav> should change color when hovered. Make sure you have set a hover state.'
        );
      } else {
        expect(hoverColor).not.toBe(
          defaultColor,
          'The <a> links inside <nav> should change color when hovered.'
        );
      }

      done();
    }, 100); // Allow time for hover effect to apply
  });
});
