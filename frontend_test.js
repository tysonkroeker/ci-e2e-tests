Feature('CodecpetJS Demo');

Scenario('check login page @frontend', ({ I }) => {
  I.amOnPage('/');
  I.see('Welcome');
});