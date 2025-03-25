describe('Introduction paragraph and social media icons styling', function () {
  function convertPxToEm(pxValue) {
    return pxValue / 16; // Assuming the browser's default base font size is 16px
  }

  it('should have a <p> element with id="introduction" and font size set to 1.2em', function () {
    const introParagraph = document.querySelector('#introduction');

    if (!introParagraph) {
      fail(
        'No paragraph with id="introduction" found. Make sure you have added id="introduction" to the introduction paragraph.'
      );
    } else {
      const computedStyle = window.getComputedStyle(introParagraph);
      const fontSizePx = parseFloat(computedStyle.fontSize);
      const fontSizeEm = convertPxToEm(fontSizePx);

      expect(fontSizeEm).toBeCloseTo(1.2, 1); // Allows small rounding errors
    }
  });

  it('should have social media <img> elements with class="social" and a size of 30px by 30px', function () {
    const socialImages = document.querySelectorAll('img.social');

    if (socialImages.length === 0) {
      fail(
        'No <img> elements with class="social" found. Make sure each social media <img> has class="social".'
      );
    } else {
      socialImages.forEach((img, index) => {
        const computedStyle = window.getComputedStyle(img);

        expect(computedStyle.width).toBe(
          '30px',
          `The social media <img> at index ${index} should have width set to 30px.`
        );

        expect(computedStyle.height).toBe(
          '30px',
          `The social media <img> at index ${index} should have height set to 30px.`
        );
      });
    }
  });
});
