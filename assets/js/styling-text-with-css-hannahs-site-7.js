describe('Body Font Styling', function () {
  it('should set the body font to "Raleway", sans-serif', function () {
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);

    const isRalewayApplied = computedStyle.fontFamily
      .toLowerCase()
      .includes('raleway');

    if (!isRalewayApplied) {
      fail(
        'The body should use "Raleway" as the font-family. Ensure you have applied "Raleway", sans-serif to the body in your CSS.\n\n❗ Also, make sure you have imported the font using @import in your CSS.'
      );
    }

    expect(isRalewayApplied).toBe(true);
  });
});
