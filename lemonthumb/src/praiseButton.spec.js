import PraiseButton from './praiseButton.js';

describe('Thumb test', function () {
    const btn = new PraiseButton();
    btn.like();

    expect(btn.praiseNum).toBe(3);
});