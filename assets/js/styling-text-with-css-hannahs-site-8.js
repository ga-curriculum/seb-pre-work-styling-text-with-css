describe('Introduction paragraph and social media icons styling', function () {
  it('should have an <p> element with id="introduction" and font size set to 1.2em', function () {
    const introParagraph = document.querySelector('#introduction');

    if (!introParagraph) {
      fail(
        'No paragraph with id="introduction" found. Make sure you have added id="introduction" to the introduction paragraph.'
      );
    } else {
      const computedStyle = window.getComputedStyle(introParagraph);

      expect(computedStyle.fontSize).toBe(
        '1.2em',
        'The introduction paragraph (#introduction) should have font-size set to 1.2em.'
      );
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
