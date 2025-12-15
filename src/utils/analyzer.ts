export const detectTechStack = (): string[] => {
  const detectedTech: string[] = [];
  
  // Enhanced detection methods
  const detectByScriptSources = () => {
    const scripts = Array.from(document.scripts);
    scripts.forEach(script => {
      const src = script.src || script.innerHTML || '';
      
      // React detection (multiple methods)
      if (src.includes('react') || src.includes('React') || 
          src.includes('react-dom') ||
          src.includes('ReactDOM') ||
          document.querySelector('[data-reactroot]') ||
          document.querySelector('#root')?.hasAttribute('data-reactroot') ||
          (window as any).React || (window as any).ReactDOM) {
        if (!detectedTech.includes('React')) detectedTech.push('React');
      }
      
      // Vue detection
      if (src.includes('vue') || src.includes('Vue') ||
          src.includes('vue.min.js') ||
          document.querySelector('[data-v-]') ||
          document.querySelector('[data-v-app]') ||
          (document.querySelector('#app') as any)?.__vue__ ||
          (window as any).Vue) {
        if (!detectedTech.includes('Vue.js')) detectedTech.push('Vue.js');
      }
      
      // Angular detection
      if (src.includes('angular') || src.includes('ng-') ||
          src.includes('angular.min.js') ||
          document.querySelector('[ng-app]') ||
          document.querySelector('[ng-controller]') ||
          document.querySelector('[ng-model]') ||
          (window as any).ng || (window as any).angular) {
        if (!detectedTech.includes('Angular')) detectedTech.push('Angular');
      }
      
      // Next.js detection
      if (src.includes('next') || src.includes('_next') ||
          src.includes('next/dist') ||
          document.querySelector('[data-next-route]') ||
          (window as any).__NEXT_DATA__) {
        if (!detectedTech.includes('Next.js')) detectedTech.push('Next.js');
      }
      
      // jQuery detection
      if (src.includes('jquery') || src.includes('jQuery') ||
          src.includes('jquery.min.js') ||
          (window as any).jQuery || (window as any).$) {
        if (!detectedTech.includes('jQuery')) detectedTech.push('jQuery');
      }
      
      // Bootstrap detection
      if (src.includes('bootstrap') || 
          src.includes('bootstrap.min.js') ||
          document.querySelector('.btn')?.classList.contains('btn') ||
          document.querySelector('[data-bs-toggle]') ||
          (window as any).bootstrap) {
        if (!detectedTech.includes('Bootstrap')) detectedTech.push('Bootstrap');
      }
      
      // Tailwind CSS detection
      if (src.includes('tailwind') || src.includes('tailwindcss') ||
          document.querySelector('[class*=\"bg-\"]')?.classList.length && 
          document.querySelector('[class*=\"bg-\"]')!.classList.length > 5) {
        if (!detectedTech.includes('Tailwind CSS')) detectedTech.push('Tailwind CSS');
      }
      
      // Three.js/WebGL detection
      if (src.includes('three') || src.includes('three.min.js') ||
          src.includes('three.js') ||
          (window as any).THREE ||
          document.querySelector('canvas')) {
        if (!detectedTech.includes('Three.js')) detectedTech.push('Three.js');
      }
      
      // GSAP animation library
      if (src.includes('gsap') || src.includes('TweenMax') ||
          src.includes('TimelineMax') ||
          (window as any).gsap || (window as any).TweenMax) {
        if (!detectedTech.includes('GSAP')) detectedTech.push('GSAP');
      }
      
      // Framer Motion
      if (src.includes('framer') || src.includes('motion') ||
          (window as any).framerMotion) {
        if (!detectedTech.includes('Framer Motion')) detectedTech.push('Framer Motion');
      }
      
      // AOS (Animate On Scroll)
      if (src.includes('aos') || src.includes('animate-on-scroll') ||
          (window as any).AOS) {
        if (!detectedTech.includes('AOS')) detectedTech.push('AOS');
      }
      
      // ScrollMagic
      if (src.includes('scrollmagic') || (window as any).ScrollMagic) {
        if (!detectedTech.includes('ScrollMagic')) detectedTech.push('ScrollMagic');
      }
      
      // WebGL/Canvas detection
      if (document.querySelector('canvas') || 
          document.querySelector('webgl') ||
          (window as any).WebGLRenderingContext) {
        if (!detectedTech.includes('WebGL')) detectedTech.push('WebGL');
      }
      
      // Web Components
      if (src.includes('webcomponents') || src.includes('custom-elements') ||
          (window as any).customElements) {
        if (!detectedTech.includes('Web Components')) detectedTech.push('Web Components');
      }
      
      // D3.js
      if (src.includes('d3') || src.includes('d3.min') ||
          (window as any).d3) {
        if (!detectedTech.includes('D3.js')) detectedTech.push('D3.js');
      }
      
      // PixiJS
      if (src.includes('pixi') || src.includes('pixi.min') ||
          (window as any).PIXI) {
        if (!detectedTech.includes('PixiJS')) detectedTech.push('PixiJS');
      }
      
      // P5.js
      if (src.includes('p5') || (window as any).p5) {
        if (!detectedTech.includes('P5.js')) detectedTech.push('P5.js');
      }
      
      // Svelte
      if (src.includes('svelte') || (window as any).SvelteComponent) {
        if (!detectedTech.includes('Svelte')) detectedTech.push('Svelte');
      }
      
      // SolidJS
      if (src.includes('solid') || (window as any).SolidJS) {
        if (!detectedTech.includes('SolidJS')) detectedTech.push('SolidJS');
      }
      
      // Alpine.js
      if (src.includes('alpine') || (window as any).Alpine) {
        if (!detectedTech.includes('Alpine.js')) detectedTech.push('Alpine.js');
      }
      
      // Webpack
      if (src.includes('webpack') || (window as any).__webpack_require__) {
        if (!detectedTech.includes('Webpack')) detectedTech.push('Webpack');
      }
      
      // Parcel
      if (src.includes('parcel') || (window as any).__parcel__) {
        if (!detectedTech.includes('Parcel')) detectedTech.push('Parcel');
      }
      
      // Vite
      if (src.includes('vite') || (window as any).__vite__) {
        if (!detectedTech.includes('Vite')) detectedTech.push('Vite');
      }
    });
  };
  
  const detectByCSSClasses = () => {
    // Check for specific CSS classes that indicate frameworks
    const bodyClasses = document.body.className;
    const allElements = document.querySelectorAll('*');
    
    // Tailwind CSS
    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i];
      if (element.className && typeof element.className === 'string') {
        const classes = element.className.split(' ');
        if (classes.some(c => c.startsWith('bg-') || c.startsWith('text-') || c.startsWith('flex-'))) {
          if (!detectedTech.includes('Tailwind CSS')) detectedTech.push('Tailwind CSS');
          break;
        }
      }
    }
    
    // Bootstrap
    if (bodyClasses.includes('bootstrap') || 
        document.querySelector('.container') ||
        document.querySelector('.navbar') ||
        document.querySelector('.btn-primary')) {
      if (!detectedTech.includes('Bootstrap')) detectedTech.push('Bootstrap');
    }
    
    // Foundation
    if (bodyClasses.includes('foundation') || 
        document.querySelector('.grid-container') ||
        document.querySelector('.top-bar')) {
      if (!detectedTech.includes('Foundation')) detectedTech.push('Foundation');
    }
    
    // Bulma
    if (bodyClasses.includes('bulma') || 
        document.querySelector('.is-primary') ||
        document.querySelector('.hero')) {
      if (!detectedTech.includes('Bulma')) detectedTech.push('Bulma');
    }
    
    // Material UI
    if (bodyClasses.includes('material') || 
        document.querySelector('.mdl-js') ||
        document.querySelector('.material-icons')) {
      if (!detectedTech.includes('Material UI')) detectedTech.push('Material UI');
    }
    
    // Ant Design
    if (bodyClasses.includes('ant') || 
        document.querySelector('.ant-btn') ||
        document.querySelector('.ant-menu')) {
      if (!detectedTech.includes('Ant Design')) detectedTech.push('Ant Design');
    }
  };
  
  const detectByGlobalVariables = () => {
    // Check for global variables that indicate frameworks
    const globalKeys = Object.keys(window);
    
    // React
    if (globalKeys.includes('React') || globalKeys.includes('ReactDOM')) {
      if (!detectedTech.includes('React')) detectedTech.push('React');
    }
    
    // Vue
    if (globalKeys.includes('Vue') || globalKeys.includes('Vuex')) {
      if (!detectedTech.includes('Vue.js')) detectedTech.push('Vue.js');
    }
    
    // Angular
    if (globalKeys.includes('angular') || globalKeys.includes('ng')) {
      if (!detectedTech.includes('Angular')) detectedTech.push('Angular');
    }
    
    // jQuery
    if (globalKeys.includes('$') || globalKeys.includes('jQuery')) {
      if (!detectedTech.includes('jQuery')) detectedTech.push('jQuery');
    }
    
    // Three.js
    if (globalKeys.includes('THREE') || globalKeys.includes('THREEx')) {
      if (!detectedTech.includes('Three.js')) detectedTech.push('Three.js');
    }
    
    // GSAP
    if (globalKeys.includes('gsap') || globalKeys.includes('TweenMax') || globalKeys.includes('TimelineMax')) {
      if (!detectedTech.includes('GSAP')) detectedTech.push('GSAP');
    }
    
    // D3.js
    if (globalKeys.includes('d3')) {
      if (!detectedTech.includes('D3.js')) detectedTech.push('D3.js');
    }
  };
  
  const detectByMetaTags = () => {
    // Check meta tags for generators
    const generator = document.querySelector('meta[name=\"generator\"]')?.getAttribute('content');
    if (generator) {
      if (generator.includes('WordPress')) detectedTech.push('WordPress');
      if (generator.includes('Shopify')) detectedTech.push('Shopify');
      if (generator.includes('Wix')) detectedTech.push('Wix');
      if (generator.includes('Squarespace')) detectedTech.push('Squarespace');
      if (generator.includes('Webflow')) detectedTech.push('Webflow');
      if (generator.includes('Framer')) detectedTech.push('Framer');
      if (generator.includes('Ghost')) detectedTech.push('Ghost');
      if (generator.includes('Joomla')) detectedTech.push('Joomla');
      if (generator.includes('Drupal')) detectedTech.push('Drupal');
    }
    
    // Check for specific meta tags
    const viewport = document.querySelector('meta[name=\"viewport\"]');
    const themeColor = document.querySelector('meta[name=\"theme-color\"]');
    
    // PWA detection
    if (document.querySelector('link[rel=\"manifest\"]') || 
        document.querySelector('meta[name=\"apple-mobile-web-app-capable\"]')) {
      if (!detectedTech.includes('PWA')) detectedTech.push('PWA');
    }
  };
  
  const detectByHTMLStructure = () => {
    // Check for specific HTML structures that indicate frameworks
    
    // React
    if (document.querySelector('#root') || document.querySelector('[data-reactroot]')) {
      if (!detectedTech.includes('React')) detectedTech.push('React');
    }
    
    // Vue
    if (document.querySelector('#app') || document.querySelector('[data-v-app]')) {
      if (!detectedTech.includes('Vue.js')) detectedTech.push('Vue.js');
    }
    
    // Angular
    if (document.querySelector('[ng-app]') || document.querySelector('[ng-controller]')) {
      if (!detectedTech.includes('Angular')) detectedTech.push('Angular');
    }
    
    // Ember
    if (document.querySelector('.ember-view') || (window as any).Ember) {
      if (!detectedTech.includes('Ember.js')) detectedTech.push('Ember.js');
    }
    
    // Backbone
    if ((window as any).Backbone) {
      if (!detectedTech.includes('Backbone.js')) detectedTech.push('Backbone.js');
    }
    
    // Knockout
    if ((window as any).ko) {
      if (!detectedTech.includes('Knockout.js')) detectedTech.push('Knockout.js');
    }
    
    // Check for WebGL/Canvas
    if (document.querySelector('canvas')) {
      if (!detectedTech.includes('Canvas')) detectedTech.push('Canvas');
      
      // Check for WebGL context
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl && !detectedTech.includes('WebGL')) {
          detectedTech.push('WebGL');
        }
      }
    }
    
    // Check for SVG animations
    if (document.querySelector('svg') || document.querySelector('[class*=\"svg-\"]')) {
      if (!detectedTech.includes('SVG Animation')) detectedTech.push('SVG Animation');
    }
    
    // Check for CSS animations
    const styleSheets = Array.from(document.styleSheets);
    let hasComplexAnimations = false;
    
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const rules = styleSheets[i].cssRules || styleSheets[i].rules;
        if (rules) {
          for (let j = 0; j < rules.length; j++) {
            const rule = rules[j] as any;
            if (rule.style && (
              rule.style.animation || 
              rule.style.transform || 
              rule.style.transition)) {
              hasComplexAnimations = true;
              break;
            }
          }
        }
      } catch (e) {
        // Cross-origin stylesheets might throw errors
      }
      if (hasComplexAnimations) break;
    }
    
    if (hasComplexAnimations && !detectedTech.includes('CSS Animations')) {
      detectedTech.push('CSS Animations');
    }
  };
  
  // Run all detection methods
  detectByScriptSources();
  detectByCSSClasses();
  detectByGlobalVariables();
  detectByMetaTags();
  detectByHTMLStructure();
  
  // Remove duplicates and limit to 15 items
  return [...new Set(detectedTech)].slice(0, 15);
};

