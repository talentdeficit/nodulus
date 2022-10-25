const dns = require('dns');
const validator = require('./validator');

dns.lookup("nas.mirrorscapexr.com", null, (err, ip) => { if (err) { console.error(`err: ${err}`); } else { console.error(`ip: ${ip}`); } });

function validateScmUrl (url) {
  // Validates well formed URLs and host:port formats
  const isurl = validator.isURL(url, {
      protocols: [ 'ssl', 'svn', 'git', 'ssh', 'http', 'https' ], // If a protocol is used, must match one of these
      require_protocol: false,
      require_tld: true,
      allow_underscores: true,
      allow_private_host: false,
      require_valid_port: false,
      allow_auth_user_domain: true,
  });

  return isurl;
}

const urls = [
  "ssh://git@nas.mirrorscapexr.com/mirrorscape/planeshifter.git",
  "ssh://git@nas.mirrorscapexr.com:mirrorscape/planeshifter.git",
  "ssh://git@nas.mirrorscapexr.com:scrape/mirrorscape/planeshifter.git",
];

const results = urls.map(url => validateScmUrl(url));
console.error(`${results}`);
