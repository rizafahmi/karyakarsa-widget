(function() {
  const script = document.querySelector('script');
  const { src } = script.dataset;
  const config = {
    src
  };
  const template = `
  <a href="javascript:;">Link</a>
  `;
  const a = document.createElement('a');
  a.href = 'javascript:;';
  a.title = 'Tooltip';
  a.alt = 'alt text';
  a.style =
    'position:fixed;width:60px;height:60px;right:40px;background-color:#FFF;border-radius:50px;text-align:center;box-shadow:2px 2px 3px #999;font-size:2em;bottom:18px;text-decoration:none;display:flex;justify-content:center;align-items:center;';
  const title = document.createTextNode('☕');
  a.appendChild(title);

  const iframe = document.createElement('iframe');
  iframe.src = 'about:blank';
  iframe.style =
    'background-color: rgb(255, 255, 255); position: fixed; margin: 0px; padding: 0px; right: 18px; bottom: 98px; width: 400px; max-width: 500px; height: calc(100% - 140px); box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 16px; z-index: 999;border:transparent;border-radius:3px;visibility:hidden;';

  a.addEventListener('click', function(e) {
    e.preventDefault();
    const { visibility } = iframe.style;
    if (visibility !== 'visible') {
      iframe.src = src;
      iframe.style.visibility = 'visible';
      const title = document.createTextNode('x');
      this.innerText = '❌';
    } else {
      iframe.style.visibility = 'hidden';
      this.innerText = '☕';
    }
  });

  document.body.appendChild(a);
  document.body.appendChild(iframe);
})();