export const getSEOInsights = () => {
  const title = document.title || '';
  
  const description = document.querySelector('meta[name=\"description\"]')?.getAttribute('content') || 
                     document.querySelector('meta[property=\"og:description\"]')?.getAttribute('content') || '';
  
  const keywords = document.querySelector('meta[name=\"keywords\"]')?.getAttribute('content') || '';
  
  const h1Tags = Array.from(document.querySelectorAll('h1')).map(h => h.textContent?.trim() || '');
  const h2Tags = Array.from(document.querySelectorAll('h2')).map(h => h.textContent?.trim() || '');
  
  const canonical = document.querySelector('link[rel=\"canonical\"]')?.getAttribute('href') || '';
  
  const metaTags = Array.from(document.querySelectorAll('meta[name]')).map(meta => ({
    name: meta.getAttribute('name') || '',
    content: meta.getAttribute('content') || ''
  })).filter(meta => meta.name && meta.content);
  
  return {
    title,
    description,
    keywords,
    h1: h1Tags,
    h2: h2Tags,
    canonical,
    meta: metaTags.slice(0, 5) // Limit meta tags display
  };
};

export const getAccessibilityScore = () => {
  const issues: Array<{ type: string; description: string; element: string }> = [];
  let score = 100;
  
  // Check for alt text on images - improved detection
  const images = document.querySelectorAll('img');
  let totalImages = 0;
  let imagesWithoutAlt = 0;
  let decorativeImages = 0;
  
  images.forEach((img, index) => {
    totalImages++;
    
    // Check if image has alt attribute
    const hasAlt = img.hasAttribute('alt');
    const altValue = img.getAttribute('alt');
    const role = img.getAttribute('role');
    const isDecorative = role === 'presentation' || role === 'none';
    
    // Skip very small images (likely icons/spacers)
    if (img.naturalWidth < 20 || img.naturalHeight < 20) {
      decorativeImages++;
      return;
    }
    
    // Skip images that are purely decorative
    if (isDecorative) {
      decorativeImages++;
      return;
    }
    
    // Check if alt text is meaningful
    if (!hasAlt || altValue === null || altValue === '') {
      imagesWithoutAlt++;
      // Only add to issues list for first 5 images
      if (issues.length < 5) {
        issues.push({
          type: 'Missing Alt Text',
          description: 'Image missing meaningful alt text for screen readers',
          element: img.src ? img.src.split('/').pop()?.substring(0, 30) + '...' : 'img[' + index + ']'
        });
      }
    }
  });
  
  // Deduct points based on percentage of images without alt text
  if (totalImages > 0) {
    const altTextScore = ((totalImages - imagesWithoutAlt - decorativeImages) / totalImages) * 30;
    score -= (30 - altTextScore);
  }
  
  // Check for proper heading structure
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  let headingStructureIssues = 0;
  
  headings.forEach(heading => {
    const level = parseInt(heading.tagName.substring(1));
    if (level > lastLevel + 1) {
      headingStructureIssues++;
      if (issues.length < 10) {
        issues.push({
          type: 'Heading Structure',
          description: 'Heading levels skip numbers (e.g., H1 to H3)',
          element: heading.tagName
        });
      }
    }
    lastLevel = level;
  });
  
  // Deduct points for heading issues
  score -= Math.min(15, headingStructureIssues * 5);
  
  // Check for form labels
  const inputs = document.querySelectorAll('input[type=\"text\"], input[type=\"email\"], textarea, select');
  let inputsWithoutLabels = 0;
  
  inputs.forEach(input => {
    const hasLabel = document.querySelector('label[for=\"' + input.id + '\"]') || 
                    input.getAttribute('aria-label') ||
                    input.getAttribute('title') ||
                    input.getAttribute('aria-labelledby');
    if (!hasLabel) {
      inputsWithoutLabels++;
      if (issues.length < 10) {
        // Type cast to HTMLInputElement to access placeholder
        const inputEl = input as HTMLInputElement;
        issues.push({
          type: 'Missing Form Label',
          description: 'Form input missing associated label',
          element: input.tagName + (inputEl.placeholder ? ' (placeholder: ' + inputEl.placeholder.substring(0, 20) + '...)' : '')
        });
      }
    }
  });
  
  // Deduct points for missing labels
  if (inputs.length > 0) {
    const labelScore = ((inputs.length - inputsWithoutLabels) / inputs.length) * 20;
    score -= (20 - labelScore);
  }
  
  // Check for ARIA landmarks
  const hasMain = document.querySelector('main, [role=\"main\"]');
  const hasNav = document.querySelector('nav, [role=\"navigation\"]');
  const hasHeader = document.querySelector('header, [role=\"banner\"]');
  
  if (!hasMain) {
    issues.push({
      type: 'Missing Landmark',
      description: 'No main landmark found',
      element: 'page'
    });
    score -= 10;
  }
  
  // Bonus points for having good landmarks
  if (hasMain && hasNav && hasHeader) {
    score += 5;
  }
  
  // Check for page language
  const hasLang = document.documentElement.hasAttribute('lang');
  if (!hasLang) {
    issues.push({
      type: 'Missing Language',
      description: 'Page missing language attribute',
      element: 'html'
    });
    score -= 5;
  }
  
  // Ensure score is between 0 and 100
  score = Math.max(0, Math.min(100, Math.round(score)));
  
  // Add summary if no major issues
  if (issues.length === 0 && score >= 90) {
    issues.push({
      type: 'Excellent',
      description: 'Great accessibility! Consider checking color contrast for perfect score.',
      element: 'page'
    });
  }
  
  return {
    score,
    issues: issues.slice(0, 10), // Limit issues display
    summary: {
      totalImages,
      imagesWithoutAlt,
      decorativeImages,
      totalHeadings: headings.length,
      totalInputs: inputs.length,
      inputsWithoutLabels
    }
  };
};

