import { buildPortalArticleURL, buildPortalURL } from '../portalHelper';

describe('PortalHelper', () => {
  describe('buildPortalURL', () => {
    it('returns the correct url', () => {
      window.chatwootConfig = {
        hostURL: 'https://app.virtuacrm.com',
        helpCenterURL: 'https://help.virtuacrm.com',
      };
      expect(buildPortalURL('handbook')).toEqual(
        'https://help.virtuacrm.com/hc/handbook'
      );
      window.chatwootConfig = {};
    });
  });

  describe('buildPortalArticleURL', () => {
    it('returns the correct url', () => {
      window.chatwootConfig = {
        hostURL: 'https://app.virtuacrm.com',
        helpCenterURL: 'https://help.virtuacrm.com',
      };
      expect(
        buildPortalArticleURL('handbook', 'culture', 'fr', 'article-slug')
      ).toEqual('https://help.virtuacrm.com/hc/handbook/articles/article-slug');
      window.chatwootConfig = {};
    });
  });
});
