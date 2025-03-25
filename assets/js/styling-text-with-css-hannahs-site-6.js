describe('The list styling inside <nav> and <footer>', function () {
  it('should remove bullet points from the <ul> inside <nav>', function () {
    const navUl = document.querySelector('nav ul');

    if (!navUl) {
      fail(
        'No <ul> element found inside <nav>. Make sure you have added a <ul> inside the <nav>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(navUl);

      expect(computedStyle.listStyleType).toBe(
        'none',
        'The <ul> inside <nav> should have list-style set to none (no bullet points).'
      );
    }
  });

  it('should remove bullet points from the <ul> inside <footer>', function () {
    const footerUl = document.querySelector('footer ul');

    if (!footerUl) {
      fail(
        'No <ul> element found inside <footer>. Make sure you have added a <ul> inside the <footer>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(footerUl);

      expect(computedStyle.listStyleType).toBe(
        'none',
        'The <ul> inside <footer> should have list-style set to none (no bullet points).'
      );
    }
  });
});