// NEW: Performance Metrics
export const getPerformanceMetrics = () => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const resources = performance.getEntriesByType('resource');
  
  // Calculate page load time
  const loadTime = navigation ? navigation.loadEventEnd - navigation.navigationStart : 0;
  
  // Calculate total resource size
  const totalSize = resources.reduce((acc, resource) => {
    return acc + ((resource as any).transferSize || 0);
  }, 0);
  
  // Count resources by type
  const resourceCount = {
    scripts: resources.filter(r => r.name.includes('.js')).length,
    stylesheets: resources.filter(r => r.name.includes('.css')).length,
    images: resources.filter(r => r.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)).length,
    fonts: resources.filter(r => r.name.match(/\.(woff|woff2|ttf|eot)$/i)).length
  };
  
  // Get DOM complexity
  const domNodes = document.querySelectorAll('*').length;
  const maxDepth = getMaxDOMDepth(document.body);
  
  return {
    loadTime: Math.round(loadTime),
    totalSize: Math.round(totalSize / 1024), // Convert to KB
    resourceCount,
    domNodes,
    maxDepth,
    grade: getPerformanceGrade(loadTime, totalSize, domNodes)
  };
};

// Helper function to get max DOM depth
const getMaxDOMDepth = (element: Element, depth = 0): number => {
  if (element.children.length === 0) return depth;
  return Math.max(...Array.from(element.children).map(child => getMaxDOMDepth(child, depth + 1)));
};

