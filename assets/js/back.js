// Case study "Back to" link: return to the page the visitor came from on this site.
// Without a same-site referrer (direct visit, shared link, opened from disk) it stays "All work".
(function () {
  var link = document.querySelector('.ed-next a[data-back]');
  if (!link || !document.referrer) return;

  var from;
  try { from = new URL(document.referrer); } catch (e) { return; }
  if (from.origin !== location.origin || from.pathname === location.pathname) return;

  var titles = {
    'workflow-builder': 'Workflow Builder',
    'research-assistant': 'Research Assistant',
    'wealth-series': 'Wealth Series',
    'ta-mobile-app': 'TA mobile app',
    'vama-meetings': 'Vama Meetings',
    'vama-ai': 'Vama AI',
    'ingenico': 'Ingenico merchant app',
    'antlabs': 'ANTlabs dashboard',
    'wicked-wallop': 'The Wicked Wallop'
  };
  var page = from.pathname.replace(/\.html$/, '').replace(/\/$/, '/index');
  var name = page.split('/').pop();
  var label =
    name === 'index' ? 'Home' :
    name === 'projects' ? 'All work' :
    name === 'contact' ? 'Contact' :
    titles[name];
  if (!label) return;

  // opened in a new tab from this site: the page they came from is still open in the other tab,
  // so hide the link (keeping its space so "Next project" stays on the right)
  if (history.length < 2) {
    link.style.visibility = 'hidden';
    link.setAttribute('aria-hidden', 'true');
    link.tabIndex = -1;
    return;
  }

  link.href = from.href;
  link.lastChild.textContent = label;
  // history.back() also restores where they were scrolled to
  link.addEventListener('click', function (e) {
    // cmd/ctrl/shift-clicks open the previous page in a new tab or window as usual
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    history.back();
  });
})();
