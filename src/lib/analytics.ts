/**
 * Analytics utility for tracking events
 */

export const trackPurchaseEvent = (packageName?: string, price?: string) => {
  // Console tracking for debugging
  console.log(`[Analytics] Purchase event tracked: ${packageName || 'WhatsApp Inquiry'} - ${price || 'N/A'}`);

  // Check if we are in a browser environment
  if (typeof window === 'undefined') return;

  // Facebook Pixel Tracking
  if ((window as any).fbq) {
    try {
      (window as any).fbq('track', 'Purchase', {
        content_name: packageName || 'WhatsApp Inquiry',
        value: price ? parseFloat(price.replace(/[^0-9]/g, '')) : 0,
        currency: 'IDR'
      });
    } catch (e) {
      console.error('Error tracking Facebook Purchase event:', e);
    }
  }

  // Google Analytics (gtag.js) Tracking
  if ((window as any).gtag) {
    try {
      (window as any).gtag('event', 'purchase', {
        transaction_id: `wa_${Date.now()}`,
        value: price ? parseFloat(price.replace(/[^0-9]/g, '')) : 0,
        currency: 'IDR',
        items: [{
          item_name: packageName || 'WhatsApp Inquiry',
          price: price ? parseFloat(price.replace(/[^0-9]/g, '')) : 0
        }]
      });
    } catch (e) {
      console.error('Error tracking Google Analytics purchase event:', e);
    }
  }
  
  // TikTok Pixel Tracking
  if ((window as any).ttq) {
    try {
      (window as any).ttq.track('CompletePayment', {
        content_name: packageName || 'WhatsApp Inquiry',
        value: price ? parseFloat(price.replace(/[^0-9]/g, '')) : 0,
        currency: 'IDR'
      });
    } catch (e) {
      console.error('Error tracking TikTok CompletePayment event:', e);
    }
  }
};