// Helper function to grade performance
const getPerformanceGrade = (loadTime: number, size: number, domNodes: number): string => {
  let score = 100;
  
  // Score based on load time (under 2s is good)
  if (loadTime > 2000) score -= Math.min(40, (loadTime - 2000) / 100);
  else if (loadTime > 1000) score -= (loadTime - 1000) / 100;
  
  // Score based on size (under 1MB is good)
  if (size > 1024) score -= Math.min(30, (size - 1024) / 100);
  else if (size > 512) score -= (size - 512) / 100;
  
  // Score based on DOM nodes (under 1500 is good)
  if (domNodes > 1500) score -= Math.min(30, (domNodes - 1500) / 100);
  else if (domNodes > 1000) score -= (domNodes - 1000) / 100;
  
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

// NEW: Mobile Responsiveness Check
export const getMobileResponsiveness = () => {
  const issues: Array<{ type: string; description: string }> = [];
  let score = 100;
  
  // Check for viewport meta tag
  const viewport = document.querySelector('meta[name=\"viewport\"]');
  if (!viewport) {
    issues.push({
      type: 'Missing Viewport',
      description: 'No viewport meta tag found'
    });
    score -= 30;
  }
  
  // Check for responsive images
  const images = document.querySelectorAll('img');
  const responsiveImages = Array.from(images).filter(img => {
    const hasSrcset = img.hasAttribute('srcset');
    const hasSizes = img.hasAttribute('sizes');
    const hasResponsiveClass = img.className && img.className.includes('img-responsive');
    return hasSrcset || hasSizes || hasResponsiveClass;
  });
  
  if (responsiveImages.length < images.length * 0.5) {
    issues.push({
      type: 'Non-responsive Images',
      description: ${images.length - responsiveImages.length} images lack responsive attributes
    });
    score -= 20;
  }
  
  // Check for media queries in CSS
  const styleSheets = Array.from(document.styleSheets);
  let hasMediaQueries = false;
  
  for (const sheet of styleSheets) {
    try {
      const rules = sheet.cssRules || sheet.rules;
      if (rules) {
        for (const rule of rules) {
          if ((rule as any).media) {
            hasMediaQueries = true;
            break;
          }
        }
      }
    } catch (e) {
      // Cross-origin stylesheets might throw errors
    }
    if (hasMediaQueries) break;
  }
  
  if (!hasMediaQueries) {
    issues.push({
      type: 'No Media Queries',
      description: 'CSS lacks media queries for responsive design'
    });
    score -= 25;
  }
  
  // Check for flexible layouts
  const hasFlexbox = document.querySelector('[style*=\"display: flex\"], [class*=\"flex\"]') !== null;
  const hasGrid = document.querySelector('[style*=\"display: grid\"], [class*=\"grid\"]') !== null;
  
  if (!hasFlexbox && !hasGrid) {
    issues.push({
      type: 'Inflexible Layout',
      description: 'No modern layout systems (Flexbox/Grid) detected'
    });
    score -= 25;
  }
  
  return {
    score: Math.max(0, score),
    issues,
    hasViewport: !!viewport,
    responsiveImageCount: responsiveImages.length,
    totalImages: images.length,
    hasMediaQueries,
    hasModernLayout: hasFlexbox || hasGrid
  };
};

// NEW: Security Headers Analysis
export const getSecurityAnalysis = () => {
  const issues: Array<{ type: string; description: string; severity: 'low' | 'medium' | 'high' }> = [];
  let score = 100;
  
  // Check for HTTPS
  const isHTTPS = location.protocol === 'https:';
  if (!isHTTPS) {
    issues.push({
      type: 'No HTTPS',
      description: 'Site not served over HTTPS',
      severity: 'high'
    });
    score -= 40;
  }
  
  // Check for CSP (Content Security Policy)
  const cspMeta = document.querySelector('meta[http-equiv=\"Content-Security-Policy\"]');
  if (!cspMeta) {
    issues.push({
      type: 'Missing CSP',
      description: 'No Content Security Policy header detected',
      severity: 'medium'
    });
    score -= 20;
  }
  
  // Check for mixed content
  const resources = document.querySelectorAll('img, script, link, iframe');
  const mixedContent = Array.from(resources).filter(resource => {
    const src = (resource as any).src || (resource as any).href;
    return src && src.startsWith('http:') && isHTTPS;
  });
  
  if (mixedContent.length > 0) {
    issues.push({
      type: 'Mixed Content',
      description: ${mixedContent.length} resources loaded over HTTP on HTTPS page,
      severity: 'medium'
    });
    score -= 15;
  }
  
  // Check for insecure forms
  const forms = document.querySelectorAll('form[action]');
  const insecureForms = Array.from(forms).filter(form => {
    const action = form.getAttribute('action');
    return action && action.startsWith('http:');
  });
  
  if (insecureForms.length > 0) {
    issues.push({
      type: 'Insecure Forms',
      description: ${insecureForms.length} forms submit to HTTP endpoints,
      severity: 'high'
    });
    score -= 25;
  }
  
  // Check for external scripts from HTTP
  const scripts = document.querySelectorAll('script[src]');
  const insecureScripts = Array.from(scripts).filter(script => {
    const src = script.getAttribute('src');
    return src && src.startsWith('http:');
  });
  
  if (insecureScripts.length > 0) {
    issues.push({
      type: 'Insecure Scripts',
      description: ${insecureScripts.length} scripts loaded from HTTP endpoints,
      severity: 'high'
    });
    score -= 20;
  }
  
  return {
    score: Math.max(0, score),
    issues,
    isHTTPS,
    hasCSP: !!cspMeta,
    mixedContentCount: mixedContent.length,
    insecureFormCount: insecureForms.length,
    insecureScriptCount: insecureScripts.length
  };
};

// NEW: Social Media Integration Detection
export const getSocialMediaIntegration = () => {
  const integrations: Array<{ platform: string; type: string; found: boolean }> = [];
  
  // Social media platforms to check
  const platforms = [
    { name: 'Facebook', patterns: ['facebook.com', 'fbclid=', 'facebook pixel', 'fbq'] },
    { name: 'Twitter', patterns: ['twitter.com', 't.co', 'twitter-widget', 'twtr'] },
    { name: 'Instagram', patterns: ['instagram.com', 'instagr.am', 'instagram embed'] },
    { name: 'LinkedIn', patterns: ['linkedin.com', 'linkedin-share', 'lnkd.in'] },
    { name: 'YouTube', patterns: ['youtube.com', 'youtu.be', 'youtube-embed', 'ytplayer'] },
    { name: 'TikTok', patterns: ['tiktok.com', 'tiktok-embed', 'tt-embed'] },
    { name: 'Pinterest', patterns: ['pinterest.com', 'pinit.js', 'pinterest-share'] },
    { name: 'Reddit', patterns: ['reddit.com', 'reddit-embed', 'reddit-button'] },
    { name: 'Discord', patterns: ['discord.com', 'discord-widget', 'discord-embed'] },
    { name: 'WhatsApp', patterns: ['wa.me', 'whatsapp', 'whatsapp-share'] }
  ];
  
  // Check in scripts
  const scripts = Array.from(document.scripts);
  const scriptContent = scripts.map(s => s.src + s.innerHTML).join(' ').toLowerCase();
  
  // Check in meta tags
  const metaTags = Array.from(document.querySelectorAll('meta'));
  const metaContent = metaTags.map(m => (m.getAttribute('property') || '') + (m.getAttribute('name') || '') + (m.getAttribute('content') || '')).join(' ').toLowerCase();
  
  // Check in page content
  const pageContent = document.body.innerHTML.toLowerCase();
  
  platforms.forEach(platform => {
    let found = false;
    let type = '';
    
    // Check for different types of integration
    if (platform.patterns.some(pattern => scriptContent.includes(pattern))) {
      found = true;
      type = 'Script Integration';
    }
    
    if (platform.patterns.some(pattern => metaContent.includes(pattern))) {
      found = true;
      type = 'Meta Tag Integration';
    }
    
    if (platform.patterns.some(pattern => pageContent.includes(pattern))) {
      found = true;
      type = 'Content Integration';
    }
    
    // Check for share buttons
    const shareButtons = document.querySelectorAll([class*=""], [data-platform=""]);
    if (shareButtons.length > 0) {
      found = true;
      type = 'Share Buttons';
    }
    
    // Check for embed widgets
    const embedWidgets = document.querySelectorAll(iframe[src*=""], div[class*=""]);
    if (embedWidgets.length > 0) {
      found = true;
      type = 'Embed Widgets';
    }
    
    if (found) {
      integrations.push({
        platform: platform.name,
        type,
        found: true
      });
    }
  });
  
  // Check for general social sharing meta tags
  const ogTags = {
    'og:title': document.querySelector('meta[property="og:title"]'),
    'og:description': document.querySelector('meta[property="og:description"]'),
    'og:image': document.querySelector('meta[property="og:image"]'),
    'og:url': document.querySelector('meta[property="og:url"]'),
    'twitter:card': document.querySelector('meta[name="twitter:card"]'),
    'twitter:title': document.querySelector('meta[name="twitter:title"]'),
    'twitter:description': document.querySelector('meta[name="twitter:description"]'),
    'twitter:image': document.querySelector('meta[name="twitter:image"]')
  };
  
  const hasOpenGraph = Object.values(ogTags).some(tag => tag !== null);
  const hasTwitterCards = Object.keys(ogTags).filter(key => key.startsWith('twitter:')).some(key => ogTags[key as keyof typeof ogTags] !== null);
  
  return {
    integrations,
    totalPlatforms: integrations.length,
    hasOpenGraph,
    hasTwitterCards,
    shareButtonCount: document.querySelectorAll('[class*="share"], [data-share]').length,
    socialScore: Math.min(100, integrations.length * 10)
  };
};
