/**
 * Analytics utility for tracking events
 */

export const trackPurchaseEvent = (packageName?: string, price?: string) => {
  // Console tracking for debugging
  console.log(`[Analytics] Purchase event tracked: ${packageName || 'WhatsApp Inquiry'} - ${price || 'N/A'}`);

  // Check if we are in a browser environment
  if (typeof window === 'undefined') return;

  // Ensure dataLayer exists
  (window as any).dataLayer = (window as any).dataLayer || [];

  // GTM DataLayer
  (window as any).dataLayer.push({
    event: 'CTWA',
    package_name: packageName || 'WhatsApp Inquiry',
    package_price: price || 'N/A',
    timestamp: new Date().toISOString()
  });

  console.log('[Analytics] GTM Event "CTWA" pushed to dataLayer');

  // Facebook Pixel Tracking
  if ((window as any).fbq) {
    console.log('[Analytics] Facebook Pixel (fbq) found, sending events...');
    try {
      // Send Purchase event
      (window as any).fbq('track', 'Purchase', {
        content_name: packageName || 'WhatsApp Inquiry',
        value: price ? parseFloat(price.replace(/[^0-9]/g, '')) : 0,
        currency: 'IDR'
      });
      
      // Also send Contact and Lead events as they are more reliable for WhatsApp clicks
      (window as any).fbq('track', 'Contact', {
        content_name: packageName || 'WhatsApp Inquiry'
      });
      
      (window as any).fbq('track', 'Lead', {
        content_name: packageName || 'WhatsApp Inquiry'
      });
      
      console.log('[Analytics] Facebook Pixel events (Purchase, Contact, Lead) sent successfully.');
    } catch (e) {
      console.error('Error tracking Facebook events:', e);
    }
  } else {
    console.warn('[Analytics] Facebook Pixel (fbq) NOT found. Make sure the script is loaded and not blocked by an ad blocker.');
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

export const trackContactEvent = (method: string, details?: string) => {
  console.log(`[Analytics] Contact event tracked: ${method} - ${details || 'N/A'}`);

  if (typeof window === 'undefined') return;

  // Ensure dataLayer exists
  (window as any).dataLayer = (window as any).dataLayer || [];

  // GTM DataLayer
  (window as any).dataLayer.push({
    event: 'contact',
    contact_method: method,
    contact_details: details || 'N/A',
    timestamp: new Date().toISOString()
  });

  console.log('[Analytics] GTM Event "contact" pushed to dataLayer');

  // Facebook Pixel
  if ((window as any).fbq) {
    (window as any).fbq('track', 'Contact', {
      content_category: method,
      content_name: details || 'N/A'
    });
  }

  // Google Analytics
  if ((window as any).gtag) {
    (window as any).gtag('event', 'contact', {
      method: method,
      details: details || 'N/A'
    });
  }
};
