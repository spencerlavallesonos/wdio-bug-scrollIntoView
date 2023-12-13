import { expect } from '@wdio/globals'

describe("WDIO Bug", () => {
    it(`element.scrollIntoView() still sending status 500`, async () => {
      browser.url('https://sonos.com/en-us/?qa_testing')
      const sonosLogo = $('#left svg')
      const shopButton = $('li[data-testid="nav-item-shop"] a')
      await sonosLogo.waitForDisplayed()
      console.log('Will trigger \"Request failed with status 500\"')
      await shopButton.scrollIntoView()
      await shopButton.click()
      expect(await browser.getTitle()).toBe('Shop All Products | Sonos')
    })
})